import "./estilos/estilos.css"


function Servicio({titulo , icono ,descripcion }) {
    return (
        <div className="col-lg-4 col-md-6 d-flex aling-item-center mb-5">
        <div className="icon_box one">
          <div className="iconS ">
            <img src={icono} alt="" />
          </div>
          <h4 className="title">{titulo}</h4>
          <p className="description">
            {descripcion}
         
          </p>
        </div>
      </div>
    )
  }
  
  export default Servicio