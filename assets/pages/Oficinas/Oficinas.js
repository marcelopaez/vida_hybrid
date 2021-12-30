import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import BackgroundImage from '../../images/Backgrounds/OfficesBackground.jpg';
import SalasBackground from '../../images/Backgrounds/SalasBackground.jpg';

const Oficinas = ({ showAlternativeFooter }) => {
  useEffect(() => {
    showAlternativeFooter();
    window.scroll(0, 0);
  }, []);

  const reservationNameLarger = useRef(null);
  const reservationNameMobile = useRef(null);
  const reservationMailLarger = useRef(null);
  const reservationMailMobile = useRef(null);
  const [reservationConfirmationModal, setReservationConfirmationModal] = useState(false);

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

      {reservationConfirmationModal && (
        <div className="officesReservationConfirmationModalContainer">
          <svg width="22" height="21" className="officesReservationConfirmationModalX" onClick={() => setReservationConfirmationModal(false)} viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#ff972f" />
          </svg>
          <p className="officesReservationConfirmationModalTitle boldFont">¡Gracias!</p>
          <p className="officesReservationConfirmationModalContent">El equipo de Vida Cowork se pondrá en contacto con vos para brindarte más información sobre las oficinas privadas</p>
        </div>
      )}

      <div className={`${reservationConfirmationModal ? 'officesContainerLargerOfficesBlur' : 'officesContainerLargerOffices'}`}>
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
              <input type="text" id="reservationNameLarger" className="form-control form-control-lg officesReservationInput reservationNameLarger" ref={reservationNameLarger} />
              <label htmlFor="reservationNameLarger" className="reservationNameLarger">
                Nombre y apellido / Empresa
              </label>
            </div>
            <div className="md-form form-lg">
              <input type="email" id="reservationEmailLarger" className="form-control form-control-lg officesReservationInput reservationEmailLarger" ref={reservationMailLarger} />
              <label htmlFor="reservationEmailLarger" className="reservationEmailLarger">
                E-mail
              </label>
            </div>
            {/* <button className="officesReservationButton" onClick={() => setReservationConfirmationModal(true)}> */}
            <button className="officesReservationButton">Enviar</button>
          </div>
        </div>
      </div>

      <div className={`${reservationConfirmationModal ? 'officesContainerMobileOfficesBlur' : 'officesContainerMobileOffices'}`}>
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
              <input type="text" id="reservationNameMobile" className="form-control form-control-lg officesReservationInput reservationNameMobile" ref={reservationNameMobile} />
              <label htmlFor="reservationNameMobile" className="reservationNameMobile">
                Nombre y apellido / Empresa
              </label>
            </div>
            <div className="md-form form-lg">
              <input type="email" id="reservationEmailMobile" className="form-control form-control-lg officesReservationInput reservationEmailMobile" ref={reservationMailMobile} />
              <label htmlFor="reservationEmailMobile" className="reservationEmailMobile">
                E-mail
              </label>
            </div>
            {/* <button className="officesReservationButtonMobile" onClick={() => setReservationConfirmationModal(true)}> */}
            <button className="officesReservationButtonMobile">Enviar</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Oficinas;
