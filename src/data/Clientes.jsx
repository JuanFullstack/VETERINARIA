import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../components/Firebase/Firebase";

/* Estilos de alertas y botones */
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Clientes = () => {
  //1- hooks
  const [clientes, setClientes] = useState([]);

  //2- referencia a la db
  const clientesCollection = collection(db, "clientes");

  //3- funcion para mostrar todos los docs
  const getClientes = async () => {
    const data = await getDocs(clientesCollection);
    setClientes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(clientes);
  };

  //4- funcion para eliminar un doc
  const deleteClientes = async (id) => {
    const cliente = doc(db, "clientes", id);
    await deleteDoc(cliente);
    getClientes();
  };

  //5- funcion de confirmacion para Sweet Alert 2
  const confirmDelete = (id) => {
    MySwal.fire({
      title: "Eliminar el cliente?",
      text: "No podrás revertirlo!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteClientes(id);
        Swal.fire("Borrado!", "El cliente fué elimnado con éxito", "success");
      }
    });
  };

  //6- usamos useEffect
  useEffect(() => {
    getClientes();
    //...
  }, []);

  //7- devolvemos la vista del componente
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mb-4">
            <div className="d-flex justify-content-sm-center justify-content-center">
              <Link to="/crearClientes" className="btn btn-primary m-4 w-50 fw-bold">
                Crear Cliente
              </Link>
            </div>

            <table className="table table-hover">
              <thead className="bg-secondary">
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                  <th>Email</th>
                  <th>Fecha</th>
                  <th>Categoria</th>
                  <th>Sintomas</th>
                </tr>
              </thead>

              <tbody>
                {clientes.map((cliente) => (
                  <tr key={cliente.id}>
                    <td>{cliente.nombre}</td>
                    <td>{cliente.apellido}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.fecha}</td>
                    <td>{cliente.categoria}</td>
                    <td>{cliente.sintomas}</td>
                    <td>
                      <Link
                        to={`/editarClientes/${cliente.id}`} 
                        className="btn btn-warning m-1"
                      >
                        <FaEdit size={20} />
                      </Link>
                      <button
                        onClick={() => confirmDelete(cliente.id)}
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

export default Clientes;
