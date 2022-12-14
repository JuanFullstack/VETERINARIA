import styled from 'styled-components'
import edit from "/edit.svg"
import perfiladd from "/perfiladd.svg"
import { Link } from "react-router-dom "


function Administrador() {


  return (

<AdminSytyled>
          <div className='disposicion'>

            <Link   to="/abmturnos"  >
              <button className='cliente'
              >
              
               <img  src={edit} />
            
                Administrar clientes</button>
            </Link>
            <Link   to="/registro"  >
              <button className='personal'>
              <img  src={perfiladd }/>
                Administrar Personal</button>
             </Link>
          </div>
 </AdminSytyled>
  )
}

export default Administrador





const AdminSytyled = styled.div `
    background-image: url("/blog.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    padding:20rem;
    padding-top:4rem;
  
    .disposicion{
   display: flex;
   gap:4rem;
   margin-top: 0;
   @media(max-width: 1279px){
      display: block;
      margin-top:4rem;  
    
      
    }

 }


 .cliente {
  
 font-size: 1.5rem;
 border-radius: 15px;
 background: #45e98f;
 box-shadow: inset -24px -24px 48px #0f583c,
             inset 24px 24px 48px #21a17b;
 color: black;
 padding: 4rem;
 font-weight:600;

   & img {
    display: block;
    width: 4rem;
    margin: 0 auto;
   }
 
 @media(max-width: 1279px){
  margin-bottom:2.5rem 
    
      
    }


 }

 .cliente:hover {
  
  font-size: 1.5rem;
  border-radius: 15px;
  background: #a6f7cb;
  box-shadow: inset -24px -24px 48px #69dfb1,
              inset 24px 24px 48px #66998a;
  color: black;
  padding: 4rem;
  font-weight:600;
 
    & img {
     display: block;
     width: 4rem;
     margin: 0 auto;
    }
  
  @media(max-width: 1279px){
   margin-bottom:2.5rem 
     
       
     }
 
 
  }





 .personal {

 font-size: 1.5rem;
 border-radius: 15px;
 background: #e7bf91;
 box-shadow: inset -24px -24px 48px #d37203,
             inset 24px 24px 48px #db973d;
 color: black;
 padding: 4rem;
 font-weight:600;
 & img {
    display: block;
    width: 4rem;
    margin: 0 auto;
   }
 

 }

 .personal:hover {

font-size: 1.5rem;
border-radius: 15px;
background: #f8e3ca;
box-shadow: inset -24px -24px 48px #f3aa57,
            inset 24px 24px 48px #e4bd8a;
color: black;
padding: 4rem;
font-weight:600;
& img {
   display: block;
   width: 4rem;
   margin: 0 auto;
  }


}



`
