import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../components/Firebase/Firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./estilos.css";


const MySwal = withReactContent(Swal);

const CrearCliente = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const clientesCollection = collection(db, "Clientes");

    const alertaGuardado = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cliente guardado',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const clienteGuardado = async (e) => {
        e.preventDefault();
        await addDoc(clientesCollection, {
            Nombre: nombre, Apellido: apellido, Telefono: telefono, Email: email
        });
        alertaGuardado();
        navigate("/clientes");
    }

    return (
        <div className='container'>
            <form onSubmit={clienteGuardado} className='m-3 m-md-5'>
                <div className='row justify-content-center'>

                    <div className='col col-12 col-lg-4 p-4 my-1 mx-md-1' id="colCliente">
                        <p className='display-6 text-center mb-4'><b>Nuevo cliente</b></p>
                        <div className='mb-3'>
                            <label className='form-label h5'>Nombre</label>
                            <input
                                value={nombre}
                                type="text"
                                className='form-control'
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Apellido</label>
                            <input
                                value={apellido}
                                type="text"
                                className='form-control'
                                onChange={(e) => setApellido(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Teléfono</label>
                            <input
                                value={telefono}
                                type="number"
                                className='form-control'
                                onChange={(e) => setTelefono(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Email</label>
                            <input
                                value={email}
                                type="text"
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='text-center'>
                            <button type="submit" className='btn btn-light btn-lg mt-3'>Guardar</button>
                        </div>
                    </div>
                    </div>

            </form>
        </div>
    )
}

export default CrearCliente;
