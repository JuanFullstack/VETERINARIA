
import React from 'react'
import TodaContendio from '../../hooks/TodaContendio'

function BotonEstado() {

const { Conexion }=TodaContendio()



  return (
    <Botonstyled>
      <p> {children} </p>  
    </Botonstyled>
  )
}

export default BotonEstado



const Botonstyled = styled.div `
    
background-color: red;
padding: 0%;
font-size: 1.5rem;
text-align: center;
border-radius: 0.5rem;
font-weight: 500;

animation: shake .3s;

@keyframes shake {
    25% {   transform: translateX(6px)   }
    50% {   transform: translateX(-6px)  }
    75% {   transform: translateX(6px)}
    
}

`