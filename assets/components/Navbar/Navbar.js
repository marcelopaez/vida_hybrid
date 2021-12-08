import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GreenLogo from '../../images/Logos/GreenLogo.svg';
import OrangeLogo from '../../images/Logos/OrangeLogo.svg';

const Navbar = () => {
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
        {windowScroll !== 0 && (
          <Link to="/">
            <img src={GreenLogo} className="logoScroll" alt="Vida" />
          </Link>
        )}
        <div className="collapse navbar-collapse" id="navbarVida">
          {windowScroll === 0 && (
            <Link to="/">
              <img src={OrangeLogo} className="logo" alt="Vida" />
            </Link>
          )}
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
            <li className="nav-item align-middle">
              <Link to="/login" className="nav-link boldFont navbarLoginOption nav-item-login">
                Iniciar Sesión
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
