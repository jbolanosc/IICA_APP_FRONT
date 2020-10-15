import React from "react";

export default function ProfileCard() {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col-lg-12">
          <img
            className="thumbnail"
            src={require("../../static/img/placeholder.png")}
          />
          <div className="box-element product">
            <h6>
              <strong>Producto</strong>
            </h6>
            <hr />
            <h4 className="d-block float-right">
              <strong>$20</strong>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
