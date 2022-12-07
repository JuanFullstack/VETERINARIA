import React, { useState, useEffect, createContext } from "react";

const Contenido = createContext();

function VeterProvider({ children }) {
  const [perros, setPerros] = useState([]);

  //Url con todos los datos raw.
  const URL = "http://localhost:3000/articulos";

  //Funcion que trae toda la info 'personajes'
  const fetchMascotas = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPerros(data);
      })
      .catch((error) => console.log(error));
  };

  //Se ejecuta por defecto por primera vez al renderizar el componente y en cada updateting.
  useEffect(() => {
    fetchMascotas(URL);
  }, []);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    if (window.innerWidth > 1280) {
      setClicked(false);
    } else {
      setClicked(!clicked);
    }
  };

  return (
    <Contenido.Provider
      value={{
        clicked,
        handleClick,
        fetchMascotas,
        perros
      }}
    >
      {children}
    </Contenido.Provider>
  );
}

export { VeterProvider };
export default Contenido;
