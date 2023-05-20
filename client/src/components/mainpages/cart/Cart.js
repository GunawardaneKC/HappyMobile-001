import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'
import {PayPalScriptProvider} from "@paypal/react-paypal-js"
import blackCart from '../../headers/icon/cart.svg'

function Cart() {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }

    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const generateOrderId = () => {
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 15);
        const orderId = `${timestamp}-${randomString}`;
        return orderId;
      };
      
      const tranSuccess = async (payment) => {
        const orderId = generateOrderId();
        await axios.post('/api/payment', { 
            cart, 
            orderId 
        }, { 
          headers: { Authorization: token } 
        });
      
        setCart([]);
        addToCart([]);
        alert('You have successfully placed an order.');
      
        window.location = `/delivery-info?orderId=${orderId}`;
      };

    if(cart.length === 0) 
        return (
            <div style={{textAlign: "center", marginTop: "50px"}}>
                <img src={blackCart} alt='BlackCart' style={{display: "block", margin: "0 auto", width: "200px", height: "200px"}}/>
                <h2 style={{fontSize: "3rem", marginTop: "30px", marginBottom: "10px"}}>Your Cart is Empty</h2>
                <p style={{fontSize: "1.5rem", color: "#999"}}>Looks like you haven't added any items to your cart yet.</p>
            </div>
         )

    return (
        <PayPalScriptProvider>
        <div className="grid grid-cols-1 gap-6 mt-8 ml-8 md:grid-cols-2 lg:grid-cols-3 text-zinc-200">
  {cart.map((product) => (
    <div className="w-4/5 h-full p-6 border rounded-lg shadow-lg bg-purple-950 border-red-950" key={product._id}>
      <img src={product.images.url} alt={product.title} className="object-cover w-48 h-48 rounded-md" />

      <div className="mt-4">
        <h2 className="text-3xl font-semibold uppercase">{product.title}</h2>

        <h3 className="text-lg font-medium">LKR {product.price * product.quantity}</h3>
        <p className="my-4 text-cyan-300">{product.description}</p>
        <p className="my-4 text-cyan-300">{product.content}</p>

        <div className="flex items-center mt-4">
          <button className="px-3 py-1 text-2xl font-bold bg-purple-500 rounded-md hover:bg-purple-600 text-neutral-950" onClick={() => decrement(product._id)}>
            -
          </button>
          <span className="mx-2 text-lime-50">{product.quantity}</span>
          <button className="px-3 py-1 text-2xl font-bold bg-purple-500 rounded-md hover:bg-purple-600 text-neutral-950" onClick={() => increment(product._id)}>
            +
          </button>
        </div>

        <div className="mt-4 text-red-500 cursor-pointer hover:underline" onClick={() => removeProduct(product._id)}>
        <i class="fas fa-trash-alt"></i>&nbsp;Delete
        </div>
      </div>
    </div>
  ))}
</div>


<div className="flex flex-col items-center mt-6">
  <h3 className="text-xl font-semibold">Total: LKR {total}</h3>
  <PaypalButton total={total} tranSuccess={tranSuccess} />

  <div>
    <button onClick={() => tranSuccess()} className="px-4 py-2 mt-4 text-white bg-purple-500 rounded-md shadow-lg hover:bg-purple-600">
      Purchase
    </button>
  </div>
</div>
        </PayPalScriptProvider>
    )
}

export default Cart;