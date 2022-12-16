import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../components/Firebase/Firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import "./estilos.css";


const MySwal = withReactContent(Swal);

const SolicitarTurno = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");

    const [nombreM, setNombreM] = useState("");
    const [fechaDeNacM, setFechaDeNacM] = useState("");
    const [especieM, setEspecieM] = useState("");
    const [sexoM, setSexoM] = useState("");

    const [dia, setDia] = useState("");
    const [horario, setHorario] = useState("");
    const [motivo, setMotivo] = useState("");

    const navigate = useNavigate();

    const turnosCollection = collection(db, "Turnos");

    const alertaSolicitud = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Turno solicitado',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const turnoSolicitado = async (e) => {
        e.preventDefault();
        await addDoc(turnosCollection, {
            Nombre: nombre, Apellido: apellido, Telefono: telefono, Email: email,
            NombreM: nombreM, FechaDeNacM: fechaDeNacM, EspecieM: especieM, SexoM: sexoM,
            Dia: dia, Horario: horario, Motivo: motivo
        });
        alertaSolicitud();
        navigate("/");
    }

    return (
        <div className='container'>
            <form onSubmit={turnoSolicitado} className='m-5'>
                <div className='row justify-content-center'>

                    <div className='col col-12 col-lg-4 p-4 m-1'>
                        <p className='display-6 text-center mb-4'><b>Tus datos</b></p>
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
                    </div>

                    <div className='col col-12 col-lg-4 p-4 m-1'>
                    <p className='display-6 text-center mb-4'><b>Tu mascota</b></p>
                        <div className='mb-3'>
                            <label className='form-label h5'>Nombre</label>
                            <input
                                value={nombreM}
                                type="text"
                                className='form-control'
                                onChange={(e) => setNombreM(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Fecha de nacimiento</label>
                            <input
                                max={new Date().toISOString().slice(0, 10)}
                                type="date"
                                value={fechaDeNacM}
                                className='form-control'
                                onChange={(e) => setFechaDeNacM(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Especie</label>
                            <div onChange={(e) => setEspecieM(e.target.value)}>
                                <label className='mx-3'><input type="radio" value="Gato" name="especieM" /> Gato</label>
                                <label className='mx-3'><input type="radio" value="Perro" name="especieM" /> Perro</label>
                                <label className='mx-3'><input type="radio" value="Otro" name="especieM" /> Otro</label>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Sexo</label>
                            <div onChange={(e) => setSexoM(e.target.value)}>
                                <label className='mx-3'><input type="radio" value="Hembra" name="sexoM" /> Hembra</label>
                                <label className='mx-3'><input type="radio" value="Macho" name="sexoM" /> Macho</label>
                            </div>
                        </div>
                    </div>

                    <div className='col col-12 col-lg-3 p-4 m-1' id="colTurno">
                    <p className='display-6 text-center mb-4'><b>Turno</b></p>
                        <div className='mb-3'>
                            <label className='form-label h5'>Dia</label>
                            <input
                                min={new Date().toISOString().slice(0, 10)}
                                type="date"
                                value={dia}
                                className='form-control'
                                onChange={(e) => setDia(e.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Horario</label>
                            <select onChange={(e) => setHorario(e.target.value)} className='form-select'>
                                <option value="-">-</option>
                                <option value="09:30">09:30</option>
                                <option value="11:00">11:00</option>
                                <option value="14:00">14:00</option>
                            </select>
                        </div>


                        <div className='mb-3'>
                            <label className='form-label h5'>Motivo</label>
                            <input
                                value={motivo}
                                type="text"
                                className='form-control'
                                onChange={(e) => setMotivo(e.target.value)}
                            />
                        </div>

                        <div className='text-center'>
                            <button type="submit" className='btn btn-light btn-lg mt-3'>Solicitar</button>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default SolicitarTurno;
