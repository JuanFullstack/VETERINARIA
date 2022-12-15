import "./estilos.css";




const Veterinario = ({ foto, nombre, especialidad }) => {
  return (
    
      <div className="col-md-6 col-sm-12 col-xs-12">
        <div className="single-team" >
          <div className="img-area">
            <img src={foto} className="img-responsive" alt="" data-aos="fade-up" data-aos-delay="200"/>
            <div className="social">
              <ul className="list-inline">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="img-text">
            <h5>{nombre}</h5>
            <h1>{especialidad}</h1>
          </div>
        </div>
      </div>
    
  );
};

export default Veterinario;
