
import styled from 'styled-components'
import BurguerButton from './BurguerButton '
import { Link , useLocation  } from "react-router-dom "
import pets from "/pets.png"
import animal from "/animal.jpg"
import petssvg from "/petssvg.svg"
import cart from "/cart.svg"
import login from "/login.svg"
import divi from "/divi.svg"
import  agenda from "/agenda.svg"
import NavbarDos from './NavbarDos'
import TodaContendio from '../hooks/TodaContendio'

function Navbar() {
  const location = useLocation()
  const { clicked , handleClick , CerrarSeccion , estado } = TodaContendio()
  
  return (
    <>
      

      <NavContainer>
        <Link  to="/">
        <Logo >
         <img src={pets} />
        <h2> My <span>Pets</span></h2>
        </Logo>
        </Link>
        
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link className={ ` ${ location.pathname ==='/' ? 'modificado' : ' normal' }  `} to="/"> 
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Inicio</span></Link>

          <Link className={ ` ${ location.pathname ==='/nosotros' ? 'modificado' : ' normal' }  `} to="/nosotros"> 
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Nosotros</span></Link>

          <Link className={ ` ${ location.pathname ==='/blog' ? 'modificado' : ' normal' }  `}to="/blog"> 
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Blog</span></Link>

          <Link className={ ` ${ location.pathname ==='/contacto' ? 'modificado' : ' normal' }  `}to="/contacto">
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Contacto</span></Link>

          <Link className={ ` ${ location.pathname ==='/tienda' ? 'modificado' : ' normal' }  `}to="/tienda"> 
          <img className='icon' src={petssvg}/> 
          <span className="etiqueta" onClick={handleClick}> Tienda</span></Link>
         
          <Link className={ ` ${ location.pathname ==='/carrito' ? 'modificado' : ' normal' }  `}to="/carrito"> 
          <img  className={ estado ? 'cartcerrar':' cart ' } onClick={handleClick} src={cart} /> </Link>

          <Link className={ ` ${ location.pathname ==='/administrador' ? 'modificado' : ' normal' }  `}to="/administrador"> 
          <img  className={ estado ? 'agenda':'desconectado' }  onClick={handleClick} src={agenda} /> </Link>
          
          <img className='divi' src={divi}/>

          <Link to="/login"> 
        
          <button className={ estado ? 'desconectado':'iniciosesionP1  iniciosesionP2 ' }
          
          onClick={handleClick}  > <span>  <img className='icon' src={petssvg}/> </span>  <span> ✓ iniciar sesion </span>   </button>
          
          </Link>
         
          <button className={ estado ? 'cerrarsesionP1  cerrarsesionP2 ' : 'desconectado'  } onClick={CerrarSeccion} > <span> <img className='icon' src={petssvg}/> </span> <span> X cerrar sesion </span>   </button>
          
          
        </div>

        
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
      {(location.pathname ==='/')?( <Navptes
      className={ ` ${ location.pathname ==='/' ? 'sinicio' : ' noinicio' }  `}
      >
        <div className={`prueba ${clicked ? ' active' : ''}`}>
         
            {(clicked ===false) && <NavbarDos/>}
         
  
        </div>
    </Navptes>):""}

    </>
  )
}

export default Navbar

const Navptes = styled.div `


   
   .prueba {

    background-image: url("/animal.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    padding:25rem;
    display: flex;
    position: relative;
    @media(max-width: 400px){
        padding-top:15rem;
        padding-bottom:15rem;
        padding-left:0;
        padding-right:0;
        background-size:250%;
       

      } 

    
    
   }
    
   .prueba.active{

    background-image:none;
    background-color:#f4d3f4 ;
    top: -1000px;
    left: -1000px;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition: all .6s ease ;
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  

`



