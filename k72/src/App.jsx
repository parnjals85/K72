import { useState } from 'react'
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './Pages/Home/Landing'
import Project from './Pages/Project/Project'
import Agence from './Pages/Agence/Agence'
import LocomotiveScroll from 'locomotive-scroll'
import Nav from './Pages/Navigation/Nav'
import FullScreenNav from './Pages/Navigation/FullScreenNav'
import NavContext from './Pages/Context/NavContext'
function App() {
 const scroll = new LocomotiveScroll();

  return (
   <NavContext>
   <div className='overflow-x-hidden'>
    <FullScreenNav />
    <Nav />
    
   <Routes>
    <Route path='/' element={<Landing />}/>
    <Route path='/project' element={<Project />}/>
    <Route path='/agence' element={<Agence />}/>
   </Routes>
   </div>
   </NavContext>
  )
}

export default App
