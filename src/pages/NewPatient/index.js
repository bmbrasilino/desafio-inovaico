import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from '../../services/api';
import swal from "sweetalert";
import Nav from "../components/navBar";

const NewPatient = () => {
    const initialFormState = {
        name: "",
        phone: "",
        email: "",
        birthday: "",
        gender: "",
        height: "",
        weight: ""
    }

    const [ form, setForm ] = useState(initialFormState);

    const setInput = (newValue) => {
        setForm(form => ({ ...form , ...newValue}))
    }

    async function handlePatients(e) {
        e.preventDefault();
        await api.post(`/patients`, { ...form }).then((response) => {
            swal(
                'Cadastrado com sucesso!',
                `O paciente ${form.name} foi cadastrado com sucesso!`,
                'success'
            );
            window.location.reload();
        }).catch((error) => {
            swal(
                'Oops!',
                `Não foi possível cadastrar o paciente!`,
                'error'
            );
        });
    }

    return (
        <>
            <Nav/>
            <div className="container">
                <div className="row">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="name">Nome</label>
                                <input
                                    name="name"
                                    onChange={e => setInput({ name: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Insira o nome completo"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Email</label>
                                <input
                                    name="email"
                                    onChange={e => setInput({ email: e.target.value })}
                                    type="email"
                                    className="form-control"
                                    id="inputEmail4"
                                    placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefone</label>
                            <input
                                name="phone"
                                onChange={e => setInput({ phone: e.target.value })}
                                type="text"
                                className="form-control"
                                id="phone"
                                placeholder="Insira o telefone"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">Aniversário</label>
                            <input
                                name="birthday"
                                onChange={e => setInput({ birthday: e.target.value })}
                                type="text"
                                className="form-control"
                                id="birthday"
                                placeholder="Insira o aniversário"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gênero</label>
                            <input
                                name="gender"
                                onChange={e => setInput({ gender: e.target.value })}
                                type="text"
                                className="form-control"
                                id="gender"
                                placeholder="Insira o gênero"/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="height">Altura</label>
                                <input
                                    name="height"
                                    onChange={e => setInput({ height: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="height"
                                    placeholder="Insira a altura"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="weight">Peso</label>
                                <input
                                    name="weight"
                                    onChange={e => setInput({ weight: e.target.value })}
                                    type="text"
                                    className="form-control"
                                    id="weight"
                                    placeholder="Insira o peso"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handlePatients}>Cadastrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewPatient;
