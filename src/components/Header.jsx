import { Link , useLocation  } from "react-router-dom "
import Navbar from "./Navbar"
import NavbarDos from "./NavbarDos"




function Header() {

    const location = useLocation()

  return (
    <>
    
    <Navbar/> 
  
    
    </>


  )
}

export default Header