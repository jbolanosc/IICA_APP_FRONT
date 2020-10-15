import React from "react";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <section class="container d-flex flex-column">
      <h3 class="m-2 second">Checkout</h3>
      <div className="row">
        <div className="col-lg-6">
          <div className="box-element">
            <form action="">
              <div class="user-info">
                <label>Nombre</label>
                <label>Email</label>
                <label>Telefono</label>
              </div>
              <div class="shipping-info">
                <div class="form-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Direccion"
                  />
                </div>
                <div class="form-field">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Estado o Provincia"
                  />
                </div>
                <div class="form-field">
                  <input type="text" class="form-control" placeholder="ZIP" />
                </div>
                <br />
                <input
                  type="submit"
                  class="btn btn-success"
                  name=""
                  id=""
                  value="Confirmar compra"
                />
              </div>
            </form>
          </div>

          <div class="box-element">
            <small>Paypal</small>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="box-element">
            <Link class="btn btn-outline-info" to="/shopping">
              &#x2190; Regresar al carrito
            </Link>
            <hr />
            <h3>Orden</h3>
            <hr />
            <div className="cart-row">
              <div style={{ flex: 2 }}>
                <img class="row-image" src="./img/placeholder.png" />
              </div>
              <div style={{ flex: 2 }}>
                <p>Producto 1</p>
              </div>
              <div style={{ flex: 1 }}>
                <p>$20.00</p>
              </div>
              <div style={{ flex: 1 }}>
                <p>x2</p>
              </div>
            </div>
            <div className="cart-row">
              <div style={{ flex: 2 }}>
                <img class="row-image" src="./img/placeholder.png" />
              </div>
              <div style={{ flex: 2 }}>
                <p>Producto 2</p>
              </div>
              <div style={{ flex: 1 }}>
                <p>$20.00</p>
              </div>
              <div style={{ flex: 1 }}>
                <p>x2</p>
              </div>
            </div>
            <h5>Items: 2</h5>
            <h5>Total: $40</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
