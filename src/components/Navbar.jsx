import { Stack } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from "../utels/constant"
import Searchbar from "./Searchbar"
const Navbar = () => {
  return (
    <div>
        <Stack direction='row'
        alignItems='center'
        p={2}
          sx={{background:'#000' , position:'sticky',top:0 , justifyContent:'space-between'}}
          >
        <Link to={'/'}  style={{display:'flex' , alignItems:'center'}} >
            <img src={logo} height={45} alt="logo" />
        </Link>

           <Searchbar/>
           

        </Stack>
    </div>
  )
}

export default Navbar
