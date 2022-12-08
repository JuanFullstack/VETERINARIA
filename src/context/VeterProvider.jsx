import React, { useState, useEffect ,createContext} from 'react';


const Contenido = createContext();


function VeterProvider({children}) {
   


  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    if(( window.innerWidth) > 1280 ){
        setClicked(false)}else {
            setClicked(!clicked)

        }


  }

  return (
    <Contenido.Provider
            value={{
              clicked,
              handleClick,

            }}>
            {children}
        </Contenido.Provider>
  )
}


export {VeterProvider};

export default Contenido;