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

    const tranSuccess = async(payment) => {
 
        await axios.post('/api/payment', {cart},
         {headers: {Authorization: token}})

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


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
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src={product.images.url} alt="" />

                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <h3>LKR {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            <p>{product.content}</p>

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }

            <div className="total">
                <h3>Total: LKR {total}</h3>
                <PaypalButton
                total={total}
                tranSuccess={tranSuccess} />

                <div>
                <button onClick={() => tranSuccess()} className="btn btn-success">
                    Purchase
                 </button>
                </div>

            </div>
        </div>
        </PayPalScriptProvider>
    )
}

export default Cart
