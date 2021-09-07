import React, {useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import api from "../../services/api";
import swal from "sweetalert";
import {Link, Redirect} from "react-router-dom";

const Login = () => {

    const initialFormState = {
        email: "",
        password: ""
    }

    const [ form, setForm ] = useState(initialFormState);

    const setInput = (newValue) => {
        setForm(form => ({ ...form , ...newValue}))
    }

    async function handleLogin(e) {
        e.preventDefault();
        await api.post(`/sessions`, { ...form }).then((response) => {
            return window.location.pathname = '/dashboard';
        }).catch((error) => {
            swal(
                'Oops!',
                `Não foi possível fazer o login!`,
                'error'
            );
        });
    }
    return (
      <>
          <div className="container d-flex justify-content-center">
              <div className="row center-cols center-align">
                  <form>
                      <div className="form-group row">
                          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                          <div className="col-sm-10">
                              <input
                                  name="email"
                                  onChange={e => setInput({ email: e.target.value })}
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  placeholder="Email"/>
                          </div>
                      </div>
                      <div className="form-group row">
                          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                          <div className="col-sm-10">
                              <input
                                  name="password"
                                  onChange={e => setInput({ password: e.target.value })}
                                  type="password"
                                  className="form-control"
                                  id="password"
                                  placeholder="Senha"/>
                          </div>
                      </div>
                      <div className="form-group row">
                          <div className="col-sm-10">
                              <button type="submit" className="btn btn-primary" onClick={handleLogin}>Entrar<i className="material-icons">login</i></button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
      </>
  );
};

export default Login;
