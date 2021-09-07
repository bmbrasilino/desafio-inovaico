import React, { useEffect, useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from '../../services/api';
import swal from "sweetalert";
import Nav from "../components/navBar";

const EditPatient = () => {
    let id = document.location.pathname.replace('/editar-paciente/', '');

    useEffect(() => {
        handleFindByIdPatient(id);
    }, []);

    let initialFormState = { name: '', email: '', phone: '', birthday: '', gender: '', height: '', weight: '' };

    const [ form, setForm ] = useState(initialFormState);

    const setInput = (newValue) => {
        setForm(form => ({ ...form , ...newValue}))
    }

    async function handleFindByIdPatient(id) {
        const response = await api.get(`/patients/${id}`);
        const { name,  phone,  email,  birthday,  gender,  height, weight } = response.data;
        initialFormState = { name, email, phone, birthday, gender, height, weight };
        document.querySelector('[name=name]').value = name || '--';
        document.querySelector('[name=email]').value = email || '--';
        document.querySelector('[name=phone]').value = phone || '--';
        document.querySelector('[name=birthday]').value = birthday || '--';
        document.querySelector('[name=gender]').value = gender || '--';
        document.querySelector('[name=height]').value = height || '--';
        document.querySelector('[name=weight]').value = weight || '--';

        setForm(form => ({ ...form , ...initialFormState}))
    }

    async function handleUpdatePatient(e, id) {
        e.preventDefault();
        await api.put(`/patients/${id}`, { ...form }).then((response) => {
            swal('Atualizado com sucesso!', '', 'success');
        }).catch((error) => {
            swal('Oops!',`Não foi possível atualizar o paciente!`, 'error');
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
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={(e) => handleUpdatePatient(e, id)}>
                            Atualizar
                        </button>
                    </form>
                </div>
            </div>
    </>
    )
}

export default EditPatient;
