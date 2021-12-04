import React from 'react';
import { Link } from 'react-router-dom';
import GreenLogo from '../../images/GreenLogo.svg';

const NavbarLoginMobile = () => {
  return (
    <nav className="navbar navbar-expand-lg navbarLoginMobile fixed-top navbar-dark d-flex">
      <div className="buttonSmallUpLogin">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobileVida" aria-controls="navbarMobileVida" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <Link to="/">
        <img src={GreenLogo} alt="Vida" loading="lazy" width="150px" />
      </Link>
      <div className="buttonSmallDownLogin">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobileVida" aria-controls="navbarMobileVida" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarMobileVida">
        <ul className="navbar-nav">
          <li className="nav-item align-middle">
            <Link to="/planes" className="nav-link">
              Planes
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/salas" className="nav-link">
              Salas de Reunión
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/oficinas" className="nav-link">
              Oficinas
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/eventos" className="nav-link">
              Eventos
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/comunidad" className="nav-link">
              Comunidad
            </Link>
          </li>
          <li className="nav-item align-middle d-flex justify-content-center loginButtonMobile">
            <Link to="/login" className="nav-link boldFont orangeBackground nav-item-login">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarLoginMobile;
