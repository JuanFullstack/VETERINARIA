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
    const article = dov(db, "articulos", id);
    const data = {
      category: category,
      image: image,
      intro: intro,
      title: title,
    };
    await updateDoc(article, data);
    navigate(`/show`);
  };

  //3- Obtener articulo segun ID
  const getArticlesById = async (id) => {
    const article = await getDoc(doc(db, "articulos", id));
    if (article.exists()) {
      //console.log(article.data());
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
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Editar Articulo</h1>

          <form onSubmit={update}>
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
                onChange={(e) =>
                  setTitle(e.target.value) && console.log(e.target.value)
                }
                placeholder={title}
              />
            </div>

            <button type="submit" className="btn btn-primary mb-5">
              Actualizar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
