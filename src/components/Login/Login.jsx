import styled from 'styled-components'
import fb from "/fb.svg"
import google from "/google.svg"
import email from "/email.svg"
import pets from "/pets.png"
import { Link , useLocation  } from "react-router-dom "
import { useState } from 'react'
import TodaContendio from '../../hooks/TodaContendio'
import Error from '../Error'


function Login() {

  const { clicked , InisionSesion ,setemailIS ,setconstraseñaIS ,constraseñaIS , emailIS , mensaje2    } = TodaContendio()
          

  return (
      <>    
          <EstilosDiv>
            
              <div className='contenedor'>
              
                  <div className='card'>
                      <h1 className='card-title text-center mb-4'>Inicia sesión</h1>
                      <form 
                      
                      onSubmit={InisionSesion}
                      className='card-body'>
                        {  <Error>{mensaje2}</Error>  }
                          <div className='form-group'>
                              <input
                                  type='text'
                                  name='email'
                                  id='email'
                                  className='form-control'
                                  placeholder='Correo electrónico'
                                  value={emailIS}
                                  onChange={(e) => setemailIS(e.target.value)}
                                  
                              />
                          </div>
                          <div className='form-group'>
                              <input
                                  type='password'
                                  name='password'
                                  id='password'
                                  className='form-control'
                                  placeholder='Contraseña'
                                  value={constraseñaIS}
                                  onChange={(e) => setconstraseñaIS(e.target.value)}
                                  
                              />
                          </div>
                          <div className='form-group text-center pt-4'>
                              <input
                                  type='submit'
                                  value='Iniciar sesión'
                                  className='btn btn-primary w-100'
                              />
                          </div>
                      </form>
                      <div className='card-body'>
                          <p className='text-center'>
                              ¿No tiene una cuenta?{' '}
                              <Link  className="reg" to="/registro" >
        
                                  Registrate aquí
                             
                              </Link>
                          </p>
                          
                      </div>
                  </div>
                  <div className='acompañar'>
                      <h2> solo personal autorizado</h2>
                      <img src={pets} />
                  </div>
              </div>
          </EstilosDiv>
      </>
  );
}

export default Login


const EstilosDiv = styled.div`


.contenedor{
    display: flex;
    padding-top: 5rem;
    justify-content: center;
    background-image:url("../../../public/blog.jpg") ;
    background-size: cover;
    background-repeat:no-repeat;
    padding: 15rem;
   
    @media(max-width: 850px){
        padding: 0;
        margin-bottom:4rem
      
        } 
    

        @media(max-width: 400px){
          padding: 0rem;
          flex-direction: column;
         align-items: center;
        } 

   
}

    


.reg {
font-weight: 700;

}



.panel {
  background-color: #fff;
  border-radius: 0;    
}
.card {
  width: 80%;
  max-width: 30rem;
  height: auto;
  
  
 
}




.card-title  {
  color: #0f4c75;
}

.form-control {
  border: 0;
  border-bottom: 1px solid #0f4c75;
  border-radius: 0;
}
.btn-primary {
  background-color: #0f4c75;
  color: #fff;
  border: 0;
}
#registrate {
  color: #0f4c75;
  font-weight: 700;
}
footer {
  position: absolute;
  bottom: 20px;
  color: #3282b8;  
}


.acompañar{
    width: 20rem;
    align-items: center;
    background-color: #56e69234;
    

      & img {
        width: 15rem;
        margin-left: 1.5rem;
        
      }
      & h2{
        color: #070707;
        text-align: center;
        margin-top: 2rem;
        font-size: 2rem;
      }


      

}
  
`

