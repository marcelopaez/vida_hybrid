import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OrangeLogo from '../../images/OrangeLogo.svg';
import OrangeLogoSmall from '../../images/OrangeLogoSmall.svg';
import GreenLogo from '../../images/GreenLogo.svg';
import BackgroundImage from '../../images/HomeBackground.jpg';

const NavbarPlanes = () => {
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
      <div className="navbarLarger">
        <div className="background" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="leftSVGNavbar">
            <svg width="707" height="1037" viewBox="0 0 707 1037" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M707 0C707 572.749 390.485 1037 0 1037V0H707Z" fill="#004B2A" />
            </svg>
            <Link to="/">
              <img src={OrangeLogo} className="logo" alt="Vida" />
            </Link>
            <h1 className="welcomeTitle1 extraBoldFont">Bienvenide a</h1>
            <h1 className="welcomeTitle2 boldFont">Vida Cowork</h1>
            <p className="welcomeSubtitle boldFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <p className="welcomeText lightFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button className="welcomeButton">Quiero ser parte de Vida</button>
          </div>
          <div className="rightSVGNavbar">
            <svg width="1325" height="179" viewBox="0 0 1325 179" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.90735e-06C130.5 89.8996 593.185 179 1325 179V1.90735e-06H0Z" fill="#FF972F" />
            </svg>
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar py-3">
              {windowScroll !== 0 && (
                <Link to="/">
                  <img src={GreenLogo} className="logoScroll" alt="Vida" />
                </Link>
              )}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item align-middle">
                    <Link to="/planes" className="nav-link">
                      Planes
                    </Link>
                  </li>
                  <li className="nav-item align-middle">
                    <Link to="/salasDeReunion" className="nav-link">
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
                    <Link to="/login" className="nav-link boldFont greenBackground nav-item-login">
                      Iniciar Sesión
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="navbarMobile">
        <div className="backgroundMobile">
          <div className="rightSVGNavbar">
            <nav className="navbar navbar-expand-lg navbarMobile fixed-top navbar-dark d-flex">
              <div className="buttonSmallUp">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <Link to="/">
                <img src={OrangeLogoSmall} alt="Vida" loading="lazy" />
              </Link>
              <div className="buttonSmallDown">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item align-middle">
                    <Link to="/planes" className="nav-link">
                      Planes
                    </Link>
                  </li>
                  <li className="nav-item align-middle">
                    <Link to="/salasDeReunion" className="nav-link">
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default NavbarPlanes;