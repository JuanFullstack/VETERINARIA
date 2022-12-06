import React, { useState } from "react";
import "./estilos.css";
import casaperro from "./imagenes/casaperro.jpg"

const NosotrosComponente = () => {
  return (
<div >
<div class="container"> 
        <div class="col-xs-12 col-lg-5 iso" >
            <img src={casaperro} alt=""/>
     </div>

     <div class="col-xs-12 ">


        <p class="texto"> Brindamos un servicio veterinario a domicilio en CABA para que las mascotas puedan recibir en su casa la atención que necesitan, sin las molestias que ocasionan el desplazarse a un centro veterinario.
             La prevención es muy importante, por ende, el diagnóstico temprano de una enfermedad permite que haya mejores resultados en su tratamiento. Lógicamente, las intervenciones quirúrgicas, hospitalizaciones y radiografías no se pueden realizar a domicilio.
              Para ello, trabajamos en conjunto con Centros de Internación para atender a casos más complejos.
               Veterinaria en Casa brinda un servicio veterinario personalizado enfocado en fortalecer el vínculo entre la mascota y vos. 
               Cada animal es un mundo, por eso contamos con especialistas de todo tipo para que puedas darle todas las atenciones a tu mascotas en el mismo lugar. Algunas de nuestras especialidades:
               
               Gastroenterología​
               
               Odontología 

               Traumatología
               Nefrología
               Oftalmología
               Cardiología
               Acupuntura
                Neurología
               Fisioterapia
               Hematología
               Endocrinología
               Oncología
               Dermatología
            
            
            
            </p>

     </div>


    </div>
    


</div>
  );
};

export default NosotrosComponente;
