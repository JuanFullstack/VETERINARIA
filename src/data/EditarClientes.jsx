import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";

const EditarClientes = () => { 
  //1- hooks
  const [nombre, setnombre] = useState("");
  const [apellido, setapellido] = useState("");
  const [email, setemail] = useState("");
  const [fecha, setfecha] = useState("");
  const [categoria, setcategoria] = useState("");
  const [sintomas, setsintomas] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  //2- funcion para actualizar
  const update = async (e) => {
    e.preventDefault();
    const cliente = doc(db, "clientes", id);
    const data = {
      nombre: nombre,
      apellido: apellido,
      email: email,
      fecha: fecha,
      categoria: categoria,
      sintomas: sintomas,
    };
    await updateDoc(cliente, data);
    navigate(`/clientes`);
  };

  //Obtener articulo segun ID
  const getClientesById = async () => {
    const cli = doc(db, "clientes", id);
    const cliente = await getDoc(cli);
    console.log(cliente.id);
    if (cliente.exists()) {
      console.log(cliente.data());
      setnombre(cliente.data().nombre);
      setapellido(cliente.data().apellido);
      setemail(cliente.data().email);
      setfecha(cliente.data().fecha);
      setcategoria(cliente.data().categoria);
      setsintomas(cliente.data().sintomas);
    } else {
      console.log("El cliente no existe");
    }
  };
  useEffect(() => {
    getClientesById();
    //...
  }, []);

  return (
    <div className="container-sm container-md container-lg w-50">
      <div className="row">
        <div className="col">
          <h1 className="text-center">Editar Clientes</h1>

          <form onSubmit={update} className="px-4 py-3">
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
                Actualizar Cliente
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarClientes;
