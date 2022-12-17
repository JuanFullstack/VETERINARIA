import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../components/Firebase/Firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const EditarCliente = () => {

    const [form, setForm] = useState({
        Nombre: "",
        Apellido: "",
        Telefono: "",
        Email: "",
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const cambio = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const alertaGuardado = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cliente editado',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const update = async (e) => {
        e.preventDefault();
        const cliente = doc(db, "Clientes", id);
        const data = {
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            Telefono: form.Telefono,
            Email: form.Email
        };
        await updateDoc(cliente, data);
        alertaGuardado();
        navigate("/clientes");
    }

    const getClienteById = async (id) => {
        const cliente = await getDoc(doc(db, "Clientes", id));

        if (cliente.exists()) {
            setForm({
                Nombre: cliente.data().Nombre,
                Apellido: cliente.data().Apellido,
                Telefono: cliente.data().Telefono,
                Email: cliente.data().Email
            });
        }
        else {
            console.log("no existe");
        }
    };

    useEffect(() => {
        getClienteById(id);
    }, [id])

    return (
        <div className='container'>
            <form onSubmit={update} className="m-3 m-md-5">
                <div className='row justify-content-center'>

                    <div className='col col-12 col-lg-4 p-4 my-1 mx-md-1' id="colCliente">
                        <p className='display-6 text-center mb-4'><b>Editar cliente</b></p>
                        <div className='mb-3'>
                            <label className='form-label h5'>Nombre</label>
                            <input
                                name='Nombre'
                                value={form.Nombre}
                                type="text"
                                className='form-control'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Apellido</label>
                            <input
                                name='Apellido'
                                value={form.Apellido}
                                type="text"
                                className='form-control'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Teléfono</label>
                            <input
                                name='Telefono'
                                value={form.Telefono}
                                type="number"
                                className='form-control'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Email</label>
                            <input
                                name='Email'
                                value={form.Email}
                                type="text"
                                className='form-control'
                                onChange={cambio}
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

export default EditarCliente;