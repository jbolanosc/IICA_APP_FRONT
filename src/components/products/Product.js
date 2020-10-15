import React from "react";
import Rating from "react-rating";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export default function Product(props) {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col-lg-12">
          <img className="thumbnail" src={props.product.imagePath || ""} />
          <div className="box-element product">
            <h3>
              Vendedor: <strong>{props.product.seller || ""}</strong>
            </h3>
            <h6>
              Producto: <strong>{props.product.name || ""}</strong>
            </h6>
            <h3>
              Disponible: <strong>{props.product.available || ""}</strong>
            </h3>
            <h3>
              Temporada: <strong>{props.product.season || ""}</strong>
            </h3>
            <h3>
              Temporada: <strong>{props.product.season || ""}</strong>
            </h3>
            <h3>
              Tipo: <strong>{props.product.productType || ""}</strong>
            </h3>
            <h3>
              Peso: <strong>{props.product.weight || ""}</strong>
            </h3>
            <Rating />
            <hr />
            <h4 className="d-block float-right">
              Precio <strong>{props.prouduct.price}</strong>
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
