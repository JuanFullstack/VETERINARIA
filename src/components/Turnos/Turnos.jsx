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
            <div className='row text-center'>
                <div className='col my-5 p-0'>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th class="h4">Cliente</th>
                                <th class="h4">Mascota</th>
                                <th class="h4">Turno</th>
                                <th class="h4">Motivo</th>
                                <th class="h4">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {turnos.map((turno) => (
                                <tr key={turno.id}>
                                    <td class="lead">{turno.Nombre} {turno.Apellido}</td>
                                    <td class="lead">{turno.NombreM} ({turno.EspecieM} - {turno.SexoM})</td>
                                    <td class="lead">{turno.Dia} - {turno.Horario} </td>
                                    <td class="lead">{turno.Motivo} </td>

                                    <td>
                                        <div className='justify-content-around'>
                                            <Link to={`/editarturno/${turno.id}`} className='btn btn-secondary text-light m-1'>Editar</Link>
                                            <button onClick={() => { confirmDelete(turno.id) }} className="btn btn-danger text-light m-1">Eliminar</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Turnos;