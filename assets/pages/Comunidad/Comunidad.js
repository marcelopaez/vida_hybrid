import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import OrangeLogo from '../../images/OrangeLogo.svg';
import OrangePlan from '../../components/OrangePlan';
import BackgroundImage from '../../images/OfficesBackground.jpg';
import ChoosePlan from '../../images/ChoosePlan.jpg';

const Comunidad = () => {
  return (
    <main>
      <div className="navbarLarger">
        <div className="background" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="leftSVGNavbar">
            <svg width="707" height="1037" viewBox="0 0 707 1037" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
              <path d="M707 0C707 572.749 390.485 1037 0 1037V0H707Z" fill="#004B2A" />
            </svg>
            <Link to="/">
              <img src={OrangeLogo} className="logo" alt="Vida" />
            </Link>
            <div className="communityHeaderContent">
              <p className="communityTitle extraBoldFont">Comunidad</p>
              <p className="communitySubitle">Subtítulo de la noticia más relevante</p>
              <p className="communityText">Texto para la noticia </p>
            </div>
          </div>
          <div className="rightSVGNavbar">
            <svg width="1325" height="179" viewBox="0 0 1325 179" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.90735e-06C130.5 89.8996 593.185 179 1325 179V1.90735e-06H0Z" fill="#FF972F" />
            </svg>
            <Navbar />
          </div>
        </div>
      </div>

      <div className="navbarMobile">
        <div className="backgroundMobile">
          <div className="rightSVGNavbar">
            <NavbarMobile />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Comunidad;
