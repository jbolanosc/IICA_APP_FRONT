import React from "react";

export default function Products() {
  return (
    <section class="container d-flex flex-column justify-content-center align-items-center">
      <h2 class="second">Productos en venta</h2>
      <h5>Finca Quito</h5>
      <div class="row">
        <div class="col-lg-4">
          <img class="thumbnail" src="./img/placeholder.png" />
          <div class="box-element product">
            <h6>
              <strong>Producto</strong>
            </h6>
            <hr />

            <button class="btn btn-outline-secondary add-btn">
              Añadir al carrito
            </button>
            <a class="btn btn-outline-success" href="#">
              Ver
            </a>
            <h4 style="display: inline-block; float: right;">
              <strong>$20</strong>
            </h4>
          </div>
        </div>
        <div class="col-lg-4">
          <img class="thumbnail" src="./img/placeholder.png" />
          <div class="box-element product">
            <h6>
              <strong>Product</strong>
            </h6>
            <hr />

            <button class="btn btn-outline-secondary add-btn">
              Añadir al carrito
            </button>
            <a class="btn btn-outline-success" href="#">
              Ver
            </a>
            <h4 style="display: inline-block; float: right;">
              <strong>$20</strong>
            </h4>
          </div>
        </div>
        <div class="col-lg-4">
          <img class="thumbnail" src="./img/placeholder.png" />
          <div class="box-element product">
            <h6>
              <strong>Producto</strong>
            </h6>
            <hr />

            <button class="btn btn-outline-secondary add-btn">
              Añadir al carrito
            </button>
            <a class="btn btn-outline-success" href="#">
              Ver
            </a>
            <h4 style="display: inline-block; float: right;">
              <strong>$20</strong>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
