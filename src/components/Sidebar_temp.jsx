import React from 'react'
import {assets} from '../assets/assets'
const Sidebar_temp = () => {
  return (
    <div className=' h-full text-white flex flex-col rounded-tr-xl overflow-hidden '>
      <div className='flex items-center justify-between px-4 py-3'>
        <img src={assets.stack_icon} className='w-9 h-9' alt=''/>
        <div className='flex items-center gap-2 text-gray-300 font-semibold '>
          <span>Your Library</span>

        </div>
        <img src={assets.plus_icon} className='w-4 h-4 opacity-70 hover:opacity-100 cursor-pointer'
        alt=''/>
      </div>
      <div className='flex-1 overflow-y-auto px-2 space-y-4 '>

        <div className='bg-[#1f1f1f] rounded-lg p-4'>
          <p className='font-semibold mb-1'>Create your first playlist</p>
          <p className='text-sm text-gray-400 mb-3'>It’s easy, we’ll help you</p>
          <button className='bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:scale-105 transition'>
             Create playlist
          </button>
      </div>
      <div className='bg-[#1f1f1f] rounded-lg p-4'>
        <p className='font-semibold mb-1'> Let’s find some podcasts to follow</p>
        <p className='text-sm text-gray-400 mb-3'> We’ll keep you updated on new episodes</p>
        <button className='bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full hover:scale-105 transition'>
          Browse podcasts
        </button>
      </div>
      </div>
      <div className='px-4 pb-4 text-xs text-gray-400 space-y-3'>
        <div className='flex flex-wrap gap-x-4 gap-y-2'>
          <span className='hover:underline cursor-pointer'>Legal</span>
           <span className='hover:underline cursor-pointer'>Safety & Privacy Center</span>
            <span className='hover:underline cursor-pointer'>Privacy Policy</span>
             <span className='hover:underline cursor-pointer'>Cookies</span>
              <span className='hover:underline cursor-pointer'>About Ads</span>
               <span className='hover:underline cursor-pointer'>Accessibility</span>
          
        </div>
        <button className='flex items-center gap-2 border border-gray-600 rounded-full px-3 py-1.5 text-sm hover:border-white transition'>
          <img src={assets.browser_icon} className='w-4 h-4' alt=''/>
          English
        </button>
      </div>
    </div>
  )
}

export default Sidebar_temp