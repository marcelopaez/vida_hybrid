import React from 'react';
import { Link } from 'react-router-dom';
import OrangeLogoSmall from '../../images/Logos/OrangeLogoSmall.svg';
import GreenLogo from '../../images/Logos/GreenLogo.svg';

const NavbarMobile = () => {
  return (
    <nav className="navbar navbar-expand-lg navbarMobile fixed-top navbar-dark d-flex" style={{ flexDirection: 'row !important' }}>
      <div className="buttonSmallDown">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMobileVida" aria-controls="navbarMobileVida" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbarMobileOrangeLogo">
        <Link to="/">
          <img src={OrangeLogoSmall} alt="Vida" loading="lazy" width="150px" onClick={() => window.scroll(0, 0)} />
        </Link>
      </div>
      <div className="navbarMobileGreenLogo">
        <Link to="/">
          <img src={GreenLogo} alt="Vida" loading="lazy" width="150px" />
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="navbarMobileVida">
        <ul className="navbar-nav">
          <li className="nav-item align-middle">
            <Link to="/planes" className="nav-link" onClick={() => window.scroll(0, 0)}>
              Planes
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/salas" className="nav-link" onClick={() => window.scroll(0, 0)}>
              Salas de Reunión
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/oficinas" className="nav-link" onClick={() => window.scroll(0, 0)}>
              Oficinas
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/eventos" className="nav-link" onClick={() => window.scroll(0, 0)}>
              Eventos
            </Link>
          </li>
          <li className="nav-item align-middle">
            <Link to="/#comunidad" className="nav-link" onClick={() => window.scroll(0, 0)}>
              Comunidad
            </Link>
          </li>
          <li className="nav-item align-middle d-flex justify-content-center loginButtonMobile" onClick={() => window.scroll(0, 0)}>
            <Link to="/login" className="nav-link boldFont orangeBackground navItemLogin">
              Iniciar Sesión
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;
