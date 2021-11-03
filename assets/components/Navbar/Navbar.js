import React, { useEffect, useState } from 'react';
import OrangeLogo from '../../images/OrangeLogo.svg';
import GreenLogo from '../../images/GreenLogo.svg';

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
      <div className="navbarLarger">
        <div className="background">
          <div className="leftSVGNavbar">
            <svg width="707" height="1037" viewBox="0 0 707 1037" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M707 0C707 572.749 390.485 1037 0 1037V0H707Z" fill="#004B2A" />
            </svg>
            <img src={OrangeLogo} className="logo" alt="Vida" />
            <h1 className="welcomeTitle1 boldFont">Bienvenide a</h1>
            <h1 className="welcomeTitle2 boldFont">Vida Cowork</h1>
            <p className="welcomeSubtitle boldFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <p className="welcomeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button className="welcomeButton">Quiero ser parte de Vida</button>
          </div>
          <div className="rightSVGNavbar">
            <svg width="1325" height="179" viewBox="0 0 1325 179" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.90735e-06C130.5 89.8996 593.185 179 1325 179V1.90735e-06H0Z" fill="#FF972F" />
            </svg>
            <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar w-100 py-5">
              {windowScroll !== 0 && <img src={GreenLogo} className="logo" alt="Vida" />}
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/planes">
                      Planes
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/salasDeReunion">
                      Salas de Reunión
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/oficinas">
                      Oficinas
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/eventos">
                      Eventos
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/comunidad">
                      Comunidad
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link boldFont greenBackground" href="/login">
                      Iniciar Sesión
                    </a>
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
            <nav class="navbar navbar-expand-lg navbarMobile fixed-top navbar-dark d-flex">
              <div className="buttonSmallUp">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <a class="navbar-brand" href="/">
                <img src={OrangeLogo} alt="Vida" loading="lazy" />
              </a>
              <div className="buttonSmallDown">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/planes">
                      Planes
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/salasDeReunion">
                      Salas de Reunión
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/oficinas">
                      Oficinas
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/eventos">
                      Eventos
                    </a>
                  </li>
                  <li className="nav-item align-middle">
                    <a className="nav-link" href="/comunidad">
                      Comunidad
                    </a>
                  </li>
                  <li className="nav-item align-middle d-flex justify-content-center loginButtonMobile">
                    <a className="nav-link boldFont orangeBackground" href="/login">
                      Iniciar Sesión
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {/* <div className="leftSVGNavbar">
            <svg width="300" height="1037" viewBox="0 0 300 1037" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M707 0C707 572.749 390.485 1037 0 1037V0H707Z" fill="#004B2A" />
            </svg>
            <img src={OrangeLogo} className="logo" alt="Vida" />
            <h1 className="welcomeTitle1 boldFont">Bienvenide a</h1>
            <h1 className="welcomeTitle2 boldFont">Vida Cowork</h1>
            <p className="welcomeSubtitle boldFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <p className="welcomeText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button className="welcomeButton">Quiero ser parte de Vida</button>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
