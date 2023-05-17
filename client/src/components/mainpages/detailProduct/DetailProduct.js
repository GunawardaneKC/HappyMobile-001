import React, {useContext, useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {GlobalState} from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'


function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;

    return (
        <>

        <div className="flex items-center justify-center my-8 ">
  <div className="flex flex-col lg:flex-row bg-purple-950 rounded-lg shadow-lg p-8 w-full lg:w-2/3">
    <div className="lg:w-1/2">
      <img src={detailProduct.images.url} alt="" className="w-full h-auto rounded-lg" />
    </div>
    <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
      <div>
        <h2 className="text-3xl font-bold mb-2">{detailProduct.title}</h2>
        <h6 className="text-gray-100">#id: {detailProduct.product_id}</h6>
      </div>
      <div className="mt-4">
        <span className="text-2xl font-bold text-green-500">LKR {detailProduct.price}</span>
      </div>
      <div className="mt-4">
        <p className="text-gray-100 my-5">{detailProduct.description}</p>
        <p className="text-gray-100 my-5">{detailProduct.content}</p>
        <p className="text-gray-100 my-5">Sold: {detailProduct.sold}</p>
      </div>
      <div className="mt-4">
        <Link
          to="/cart"
          className="inline-block py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => addCart(detailProduct)}
        >
          Buy Now
        </Link>
      </div>
    </div>
  </div>
</div>

            <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailProduct
