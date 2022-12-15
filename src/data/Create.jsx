import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";

//Creamos un formulario para subir datos a firebase
const Create = () => {
  //1- hookss
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [intro, setIntro] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  //2- ref a la db
  const articlesCollection = collection(db, "articulos");

  //3- guardar en storage
  const store = async (e) => {
    e.preventDefault();
    await addDoc(articlesCollection, {
      category: category,
      image: image,
      intro: intro,
      title: title,
    });
    navigate(`/show`);
  };

  //4- devolvemos la vista del componente
  return (
    <div className="container-sm container-md container-lg w-50">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Crear Articulo</h1>

          <form onSubmit={store}>
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
                placeholder="max. 40 caracteres."
              />
            </div>
            <div className="d-flex justify-content-sm-center justify-content-center">
              <button
                type="submit"
                className="btn btn-primary m-4 mb-5 w-50 fw-bold"
              >
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
