import React from 'react'
import Home from '../../Components/Home'
import Herotext from './Herotext'
import Herobottom from './Herobottom'

function Landing() {
  return (
    <div className='text-white'>
      <div className='h-screen w-screen fixed'>
        <Home />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <Herotext />
        <Herobottom />
      </div>   
    </div>
  )
}

export default Landing
