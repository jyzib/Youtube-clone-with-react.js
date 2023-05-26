import { useState,useEffect } from "react"
import { Box,Stack,Typography } from "@mui/material"
import Videos from "./videos"
import Sidebar from "./sidebar"
import { fetchFromAPI } from "../utels/fetchFromApi"
const Feed = () => {
  const [seclect,setselected] = useState('New')
  const [alldata,setAlldata] = useState([])
  useEffect(()=>{
  fetchFromAPI(`search?part=snippet&q=${seclect}`)
  .then((data)=>setAlldata(data.items))
  
  },[seclect])
  return (
    <div>
      <Stack sx={{flexDirection:{sx: 'column', md:'row'},backgroundColor:'black'}} > 
      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:'0',md:'2'}}} >
          <Sidebar seclect={seclect} setselected={setselected} />
          <Typography className="copyrigth" variant="body2" sx={{color:'white',mt:'3',p:'5px'}} >
            copyright 2020 JSM media
          </Typography>

      </Box>
      <Box p={2} sx={{overflowY:'auto', height:'90vh',flex:2}} >
        <Typography variant="h4" fontWeight={'bold'} sx={{color:"white",mb
      :2}} >
          {seclect} <span style={{color:'#fc1503'}} >Video</span>
        </Typography>
        <Videos video={alldata} />
      </Box>
      


      </Stack>
    </div>
  )
}

export default Feed
