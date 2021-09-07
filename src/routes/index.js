import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import NewPatient from "../pages/NewPatient";
import ListAllPatients from "../pages/ListPatient";
import EditPatient from "../pages/EditPatient";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/dashboard"  component={Dashboard}/>
            <Route path="/novo-paciente"  component={NewPatient}/>
            <Route path="/listagem-paciente"  component={ListAllPatients}/>
            <Route path="/editar-paciente"  component={EditPatient}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
