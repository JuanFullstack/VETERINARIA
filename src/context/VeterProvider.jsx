import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { generarID } from "../data/helpes";
import { formatearFecha } from "../data/helpes";
import { app } from "../components/Firebase/Firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const Contenido = createContext();

function VeterProvider({ children }) {
  app;
  const auth = getAuth();

  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const [datos, setdatos] = useState([]);
  const [datosContacto, setdatosContacto] = useState([]);
  const [mensaje2, setmensaje2] = useState("");
  const [emailIS, setemailIS] = useState("");
  const [constraseñaIS, setconstraseñaIS] = useState("");
  const [estado, setEstado] = useState(false);

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    if (window.innerWidth > 1280) {
      setClicked(false);
    } else {
      setClicked(!clicked);
    }
  };

  const InisionSesion = (e) => {
    e.preventDefault();
    const { email, constraseña } = datos;
    signInWithEmailAndPassword(auth, emailIS, constraseñaIS)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("iniciaste sesion correctamente");
        navigate("/administrador");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if ((emailIS == "") | (constraseñaIS == "")) {
          setmensaje2("Todos los campos son obligatorios");
          setTimeout(() => setmensaje2(""), 3000);
        } else {
          console.log("datos incorrecatos");
          setmensaje2("Datos incorrectos");
          setTimeout(() => setmensaje2(""), 3000);
        }
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("usurio conectado");
        setEstado(true);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("desconectado");
        setEstado(false);
      }
    });
  }, [estado]);

  const CerrarSeccion = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        setEstado(false);
        navigate("/");
      })
      .catch((error) => {
        console.log("hubo un error", error);
      });

    return;
  };

  const guardarDatos = (Referencia) => {
    if (datos.some((comparacion) => comparacion.id === Referencia.id)) {
      const datosActulizado = datos.map((comparacion) =>
        comparacion.id === Referencia.id ? Referencia : comparacion
      );
      setdatos(datosActulizado);
    } else {
      //agregar mas prop que las iniciales
      Referencia.id = generarID();
      setdatos([...datos, Referencia]);
    }
  };

  const guardarDatosContacto = (Referencia) => {
    if (datos.some((comparacion) => comparacion.id === Referencia.id)) {
      const datosActulizado = datosContacto.map((comparacion) =>
        comparacion.id === Referencia.id ? Referencia : comparacion
      );
      setdatosContacto(datosActulizado);
    } else {
      //agregar mas prop que las iniciales
      Referencia.id = generarID();
      setdatosContacto([...datosContacto, Referencia]);
    }
  };

  return (
    <Contenido.Provider
      value={{
        clicked,
        handleClick,
        guardarDatos,
        setdatosContacto,
        mensaje2,
        setmensaje2,
        InisionSesion,
        estado,
        emailIS,
        setemailIS,
        constraseñaIS,
        setconstraseñaIS,
        CerrarSeccion,
        guardarDatosContacto,
      }}
    >
      {children}
    </Contenido.Provider>
  );
}

export { VeterProvider };
export default Contenido;
