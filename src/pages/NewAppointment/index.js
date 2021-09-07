import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from '../../services/api';
import swal from "sweetalert";
import Nav from "../components/navBar";

const NewAppointment = () => {
    let id = document.location.pathname.replace('/novo-atendimento/', '');

    const initialFormState = {
        consultation_date: ""
    }

    const [ form, setForm ] = useState(initialFormState);

    const setInput = (newValue) => {
        setForm(form => ({ ...form , ...newValue}))
    }

    async function handleAddAppointment(e) {
        e.preventDefault();
        await api.post(`/appointments`, { patient_id: id, ...form }).then((response) => {
            swal('Cadastrado com sucesso!','O agendamento foi cadastrado com sucesso!','success');
        }).catch((error) => {
            swal('Oops!','Não foi possível cadastrar o agendamento!','error');
        });
        window.location.reload();
    }

    return (
        <>
            <Nav/>
            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="date">Data da consulta</label>
                                <input
                                    name="consultation_date"
                                    onChange={e => setInput({ consultation_date: e.target.value })}
                                    type="datetime-local"
                                    className="form-control"
                                    id="date"
                                    placeholder="Insira o dia da consulta"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleAddAppointment}>Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewAppointment;
