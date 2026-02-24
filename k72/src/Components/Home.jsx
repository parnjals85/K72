import React from 'react'
import video from '../../public/Video/video.mp4';

function Home() {
  return (
    <div className='h-full w-full'>
        <video autoPlay loop muted className='w-full h-screen object-cover'>
            <source src={video} type='video/mp4'/>
        </video>
    </div>
  )
}

export default Home