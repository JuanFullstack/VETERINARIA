import styled from 'styled-components'
import  { useState, useEffect } from 'react';
import Error from '../components/Error';
import TodaContendio from '../hooks/TodaContendio';


function Contacto() {

  const { guardargatos , mensaje2 , setmensaje2 } = TodaContendio()
  const [nombre, setnombre] = useState('');
  const [apellido, setapellido] = useState('');
  const [email, setemail] = useState('');
  const [constraseña , setcontraseña] = useState('')
  const [id, setid] = useState('')
 




  return (
 <>
   <EstilosDiv>
              <form 
           
              >
                  <h2> Contacto </h2>
                  {mensaje2 && <Error> {mensaje2} </Error> }
               <div className='radio'>
               <p> Consulta <input type="radio" name="inputradio" value="Consulta"  />  </p>
                <p>Turnos <input type="radio" name="inputradio" value="Turno" />  </p>   
                </div>
               
                  <input 
                  value={nombre}
                  onChange={(e) => setnombre(e.target.value)}
                  type='text' name='nombre' placeholder='Nombre'  />
                  <input  type='text' name='apellidos' placeholder='Apellidos' 
                  value={apellido}
                  onChange={(e) => setapellido(e.target.value)}
                   />
                  <input type='text'  name='correo'   placeholder='Correo' 
                   value={email}
                   onChange={(e) => setemail(e.target.value)}
                  />
                  <input 
                  type='password' name='password' placeholder='password'
                  value={constraseña}
                   onChange={(e) => setcontraseña(e.target.value)}
                  />
                  <input type='submit' value='ENVIAR' id='boton' />
                  
              </form>
          </EstilosDiv>
 
 
 
 
 
 </>


  )


}

export default Contacto



const EstilosDiv = styled.div`

padding-top: 4rem;
background-image:url("../../../public/turnos.jpg") ;
background-size: cover;
background-repeat:no-repeat;
padding:15rem;


@media (max-width:480px) {
  padding-top: 1rem;
  margin-bottom: 2rem;
  padding:0;
  background-image:none;
}

form {
    width: 450px;
    margin: auto;
    background: rgb(59,162,250);
background: linear-gradient(0deg, rgba(59,162,250,0.8519782913165266) 0%, rgba(57,173,232,0.773546918767507) 10%, rgba(73,197,249,0.7063200280112045) 100%);
    padding: 10px 20px;
    box-sizing: border-box;
    margin-top: 20px;
    border-radius: 2.5rem;
    -webkit-box-shadow: -2px 31px 28px -6px rgba(0,0,0,0.75);
-moz-box-shadow: -2px 31px 28px -6px rgba(0,0,0,0.75);
box-shadow: -2px 31px 28px -6px rgba(0,0,0,0.75);
}


h2 {
    color: #fff;
    text-align: center;
    margin: 0;
    font-size: 30px;
    margin-bottom: 20px;
}

input {
    width: 100%;
    margin-bottom: 20px;
    padding: 7px;
    box-sizing: border-box;
    font-size: 17px;
    border: none;
    border-radius: 0.5rem;
         
}

.radio {
    display: flex;
    justify-content: center;
    gap: 2rem;
    border: 0.1rem solid black ;
    margin-bottom:1rem ;
    border-radius:1rem;

    & p {
      font-size: 1.5rem;


    }
}

textarea {
    min-height: 100px;
    max-height: 200px;
    max-width: 100%;
}

#boton{
    background: #31384A;
    color: #fff;
    padding: 20px;
}

#boton:hover {
    cursor: pointer;
}


@media (max-width:480px) {
    form{
        width: 100%;
    }
}

h1 {
    text-align: center;
    color: #fff;
    font-size: 40px;
    background: rgba(0,0,0,0.4);
    margin-top: 300px;
}
  
`