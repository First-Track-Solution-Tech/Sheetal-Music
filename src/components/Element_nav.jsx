import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Element_nav = () => {
  const navigate = useNavigate()
  return (
    <>
     <div className='w-full h-14 flex justify-between items-center px-4 font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt=''/>
            <img onClick={()=>navigate(+1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt=''/>
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[12bg-black py-1 px-3px px-2 rounded-2xl hidden md:block'>Premium Plan</p>
            <p className=' bg-white text-fuchsia-600 w-7 h-7 rounded-full flex items-center justify-center'>S</p>
        </div>
        </div>
        </>
  )
}

export default Element_nav