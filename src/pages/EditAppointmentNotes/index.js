import React, { useState, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from '../../services/api';
import Nav from "../components/navBar";

const EditAppointmentNotes = () => {
    let id = document.location.pathname.replace('/editar-acompanhamento/', '');

    useEffect(() => {
        getFindByAppointmentNotes(id);
    }, []);

    let initialFormState = { annotation: '', patient_id: '', appointment_id: ''};

    const [ form, setForm ] = useState(initialFormState);

    const setInput = (newValue) => {
        setForm(form => ({ ...form , ...newValue}))
    }

    async function handleAnnotationNotes(e) {
        await api.put(`/appointment_notes/${id}`, { ...form });
    }

    async function getFindByAppointmentNotes(appointmentNotesId) {
        const response = await api.get(`/appointment_notes/${appointmentNotesId}`);
        const { name,  phone,  email,  birthday,  gender,  height, weight, id } = response.data.patient_id;
        initialFormState.patient_id = id;
        initialFormState.appointment_id = response.data.appointment_id.id;
        document.querySelector('[name=name]').value = name || '--';
        document.querySelector('[name=email]').value = email || '--';
        document.querySelector('[name=phone]').value = phone || '--';
        document.querySelector('[name=birthday]').value = birthday || '--';
        document.querySelector('[name=gender]').value = gender || '--';
        document.querySelector('[name=height]').value = height || '--';
        document.querySelector('[name=weight]').value = weight || '--';
        document.querySelector('[name=annotation-original]').value = response.data.annotation || '--';
    }

    return (
        <>
            <Nav/>

            <div className="container">
                <div className="row">
                    <form>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="name">Nome</label>
                                <input
                                    name="name"
                                    readOnly
                                    type="text"
                                    className="form-control"
                                    id="name"/>
                            </div>
                            <div className="col">
                                <label htmlFor="email">Email</label>
                                <input
                                    readOnly
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"/>
                            </div>
                            <div className="col">
                                <label htmlFor="phone">Telefone</label>
                                <input
                                    readOnly
                                    name="phone"
                                    type="text"
                                    className="form-control"
                                    id="phone"/>
                            </div>
                            <div className="col">
                                <label htmlFor="birthday">Aniversário</label>
                                <input
                                    readOnly
                                    name="birthday"
                                    type="text"
                                    className="form-control"
                                    id="birthday"/>
                            </div>
                        </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="gender">Gênero</label>
                                    <input
                                        readOnly
                                        name="gender"
                                        type="text"
                                        className="form-control"
                                        id="gender"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="height">Altura</label>
                                    <input
                                        readOnly
                                        name="height"
                                        type="text"
                                        className="form-control"
                                        id="height"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="weight">Peso</label>
                                    <input
                                        readOnly
                                        name="weight"
                                        type="text"
                                        className="form-control"
                                        id="weight"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="weight">Acompanhamento</label>
                                    <input
                                         className="form-control"
                                         readOnly
                                         name="annotation-original"
                                     />
                                </div>
                            </div>
                    </form>
                    <form>
                        <label htmlFor="annotation">Anotação da consulta</label>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                rows="5"
                                cols="50"
                                name="annotation"
                                id="annotation"
                                onChange={e => setInput({ annotation: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleAnnotationNotes}>Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditAppointmentNotes;
