import React from 'react'
import Home from '../../Components/Home'
import video from '../../../public/Video/video.mp4';
function Herotext() {
  return (
    <div className='font-[font1] mt-72 lg:mt-0 pt-5 text-center'>
        <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
             L'étincelle
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
        qui
        <div className='h-[8vw] w-[16vw] rounded-full -mt-1 overflow-hidden'>
            <video autoPlay loop muted className='w-full h-full object-cover'>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
        genere
        </div>
        <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
            la creativite
        </div>
    </div>
  )
}

export default Herotext