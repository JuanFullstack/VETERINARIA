import { useState, useEffect } from "react";

export default function Mascotas() {

  const [perros, setPerros] = useState([]);

  //Url con todos los datos raw.
  const URL = "http://localhost:3004/articulos";
  //Funcion que trae toda la info 'personajes'
  const fetchMascotas = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPerros(data);
      })
      .catch((error) => console.log(error));
  };

  //Se ejecuta por defecto por primera vez al renderizar el componente y en cada updateting.
  useEffect(() => {
    fetchMascotas(URL);
  }, []);

  return (
    <>
      <h2 className="text-center pb-1 fw-bold Titulo-blog">Blog de las mascotas.</h2>
      <h5 className="text-center pb-5 Subtitulo-blog">Cuidados, consejos y múltiples tips para que tú y tu amigo de cuatro patas lo pasen bomba.</h5>
      <section>
        <div className="container-sm container-md container-lg container-xl">
          <div className="row">
            {perros.map((item, i) => (
              <div
                key={i}
                className="col-xs-12 col-md-6 col-lg-4 mb-4 Articulo"
                id={"articulo-" + item.id}>
                <div className="card border-light">
                  <img src={item.image} alt="Perros" className="imagen-card" />
                  <p className="card-title text-uppercase fw-bold Categoria-articulo">
                    {item.category}
                  </p>
                  <h5 className="card-title fw-bold Titulo-articulo">{item.title}</h5>
                  <div className="card-body">
                    <div className="Descripcion-articulo">
                      <p className="card-text justify-content-center">
                        {item.intro}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
