import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";

//Creamos un formulario para subir datos a firebase
const CrearClientes = () => {
  //1- hooks
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [email, setemail] = useState("");
  const [fecha, setfecha] = useState("");
  const [categoria, setcategoria] = useState("");
  const [sintomas, setsintomas] = useState("");
  const navigate = useNavigate();

  //2- ref a la db
  const clientesCollection = collection(db, "clientes");

  //3- guardar en storage
  const store = async (e) => {
    e.preventDefault();
    await addDoc(clientesCollection, {
      nombre: nombre,
      apellido: apellido,
      email: email,
      fecha: fecha,
      categoria: categoria,
      sintomas: sintomas,
    });
    navigate(`/clientes`);
  };

  //4- devolvemos la vista del componente
  return (
    <div className="container-sm container-md container-lg w-50">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Crear Cliente</h1>

          <form onSubmit={store} className="px-4 py-3">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                value={nombre}
                className="form-control"
                onChange={(e) => setnombre(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Apellido</label>
              <input
                type="text"
                value={apellido}
                className="form-control"
                onChange={(e) => setapellido(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                value={email}
                className="form-control"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Fecha</label>
              <input
                type="text"
                value={fecha}
                className="form-control"
                onChange={(e) => setfecha(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Categoria</label>
              <input
                type="text"
                value={categoria}
                className="form-control"
                onChange={(e) => setcategoria(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Sintomas</label>
              <input
                type="text"
                value={sintomas}
                className="form-control"
                onChange={(e) => setsintomas(e.target.value)}
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

export default CrearClientes;
