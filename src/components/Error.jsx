import styled from 'styled-components'

function Error({children} ) {
  return (
    <Errorstyled>
        <p> {children} </p>   
    </Errorstyled>
  )
}

export default Error



const Errorstyled = styled.div `
    
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