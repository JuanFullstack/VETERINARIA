import React, { useState, useEffect ,createContext} from 'react';
import { generarID } from '../data/helpes';
import { formatearFecha } from '../data/helpes';
import { app, auth } from '../components/Firebase/Firebase';


const Contenido = createContext();


function VeterProvider({children}) {
   

// var navbar 
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    if(( window.innerWidth) > 1280 ){
        setClicked(false)}else {
            setClicked(!clicked)

        } }

// funcion datos 

const [datos ,setdatos] = useState([])
const [mensaje2, setmensaje2] = useState('');










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
              setmensaje2

            }}>
            {children}
        </Contenido.Provider>
  )
}


export {VeterProvider};

export default Contenido;