import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from "../components/navBar";

const Dashboard = () => {
  return (
      <>
        <Nav/>
        <div className="container">
            <div className="row center-cols center-align">
                <div className="col m4 center">
                    <div className="card small">
                        <div className="card-body">
                            <h5 className="card-text"><b>Gestão de paciente</b></h5>
                            <p><Link to="/novo-paciente"><b>Novo paciente</b><span className="material-icons">person_add</span></Link></p>
                            <p><Link to="/listagem-paciente"><b>Listagem de pacientes</b><span className="material-icons">table_rows</span></Link></p>
                        </div>
                    </div>
                </div>
                <div className="col m4 center">
                    <div className="card small">
                        <div className="card-body">
                            <h5 className="card-text"><b>Gestão de atendimentos</b></h5>
                            <p><Link to="/listagem-atendimento"><b>Listagem de atendimento</b><span className="material-icons">table_rows</span></Link></p>
                        </div>
                    </div>
                </div>
                <div className="col m4 center">
                    <div className="card small">
                        <div className="card-body">
                            <h5 className="card-text"><b>Gestão de anotação</b></h5>
                            <p><Link to="/listagem-acompanhamento"><b>Listagem de anotação</b><span className="material-icons">table_rows</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
};

export default Dashboard;
