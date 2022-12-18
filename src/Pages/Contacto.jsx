import styled from "styled-components";
import { useState, useEffect } from "react";
import Error from "../components/Error";
import TodaContendio from "../hooks/TodaContendio";
import query from "/query.svg"
import turn from "/turn.svg"
import { Link  } from "react-router-dom "

function Contacto() {
  


  return (
    <>
    <Backgraund>
      
      <EstilosDiv>

        <Link to="/crearcliente">
      <button
       class="custom-btn btn-14"
       > <img className="icono"  src={query}/> <span className="texto" >  consulta </span></button>
       </Link>
      
      <Link to="/solicitarturno"  >
      <button class="custom-btn btn-15"> <img className="icono" src={turn}/> <span className="texto" >turno </span></button>
      </Link>

      </EstilosDiv>
       </Backgraund>
    </>
  );
}

export default Contacto;

const EstilosDiv = styled.div`
display: flex;
 padding: 15rem;
 align-items: center;
 justify-content:center;
 padding-top:8rem;


 

 @media(max-width: 400px){
  flex-direction: column;
  padding:2rem

      } 


 .custom-btn {
  width: 250px;
  height: 250px;
  color: #fff;
  border-radius: 100%;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
 

   box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
   7px 7px 20px 0px rgba(0,0,0,.1),
   4px 4px 5px 0px rgba(0,0,0,.1);
  outline: none;

  @media(max-width: 400px){
    width: 200px;
  height: 200px;
      } 
}




.texto {
  font-size: 1.5rem;
  display: block;
  color: black;
  font-weight:700;
}

.icono {
  width: 5rem;
}

button {
  margin: 2rem;
}


.btn-14 {
  background: rgb(255,151,0);
  border: none;
  z-index: 1;
}

.btn-14:hover {
  background-color:#fcd452;
}

.btn-14:active {
  top: 2px;
}


//bt 15

.btn-15 {
  background: #53a0f8;
  border: none;
  z-index: 1;
}

.btn-15:hover {
  background-color:#a7f0fd;
}
.btn-15:hover:after {
  top: auto;
  bottom: 0;
  height: 100%;
}
.btn-15:active {
  top: 2px;
}



`;


const Backgraund = styled.div`
  


`