const NavContainer = styled.nav`
  h2{
    color: black;
    font-weight: 700;
    font-size: 2rem;
    @media(max-width: 400px){
         display: none;
      } 
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background: #f4d3f4;
background: linear-gradient(180deg, rgba(244,211,244,1) 0%, rgba(251,249,255,1) 95%);
  display: flex;
  align-items: center;
  
  justify-content: space-between;
  a .etiqueta {
    color: black;
    text-decoration: none;
    margin-right: 1rem;
    z-index: 2;
    

    @media(max-width: 400px){
         margin-left: 5rem;

      } 


  }
  a{
    text-decoration: none;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a .etiqueta{
      color: black;
      font-size: 2rem;
      z-index: 2;
      text-decoration: none;
      display: block;
    }
    @media(min-width: 1280px){
      position: initial;
      margin: 0;
      a .etiqueta{
        font-size: 1rem;
        color: black;
        display: inline;
        text-transform: uppercase;
        text-decoration: none;
        font-weight:400;
        z-index: 2;
      }

      a{
    text-decoration: none;
  }
      display: block;
    }
    & .cart {
      width: 2.5rem;
       margin: 0 auto ;
      @media(max-width: 1279px){
         margin-top: 2rem;
         margin-left: 8rem;
         width: 5rem;
      } 

      @media(max-width: 780px){
        width: 3.5rem;
        margin:0 auto;
        transform: translate(0%,25%);

      } 

      @media(max-width: 400px){
        width: 3.5rem;
        margin:0 auto;
        transform: translate(50%,30%);

      } 
    }
    & .cartcerrar {

      width: 2.5rem;
       margin: 0 auto ;
      @media(max-width: 1279px){
         margin-top: 2rem;
         margin-left: 8rem;
         width: 5rem;
      } 

      @media(max-width: 780px){
        width: 3.8rem;
        margin:0 auto;
        transform: translate(-30%,25%);

      } 

      @media(max-width: 400px){
        width: 3.8rem;
        margin:0 auto;
        gap:1.5rem;
        transform: translate(40%,20%);

      } 



    }



    & .agenda {
       width: 2.3rem;
       margin: 0 auto ;
       margin-left:2rem;
      @media(max-width: 1279px){
         margin-top: 2rem;
         width: 5rem;
      } 

      @media(max-width: 780px){
        width: 3.5rem;
        margin:0 auto;
        transform: translate(40%,20%);

      } 

      @media(max-width: 400px){
        width: 3.5rem;
        margin:0 auto;
        transform: translate(80%,20%);

      } 
    }


  

      @media(max-width: 400px){
         margin-top: 2rem;
         display: block;
         padding-left: 10rem;

      } 
    }

    & .divi {
      width: 3rem;
      padding-left: 4rem;
      padding-right: 2rem;
      opacity: 0.5;
      @media(max-width: 780px){
         display: none;
      } 
    }

   

   
  
  .links.active{
    width: 100%;
    display: block;
    z-index: 2;
   ;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 15%;
    left: 0;
    right: 0;
    text-align: center;
    @media(max-width: 400px){
      top: 5rem;
      left: -10rem;
      right: 8rem;
    }

    a .etiqueta{
      font-size: 2rem;
      margin-top: 1rem;
      color: black;
      text-decoration: none;
      
    }
  }
  .burguer{
    z-index: 2;
  
    @media(max-width: 450px){
      
      
    }
    

    @media(min-width: 1280px){
      width: 10rem;
      display: none;
    }

    
  }

  .normal .icon {
    display: none;
        & img  {
      display: none;
    }
  }

.iniciosesionP1  {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;


}


.iniciosesionP2{
  position: relative;
  right: 20px;
  bottom: 20px;
  border:none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;

  @media(max-width: 1280px){
      margin: 0 auto;
      
    }

@media(max-width: 1279px){
  display: block;
      margin-top:4rem;  
      
    }

 @media(max-width: 780px){
      display: block;
      margin:0 auto;
      transform: translate(1%,80%);
    }

@media(max-width: 400px){
      display: block;
      margin:0 auto;
      transform: translate(25%,90%);
    }




}
.iniciosesionP2 span {
  background: #ee0034;
background: linear-gradient(0deg, rgba(0,172,238,1) 0%, rgba(2,126,251,1) 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-radius: 5px;
  margin:0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.iniciosesionP2 span:nth-child(1) {
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.iniciosesionP2 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.iniciosesionP2:hover span:nth-child(1) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.iniciosesionP2:hover span:nth-child(2) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
 color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);



}

.iniciosesionP2 img {
  width: 1.5rem;
}




//cerrar sesion 

.cerrarsesionP1{
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;


}


.cerrarsesionP2{
  position: relative;
  right: 20px;
  bottom: 20px;
  border:none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;

  @media(max-width: 1280px){
      margin: 0 auto;
      
    }

@media(max-width: 1279px){
  display: block;
      margin-top:4rem;  
      
    }

 @media(max-width: 780px){
      display: block;
      margin:0 auto;
      transform: translate(1%,80%);
    }

@media(max-width: 400px){
      display: block;
      margin:0 auto;
      transform: translate(25%,90%);
    }




}
.cerrarsesionP2 span {
  background: #f10930;
background: linear-gradient(0deg, #f10909 0%, #e4151f 100%);
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  border-radius: 5px;
  margin:0;
  text-align: center;
  font-weight:545;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
}
.cerrarsesionP2 span:nth-child(1) {
  box-shadow:
   -7px -7px 20px 0px #fff9,
   -4px -4px 5px 0px #fff9,
   7px 7px 20px 0px #0002,
   4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.cerrarsesionP2 span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.cerrarsesionP2:hover span:nth-child(1) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.cerrarsesionP2:hover span:nth-child(2) {
  box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
 color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);



}

.cerrarsesionP2 img {
  width: 1.5rem;
}














.desconectado {
  display: none;
}

  .modificado {
    padding: 1rem;
    background: rgb(244,211,244);
   background: linear-gradient(180deg, #f6def7 50%, rgba(217,164,217,1) 90%);
   font-size: 3rem;
   color: red;
   z-index: 1 ;
   @media(max-width: 1280px){
    background:none;
    padding: 0rem;
    font-size: 1rem;
   

      } 

      & .icon {

        width:1.5rem ;

        @media(max-width: 1280px){
          display: none;
      }}
      
      
        
  }

  


`

const Logo = styled.div `
   display :flex ;
   gap: 1rem;
   margin-left: 4rem;
   & h2 { 
    font-size: 2rem;
     align-items: flex-end;
    @media(max-width: 780px){
      font-size: 2rem;
      }

   }
   & img { 
    width: 12rem;
    @media(max-width: 780px){
          width:8rem;

      } 
    
  @media(max-width: 400px){
          width:rem;
          margin:0 auto;
          transform: translate(30%,5%);
      } 


   }

   & h2 span {
    display: block;
    font-size: 3rem;
   font-family: Arial, Helvetica, sans-serif;
   }

   


`

const BgDiv = styled.div`
@media(max-width: 1280px){
  background-color: #f4d3f4;
  text-transform: uppercase;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .6s ease ;

  
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  

}

`


