import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../variants';
import orderingGif from '../../../images/order.gif';
import deliveryImg from '../../../images/delivery.jpg';
import productImg from '../../../images/ProductImg.jpg';
import repairImg from '../../../images/repairGIF.gif';
import warrantyImg from '../../../images/service-warranty.jpg';
import rentImg from '../../../images/rentingIMG.jpg';
import customerImg from '../../../images/Main-1.gif';
import supplyImg from '../../../images/supply.jpg';
import returnImg from '../../../images/product-return01.png';
import empImg from '../../../images/EmployeeImg.png';

export default function Dashboard() {
  return (
    <div>
        <section className='sectionDASH mt-10' id='work'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div variants={fadeIn('right', 0.3)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}} className='flex-1 flex flex-col gap-y-14 lg:mb-0'>
                        
                        <a href={`/allOrder`}>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={orderingGif} alt="pImg1" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className=' text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-700 bg-clip-text text-transparent'>Order</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-xl'><a href='work'>Management</a></span>
                            </div>
                        </div>
                        </a>                                              
                        <a href={`/all-deliveries`}>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={deliveryImg} alt="pImg1" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className=' text-3xl font-bold bg-gradient-to-r from-yellow-500 to-red-700 bg-clip-text text-transparent'>Delivery</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-xl'><a href='work'>Management</a></span>
                            </div>
                        </div>
                        </a>                                              
                        <a href={`/rentItem`}>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={rentImg} alt="pImg1" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className=' text-3xl font-bold bg-gradient-to-r from-blue-500 to-orange-600 bg-clip-text text-transparent'>Rent</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-xl'><a href='work'>Management</a></span>
                            </div>
                        </div>
                        </a>                                              
                        <a href={`/Supplier`}>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={supplyImg} alt="pImg1" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className=' text-3xl font-bold bg-gradient-to-r from-yellow-500 to-lime-400 bg-clip-text text-transparent'>Supplier</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-xl'><a href='work'>Management</a></span>
                            </div>
                        </div>
                        </a>                                              
                        <a href={`/Emp`}>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={empImg} alt="pImg1" />
                            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className=' text-3xl font-bold bg-gradient-to-r from-purple-700 to-amber-400 bg-clip-text text-transparent'>Employee</span>
                            </div>
                            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-white text-xl'><a href='work'>Management</a></span>
                            </div>
                        </div>
                        </a>                                              
                    </motion.div>
                    <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}} className='flex-1 flex flex-col gap-y-14'>
                        <a href={`/create_product`}>
                           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                               <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                               <img className='group-hover:scale-125 transition-all duration-500' src={productImg} alt="pImg1" />
                               <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                   <span className='text-3xl font-bold bg-gradient-to-r from-yellow-500 to-pink-500 bg-clip-text text-transparent'>Product</span>
                               </div>
                               <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                   <span className='text-white text-xl'><a href='work'>Management</a></span>
                               </div>
                           </div>
                        </a>
                        <a href={`/repair`}>
                           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                               <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                               <img className='group-hover:scale-125 transition-all duration-500' src={repairImg} alt="pImg1" />
                               <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                               <span className='text-3xl font-bold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent'>Repair</span>
                               </div>
                               <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                   <span className='text-white text-xl'><a href='work'>Management</a></span>
                               </div>
                           </div>
                        </a>                                               
                        <a href={`/addedwarranty`}>
                           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                               <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                               <img className='group-hover:scale-125 transition-all duration-500' src={warrantyImg} alt="pImg1" />
                               <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                 <span className='text-3xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent'>Warranty</span>
                               </div>
                               <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                   <span className='text-white text-xl'><a href='work'>Management</a></span>
                               </div>
                           </div>
                        </a>                                               
                        <a href={`/cuswarranty`}>
                           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                               <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                               <img className='group-hover:scale-125 transition-all duration-500' src={customerImg} alt="pImg1" />
                               <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                   <span className='text-3xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent'>Customer</span>
                               </div>
                               <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                   <span className='text-white text-xl'><a href='work'>Management</a></span>
                               </div>
                           </div>
                        </a>                                               
                        <a href={`/returnitems`}>
                           <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl w-200 h-56'>
                               <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                               <img className='group-hover:scale-125 transition-all duration-500' src={returnImg} alt="pImg1" />
                               <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                   <span className='text-3xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent'>Return Items</span>
                               </div>
                               <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                   <span className='text-white text-xl'><a href='work'>Management</a></span>
                               </div>
                           </div>
                        </a>                                               
                    </motion.div>
                </div>
            </div>
        </section>
    </div>
  )
}