import React from 'react';

export default function footer() {
  return (
    <div className='bg-gray-200'>
       <footer className='mt-14'>
          <div className="p-10 bg-gray-800 text-gray-200">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className='mb-5'>
                  <h4 className='text-2xl pb-4'>SHOP</h4>
                  <p className='text-gray-500'>
                    A123 Kandy Road <br />
                    Gampaha, PB-222443 <br />
                    Sri Lanka <br /><br />
                    <strong>Phone: </strong>+94722222222 <br />
                    <strong>Email: </strong>hppymobile@icloud.com <br />
                  </p>
                </div>
                <div className='mb-5'>
                  <h4 className='pb-4'>Useful Links</h4>
                  <ul className='text-gray-500'>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Home</a></li>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> About us</a></li>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Services</a></li>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Terms of Services</a></li>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Privacy Policy</a></li>
                  </ul>                
                </div>
                <div className='mb-5'>
                <h4 className='pb-4'>Our Services</h4>
                  <ul className='text-gray-500'>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Delivering</a></li>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Repairing</a></li>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Warranty</a></li>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Returning</a></li>
                    <li className='pb-4'><i class="fa fa-chevron-right text-purple-700"></i><a href="pop" class="hover:text-yellow-500"> Refunding</a></li>
                  </ul>     
                </div>
                <div className='mb-5'>
                  <h4 className='pb-4'>Join Our Newsletter</h4>
                  <p className='text-gray-500 pb-2'>Join 25,000+ others and never miss out on new tips, tutorials, and more</p>
                  <form className='flex flex-row flex-wrap'>
                    <input type="text" className='text-gray-500 w-2/3 p-2 focus:border-yellow-500' placeholder='email@example.com' />
                    <button className='w-1/3 bg-purple-700 text-white hover:bg-red-700'>Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full bg-gray-900 text-gray-500 px-10'>
            <div className='max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center'>
              <div className='text-center'>
                <div>
                  Copyright <strong><span>Happy Mobile</span></strong>. All Rights Reserved
                </div>
                <div>
                  Designed by <a href="https://web.facebook.com/imantha.oshadha.3" className='text-purple-700 hover:text-yellow-400'>An Undergraduate of SLIIT</a>
                </div>
              </div>
              <div className='text-center text-xl text-white mb-2'>
                <a href="123321" className='w-10 h-10 rounded-full bg-purple-500 hover:bg-blue-500 mx-1 inline-block pt-2'><i class="fa fa-twitter"></i></a>
                <a href="123321" className='w-10 h-10 rounded-full bg-purple-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 mx-1 inline-block pt-2'><i class="fa fa-instagram"></i></a>
                <a href="123321" className='w-10 h-10 rounded-full bg-purple-500 hover:bg-blue-700 mx-1 inline-block pt-2'><i class="fa fa-facebook"></i></a>
                <a href="123321" className='w-10 h-10 rounded-full bg-purple-500 hover:bg-blue-400 mx-1 inline-block pt-2'><i class="fa fa-skype"></i></a>
                <a href="123321" className='w-10 h-10 rounded-full bg-purple-500 hover:bg-blue-900 mx-1 inline-block pt-2'><i class="fa fa-linkedin"></i></a>
              </div>
            </div>
          </div>
       </footer>
    </div>
  )
}