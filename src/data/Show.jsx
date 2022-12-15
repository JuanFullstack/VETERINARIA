import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";

/* Estilos de alertas y botones */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Show = () => {
  //1- hooks
  const [articles, setArticles] = useState([]);

  //2- referencia a la db
  const articlesCollection = collection(db, "articulos");

  //3- funcion para mostrar todos los docs
  const getArticles = async () => {
    const data = await getDocs(articlesCollection);
    setArticles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //console.log(articles);
  };

  //4- funcion para eliminar un doc
  const deleteArticle = async (id) => {
    const article = doc(db, "articulos", id);
    await deleteDoc(article);
    getArticles();
  };

  //5- funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: "Eliminar el articulo?",
      text: "No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteArticle(id);
        Swal.fire("Borrado!", "El articulo fué elimnado con éxito", "success");
      }
    });
  };

  //6- usamos useEffect
  useEffect(() => {
    getArticles();
    //...
  }, []);

  //7- devolvemos la vista del componente
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <div className="d-flex justify-content-sm-center justify-content-center">
              <Link to="/create" className="btn btn-primary m-4 w-50 fw-bold">
                Crear Articulo
              </Link>
            </div>

            <table className="table table-hover">
              <thead className="bg-secondary">
                <tr>
                  <th>Categoria</th>
                  <th>Imagen</th>
                  <th>Intro</th>
                  <th>Titulo</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td>{article.category}</td>
                    <td>{article.image}</td>
                    <td>{article.intro}</td>
                    <td>{article.title}</td>
                    <td>
                      <Link
                        to={`/edit/${article.id}`}
                        className="btn btn-warning m-1"
                      >
                        <FaEdit size={20} />
                      </Link>
                      <button
                        onClick={() => confirmDelete(article.id)}
                        className="btn btn-danger m-1"
                        type="button"
                      >
                        <FaTrashAlt size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;
