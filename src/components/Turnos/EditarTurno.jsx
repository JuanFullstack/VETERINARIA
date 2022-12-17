import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../components/Firebase/Firebase';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

const EditarTurno = () => {

    const [form, setForm] = useState({
        Nombre: "",
        Apellido: "",
        Telefono: "",
        Email: "",
        NombreM: "",
        FechaDeNacM: "",
        EspecieM: "",
        SexoM: "",
        Dia: "",
        Horario: "",
        Motivo: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();

    const cambio = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const [horario, setHorario] = useState('');
    const [especieM, setEspecieM] = useState('');
    const [sexoM, setSexoM] = useState('');

    const alertaGuardado = () => {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Turno editado',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const update = async (e) => {
        e.preventDefault();
        const turno = doc(db, "Turnos", id);
        const data = {
            Nombre: form.Nombre,
            Apellido: form.Apellido,
            Telefono: form.Telefono,
            Email: form.Email,
            NombreM: form.NombreM,
            FechaDeNacM: form.FechaDeNacM,
            EspecieM: form.EspecieM,
            SexoM: form.SexoM,
            Dia: form.Dia,
            Horario: form.Horario,
            Motivo: form.Motivo
        };
        await updateDoc(turno, data);
        alertaGuardado();
        navigate("/");
    }

    const getTurnoById = async (id) => {
        const turno = await getDoc(doc(db, "Turnos", id));

        if (turno.exists()) {
            setForm({
                Nombre: turno.data().Nombre,
                Apellido: turno.data().Apellido,
                Telefono: turno.data().Telefono,
                Email: turno.data().Email,
                NombreM: turno.data().NombreM,
                FechaDeNacM: turno.data().FechaDeNacM,
                EspecieM: turno.data().EspecieM,
                SexoM: turno.data().SexoM,
                Dia: turno.data().Dia,
                Horario: turno.data().Horario,
                Motivo: turno.data().Motivo
            });
        }
        else {
            console.log("no existe");
        }
    };

    useEffect(() => {
        getTurnoById(id);
    }, [id])

    return (
        <div className='container'>
            <form onSubmit={update} className="m-3 m-md-5">
                <div className='row justify-content-center'>

                    <div className='col col-12 col-lg-4 p-4 my-1 mx-md-1'>
                        <p className='display-6 text-center mb-4'><b>Cliente</b></p>
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
                    </div>

                    <div className='col col-12 col-lg-4 p-4 my-1 mx-md-1'>
                        <p className='display-6 text-center mb-4'><b>Mascota</b></p>
                        <div className='mb-3'>
                            <label className='form-label h5'>Nombre</label>
                            <input
                                name='NombreM'
                                value={form.NombreM}
                                type="text"
                                className='form-control'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Fecha de nacimiento</label>
                            <input
                                name='FechaDeNacM'
                                max={new Date().toISOString().slice(0, 10)}
                                type="date"
                                value={form.FechaDeNacM}
                                className='form-control'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Especie</label>
                            <div onChange={cambio}>
                                <label className='mx-3'><input onChange={(e) => setEspecieM(form.EspecieM = e.target.value)} type="radio" value="Gato" name="especieM" checked={form.EspecieM === "Gato"} /> Gato</label>
                                <label className='mx-3'><input onChange={(e) => setEspecieM(form.EspecieM = e.target.value)} type="radio" value="Perro" name="especieM" checked={form.EspecieM === "Perro"} /> Perro</label>
                                <label className='mx-3'><input onChange={(e) => setEspecieM(form.EspecieM = e.target.value)} type="radio" value="Otro" name="especieM" checked={form.EspecieM === "Otro"} /> Otro</label>
                            </div>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Sexo</label>
                            <div>
                                <label className='mx-3'><input onChange={(e) => setSexoM(form.SexoM = e.target.value)} type="radio" value="Hembra" name="sexoM" checked={form.SexoM === "Hembra"} /> Hembra</label>
                                <label className='mx-3'><input onChange={(e) => setSexoM(form.SexoM = e.target.value)} type="radio" value="Macho" name="sexoM" checked={form.SexoM === "Macho"} /> Macho</label>
                            </div>
                        </div>
                    </div>

                    <div className='col col-12 col-lg-3 p-4 my-1 mx-md-1' id="colTurno">
                        <p className='display-6 text-center mb-4'><b>Turno</b></p>
                        <div className='mb-3'>
                            <label className='form-label h5'>Dia</label>
                            <input
                                name='Dia'
                                min={new Date().toISOString().slice(0, 10)}
                                type="date"
                                value={form.Dia}
                                className='form-control'
                                onChange={cambio}
                            />
                        </div>

                        <div className='mb-3'>
                            <label className='form-label h5'>Horario</label>
                            <select value={horario} onChange={(e) => setHorario(form.Horario = e.target.value)} className='form-select'>
                                <option value={form.Horario}>Confirmado: {form.Horario}</option>
                                <option value={"09:30"}>09:30</option>
                                <option value={"11:00"}>11:00</option>
                                <option value={"14:00"}>14:00</option>
                            </select>
                        </div>


                        <div className='mb-3'>
                            <label className='form-label h5'>Motivo</label>
                            <input
                                name='Motivo'
                                value={form.Motivo}
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

export default EditarTurno;
