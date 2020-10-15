import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <form className="text-center">
        <h1>
          <strong>
            ECUADOR<span className="second">AGRO APP</span>
          </strong>
        </h1>
        <h3>Inicio de Sesion</h3>
        <div className="form-group">
          <label>Correo Electronico</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Ingresa tu correo"
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Contraseña"
          />
        </div>
        <button type="submit" className="btn btn-outline-success btn-md">
          Ingresar
        </button>
        <Link to="/register" className="btn btn-outline-success btn-md">
          Registrarse
        </Link>
      </form>
    </section>
  );
}
