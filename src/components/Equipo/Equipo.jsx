import React, { useState, useEffect } from "react";
import "./estilos.css";
import vet1 from "./imagenes/vet1.jpg";
import vet2 from "./imagenes/vet2.jpg";
import vet3 from "./imagenes/vet3.jpg";
import vet4 from "./imagenes/vet4.jpg";

import Veterinario from "./Veterinario/Veterinario"

const Equipo = () => {
  useEffect(() => {
    window.AOS.init({
      // Initialization
      duration: 2000,
    });
  });

  const [data, setData] = useState( [{id:1, nombre: "Veterinario1" , especialidad : "Cardiologia" , foto : vet1},{id:2, nombre: "Veterinario2" , especialidad : "Oftalmologia" , foto : vet2},
  {id:3, nombre: "Veterinario3" , especialidad : "Nefrologia" , foto : vet3} ,   {id:4, nombre: "Veterinario4" , especialidad : "Oncologia" , foto : vet4} ]
);


  
  const resultado = 
  data.map(({id, nombre , especialidad , foto}) => {
    return (

      <Veterinario key={id} nombre = {nombre}  especialidad = {especialidad}  foto = {foto} />
    )
  })


  return (
    <div className="contenedorSeccion">
      <div className="container" data-aos="fade-up">
        <div className="section-title p-5">
          <h2>Nuestro Equipo</h2>
          <p>
          Deseamos que siempre cuente con nosotros para el cuidado de su mascota. El equipo de nuestra consulta está formado por veterinarios y auxiliares de veterinaria con una excelente formación. Entre todos abarcamos un amplio espectro de conocimientos que nos permite aplicar en todo momento un tratamiento rápido y preciso que sea lo menos agresivo posible para su mascota.

 

          </p>
        </div>
        <div className="row">
        
        
              {resultado}

        
          
        </div>
      </div>

      <section></section>
    </div>
  );
};

export default Equipo;
