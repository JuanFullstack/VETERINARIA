import styled from 'styled-components'
import fb from "/fb.svg"
import google from "/google.svg"
import email from "/email.svg"
import pets from "/pets.png"
import { Link , useLocation  } from "react-router-dom "
import { auth }   from "../Firebase/Firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";


function Login() {


  const handleOnclick = ()=>{
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = async () => {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res)
        if (res) {
          registerNewUser(res.user);
          

        }
      } catch (err) {
        console.error(err);
        //alert(err.message);
      }
    };
    signInWithGoogle();
  }
   

  return (
      <>  
          <EstilosDiv>
              <div className='contenedor'>
                  <div className='card'>
                      <h1 className='card-title text-center mb-4'>Inicia sesión</h1>
                      <form action='#' method='POST' className='card-body'>
                          <div className='form-group'>
                              <input
                                  type='email'
                                  name='email'
                                  id='email'
                                  className='form-control'
                                  placeholder='Correo electrónico'
                                  required
                              />
                          </div>
                          <div className='form-group'>
                              <input
                                  type='password'
                                  name='password'
                                  id='password'
                                  className='form-control'
                                  placeholder='Contraseña'
                                  required
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
                          <div className='iconred'>
                              <Link>
                                  <img src={fb} />
                              </Link>
                              <Link>
                                  <img src={google} 
                                  onClick ={ handleOnclick}
                                  
                                  />
                              </Link>
                              <Link to="/registro" >
                                  <img src={email} />
                              </Link>
                          </div>
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
    margin-top: 5rem;
    justify-content: center;

    @media(max-width: 780px){
          margin-top: rem;
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
  
  & .iconred {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;
     & img {
        width: 4rem;
       padding: 0.5rem;
        border: 0.1rem solid #CED5D5;
        border-radius : 100% ;
        
        
        @media(max-width: 780px){
            width: 2.5rem;
            

        } 
     }   
  }
 
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
      }


      

}
  
`