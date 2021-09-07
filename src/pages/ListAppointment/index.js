import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from '../../services/api';
import {Link} from "react-router-dom";
import swal from "sweetalert";
import { parseISO, format } from 'date-fns';
import Nav from "../components/navBar";

const ListAppointment = () => {
    const [allAppointment, setAppointment] = useState([]);

    useEffect(() => {
        handleAllAppointments();
    }, []);

    async function handleAllAppointments() {
        const response = await api.get(`/appointments`);
        setAppointment(response.data);
    }

    async function handleDeleteAppointments(id) {
       await api.delete(`/appointments/${id}`).then((response) => {
           swal('Deletado com sucesso!', '', 'success');
       }).catch((error) => {
           swal('Oops!',`Não foi possível deletar o agendamento!`, 'error');
       });
        window.location.reload();
    }

    return (
        <>
        <Nav/>
        <div className="container">
            <div className="row">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Paciente</th>
                            <th scope="col">Data da consulta</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAppointment.map((appointment,i) => (
                            <tr>
                                <td key={appointment.id}>{appointment.patient_id.name}</td>
                                <td>{format(parseISO(appointment.consultation_date), 'dd-MM-yyyy \'às\' HH:mm:ss')}</td>
                                <td>
                                    <Link to={`/novo-acompanhamento/${appointment.id}`} title='Novo acompanhamento'><span className="material-icons">post_add</span></Link>
                                    <Link to={`/editar-atendimento/${appointment.id}`} title='Editar'><span className="material-icons">edit</span></Link>
                                    <a href="#" onClick={() => handleDeleteAppointments(appointment.id)} title='Deletar'><span className="material-icons">delete</span></a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
    )
}

export default ListAppointment;
