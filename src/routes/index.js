import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NewPatient from "../pages/NewPatient";
import ListAllPatients from "../pages/ListPatient";
import EditPatient from "../pages/EditPatient";
import NewAppointment from "../pages/NewAppointment";
import ListAppointment from "../pages/ListAppointment";
import EditAppointment from "../pages/EditAppointment";
import NewAppointmentNotes from "../pages/NewAppointmentNotes";
import ListAppointmentNotes from "../pages/ListAppointmentNotes";
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/novo-paciente"  component={NewPatient}/>
            <Route path="/listagem-paciente"  component={ListAllPatients}/>
            <Route path="/editar-paciente"  component={EditPatient}/>
            <Route path="/novo-atendimento"  component={NewAppointment}/>
            <Route path="/listagem-atendimento"  component={ListAppointment}/>
            <Route path="/editar-atendimento"  component={EditAppointment}/>
            <Route path="/novo-acompanhamento"  component={NewAppointmentNotes}/>
            <Route path="/listagem-acompanhamento"  component={ListAppointmentNotes}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
