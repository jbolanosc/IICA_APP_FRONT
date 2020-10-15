import React from "react";
import { Link } from "react-router-dom";

export default function Market() {
  return (
    <section className="container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 className="heading-1">
        <strong>
          ECUADOR<span className="second">AGRO APP</span>
        </strong>
      </h1>
      <div className="row">
        <div className="col-lg-12">
          <h2 className="second">Buscar Producto o tienda</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              aria-describedby="searchHelp"
              placeholder="Que quieres buscar"
            />
            <Link to="/bastket" className="btn btn-outline-success btn-md">
              Ver Canastas
            </Link>
            <Link to="/products" className="btn btn-outline-success btn-md">
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
