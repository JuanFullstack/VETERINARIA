import React, { useState } from "react";
import "./estilos.css";
import img1 from "./imagenes/img1.jpg";
import img2 from "./imagenes/img2.jpg";
import img3 from "./imagenes/img3.jpg";


import fondo from "./imagenes/fondo.jpg";
const Testimonial = () => {
  return (
<div >




  

<div class="testimonial-area" style={{backgroundImage: `url(${fondo})` , backgroundPosition: 'center',
  backgroundSize: '100% auto' , backgroundRepeat: 'no-repeat'
  }}>
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="section-header text-center">
              <h4>Testimonios</h4>
              <h2>Lo que opinan nuestros clientes</h2>
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quaerat at animi unde, et, obcaecati eius.
              </p> */}
            </div>
          </div>
          <div class="col-sm-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="icon-area">
                    <i class="fa fa-comments"></i>
                  </div>
                  <div class="content text-center">
                    <p>
                     "Honestos, muy honestos…, cercanos, súper-profesionales!, lo cierto es que me resultan «rara avis» en un mundo (el veterinario) demasiado masificado y cada vez más carente de deontología…, a los que no les conozcan les invito, les reto, a que lo hagan; para nosotros fue una grandísima suerte cruzarnos con ellos. Multitud de servicios con el espacio y los medios imprescindibles, sin excesos y sin arrogancia…, fidelizan al cliente."
                    </p>
                    <div class="persona">
                      <img src={img1} alt="" />
                    </div>
                    <h5>Néstor</h5>
                    
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="icon-area">
                    <i class="fa fa-comments"></i>
                  </div>
                  <div class="content text-center">
                    <p>
                    Desde hace 9 años  que se encargan de mis perros. Quizá lo que más me gusta de ellos es la cercanía que tienen, el salir siempre con la sensación de que mis perros estánen buenas manos. Me gusta como trabajan en equipo y como se unen para diagnosticar y pautar el tratamiento. He tenido buenísima experiencia con ello en alguna intervención y me ha gustado que son veterinarios muy relacionados con otros profesionales del gremio, lo cual hace que su servicio al cliente sea de una profesionalidad máxima
                    </p>
                    <div class="persona">
                      <img src={img2} alt="" />
                    </div>
                    <h5>Martin </h5>
                    
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="icon-area">
                    <i class="fa fa-comments"></i>
                  </div>
                  <div class="content text-center">
                    <p>
                    Parte de mi familia que siempre han cuidado de mis seres más queridos con el mismo interés y cariño que le pondrían a cualquiera de sus propios perros. Sin duda alguna profesionales en los que confiar con los ojos cerrados. Un 10 por la clínica Club de Campo!!!
                    </p>
                    <div class="persona">
                      <img src={img3} alt="" />
                    </div>
                    <h5>Mauro</h5>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
       
    </div>
  );
};

export default Testimonial;
