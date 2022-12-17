import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../components/Firebase/Firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./estilos.css";

const MySwal = withReactContent(Swal);


const Turnos = () => {

    const [turnos, setTurnos] = useState([]);

    const turnosCollection = collection(db, "Turnos");

    const getTurnos = async () => {
        const data = await getDocs(turnosCollection);

        setTurnos(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
    }

    const deleteTurno = async (id) => {
        const turnoDoc = doc(db, "Turnos", id);
        await deleteDoc(turnoDoc);
        getTurnos();
    }

    const confirmDelete = (id) => {
        Swal.fire({
            title: '¿Eliminar turno?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteTurno(id);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'El turno fue eliminado',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    useEffect(() => {
        getTurnos();
    }, [])

    return (
        <div className='container'>
            <div className='row my-5'>

                <div className="d-flex justify-content-center my-2">
                    <Link to="/solicitarturno" className="btn btn-secondary text-light px-5">
                        Crear turno
                    </Link>
                </div>

                <div className='col p-0'>
                    <div className='py-1 barraSuperior text-center'>
                        <div class="h4 d-inline-block col-3 col-md-2 text-center">Cliente</div>
                        <div class="h4 d-inline-block col-3 col-md-2 text-center">Mascota</div>
                        <div class="h4 d-inline-block col-3 col-md-2 text-center">Turno</div>
                        <div class="h4 d-inline-block col-3 col-md-2 text-center">Motivo</div>
                        <div class="h4 d-none d-md-inline-block col-md-2 text-center">Acciones</div>
                    </div>

                    {turnos.map((turno) => (
                        <div key={turno.id}>

                            <div className='p-1 text-center d-flex d-md-block align-items-center'>
                                <div class="lead d-inline-block col-3 col-md-2 text-center px-2">{turno.Nombre} {turno.Apellido}</div>

                                <div class="lead d-inline-block col-3 col-md-2 text-center px-2">{turno.NombreM} ({turno.EspecieM} - {turno.SexoM})</div>

                                <div class="lead d-inline-block col-3 col-md-2 text-center px-2">{turno.Dia} - {turno.Horario} </div>

                                <div class="lead d-inline-block col-3 col-md-2 text-center px-2">{turno.Motivo} </div>

                                <div className='d-none d-md-inline col-md-2 px-2'>
                                    <Link to={`/editarturno/${turno.id}`} className='btn btn-secondary text-light m-1 px-4'>Editar</Link>
                                    <button onClick={() => { confirmDelete(turno.id) }} className='btn btn-danger text-light m-1 px-4'>Eliminar</button>
                                </div>
                            </div>

                            <div>
                                <div className='d-md-none justify-content-around text-center pt-2'>
                                    <Link to={`/editarturno/${turno.id}`} className='btn btn-secondary text-light m-1 mx-4 px-4'>Editar</Link>
                                    <button onClick={() => { confirmDelete(turno.id) }} className='btn btn-danger text-light m-1 mx-4 px-4'>Eliminar</button>
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

export default Turnos;