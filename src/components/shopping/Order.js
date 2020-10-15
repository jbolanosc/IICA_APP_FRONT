import React from "react";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      <h4 className="second">Carrito de compras</h4>
      <div className="row">
        <div className="col-lg-12">
          <div className="box-element">
            <Link to="/market" className="btn btn-outline-info float-right m-2">
              &#x2190; Continuar comprando
            </Link>
            <table className="table">
              <tr>
                <th>
                  <h5>Items: 3</h5>
                </th>
                <th>
                  <h5>Total: $60</h5>
                </th>
                <th>
                  <Link
                    className="btn btn-outline-success float-right m-3"
                    to="/checkout"
                  >
                    Pagar
                  </Link>
                </th>
              </tr>
            </table>
          </div>

          <br />

          <div className="box-element">
            <div className="cart-row">
              <div style={{ flex: 2 }}></div>
              <div style={{ flex: 2 }}>
                <strong>Item</strong>
              </div>
              <div style={{ flex: 1 }}>
                <strong>Price</strong>
              </div>
              <div style={{ flex: 1 }}>
                <strong>Quantity</strong>
              </div>
              <div style={{ flex: 1 }}>
                <strong>Total</strong>
              </div>
            </div>

            <div className="cart-row">
              <div style={{ flex: 2 }}>
                <img className="row-image" src="./img/placeholder.png" />
              </div>
              <div style={{ flex: 2 }}>
                <p>Product 1</p>
              </div>
              <div style={{ flex: 1 }}>
                <p>$20</p>
              </div>
              <div style={{ flex: 1 }}>
                <p className="quantity">2</p>
                <div className="quantity">
                  <img className="chg-quantity" src="./img/arrow-up.png" />

                  <img className="chg-quantity" src="./img/arrow-down.png" />
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p>$32</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
