import React, { useState } from "react";
import "./estilos.css";
import Equipo from "../Equipo/Equipo"
import Imagen1 from "../Nosotros/imagenes/veterinaria.jpg"
import Imagen2 from "../Nosotros/imagenes/veterinario2.jpg";
import Imagen3 from "../Nosotros/imagenes/veterinario3.jpg";

const NosotrosComponente = () => {
  const [toggleTab, setToggleTab] = useState(1);
  const toogleState = (index) => {
    setToggleTab(index);
  };
  return (
    <div >
       <div className="intermedio" > </div>
      <section className="nosotros" >
        <div className="container" data-aos="fade-down" >
          <div className="row ">
            <div className="column">
           <div className="nosotros-img"></div> 

            </div>

            <div className="column">
              <div className="tabs">
                <div
                  className={
                    toggleTab === 1 ? "single-tab active-tab" : "single-tab"
                  }
                  onClick={() => toogleState(1)}
                >
                  <h2>Nosotros</h2>
                </div>
                <div
                  className={
                    toggleTab === 2 ? "single-tab active-tab" : "single-tab"
                  }
                  onClick={() => toogleState(2)}
                >
                  <h2>Servicios</h2>
                </div>

                <div
                  className={
                    toggleTab === 3 ? "single-tab active-tab" : "single-tab"
                  }
                  onClick={() => toogleState(3)}
                >
                  <h2>Especialidades</h2>
                </div>
              </div>

              <div className="tab-content">
                {/* contenido about */}
                <div
                  className={
                    toggleTab === 1
                      ? "contenidoNosotros contenido-activo"
                      : "contenidoNosotros"
                  }
                >
                  <h2>Historia</h2>
                  <p>
                    Contamos con excelentes profesionales en el área de clínica médica y quirúrgica.
                    También ofrecemos el servicio en varias especialidades de Medicina Veterinaria,
                    con reconocidos médicos veterinarios.Además, se realizan todo tipo de intervenciones
                    quirúrgicas desde general hasta cirugía especializada.
                  </p>
                  <h3>Misión</h3>
                  <p>
                    Buscamos el bienestar integral de las mascotas ofreciendo servicios de calidad, fortaleciendo el
                    vínculo entre personas y animales a través de la toma de conciencia
                    y responsabilidad de los propietarios. La innovación y actualización son parte de nuestras herramientas.ibusdam.
                  </p>
                </div>

                {/* Skill Content */}
                <div className="tab-content">
                  {/* contenido about */}
                  <div className={
                    toggleTab === 2
                      ? "contenidoNosotros contenido-activo"
                      : "contenidoNosotros"
                  }>
                    <h2>Servicios</h2>
                    <p>
                      Contamos con los mejores Médicos Veterinarios con formación académica de calidad para ofrecerles las
                      herramientas necesarias para cuidar de tu mascota. Consultá todas nuestras sucursales de hospitales
                      veterinarios y visítanos para poder ayudarte y ayudar a tu compañero
                    </p>
                    <div className="servicios-row">
                      <div className="servicios-column">
                        <div className="progress-wrap">
                          <h3>INTERNAMIENTO</h3>
                          <div className="progress">
                            <div className="progress-bar INTERNAMIENTO">
                              <span>95%</span>
                            </div>
                          </div>
                        </div>
                      </div>



                      <div className="servicios-column">
                        <div className="progress-wrap">
                          <h3>MOVILIDAD</h3>
                          <div className="progress">
                            <div className="progress-bar  MOVILIDAD">
                              <span>85%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="servicios-column">
                        <div className="progress-wrap">
                          <h3>ECOGRAFÍA Y RAYOS X</h3>
                          <div className="progress">
                            <div className="progress-bar ECOGRAFÍA">
                              <span>90%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="servicios-column">
                        <div className="progress-wrap">
                          <h3>URGENCIAS</h3>
                          <div className="progress">
                            <div className="progress-bar URGENCIAS">
                              <span>100%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="servicios-column">
                        <div className="progress-wrap">
                          <h3>CLINICA GENERAL</h3>
                          <div className="progress">
                            <div className="progress-bar CLINICA ">
                              <span>90%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="servicios-column">
                        <div className="progress-wrap">
                          <h3>INTERCONSULTAS</h3>
                          <div className="progress">
                            <div className="progress-bar INTERCONSULTAS">
                              <span>95%</span>
                            </div>
                          </div>
                        </div>
                      </div>




                    </div>
                  </div>

                  {/*Experience content */}

                  <div
                    className={
                      toggleTab === 3
                        ? "contenidoNosotros contenido-activo"
                        : "contenidoNosotros"
                    }
                  >
                    <div className="especialidades-column">
                      <h5>Anestesiología</h5>
                      <span>Dr. Marco Velasquez</span>

                    </div>



                    <div className="especialidades-column mt-2">
                      <h5>Ecografía</h5>
                      <span>Dr. Jose Ramirez</span>

                    </div>


                    <div className="especialidades-column mt-2">
                      <h5>Odontología</h5>
                      <span>Dr. Luis Roca</span>

                    </div>





                    <div className="especialidades-column mt-2">
                      <h5>Cirugía General</h5>
                      <span>Dr. Luis Roca</span>

                    </div>





                    <div className="especialidades-column mt-2">
                      <h5>Patología</h5>
                      <span>Dr. Cesar Palacios</span>

                    </div>





                    <div className="especialidades-column mt-2">
                      <h5>Traumatología y ortopedia</h5>
                      <span>Dr. Ricardo Rojas - Dr. Giuseppe Granados</span>

                    </div>




                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Equipo />
    </div>
  );
};

export default NosotrosComponente;
