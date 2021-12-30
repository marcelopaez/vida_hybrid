import React, { useRef, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import BackgroundImage from '../../images/Backgrounds/EventsBackground.jpg';
import EventosBackground from '../../images/Backgrounds/EventosBackground2.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PreviousArrow from '../../images/Icons/PreviousArrow.svg';
import NextArrow from '../../images/Icons/NextArrow.svg';

const Eventos = ({ hideAlternativeFooter }) => {
  useEffect(() => {
    hideAlternativeFooter();
    window.scroll(0, 0);
  }, []);

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
            <Carousel
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators
              showArrows
              centerMode={true}
              selectedItem={2}
              centerSlidePercentage={100}
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <button onClick={clickHandler} className="carouselArrowPrevious">
                    <img src={PreviousArrow} />
                  </button>
                )
              }
              renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                  <button onClick={clickHandler} className="carouselArrowNext">
                    <img src={NextArrow} />
                  </button>
                )
              }>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 1</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 2</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 3</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 4</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 5</p>
                <div className="fakeEventImage"></div>
              </div>
            </Carousel>
          </div>
          <p className="evensDescriptionTitle">Podemos distribuir el formato de tu evento para que encaje a tus necesidades</p>
          <p className="eventsDescriptionText">Consultá por los formatos disponibles</p>
        </div>
        <div className="eventsReservationContainer">
          <div className="customContainer">
            <div className="eventsReservationContainerForm">
              <p className="eventsReservationTitle boldFont">¿Te interesa reservar?</p>
              <div className="md-form form-lg">
                <input type="text" id="eventsNameLarger" className="form-control form-control-lg eventsReservationInput eventsNameLarger" ref={reservationNameLarger} />
                <label htmlFor="eventsNameLarger" className="eventsNameLarger">
                  Nombre y apellido / Empresa
                </label>
              </div>
              <div className="md-form form-lg">
                <input type="email" id="eventsEmailLarger" className="form-control form-control-lg eventsReservationInput eventsEmailLarger" ref={reservationMailLarger} />
                <label htmlFor="eventsEmailLarger" className="eventsEmailLarger">
                  E-mail
                </label>
              </div>
              <button className="eventsReservationButton">Enviar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="eventsContainerMobileEvents">
        <div className="eventsMobileBackground" style={{ backgroundImage: `url(${EventosBackground})` }}>
          <div className="semiCircleHeaderMobile">
            <p className="eventsTitleMobileEvents extraBoldFont">Eventos</p>
          </div>
        </div>
        <div className="customContainer">
          <p className="eventsSubtitleEventsMobile">Nuestro espacio cuenta con un patio de 500 mt2 y un salón de usos múltiples. Podemos recibir desde 10 a 200 personas.</p>
          <p className="eventsTextMobile">Contamos con un equipo especializado para asesorarte en todo lo que necesitas.</p>

          <div className="ourEventsContainerMobile">
            <p className="ourEventsTitleMobile extraBoldFont">¡Mirá nuestros eventos!</p>
            <Carousel
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators
              showArrows
              centerMode={true}
              selectedItem={2}
              centerSlidePercentage={100}
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <button onClick={clickHandler} className="carouselArrowPrevious">
                    <img src={PreviousArrow} />
                  </button>
                )
              }
              renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                  <button onClick={clickHandler} className="carouselArrowNext">
                    <img src={NextArrow} />
                  </button>
                )
              }>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 1</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 2</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 3</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 4</p>
                <div className="fakeEventImage"></div>
              </div>
              <div className="eventCarouselItemContainer">
                <p className="eventCarouselItemTitle lightFont">Evento 5</p>
                <div className="fakeEventImage"></div>
              </div>
            </Carousel>
          </div>

          <p className="eventsSubtitleEvents2Mobile boldFont">Podemos distribuir el formato de tu evento para que encaje a tus necesidades.</p>
          <p className="eventsText2Mobile">Consultá por los formatos disponibles.</p>

          <div className="eventsReservationContainerMobile">
            <p className="eventsReservationTitleMobile boldFont">¿Te interesa reservar?</p>
            <div className="md-form form-lg">
              <input type="text" id="eventsNameMobile" className="form-control form-control-lg eventsReservationInput eventsNameMobile" ref={reservationNameMobile} />
              <label htmlFor="eventsNameMobile" className="eventsNameMobile">
                Nombre y apellido / Empresa
              </label>
            </div>
            <div className="md-form form-lg">
              <input type="email" id="eventsEmailMobile" className="form-control form-control-lg eventsReservationInput eventsEmailMobile" ref={reservationMailMobile} />
              <label htmlFor="eventsEmailMobile" className="eventsEmailMobile">
                E-mail
              </label>
            </div>
            <button className="eventsReservationButtonMobile">Enviar</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Eventos;
