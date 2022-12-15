import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";


export default function Mascotas() {
  //1- hooks
  const [articles, setArticles] = useState([]);

  //2- referencia a la db
  const articlesCollection = collection(db, "articulos");

  //3- funcion para mostrar todos los datos
  const getArticles = async () => {
    const data = await getDocs(articlesCollection);
    const articles = setArticles(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    //console.log(articles)
  };

  //Se ejecuta por defecto por primera vez al renderizar el componente y en cada updating.
  useEffect(() => {
    getArticles();
  }, []);


  return (
    <>
      <div className="container">        
        <h2 className="text-center pb-1 fw-bold Titulo-blog">
          Blog de las mascotas.
        </h2>
        <h5 className="text-center pb-5 Subtitulo-blog">
          Cuidados, consejos y múltiples tips para que tú y tu amigo de cuatro
          patas lo pasen bomba.
        </h5>
      </div>

      <section>
        <div className="container-sm container-md container-lg">
          <div className="row">
            {articles.map((article) => (
              <div
                key={article.id}
                className="col-xs-12 col-sm-12 col-md-6 col-lg-4 mb-4 Articulo"
                id={"articulo-" + article.id}
              >
                <div className="card h-100 Tarjeta-fondo">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="imagen-card"
                  />
                  <p className="card-title text-uppercase fw-bold Categoria-articulo">
                    {article.category}
                  </p>
                  <h5 className="card-title fw-bold Titulo-articulo">
                    {article.title}
                  </h5>
                  <div className="card-body">
                    <div className="Descripcion-articulo">
                      <p className="card-text justify-content-center">
                        {article.intro}
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
