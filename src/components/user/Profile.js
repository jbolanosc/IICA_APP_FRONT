import React from "react";

export default function Profile() {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 className="second">Perfil</h1>

      <div className="row">
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
              <p className="second">Roberto Quiros</p>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email</label>
              <p className="second">roberto.quiros@agro.com</p>
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Cambiar contraseña</label>
              <button type="submit" className="btn btn-outline-success">
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Numero telefonico</label>
              <p className="second">634 8992</p>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Ubicación</label>
              <p className="second">Quito</p>
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
        <div>
          <div className="box-element">
            <h3>Mis productos</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
