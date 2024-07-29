import { useState } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
 

  return (
    <div className='app-div'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
