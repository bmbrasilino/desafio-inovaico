import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from '../../services/api';
import swal from "sweetalert";
import Nav from "../components/navBar";

const EditAppointment = () => {
    let id = document.location.pathname.replace('/editar-atendimento/', '');
    let initialFormState = { consultation_date: ''};
    const [ form, setForm ] = useState(initialFormState);

    const setInput = (newValue) => {
        setForm(form => ({ ...form , ...newValue}))
    }

    useEffect(() => {
        handleFindByIdAppointment(id);
    }, []);


    async function handleFindByIdAppointment(id) {
        const response = await api.get(`/appointments/${id}`);
        let { consultation_date } = response.data;
        initialFormState = { consultation_date };
        consultation_date = consultation_date.replace('Z', '');
        document.querySelector('[name=consultation_date]').value = consultation_date || '--';

        setForm(form => ({ ...form , ...initialFormState}))
    }

    async function getFindByIdAppointment(id) {
        const response = await api.get(`/appointments/${id}`)
        return response.data;
    }

    async function handleUpdateAppointment(e, id) {
        e.preventDefault();
        const { patient_id } = await getFindByIdAppointment(id);
        await api.put(`/appointments/${id}`, { patient_id: patient_id.id, ...form }).then((response) => {
            swal('Atualizado com sucesso!', '', 'success');
            window.location.reload();
        }).catch((error) => {
            swal('Oops!',`Não foi possível atualizar o acompanhamento!`, 'error');
        });
    }

    return (
        <>
            <Nav/>
            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-group col-md-6">
                            <label htmlFor="consultation_date">Data da consulta</label>
                            <input
                                name="consultation_date"
                                onChange={e => setInput({ consultation_date: e.target.value })}
                                type="datetime-local"
                                className="form-control"
                                id="consultation_date"
                                placeholder="Insira o dia da consulta"/>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(e) => handleUpdateAppointment(e, id)}>
                            Atualizar
                        </button>
                    </form>
                </div>
            </div>
    </>
    )
}

export default EditAppointment;
