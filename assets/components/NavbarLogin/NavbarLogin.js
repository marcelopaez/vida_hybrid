import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GreenLogo from '../../images/Logos/GreenLogo.svg';
import OrangeLogo from '../../images/Logos/OrangeLogo.svg';

const NavbarLogin = () => {
  const [windowScroll, setWindowScroll] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setWindowScroll(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar py-3">
        <Link className="navbar-brand" to="/">
          <img src={OrangeLogo} alt="Vida" className="logo" />
        </Link>
        {windowScroll !== 0 && (
          <Link to="/">
            <img src={GreenLogo} alt="Vida" style={{ marginLeft: '-2px' }} />
          </Link>
        )}
        <div className="collapse navbar-collapse" id="navbarVida">
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
              <Link to="/reservas" className="nav-link navbarItemLogin">
                Reservas
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
    </main>
  );
};

export default NavbarLogin;
