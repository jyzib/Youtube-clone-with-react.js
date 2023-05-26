import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utels/category'
import { useState } from 'react'
const sidebar = ({seclect,setselected}) => {
 
 
  const  handelbtn = (e) =>{
    setselected(e)
    console.log(e)
  }
  return (
    <Stack
    direction={'row'}
    sx={{overflowY:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}
    >
        {categories.map((e)=>{
            return(
   <button onClick={()=>handelbtn(e.name)}  key={e.name} className='category-btn' style={{background:e.name === seclect && "#fc1503"}} >


   <span style={{color:'white'}} >
      {e.name}
   </span>
 </button>
            )
        })}
   
      
    </Stack>
  )
}

export default sidebar
