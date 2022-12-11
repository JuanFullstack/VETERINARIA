import "./css/estilos.css";
import React, { useState,useEffect } from "react";

import icono1 from "../Servicios/imagenes/icono1.png";
import Servicio from "../Servicios/Servicio/Servicio"

function Servicios() {
  useEffect(() => {
    window.AOS.init({
      // Initialization
      duration: 2000,
    });
  });

  const [data, setData] = useState([{id:1, titulo:"Consultorio Veterinario las 24hs" , icono : icono1,
  descripcion:"Gracias a nuestra disponibilidad 24 horas los 365 días al año,también podemos ofrecerte el servicio de internación. En nuestras instalaciones tenemos espacios diferenciados para cadanecesidad, como ser: oxigenoterapia, Unidad de Cuidados Intensivos (UCI) con espacios de internación para la comodidad  de tu mascota. Nuestro objetivo es que se sienta como en casa.Contamos con un espacio separado del resto para la internación de pacientes infecto-contagiosos; con enfermedades como parvovirus, moquillo o vif y vilef. Espacio exclusivo Cat Friendly para espera, consulta e internación"}])

  
 const resultado = data.map(({id, titulo ,  descripcion ,icono}) => {
   return (

     <Servicio key={id} titulo = {titulo}    descripcion={descripcion}  icono = {icono} />
   ) 
 })


  return (
    <section class="services">
      <div class="container" data-aos="fade-down">
        <div class="heading">
          <h2>Servicios</h2>
          <p>Nuestros Servicios</p>
        </div>

        <div class="row">
       
        {resultado}

        </div>
      </div>
    </section>
  );
}

export default Servicios;
