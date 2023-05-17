import React, {useContext, useState} from 'react';
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productItem/ProductItem';
import Loading from '../utils/loading/Loading';
import axios from 'axios';
import Filters from './Filters';
import LoadMore from './LoadMore';
import {FaGithub, FaYoutube, FaFacebook} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../variants';
import Image from '../../../images/luxuryx-14.svg';
import { Link } from 'react-scroll';


function Products() {
    const state = useContext(GlobalState)
    const [products, setProducts] = state.productsAPI.products
    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token
    const [callback, setCallback] = state.productsAPI.callback
    const [loading, setLoading] = useState(false)
    const [isCheck, setIsCheck] = useState(false)

    const handleCheck = (id) =>{
        products.forEach(product => {
            if(product._id === id) product.checked = !product.checked
        })
        setProducts([...products])
    }

    const deleteProduct = async(id, public_id) => {
        try {
            setLoading(true)
            const destroyImg = axios.post('/api/destroy', {public_id},{
                headers: {Authorization: token}
            })
            const deleteProduct = axios.delete(`/api/products/${id}`, {
                headers: {Authorization: token}
            })

            await destroyImg
            await deleteProduct
            setCallback(!callback)
            setLoading(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    // const checkAll = () =>{
    //     products.forEach(product => {
    //         product.checked = !isCheck
    //     })
    //     setProducts([...products])
    //     setIsCheck(!isCheck)
    // }

    // const deleteAll = () =>{
    //     products.forEach(product => {
    //         if(product.checked) deleteProduct(product._id, product.images.public_id)
    //     })
    // }

    if(loading) return <div><Loading /></div>
    return (
        
        <>
        <div  className='container flex items-center justify-center ml-44'>
        <div className="admin"> 
         <br/><br/>
         <section  className='min-h-[85vh] lg:min-h-[78vh] text-cyan-50' flex items-center id='home'>
        <div className='container mx-auto'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                <div className='flex-1 text-center lg:text-left'>
                    <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='text-5xl lg:text-7xl font-bold leading-tight'>
                        HAPPY <span className='text-accent'>MOBILE</span>
                    </motion.h1>
                    <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='my-8 text-3xl lg:text-4xl font-bold leading-tight'>
                        WE HAVE {' '}
                        <TypeAnimation sequence={['iPhones', 2000, 'iPads', 2000, 'Mac Books', 2000]} speed={50} className='text-accent' wrapper='span' repeat={Infinity} />
                    </motion.div>
                    <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='my-8 max-w-lg mx-auto lg:mx-0'>
                        Happy Mobile is the largest Apple Products Seller in Gampaha and we strive to bring the Apple products and other devices you love closer to you.
                    </motion.p>
                    <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex gap-6 items-center my-12'>
                    <a href={`/contactUs`}><button className='btn btn-lg text-cyan-50 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500'>Contact Us</button></a>
                        <Link to="productsId1" smooth={true} duration={900} className='text-purple-500 text-xl hover:text-red-700'>Our Products</Link>
                    </motion.div>
                    <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false, amount: 0.7}} className='flex text-2xl gap-6 max-w-max mx-auto lg:mx-0'>
                        <a href="https://www.youtube.com/user/SLIITtube" className='text-white hover:text-red-800'>
                        <FaYoutube />
                        </a>
                        <a href="https://github.com/GunawardaneKC/HappyMobile-001/tree/oshStyles" className='text-white hover:text-slate-500'>
                        <FaGithub />
                        </a>
                        <a href="https://www.facebook.com/sliit.lk/" className='text-white hover:text-blue-800'>
                        <FaFacebook />
                        </a>
                    </motion.div>
                </div>

                <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
                    <img src={Image} alt="mainPic" />
                </motion.div>
            </div>
        </div>
    </section>
    </div>
       </div>
        <Filters />
        
        <a className="btn btn-primary" style={{textDecoration:'none'}} href={`/ProR`}>Get Report</a> 

        {/* {
            isAdmin && 
            <div className="delete-all">
                <span>Select all</span>
                <input type="checkbox" checked={isCheck} onChange={checkAll} />
                <button onClick={deleteAll}>Delete ALL</button>
            </div>
        } */}

        <motion.div variants={fadeIn('left', 0.6)} initial="hidden" whileInView={'show'} className="products" id='productsId1'>
            {
                products.map(product => {
                    
                    return ( <ProductItem key={product._id} product={product}
                    isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
                    )
                })
            } 
        </motion.div>

        <LoadMore />
        {products.length === 0 && <Loading />}
        </>
    )
}

export default Products
