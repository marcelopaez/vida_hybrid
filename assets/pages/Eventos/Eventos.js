import React, { useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import BackgroundImage from '../../images/Backgrounds/EventsBackground.jpg';
import EventosBackground from '../../images/Backgrounds/EventosBackground2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Eventos = () => {
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
            <div className="eventsHeaderContent">
              <p className="eventsTitleEvents extraBoldFont">Eventos</p>
              <p className="eventsSubtitleEvents">Nuestro espacio cuenta con un patio de 500 mt2 y un salón de usos múltiples. Podemos recibir desde 10 a 200 personas.</p>
              <p className="eventsText">Contamos con un equipo especializado para asesorarte en todo lo que necesitas.</p>
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

      <div className="eventsContainerLargerEvents">
        <div className="customContainer">
          <div className="ourEventsContainer">
            <p className="ourEventsTitle extraBoldFont">¡Mirá nuestros eventos!</p>
            <Carousel infiniteLoop showThumbs={false} showStatus={false} showIndicators showArrows centerMode centerSlidePercentage={25}>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 1</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 1</p>
                <div className="fakeEventImage"></div>
              </div>
            </Carousel>
          </div>
          <p className="evensDescriptionTitle">Podemos distribuir el formato de tu evento para que encaje a tus necesidades</p>
          <p className="eventsDescriptionText">Consultá por los formatos disponibles</p>
        </div>
        <div className="eventsReservationContainer">
          <div className="customContainer">
            <p className="eventsReservationTitle boldFont">¿Te interesa reservar?</p>
            <div className="md-form form-lg">
              <input type="text" id="name" className="form-control form-control-lg eventsReservationInput" ref={reservationNameLarger} />
              <label htmlFor="name">Nombre y apellido / Empresa</label>
            </div>
            <div className="md-form form-lg">
              <input type="email" id="email" className="form-control form-control-lg eventsReservationInput" ref={reservationMailLarger} />
              <label htmlFor="email">E-mail</label>
            </div>
            <button className="eventsReservationButton">Enviar</button>
          </div>
        </div>
      </div>

      <div className="eventsContainerMobileEvents">
        <div className="eventsMobileBackground" style={{ backgroundImage: `url(${EventosBackground})` }}>
          <div className="semiCircleHeaderMobile">
            <p className="eventsTitleMobile extraBoldFont">Eventos</p>
          </div>
        </div>
        <div className="customContainer">
          <p className="eventsSubtitleEventsMobile">Nuestro espacio cuenta con un patio de 500 mt2 y un salón de usos múltiples. Podemos recibir desde 10 a 200 personas.</p>
          <p className="eventsTextMobile">Contamos con un equipo especializado para asesorarte en todo lo que necesitas.</p>

          <div className="ourEventsContainerMobile">
            <p className="ourEventsTitleMobile extraBoldFont">¡Mirá nuestros eventos!</p>
            <Carousel infiniteLoop showThumbs={false} showStatus={false} showIndicators showArrows centerMode centerSlidePercentage={10}>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 1</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 1</p>
                <div className="fakeEventImage"></div>
              </div>
            </Carousel>
          </div>

          <p className="eventsSubtitleEvents2Mobile boldFont">Podemos distribuir el formato de tu evento para que encaje a tus necesidades.</p>
          <p className="eventsText2Mobile">Consultá por los formatos disponibles.</p>

          <div className="eventsReservationContainerMobile">
            <p className="eventsReservationTitleMobile boldFont">¿Te interesa reservar?</p>
            <div className="md-form form-lg">
              <input type="text" id="name" className="form-control form-control-lg eventsReservationInput" ref={reservationNameMobile} />
              <label htmlFor="name">Nombre y apellido / Empresa</label>
            </div>
            <div className="md-form form-lg">
              <input type="email" id="email" className="form-control form-control-lg eventsReservationInput" ref={reservationMailMobile} />
              <label htmlFor="email">E-mail</label>
            </div>
            <button className="eventsReservationButtonMobile">Enviar</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Eventos;
