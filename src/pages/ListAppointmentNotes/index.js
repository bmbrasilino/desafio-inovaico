import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from '../../services/api';
import {Link} from "react-router-dom";
import swal from "sweetalert";
import { parseISO, format } from 'date-fns';
import Nav from "../components/navBar";

const ListAppointmentNotes = () => {
    const [allAppointmentNotes, setAppointmentNotes] = useState([]);

    useEffect(() => {
        handleAllAppointmentNotes();
    }, []);

    async function handleAllAppointmentNotes() {
        const response = await api.get(`/appointment_notes`);
        setAppointmentNotes(response.data);
    }

    async function handleDeleteAppointmentsNotes(id) {
       await api.delete(`/appointment_notes/${id}`).then((response) => {
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
                            <th scope="col">Anotações</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allAppointmentNotes.map((appointmentNotes,i) => (
                            <tr>
                                <td key={appointmentNotes.id}>{appointmentNotes.patient_id.name}</td>
                                <td>{format(parseISO(appointmentNotes.appointment_id.consultation_date), 'dd-MM-yyyy \'às\' HH:mm:ss')}</td>
                                <td>{appointmentNotes.annotation}</td>
                                <td>
                                    <Link to={`/novo-acompanhamento/${appointmentNotes.appointment_id.id}`} title='Novo acompanhamento'><span className="material-icons">post_add</span></Link>
                                    <Link to={`/editar-acompanhamento/${appointmentNotes.id}`} title='Editar'><span className="material-icons">edit</span></Link>
                                    <a href="#" onClick={() => handleDeleteAppointmentsNotes(appointmentNotes.id)} title='Deletar'><span className="material-icons">delete</span></a>
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

export default ListAppointmentNotes;
