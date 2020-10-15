import React from "react";
import { Link } from "react-router-dom";

export default function Basket() {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      <h2 className="second">Canastas en venta</h2>
      <h5>Finca Quito</h5>
      <div className="row">
        <div className="col-lg-4">
          <img
            className="thumbnail"
            src={require("../../static/img/placeholder.png")}
          />
          <div className="box-element product">
            <h6>
              <strong>Producto</strong>
            </h6>
            <hr />
            <Link className="btn btn-outline-success" to="/product">
              Ver
            </Link>
            <h4 className="d-block float-right">
              <strong>$20</strong>
            </h4>
          </div>
        </div>
        <div className="col-lg-4">
          <img
            className="thumbnail"
            src={require("../../static/img/placeholder.png")}
          />
          <div className="box-element product">
            <h6>
              <strong>Producto</strong>
            </h6>
            <hr />

            <Link className="btn btn-outline-success" to="/product">
              Ver
            </Link>
            <h4 className="d-block float-right">
              <strong>$20</strong>
            </h4>
          </div>
        </div>
        <div className="col-lg-4">
          <img
            className="thumbnail"
            src={require("../../static/img/placeholder.png")}
          />
          <div className="box-element product">
            <h6>
              <strong>Producto</strong>
            </h6>
            <hr />
            <Link className="btn btn-outline-success" to="/product">
              Ver
            </Link>
            <h4 className="d-block float-right">
              <strong>$20</strong>
            </h4>
          </div>
        </div>
      </div>
      <br />
      <button className="btn btn-outline-success m-2">Comprar Canasta</button>
    </section>
  );
}
