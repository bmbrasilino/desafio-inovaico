import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NewPatient from "../pages/NewPatient";
import ListAllPatients from "../pages/ListPatient";
import EditPatient from "../pages/EditPatient";
import NewAppointment from "../pages/NewAppointment";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/novo-paciente"  component={NewPatient}/>
            <Route path="/listagem-paciente"  component={ListAllPatients}/>
            <Route path="/editar-paciente"  component={EditPatient}/>
            <Route path="/novo-atendimento"  component={NewAppointment}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
