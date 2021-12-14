import React, { useRef, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import BackgroundImage from '../../images/Backgrounds/OfficesBackground.jpg';
import SalasBackground from '../../images/Backgrounds/SalasBackground.jpg';

const Oficinas = () => {
  useEffect(() => window.scroll(0, 0), []);

  const reservationNameLarger = useRef(null);
  const reservationNameMobile = useRef(null);
  const reservationMailLarger = useRef(null);
  const reservationMailMobile = useRef(null);

  return (
    <main>
      <div className="navbarLarger">
        <div className="background" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="leftSVGNavbar">
            <div className="officesHeaderContent">
              <p className="officesTitle extraBoldFont">Oficinas privadas</p>
              <p className="officesSubtitle">Si buscás privacidad, tenemos espacios con capacidad para 4 hasta 26 personas.</p>
              <p className="officesText">Adaptamos nuestras oficinas a equipos numerosos.</p>
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

      <div className="officesContainerLargerOffices">
        <div className="customContainer">
          <div className="roomsDescriptionContent">
            <div className="roomsDescriptionTitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            <div className="roomsDescriptionText">Si buscás privacidad, tenemos espacios con capacidad para 4 hasta 26 personas. Adaptamos nuestras oficinas a equipos numerosos.</div>
          </div>
        </div>
        <div className="customContainer">
          <div className="officesReservationContainer">
            <p className="officesReservationTitle boldFont">¿Te interesa reservar?</p>
            <div className="md-form form-lg">
              <input type="text" id="name" className="form-control form-control-lg officesReservationInput" ref={reservationNameLarger} />
              <label htmlFor="name">Nombre y apellido / Empresa</label>
            </div>
            <div className="md-form form-lg">
              <input type="email" id="email" className="form-control form-control-lg officesReservationInput" ref={reservationMailLarger} />
              <label htmlFor="email">E-mail</label>
            </div>
            <button className="officesReservationButton">Enviar</button>
          </div>
        </div>
      </div>

      <div className="officesContainerMobileOffices">
        <div className="oficinasMobileBackground" style={{ backgroundImage: `url(${SalasBackground})` }}>
          <div className="semiCircleHeaderMobile">
            <p className="oficinasTitleMobile extraBoldFont">Oficinas Privadas</p>
          </div>
        </div>
        <div className="customContainer">
          <p className="officesSubtitleMobile">Si buscás privacidad, tenemos espacios con capacidad para 4 hasta 26 personas.</p>
          <p className="officesTextMobile">Adaptamos nuestras oficinas a equipos numerosos.</p>
          <div className="officesReservationContainerMobile">
            <p className="officesReservationTitleMobile boldFont">¿Te interesa reservar?</p>
            <div className="md-form form-lg">
              <input type="text" id="name" className="form-control form-control-lg officesReservationInput" ref={reservationNameMobile} />
              <label htmlFor="name">Nombre y apellido / Empresa</label>
            </div>
            <div className="md-form form-lg">
              <input type="email" id="email" className="form-control form-control-lg officesReservationInput" ref={reservationMailMobile} />
              <label htmlFor="email">E-mail</label>
            </div>
            <button className="officesReservationButtonMobile">Enviar</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Oficinas;
