import React, { useState } from 'react'
import styled from 'styled-components'
import BurguerButton from './BurguerButton '
import { Link , useLocation  } from "react-router-dom "
import pets from "../../public/pets.png"
import animal from "../../public/animal.jpg"

function Navbar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    if(( window.innerWidth) > 780 ){
        setClicked(false)}else {
            setClicked(!clicked)

        }


  }

  
  return (
    <>
      

      <NavContainer>
        <Logo >
         <img src={pets} />
        <h2> My <span>Pets</span></h2>
        </Logo>
        
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link className="etiqueta" onClick={handleClick} to="/">Inicio</Link>
          <Link className="etiqueta" onClick={handleClick} to="/nosotros">Nosotros</Link>
          <Link className="etiqueta" onClick={handleClick} to="/blog">Blog</Link>
          <Link className="etiqueta" onClick={handleClick} to="/contacto">Contanto</Link>
          <Link className="etiqueta" onClick={handleClick} to="/tienda">Tienda</Link>
        </div>

        
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
      <Navptes>
        <div className={`prueba ${clicked ? ' active' : ''}`}>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        </div>

    
    </Navptes>



    </>
  )
}

export default Navbar

const Navptes = styled.div `
   
   .prueba {

    background-image: url("../../public/animal.jpg");
    background-size:cover;
    background-repeat:no-repeat;
    
    
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
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background: rgb(244,211,244);
background: linear-gradient(180deg, rgba(244,211,244,1) 0%, rgba(251,249,255,1) 95%);
  display: flex;
  align-items: center;
  
  justify-content: space-between;
  .etiqueta {
    color: black;
    text-decoration: none;
    margin-right: 1rem;
    z-index: 2;
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
    .etiqueta{
      color: black;
      font-size: 2rem;
      z-index: 2;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      .etiqueta{
        font-size: 1rem;
        color: black;
        display: inline;
        text-transform: uppercase;
        font-weight:400;
        z-index: 2;
      }
      display: block;
    }
   
  }
  .links.active{
    width: 100%;
    display: block;
   ;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    .etiqueta{
      
      font-size: 2rem;
      margin-top: 1rem;
      color: black;
      
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const Logo = styled.div `
   display :flex ;
   gap: 1rem;
   margin-left: 4rem;
   


`

const BgDiv = styled.div`
@media(max-width: 780px){
  background-color: #f4d3f4;
  text-transform: uppercase;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
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