import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Display_home from './Display_home'

const Music_display = () => {
  return (
    <div className='w-full rounded bg-[#121212] text-white overflow-auto'>
        <Routes>
            <Route path='/' element={<Display_home/>}/>
        </Routes>
    </div>
  )
}

export default Music_display