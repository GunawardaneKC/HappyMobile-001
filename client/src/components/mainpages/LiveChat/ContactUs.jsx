import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../../../variants';
import SupportEngine from './SupportEngine/index';

export default function ContactUs() {
  return (
    <div>
        <motion.div variants={fadeIn('up', 0.5)} initial='hidden' whileInView={'show'} viewport={{once: false, amount:0.3}} className="flex items-center justify-center mt-8">
          <div className="w-2/4 bg-purple-950 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label className="block text-zinc-200 font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-slate-950 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-zinc-200 font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-slate-950 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-zinc-200 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-slate-950 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  id="message"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Submit
                </button>
              </div>
            </form>
          </div>
        
        </motion.div>
        <SupportEngine/>
    </div>
  )
}