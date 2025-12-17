import React from 'react'
import Element_nav from './Element_nav'
import { albumsData } from '../assets/assets'
import Album_cards from './Album_cards'
const Display_home = () => {
  return (
    <>
    <Element_nav/>
   
    <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Featured Songs</h1>
        <div className='flex overflow-auto'>
           {albumsData.map((item, index) => (<Album_cards key={index} name={item.name} desc={item.desc} image={item.image} />))}
   </div>
    </div>
     </>
  )
}

export default Display_home