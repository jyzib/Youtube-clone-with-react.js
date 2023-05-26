import { useState } from 'react'
import { Stack,Box } from '@mui/material'
import Videocard from './Videocard'
import Channel from './Channel'
const videos = ({video}) => {
    const [ count , setCount] = useState(0)
    console.log(video.length / 6)
  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'start'} gap={2}>
        
            {video.slice(count * 6,(count * 6) + 6 ).map((e,i)=>{
                return(
          <Box key={i} >
           {e.id.videoId&& <Videocard video={e} /> }
           {e.id.channelId&& <Channel channel={e} /> }

         </Box>
                )
            })}

      
  <span>
    {[...Array(Math.floor(video.length / 6))].map((p,i)=>{
        return <button className='paginaation' style={ count===i ? {backgroundColor : 'red',color:'white'}:{}} onClick={()=>setCount(i)} >{i+1}</button>
    })}
  </span>
     
    </Stack>
  )
}

export default videos
