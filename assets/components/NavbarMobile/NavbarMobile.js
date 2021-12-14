import React from 'react';
import { Link } from 'react-router-dom';
import OrangeLogoSmall from '../../images/Logos/OrangeLogoSmall.svg';

const NavbarMobile = () => {
  return (
    <nav className="navbar navbar-expand-lg navbarMobile fixed-top navbar-dark d-flex" style={{ flexDirection: 'row !important' }}>
      <div className="buttonSmallDown">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobileVida" aria-controls="navbarMobileVida" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <Link to="/">
        <img src={OrangeLogoSmall} alt="Vida" loading="lazy" width="150px" />
      </Link>
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
          <li className="nav-item align-middle">
            <Link to="/reservas" className="nav-link">
              Reservas
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

export default NavbarMobile;
