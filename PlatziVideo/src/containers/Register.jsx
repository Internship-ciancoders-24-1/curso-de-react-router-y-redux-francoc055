import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { registerRequest } from '../actions';
import { Link, Navigate } from 'react-router-dom';
import '../assets/styles/components/Register.scss';

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const [register, setRegister] = useState(false);
    

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    setRegister(true)
  }

  if (register) {
    return <Navigate to="/" />;
}

  return(
    <>
      <Header isRegister />
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Nombre"
              onChange={handleInput}
            />
            <input
              name="email"
              className="input"
              type="text"
              placeholder="Correo"
              onChange={handleInput}
            />
            <input
              name="password"
              className="input"
              type="password"
              placeholder="Contraseña" 
              onChange={handleInput}
            />
            <button className="button">Registrarme</button>
          </form>
          <Link to="/login">
            Iniciar sesión
          </Link>
        </section>
      </section>
    </>
  );
}

const mapDispatchToProps = {
  registerRequest, 
}

export default connect(null, mapDispatchToProps)(Register);
