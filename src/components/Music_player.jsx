import React from 'react';
import {assets, songsData} from '../assets/assets';

const Music_player = () => {
  return (
   <div className="h-24 bg-[#181818] border-t border-neutral-700 flex items-center justify-between px-4">
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12 rounded' src={songsData[0].image} alt=''/>
        
        <div>
            <p className='text-sm font-medium'>{songsData[0].name}</p>
             <p className='text-xs text-gray-400'>{songsData[0].desc.slice(0,12)}</p>
       </div>
    </div>
    < div className='flex flex-col items-center gap-1  mx-auto'>
        <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt=''/>
            <img className='w-4 cursor-pointer' src={assets.prev_icon} alt=''/>
            <img className='w-4 cursor-pointer' src={assets.play_icon} alt=''/>
            <img className='w-4 cursor-pointer' src={assets.next_icon} alt=''/>
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt=''/>
        </div>
        <div className='flex items-center gap-3 text-xs'>
            <p>1:06</p>
            <div className='w-[60vw] max-w-[400px] bg-gray-600 rounded-full cursor-pointer'>
                <hr className='h-1 w-1/3 bg-green-500 rounded-full'/>
            </div>
            <p>3:20</p>
        </div>
    </div>
    <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt=''/>
        <img className='w-4' src={assets.mic_icon} alt=''/>
        <img className='w-4' src={assets.queue_icon} alt=''/>
        <img className='w-4' src={assets.speaker_icon} alt=''/>
        <img className='w-4' src={assets.volume_icon} alt=''/>
        <div className='w-20 bg-slate-50 h-1 rounded'></div>
        <img className='w-4' src={assets.mini_player_icon} alt=''/>
        <img className='w-4' src={assets.zoom_icon} alt=''/>
    </div>
  </div>  
  )
}

export default Music_player