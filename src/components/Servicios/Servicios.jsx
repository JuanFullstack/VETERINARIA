
import "./css/estilos.css";
import React, { useEffect } from 'react';


function Servicios() {

    
       useEffect(() => {
          window.AOS.init({
             // Initialization
            duration: 2000,
          });
        });
      
  return (
    <section class="services">
      <div class="container" data-aos="fade-down">
        <div class="heading">
          <h2>Servicios</h2>
          <p>Nuestros Servicios</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex aling-item-center mb-5">
            <div class="icon_box one">
            <i class="fa-solid fa-house-medical text-white"></i>
              <div class="icon">
              <i class="fa fa-hospital-o  text-white" aria-hidden="true" ></i>
              
              </div>
              <h4 class="title">Consultorio Veterinario las 24hs</h4>
              <p class="description">
              <span style={{fontSize: "3em" , color: "red"}}>
              <i class="fa fa-hospital-o" aria-hidden="true" style={{color: "red"}}></i>

              <i class="fa-solid fa-house-medical "></i>
              </span>
            
                Gracias a nuestra disponibilidad 24 horas los 365 días al año,
                también podemos ofrecerte el servicio de internación. En
                nuestras instalaciones tenemos espacios diferenciados para cada
                necesidad, como ser: oxigenoterapia, Unidad de Cuidados
                Intensivos (UCI) con espacios de internación para la comodidad
                de tu mascota. Nuestro objetivo es que se sienta como en casa.
                Contamos con un espacio separado del resto para la internación
                de pacientes infecto-contagiosos; con enfermedades como
                parvovirus, moquillo o vif y vilef. Espacio exclusivo Cat
                Friendly para espera, consulta e internación.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex aling-item-center mb-5">
            <div class="icon_box two">
              <div class="icon">
                <i class="far fa-desktop"></i>
              </div>
              <h4 class="title">Especialistas</h4>
              <p class="description">
                En Pets contamos con los mejores Médicos Veterinarios con
                formación académica de calidad para ofrecerles las herramientas
                necesarias para cuidar de tu mascota. Consultá todas nuestras
                sucursales de hospitales veterinarios y visítanos para poder
                ayudarte y ayudar a tu compañero.Cada animal es un mundo, por
                eso contamos con especialistas de todo tipo para que puedas
                darle todas las atenciones a tu mascotas en el mismo lugar.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex aling-item-center mb-5">
            <div class="icon_box three">
              <div class="icon">
                <i class="far fa-search"></i>
              </div>
              <h4 class="title">Peluqueria </h4>
              <p class="description">
                En Pets tenemos las mejores peluquerías para perros y gatos con
                los mejores peluqueros de mascotas que podrás encontrar. El
                cuidado del pelo de tu mascota es esencial para mantenerla linda
                y saludable. Ofrecemos baños, cortes y peinados que combinan
                estos dos aspectos fundamentales para el bienestar de tu
                mascota. Consultá tu sucursal más cercana y cuidá de la
                apariencia de tu mejor amigo.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex aling-item-center mb-5">
            <div class="icon_box four">
              <div class="icon">
                <i class="far fa-desktopfas fa-desktop"></i>
              </div>
              <h4 class="title">Farmacia</h4>
              <p class="description">
                {" "}
                Contamos con todo lo que tu mascota necesita para su salud.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex aling-item-center mb-5">
            <div class="icon_box five">
              <div class="icon">
                <i class="far fa-desktopfas fa-desktop"></i>
              </div>
              <h4 class="title">Pets Shop</h4>
              <p class="description">
                {" "}
                Productos con gran variedad de precio y la mejor calidad.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex aling-item-center mb-5">
            <div class="icon_box six">
              <div class="icon">
                <i class="far fa-desktopfas fa-desktop"></i>
              </div>
              <h4 class="title">Envios GRATIS en el dia</h4>
              <p class="description">
                Hacemos entregas GRATIS en la mayoría de CABA y Vicente Lopez
                ¡Consultanos por tu barrio! A parte, si haces tu pedido antes de
                las 16:00hs (en la mayoría de las zonas) podemos entregarlo el
                mismo día. Podés comprar desde tu casa en nuestra Tienda Online,
                Mercado Libre o Hacer tu pedido a nuestro Whatsapp y nosotros lo
                llevamos a donde quieras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicios;
