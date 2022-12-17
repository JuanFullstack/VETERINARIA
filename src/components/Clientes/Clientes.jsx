import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../components/Firebase/Firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./estilos.css";

const MySwal = withReactContent(Swal);


const Clientes = () => {

  const [clientes, setClientes] = useState([]);

  const clientesCollection = collection(db, "Clientes");

  const getClientes = async () => {
    const data = await getDocs(clientesCollection);

    setClientes(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }

  const deleteCliente = async (id) => {
    const clienteDoc = doc(db, "Clientes", id);
    await deleteDoc(clienteDoc);
    getClientes();
  }

  const confirmDelete = (id) => {
    Swal.fire({
      title: '¿Eliminar cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCliente(id);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El cliente fue eliminado',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  useEffect(() => {
    getClientes();
  }, [])

  return (
    <div className='container'>
      <div className='row my-5'>

      <div className="d-flex justify-content-center my-2">
        <Link to="/crearcliente" className="btn btn-secondary text-light px-5">
          Crear Cliente
        </Link>
      </div>

        <div className='col p-0'>
          <div className='py-1 barraSuperior text-center'>
            <div class="h4 d-inline-block col-3 col-md-2 text-center">Nombre</div>
            <div class="h4 d-inline-block col-3 col-md-2 text-center">Apellido</div>
            <div class="h4 d-inline-block col-3 col-md-2 text-center">Teléfono</div>
            <div class="h4 d-inline-block col-3 col-md-2 text-center">Email</div>
            <div class="h4 d-none d-md-inline-block col-md-2 text-center">Acciones</div>
          </div>

          {clientes.map((cliente) => (
            <div key={cliente.id}>

              <div className='p-1 text-center d-flex d-md-block align-items-center'>
                <div class="lead d-inline-block col-3 col-md-2 text-center px-2 text-truncate">{cliente.Nombre}</div>

                <div class="lead d-inline-block col-3 col-md-2 text-center px-2 text-truncate">{cliente.Apellido}</div>

                <div class="lead d-inline-block col-3 col-md-2 text-center px-2 text-truncate">{cliente.Telefono}</div>

                <div class="lead d-inline-block col-3 col-md-2 text-center px-2 text-truncate">{cliente.Email} </div>

                <div className='d-none d-md-inline col-md-2 px-2'>
                  <Link to={`/editarcliente/${cliente.id}`} className='btn btn-secondary text-light m-1 px-4'>Editar</Link>
                  <button onClick={() => { confirmDelete(cliente.id) }} className='btn btn-danger text-light m-1 px-4'>Eliminar</button>
                </div>
              </div>

              <div>
                <div className='d-md-none justify-content-around text-center pt-2'>
                  <Link to={`/editarcliente/${cliente.id}`} className='btn btn-secondary text-light m-1 mx-4 px-4'>Editar</Link>
                  <button onClick={() => { confirmDelete(cliente.id) }} className='btn btn-danger text-light m-1 mx-4 px-4'>Eliminar</button>
                </div>
              </div>
              <hr class="hr my-md-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clientes;