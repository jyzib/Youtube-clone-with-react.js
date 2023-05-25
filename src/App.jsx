import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Box} from '@mui/material'
import './App.css'
import {Feed ,Navbar, Channel,SearchTerm,Video} from './components'



function App() {


  return (
    <>
  <BrowserRouter>
  <Box sx={{backgroundColor:'#ffff'}} >
    <Navbar/>
    <Routes>
      <Route path='/' element={<Feed/>} />
      <Route path='/video/:id' element={<Video/>} />
      <Route path='/searchterm/:searchterm' element={<SearchTerm/>} />
      <Route path='/channel/:id' element={<Channel/>} />
    </Routes>

  </Box>
  </BrowserRouter>
    </>
  )
}

export default App
