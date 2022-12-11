import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom "
import { VeterProvider } from "../context/VeterProvider"
import TodaContendio from "../hooks/TodaContendio"

function Layout() {


  return (
      <>
         
              <VeterProvider>
                  <Header />
                  <Outlet />
                  <Footer />
              </VeterProvider>
            
          
      </>
  );
}

export default Layout