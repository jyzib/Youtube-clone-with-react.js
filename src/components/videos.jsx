import React from 'react'
import { Stack,Box } from '@mui/material'
import Videocard from './Videocard'
import Channel from './Channel'
const videos = ({video}) => {
    console.log(video)
  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'start'} gap={2}>
        
            {video.map((e,i)=>{
                return(
          <Box key={i} >
           {e.id.videoId&& <Videocard video={e} /> }
           {e.id.channelId&& <Channel channel={e} /> }

         </Box>
                )
            })}

      

      
    </Stack>
  )
}

export default videos
