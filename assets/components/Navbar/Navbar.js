import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GreenLogo from '../../images/Logos/GreenLogo.svg';
import OrangeLogo from '../../images/Logos/OrangeLogo.svg';

const Navbar = () => {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScrollY = () => {
    let position = window.pageYOffset;
    setWindowScrollY(position);
  };

  const handleWindowResize = () => {
    let windowWidth = window.innerWidth;
    setWindowWidth(windowWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollY);
    window.addEventListener('resize', handleWindowResize);
  }, []);

  return (
    <main>
      <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar navbarHome">
        {windowScrollY === 0 ? (
          windowWidth > 1200 ? (
            windowWidth < 1400 ? (
              <Link className="navbar-brand" to="/">
                <img src={GreenLogo} alt="Vida" className="logo" />
              </Link>
            ) : (
              <Link className="navbar-brand" to="/">
                <img src={OrangeLogo} alt="Vida" className="logo" />
              </Link>
            )
          ) : (
            <Link className="navbar-brand" to="/">
              <img src={GreenLogo} alt="Vida" className="logo" />
            </Link>
          )
        ) : (
          <Link className="navbar-brand" to="/">
            <img src={GreenLogo} alt="Vida" className="logo" onClick={() => window.scroll(0, 0)} />
          </Link>
        )}
        <div className="collapse navbar-collapse" id="navbarVida" style={{ padding: '15px 0' }}>
          <ul className="navbar-nav">
            <li className="nav-item align-middle">
              <Link to="/planes" className="nav-link navbarOption">
                Planes
              </Link>
            </li>
            <li className="nav-item align-middle">
              <Link to="/salas" className="nav-link navbarOption">
                Salas de Reunión
              </Link>
            </li>
            <li className="nav-item align-middle">
              <Link to="/oficinas" className="nav-link navbarOption">
                Oficinas
              </Link>
            </li>
            <li className="nav-item align-middle">
              <Link to="/eventos" className="nav-link navbarOption">
                Eventos
              </Link>
            </li>
            <li className="nav-item align-middle">
              <a href="/app#comunidad" className="nav-link navbarOption">
                Comunidad
              </a>
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
