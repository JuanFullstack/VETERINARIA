import React, { useState, useEffect ,createContext} from 'react';
import { useNavigate } from "react-router-dom";
import { generarID } from '../data/helpes';
import { formatearFecha } from '../data/helpes';
import { app } from '../components/Firebase/Firebase';
import { getAuth, signInWithEmailAndPassword , signInWithPopup, signOut , onAuthStateChanged } from "firebase/auth";



const Contenido = createContext();


function VeterProvider({children}) {
   

  app
  const auth = getAuth();


// var navbar 
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    if(( window.innerWidth) > 1280 ){
        setClicked(false)}else {
            setClicked(!clicked)

        } }

// funcion datos 
const navigate = useNavigate();
const [datos ,setdatos] = useState([])
const [mensaje2, setmensaje2] = useState('');

// inicioSesion

const [emailIS, setemailIS] = useState('');
const [constraseñaIS , setconstraseñaIS] = useState('')
const [ estado , setestado ] = useState("")

const InisionSesion = (e) => {
  e.preventDefault();
  const {email,constraseña } = datos
  signInWithEmailAndPassword(auth, emailIS, constraseñaIS)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("iniciaste sesion correctamente")
    setestado("conectado")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  
   
};





//  estado de la sesion 


useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("usurio conectado")
      // ...
    } else {
      // User is signed out
      // ...
      console.log("desconectado")
    
      
    }
  });
}, [estado]);





//<-- Fin Analisis sesion


//<-- cerrar sesion 

const CerrarSeccion = (e) => {
  e.preventDefault();
  
  signOut(auth).then(() => {
    setestado("desconectado")
    navigate("/")
  }).catch((error) => {
   console.log("hubo un error" , error )
  });
  
  return

}
  
   



//<-- Fin Analisis sesion





const guardargatos = (Referencia) => {
  if (datos.some((comparacion) => comparacion.id === Referencia.id)) {
    const datosActulizado = datos.map((comparacion) =>
      comparacion.id === Referencia.id ? Referencia : comparacion
    );
    setdatos(datosActulizado);
  } else {

     //agregar mas prop que las iniciales
    Referencia.id = generarID();
    Referencia.fecha = Date.now();
    setdatos([...datos, Referencia]);
  }
};








  return (
    <Contenido.Provider
            value={{
              clicked,
              handleClick,
              guardargatos,
              mensaje2,
              setmensaje2,
              InisionSesion,
              estado,
              emailIS,
              setemailIS,
              constraseñaIS,
              setconstraseñaIS,
              CerrarSeccion
              

            }}>
            {children}
        </Contenido.Provider>
  )
}


export {VeterProvider};

export default Contenido;