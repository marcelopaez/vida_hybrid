import React from 'react';
import { Link } from 'react-router-dom';
import OrangeLogo from '../../images/Logos/OrangeLogo.svg';

const NavbarLoginMobile = () => {
  return (
    <nav className="navbar navbar-expand-lg navbarLoginMobile fixed-top navbar-light bg-white d-flex">
      <div className="buttonSmallDownLogin">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobileVida" aria-controls="navbarMobileVida" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <Link to="/">
        <img src={OrangeLogo} alt="Vida" loading="lazy" width="150px" />
      </Link>
      <div className="collapse navbar-collapse" id="navbarMobileVida">
        <ul className="navbar-nav">
          <li className="nav-item align-middle">
            <Link to="/planes" className="nav-link navbarItemLogin">
              Planes
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/salas" className="nav-link navbarItemLogin">
              Salas de Reunión
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/oficinas" className="nav-link navbarItemLogin">
              Oficinas
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/eventos" className="nav-link navbarItemLogin">
              Eventos
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/comunidad" className="nav-link navbarItemLogin">
              Comunidad
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/login" className="nav-link navbarItemLogin navbarItemLoginButton">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLoginMobile;
