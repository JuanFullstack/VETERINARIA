import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";

const Edit = () => {
  //1- hooks
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [intro, setIntro] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  //2- funcion para actualizar
  const update = async (e) => {
    e.preventDefault();
    const article = doc(db, "articulos", id);
    const data = {
      category: category,
      image: image,
      intro: intro,
      title: title,
    };
    await updateDoc(article, data);
    navigate(`/show`);
  };

  //Obtener articulo segun ID
  const getArticlesById = async () => {
    const art = doc(db, "articulos", id);
    const article = await getDoc(art);
    //console.log(article.id); OBTENGO ID
    if (article.exists()) {
      console.log(article.data());
      setCategory(article.data().category);
      setImage(article.data().image);
      setIntro(article.data().intro);
      setTitle(article.data().title);
    } else {
      console.log("El producto no existe");
    }
  };
  useEffect(() => {
    getArticlesById();
    //...
  }, []);

  return (
    <div className="container-sm container-md container-lg w-50">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Editar Articulo</h1>

          <form onSubmit={update} className="px-4 py-3">
            <div className="mb-3">
              <label className="form-label">Categoria</label>
              <input
                type="text"
                value={category}
                className="form-control"
                onChange={(e) => setCategory(e.target.value)}
                placeholder="ej. cuidados"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Imagen URL</label>
              <input
                type="text"
                value={image}
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
                placeholder="https://"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Texto</label>
              <input
                type="text"
                value={intro}
                className="form-control"
                onChange={(e) => setIntro(e.target.value)}
                placeholder="max. 50 palabras"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Titulo</label>
              <input
                type="text"
                value={title}
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="max. 40 caracteres"
              />
            </div>
            <div className="d-flex justify-content-sm-center justify-content-center">
              <button
                type="submit"
                className="btn btn-primary m-4 mb-5 w-50 fw-bold"
              >
                Actualizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
