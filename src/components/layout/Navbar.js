import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  function toggleMenu() {
    let navigation = document.querySelector(".navigation");
    let toggle = document.querySelector(".toggle");

    navigation.classList.toggle("active");
    toggle.classList.toggle("active");
  }

  return (
    <Fragment>
      <div className="navigation">
        <ul>
          <li>
            <Link to="/">
              <span className="icon">
                <i className="fa fa-home" aria-hidden="true"></i>
              </span>
              <span className="title">Inicio</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <span className="icon">
                <i className="fa fa-user" aria-hidden="true"></i>
              </span>
              <span className="title">Perfil</span>
            </Link>
          </li>
          <li>
            <Link to="/market">
              <span className="icon">
                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
              </span>
              <span className="title">Mercado</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <span className="icon">
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              </span>
              <span className="title">Login</span>
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <span className="icon">
                <i className="fa fa-sign-out" aria-hidden="true"></i>
              </span>
              <span className="title">Log out</span>
            </Link>
          </li>
          <li>
            <Link to="/shopping">
              <span className="icon">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              <span className="title">Shopping cart</span>
            </Link>
          </li>
          <li>
            <Link to="/report">
              <span className="icon">
                <i className="fa fa-flag" aria-hidden="true"></i>
              </span>
              <span className="title">Reportar</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="toggle" onClick={() => toggleMenu()}></div>
    </Fragment>
  );
}
