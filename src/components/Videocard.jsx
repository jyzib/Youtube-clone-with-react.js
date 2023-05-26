import { Card,Typography,CardContent,CardMedia } from "@mui/material"
// import {chickCircle} from '@mui/icons-material'
import {Link }from "react-router-dom"
const Videocard = ({video}) => {
    // console.log(video)
    // console.log(video.snippet.thumbnails.high.url)
  return (
    <div>
        
        <Card>
           <Link to={`/video/${video.id.videoId}`} >
          
            <CardMedia image={video.snippet.thumbnails.high.url} 
            
            sx={{width:350,height:180}}/>
 </Link>
           
            
         
        </Card>
      
    </div>
  )
}

export default Videocard
