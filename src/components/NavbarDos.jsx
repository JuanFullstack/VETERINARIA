import styled from 'styled-components'
import cora from '/cora.svg'
import TodaContendio from '../hooks/TodaContendio'
import {Link } from "react-router-dom"

const NavbarDos = () => {

  const { clicked } = TodaContendio()

  return (
      <Titulogral>
          
              <img src={cora} />
              <h1> Cuidamos lo que mas quieres</h1>

              <Link to="/solicitarturno">
              <button>
                Solicita turno 
              </button>
              </Link>
         
      </Titulogral>
  );
}

export default NavbarDos




const Titulogral = styled.div `
  
  img{
    position: absolute;
    top: 2%;
    left: 45%;
    transform: translate(-45%,-50%);
    z-index:1;
    animation: heart 0.6s linear infinite ;
    transform: translate(-70%,-40%);
    @media(max-width: 770px){
      width: 6.5rem;
      left: 45%;
      top: 6%;
    transform: translate(-70%,-40%);
      } 

      @media(max-width: 400px){
      width: 6.5rem;
      left: 30%;
      top: 2%;
    transform: translate(-70%,-40%);
      } 

      } 
   

   

   @keyframes heart {
      
    0%{   transform:    scale(1.07) };
    25%{  transform:  scale(1.02) };
    50%{  transform:  scale(1)};
    75%{  transform:  scale(1.02) };
    100%{ transform:   scale(1.07)};
  
    }

   h1{
    position: absolute;
    top: 22%;
    left: 50%;
    text-align: center;
    transform: translate(-55%,-50%);
    text-transform: uppercase;
    font-weight: 200;
    background-color:white;
    border : 0.2rem inset black;
    border-radius: 1rem;
    padding: 1.1rem;
    z-index:2;
    animation:  3s ease-out infinite ;
    @media(max-width: 780px){
      left: 56%;
      top: 20%;
      font-size: 1.3rem;
      padding: 1rem;
    transform: translate(-70%,-40%);
      } 

      @media(max-width: 400px){
      left: 33%;
      top: 25%;
      font-size: 1.2rem;
      padding: 0.5rem;
      border : 0.1rem inset black;
      width: 85%;
    transform: translate(-30%,-40%);
      } 
   }


   button {
    position: absolute;
    top:70%;
    left: 40%;
    transform: translate(-55%,-50%);
    text-transform: uppercase;
    font-weight: 200;
    background-color:red;
    border : 0.1rem inset black;
    border-radius: 1rem;
    padding: 2rem 3rem;
    font-size: 1.5rem;
    font-weight:700;
    z-index:2;
    animation: tituloefecto 2.5s ease-out infinite ;
    @media(max-width: 750px){
      left: 12%;
      font-size: 1.3rem;
      padding: 1rem;
    transform: translate(-70%,-40%);
      } 

      @media(max-width: 400px){
      left: 15%;
      top: 85%;
      font-size: 1.3rem;
      padding: 1rem;
    transform: translate(-50%,-70%);
      } 
   }

   @keyframes tituloefecto {
      
      0%{   transform:    translatey(-6%) };
      25%{  transform:  translatey(+6%) };
      50%{  transform:  translatey(-6%)};
      75%{  transform:   translatey(+6%) };
      100%{ transform:  translatey(-6%)};
    
      }
    

`