import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from '../../services/api';
import {Link} from "react-router-dom";
import swal from "sweetalert";
import Nav from "../components/navBar";

const ListAllPatients = () => {
    const [allPatient, setPatient] = useState([]);

    useEffect(() => {
        handleAllPatients();
    }, []);

    async function handleAllPatients() {
        const response = await api.get(`/patients`);
        setPatient(response.data);
    }

    async function handleDeletePatients(e, id) {
        e.preventDefault();
       await api.delete(`/patients/${id}`).then((response) => {
           swal('Deletado com sucesso!', '', 'success');
       }).catch((error) => {
           swal('Oops!',`Não foi possível listar os pacientes!`, 'error');
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
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Gênero</th>
                                <th scope="col">Peso/Altura</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPatient.map((patient,i) => (
                                <tr>
                                    <td key={patient.id}>{patient.name}</td>
                                    <td>{patient.email}</td>
                                    <td>{patient.phone}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.weight} kg - {patient.height} cm</td>
                                    <td>
                                        <Link to={`/editar-paciente/${patient.id}`} title='Editar'><span className="material-icons">edit</span></Link>
                                        <Link to={`/novo-atendimento/${patient.id}`} title='Novo atendimento'><span className="material-icons">book_online</span></Link>
                                        <a href="#" onClick={(e) => handleDeletePatients(e, patient.id)} title='Deletar'><span className="material-icons">delete</span></a>
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

export default ListAllPatients;
