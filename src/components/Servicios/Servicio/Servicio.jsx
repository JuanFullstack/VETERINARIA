import "./estilos/estilos.css"


function Servicio({titulo , icono ,descripcion }) {
    return (
        <div class="col-lg-4 col-md-6 d-flex aling-item-center mb-5">
        <div class="icon_box one">
          <div class="iconS ">
            <img src={icono} alt="" />
          </div>
          <h4 class="title">{titulo}</h4>
          <p class="description">
            {descripcion}
         
          </p>
        </div>
      </div>
    )
  }
  
  export default Servicio