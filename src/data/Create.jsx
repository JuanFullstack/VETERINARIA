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
  };

  //4- devolvemos la vista del componente
  return (
    <div className="container">
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
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image</label>
              <input
                type="text"
                value={image}
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Intro</label>
              <input
                type="text"
                value={intro}
                className="form-control"
                onChange={(e) => setIntro(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                value={title}
                className="form-control"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary mb-5">
              Crear
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
