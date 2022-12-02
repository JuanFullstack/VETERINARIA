import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom "

function Layout() {
  return (
    
    <>
    <Outlet/>
    <Header/>
    <Footer/>

    </>
    

  )
}

export default Layout