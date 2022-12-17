
import styled from 'styled-components'
import pets from "/pets.png"
import  { useState, useEffect } from 'react';
import Error from '../Error';
import TodaContendio from '../../hooks/TodaContendio';
import { getAuth , createUserWithEmailAndPassword  } from 'firebase/auth';
import { app } from '../Firebase/Firebase';

function Register() {

    const { guardargatos , mensaje2 , setmensaje2 } = TodaContendio()
     
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const [email, setemail] = useState('');
    const [constraseña , setcontraseña] = useState('')
    const [id, setid] = useState('')
   
    


   


    const handleSubmit = (e) => {
        e.preventDefault();
        if ([nombre, apellido, email,constraseña].includes('')) {
          setmensaje2('Todos los campos son obligatorios ');
          
          setTimeout(() => {
            setmensaje2('');
          }, 2000);

          return;
        }
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, constraseña)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

      
      };


      return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='m-3 m-md-5'>
                <div className='row justify-content-center'>

                    <div className='col col-12 col-lg-4 p-4 my-1 mx-md-1' id="colCliente">
                        <p className='display-6 text-center mb-4'><b>Nuevo personal</b></p>
                        {mensaje2 && <Error> {mensaje2} </Error> }
                        <div className='mb-3'>
                            <label className='form-label h5'>Nombre</label>
                            <input
                                value={nombre}
                                name="nombre"
                                type="text"
                                className='form-control'
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Apellido</label>
                            <input
                                value={apellido}
                                name="apellido"
                                type="text"
                                className='form-control'
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Email</label>
                            <input
                                value={email}
                                name="email"
                                type="text"
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Contraseña</label>
                            <input
                                value={email}
                                name="password"
                                type="password"
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-light btn-lg mt-3'>Guardar</button>
                        </div>
                    </div>
                    </div>

            </form>
        </div>
    )
}


export default Register