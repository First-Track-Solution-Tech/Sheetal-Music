import React from 'react'
import Element_nav from './Element_nav'
import { albumsData, songsData, aestheticData} from '../assets/assets'
import Album_cards from './Album_cards'
import Song_card from './Song_card'
import Aesthetic_cards from './Aesthetic_cards'
const Display_home = () => {
  return (
    <>
    <Element_nav/>
   <div className='p-6 bg-gradient-to-b from-[#1a082e] to-black'>
    <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Album Trends</h1>
        <div className='flex overflow-auto'>
           {albumsData.map((item, index) => (<Album_cards key={index}  name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
   </div>

</div>       
  <div className='mb-4 '>
        <h1 className='my-5 font-bold text-2xl'>Song Trends</h1>
        <div className='flex overflow-auto'>
{songsData.map((item, index) => (<Song_card key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
        </div>
    </div>
    

    <div className='mb-4'>
          <h1 className='my-5 font-bold text-2xl'>Aesthetic Trends</h1>
          <div className='flex overflow-auto'>
            {aestheticData.map((item) => (<Aesthetic_cards key={item.id} id={item.id} name={item.name} desc={item.desc} image={item.image}/>))}
          </div>
        </div>

      </div>

     </>
  )
}

export default Display_home