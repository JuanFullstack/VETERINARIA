import "./css/estilos.css";
import React, { useState,useEffect } from "react";

import icono1 from "../Servicios/imagenes/icono1.png";
import icono2 from "../Servicios/imagenes/icono2.png";
import icono3 from "../Servicios/imagenes/icono3.png";
import icono4 from "../Servicios/imagenes/icono4.png";
import icono5 from "../Servicios/imagenes/icono5.png";
import icono6 from "../Servicios/imagenes/icono6.png";



import Servicio from "../Servicios/Servicio/Servicio"

function Servicios() {
  useEffect(() => {
    window.AOS.init({
      // Initialization
      duration: 2000,
    });
  });

  const [data, setData] = useState([{id:1, titulo:"Consultorio Veterinario las 24hs" , icono : icono1,
  descripcion:"Gracias a nuestra disponibilidad 24 horas los 365 días al año,también podemos ofrecerte el servicio de internación. En nuestras instalaciones tenemos espacios diferenciados para cadanecesidad, como ser: oxigenoterapia, Unidad de Cuidados Intensivos (UCI) con espacios de internación para la comodidad  de tu mascota. Nuestro objetivo es que se sienta como en casa."}
, {id:2 , titulo:"Especialistas" , icono: icono2 ,descripcion:"En Pets contamos con los mejores Médicos Veterinarios con formación académica de calidad para ofrecerles las herramientas necesarias para cuidar de tu mascota.Consultá todas nuestras sucursales de hospitales veterinarios y visítanos para poder ayudarte y ayudar a tu compañero.Cada animal es un mundo, por eso contamos con especialistas de todo tipo para que puedas darle todas las atenciones a tu mascotas en el mismo lugar."},
  {id:3 , titulo:"Peluqueria" , icono: icono3 ,descripcion:"En Pets tenemos las mejores peluquerías para perros y gatos con los mejores peluqueros de mascotas que podrás encontrar.El cuidado del pelo de tu mascota es esencial para mantenerla linda y saludable.Ofrecemos baños, cortes y peinados que combinan estos dos aspectos fundamentales para el bienestar de tu mascota.Consultá tu sucursal más cercana y cuidá de la apariencia de tu mejor amigo."
},{id:4 , titulo:"Farmacia" , icono: icono4 ,descripcion:"Farmacia abierta de Lunes a Sábado de 8 a 22 horas y Domingos de 10 a 13 y 18 a 21.Contamos con una amplia gama de medicamentos y lo que no tenemos, te lo conseguimos.Productos con gran variedad de precio y la mejor calidad. Servicio de entregas a domicilio.Laboratorio Propio de Recetas Magistrales. Vacunas, sueros , alimentos de todas las Marcas y alimentos Medicados"},
{id:5 , titulo:"Envios GRATIS en el dia", icono: icono5, descripcion:"Hacemos entregas GRATIS en la mayoría de CABA y Vicente Lopez ¡Consultanos por tu barrio!A parte, si haces tu pedido antes de las 16:00hs (en la mayoría de las zonas) podemos entregarlo el mismo día.Podés comprar desde tu casa en nuestra Tienda Online, Mercado Libre o Hacer tu pedido a nuestro Whatsapp y nosotros lo llevamos a donde quieras."},
{id:6, titulo:"Servicio de Internación", icono: icono6 ,descripcion:"Gracias a nuestra disponibilidad 24 horas los 365 días al año, también podemos ofrecerte el servicio de internación.En nuestras instalaciones tenemos espacios diferenciados para cada necesidad, como ser: oxigenoterapia, Unidad de Cuidados Intensivos (UCI) con espacios de internación para la comodidad de tu mascota.Nuestro objetivo es que se sienta como en casa" }])

  
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
