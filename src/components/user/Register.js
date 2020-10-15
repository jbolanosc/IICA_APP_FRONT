import React from "react";

export default function Register() {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1>
        <bold>
          ECUADOR<span className="second">AGRO APP</span>
        </bold>
      </h1>
      <h3>Registro</h3>

      <form claclassNamess="row">
        <div className="col-lg-5">
          <div className="box-element">
            <img className="thumbnail" src="./img/placeholder.png" alt="" />
            <hr />
            <input type="file" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="box-element">
            <div className="form-group">
              <label for="exampleInputEmail1">Nombre completo</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu nombre completo"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu correo"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Contraseña</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Numero telefonico</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu numero telefonico"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Ubicación</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu Ubicacion"
              />
              <hr />
              <button type="submit" className="btn btn-outline-success">
                Ingresar
              </button>
              <button type="submit" className="btn btn-outline-success">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
