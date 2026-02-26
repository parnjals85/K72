import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import Stair from './Pages/Common/Stair.jsx'
import NavContext from './Pages/Context/NavContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Stair>
      <NavContext />
      <App />
    </Stair>
      
    </BrowserRouter>
   
  </StrictMode>,
)
