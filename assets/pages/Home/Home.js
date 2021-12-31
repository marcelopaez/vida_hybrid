import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import Plan from '../../components/Plan';
import PlanHorizontal from '../../components/PlanHorizontal';
import Service from '../../components/Service';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import LeftSVGGreenSectionSmall from '../../images/SVGs/LeftSVGGreenSectionSmall.svg';
import BackgroundImage from '../../images/Backgrounds/HomeBackground.jpg';
import StrategicPlaceLogo from '../../images/Logos/FooterLogo.svg';
import EventosBackground from '../../images/Backgrounds/EventosBackground.jpg';
import SalasBackground from '../../images/Backgrounds/SalasBackground.jpg';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';
import ExampleRatingPhoto from '../../images/ExampleRatingPhoto.jpg';
import YellowStar from '../../images/StarYellow.svg';
import GrayStar from '../../images/StarGray.svg';
import PreviousArrow from '../../images/Icons/PreviousArrow.svg';
import NextArrow from '../../images/Icons/NextArrow.svg';
import Partner1 from '../../images/Partners/Partner1.svg';
import Partner2 from '../../images/Partners/Partner2.svg';
import Partner3 from '../../images/Partners/Partner3.svg';
import Partner4 from '../../images/Partners/Partner4.svg';
import Partner5 from '../../images/Partners/Partner5.svg';
import Partner6 from '../../images/Partners/Partner6.svg';
import Partner7 from '../../images/Partners/Partner7.svg';
import Partner8 from '../../images/Partners/Partner8.svg';
import Partner9 from '../../images/Partners/Partner9.svg';
import Partner10 from '../../images/Partners/Partner10.svg';
import Partner11 from '../../images/Partners/Partner11.svg';
import Partner12 from '../../images/Partners/Partner12.svg';
import Partner13 from '../../images/Partners/Partner13.svg';
import Partner14 from '../../images/Partners/Partner14.svg';
import Partner15 from '../../images/Partners/Partner15.svg';
import Partner16 from '../../images/Partners/Partner16.svg';
import Partner17 from '../../images/Partners/Partner17.svg';
import Partner18 from '../../images/Partners/Partner18.svg';
import Partner19 from '../../images/Partners/Partner19.svg';
import Partner20 from '../../images/Partners/Partner20.svg';
import Partner21 from '../../images/Partners/Partner21.svg';
import Partner22 from '../../images/Partners/Partner22.svg';
import BackgroundSVGHome1 from '../../images/SVGs/BackgroundSVGHome1.svg';
import BackgroundSVGHome2 from '../../images/SVGs/BackgroundSVGHome2.svg';
import BackgroundSVGHome3 from '../../images/SVGs/BackgroundSVGHome3.svg';
import BackgroundSVGHomeMobile1 from '../../images/SVGs/BackgroundSVGHomeMobile1.svg';
import ComunidadCard from '../../components/ComunidadCard';

const Home = () => {
  useEffect(() => window.scroll(0, 0), []);

  const [showServicesSalas, setShowServicesSalas] = useState(false);
  const [showServicesEspacios, setShowServicesEspacios] = useState(false);
  const [showServicesServicios, setShowServicesServicios] = useState(false);

  const carouselSettings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <div className="navbarLarger">
        <div className="background" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover', overflow: 'hidden' }}>
          <div className="leftSVGNavbar">
            <div className="homeHeaderContent">
              <p className="welcomeTitle extraBoldFont">Bienvenide a Vida Cowork</p>
              <p className="welcomeSubtitle boldFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <p className="welcomeText lightFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="welcomeButton boldFont">Quiero ser parte de Vida</button>
            </div>
          </div>
          <div className="rightSVGNavbar">
            <svg width="1325" height="179" viewBox="0 0 1325 179" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.90735e-06C130.5 89.8996 593.185 179 1325 179V1.90735e-06H0Z" fill="#FF972F" />
            </svg>
            <Navbar />
          </div>
          <a href="https://api.whatsapp.com/send?phone=5493513333333" className="floatWhatsApp floatButton d-none d-lg-flex justify-content-center align-items-center" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="navbarMobile">
        <div className="backgroundMobile">
          <NavbarMobile />
        </div>
        <div className="leftSVGNavbar" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="homeHeaderContent" style={{ textAlign: 'left' }}>
            <p className="welcomeTitle extraBoldFont">Bienvenide a Vida Cowork</p>
            <p className="welcomeSubtitle boldFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <p className="welcomeText lightFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="welcomeButton welcomeButtonExtraMargin boldFont">Quiero ser parte de Vida</button>
          </div>
        </div>

        <img src={BackgroundImage} alt="Vida" height="auto" width="100%" className="backgroundIndexMobile" style={{ minHeight: '300px' }} />
        <div className="welcomeContainerMobile">
          <img src={LeftSVGGreenSectionSmall} alt="Bienvenide" className="welcomeContainerMobileSVG" />
          <div className="welcomeContainerMobileContent">
            <p className="welcomeTitleMobile extraBoldFont">Bienvenide a Vida Cowork</p>
            <p className="welcomeSubtitleMobile boldFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <p className="welcomeTextMobile lightFont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>

      <div className="plansContainerHomePreviousSeparator"></div>
      <div className="plansContainerHome">
        <img src={BackgroundSVGHome1} alt="Vida" className="backgroundSVGHome1" />
        <p className="plansTitle extraBoldFont">PLANES EN ESPACIO COMPARTIDO</p>
        <p className="plansSubtitle">Contamos con planes ideales para freelancers y profesionales independientes</p>
        <div className="d-flex justify-content-center align-items-center flex-wrap" style={{ position: 'relative', zIndex: '2', paddingBottom: '224px' }}>
          <Plan
            svg={
              <svg className="planContainerImage" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9712 46.9843V62C23.2704 62 30.1051 55.2187 30.1051 46.9843V31.9686C21.8058 31.9686 14.9712 38.5885 14.9712 46.9843Z" fill="#fff" />
                <path d="M31.7324 15.0157V30.0314C40.0316 30.0314 46.8663 23.2501 46.8663 15.0157V0C38.5671 0 31.7324 6.78128 31.7324 15.0157Z" fill="#fff" />
                <path d="M15.1339 15.6619H0C0 23.8963 6.83465 30.6776 15.1339 30.6776H30.2677C30.2677 22.4431 23.4331 15.6619 15.1339 15.6619Z" fill="#fff" />
                <path d="M46.8663 46.6618H62.0001C62.0001 38.4274 55.1655 31.6461 46.8663 31.6461H31.7324C31.7324 40.042 38.5671 46.6618 46.8663 46.6618Z" fill="#fff" />
              </svg>
            }
            title={'Plan Eter'}
            description={'Vení 1 día a la semana'}
            price={'3800'}
            background={true}
          />
          <Plan
            svg={
              <svg className="planContainerImage" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0501 4.32912L1.77159 0C-0.620814 6.1519 2.45514 13.1013 8.72097 15.4937L19.8855 19.8228C22.2779 13.6709 19.202 6.72152 13.0501 4.32912Z" fill="#fff" />
                <path d="M40.3921 23.0125L29.2276 18.6834C26.8352 24.8353 29.9111 31.8986 36.063 34.1771L47.2276 38.5062C49.62 32.3543 46.544 25.4049 40.3921 23.0125Z" fill="#fff" />
                <path d="M23.6447 33.0382L12.4801 28.7091C10.0877 34.861 13.1636 41.8104 19.4295 44.2028L30.594 48.5319C32.9864 42.38 29.9105 35.3167 23.6447 33.0382Z" fill="#fff" />
              </svg>
            }
            title={'Plan Aire'}
            description={'Enfocate 2 días a la semana'}
            price={'4600'}
            background={true}
          />
          <Plan
            svg={
              <svg className="planContainerImage" width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3514 0C25.9561 5.94293 30.6 10.6009 34.9236 15.5801C42.45 24.093 41.9696 35.3363 34.2831 43.0461C26.7568 50.4346 14.4264 50.4346 6.73988 43.0461C-0.946598 35.497 -1.427 24.093 5.93921 15.5801C10.1027 10.6009 14.9068 5.94293 20.3514 0Z" fill="#fff" />
              </svg>
            }
            title={'Plan Agua'}
            description={'Trabajá 3 veces por semana, descansá 2'}
            price={'6500'}
            background={true}
          />
          <Plan
            svg={
              <svg className="planContainerImage" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6396 24.4194V48.8387C33.175 48.8387 44.059 37.9547 44.059 24.4194V0C30.5237 0 19.6396 10.8841 19.6396 24.4194Z" fill="#ffff" />
                <path d="M16.0116 33.7684V48.8386C7.63929 48.8386 0.941406 42.1408 0.941406 33.7684V18.8377C9.17422 18.8377 16.0116 25.5356 16.0116 33.7684Z" fill="#ffff" />
              </svg>
            }
            title={'Plan Fuego'}
            description={'Un día de franco! 4 veces a la semana'}
            price={'7400'}
            background={true}
          />
          <Plan
            svg={
              <svg className="planContainerImage" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.955566 24.4862C1.42645 37.0432 11.786 47.0888 24.5 47.0888C37.5279 47.0888 48.0444 36.7293 48.0444 23.7014V0.156963C48.0444 0.156963 48.0444 0.156963 47.8874 0.156963C34.8595 0.156963 24.343 10.6735 24.343 23.7014V23.8583C24.343 23.8583 24.343 23.8583 24.343 23.7014C24.343 10.6735 13.9835 0 0.955566 0V24.4862Z" fill="#fff" />
              </svg>
            }
            title={'Plan Tierra'}
            description={'Vení 5 días a la semana'}
            price={'3800'}
            background={true}
          />
        </div>
      </div>

      <div className="plansContainerMobile">
        <div className="customContainer">
          <img src={BackgroundSVGHomeMobile1} alt="Vida" className="backgroundSVGHomeMobile1" />
          <p className="plansTitleMobile extraBoldFont">Planes</p>
          <PlanHorizontal
            svg={
              <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9712 46.9843V62C23.2704 62 30.1051 55.2187 30.1051 46.9843V31.9686C21.8058 31.9686 14.9712 38.5885 14.9712 46.9843Z" fill="#ff972f" />
                <path d="M31.7324 15.0157V30.0314C40.0316 30.0314 46.8663 23.2501 46.8663 15.0157V0C38.5671 0 31.7324 6.78128 31.7324 15.0157Z" fill="#ff972f" />
                <path d="M15.1339 15.6619H0C0 23.8963 6.83465 30.6776 15.1339 30.6776H30.2677C30.2677 22.4431 23.4331 15.6619 15.1339 15.6619Z" fill="#ff972f" />
                <path d="M46.8663 46.6618H62.0001C62.0001 38.4274 55.1655 31.6461 46.8663 31.6461H31.7324C31.7324 40.042 38.5671 46.6618 46.8663 46.6618Z" fill="#ff972f" />
              </svg>
            }
            title={'Plan Eter'}
            description={'Vení 1 día a la semana'}
            price={'3800'}
          />
          <PlanHorizontal
            svg={
              <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0501 4.32912L1.77159 0C-0.620814 6.1519 2.45514 13.1013 8.72097 15.4937L19.8855 19.8228C22.2779 13.6709 19.202 6.72152 13.0501 4.32912Z" fill="#ff972f" />
                <path d="M40.3921 23.0125L29.2276 18.6834C26.8352 24.8353 29.9111 31.8986 36.063 34.1771L47.2276 38.5062C49.62 32.3543 46.544 25.4049 40.3921 23.0125Z" fill="#ff972f" />
                <path d="M23.6447 33.0382L12.4801 28.7091C10.0877 34.861 13.1636 41.8104 19.4295 44.2028L30.594 48.5319C32.9864 42.38 29.9105 35.3167 23.6447 33.0382Z" fill="#ff972f" />
              </svg>
            }
            title={'Plan Aire'}
            description={'Enfocate 2 días a la semana'}
            price={'4600'}
          />
          <PlanHorizontal
            svg={
              <svg width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.3514 0C25.9561 5.94293 30.6 10.6009 34.9236 15.5801C42.45 24.093 41.9696 35.3363 34.2831 43.0461C26.7568 50.4346 14.4264 50.4346 6.73988 43.0461C-0.946598 35.497 -1.427 24.093 5.93921 15.5801C10.1027 10.6009 14.9068 5.94293 20.3514 0Z" fill="#ff972f" />
              </svg>
            }
            title={'Plan Agua'}
            description={'Trabajá 3 veces por semana, descansá 2'}
            price={'6500'}
          />
          <PlanHorizontal
            svg={
              <svg width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.6396 24.4194V48.8387C33.175 48.8387 44.059 37.9547 44.059 24.4194V0C30.5237 0 19.6396 10.8841 19.6396 24.4194Z" fill="#ff972f" />
                <path d="M16.0116 33.7684V48.8386C7.63929 48.8386 0.941406 42.1408 0.941406 33.7684V18.8377C9.17422 18.8377 16.0116 25.5356 16.0116 33.7684Z" fill="#ff972f" />
              </svg>
            }
            title={'Plan Fuego'}
            description={'Un día de franco! 4 veces a la semana'}
            price={'7400'}
          />
          <PlanHorizontal
            svg={
              <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.955566 24.4862C1.42645 37.0432 11.786 47.0888 24.5 47.0888C37.5279 47.0888 48.0444 36.7293 48.0444 23.7014V0.156963C48.0444 0.156963 48.0444 0.156963 47.8874 0.156963C34.8595 0.156963 24.343 10.6735 24.343 23.7014V23.8583C24.343 23.8583 24.343 23.8583 24.343 23.7014C24.343 10.6735 13.9835 0 0.955566 0V24.4862Z" fill="#ff972f" />
              </svg>
            }
            title={'Plan Tierra'}
            description={'Vení 5 días a la semana'}
            price={'8800'}
          />
        </div>
      </div>

      <div id="carouselSalas" className="meetingsContainer carousel slide" data-ride="carousel" data-interval="3000" style={{ position: 'relative' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={SalasBackground} alt="Vida" height="650px" className="sliderImageWithOffset" />
          </div>
          <div className="carousel-item">
            <img src={EventosBackground} alt="Vida" height="650px" className="sliderImageWithOffset" />
          </div>
        </div>
        <div className="roomsContainer">
          <Slider {...carouselSettings}>
            <div>
              <p className="roomsTitle extraBoldFont">SALAS DE REUNIÓN</p>
              <p className="roomsSubtitle">Contamos con cuatro salas full equipadas para 4, 5, 6 y hasta 12 personas.</p>
              <p className="roomsContent1">Incluyen TV con conexión HDMI, pizarra, uso de cocinas e infusiones, WI-FI de alta velocidad y recepción de invitadxs.</p>
              <p className="roomsContent2">Podes reservar de manera eventual o contratar un pack mensual.</p>
              <Link to="/salas">
                <button className="roomsButton boldFont">Ver más</button>
              </Link>
            </div>
            <div>
              <p className="roomsTitle extraBoldFont">ESPACIOS COMPARTIDOS</p>
              <p className="roomsSubtitle">Contamos con cuatro salas full equipadas para 4, 5, 6 y hasta 12 personas.</p>
              <p className="roomsContent1">Incluyen TV con conexión HDMI, pizarra, uso de cocinas e infusiones, WI-FI de alta velocidad y recepción de invitadxs.</p>
              <p className="roomsContent2">Podes reservar de manera eventual o contratar un pack mensual.</p>
              <Link to="/salas">
                <button className="roomsButton boldFont">Ver más</button>
              </Link>
            </div>
          </Slider>
        </div>
        <a className="carousel-control-next" href="#carouselSalas" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Siguiente</span>
        </a>
      </div>

      <div className="meetingsContainerMobile">
        <img src={SalasBackground} alt="Vida" height="auto" width="100%" style={{ minHeight: '300px', objectFit: 'cover' }} />
        <div className="customContainer">
          <p className="roomsTitleMobile extraBoldFont">SALAS DE REUNIÓN</p>
          <p className="roomsSubtitleMobile">Contamos con cuatro salas full equipadas para 4, 5, 6 y hasta 12 personas.</p>
          <p className="roomsContent1Mobile">Incluyen TV con conexión HDMI, pizarra, uso de cocinas e infusiones, WI-FI de alta velocidad y recepción de invitadxs.</p>
        </div>
        <img src={SalasBackground} alt="Vida" height="auto" width="100%" style={{ minHeight: '300px', objectFit: 'cover' }} />
        <div className="customContainer">
          <p className="roomsTitleMobile extraBoldFont">Oficinas privadas</p>
          <p className="roomsSubtitleMobile">Si buscás privacidad, tenemos espacios con capacidad para 4 hasta 26 personas.</p>
          <p className="roomsContent1Mobile">Adaptamos nuestras oficinas a equipos numerosos</p>
        </div>
      </div>

      <div className="servicesContainer">
        <img src={BackgroundSVGHome2} alt="Vida" className="backgroundSVGHome2" />
        <div className="customContainer" style={{ position: 'relative', zIndex: '3' }}>
          <p className="servicesTitle extraBoldFont">SERVICIOS</p>
          <div className="servicesSection">
            <Service
              svg={
                <svg width="44" height="59" viewBox="0 0 44 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7_1079)">
                    <path d="M44 59.0002C44 34.8262 24.3026 15.2332 0 15.2332V59.0002H44Z" fill="#FF972F" />
                    <path d="M22.2498 14.0739C26.1893 14.0739 29.352 10.928 29.352 7.00936C29.352 3.14593 26.1338 0 22.2498 0C18.3104 0 15.1477 3.14593 15.1477 7.06455C15.1477 10.928 18.3104 14.0739 22.2498 14.0739Z" fill="white" />
                    <path d="M38.6734 11.1491C37.5637 9.93488 35.6772 9.87969 34.4565 10.9835L27.7983 17.1098H16.9786L10.3203 10.9835C9.09966 9.87969 7.21315 9.93488 6.10344 11.1491C4.99373 12.3633 5.04922 14.2398 6.2699 15.3437L13.8159 22.2426V43.7674H13.8714V51.715C18.3102 51.715 21.8613 48.1276 21.8613 43.7674C21.8613 48.1276 25.4124 51.715 29.8512 51.715V43.7674V43.4363V23.3465L38.507 15.3437C39.7276 14.2398 39.7831 12.3633 38.6734 11.1491Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_1079">
                      <rect width="44" height="59" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              title={'Espacio libre de stress'}
              subtitle={'Todos los gastos están incluidos.'}
              darkText={false}
            />
            <Service
              svg={
                <svg width="66" height="55" viewBox="0 0 66 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7_1024)">
                    <path d="M0 6.63794C0 33.3793 21.7666 55 48.6885 55V6.63794H0Z" fill="#FF972F" />
                    <path
                      d="M54.0346 41.4717C49.5158 41.4717 45.8244 37.8683 45.7607 33.3798V33.3165V25.8568C45.7607 25.4775 46.079 25.0981 46.5245 25.0981H61.4811C63.9633 25.0981 65.9999 27.1211 65.9999 29.5866C65.9999 31.7993 64.3451 33.6326 62.2448 34.0119C61.863 38.1211 58.4261 41.3453 54.2892 41.4085C54.1619 41.4717 54.0983 41.4717 54.0346 41.4717ZM47.2882 33.3165C47.2882 36.9832 50.2159 39.9545 53.8437 40.0177C53.9073 40.0177 53.971 40.0177 54.0346 40.0177C57.726 40.0177 60.7174 37.0464 60.781 33.3798C60.781 33.0004 61.0992 32.6211 61.5447 32.6211C63.1995 32.6211 64.5361 31.2935 64.5361 29.6499C64.5361 28.0062 63.1995 26.6786 61.5447 26.6786H47.2882V33.3165Z"
                      fill="white"
                    />
                    <path d="M50.916 19.408V23.6436C53.2709 23.6436 55.1802 21.7471 55.1802 19.408V15.1724C52.8254 15.1724 50.916 17.0689 50.916 19.408Z" fill="white" />
                    <path d="M50.916 10.937V15.1727C53.2709 15.1727 55.1802 13.2761 55.1802 10.937V6.70142C52.8254 6.70142 50.916 8.59797 50.916 10.937Z" fill="white" />
                    <path d="M56.5803 15.1724V19.408C58.9352 19.408 60.8445 17.5115 60.8445 15.1724V10.9368C58.4897 10.9368 56.5803 12.8333 56.5803 15.1724Z" fill="white" />
                    <path
                      d="M32.2046 22.7586H17.8208C16.8025 22.7586 15.8478 22.3161 15.1477 21.6207C14.4476 20.9253 14.1294 19.9138 14.193 18.9023L15.4659 3.35057C15.5932 1.45402 17.1843 0 19.0937 0H30.9317C32.841 0 34.3685 1.45402 34.5595 3.28736L35.8324 18.8391C35.896 19.8506 35.5778 20.8621 34.8777 21.5575C34.1776 22.3793 33.1593 22.7586 32.2046 22.7586ZM30.868 1.45402H19.0937C17.9481 1.45402 17.057 2.27586 16.9298 3.41379L15.6569 18.9655C15.5932 19.5345 15.7841 20.1667 16.2297 20.6092C16.6115 21.0517 17.1843 21.3046 17.8208 21.3046H32.2046C32.7774 21.3046 33.3502 21.0517 33.7957 20.6092C34.1776 20.1667 34.4322 19.5977 34.3685 18.9655L33.0956 3.41379C32.9047 2.33908 32.0137 1.51724 30.868 1.45402Z"
                      fill="white"
                    />
                    <path
                      d="M34.8775 31.7353H15.0839C13.6837 31.7353 12.6017 30.787 12.5381 29.5859V26.1089C12.5381 24.9077 13.6837 23.9595 15.0202 23.8962H34.8775C36.2777 23.8962 37.3597 24.9077 37.4233 26.0457V29.5227C37.4233 30.787 36.2777 31.7353 34.8775 31.7353ZM15.0839 25.4135C14.5111 25.4135 14.0656 25.7296 14.0656 26.1089V29.5859C14.0656 29.9652 14.5111 30.2813 15.0839 30.2813H34.9412C35.514 30.2813 35.9595 29.9652 35.9595 29.5859V26.1089C35.9595 25.7296 35.514 25.4135 34.9412 25.4135H15.0839Z"
                      fill="white"
                    />
                    <path d="M36.8508 28.5117H36.0234V27.2473H36.8508C37.9964 27.2473 38.8875 26.3623 38.8875 25.2243V22.822H40.1604V25.2243C40.224 27.0577 38.6965 28.5117 36.8508 28.5117Z" fill="white" />
                    <path
                      d="M39.5873 23.4541C38.5053 23.4541 37.487 22.822 37.0415 21.7472C36.596 20.7357 36.8506 19.5346 37.6143 18.776C38.378 18.0174 39.5873 17.7645 40.6056 18.207C41.6239 18.6495 42.324 19.5978 42.324 20.7357C42.324 22.253 41.0511 23.4541 39.5873 23.4541ZM39.5873 19.2817C39.0145 19.2817 38.4417 19.5978 38.2507 20.1668C37.9962 20.6725 38.1235 21.3047 38.569 21.7472C38.9508 22.1898 39.5873 22.3162 40.1601 22.0633C40.7329 21.8737 41.0511 21.3047 41.0511 20.7357C40.9875 19.9139 40.351 19.2817 39.5873 19.2817Z"
                      fill="white"
                    />
                    <path d="M13.9384 28.5117H13.111C11.2653 28.5117 9.80144 27.0577 9.73779 25.2243V22.822H11.0107V25.2243C11.0107 26.3623 11.9017 27.2473 13.0473 27.2473H13.8747V28.5117H13.9384Z" fill="white" />
                    <path
                      d="M10.4376 23.4541C9.35567 23.4541 8.33735 22.7587 7.89183 21.7472C7.44631 20.7357 7.70089 19.5346 8.46464 18.776C9.22838 18.0174 10.4376 17.7645 11.456 18.207C12.4743 18.6495 13.1744 19.5978 13.1744 20.7357C13.1744 21.4311 12.8561 22.1266 12.347 22.6955C11.8378 23.2013 11.1377 23.4541 10.4376 23.4541ZM10.4376 19.2817C9.86483 19.2817 9.35567 19.661 9.10109 20.1668C8.84651 20.6725 8.9738 21.3047 9.41931 21.7472C9.80118 22.1266 10.4376 22.253 11.0104 22.0633C11.5196 21.8737 11.9015 21.3047 11.9015 20.7357C11.9015 20.3564 11.7742 19.9771 11.456 19.7243C11.1377 19.4082 10.8195 19.2817 10.4376 19.2817Z"
                      fill="white"
                    />
                    <path d="M28.195 21.3674H26.9221V24.5916H28.195V21.3674Z" fill="white" />
                    <path d="M23.0395 21.3674H21.7666V24.5916H23.0395V21.3674Z" fill="white" />
                    <path d="M25.649 34.9597H24.3761C22.9122 34.9597 21.7666 33.8218 21.7666 32.3677V30.408H28.2584V32.3677C28.2584 33.7585 27.0491 34.9597 25.649 34.9597ZM23.0395 31.7355V32.3677C23.0395 33.0631 23.6123 33.6321 24.3124 33.6321H25.5853C26.2854 33.6321 26.8582 33.0631 26.8582 32.3677V31.7355H23.0395Z" fill="white" />
                    <path d="M35.2594 42.1664H33.9865V41.5342C33.9865 40.3962 33.0318 39.448 31.8862 39.448H18.2025C17.0569 39.448 16.1022 40.3962 16.1022 41.5342V42.1664H14.8293V41.5342C14.8293 39.7008 16.3568 38.1836 18.2025 38.1836H31.8862C33.7319 38.1836 35.2594 39.7008 35.2594 41.5342V42.1664Z" fill="white" />
                    <path
                      d="M34.623 45.8973C33.732 45.8973 32.9046 45.3916 32.5864 44.5697C32.2682 43.7479 32.4591 42.7996 33.0319 42.1674C33.6684 41.5352 34.623 41.3456 35.4504 41.7249C36.2778 42.041 36.787 42.8628 36.787 43.7479C36.8506 44.949 35.8323 45.8973 34.623 45.8973ZM34.623 42.7996C34.2412 42.7996 33.923 42.9893 33.7957 43.3686C33.6684 43.6847 33.732 44.064 33.9866 44.3168C34.2412 44.5697 34.623 44.6329 34.9413 44.5065C35.2595 44.3801 35.5141 44.064 35.5141 43.6847C35.5141 43.2421 35.1322 42.7996 34.623 42.7996Z"
                      fill="white"
                    />
                    <path
                      d="M25.0125 45.8973C24.1214 45.8973 23.294 45.3916 22.9758 44.5697C22.6576 43.7479 22.8485 42.7996 23.4213 42.1674C24.0578 41.5352 25.0125 41.3456 25.8398 41.7249C26.6672 42.041 27.1764 42.8628 27.1764 43.7479C27.24 44.949 26.2854 45.8973 25.0125 45.8973ZM25.0125 42.7996C24.6306 42.7996 24.3124 42.9893 24.1851 43.3686C24.0578 43.6847 24.1214 44.064 24.376 44.3168C24.6306 44.5697 25.0125 44.6329 25.3307 44.5065C25.6489 44.3801 25.9035 44.064 25.9035 43.6847C25.9671 43.2421 25.5216 42.7996 25.0125 42.7996Z"
                      fill="white"
                    />
                    <path
                      d="M15.4658 45.8973C14.5748 45.8973 13.7474 45.3916 13.4292 44.5697C13.111 43.7479 13.3019 42.7996 13.8747 42.1674C14.5111 41.5352 15.4658 41.3456 16.2932 41.7249C17.1206 42.041 17.6298 42.8628 17.6298 43.7479C17.6298 44.949 16.6751 45.8973 15.4658 45.8973ZM15.4658 42.7996C15.084 42.7996 14.7657 42.9893 14.6384 43.3686C14.5111 43.6847 14.5748 44.064 14.8294 44.3168C15.084 44.5697 15.4658 44.6329 15.784 44.5065C16.1023 44.3801 16.3569 44.064 16.3569 43.6847C16.3569 43.2421 15.975 42.7996 15.4658 42.7996Z"
                      fill="white"
                    />
                    <path d="M25.5852 34.2646H24.3123V42.1669H25.5852V34.2646Z" fill="white" />
                    <path d="M12.0925 20.7362C12.0925 21.6845 11.3288 22.3799 10.4377 22.3799C9.48305 22.3799 8.78296 21.6213 8.78296 20.7362C8.78296 19.788 9.5467 19.0926 10.4377 19.0926C11.3288 19.0293 12.0925 19.788 12.0925 20.7362Z" fill="white" />
                    <path d="M41.2422 20.7362C41.2422 21.6845 40.4784 22.3799 39.5874 22.3799C38.6327 22.3799 37.9326 21.6213 37.9326 20.7362C37.9326 19.788 38.6964 19.0926 39.5874 19.0926C40.4784 19.0293 41.2422 19.788 41.2422 20.7362Z" fill="white" />
                    <path d="M35.7049 43.7466C35.7049 44.3787 35.1958 44.8213 34.623 44.8213C33.9865 44.8213 33.541 44.3155 33.541 43.7466C33.541 43.1144 34.0502 42.6719 34.623 42.6719C35.2594 42.6086 35.7049 43.1144 35.7049 43.7466Z" fill="white" />
                    <path d="M26.1578 43.7466C26.1578 44.3787 25.6487 44.8213 25.0759 44.8213C24.4394 44.8213 23.9939 44.3155 23.9939 43.7466C23.9939 43.1144 24.5031 42.6719 25.0759 42.6719C25.6487 42.6086 26.1578 43.1144 26.1578 43.7466Z" fill="white" />
                    <path d="M16.5477 43.7466C16.5477 44.3787 16.0386 44.8213 15.4658 44.8213C14.8293 44.8213 14.3838 44.3155 14.3838 43.7466C14.3838 43.1144 14.8929 42.6719 15.4658 42.6719C16.0386 42.6086 16.5477 43.1144 16.5477 43.7466Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_1024">
                      <rect width="66" height="55" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              title={'Equipamiento'}
              subtitle={'Sillas ergométricas. Proyector y Tv. Lockers numerados. Cocinas e infusiones.'}
              darkText={false}
            />
            <Service
              svg={
                <svg width="74" height="78" viewBox="0 0 74 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_7_1075)">
                    <path d="M0 24.0703C0 53.8911 24.124 78.0742 53.872 78.0742V24.0703H0Z" fill="#FF972F" />
                    <path d="M50.394 25.2569C50.32 25.2569 50.172 25.2569 50.098 25.1827L33.078 17.9871C32.708 17.8388 32.486 17.3195 32.634 16.9486C32.782 16.5777 33.3 16.3551 33.67 16.5035L50.69 23.6991C51.06 23.8474 51.282 24.3667 51.134 24.7376C50.986 25.1085 50.69 25.2569 50.394 25.2569Z" fill="white" />
                    <path d="M33.3741 37.8678C32.9301 37.8678 32.5601 37.4969 32.5601 37.0518V25.9246C32.5601 25.4795 32.9301 25.1086 33.3741 25.1086C33.8181 25.1086 34.1881 25.4795 34.1881 25.9246V37.0518C34.1881 37.4969 33.8181 37.8678 33.3741 37.8678Z" fill="white" />
                    <path d="M50.3941 38.7582C49.9501 38.7582 49.5801 38.3873 49.5801 37.9422V24.4413C49.5801 24.1445 49.8021 23.8478 50.0981 23.6994L67.1181 16.5039C67.4881 16.3555 68.0061 16.5039 68.1541 16.949C68.3021 17.3199 68.1541 17.8391 67.7101 17.9875L51.2081 24.9605V37.9422C51.2081 38.3873 50.8381 38.7582 50.3941 38.7582Z" fill="white" />
                    <path d="M67.414 18.0618C67.34 18.0618 67.192 18.0618 67.118 17.9876L50.098 10.7921C49.728 10.6437 49.506 10.1244 49.654 9.75352C49.802 9.38262 50.32 9.16007 50.69 9.30843L67.71 16.504C68.08 16.6524 68.302 17.1716 68.154 17.5425C68.006 17.8393 67.71 18.0618 67.414 18.0618Z" fill="white" />
                    <path d="M33.3739 18.0614C33.0779 18.0614 32.7819 17.9131 32.6339 17.5422C32.4859 17.1713 32.6339 16.652 33.0779 16.5036L50.0979 9.30808C50.5419 9.15971 50.9859 9.30808 51.1339 9.75316C51.2819 10.1241 51.1339 10.6433 50.6899 10.7917L33.6699 17.9873C33.5959 18.0614 33.5219 18.0614 33.3739 18.0614Z" fill="white" />
                    <path d="M45.7322 31.1172L28.7122 23.9217L33.3742 17.2454L50.3942 24.4409L45.7322 31.1172Z" fill="white" />
                    <path
                      d="M45.7319 31.9337C45.6579 31.9337 45.5099 31.9337 45.4359 31.8595L28.4159 24.6639C28.1939 24.5897 28.0459 24.3672 27.9719 24.1447C27.8979 23.9221 27.9719 23.6996 28.1199 23.477L32.7819 16.8007C33.0039 16.504 33.3739 16.3556 33.7439 16.504L50.7639 23.6996C50.9859 23.7738 51.1339 23.9963 51.2079 24.2188C51.2819 24.4414 51.2079 24.6639 51.0599 24.8865L46.3979 31.5628C46.2499 31.7853 45.9539 31.9337 45.7319 31.9337ZM29.9699 23.5512L45.4359 30.0792L49.1359 24.7381L33.6699 18.2102L29.9699 23.5512Z"
                      fill="white"
                    />
                    <path d="M50.394 24.4409L55.056 31.1172L72.076 23.9217L67.414 17.2454" fill="white" />
                    <path
                      d="M55.0559 31.9333C54.8339 31.9333 54.5379 31.785 54.3899 31.5624L49.7279 24.8861C49.5059 24.5152 49.5799 23.996 49.9499 23.7734C50.3199 23.5509 50.8379 23.6251 51.0599 23.996L55.3519 30.153L70.8179 23.6251L66.7479 17.7648C66.5259 17.3938 66.5999 16.8746 66.9699 16.652C67.3399 16.4295 67.8579 16.5037 68.0799 16.8746L72.7419 23.5509C72.8899 23.7734 72.8899 23.996 72.8899 24.2185C72.8159 24.4411 72.6679 24.6636 72.4459 24.7378L55.4259 31.9333C55.2779 31.9333 55.2039 31.9333 55.0559 31.9333Z"
                      fill="white"
                    />
                    <path d="M14.948 51.072L20.128 45.8052L33.078 58.861L27.898 64.1279L14.948 51.072Z" fill="white" />
                    <path d="M27.8979 64.7218C27.7499 64.7218 27.6019 64.6476 27.4539 64.5734L14.5039 51.4434C14.2819 51.2208 14.2819 50.8499 14.5039 50.6274L19.6839 45.3605C19.9059 45.138 20.2759 45.138 20.4979 45.3605L33.4479 58.4164C33.6699 58.6389 33.6699 59.0098 33.4479 59.2324L28.2679 64.4992C28.1939 64.6476 28.0459 64.7218 27.8979 64.7218ZM15.7619 51.0725L27.8979 63.3123L32.2639 58.9357L20.1279 46.6216L15.7619 51.0725Z" fill="white" />
                    <path
                      d="M31.746 58.3419C31.524 58.3419 31.302 58.2677 31.154 58.1193L20.794 47.6598C20.498 47.363 20.498 46.8438 20.794 46.5471L30.71 36.5326C30.858 36.3842 31.08 36.3101 31.302 36.3101H48.47C50.246 36.3101 51.726 37.7937 51.726 39.574V40.8351C51.726 41.4286 51.578 42.022 51.282 42.5413H57.276C57.72 42.5413 58.164 42.3929 58.46 42.022L67.044 33.3428C68.228 32.1559 70.448 32.1559 71.632 33.3428L73.038 34.8264C73.63 35.4199 74 36.2359 74 37.126C74 38.0162 73.63 38.8322 73.038 39.4257L59.57 52.9266C58.978 53.5201 58.164 53.891 57.276 53.891H35.446L32.412 57.9709C32.264 58.1935 32.042 58.3419 31.746 58.3419C31.82 58.3419 31.82 58.3419 31.746 58.3419ZM22.57 47.0663L31.672 56.2648L34.41 52.5557C34.558 52.3332 34.78 52.259 35.076 52.259H57.35C57.794 52.259 58.238 52.1106 58.534 51.7397L72.002 38.1646C72.298 37.8679 72.52 37.4228 72.52 36.9777C72.52 36.5326 72.372 36.0875 72.002 35.7908L70.522 34.3072C69.93 33.7137 68.82 33.7137 68.228 34.3072L59.57 43.0605C58.978 43.654 58.164 44.0249 57.276 44.0249H48.544C48.1 44.0249 47.73 43.654 47.73 43.2089C47.73 42.7638 48.1 42.3929 48.544 42.3929C49.432 42.3929 50.172 41.6511 50.172 40.6867V39.4257C50.172 38.5355 49.432 37.7195 48.544 37.7195H31.746L22.57 47.0663Z"
                      fill="white"
                    />
                    <path d="M48.5441 44.0253H40.4041C39.9601 44.0253 39.5901 43.6544 39.5901 43.2093C39.5901 42.7642 39.9601 42.3933 40.4041 42.3933H48.5441C48.9881 42.3933 49.3581 42.7642 49.3581 43.2093C49.2841 43.6544 48.9881 44.0253 48.5441 44.0253Z" fill="white" />
                    <path d="M51.6521 14.1303C51.5041 13.982 51.2081 13.982 50.9861 14.1303L50.0981 15.0205C49.9501 15.1688 49.9501 15.4656 50.0981 15.6881C50.2461 15.8365 50.5421 15.8365 50.7641 15.6881L51.6521 14.7979C51.8001 14.5754 51.8001 14.2787 51.6521 14.1303Z" fill="white" />
                    <path d="M49.2099 16.578C49.0619 16.4296 48.7659 16.3554 48.5439 16.578L47.6559 17.4681C47.5079 17.6165 47.5079 17.9874 47.6559 18.1358C47.8039 18.2841 48.0999 18.2841 48.3219 18.1358L49.2099 17.2456C49.4319 17.023 49.4319 16.7263 49.2099 16.578Z" fill="white" />
                    <path d="M51.6521 17.4681L50.7641 16.578C50.6161 16.4296 50.3201 16.3554 50.0981 16.578C49.9501 16.7263 49.9501 17.023 50.0981 17.2456L50.9861 18.1358C51.1341 18.2841 51.4301 18.2841 51.6521 18.1358C51.8001 17.9132 51.8001 17.6165 51.6521 17.4681Z" fill="white" />
                    <path d="M49.2099 15.0205L48.3219 14.1303C48.1739 13.982 47.8779 13.982 47.6559 14.1303C47.5079 14.2787 47.5079 14.5754 47.6559 14.7979L48.5439 15.6881C48.6919 15.8365 48.9879 15.8365 49.2099 15.6881C49.4319 15.5398 49.4319 15.243 49.2099 15.0205Z" fill="white" />
                    <path d="M45.7319 5.15424C45.5839 5.00588 45.4359 5.00588 45.3619 5.15424L44.8439 5.67351C44.6959 5.82187 44.6959 5.97023 44.8439 6.1186C44.9179 6.26696 45.1399 6.26696 45.2139 6.1186L45.7319 5.59933C45.8799 5.45096 45.8799 5.3026 45.7319 5.15424Z" fill="white" />
                    <path d="M44.2519 6.63788C44.1039 6.48952 43.9559 6.48952 43.8819 6.63788L43.3639 7.15715C43.2159 7.30551 43.2159 7.45388 43.3639 7.60224C43.5119 7.7506 43.6599 7.7506 43.7339 7.60224L44.2519 7.08297C44.3999 6.93461 44.3999 6.78625 44.2519 6.63788Z" fill="white" />
                    <path d="M45.7319 7.23137L45.2139 6.7121C45.0659 6.56374 44.9179 6.56374 44.8439 6.7121C44.6959 6.86046 44.6959 7.00883 44.8439 7.15719L45.3619 7.67646C45.5099 7.82482 45.6579 7.82482 45.7319 7.67646C45.8799 7.52809 45.8799 7.30555 45.7319 7.23137Z" fill="white" />
                    <path d="M44.2519 5.74773L43.7339 5.22846C43.5859 5.0801 43.4379 5.0801 43.3639 5.22846C43.2159 5.37682 43.2159 5.52518 43.3639 5.67355L43.8819 6.19281C44.0299 6.34118 44.1779 6.34118 44.2519 6.19281C44.3999 6.04445 44.3999 5.82191 44.2519 5.74773Z" fill="white" />
                    <path d="M57.498 3.07706C57.72 3.29961 58.09 3.29961 58.312 3.07706L59.422 1.96434C59.644 1.7418 59.644 1.3709 59.422 1.14835C59.2 0.925809 58.83 0.925809 58.608 1.14835L57.498 2.26107C57.276 2.48361 57.276 2.85452 57.498 3.07706Z" fill="white" />
                    <path d="M54.5381 6.04435C54.7601 6.26689 55.1301 6.26689 55.3521 6.04435L56.4621 4.93163C56.6841 4.70909 56.6841 4.33818 56.4621 4.11564C56.2401 3.89309 55.8701 3.89309 55.6481 4.11564L54.5381 5.22835C54.3161 5.4509 54.3161 5.8218 54.5381 6.04435Z" fill="white" />
                    <path d="M57.498 4.93163L58.608 6.04435C58.83 6.26689 59.2 6.26689 59.422 6.04435C59.644 5.8218 59.644 5.4509 59.422 5.22835L58.312 4.11564C58.09 3.89309 57.72 3.89309 57.498 4.11564C57.276 4.33818 57.276 4.70909 57.498 4.93163Z" fill="white" />
                    <path d="M54.5381 1.96434L55.6481 3.07706C55.8701 3.29961 56.2401 3.29961 56.4621 3.07706C56.6841 2.85452 56.6841 2.48361 56.4621 2.26107L55.3521 1.14835C55.1301 0.925809 54.7601 0.925809 54.5381 1.14835C54.3161 1.3709 54.3161 1.7418 54.5381 1.96434Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0_7_1075">
                      <rect width="74" height="78" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              }
              title={'Market Vida'}
              subtitle={'Tenemos todo lo que necesitas para acompañarte en tu día como en casa. Sector autogestionable, elegís el producto y dejas el pago en su frasco.'}
              darkText={false}
            />
          </div>
          <div style={{ paddingBottom: '160px' }}>
            <div className="d-flex justify-content-center align-items-start flex-wrap servicesSection">
              <Service
                svg={
                  <svg width="58" height="49" viewBox="0 0 58 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1080)">
                      <path d="M46.3491 48.9993C46.3491 23.2166 25.5939 2.37231 0 2.37231V49.0634H46.3491V48.9993Z" fill="#FF972F" />
                      <path d="M50.2963 27.5784C53.0976 27.5784 55.3896 25.2053 55.3896 22.3192C55.3896 19.4331 53.0976 17.0601 50.2963 17.0601C47.4949 17.0601 45.203 19.369 45.203 22.3192C45.1393 25.2053 47.4313 27.5784 50.2963 27.5784Z" fill="white" />
                      <path d="M57.9999 38.097C57.9999 33.7357 54.4983 30.2083 50.2326 30.2083C49.8506 30.2083 49.4049 30.2724 49.0229 30.3365V38.097H57.9999Z" fill="white" />
                      <path d="M34.316 17.7009C37.1173 17.7009 39.4093 15.392 39.4093 12.4418C39.4093 9.55565 37.1173 7.18262 34.316 7.18262C31.5146 7.18262 29.2227 9.55565 29.2227 12.4418C29.2227 15.3279 31.5146 17.7009 34.316 17.7009Z" fill="white" />
                      <path d="M34.125 22.9599V26.8722L35.1437 27.0005L41.7649 27.706H41.9559C41.7013 23.6013 38.327 20.3303 34.2523 20.3303C32.979 20.3303 31.7693 20.651 30.687 21.2282L32.597 21.4206C33.4883 21.4848 34.125 22.1261 34.125 22.9599Z" fill="white" />
                      <path d="M18.3993 10.4539C21.2006 10.4539 23.4926 8.14497 23.4926 5.19471C23.4926 2.30858 21.2006 -0.0644531 18.3993 -0.0644531C15.598 -0.0644531 13.306 2.30858 13.306 5.19471C13.2423 8.14497 15.5343 10.4539 18.3993 10.4539Z" fill="white" />
                      <path d="M18.5907 14.4946C19.3547 14.4946 19.9277 15.1359 19.9277 15.8414V20.0744L20.9463 20.2027L26.1033 20.7799C25.976 16.5469 22.538 13.1477 18.3997 13.1477C17.0627 13.1477 15.7894 13.4684 14.707 14.1097L15.089 14.1739L18.5907 14.4946Z" fill="white" />
                      <path
                        d="M47.4949 43.2911H47.4313L30.5597 41.4311C29.2227 41.4311 28.1404 40.2767 28.1404 38.9298V34.8893L17.0624 33.6707C15.7891 33.6707 14.7705 32.5804 14.7705 31.2976V27.0647L4.07451 25.9102C2.86485 25.9102 1.84619 24.884 1.84619 23.6013V14.3016C1.84619 13.0189 2.86485 11.9927 4.07451 11.9927C4.13818 11.9927 4.13818 11.9927 4.20184 11.9927L18.6541 13.5319C19.8638 13.5319 20.8824 14.5581 20.8824 15.8408V19.2401L32.788 20.5228C34.0613 20.5228 35.08 21.6131 35.08 22.8958V26.0385L41.956 26.744L47.6223 27.3212C48.9593 27.3212 50.0416 28.4757 50.0416 29.8225V40.6615C49.9779 42.1366 48.8956 43.2911 47.4949 43.2911ZM4.07451 13.8526C3.81985 13.8526 3.69251 14.045 3.69251 14.3016V23.5372C3.69251 23.7937 3.88351 23.9861 4.13818 23.9861C4.20184 23.9861 4.20184 23.9861 4.26551 23.9861L15.7891 25.2047C16.2348 25.2688 16.6168 25.6537 16.6168 26.1026V31.1694C16.6168 31.4901 16.8714 31.7466 17.1898 31.7466C17.2534 31.7466 17.2534 31.7466 17.3171 31.7466L29.2864 33.0293C29.732 33.0935 30.114 33.4783 30.114 33.9272V38.8016C30.114 39.1864 30.4324 39.5071 30.7507 39.5071C30.7507 39.5071 30.8144 39.5071 30.878 39.5071L47.7496 41.3029C48.0679 41.3029 48.3863 40.9822 48.3863 40.5974V29.9508C48.3863 29.566 48.0679 29.2453 47.7496 29.2453H47.6859L34.316 27.8343C33.8703 27.7702 33.4883 27.3853 33.4883 26.9364V23.0241C33.4883 22.7034 33.2337 22.4469 32.979 22.4469C32.9153 22.4469 32.9153 22.4469 32.8517 22.4469L20.1184 21.1C19.6728 21.0359 19.2908 20.651 19.2908 20.2021V15.9691C19.2908 15.7126 19.0998 15.5202 18.8451 15.5202C18.7814 15.5202 18.7814 15.5202 18.7178 15.5202L4.07451 13.8526Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1080">
                        <rect width="58" height="49" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Salas de reunión y videocall'}
                subtitle={'Espacios equipados para reunirse y realizar videollamadas.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1072)">
                      <path d="M0 55.3334C24.2819 55.3334 43.9732 35.6398 43.9732 11.355H0V55.3334Z" fill="#FF972F" />
                      <path d="M12.3825 18.5439C7.12746 18.5439 2.83887 14.2547 2.83887 8.93867C2.83887 3.6226 7.12746 -0.666504 12.3825 -0.666504C17.6375 -0.666504 21.9261 3.6226 21.9261 8.93867C21.9865 14.1943 17.6979 18.5439 12.3825 18.5439ZM12.3825 0.662515C7.85229 0.662515 4.16773 4.34752 4.16773 8.93867C4.16773 13.5298 7.85229 17.2148 12.4429 17.2148C16.9731 17.2148 20.7181 13.5298 20.7181 8.93867C20.6577 4.34752 16.9731 0.662515 12.3825 0.662515Z" fill="white" />
                      <path d="M16.1276 6.46197C16.1276 8.51591 14.4364 10.2074 12.3827 10.2074C10.329 10.2074 8.6377 8.51591 8.6377 6.46197C8.6377 4.40803 10.329 2.71655 12.3827 2.71655C14.4364 2.71655 16.1276 4.34762 16.1276 6.46197Z" fill="white" />
                      <path d="M17.7584 16.0673C17.0335 13.7717 14.9194 12.1406 12.3825 12.1406C9.84561 12.1406 7.73151 13.8321 7.00668 16.0673C6.82547 16.611 10.0268 17.6379 10.0268 17.6379L14.1342 17.7587" fill="white" />
                      <path d="M44.4564 18.5439C39.2013 18.5439 34.9127 14.2547 34.9127 8.93867C34.8523 3.6226 39.1409 -0.666504 44.4564 -0.666504C49.7114 -0.666504 54 3.6226 54 8.93867C54 14.1943 49.7114 18.5439 44.4564 18.5439ZM44.4564 0.662515C39.9262 0.662515 36.1812 4.34752 36.1812 8.93867C36.1812 13.5298 39.8658 17.2148 44.4564 17.2148C48.9866 17.2148 52.7315 13.5298 52.7315 8.93867C52.6711 4.34752 48.9866 0.662515 44.4564 0.662515Z" fill="white" />
                      <path d="M48.1411 6.46197C48.1411 8.51591 46.4498 10.2074 44.3961 10.2074C42.3424 10.2074 40.6511 8.51591 40.6511 6.46197C40.6511 4.40803 42.3424 2.71655 44.3961 2.71655C46.5102 2.71655 48.1411 4.34762 48.1411 6.46197Z" fill="white" />
                      <path d="M49.8323 16.0673C49.1075 13.7717 46.9934 12.1406 44.4565 12.1406C41.9196 12.1406 39.8055 13.8321 39.0807 16.0673C38.8994 16.611 42.1008 17.6379 42.1008 17.6379L46.2082 17.7587" fill="white" />
                      <path d="M12.3825 51.1652C7.12746 51.1652 2.83887 46.8761 2.83887 41.56C2.83887 36.2439 7.12746 31.9548 12.3825 31.9548C17.6375 31.9548 21.9261 36.2439 21.9261 41.56C21.9865 46.8761 17.6979 51.1652 12.3825 51.1652ZM12.3825 33.2839C7.85229 33.2839 4.10732 36.9689 4.10732 41.56C4.10732 46.1512 7.79189 49.8362 12.3825 49.8362C16.9127 49.8362 20.6577 46.1512 20.6577 41.56C20.6577 36.9689 16.9731 33.2839 12.3825 33.2839Z" fill="white" />
                      <path d="M16.1276 39.0833C16.1276 41.1372 14.4364 42.8287 12.3827 42.8287C10.329 42.8287 8.6377 41.1372 8.6377 39.0833C8.6377 37.0294 10.329 35.3379 12.3827 35.3379C14.4364 35.3379 16.1276 36.969 16.1276 39.0833Z" fill="white" />
                      <path d="M17.7584 48.6886C17.0335 46.393 14.9194 44.762 12.3825 44.762C9.84561 44.762 7.73151 46.4534 7.00668 48.6886C6.82547 49.2323 10.0268 50.2593 10.0268 50.2593L14.1342 50.3801" fill="white" />
                      <path d="M44.4565 51.1652C39.2014 51.1652 34.9128 46.8761 34.9128 41.56C34.9128 36.2439 39.2014 31.9548 44.4565 31.9548C49.7115 31.9548 54.0001 36.2439 54.0001 41.56C54.0001 46.8761 49.7115 51.1652 44.4565 51.1652ZM44.4565 33.2839C39.9263 33.2839 36.1813 36.9689 36.1813 41.56C36.1813 46.1512 39.8659 49.8362 44.4565 49.8362C48.9867 49.8362 52.7316 46.1512 52.7316 41.56C52.6712 36.9689 48.9867 33.2839 44.4565 33.2839Z" fill="white" />
                      <path d="M48.1411 39.0833C48.1411 41.1372 46.4498 42.8287 44.3961 42.8287C42.3424 42.8287 40.6511 41.1372 40.6511 39.0833C40.6511 37.0294 42.3424 35.3379 44.3961 35.3379C46.5102 35.3379 48.1411 36.969 48.1411 39.0833Z" fill="white" />
                      <path d="M49.8323 48.6886C49.1075 46.393 46.9934 44.762 44.4565 44.762C41.9196 44.762 39.8055 46.4534 39.0807 48.6886C38.8994 49.2323 42.1008 50.2593 42.1008 50.2593L46.2082 50.3801" fill="white" />
                      <path
                        d="M33.0403 30.1423L32.7987 30.0819C32.2551 29.9611 31.8323 29.5382 31.7115 28.9946L31.6511 28.7529C31.5906 28.4509 31.349 28.2092 30.9866 28.2092C30.6846 28.2092 30.443 28.4509 30.3222 28.7529L30.2618 28.9946C30.141 29.5382 29.7182 29.9611 29.1745 30.0819L28.9933 30.1423C28.6913 30.2028 28.4497 30.4444 28.4497 30.8069C28.4497 31.1089 28.6913 31.411 28.9933 31.4714L29.2349 31.5318C29.7786 31.6526 30.2014 32.0755 30.3222 32.6191L30.3826 32.8608C30.443 33.1628 30.6846 33.4045 31.047 33.4045C31.349 33.4045 31.6511 33.1628 31.7115 32.8608L31.7719 32.6191C31.8927 32.0755 32.3155 31.6526 32.8591 31.5318L33.1007 31.4714C33.4027 31.411 33.6443 31.1693 33.6443 30.8069C33.5839 30.5048 33.3423 30.2028 33.0403 30.1423Z"
                        fill="white"
                      />
                      <path d="M32.9194 20.3561C33.1007 20.3561 33.2215 20.2353 33.2215 20.054V19.2083C33.2215 19.0271 33.1007 18.9062 32.9194 18.9062C32.7382 18.9062 32.6174 19.0271 32.6174 19.2083V20.054C32.6174 20.2353 32.7986 20.3561 32.9194 20.3561Z" fill="white" />
                      <path d="M32.9194 22.7118C33.1007 22.7118 33.2215 22.591 33.2215 22.4098V21.564C33.2215 21.3828 33.1007 21.262 32.9194 21.262C32.7382 21.262 32.6174 21.3828 32.6174 21.564V22.4098C32.6174 22.5306 32.7986 22.7118 32.9194 22.7118Z" fill="white" />
                      <path d="M33.7047 21.0812H34.5504C34.7316 21.0812 34.8524 20.9603 34.8524 20.7791C34.8524 20.5979 34.7316 20.4771 34.5504 20.4771H33.7047C33.5235 20.4771 33.4027 20.5979 33.4027 20.7791C33.3423 20.9603 33.5235 21.0812 33.7047 21.0812Z" fill="white" />
                      <path d="M31.3489 21.0812H32.1945C32.3757 21.0812 32.4965 20.9603 32.4965 20.7791C32.4965 20.5979 32.3757 20.4771 32.1945 20.4771H31.3489C31.1677 20.4771 31.0469 20.5979 31.0469 20.7791C31.0469 20.9603 31.1677 21.0812 31.3489 21.0812Z" fill="white" />
                      <path
                        d="M28.6309 23.2562L27.3624 23.0146C26.2148 22.7729 25.3691 21.9272 25.1275 20.7794L24.8859 19.5108C24.8255 19.0879 24.4631 18.7859 24.0403 18.7859C23.6175 18.7859 23.2551 19.0879 23.1947 19.5108L22.953 20.7794C22.7114 21.9272 21.8658 22.7729 20.7181 23.0146L19.4497 23.2562C19.0269 23.3166 18.7249 23.6791 18.7249 24.102C18.7249 24.5248 19.0269 24.8873 19.4497 24.9477L20.7181 25.1893C21.8658 25.431 22.7114 26.2767 22.953 27.4245L23.1947 28.6931C23.2551 29.116 23.6175 29.418 24.0403 29.418C24.4631 29.418 24.8255 29.116 24.8859 28.6931L25.1275 27.4245C25.3691 26.2767 26.2148 25.431 27.3624 25.1893L28.6309 24.9477C29.0537 24.8873 29.3557 24.5248 29.3557 24.102C29.3557 23.6791 29.0537 23.3166 28.6309 23.2562Z"
                        fill="white"
                      />
                      <path d="M23.1947 7.48875C22.8322 7.48875 22.5302 7.24711 22.4698 6.94506C22.349 6.52219 22.5906 6.09932 23.0134 5.9785C26.4564 5.01194 30.2618 5.01194 33.7651 5.91809C34.1879 6.03891 34.4295 6.46178 34.3087 6.88465C34.1879 7.30752 33.7651 7.54916 33.3423 7.42834C30.141 6.52219 26.6376 6.5826 23.4363 7.48875C23.3155 7.48875 23.2551 7.48875 23.1947 7.48875Z" fill="white" />
                      <path d="M28.3893 45.2453C26.5772 45.2453 24.7651 45.0036 23.0134 44.5204C22.5906 44.3995 22.349 43.9767 22.4698 43.5538C22.5906 43.1309 23.0134 42.8893 23.4363 43.0101C26.6376 43.9163 30.0806 43.9163 33.2819 43.0101C33.7047 42.8893 34.1275 43.1309 34.2483 43.5538C34.3692 43.9767 34.1275 44.3995 33.7047 44.5204C32.0134 45.064 30.2014 45.2453 28.3893 45.2453Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1072">
                        <rect width="54" height="55" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Comunidad Vida'}
                subtitle={'Brindamos experiencias y propuestas mensuales a nuestros coworkers. Contamos con una red de beneficios de la mano de reconocidos emprendedores de la zona.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="59" height="67" viewBox="0 0 59 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1076)">
                      <path d="M59.5 58.5747C59.5 26.0457 33.0797 -0.333496 0.5 -0.333496V58.5747H59.5Z" fill="#FF972F" />
                      <path
                        d="M26.5961 66.6662C17.3571 66.6662 9.82005 59.4645 9.65796 50.6445V50.5636V35.9174C9.65796 35.0273 10.3874 34.2991 11.2788 34.2991H41.6703C46.7761 34.2991 50.9904 38.345 50.9904 43.2C50.9904 47.5696 47.6676 51.2109 43.3722 52.0201C42.5618 60.031 35.592 66.3426 27.0824 66.5853C26.9203 66.5853 26.7582 66.6662 26.5961 66.6662ZM12.9808 50.4017V50.4826C12.9808 57.4416 18.897 63.1868 26.1099 63.3486C26.272 63.3486 26.353 63.2677 26.5151 63.2677C33.8901 63.2677 39.9684 57.5225 40.0494 50.4017C40.0494 49.5116 40.7788 48.7834 41.6703 48.7834C44.9121 48.7834 47.5865 46.194 47.5865 43.1191C47.5865 39.9633 44.9121 37.4549 41.5893 37.4549H12.9808V50.4017Z"
                        fill="white"
                      />
                      <path d="M19.5454 24.0228V31.3054C23.7597 31.3054 27.1635 28.0687 27.1635 24.0228V16.7402C23.0303 16.6593 19.5454 19.9769 19.5454 24.0228Z" fill="white" />
                      <path d="M19.5454 9.3766V16.6592C23.7597 16.6592 27.1635 13.4225 27.1635 9.3766V2.09399C23.0303 2.09399 19.5454 5.33071 19.5454 9.3766Z" fill="white" />
                      <path d="M29.6758 16.6593V23.9419C33.8901 23.9419 37.2939 20.7052 37.2939 16.6593V9.37671C33.0796 9.37671 29.6758 12.6134 29.6758 16.6593Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1076">
                        <rect width="59" height="67" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Catering'}
                subtitle={'Lo armamos en base a lo que necesites.'}
                darkText={false}
              />
            </div>
            <div className="d-flex justify-content-center align-items-start flex-wrap servicesSection">
              <Service
                svg={
                  <svg width="54" height="49" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1081)">
                      <path d="M-0.5 44.9836C24.4831 44.9836 44.7429 24.8398 44.7429 0H-0.5V44.9836Z" fill="#FF972F" />
                      <path d="M11.1216 40.2875C11.1216 41.894 9.81651 43.1916 8.20069 43.1916C6.58487 43.1916 5.27979 41.894 5.27979 40.2875C5.27979 38.6809 6.58487 37.3833 8.20069 37.3833C9.81651 37.3833 11.1216 38.6809 11.1216 40.2875Z" fill="white" />
                      <path d="M8.26277 44.613C5.83904 44.613 3.91249 46.5285 3.85034 48.9384H12.6131C12.6131 46.5903 10.6865 44.613 8.26277 44.613Z" fill="white" />
                      <path d="M21.5623 40.2875C21.5623 41.894 20.2572 43.1916 18.6414 43.1916C17.0255 43.1916 15.7205 41.894 15.7205 40.2875C15.7205 38.6809 17.0255 37.3833 18.6414 37.3833C20.2572 37.3833 21.5623 38.6809 21.5623 40.2875Z" fill="white" />
                      <path d="M18.6412 44.613C16.2175 44.613 14.2909 46.5285 14.2288 48.9384H22.9915C22.9915 46.5903 21.0649 44.613 18.6412 44.613Z" fill="white" />
                      <path d="M31.9407 40.2875C31.9407 41.894 30.6356 43.1916 29.0198 43.1916C27.404 43.1916 26.0989 41.894 26.0989 40.2875C26.0989 38.6809 27.404 37.3833 29.0198 37.3833C30.6356 37.3833 31.9407 38.6809 31.9407 40.2875Z" fill="white" />
                      <path d="M29.0196 44.613C26.5959 44.613 24.6693 46.5285 24.6072 48.9384H33.3699C33.432 46.5903 31.4433 44.613 29.0196 44.613Z" fill="white" />
                      <path d="M42.3191 40.2875C42.3191 41.894 41.014 43.1916 39.3982 43.1916C37.7824 43.1916 36.4773 41.894 36.4773 40.2875C36.4773 38.6809 37.7824 37.3833 39.3982 37.3833C41.014 37.3833 42.3191 38.6809 42.3191 40.2875Z" fill="white" />
                      <path d="M39.4603 44.613C37.0366 44.613 35.11 46.5285 35.0479 48.9384H43.8106C43.8106 46.5903 41.884 44.613 39.4603 44.613Z" fill="white" />
                      <path d="M52.76 40.2875C52.76 41.894 51.4549 43.1916 49.8391 43.1916C48.2233 43.1916 46.9182 41.894 46.9182 40.2875C46.9182 38.6809 48.2233 37.3833 49.8391 37.3833C51.4549 37.3833 52.76 38.6809 52.76 40.2875Z" fill="white" />
                      <path d="M49.8389 44.613C47.4152 44.613 45.4887 46.5285 45.4265 48.9384H54.1892C54.2514 46.5903 52.2627 44.613 49.8389 44.613Z" fill="white" />
                      <path d="M15.9067 37.6307C15.9067 38.8665 14.8502 39.917 13.6073 39.917C12.3644 39.917 11.3079 38.8665 11.3079 37.6307C11.3079 36.3949 12.3644 35.3445 13.6073 35.3445C14.8502 35.3445 15.9067 36.3331 15.9067 37.6307Z" fill="white" />
                      <path d="M13.6074 41.0908C11.6809 41.0908 10.1272 42.6356 10.1272 44.5511H17.0876C17.0876 42.6356 15.534 41.0908 13.6074 41.0908Z" fill="white" />
                      <path d="M26.2854 37.6307C26.2854 38.8665 25.2289 39.917 23.986 39.917C22.743 39.917 21.6865 38.8665 21.6865 37.6307C21.6865 36.3949 22.743 35.3445 23.986 35.3445C25.2289 35.3445 26.2854 36.3331 26.2854 37.6307Z" fill="white" />
                      <path d="M23.9861 41.0908C22.0595 41.0908 20.5059 42.6356 20.5059 44.5511H27.4663C27.4663 42.6356 25.9126 41.0908 23.9861 41.0908Z" fill="white" />
                      <path d="M36.6018 37.6307C36.6018 38.8665 35.5453 39.917 34.3024 39.917C33.0594 39.917 32.0029 38.8665 32.0029 37.6307C32.0029 36.3949 33.0594 35.3445 34.3024 35.3445C35.5453 35.3445 36.6018 36.3331 36.6018 37.6307Z" fill="white" />
                      <path d="M34.3022 41.0908C32.3757 41.0908 30.822 42.6356 30.822 44.5511H37.7825C37.7825 42.6356 36.2288 41.0908 34.3022 41.0908Z" fill="white" />
                      <path d="M46.9802 37.6307C46.9802 38.8665 45.9237 39.917 44.6808 39.917C43.4378 39.917 42.3813 38.8665 42.3813 37.6307C42.3813 36.3949 43.4378 35.3445 44.6808 35.3445C45.9237 35.3445 46.9802 36.3331 46.9802 37.6307Z" fill="white" />
                      <path d="M44.6809 41.0908C42.7544 41.0908 41.2007 42.6356 41.2007 44.5511H48.1611C48.1611 42.6356 46.6075 41.0908 44.6809 41.0908Z" fill="white" />
                      <path d="M16.0931 7.66202C16.0931 9.33037 14.7258 10.6898 13.0479 10.6898C11.3699 10.6898 10.0027 9.33037 10.0027 7.66202C10.0027 5.99367 11.3699 4.63428 13.0479 4.63428C14.6637 4.63428 16.0931 5.99367 16.0931 7.66202Z" fill="white" />
                      <path d="M12.9857 12.2961C10.4377 12.2961 8.38685 14.3352 8.32471 16.8687H17.5846C17.6467 14.3352 15.5337 12.2961 12.9857 12.2961Z" fill="white" />
                      <path
                        d="M20.3816 30.4629H5.65278C4.96917 30.4629 4.40985 29.9068 4.40985 29.2271V22.7391H4.22341C3.53979 22.7391 2.98047 22.183 2.98047 21.5033V19.217C2.98047 18.5373 3.53979 17.9812 4.22341 17.9812H21.811C22.4946 17.9812 23.0539 18.5373 23.0539 19.217V21.5033C23.0539 22.183 22.4946 22.7391 21.811 22.7391H21.6245V29.2889C21.6245 29.9686 21.0652 30.4629 20.3816 30.4629ZM6.21211 28.7328H19.8223V21.874C19.8223 21.3797 20.1952 21.0089 20.6923 21.0089H21.2517V19.7731H4.78273V21.0089H5.34205C5.83923 21.0089 6.21211 21.3797 6.21211 21.874V28.7328Z"
                        fill="white"
                      />
                      <path d="M53.1949 26.5081H28.1497C27.4661 26.5081 26.9067 25.952 26.9067 25.2723V6.11716C26.9067 5.43746 27.4661 4.88135 28.1497 4.88135H41.6356C48.7203 4.88135 54.5 10.6279 54.5 17.672V25.2723C54.5 25.952 53.8785 26.5081 53.1949 26.5081ZM28.6469 24.7162H52.6977V17.6102C52.6977 11.5547 47.726 6.5497 41.6356 6.5497H28.6469V24.7162Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1081">
                        <rect width="54" height="49" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'SUM'}
                subtitle={'Salón de usos múltiples adaptable para cursos, workshops, eventos, desde 10 a 150 personas.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="76" height="68" viewBox="0 0 76 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1073)">
                      <path d="M0 10.7659C0 42.1866 25.6746 67.667 57.3347 67.667V10.7659H0Z" fill="#FF972F" />
                      <path d="M42.6858 49.0648H25.3594C25.0444 49.0648 24.8081 48.9084 24.6506 48.674C24.4931 48.4395 24.4931 48.1268 24.6506 47.8142L31.1874 36.559C31.3449 36.3245 31.5812 36.1682 31.8962 36.1682H42.6071C43.0796 36.1682 43.4734 36.559 43.4734 37.028V48.2832C43.5522 48.7521 43.1584 49.0648 42.6858 49.0648ZM26.8558 47.4234H41.8195V37.8096H32.4475L26.8558 47.4234Z" fill="white" />
                      <path d="M25.4383 48.2826L18.8228 36.9493L25.5958 25.3815L23.7057 24.2872L34.4953 21.3953L37.3305 32.1033L35.4404 31.0091L29.9274 40.4665L25.4383 48.2826Z" fill="white" />
                      <path
                        d="M25.4386 49.0646C25.1236 49.0646 24.8873 48.9082 24.7298 48.6738L18.1142 37.3404C17.9567 37.1059 17.9567 36.7933 18.1142 36.4807L24.4147 25.6163L23.2334 24.9128C22.9184 24.7565 22.7609 24.4439 22.8396 24.0531C22.9184 23.7404 23.1546 23.4278 23.4697 23.3496L34.2593 20.4577C34.4956 20.3795 34.7318 20.4577 34.8894 20.5358C35.0469 20.614 35.2044 20.8485 35.2831 21.083L38.1971 31.791C38.2759 32.1036 38.1971 32.4944 37.8821 32.6508C37.6458 32.8853 37.2521 32.8853 36.937 32.7289L35.7557 32.0255L26.1474 48.6738C25.9899 48.9082 25.7536 49.0646 25.4386 49.0646ZM19.8469 36.9496L25.4386 46.5634L34.7318 30.6186C34.8106 30.4623 35.0469 30.3059 35.2831 30.2278C35.5194 30.1496 35.7557 30.2278 35.9132 30.3059L36.0707 30.3841L33.8655 22.4117L25.8324 24.522L25.9899 24.6784C26.1474 24.7565 26.3049 24.991 26.3837 25.2255C26.4624 25.46 26.3837 25.6944 26.3049 25.8508L19.8469 36.9496Z"
                        fill="white"
                      />
                      <path d="M75.2124 37.8095H62.06C61.745 37.8095 61.5087 37.6532 61.3512 37.4187L55.9958 28.1957C55.7595 27.8049 55.917 27.2578 56.3108 27.0233L66.1554 21.3957C66.3129 21.3175 66.5491 21.2394 66.7854 21.3175C67.0217 21.3957 67.1792 21.552 67.3367 21.7083L75.9999 36.5589C76.1574 36.7934 76.1574 37.106 75.9999 37.4187C75.7637 37.6532 75.4486 37.8095 75.2124 37.8095ZM62.5326 36.0899H73.716L66.2341 23.1934L57.8859 27.9612L62.5326 36.0899Z" fill="white" />
                      <path d="M75.2125 36.9495L68.5969 48.2828H55.1296V50.4713L47.2539 42.5771L55.1296 34.761V36.9495H75.2125Z" fill="white" />
                      <path
                        d="M55.1294 51.3307C54.8932 51.3307 54.6569 51.2526 54.4994 51.0963L46.6237 43.202C46.3087 42.8894 46.3087 42.3422 46.6237 42.0296L54.4994 34.1354C54.7356 33.9009 55.1294 33.8227 55.4444 33.979C55.7595 34.1354 55.9957 34.448 55.9957 34.7606V36.1675H75.1336C75.4486 36.1675 75.6849 36.3239 75.8424 36.5583C75.9999 36.7928 75.9999 37.1055 75.8424 37.4181L69.3056 48.7514C69.1481 48.9859 68.9118 49.1422 68.5968 49.1422H55.9957V50.471C55.9957 50.7836 55.7595 51.0963 55.4444 51.2526C55.3657 51.3307 55.2869 51.3307 55.1294 51.3307ZM48.4351 42.5767L54.2631 48.4388V48.2825C54.2631 48.048 54.3419 47.8135 54.4994 47.6572C54.6569 47.5009 54.8932 47.4227 55.1294 47.4227H68.1242L73.716 37.8089H55.1294C54.6569 37.8089 54.2631 37.4181 54.2631 36.9491V36.7928L48.4351 42.5767Z"
                        fill="white"
                      />
                      <path
                        d="M41.7408 21.8645C41.5833 21.8645 41.4258 21.8645 41.347 21.7863L31.5025 16.1587C31.1087 15.9242 30.9512 15.3771 31.1874 14.9863L39.8506 0.135714C40.0082 -0.17693 40.2444 -0.333252 40.5594 -0.333252C40.8745 -0.333252 41.1107 -0.17693 41.2683 0.0575527L47.8838 11.3909C48.0413 11.6254 48.0413 11.938 47.8838 12.2507L42.5284 21.4736C42.4496 21.63 42.2133 21.7863 41.9771 21.8645C41.8983 21.8645 41.8196 21.8645 41.7408 21.8645ZM33.0776 15.0645L41.4258 19.8323L46.1512 11.7817L40.5594 2.1679L33.0776 15.0645Z"
                        fill="white"
                      />
                      <path d="M40.5596 0.526611H53.7119L60.4062 12.0944L62.3751 11.0002L59.4611 21.7082L48.6715 18.8163L50.5616 17.722L45.1274 8.26454L40.5596 0.526611Z" fill="white" />
                      <path
                        d="M59.4612 22.5679C59.3824 22.5679 59.3036 22.5679 59.2249 22.5679L48.4353 19.6759C48.1202 19.5978 47.884 19.2851 47.8052 18.9725C47.7264 18.6599 47.9627 18.269 48.199 18.1127L49.3803 17.4093L39.8508 0.917323C39.6933 0.68284 39.6933 0.370196 39.8508 0.0575526C40.0083 -0.17693 40.2446 -0.333252 40.5596 -0.333252H53.7119C54.027 -0.333252 54.2632 -0.17693 54.4207 0.0575526L60.7213 10.9219L61.9026 10.2185C62.2176 10.0622 62.5327 10.0622 62.8477 10.2966C63.084 10.5311 63.2415 10.8438 63.1627 11.1564L60.2487 21.8644C60.17 22.0989 60.0125 22.2553 59.8549 22.4116C59.7762 22.4897 59.6187 22.5679 59.4612 22.5679ZM50.8767 18.5817L58.9099 20.692L61.0363 12.7196L60.8788 12.7978C60.6425 12.9541 60.4062 12.9541 60.17 12.8759C59.9337 12.7978 59.7762 12.6415 59.6187 12.4851L53.2394 1.38629H42.056L51.3492 17.3311C51.5855 17.7219 51.428 18.269 51.0342 18.5035L50.8767 18.5817Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1073">
                        <rect width="76" height="68" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Espacio verde'}
                subtitle={'Patio de 500 mt2 rodeado de naturaleza. Quincho con parrilla y ducha.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="64" height="59" viewBox="0 0 64 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1077)">
                      <path d="M51.6304 8.97925C51.6304 36.7846 28.7341 59.3333 0.5 59.3333V8.97925H51.6304Z" fill="#FF972F" />
                      <path
                        d="M42.4298 48.3358C39.9013 48.3358 34.704 45.8457 30.2793 41.6265C26.2057 37.6839 21.2893 30.7672 21.2893 20.392V10.9852C21.2893 9.60188 22.2726 8.2877 23.6773 7.94186C29.7174 6.28184 35.3361 3.99931 40.8144 0.817594C41.7977 0.264253 43.0619 0.264253 44.0452 0.817594C49.3127 3.7918 55.3529 6.351 61.1823 7.94186C62.587 8.2877 63.5703 9.60188 63.5703 10.9852V20.3229C63.5703 30.698 58.7241 37.6148 54.5803 41.5573C50.1555 45.7766 44.9582 48.3358 42.4298 48.3358ZM42.0786 2.89262C36.4599 6.21267 30.6304 8.63354 24.3796 10.2936C24.0987 10.3627 23.888 10.6394 23.888 10.9161V20.2537C23.888 29.7988 28.383 36.0931 32.1054 39.759C36.4599 43.9782 41.0953 45.7766 42.5 45.7766C43.9047 45.7766 48.4699 43.9782 52.8947 39.759C56.6171 36.1623 61.1121 29.7988 61.1121 20.2537V10.9852C61.1121 10.7086 60.9014 10.4319 60.6204 10.3627C54.5803 8.77187 48.3294 6.1435 42.9214 2.96179C42.5702 2.75429 42.2893 2.75429 42.0786 2.89262Z"
                        fill="white"
                      />
                      <path d="M37.8647 31.943C38.2159 32.2889 38.7075 32.4964 39.2694 32.4964C39.761 32.4964 40.2527 32.2889 40.6741 31.943L53.3864 19.4237C54.159 18.6628 54.159 17.487 53.3864 16.7262C52.6139 15.9653 51.4199 15.9653 50.6473 16.7262L39.2694 27.8621L34.353 23.0204C33.5804 22.2596 32.3864 22.2596 31.6139 23.0204C30.8413 23.7812 30.8413 24.9571 31.6139 25.7179L37.8647 31.943Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1077">
                        <rect width="64" height="59" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Seguridad'}
                subtitle={'Lo armamos en base a lo que necesites.'}
                darkText={false}
              />
            </div>
            <div className="d-flex justify-content-center align-items-start flex-wrap servicesSection">
              <Service
                svg={
                  <svg width="55" height="51" viewBox="0 0 55 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1082)">
                      <path d="M46.4174 46.41C46.4174 20.7825 25.8555 0 0.5 0V46.41H46.4174Z" fill="#FF972F" />
                      <path d="M30.0813 44.4341C31.9105 44.4341 33.3611 45.9003 33.3611 47.7491C33.3611 49.5978 31.9105 51.0641 30.0813 51.0641C28.2522 51.0641 26.8015 49.5978 26.8015 47.7491C26.8015 45.9003 28.2522 44.4341 30.0813 44.4341Z" fill="white" />
                      <path d="M53.5447 23.2048C53.0401 23.2048 52.4725 23.0136 52.094 22.5673C46.3544 16.3198 38.5333 12.8773 30.1445 12.8773C21.7557 12.8773 13.9977 16.3198 8.25802 22.5673C7.50114 23.3961 6.23968 23.3961 5.4828 22.6948C4.66284 21.9298 4.66284 20.6548 5.35665 19.8898C11.8532 12.7498 20.6835 8.86108 30.1445 8.86108C39.6055 8.86108 48.4358 12.7498 54.9323 19.8261C55.6892 20.6548 55.6261 21.9298 54.8062 22.6311C54.4908 23.0136 53.9862 23.2048 53.5447 23.2048Z" fill="white" />
                      <path d="M46.2913 31.4928C45.7867 31.4928 45.2822 31.3016 44.9037 30.9191C40.867 26.7753 35.6319 24.4803 30.1445 24.4803C24.7202 24.4803 19.4851 26.7753 15.3854 30.9191C14.6285 31.6841 13.367 31.6841 12.6101 30.9191C11.8533 30.1541 11.8533 28.8791 12.6101 28.1141C17.4037 23.2053 23.648 20.5278 30.1445 20.5278C36.6411 20.5278 42.8854 23.2053 47.6789 28.1141C48.4358 28.8791 48.4358 30.1541 47.6789 30.9191C47.3005 31.3016 46.7959 31.4928 46.2913 31.4928Z" fill="white" />
                      <path
                        d="M21.7558 39.7801C21.2512 39.7801 20.7466 39.5888 20.3682 39.2063C19.6113 38.4413 19.6113 37.1663 20.3682 36.4013C22.9542 33.8513 26.6125 32.1938 30.0184 32.1938H30.1446C33.4875 32.1938 37.2088 33.7876 39.7948 36.4013C40.5517 37.1663 40.5517 38.4413 39.7948 39.2063C39.0379 39.9713 37.7765 39.9713 37.0196 39.2063C35.1904 37.3576 32.4783 36.2101 30.1446 36.2101H30.0184C27.6847 36.2101 25.0356 37.4213 23.1434 39.2063C22.765 39.5888 22.2604 39.7801 21.7558 39.7801Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1082">
                        <rect width="55" height="51" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Tecnología'}
                subtitle={'WiFi de alta velocidad + Back Up'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="76" height="56" viewBox="0 0 76 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.1159 1.10645C22.442 1.10645 0 23.6447 0 51.4373H50.1159V1.10645Z" fill="#FF972F" />
                    <path
                      d="M41.2357 24.0593C41.2357 19.0815 38.3444 14.7259 34.2139 12.6519C35.3842 11.3383 36.1415 9.54074 36.1415 7.60494C36.1415 3.38765 32.7683 0 28.569 0C24.3697 0 20.9965 3.38765 20.9965 7.60494C20.9965 9.54074 21.7538 11.3383 22.9241 12.6519C18.7936 14.7259 15.9023 19.0815 15.9023 24.0593C15.9023 30.7654 21.0654 36.2963 27.6741 36.7802V28.2074L21.9603 22.4691C21.6161 22.1235 21.6161 21.5012 21.9603 21.1556C22.3045 20.8099 22.9241 20.8099 23.2683 21.1556L27.6741 25.5802V7.95062C27.6741 7.39753 28.0871 6.98272 28.6379 6.98272C29.1886 6.98272 29.6016 7.39753 29.6016 7.95062V25.8568L32.4241 23.5062C32.8371 23.1605 33.3879 23.2296 33.7321 23.6444C34.0763 24.0593 34.0074 24.6123 33.5944 24.958L29.6016 28.2765V36.7802C36.0038 36.2963 41.2357 30.8346 41.2357 24.0593Z"
                      fill="white"
                    />
                    <path d="M27.5361 36.7805V45.6299C27.5361 46.183 27.9492 46.5978 28.4999 46.5978C29.0506 46.5978 29.4637 46.183 29.4637 45.6299V36.7805C29.1195 36.7805 28.8441 36.8497 28.4999 36.8497C28.1557 36.8497 27.8803 36.8497 27.5361 36.7805Z" fill="white" />
                    <path
                      d="M68.3585 42.7263H39.239C35.0397 42.7263 31.5977 39.2695 31.5977 35.0523V34.3609C31.5977 30.9041 33.9382 27.8621 37.1737 26.9634C36.4853 25.5806 36.1411 24.0597 36.1411 22.4695C36.1411 17.4918 39.652 13.2053 44.402 12.2374C44.815 7.39793 48.8078 3.59546 53.7643 3.59546C58.652 3.59546 62.7136 7.39793 63.1266 12.2374C67.8766 13.2745 71.3875 17.4918 71.3875 22.4695C71.3875 24.0597 71.0433 25.5806 70.3549 26.9634C73.5904 27.8621 75.931 30.9041 75.931 34.3609V35.0523C75.9998 39.2695 72.5578 42.7263 68.3585 42.7263ZM53.7643 5.53126C49.7027 5.53126 46.3295 8.84978 46.3295 12.9979C46.3295 13.4819 45.9853 14.035 45.5035 14.035C41.3042 14.5881 38.1375 18.1831 38.1375 22.4695C38.1375 24.1288 38.6194 25.7189 39.5143 27.1708C39.7208 27.4473 39.7208 27.8621 39.5832 28.1387C39.4455 28.4844 39.1013 28.6918 38.7571 28.6918C35.7969 28.8992 33.5252 31.3881 33.5252 34.3609V35.0523C33.5252 38.2325 36.0723 40.7905 39.1701 40.7905H68.2897C71.3875 40.7905 73.9346 38.2325 73.9346 35.0523V34.3609C73.9346 31.3881 71.6629 28.8992 68.7027 28.6918C68.3585 28.6918 68.0143 28.4844 67.8766 28.1387C67.739 27.793 67.739 27.4473 67.9455 27.1708C68.8404 25.7881 69.3223 24.1979 69.3223 22.4695C69.3223 18.1831 66.1556 14.5881 61.9564 14.035C61.4745 13.9658 61.0614 13.551 61.0614 13.0671V12.9979C61.1991 8.84978 57.8259 5.53126 53.7643 5.53126Z"
                      fill="white"
                    />
                    <path d="M53.7643 55.9998C53.2136 55.9998 52.8005 55.585 52.8005 55.0319V14.7257C52.8005 14.1726 53.2136 13.7578 53.7643 13.7578C54.315 13.7578 54.7281 14.1726 54.7281 14.7257V55.101C54.6592 55.585 54.2462 55.9998 53.7643 55.9998Z" fill="white" />
                    <path d="M53.7645 37.6795C53.558 37.6795 53.2826 37.6104 53.0761 37.403L46.8805 31.1807C46.5363 30.8351 46.5363 30.2128 46.8805 29.8672C47.2247 29.5215 47.8442 29.5215 48.1884 29.8672L54.3841 36.0894C54.7283 36.4351 54.7283 37.0573 54.3841 37.403C54.2464 37.5412 53.971 37.6795 53.7645 37.6795Z" fill="white" />
                    <path d="M53.7647 32.079C53.5582 32.079 53.2828 32.0098 53.0763 31.8024C52.7321 31.4568 52.7321 30.8345 53.0763 30.4889L58.5835 24.958C58.9277 24.6123 59.5473 24.6123 59.8915 24.958C60.2357 25.3037 60.2357 25.9259 59.8915 26.2716L54.3842 31.8024C54.2466 32.0098 53.9712 32.079 53.7647 32.079Z" fill="white" />
                    <path d="M53.7646 26.548C53.4204 26.548 53.0762 26.3406 52.9386 26.0641C52.5255 25.5801 49.9784 23.0912 47.7067 20.8789C47.3625 20.5332 47.2936 19.911 47.7067 19.5653C48.0509 19.2196 48.6704 19.1505 49.0146 19.5653C54.7284 25.027 54.7284 25.1653 54.7284 25.7184C54.6596 26.1332 54.2465 26.548 53.7646 26.548Z" fill="white" />
                  </svg>
                }
                title={'Eco'}
                subtitle={'Hábitos y tips para cuidar el planeta'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="66" height="62" viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1078)">
                      <path d="M0 62.0002C33.5848 62.0002 60.8203 34.8335 60.8203 1.3335H0V62.0002Z" fill="#FF972F" />
                      <path d="M30.3264 52.0834C18.2125 52.0834 8.35425 42.2501 8.35425 30.0834C8.35425 18.0001 18.2125 8.16675 30.3264 8.16675C42.4403 8.16675 52.2985 18.0001 52.2985 30.0834C52.215 42.2501 42.3568 52.0834 30.3264 52.0834ZM30.3264 10.5834C19.5492 10.5834 10.8606 19.3334 10.8606 30.0834C10.8606 40.8334 19.6327 49.5834 30.3264 49.5834C41.1036 49.5834 49.7922 40.8334 49.7922 30.0834C49.7922 19.3334 41.0201 10.5834 30.3264 10.5834Z" fill="white" />
                      <path d="M38.848 24.4166C38.848 29.1666 35.005 32.9999 30.3265 32.9999C25.5645 32.9999 21.7214 29.1666 21.7214 24.4166C21.7214 19.6666 25.5645 15.8333 30.243 15.8333C35.005 15.8333 38.848 19.6666 38.848 24.4166Z" fill="white" />
                      <path d="M42.6076 46.4166C40.9367 41.1666 36.0911 37.3333 30.243 37.3333C24.4785 37.3333 19.5494 41.1666 17.8785 46.4166C17.5443 47.5833 24.8962 49.9999 24.8962 49.9999L34.3367 50.2499" fill="white" />
                      <path
                        d="M38.7644 3.08333L39.1821 3C40.0176 2.83333 40.6859 2.16667 40.9365 1.25L41.0201 0.833333C41.1036 0.333333 41.5214 0 42.0226 0C42.5239 0 42.9416 0.333333 43.0252 0.833333L43.1087 1.25C43.2758 2.08333 43.9441 2.83333 44.8631 3L45.2809 3.08333C45.7821 3.16667 46.1163 3.58333 46.1163 4.08333C46.1163 4.58333 45.7821 5 45.2809 5.08333L44.8631 5.16667C44.0277 5.33333 43.2758 6 43.1087 6.91667L43.0252 7.33333C42.9416 7.83333 42.5239 8.16667 42.0226 8.16667C41.5214 8.16667 41.1036 7.83333 41.0201 7.33333L40.9365 6.91667C40.7695 6.08333 40.1011 5.33333 39.1821 5.16667L38.7644 5.08333C38.2631 5 37.929 4.58333 37.929 4.08333C37.929 3.58333 38.2631 3.16667 38.7644 3.08333Z"
                        fill="white"
                      />
                      <path d="M44.1951 22.8333C43.9444 22.8333 43.7773 22.6666 43.7773 22.4166V21.2499C43.7773 20.9999 43.9444 20.8333 44.1951 20.8333C44.4457 20.8333 44.6128 20.9999 44.6128 21.2499V22.4166C44.6128 22.6666 44.3622 22.8333 44.1951 22.8333Z" fill="white" />
                      <path d="M44.1951 25.9998C43.9444 25.9998 43.7773 25.8331 43.7773 25.5831V24.4164C43.7773 24.1664 43.9444 23.9998 44.1951 23.9998C44.4457 23.9998 44.6128 24.1664 44.6128 24.4164V25.5831C44.6128 25.7498 44.3622 25.9998 44.1951 25.9998Z" fill="white" />
                      <path d="M43.1923 23.8336H42.0227C41.7721 23.8336 41.605 23.6669 41.605 23.4169C41.605 23.1669 41.7721 23.0002 42.0227 23.0002H43.1923C43.443 23.0002 43.61 23.1669 43.61 23.4169C43.61 23.6669 43.443 23.8336 43.1923 23.8336Z" fill="white" />
                      <path d="M46.2836 23.8336H45.114C44.8634 23.8336 44.6963 23.6669 44.6963 23.4169C44.6963 23.1669 44.8634 23.0002 45.114 23.0002H46.2836C46.5343 23.0002 46.7014 23.1669 46.7014 23.4169C46.7014 23.6669 46.5343 23.8336 46.2836 23.8336Z" fill="white" />
                      <path
                        d="M50.043 9.58341L52.048 9.16675C53.886 8.83341 55.2227 7.41675 55.6404 5.58341L56.0581 3.58341C56.2252 2.91675 56.7265 2.41675 57.4784 2.41675C58.1468 2.41675 58.7316 2.83341 58.8987 3.58341L59.3164 5.58341C59.6506 7.41675 61.0708 8.83341 62.9088 9.16675L64.9138 9.58341C65.5822 9.75008 66.0835 10.2501 66.0835 11.0001C66.0835 11.6667 65.6657 12.2501 64.9138 12.4167L62.9088 12.8334C61.0708 13.1667 59.7341 14.5834 59.3164 16.4167L58.8151 18.3334C58.648 19.0001 58.1468 19.5001 57.3949 19.5001C56.7265 19.5001 56.1417 19.0834 55.9746 18.3334L55.5569 16.3334C55.2227 14.5001 53.8025 13.0834 51.9645 12.7501L49.9594 12.3334C49.2911 12.1667 48.7898 11.6667 48.7898 10.9167C48.9569 10.2501 49.3746 9.75008 50.043 9.58341Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1078">
                        <rect width="66" height="62" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Asesoramiento personalizado'}
                subtitle={'Nos adaptamos a las necesidades de cada jornada.'}
                darkText={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="servicesContainerMiddle">
        <div className="customContainer">
          <p className="servicesTitleMiddle extraBoldFont">SERVICIOS</p>
          <div className="servicesDropdownMenuMiddle" onClick={() => setShowServicesSalas((prevState) => !prevState)}>
            <button className="servicesDropdownMenuButtonMiddle">Salas</button>
            <p>
              {!showServicesSalas ? (
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.31501 0.692295C8.39146 0.581261 8.49375 0.490475 8.61308 0.427757C8.73241 0.365039 8.8652 0.332269 9.00001 0.332269C9.13482 0.332269 9.2676 0.365039 9.38693 0.427757C9.50626 0.490475 9.60856 0.581261 9.68501 0.692295L17.185 11.5256C17.2718 11.6506 17.3227 11.7969 17.3322 11.9488C17.3417 12.1006 17.3094 12.2522 17.2387 12.387C17.1681 12.5217 17.0619 12.6346 16.9317 12.7132C16.8015 12.7919 16.6522 12.8334 16.5 12.8331H1.50001C1.34821 12.8325 1.19946 12.7905 1.06974 12.7117C0.940028 12.6328 0.834261 12.5201 0.763816 12.3856C0.693371 12.2512 0.660913 12.1 0.669933 11.9485C0.678953 11.797 0.729109 11.6508 0.815008 11.5256L8.31501 0.692295Z"
                    fill="#fff"
                  />
                </svg>
              ) : (
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.31452 12.3077C8.39097 12.4187 8.49327 12.5095 8.6126 12.5722C8.73193 12.635 8.86471 12.6677 8.99952 12.6677C9.13433 12.6677 9.26711 12.635 9.38645 12.5722C9.50577 12.5095 9.60807 12.4187 9.68452 12.3077L17.1845 1.47437C17.2713 1.34942 17.3222 1.20306 17.3317 1.05121C17.3412 0.899354 17.3089 0.747806 17.2383 0.613032C17.1677 0.478257 17.0615 0.36541 16.9312 0.286752C16.801 0.208093 16.6517 0.166631 16.4995 0.166871H1.49952C1.34772 0.167498 1.19897 0.209493 1.06925 0.28834C0.939539 0.367187 0.833772 0.479903 0.763327 0.614365C0.692882 0.748828 0.660424 0.89995 0.669444 1.05148C0.678464 1.20301 0.728621 1.34921 0.81452 1.47437L8.31452 12.3077Z"
                    fill="#fff"
                  />
                </svg>
              )}
            </p>
          </div>
          {showServicesSalas && (
            <div className="servicesSection">
              <Service
                svg={
                  <svg width="58" height="49" viewBox="0 0 58 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1080)">
                      <path d="M46.3491 48.9993C46.3491 23.2166 25.5939 2.37231 0 2.37231V49.0634H46.3491V48.9993Z" fill="#FF972F" />
                      <path d="M50.2963 27.5784C53.0976 27.5784 55.3896 25.2053 55.3896 22.3192C55.3896 19.4331 53.0976 17.0601 50.2963 17.0601C47.4949 17.0601 45.203 19.369 45.203 22.3192C45.1393 25.2053 47.4313 27.5784 50.2963 27.5784Z" fill="white" />
                      <path d="M57.9999 38.097C57.9999 33.7357 54.4983 30.2083 50.2326 30.2083C49.8506 30.2083 49.4049 30.2724 49.0229 30.3365V38.097H57.9999Z" fill="white" />
                      <path d="M34.316 17.7009C37.1173 17.7009 39.4093 15.392 39.4093 12.4418C39.4093 9.55565 37.1173 7.18262 34.316 7.18262C31.5146 7.18262 29.2227 9.55565 29.2227 12.4418C29.2227 15.3279 31.5146 17.7009 34.316 17.7009Z" fill="white" />
                      <path d="M34.125 22.9599V26.8722L35.1437 27.0005L41.7649 27.706H41.9559C41.7013 23.6013 38.327 20.3303 34.2523 20.3303C32.979 20.3303 31.7693 20.651 30.687 21.2282L32.597 21.4206C33.4883 21.4848 34.125 22.1261 34.125 22.9599Z" fill="white" />
                      <path d="M18.3993 10.4539C21.2006 10.4539 23.4926 8.14497 23.4926 5.19471C23.4926 2.30858 21.2006 -0.0644531 18.3993 -0.0644531C15.598 -0.0644531 13.306 2.30858 13.306 5.19471C13.2423 8.14497 15.5343 10.4539 18.3993 10.4539Z" fill="white" />
                      <path d="M18.5907 14.4946C19.3547 14.4946 19.9277 15.1359 19.9277 15.8414V20.0744L20.9463 20.2027L26.1033 20.7799C25.976 16.5469 22.538 13.1477 18.3997 13.1477C17.0627 13.1477 15.7894 13.4684 14.707 14.1097L15.089 14.1739L18.5907 14.4946Z" fill="white" />
                      <path
                        d="M47.4949 43.2911H47.4313L30.5597 41.4311C29.2227 41.4311 28.1404 40.2767 28.1404 38.9298V34.8893L17.0624 33.6707C15.7891 33.6707 14.7705 32.5804 14.7705 31.2976V27.0647L4.07451 25.9102C2.86485 25.9102 1.84619 24.884 1.84619 23.6013V14.3016C1.84619 13.0189 2.86485 11.9927 4.07451 11.9927C4.13818 11.9927 4.13818 11.9927 4.20184 11.9927L18.6541 13.5319C19.8638 13.5319 20.8824 14.5581 20.8824 15.8408V19.2401L32.788 20.5228C34.0613 20.5228 35.08 21.6131 35.08 22.8958V26.0385L41.956 26.744L47.6223 27.3212C48.9593 27.3212 50.0416 28.4757 50.0416 29.8225V40.6615C49.9779 42.1366 48.8956 43.2911 47.4949 43.2911ZM4.07451 13.8526C3.81985 13.8526 3.69251 14.045 3.69251 14.3016V23.5372C3.69251 23.7937 3.88351 23.9861 4.13818 23.9861C4.20184 23.9861 4.20184 23.9861 4.26551 23.9861L15.7891 25.2047C16.2348 25.2688 16.6168 25.6537 16.6168 26.1026V31.1694C16.6168 31.4901 16.8714 31.7466 17.1898 31.7466C17.2534 31.7466 17.2534 31.7466 17.3171 31.7466L29.2864 33.0293C29.732 33.0935 30.114 33.4783 30.114 33.9272V38.8016C30.114 39.1864 30.4324 39.5071 30.7507 39.5071C30.7507 39.5071 30.8144 39.5071 30.878 39.5071L47.7496 41.3029C48.0679 41.3029 48.3863 40.9822 48.3863 40.5974V29.9508C48.3863 29.566 48.0679 29.2453 47.7496 29.2453H47.6859L34.316 27.8343C33.8703 27.7702 33.4883 27.3853 33.4883 26.9364V23.0241C33.4883 22.7034 33.2337 22.4469 32.979 22.4469C32.9153 22.4469 32.9153 22.4469 32.8517 22.4469L20.1184 21.1C19.6728 21.0359 19.2908 20.651 19.2908 20.2021V15.9691C19.2908 15.7126 19.0998 15.5202 18.8451 15.5202C18.7814 15.5202 18.7814 15.5202 18.7178 15.5202L4.07451 13.8526Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1080">
                        <rect width="58" height="49" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Salas de reunión y videocall'}
                subtitle={'Espacios equipados para reunirse y realizar videollamadas.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="54" height="49" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1081)">
                      <path d="M-0.5 44.9836C24.4831 44.9836 44.7429 24.8398 44.7429 0H-0.5V44.9836Z" fill="#FF972F" />
                      <path d="M11.1216 40.2875C11.1216 41.894 9.81651 43.1916 8.20069 43.1916C6.58487 43.1916 5.27979 41.894 5.27979 40.2875C5.27979 38.6809 6.58487 37.3833 8.20069 37.3833C9.81651 37.3833 11.1216 38.6809 11.1216 40.2875Z" fill="white" />
                      <path d="M8.26277 44.613C5.83904 44.613 3.91249 46.5285 3.85034 48.9384H12.6131C12.6131 46.5903 10.6865 44.613 8.26277 44.613Z" fill="white" />
                      <path d="M21.5623 40.2875C21.5623 41.894 20.2572 43.1916 18.6414 43.1916C17.0255 43.1916 15.7205 41.894 15.7205 40.2875C15.7205 38.6809 17.0255 37.3833 18.6414 37.3833C20.2572 37.3833 21.5623 38.6809 21.5623 40.2875Z" fill="white" />
                      <path d="M18.6412 44.613C16.2175 44.613 14.2909 46.5285 14.2288 48.9384H22.9915C22.9915 46.5903 21.0649 44.613 18.6412 44.613Z" fill="white" />
                      <path d="M31.9407 40.2875C31.9407 41.894 30.6356 43.1916 29.0198 43.1916C27.404 43.1916 26.0989 41.894 26.0989 40.2875C26.0989 38.6809 27.404 37.3833 29.0198 37.3833C30.6356 37.3833 31.9407 38.6809 31.9407 40.2875Z" fill="white" />
                      <path d="M29.0196 44.613C26.5959 44.613 24.6693 46.5285 24.6072 48.9384H33.3699C33.432 46.5903 31.4433 44.613 29.0196 44.613Z" fill="white" />
                      <path d="M42.3191 40.2875C42.3191 41.894 41.014 43.1916 39.3982 43.1916C37.7824 43.1916 36.4773 41.894 36.4773 40.2875C36.4773 38.6809 37.7824 37.3833 39.3982 37.3833C41.014 37.3833 42.3191 38.6809 42.3191 40.2875Z" fill="white" />
                      <path d="M39.4603 44.613C37.0366 44.613 35.11 46.5285 35.0479 48.9384H43.8106C43.8106 46.5903 41.884 44.613 39.4603 44.613Z" fill="white" />
                      <path d="M52.76 40.2875C52.76 41.894 51.4549 43.1916 49.8391 43.1916C48.2233 43.1916 46.9182 41.894 46.9182 40.2875C46.9182 38.6809 48.2233 37.3833 49.8391 37.3833C51.4549 37.3833 52.76 38.6809 52.76 40.2875Z" fill="white" />
                      <path d="M49.8389 44.613C47.4152 44.613 45.4887 46.5285 45.4265 48.9384H54.1892C54.2514 46.5903 52.2627 44.613 49.8389 44.613Z" fill="white" />
                      <path d="M15.9067 37.6307C15.9067 38.8665 14.8502 39.917 13.6073 39.917C12.3644 39.917 11.3079 38.8665 11.3079 37.6307C11.3079 36.3949 12.3644 35.3445 13.6073 35.3445C14.8502 35.3445 15.9067 36.3331 15.9067 37.6307Z" fill="white" />
                      <path d="M13.6074 41.0908C11.6809 41.0908 10.1272 42.6356 10.1272 44.5511H17.0876C17.0876 42.6356 15.534 41.0908 13.6074 41.0908Z" fill="white" />
                      <path d="M26.2854 37.6307C26.2854 38.8665 25.2289 39.917 23.986 39.917C22.743 39.917 21.6865 38.8665 21.6865 37.6307C21.6865 36.3949 22.743 35.3445 23.986 35.3445C25.2289 35.3445 26.2854 36.3331 26.2854 37.6307Z" fill="white" />
                      <path d="M23.9861 41.0908C22.0595 41.0908 20.5059 42.6356 20.5059 44.5511H27.4663C27.4663 42.6356 25.9126 41.0908 23.9861 41.0908Z" fill="white" />
                      <path d="M36.6018 37.6307C36.6018 38.8665 35.5453 39.917 34.3024 39.917C33.0594 39.917 32.0029 38.8665 32.0029 37.6307C32.0029 36.3949 33.0594 35.3445 34.3024 35.3445C35.5453 35.3445 36.6018 36.3331 36.6018 37.6307Z" fill="white" />
                      <path d="M34.3022 41.0908C32.3757 41.0908 30.822 42.6356 30.822 44.5511H37.7825C37.7825 42.6356 36.2288 41.0908 34.3022 41.0908Z" fill="white" />
                      <path d="M46.9802 37.6307C46.9802 38.8665 45.9237 39.917 44.6808 39.917C43.4378 39.917 42.3813 38.8665 42.3813 37.6307C42.3813 36.3949 43.4378 35.3445 44.6808 35.3445C45.9237 35.3445 46.9802 36.3331 46.9802 37.6307Z" fill="white" />
                      <path d="M44.6809 41.0908C42.7544 41.0908 41.2007 42.6356 41.2007 44.5511H48.1611C48.1611 42.6356 46.6075 41.0908 44.6809 41.0908Z" fill="white" />
                      <path d="M16.0931 7.66202C16.0931 9.33037 14.7258 10.6898 13.0479 10.6898C11.3699 10.6898 10.0027 9.33037 10.0027 7.66202C10.0027 5.99367 11.3699 4.63428 13.0479 4.63428C14.6637 4.63428 16.0931 5.99367 16.0931 7.66202Z" fill="white" />
                      <path d="M12.9857 12.2961C10.4377 12.2961 8.38685 14.3352 8.32471 16.8687H17.5846C17.6467 14.3352 15.5337 12.2961 12.9857 12.2961Z" fill="white" />
                      <path
                        d="M20.3816 30.4629H5.65278C4.96917 30.4629 4.40985 29.9068 4.40985 29.2271V22.7391H4.22341C3.53979 22.7391 2.98047 22.183 2.98047 21.5033V19.217C2.98047 18.5373 3.53979 17.9812 4.22341 17.9812H21.811C22.4946 17.9812 23.0539 18.5373 23.0539 19.217V21.5033C23.0539 22.183 22.4946 22.7391 21.811 22.7391H21.6245V29.2889C21.6245 29.9686 21.0652 30.4629 20.3816 30.4629ZM6.21211 28.7328H19.8223V21.874C19.8223 21.3797 20.1952 21.0089 20.6923 21.0089H21.2517V19.7731H4.78273V21.0089H5.34205C5.83923 21.0089 6.21211 21.3797 6.21211 21.874V28.7328Z"
                        fill="white"
                      />
                      <path d="M53.1949 26.5081H28.1497C27.4661 26.5081 26.9067 25.952 26.9067 25.2723V6.11716C26.9067 5.43746 27.4661 4.88135 28.1497 4.88135H41.6356C48.7203 4.88135 54.5 10.6279 54.5 17.672V25.2723C54.5 25.952 53.8785 26.5081 53.1949 26.5081ZM28.6469 24.7162H52.6977V17.6102C52.6977 11.5547 47.726 6.5497 41.6356 6.5497H28.6469V24.7162Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1081">
                        <rect width="54" height="49" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'SUM'}
                subtitle={'Salón de usos múltiples adaptable para cursos, workshops, eventos, desde 10 a 150 personas.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="55" height="51" viewBox="0 0 55 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1082)">
                      <path d="M46.4174 46.41C46.4174 20.7825 25.8555 0 0.5 0V46.41H46.4174Z" fill="#FF972F" />
                      <path d="M30.0813 44.4341C31.9105 44.4341 33.3611 45.9003 33.3611 47.7491C33.3611 49.5978 31.9105 51.0641 30.0813 51.0641C28.2522 51.0641 26.8015 49.5978 26.8015 47.7491C26.8015 45.9003 28.2522 44.4341 30.0813 44.4341Z" fill="white" />
                      <path d="M53.5447 23.2048C53.0401 23.2048 52.4725 23.0136 52.094 22.5673C46.3544 16.3198 38.5333 12.8773 30.1445 12.8773C21.7557 12.8773 13.9977 16.3198 8.25802 22.5673C7.50114 23.3961 6.23968 23.3961 5.4828 22.6948C4.66284 21.9298 4.66284 20.6548 5.35665 19.8898C11.8532 12.7498 20.6835 8.86108 30.1445 8.86108C39.6055 8.86108 48.4358 12.7498 54.9323 19.8261C55.6892 20.6548 55.6261 21.9298 54.8062 22.6311C54.4908 23.0136 53.9862 23.2048 53.5447 23.2048Z" fill="white" />
                      <path d="M46.2913 31.4928C45.7867 31.4928 45.2822 31.3016 44.9037 30.9191C40.867 26.7753 35.6319 24.4803 30.1445 24.4803C24.7202 24.4803 19.4851 26.7753 15.3854 30.9191C14.6285 31.6841 13.367 31.6841 12.6101 30.9191C11.8533 30.1541 11.8533 28.8791 12.6101 28.1141C17.4037 23.2053 23.648 20.5278 30.1445 20.5278C36.6411 20.5278 42.8854 23.2053 47.6789 28.1141C48.4358 28.8791 48.4358 30.1541 47.6789 30.9191C47.3005 31.3016 46.7959 31.4928 46.2913 31.4928Z" fill="white" />
                      <path
                        d="M21.7558 39.7801C21.2512 39.7801 20.7466 39.5888 20.3682 39.2063C19.6113 38.4413 19.6113 37.1663 20.3682 36.4013C22.9542 33.8513 26.6125 32.1938 30.0184 32.1938H30.1446C33.4875 32.1938 37.2088 33.7876 39.7948 36.4013C40.5517 37.1663 40.5517 38.4413 39.7948 39.2063C39.0379 39.9713 37.7765 39.9713 37.0196 39.2063C35.1904 37.3576 32.4783 36.2101 30.1446 36.2101H30.0184C27.6847 36.2101 25.0356 37.4213 23.1434 39.2063C22.765 39.5888 22.2604 39.7801 21.7558 39.7801Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1082">
                        <rect width="55" height="51" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Tecnología'}
                subtitle={'WiFi de alta velocidad + Back Up'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="74" height="78" viewBox="0 0 74 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1075)">
                      <path d="M0 24.0703C0 53.8911 24.124 78.0742 53.872 78.0742V24.0703H0Z" fill="#FF972F" />
                      <path d="M50.394 25.2569C50.32 25.2569 50.172 25.2569 50.098 25.1827L33.078 17.9871C32.708 17.8388 32.486 17.3195 32.634 16.9486C32.782 16.5777 33.3 16.3551 33.67 16.5035L50.69 23.6991C51.06 23.8474 51.282 24.3667 51.134 24.7376C50.986 25.1085 50.69 25.2569 50.394 25.2569Z" fill="white" />
                      <path d="M33.3741 37.8678C32.9301 37.8678 32.5601 37.4969 32.5601 37.0518V25.9246C32.5601 25.4795 32.9301 25.1086 33.3741 25.1086C33.8181 25.1086 34.1881 25.4795 34.1881 25.9246V37.0518C34.1881 37.4969 33.8181 37.8678 33.3741 37.8678Z" fill="white" />
                      <path d="M50.3941 38.7582C49.9501 38.7582 49.5801 38.3873 49.5801 37.9422V24.4413C49.5801 24.1445 49.8021 23.8478 50.0981 23.6994L67.1181 16.5039C67.4881 16.3555 68.0061 16.5039 68.1541 16.949C68.3021 17.3199 68.1541 17.8391 67.7101 17.9875L51.2081 24.9605V37.9422C51.2081 38.3873 50.8381 38.7582 50.3941 38.7582Z" fill="white" />
                      <path d="M67.414 18.0618C67.34 18.0618 67.192 18.0618 67.118 17.9876L50.098 10.7921C49.728 10.6437 49.506 10.1244 49.654 9.75352C49.802 9.38262 50.32 9.16007 50.69 9.30843L67.71 16.504C68.08 16.6524 68.302 17.1716 68.154 17.5425C68.006 17.8393 67.71 18.0618 67.414 18.0618Z" fill="white" />
                      <path d="M33.3739 18.0614C33.0779 18.0614 32.7819 17.9131 32.6339 17.5422C32.4859 17.1713 32.6339 16.652 33.0779 16.5036L50.0979 9.30808C50.5419 9.15971 50.9859 9.30808 51.1339 9.75316C51.2819 10.1241 51.1339 10.6433 50.6899 10.7917L33.6699 17.9873C33.5959 18.0614 33.5219 18.0614 33.3739 18.0614Z" fill="white" />
                      <path d="M45.7322 31.1172L28.7122 23.9217L33.3742 17.2454L50.3942 24.4409L45.7322 31.1172Z" fill="white" />
                      <path
                        d="M45.7319 31.9337C45.6579 31.9337 45.5099 31.9337 45.4359 31.8595L28.4159 24.6639C28.1939 24.5897 28.0459 24.3672 27.9719 24.1447C27.8979 23.9221 27.9719 23.6996 28.1199 23.477L32.7819 16.8007C33.0039 16.504 33.3739 16.3556 33.7439 16.504L50.7639 23.6996C50.9859 23.7738 51.1339 23.9963 51.2079 24.2188C51.2819 24.4414 51.2079 24.6639 51.0599 24.8865L46.3979 31.5628C46.2499 31.7853 45.9539 31.9337 45.7319 31.9337ZM29.9699 23.5512L45.4359 30.0792L49.1359 24.7381L33.6699 18.2102L29.9699 23.5512Z"
                        fill="white"
                      />
                      <path d="M50.394 24.4409L55.056 31.1172L72.076 23.9217L67.414 17.2454" fill="white" />
                      <path
                        d="M55.0559 31.9333C54.8339 31.9333 54.5379 31.785 54.3899 31.5624L49.7279 24.8861C49.5059 24.5152 49.5799 23.996 49.9499 23.7734C50.3199 23.5509 50.8379 23.6251 51.0599 23.996L55.3519 30.153L70.8179 23.6251L66.7479 17.7648C66.5259 17.3938 66.5999 16.8746 66.9699 16.652C67.3399 16.4295 67.8579 16.5037 68.0799 16.8746L72.7419 23.5509C72.8899 23.7734 72.8899 23.996 72.8899 24.2185C72.8159 24.4411 72.6679 24.6636 72.4459 24.7378L55.4259 31.9333C55.2779 31.9333 55.2039 31.9333 55.0559 31.9333Z"
                        fill="white"
                      />
                      <path d="M14.948 51.072L20.128 45.8052L33.078 58.861L27.898 64.1279L14.948 51.072Z" fill="white" />
                      <path d="M27.8979 64.7218C27.7499 64.7218 27.6019 64.6476 27.4539 64.5734L14.5039 51.4434C14.2819 51.2208 14.2819 50.8499 14.5039 50.6274L19.6839 45.3605C19.9059 45.138 20.2759 45.138 20.4979 45.3605L33.4479 58.4164C33.6699 58.6389 33.6699 59.0098 33.4479 59.2324L28.2679 64.4992C28.1939 64.6476 28.0459 64.7218 27.8979 64.7218ZM15.7619 51.0725L27.8979 63.3123L32.2639 58.9357L20.1279 46.6216L15.7619 51.0725Z" fill="white" />
                      <path
                        d="M31.746 58.3419C31.524 58.3419 31.302 58.2677 31.154 58.1193L20.794 47.6598C20.498 47.363 20.498 46.8438 20.794 46.5471L30.71 36.5326C30.858 36.3842 31.08 36.3101 31.302 36.3101H48.47C50.246 36.3101 51.726 37.7937 51.726 39.574V40.8351C51.726 41.4286 51.578 42.022 51.282 42.5413H57.276C57.72 42.5413 58.164 42.3929 58.46 42.022L67.044 33.3428C68.228 32.1559 70.448 32.1559 71.632 33.3428L73.038 34.8264C73.63 35.4199 74 36.2359 74 37.126C74 38.0162 73.63 38.8322 73.038 39.4257L59.57 52.9266C58.978 53.5201 58.164 53.891 57.276 53.891H35.446L32.412 57.9709C32.264 58.1935 32.042 58.3419 31.746 58.3419C31.82 58.3419 31.82 58.3419 31.746 58.3419ZM22.57 47.0663L31.672 56.2648L34.41 52.5557C34.558 52.3332 34.78 52.259 35.076 52.259H57.35C57.794 52.259 58.238 52.1106 58.534 51.7397L72.002 38.1646C72.298 37.8679 72.52 37.4228 72.52 36.9777C72.52 36.5326 72.372 36.0875 72.002 35.7908L70.522 34.3072C69.93 33.7137 68.82 33.7137 68.228 34.3072L59.57 43.0605C58.978 43.654 58.164 44.0249 57.276 44.0249H48.544C48.1 44.0249 47.73 43.654 47.73 43.2089C47.73 42.7638 48.1 42.3929 48.544 42.3929C49.432 42.3929 50.172 41.6511 50.172 40.6867V39.4257C50.172 38.5355 49.432 37.7195 48.544 37.7195H31.746L22.57 47.0663Z"
                        fill="white"
                      />
                      <path d="M48.5441 44.0253H40.4041C39.9601 44.0253 39.5901 43.6544 39.5901 43.2093C39.5901 42.7642 39.9601 42.3933 40.4041 42.3933H48.5441C48.9881 42.3933 49.3581 42.7642 49.3581 43.2093C49.2841 43.6544 48.9881 44.0253 48.5441 44.0253Z" fill="white" />
                      <path d="M51.6521 14.1303C51.5041 13.982 51.2081 13.982 50.9861 14.1303L50.0981 15.0205C49.9501 15.1688 49.9501 15.4656 50.0981 15.6881C50.2461 15.8365 50.5421 15.8365 50.7641 15.6881L51.6521 14.7979C51.8001 14.5754 51.8001 14.2787 51.6521 14.1303Z" fill="white" />
                      <path d="M49.2099 16.578C49.0619 16.4296 48.7659 16.3554 48.5439 16.578L47.6559 17.4681C47.5079 17.6165 47.5079 17.9874 47.6559 18.1358C47.8039 18.2841 48.0999 18.2841 48.3219 18.1358L49.2099 17.2456C49.4319 17.023 49.4319 16.7263 49.2099 16.578Z" fill="white" />
                      <path d="M51.6521 17.4681L50.7641 16.578C50.6161 16.4296 50.3201 16.3554 50.0981 16.578C49.9501 16.7263 49.9501 17.023 50.0981 17.2456L50.9861 18.1358C51.1341 18.2841 51.4301 18.2841 51.6521 18.1358C51.8001 17.9132 51.8001 17.6165 51.6521 17.4681Z" fill="white" />
                      <path d="M49.2099 15.0205L48.3219 14.1303C48.1739 13.982 47.8779 13.982 47.6559 14.1303C47.5079 14.2787 47.5079 14.5754 47.6559 14.7979L48.5439 15.6881C48.6919 15.8365 48.9879 15.8365 49.2099 15.6881C49.4319 15.5398 49.4319 15.243 49.2099 15.0205Z" fill="white" />
                      <path d="M45.7319 5.15424C45.5839 5.00588 45.4359 5.00588 45.3619 5.15424L44.8439 5.67351C44.6959 5.82187 44.6959 5.97023 44.8439 6.1186C44.9179 6.26696 45.1399 6.26696 45.2139 6.1186L45.7319 5.59933C45.8799 5.45096 45.8799 5.3026 45.7319 5.15424Z" fill="white" />
                      <path d="M44.2519 6.63788C44.1039 6.48952 43.9559 6.48952 43.8819 6.63788L43.3639 7.15715C43.2159 7.30551 43.2159 7.45388 43.3639 7.60224C43.5119 7.7506 43.6599 7.7506 43.7339 7.60224L44.2519 7.08297C44.3999 6.93461 44.3999 6.78625 44.2519 6.63788Z" fill="white" />
                      <path d="M45.7319 7.23137L45.2139 6.7121C45.0659 6.56374 44.9179 6.56374 44.8439 6.7121C44.6959 6.86046 44.6959 7.00883 44.8439 7.15719L45.3619 7.67646C45.5099 7.82482 45.6579 7.82482 45.7319 7.67646C45.8799 7.52809 45.8799 7.30555 45.7319 7.23137Z" fill="white" />
                      <path d="M44.2519 5.74773L43.7339 5.22846C43.5859 5.0801 43.4379 5.0801 43.3639 5.22846C43.2159 5.37682 43.2159 5.52518 43.3639 5.67355L43.8819 6.19281C44.0299 6.34118 44.1779 6.34118 44.2519 6.19281C44.3999 6.04445 44.3999 5.82191 44.2519 5.74773Z" fill="white" />
                      <path d="M57.498 3.07706C57.72 3.29961 58.09 3.29961 58.312 3.07706L59.422 1.96434C59.644 1.7418 59.644 1.3709 59.422 1.14835C59.2 0.925809 58.83 0.925809 58.608 1.14835L57.498 2.26107C57.276 2.48361 57.276 2.85452 57.498 3.07706Z" fill="white" />
                      <path d="M54.5381 6.04435C54.7601 6.26689 55.1301 6.26689 55.3521 6.04435L56.4621 4.93163C56.6841 4.70909 56.6841 4.33818 56.4621 4.11564C56.2401 3.89309 55.8701 3.89309 55.6481 4.11564L54.5381 5.22835C54.3161 5.4509 54.3161 5.8218 54.5381 6.04435Z" fill="white" />
                      <path d="M57.498 4.93163L58.608 6.04435C58.83 6.26689 59.2 6.26689 59.422 6.04435C59.644 5.8218 59.644 5.4509 59.422 5.22835L58.312 4.11564C58.09 3.89309 57.72 3.89309 57.498 4.11564C57.276 4.33818 57.276 4.70909 57.498 4.93163Z" fill="white" />
                      <path d="M54.5381 1.96434L55.6481 3.07706C55.8701 3.29961 56.2401 3.29961 56.4621 3.07706C56.6841 2.85452 56.6841 2.48361 56.4621 2.26107L55.3521 1.14835C55.1301 0.925809 54.7601 0.925809 54.5381 1.14835C54.3161 1.3709 54.3161 1.7418 54.5381 1.96434Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1075">
                        <rect width="74" height="78" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Market Vida'}
                subtitle={'Tenemos todo lo que necesitas para acompañarte en tu día como en casa. Sector autogestionable, elegís el producto y dejas el pago en su frasco.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="66" height="55" viewBox="0 0 66 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1024)">
                      <path d="M0 6.63794C0 33.3793 21.7666 55 48.6885 55V6.63794H0Z" fill="#FF972F" />
                      <path
                        d="M54.0346 41.4717C49.5158 41.4717 45.8244 37.8683 45.7607 33.3798V33.3165V25.8568C45.7607 25.4775 46.079 25.0981 46.5245 25.0981H61.4811C63.9633 25.0981 65.9999 27.1211 65.9999 29.5866C65.9999 31.7993 64.3451 33.6326 62.2448 34.0119C61.863 38.1211 58.4261 41.3453 54.2892 41.4085C54.1619 41.4717 54.0983 41.4717 54.0346 41.4717ZM47.2882 33.3165C47.2882 36.9832 50.2159 39.9545 53.8437 40.0177C53.9073 40.0177 53.971 40.0177 54.0346 40.0177C57.726 40.0177 60.7174 37.0464 60.781 33.3798C60.781 33.0004 61.0992 32.6211 61.5447 32.6211C63.1995 32.6211 64.5361 31.2935 64.5361 29.6499C64.5361 28.0062 63.1995 26.6786 61.5447 26.6786H47.2882V33.3165Z"
                        fill="white"
                      />
                      <path d="M50.916 19.408V23.6436C53.2709 23.6436 55.1802 21.7471 55.1802 19.408V15.1724C52.8254 15.1724 50.916 17.0689 50.916 19.408Z" fill="white" />
                      <path d="M50.916 10.937V15.1727C53.2709 15.1727 55.1802 13.2761 55.1802 10.937V6.70142C52.8254 6.70142 50.916 8.59797 50.916 10.937Z" fill="white" />
                      <path d="M56.5803 15.1724V19.408C58.9352 19.408 60.8445 17.5115 60.8445 15.1724V10.9368C58.4897 10.9368 56.5803 12.8333 56.5803 15.1724Z" fill="white" />
                      <path
                        d="M32.2046 22.7586H17.8208C16.8025 22.7586 15.8478 22.3161 15.1477 21.6207C14.4476 20.9253 14.1294 19.9138 14.193 18.9023L15.4659 3.35057C15.5932 1.45402 17.1843 0 19.0937 0H30.9317C32.841 0 34.3685 1.45402 34.5595 3.28736L35.8324 18.8391C35.896 19.8506 35.5778 20.8621 34.8777 21.5575C34.1776 22.3793 33.1593 22.7586 32.2046 22.7586ZM30.868 1.45402H19.0937C17.9481 1.45402 17.057 2.27586 16.9298 3.41379L15.6569 18.9655C15.5932 19.5345 15.7841 20.1667 16.2297 20.6092C16.6115 21.0517 17.1843 21.3046 17.8208 21.3046H32.2046C32.7774 21.3046 33.3502 21.0517 33.7957 20.6092C34.1776 20.1667 34.4322 19.5977 34.3685 18.9655L33.0956 3.41379C32.9047 2.33908 32.0137 1.51724 30.868 1.45402Z"
                        fill="white"
                      />
                      <path
                        d="M34.8775 31.7353H15.0839C13.6837 31.7353 12.6017 30.787 12.5381 29.5859V26.1089C12.5381 24.9077 13.6837 23.9595 15.0202 23.8962H34.8775C36.2777 23.8962 37.3597 24.9077 37.4233 26.0457V29.5227C37.4233 30.787 36.2777 31.7353 34.8775 31.7353ZM15.0839 25.4135C14.5111 25.4135 14.0656 25.7296 14.0656 26.1089V29.5859C14.0656 29.9652 14.5111 30.2813 15.0839 30.2813H34.9412C35.514 30.2813 35.9595 29.9652 35.9595 29.5859V26.1089C35.9595 25.7296 35.514 25.4135 34.9412 25.4135H15.0839Z"
                        fill="white"
                      />
                      <path d="M36.8508 28.5117H36.0234V27.2473H36.8508C37.9964 27.2473 38.8875 26.3623 38.8875 25.2243V22.822H40.1604V25.2243C40.224 27.0577 38.6965 28.5117 36.8508 28.5117Z" fill="white" />
                      <path
                        d="M39.5873 23.4541C38.5053 23.4541 37.487 22.822 37.0415 21.7472C36.596 20.7357 36.8506 19.5346 37.6143 18.776C38.378 18.0174 39.5873 17.7645 40.6056 18.207C41.6239 18.6495 42.324 19.5978 42.324 20.7357C42.324 22.253 41.0511 23.4541 39.5873 23.4541ZM39.5873 19.2817C39.0145 19.2817 38.4417 19.5978 38.2507 20.1668C37.9962 20.6725 38.1235 21.3047 38.569 21.7472C38.9508 22.1898 39.5873 22.3162 40.1601 22.0633C40.7329 21.8737 41.0511 21.3047 41.0511 20.7357C40.9875 19.9139 40.351 19.2817 39.5873 19.2817Z"
                        fill="white"
                      />
                      <path d="M13.9384 28.5117H13.111C11.2653 28.5117 9.80144 27.0577 9.73779 25.2243V22.822H11.0107V25.2243C11.0107 26.3623 11.9017 27.2473 13.0473 27.2473H13.8747V28.5117H13.9384Z" fill="white" />
                      <path
                        d="M10.4376 23.4541C9.35567 23.4541 8.33735 22.7587 7.89183 21.7472C7.44631 20.7357 7.70089 19.5346 8.46464 18.776C9.22838 18.0174 10.4376 17.7645 11.456 18.207C12.4743 18.6495 13.1744 19.5978 13.1744 20.7357C13.1744 21.4311 12.8561 22.1266 12.347 22.6955C11.8378 23.2013 11.1377 23.4541 10.4376 23.4541ZM10.4376 19.2817C9.86483 19.2817 9.35567 19.661 9.10109 20.1668C8.84651 20.6725 8.9738 21.3047 9.41931 21.7472C9.80118 22.1266 10.4376 22.253 11.0104 22.0633C11.5196 21.8737 11.9015 21.3047 11.9015 20.7357C11.9015 20.3564 11.7742 19.9771 11.456 19.7243C11.1377 19.4082 10.8195 19.2817 10.4376 19.2817Z"
                        fill="white"
                      />
                      <path d="M28.195 21.3674H26.9221V24.5916H28.195V21.3674Z" fill="white" />
                      <path d="M23.0395 21.3674H21.7666V24.5916H23.0395V21.3674Z" fill="white" />
                      <path d="M25.649 34.9597H24.3761C22.9122 34.9597 21.7666 33.8218 21.7666 32.3677V30.408H28.2584V32.3677C28.2584 33.7585 27.0491 34.9597 25.649 34.9597ZM23.0395 31.7355V32.3677C23.0395 33.0631 23.6123 33.6321 24.3124 33.6321H25.5853C26.2854 33.6321 26.8582 33.0631 26.8582 32.3677V31.7355H23.0395Z" fill="white" />
                      <path d="M35.2594 42.1664H33.9865V41.5342C33.9865 40.3962 33.0318 39.448 31.8862 39.448H18.2025C17.0569 39.448 16.1022 40.3962 16.1022 41.5342V42.1664H14.8293V41.5342C14.8293 39.7008 16.3568 38.1836 18.2025 38.1836H31.8862C33.7319 38.1836 35.2594 39.7008 35.2594 41.5342V42.1664Z" fill="white" />
                      <path
                        d="M34.623 45.8973C33.732 45.8973 32.9046 45.3916 32.5864 44.5697C32.2682 43.7479 32.4591 42.7996 33.0319 42.1674C33.6684 41.5352 34.623 41.3456 35.4504 41.7249C36.2778 42.041 36.787 42.8628 36.787 43.7479C36.8506 44.949 35.8323 45.8973 34.623 45.8973ZM34.623 42.7996C34.2412 42.7996 33.923 42.9893 33.7957 43.3686C33.6684 43.6847 33.732 44.064 33.9866 44.3168C34.2412 44.5697 34.623 44.6329 34.9413 44.5065C35.2595 44.3801 35.5141 44.064 35.5141 43.6847C35.5141 43.2421 35.1322 42.7996 34.623 42.7996Z"
                        fill="white"
                      />
                      <path
                        d="M25.0125 45.8973C24.1214 45.8973 23.294 45.3916 22.9758 44.5697C22.6576 43.7479 22.8485 42.7996 23.4213 42.1674C24.0578 41.5352 25.0125 41.3456 25.8398 41.7249C26.6672 42.041 27.1764 42.8628 27.1764 43.7479C27.24 44.949 26.2854 45.8973 25.0125 45.8973ZM25.0125 42.7996C24.6306 42.7996 24.3124 42.9893 24.1851 43.3686C24.0578 43.6847 24.1214 44.064 24.376 44.3168C24.6306 44.5697 25.0125 44.6329 25.3307 44.5065C25.6489 44.3801 25.9035 44.064 25.9035 43.6847C25.9671 43.2421 25.5216 42.7996 25.0125 42.7996Z"
                        fill="white"
                      />
                      <path
                        d="M15.4658 45.8973C14.5748 45.8973 13.7474 45.3916 13.4292 44.5697C13.111 43.7479 13.3019 42.7996 13.8747 42.1674C14.5111 41.5352 15.4658 41.3456 16.2932 41.7249C17.1206 42.041 17.6298 42.8628 17.6298 43.7479C17.6298 44.949 16.6751 45.8973 15.4658 45.8973ZM15.4658 42.7996C15.084 42.7996 14.7657 42.9893 14.6384 43.3686C14.5111 43.6847 14.5748 44.064 14.8294 44.3168C15.084 44.5697 15.4658 44.6329 15.784 44.5065C16.1023 44.3801 16.3569 44.064 16.3569 43.6847C16.3569 43.2421 15.975 42.7996 15.4658 42.7996Z"
                        fill="white"
                      />
                      <path d="M25.5852 34.2646H24.3123V42.1669H25.5852V34.2646Z" fill="white" />
                      <path d="M12.0925 20.7362C12.0925 21.6845 11.3288 22.3799 10.4377 22.3799C9.48305 22.3799 8.78296 21.6213 8.78296 20.7362C8.78296 19.788 9.5467 19.0926 10.4377 19.0926C11.3288 19.0293 12.0925 19.788 12.0925 20.7362Z" fill="white" />
                      <path d="M41.2422 20.7362C41.2422 21.6845 40.4784 22.3799 39.5874 22.3799C38.6327 22.3799 37.9326 21.6213 37.9326 20.7362C37.9326 19.788 38.6964 19.0926 39.5874 19.0926C40.4784 19.0293 41.2422 19.788 41.2422 20.7362Z" fill="white" />
                      <path d="M35.7049 43.7466C35.7049 44.3787 35.1958 44.8213 34.623 44.8213C33.9865 44.8213 33.541 44.3155 33.541 43.7466C33.541 43.1144 34.0502 42.6719 34.623 42.6719C35.2594 42.6086 35.7049 43.1144 35.7049 43.7466Z" fill="white" />
                      <path d="M26.1578 43.7466C26.1578 44.3787 25.6487 44.8213 25.0759 44.8213C24.4394 44.8213 23.9939 44.3155 23.9939 43.7466C23.9939 43.1144 24.5031 42.6719 25.0759 42.6719C25.6487 42.6086 26.1578 43.1144 26.1578 43.7466Z" fill="white" />
                      <path d="M16.5477 43.7466C16.5477 44.3787 16.0386 44.8213 15.4658 44.8213C14.8293 44.8213 14.3838 44.3155 14.3838 43.7466C14.3838 43.1144 14.8929 42.6719 15.4658 42.6719C16.0386 42.6086 16.5477 43.1144 16.5477 43.7466Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1024">
                        <rect width="66" height="55" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Equipamiento'}
                subtitle={'Sillas ergométricas. Proyector y Tv. Lockers numerados. Cocinas e infusiones.'}
                darkText={false}
              />
            </div>
          )}
          <div className="servicesDropdownMenuMiddle" onClick={() => setShowServicesEspacios((prevState) => !prevState)}>
            <button className="servicesDropdownMenuButtonMiddle">Espacios</button>
            <p>
              {!showServicesEspacios ? (
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.31501 0.692295C8.39146 0.581261 8.49375 0.490475 8.61308 0.427757C8.73241 0.365039 8.8652 0.332269 9.00001 0.332269C9.13482 0.332269 9.2676 0.365039 9.38693 0.427757C9.50626 0.490475 9.60856 0.581261 9.68501 0.692295L17.185 11.5256C17.2718 11.6506 17.3227 11.7969 17.3322 11.9488C17.3417 12.1006 17.3094 12.2522 17.2387 12.387C17.1681 12.5217 17.0619 12.6346 16.9317 12.7132C16.8015 12.7919 16.6522 12.8334 16.5 12.8331H1.50001C1.34821 12.8325 1.19946 12.7905 1.06974 12.7117C0.940028 12.6328 0.834261 12.5201 0.763816 12.3856C0.693371 12.2512 0.660913 12.1 0.669933 11.9485C0.678953 11.797 0.729109 11.6508 0.815008 11.5256L8.31501 0.692295Z"
                    fill="#fff"
                  />
                </svg>
              ) : (
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.31452 12.3077C8.39097 12.4187 8.49327 12.5095 8.6126 12.5722C8.73193 12.635 8.86471 12.6677 8.99952 12.6677C9.13433 12.6677 9.26711 12.635 9.38645 12.5722C9.50577 12.5095 9.60807 12.4187 9.68452 12.3077L17.1845 1.47437C17.2713 1.34942 17.3222 1.20306 17.3317 1.05121C17.3412 0.899354 17.3089 0.747806 17.2383 0.613032C17.1677 0.478257 17.0615 0.36541 16.9312 0.286752C16.801 0.208093 16.6517 0.166631 16.4995 0.166871H1.49952C1.34772 0.167498 1.19897 0.209493 1.06925 0.28834C0.939539 0.367187 0.833772 0.479903 0.763327 0.614365C0.692882 0.748828 0.660424 0.89995 0.669444 1.05148C0.678464 1.20301 0.728621 1.34921 0.81452 1.47437L8.31452 12.3077Z"
                    fill="#fff"
                  />
                </svg>
              )}
            </p>
          </div>
          {showServicesEspacios && (
            <div className="servicesSection">
              <Service
                svg={
                  <svg width="76" height="68" viewBox="0 0 76 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1073)">
                      <path d="M0 10.7659C0 42.1866 25.6746 67.667 57.3347 67.667V10.7659H0Z" fill="#FF972F" />
                      <path d="M42.6858 49.0648H25.3594C25.0444 49.0648 24.8081 48.9084 24.6506 48.674C24.4931 48.4395 24.4931 48.1268 24.6506 47.8142L31.1874 36.559C31.3449 36.3245 31.5812 36.1682 31.8962 36.1682H42.6071C43.0796 36.1682 43.4734 36.559 43.4734 37.028V48.2832C43.5522 48.7521 43.1584 49.0648 42.6858 49.0648ZM26.8558 47.4234H41.8195V37.8096H32.4475L26.8558 47.4234Z" fill="white" />
                      <path d="M25.4383 48.2826L18.8228 36.9493L25.5958 25.3815L23.7057 24.2872L34.4953 21.3953L37.3305 32.1033L35.4404 31.0091L29.9274 40.4665L25.4383 48.2826Z" fill="white" />
                      <path
                        d="M25.4386 49.0646C25.1236 49.0646 24.8873 48.9082 24.7298 48.6738L18.1142 37.3404C17.9567 37.1059 17.9567 36.7933 18.1142 36.4807L24.4147 25.6163L23.2334 24.9128C22.9184 24.7565 22.7609 24.4439 22.8396 24.0531C22.9184 23.7404 23.1546 23.4278 23.4697 23.3496L34.2593 20.4577C34.4956 20.3795 34.7318 20.4577 34.8894 20.5358C35.0469 20.614 35.2044 20.8485 35.2831 21.083L38.1971 31.791C38.2759 32.1036 38.1971 32.4944 37.8821 32.6508C37.6458 32.8853 37.2521 32.8853 36.937 32.7289L35.7557 32.0255L26.1474 48.6738C25.9899 48.9082 25.7536 49.0646 25.4386 49.0646ZM19.8469 36.9496L25.4386 46.5634L34.7318 30.6186C34.8106 30.4623 35.0469 30.3059 35.2831 30.2278C35.5194 30.1496 35.7557 30.2278 35.9132 30.3059L36.0707 30.3841L33.8655 22.4117L25.8324 24.522L25.9899 24.6784C26.1474 24.7565 26.3049 24.991 26.3837 25.2255C26.4624 25.46 26.3837 25.6944 26.3049 25.8508L19.8469 36.9496Z"
                        fill="white"
                      />
                      <path d="M75.2124 37.8095H62.06C61.745 37.8095 61.5087 37.6532 61.3512 37.4187L55.9958 28.1957C55.7595 27.8049 55.917 27.2578 56.3108 27.0233L66.1554 21.3957C66.3129 21.3175 66.5491 21.2394 66.7854 21.3175C67.0217 21.3957 67.1792 21.552 67.3367 21.7083L75.9999 36.5589C76.1574 36.7934 76.1574 37.106 75.9999 37.4187C75.7637 37.6532 75.4486 37.8095 75.2124 37.8095ZM62.5326 36.0899H73.716L66.2341 23.1934L57.8859 27.9612L62.5326 36.0899Z" fill="white" />
                      <path d="M75.2125 36.9495L68.5969 48.2828H55.1296V50.4713L47.2539 42.5771L55.1296 34.761V36.9495H75.2125Z" fill="white" />
                      <path
                        d="M55.1294 51.3307C54.8932 51.3307 54.6569 51.2526 54.4994 51.0963L46.6237 43.202C46.3087 42.8894 46.3087 42.3422 46.6237 42.0296L54.4994 34.1354C54.7356 33.9009 55.1294 33.8227 55.4444 33.979C55.7595 34.1354 55.9957 34.448 55.9957 34.7606V36.1675H75.1336C75.4486 36.1675 75.6849 36.3239 75.8424 36.5583C75.9999 36.7928 75.9999 37.1055 75.8424 37.4181L69.3056 48.7514C69.1481 48.9859 68.9118 49.1422 68.5968 49.1422H55.9957V50.471C55.9957 50.7836 55.7595 51.0963 55.4444 51.2526C55.3657 51.3307 55.2869 51.3307 55.1294 51.3307ZM48.4351 42.5767L54.2631 48.4388V48.2825C54.2631 48.048 54.3419 47.8135 54.4994 47.6572C54.6569 47.5009 54.8932 47.4227 55.1294 47.4227H68.1242L73.716 37.8089H55.1294C54.6569 37.8089 54.2631 37.4181 54.2631 36.9491V36.7928L48.4351 42.5767Z"
                        fill="white"
                      />
                      <path
                        d="M41.7408 21.8645C41.5833 21.8645 41.4258 21.8645 41.347 21.7863L31.5025 16.1587C31.1087 15.9242 30.9512 15.3771 31.1874 14.9863L39.8506 0.135714C40.0082 -0.17693 40.2444 -0.333252 40.5594 -0.333252C40.8745 -0.333252 41.1107 -0.17693 41.2683 0.0575527L47.8838 11.3909C48.0413 11.6254 48.0413 11.938 47.8838 12.2507L42.5284 21.4736C42.4496 21.63 42.2133 21.7863 41.9771 21.8645C41.8983 21.8645 41.8196 21.8645 41.7408 21.8645ZM33.0776 15.0645L41.4258 19.8323L46.1512 11.7817L40.5594 2.1679L33.0776 15.0645Z"
                        fill="white"
                      />
                      <path d="M40.5596 0.526611H53.7119L60.4062 12.0944L62.3751 11.0002L59.4611 21.7082L48.6715 18.8163L50.5616 17.722L45.1274 8.26454L40.5596 0.526611Z" fill="white" />
                      <path
                        d="M59.4612 22.5679C59.3824 22.5679 59.3036 22.5679 59.2249 22.5679L48.4353 19.6759C48.1202 19.5978 47.884 19.2851 47.8052 18.9725C47.7264 18.6599 47.9627 18.269 48.199 18.1127L49.3803 17.4093L39.8508 0.917323C39.6933 0.68284 39.6933 0.370196 39.8508 0.0575526C40.0083 -0.17693 40.2446 -0.333252 40.5596 -0.333252H53.7119C54.027 -0.333252 54.2632 -0.17693 54.4207 0.0575526L60.7213 10.9219L61.9026 10.2185C62.2176 10.0622 62.5327 10.0622 62.8477 10.2966C63.084 10.5311 63.2415 10.8438 63.1627 11.1564L60.2487 21.8644C60.17 22.0989 60.0125 22.2553 59.8549 22.4116C59.7762 22.4897 59.6187 22.5679 59.4612 22.5679ZM50.8767 18.5817L58.9099 20.692L61.0363 12.7196L60.8788 12.7978C60.6425 12.9541 60.4062 12.9541 60.17 12.8759C59.9337 12.7978 59.7762 12.6415 59.6187 12.4851L53.2394 1.38629H42.056L51.3492 17.3311C51.5855 17.7219 51.428 18.269 51.0342 18.5035L50.8767 18.5817Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1073">
                        <rect width="76" height="68" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Espacio verde'}
                subtitle={'Patio de 500 mt2 rodeado de naturaleza. Quincho con parrilla y ducha.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="44" height="59" viewBox="0 0 44 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1079)">
                      <path d="M44 59.0002C44 34.8262 24.3026 15.2332 0 15.2332V59.0002H44Z" fill="#FF972F" />
                      <path d="M22.2498 14.0739C26.1893 14.0739 29.352 10.928 29.352 7.00936C29.352 3.14593 26.1338 0 22.2498 0C18.3104 0 15.1477 3.14593 15.1477 7.06455C15.1477 10.928 18.3104 14.0739 22.2498 14.0739Z" fill="white" />
                      <path d="M38.6734 11.1491C37.5637 9.93488 35.6772 9.87969 34.4565 10.9835L27.7983 17.1098H16.9786L10.3203 10.9835C9.09966 9.87969 7.21315 9.93488 6.10344 11.1491C4.99373 12.3633 5.04922 14.2398 6.2699 15.3437L13.8159 22.2426V43.7674H13.8714V51.715C18.3102 51.715 21.8613 48.1276 21.8613 43.7674C21.8613 48.1276 25.4124 51.715 29.8512 51.715V43.7674V43.4363V23.3465L38.507 15.3437C39.7276 14.2398 39.7831 12.3633 38.6734 11.1491Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1079">
                        <rect width="44" height="59" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Espacio libre de stress'}
                subtitle={'Todos los gastos están incluidos.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="76" height="56" viewBox="0 0 76 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.1159 1.10645C22.442 1.10645 0 23.6447 0 51.4373H50.1159V1.10645Z" fill="#FF972F" />
                    <path
                      d="M41.2357 24.0593C41.2357 19.0815 38.3444 14.7259 34.2139 12.6519C35.3842 11.3383 36.1415 9.54074 36.1415 7.60494C36.1415 3.38765 32.7683 0 28.569 0C24.3697 0 20.9965 3.38765 20.9965 7.60494C20.9965 9.54074 21.7538 11.3383 22.9241 12.6519C18.7936 14.7259 15.9023 19.0815 15.9023 24.0593C15.9023 30.7654 21.0654 36.2963 27.6741 36.7802V28.2074L21.9603 22.4691C21.6161 22.1235 21.6161 21.5012 21.9603 21.1556C22.3045 20.8099 22.9241 20.8099 23.2683 21.1556L27.6741 25.5802V7.95062C27.6741 7.39753 28.0871 6.98272 28.6379 6.98272C29.1886 6.98272 29.6016 7.39753 29.6016 7.95062V25.8568L32.4241 23.5062C32.8371 23.1605 33.3879 23.2296 33.7321 23.6444C34.0763 24.0593 34.0074 24.6123 33.5944 24.958L29.6016 28.2765V36.7802C36.0038 36.2963 41.2357 30.8346 41.2357 24.0593Z"
                      fill="white"
                    />
                    <path d="M27.5361 36.7805V45.6299C27.5361 46.183 27.9492 46.5978 28.4999 46.5978C29.0506 46.5978 29.4637 46.183 29.4637 45.6299V36.7805C29.1195 36.7805 28.8441 36.8497 28.4999 36.8497C28.1557 36.8497 27.8803 36.8497 27.5361 36.7805Z" fill="white" />
                    <path
                      d="M68.3585 42.7263H39.239C35.0397 42.7263 31.5977 39.2695 31.5977 35.0523V34.3609C31.5977 30.9041 33.9382 27.8621 37.1737 26.9634C36.4853 25.5806 36.1411 24.0597 36.1411 22.4695C36.1411 17.4918 39.652 13.2053 44.402 12.2374C44.815 7.39793 48.8078 3.59546 53.7643 3.59546C58.652 3.59546 62.7136 7.39793 63.1266 12.2374C67.8766 13.2745 71.3875 17.4918 71.3875 22.4695C71.3875 24.0597 71.0433 25.5806 70.3549 26.9634C73.5904 27.8621 75.931 30.9041 75.931 34.3609V35.0523C75.9998 39.2695 72.5578 42.7263 68.3585 42.7263ZM53.7643 5.53126C49.7027 5.53126 46.3295 8.84978 46.3295 12.9979C46.3295 13.4819 45.9853 14.035 45.5035 14.035C41.3042 14.5881 38.1375 18.1831 38.1375 22.4695C38.1375 24.1288 38.6194 25.7189 39.5143 27.1708C39.7208 27.4473 39.7208 27.8621 39.5832 28.1387C39.4455 28.4844 39.1013 28.6918 38.7571 28.6918C35.7969 28.8992 33.5252 31.3881 33.5252 34.3609V35.0523C33.5252 38.2325 36.0723 40.7905 39.1701 40.7905H68.2897C71.3875 40.7905 73.9346 38.2325 73.9346 35.0523V34.3609C73.9346 31.3881 71.6629 28.8992 68.7027 28.6918C68.3585 28.6918 68.0143 28.4844 67.8766 28.1387C67.739 27.793 67.739 27.4473 67.9455 27.1708C68.8404 25.7881 69.3223 24.1979 69.3223 22.4695C69.3223 18.1831 66.1556 14.5881 61.9564 14.035C61.4745 13.9658 61.0614 13.551 61.0614 13.0671V12.9979C61.1991 8.84978 57.8259 5.53126 53.7643 5.53126Z"
                      fill="white"
                    />
                    <path d="M53.7643 55.9998C53.2136 55.9998 52.8005 55.585 52.8005 55.0319V14.7257C52.8005 14.1726 53.2136 13.7578 53.7643 13.7578C54.315 13.7578 54.7281 14.1726 54.7281 14.7257V55.101C54.6592 55.585 54.2462 55.9998 53.7643 55.9998Z" fill="white" />
                    <path d="M53.7645 37.6795C53.558 37.6795 53.2826 37.6104 53.0761 37.403L46.8805 31.1807C46.5363 30.8351 46.5363 30.2128 46.8805 29.8672C47.2247 29.5215 47.8442 29.5215 48.1884 29.8672L54.3841 36.0894C54.7283 36.4351 54.7283 37.0573 54.3841 37.403C54.2464 37.5412 53.971 37.6795 53.7645 37.6795Z" fill="white" />
                    <path d="M53.7647 32.079C53.5582 32.079 53.2828 32.0098 53.0763 31.8024C52.7321 31.4568 52.7321 30.8345 53.0763 30.4889L58.5835 24.958C58.9277 24.6123 59.5473 24.6123 59.8915 24.958C60.2357 25.3037 60.2357 25.9259 59.8915 26.2716L54.3842 31.8024C54.2466 32.0098 53.9712 32.079 53.7647 32.079Z" fill="white" />
                    <path d="M53.7646 26.548C53.4204 26.548 53.0762 26.3406 52.9386 26.0641C52.5255 25.5801 49.9784 23.0912 47.7067 20.8789C47.3625 20.5332 47.2936 19.911 47.7067 19.5653C48.0509 19.2196 48.6704 19.1505 49.0146 19.5653C54.7284 25.027 54.7284 25.1653 54.7284 25.7184C54.6596 26.1332 54.2465 26.548 53.7646 26.548Z" fill="white" />
                  </svg>
                }
                title={'Eco'}
                subtitle={'Hábitos y tips para cuidar el planeta'}
                darkText={false}
              />
            </div>
          )}
          <div className="servicesDropdownMenuMiddle" onClick={() => setShowServicesServicios((prevState) => !prevState)}>
            <button className="servicesDropdownMenuButtonMiddle">Servicios</button>
            <p>
              {!showServicesSalas ? (
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.31501 0.692295C8.39146 0.581261 8.49375 0.490475 8.61308 0.427757C8.73241 0.365039 8.8652 0.332269 9.00001 0.332269C9.13482 0.332269 9.2676 0.365039 9.38693 0.427757C9.50626 0.490475 9.60856 0.581261 9.68501 0.692295L17.185 11.5256C17.2718 11.6506 17.3227 11.7969 17.3322 11.9488C17.3417 12.1006 17.3094 12.2522 17.2387 12.387C17.1681 12.5217 17.0619 12.6346 16.9317 12.7132C16.8015 12.7919 16.6522 12.8334 16.5 12.8331H1.50001C1.34821 12.8325 1.19946 12.7905 1.06974 12.7117C0.940028 12.6328 0.834261 12.5201 0.763816 12.3856C0.693371 12.2512 0.660913 12.1 0.669933 11.9485C0.678953 11.797 0.729109 11.6508 0.815008 11.5256L8.31501 0.692295Z"
                    fill="#fff"
                  />
                </svg>
              ) : (
                <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.31452 12.3077C8.39097 12.4187 8.49327 12.5095 8.6126 12.5722C8.73193 12.635 8.86471 12.6677 8.99952 12.6677C9.13433 12.6677 9.26711 12.635 9.38645 12.5722C9.50577 12.5095 9.60807 12.4187 9.68452 12.3077L17.1845 1.47437C17.2713 1.34942 17.3222 1.20306 17.3317 1.05121C17.3412 0.899354 17.3089 0.747806 17.2383 0.613032C17.1677 0.478257 17.0615 0.36541 16.9312 0.286752C16.801 0.208093 16.6517 0.166631 16.4995 0.166871H1.49952C1.34772 0.167498 1.19897 0.209493 1.06925 0.28834C0.939539 0.367187 0.833772 0.479903 0.763327 0.614365C0.692882 0.748828 0.660424 0.89995 0.669444 1.05148C0.678464 1.20301 0.728621 1.34921 0.81452 1.47437L8.31452 12.3077Z"
                    fill="#fff"
                  />
                </svg>
              )}
            </p>
          </div>
          {showServicesServicios && (
            <div className="servicesSection">
              <Service
                svg={
                  <svg width="59" height="67" viewBox="0 0 59 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1076)">
                      <path d="M59.5 58.5747C59.5 26.0457 33.0797 -0.333496 0.5 -0.333496V58.5747H59.5Z" fill="#FF972F" />
                      <path
                        d="M26.5961 66.6662C17.3571 66.6662 9.82005 59.4645 9.65796 50.6445V50.5636V35.9174C9.65796 35.0273 10.3874 34.2991 11.2788 34.2991H41.6703C46.7761 34.2991 50.9904 38.345 50.9904 43.2C50.9904 47.5696 47.6676 51.2109 43.3722 52.0201C42.5618 60.031 35.592 66.3426 27.0824 66.5853C26.9203 66.5853 26.7582 66.6662 26.5961 66.6662ZM12.9808 50.4017V50.4826C12.9808 57.4416 18.897 63.1868 26.1099 63.3486C26.272 63.3486 26.353 63.2677 26.5151 63.2677C33.8901 63.2677 39.9684 57.5225 40.0494 50.4017C40.0494 49.5116 40.7788 48.7834 41.6703 48.7834C44.9121 48.7834 47.5865 46.194 47.5865 43.1191C47.5865 39.9633 44.9121 37.4549 41.5893 37.4549H12.9808V50.4017Z"
                        fill="white"
                      />
                      <path d="M19.5454 24.0228V31.3054C23.7597 31.3054 27.1635 28.0687 27.1635 24.0228V16.7402C23.0303 16.6593 19.5454 19.9769 19.5454 24.0228Z" fill="white" />
                      <path d="M19.5454 9.3766V16.6592C23.7597 16.6592 27.1635 13.4225 27.1635 9.3766V2.09399C23.0303 2.09399 19.5454 5.33071 19.5454 9.3766Z" fill="white" />
                      <path d="M29.6758 16.6593V23.9419C33.8901 23.9419 37.2939 20.7052 37.2939 16.6593V9.37671C33.0796 9.37671 29.6758 12.6134 29.6758 16.6593Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1076">
                        <rect width="59" height="67" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Catering'}
                subtitle={'Lo armamos en base a lo que necesites.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="64" height="59" viewBox="0 0 64 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1077)">
                      <path d="M51.6304 8.97925C51.6304 36.7846 28.7341 59.3333 0.5 59.3333V8.97925H51.6304Z" fill="#FF972F" />
                      <path
                        d="M42.4298 48.3358C39.9013 48.3358 34.704 45.8457 30.2793 41.6265C26.2057 37.6839 21.2893 30.7672 21.2893 20.392V10.9852C21.2893 9.60188 22.2726 8.2877 23.6773 7.94186C29.7174 6.28184 35.3361 3.99931 40.8144 0.817594C41.7977 0.264253 43.0619 0.264253 44.0452 0.817594C49.3127 3.7918 55.3529 6.351 61.1823 7.94186C62.587 8.2877 63.5703 9.60188 63.5703 10.9852V20.3229C63.5703 30.698 58.7241 37.6148 54.5803 41.5573C50.1555 45.7766 44.9582 48.3358 42.4298 48.3358ZM42.0786 2.89262C36.4599 6.21267 30.6304 8.63354 24.3796 10.2936C24.0987 10.3627 23.888 10.6394 23.888 10.9161V20.2537C23.888 29.7988 28.383 36.0931 32.1054 39.759C36.4599 43.9782 41.0953 45.7766 42.5 45.7766C43.9047 45.7766 48.4699 43.9782 52.8947 39.759C56.6171 36.1623 61.1121 29.7988 61.1121 20.2537V10.9852C61.1121 10.7086 60.9014 10.4319 60.6204 10.3627C54.5803 8.77187 48.3294 6.1435 42.9214 2.96179C42.5702 2.75429 42.2893 2.75429 42.0786 2.89262Z"
                        fill="white"
                      />
                      <path d="M37.8647 31.943C38.2159 32.2889 38.7075 32.4964 39.2694 32.4964C39.761 32.4964 40.2527 32.2889 40.6741 31.943L53.3864 19.4237C54.159 18.6628 54.159 17.487 53.3864 16.7262C52.6139 15.9653 51.4199 15.9653 50.6473 16.7262L39.2694 27.8621L34.353 23.0204C33.5804 22.2596 32.3864 22.2596 31.6139 23.0204C30.8413 23.7812 30.8413 24.9571 31.6139 25.7179L37.8647 31.943Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1077">
                        <rect width="64" height="59" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Seguridad'}
                subtitle={'Lo armamos en base a lo que necesites.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="66" height="62" viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1078)">
                      <path d="M0 62.0002C33.5848 62.0002 60.8203 34.8335 60.8203 1.3335H0V62.0002Z" fill="#FF972F" />
                      <path d="M30.3264 52.0834C18.2125 52.0834 8.35425 42.2501 8.35425 30.0834C8.35425 18.0001 18.2125 8.16675 30.3264 8.16675C42.4403 8.16675 52.2985 18.0001 52.2985 30.0834C52.215 42.2501 42.3568 52.0834 30.3264 52.0834ZM30.3264 10.5834C19.5492 10.5834 10.8606 19.3334 10.8606 30.0834C10.8606 40.8334 19.6327 49.5834 30.3264 49.5834C41.1036 49.5834 49.7922 40.8334 49.7922 30.0834C49.7922 19.3334 41.0201 10.5834 30.3264 10.5834Z" fill="white" />
                      <path d="M38.848 24.4166C38.848 29.1666 35.005 32.9999 30.3265 32.9999C25.5645 32.9999 21.7214 29.1666 21.7214 24.4166C21.7214 19.6666 25.5645 15.8333 30.243 15.8333C35.005 15.8333 38.848 19.6666 38.848 24.4166Z" fill="white" />
                      <path d="M42.6076 46.4166C40.9367 41.1666 36.0911 37.3333 30.243 37.3333C24.4785 37.3333 19.5494 41.1666 17.8785 46.4166C17.5443 47.5833 24.8962 49.9999 24.8962 49.9999L34.3367 50.2499" fill="white" />
                      <path
                        d="M38.7644 3.08333L39.1821 3C40.0176 2.83333 40.6859 2.16667 40.9365 1.25L41.0201 0.833333C41.1036 0.333333 41.5214 0 42.0226 0C42.5239 0 42.9416 0.333333 43.0252 0.833333L43.1087 1.25C43.2758 2.08333 43.9441 2.83333 44.8631 3L45.2809 3.08333C45.7821 3.16667 46.1163 3.58333 46.1163 4.08333C46.1163 4.58333 45.7821 5 45.2809 5.08333L44.8631 5.16667C44.0277 5.33333 43.2758 6 43.1087 6.91667L43.0252 7.33333C42.9416 7.83333 42.5239 8.16667 42.0226 8.16667C41.5214 8.16667 41.1036 7.83333 41.0201 7.33333L40.9365 6.91667C40.7695 6.08333 40.1011 5.33333 39.1821 5.16667L38.7644 5.08333C38.2631 5 37.929 4.58333 37.929 4.08333C37.929 3.58333 38.2631 3.16667 38.7644 3.08333Z"
                        fill="white"
                      />
                      <path d="M44.1951 22.8333C43.9444 22.8333 43.7773 22.6666 43.7773 22.4166V21.2499C43.7773 20.9999 43.9444 20.8333 44.1951 20.8333C44.4457 20.8333 44.6128 20.9999 44.6128 21.2499V22.4166C44.6128 22.6666 44.3622 22.8333 44.1951 22.8333Z" fill="white" />
                      <path d="M44.1951 25.9998C43.9444 25.9998 43.7773 25.8331 43.7773 25.5831V24.4164C43.7773 24.1664 43.9444 23.9998 44.1951 23.9998C44.4457 23.9998 44.6128 24.1664 44.6128 24.4164V25.5831C44.6128 25.7498 44.3622 25.9998 44.1951 25.9998Z" fill="white" />
                      <path d="M43.1923 23.8336H42.0227C41.7721 23.8336 41.605 23.6669 41.605 23.4169C41.605 23.1669 41.7721 23.0002 42.0227 23.0002H43.1923C43.443 23.0002 43.61 23.1669 43.61 23.4169C43.61 23.6669 43.443 23.8336 43.1923 23.8336Z" fill="white" />
                      <path d="M46.2836 23.8336H45.114C44.8634 23.8336 44.6963 23.6669 44.6963 23.4169C44.6963 23.1669 44.8634 23.0002 45.114 23.0002H46.2836C46.5343 23.0002 46.7014 23.1669 46.7014 23.4169C46.7014 23.6669 46.5343 23.8336 46.2836 23.8336Z" fill="white" />
                      <path
                        d="M50.043 9.58341L52.048 9.16675C53.886 8.83341 55.2227 7.41675 55.6404 5.58341L56.0581 3.58341C56.2252 2.91675 56.7265 2.41675 57.4784 2.41675C58.1468 2.41675 58.7316 2.83341 58.8987 3.58341L59.3164 5.58341C59.6506 7.41675 61.0708 8.83341 62.9088 9.16675L64.9138 9.58341C65.5822 9.75008 66.0835 10.2501 66.0835 11.0001C66.0835 11.6667 65.6657 12.2501 64.9138 12.4167L62.9088 12.8334C61.0708 13.1667 59.7341 14.5834 59.3164 16.4167L58.8151 18.3334C58.648 19.0001 58.1468 19.5001 57.3949 19.5001C56.7265 19.5001 56.1417 19.0834 55.9746 18.3334L55.5569 16.3334C55.2227 14.5001 53.8025 13.0834 51.9645 12.7501L49.9594 12.3334C49.2911 12.1667 48.7898 11.6667 48.7898 10.9167C48.9569 10.2501 49.3746 9.75008 50.043 9.58341Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1078">
                        <rect width="66" height="62" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Asesoramiento personalizado'}
                subtitle={'Nos adaptamos a las necesidades de cada jornada.'}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_1072)">
                      <path d="M0 55.3334C24.2819 55.3334 43.9732 35.6398 43.9732 11.355H0V55.3334Z" fill="#FF972F" />
                      <path d="M12.3825 18.5439C7.12746 18.5439 2.83887 14.2547 2.83887 8.93867C2.83887 3.6226 7.12746 -0.666504 12.3825 -0.666504C17.6375 -0.666504 21.9261 3.6226 21.9261 8.93867C21.9865 14.1943 17.6979 18.5439 12.3825 18.5439ZM12.3825 0.662515C7.85229 0.662515 4.16773 4.34752 4.16773 8.93867C4.16773 13.5298 7.85229 17.2148 12.4429 17.2148C16.9731 17.2148 20.7181 13.5298 20.7181 8.93867C20.6577 4.34752 16.9731 0.662515 12.3825 0.662515Z" fill="white" />
                      <path d="M16.1276 6.46197C16.1276 8.51591 14.4364 10.2074 12.3827 10.2074C10.329 10.2074 8.6377 8.51591 8.6377 6.46197C8.6377 4.40803 10.329 2.71655 12.3827 2.71655C14.4364 2.71655 16.1276 4.34762 16.1276 6.46197Z" fill="white" />
                      <path d="M17.7584 16.0673C17.0335 13.7717 14.9194 12.1406 12.3825 12.1406C9.84561 12.1406 7.73151 13.8321 7.00668 16.0673C6.82547 16.611 10.0268 17.6379 10.0268 17.6379L14.1342 17.7587" fill="white" />
                      <path d="M44.4564 18.5439C39.2013 18.5439 34.9127 14.2547 34.9127 8.93867C34.8523 3.6226 39.1409 -0.666504 44.4564 -0.666504C49.7114 -0.666504 54 3.6226 54 8.93867C54 14.1943 49.7114 18.5439 44.4564 18.5439ZM44.4564 0.662515C39.9262 0.662515 36.1812 4.34752 36.1812 8.93867C36.1812 13.5298 39.8658 17.2148 44.4564 17.2148C48.9866 17.2148 52.7315 13.5298 52.7315 8.93867C52.6711 4.34752 48.9866 0.662515 44.4564 0.662515Z" fill="white" />
                      <path d="M48.1411 6.46197C48.1411 8.51591 46.4498 10.2074 44.3961 10.2074C42.3424 10.2074 40.6511 8.51591 40.6511 6.46197C40.6511 4.40803 42.3424 2.71655 44.3961 2.71655C46.5102 2.71655 48.1411 4.34762 48.1411 6.46197Z" fill="white" />
                      <path d="M49.8323 16.0673C49.1075 13.7717 46.9934 12.1406 44.4565 12.1406C41.9196 12.1406 39.8055 13.8321 39.0807 16.0673C38.8994 16.611 42.1008 17.6379 42.1008 17.6379L46.2082 17.7587" fill="white" />
                      <path d="M12.3825 51.1652C7.12746 51.1652 2.83887 46.8761 2.83887 41.56C2.83887 36.2439 7.12746 31.9548 12.3825 31.9548C17.6375 31.9548 21.9261 36.2439 21.9261 41.56C21.9865 46.8761 17.6979 51.1652 12.3825 51.1652ZM12.3825 33.2839C7.85229 33.2839 4.10732 36.9689 4.10732 41.56C4.10732 46.1512 7.79189 49.8362 12.3825 49.8362C16.9127 49.8362 20.6577 46.1512 20.6577 41.56C20.6577 36.9689 16.9731 33.2839 12.3825 33.2839Z" fill="white" />
                      <path d="M16.1276 39.0833C16.1276 41.1372 14.4364 42.8287 12.3827 42.8287C10.329 42.8287 8.6377 41.1372 8.6377 39.0833C8.6377 37.0294 10.329 35.3379 12.3827 35.3379C14.4364 35.3379 16.1276 36.969 16.1276 39.0833Z" fill="white" />
                      <path d="M17.7584 48.6886C17.0335 46.393 14.9194 44.762 12.3825 44.762C9.84561 44.762 7.73151 46.4534 7.00668 48.6886C6.82547 49.2323 10.0268 50.2593 10.0268 50.2593L14.1342 50.3801" fill="white" />
                      <path d="M44.4565 51.1652C39.2014 51.1652 34.9128 46.8761 34.9128 41.56C34.9128 36.2439 39.2014 31.9548 44.4565 31.9548C49.7115 31.9548 54.0001 36.2439 54.0001 41.56C54.0001 46.8761 49.7115 51.1652 44.4565 51.1652ZM44.4565 33.2839C39.9263 33.2839 36.1813 36.9689 36.1813 41.56C36.1813 46.1512 39.8659 49.8362 44.4565 49.8362C48.9867 49.8362 52.7316 46.1512 52.7316 41.56C52.6712 36.9689 48.9867 33.2839 44.4565 33.2839Z" fill="white" />
                      <path d="M48.1411 39.0833C48.1411 41.1372 46.4498 42.8287 44.3961 42.8287C42.3424 42.8287 40.6511 41.1372 40.6511 39.0833C40.6511 37.0294 42.3424 35.3379 44.3961 35.3379C46.5102 35.3379 48.1411 36.969 48.1411 39.0833Z" fill="white" />
                      <path d="M49.8323 48.6886C49.1075 46.393 46.9934 44.762 44.4565 44.762C41.9196 44.762 39.8055 46.4534 39.0807 48.6886C38.8994 49.2323 42.1008 50.2593 42.1008 50.2593L46.2082 50.3801" fill="white" />
                      <path
                        d="M33.0403 30.1423L32.7987 30.0819C32.2551 29.9611 31.8323 29.5382 31.7115 28.9946L31.6511 28.7529C31.5906 28.4509 31.349 28.2092 30.9866 28.2092C30.6846 28.2092 30.443 28.4509 30.3222 28.7529L30.2618 28.9946C30.141 29.5382 29.7182 29.9611 29.1745 30.0819L28.9933 30.1423C28.6913 30.2028 28.4497 30.4444 28.4497 30.8069C28.4497 31.1089 28.6913 31.411 28.9933 31.4714L29.2349 31.5318C29.7786 31.6526 30.2014 32.0755 30.3222 32.6191L30.3826 32.8608C30.443 33.1628 30.6846 33.4045 31.047 33.4045C31.349 33.4045 31.6511 33.1628 31.7115 32.8608L31.7719 32.6191C31.8927 32.0755 32.3155 31.6526 32.8591 31.5318L33.1007 31.4714C33.4027 31.411 33.6443 31.1693 33.6443 30.8069C33.5839 30.5048 33.3423 30.2028 33.0403 30.1423Z"
                        fill="white"
                      />
                      <path d="M32.9194 20.3561C33.1007 20.3561 33.2215 20.2353 33.2215 20.054V19.2083C33.2215 19.0271 33.1007 18.9062 32.9194 18.9062C32.7382 18.9062 32.6174 19.0271 32.6174 19.2083V20.054C32.6174 20.2353 32.7986 20.3561 32.9194 20.3561Z" fill="white" />
                      <path d="M32.9194 22.7118C33.1007 22.7118 33.2215 22.591 33.2215 22.4098V21.564C33.2215 21.3828 33.1007 21.262 32.9194 21.262C32.7382 21.262 32.6174 21.3828 32.6174 21.564V22.4098C32.6174 22.5306 32.7986 22.7118 32.9194 22.7118Z" fill="white" />
                      <path d="M33.7047 21.0812H34.5504C34.7316 21.0812 34.8524 20.9603 34.8524 20.7791C34.8524 20.5979 34.7316 20.4771 34.5504 20.4771H33.7047C33.5235 20.4771 33.4027 20.5979 33.4027 20.7791C33.3423 20.9603 33.5235 21.0812 33.7047 21.0812Z" fill="white" />
                      <path d="M31.3489 21.0812H32.1945C32.3757 21.0812 32.4965 20.9603 32.4965 20.7791C32.4965 20.5979 32.3757 20.4771 32.1945 20.4771H31.3489C31.1677 20.4771 31.0469 20.5979 31.0469 20.7791C31.0469 20.9603 31.1677 21.0812 31.3489 21.0812Z" fill="white" />
                      <path
                        d="M28.6309 23.2562L27.3624 23.0146C26.2148 22.7729 25.3691 21.9272 25.1275 20.7794L24.8859 19.5108C24.8255 19.0879 24.4631 18.7859 24.0403 18.7859C23.6175 18.7859 23.2551 19.0879 23.1947 19.5108L22.953 20.7794C22.7114 21.9272 21.8658 22.7729 20.7181 23.0146L19.4497 23.2562C19.0269 23.3166 18.7249 23.6791 18.7249 24.102C18.7249 24.5248 19.0269 24.8873 19.4497 24.9477L20.7181 25.1893C21.8658 25.431 22.7114 26.2767 22.953 27.4245L23.1947 28.6931C23.2551 29.116 23.6175 29.418 24.0403 29.418C24.4631 29.418 24.8255 29.116 24.8859 28.6931L25.1275 27.4245C25.3691 26.2767 26.2148 25.431 27.3624 25.1893L28.6309 24.9477C29.0537 24.8873 29.3557 24.5248 29.3557 24.102C29.3557 23.6791 29.0537 23.3166 28.6309 23.2562Z"
                        fill="white"
                      />
                      <path d="M23.1947 7.48875C22.8322 7.48875 22.5302 7.24711 22.4698 6.94506C22.349 6.52219 22.5906 6.09932 23.0134 5.9785C26.4564 5.01194 30.2618 5.01194 33.7651 5.91809C34.1879 6.03891 34.4295 6.46178 34.3087 6.88465C34.1879 7.30752 33.7651 7.54916 33.3423 7.42834C30.141 6.52219 26.6376 6.5826 23.4363 7.48875C23.3155 7.48875 23.2551 7.48875 23.1947 7.48875Z" fill="white" />
                      <path d="M28.3893 45.2453C26.5772 45.2453 24.7651 45.0036 23.0134 44.5204C22.5906 44.3995 22.349 43.9767 22.4698 43.5538C22.5906 43.1309 23.0134 42.8893 23.4363 43.0101C26.6376 43.9163 30.0806 43.9163 33.2819 43.0101C33.7047 42.8893 34.1275 43.1309 34.2483 43.5538C34.3692 43.9767 34.1275 44.3995 33.7047 44.5204C32.0134 45.064 30.2014 45.2453 28.3893 45.2453Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_1072">
                        <rect width="54" height="55" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                title={'Comunidad Vida'}
                subtitle={'Brindamos experiencias y propuestas mensuales a nuestros coworkers. Contamos con una red de beneficios de la mano de reconocidos emprendedores de la zona.'}
                darkText={false}
              />
            </div>
          )}
        </div>
      </div>

      <div className="servicesContainerMobile">
        <div className="customContainer">
          <p className="servicesTitleMobile extraBoldFont">Servicios</p>
          <div className="servicesSection">
            <div className="servicesDropdownMenu" onClick={() => setShowServicesSalas((prevState) => !prevState)}>
              <button className="servicesDropdownMenuButton">Salas</button>
              <p>
                {!showServicesSalas ? (
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.31501 0.692295C8.39146 0.581261 8.49375 0.490475 8.61308 0.427757C8.73241 0.365039 8.8652 0.332269 9.00001 0.332269C9.13482 0.332269 9.2676 0.365039 9.38693 0.427757C9.50626 0.490475 9.60856 0.581261 9.68501 0.692295L17.185 11.5256C17.2718 11.6506 17.3227 11.7969 17.3322 11.9488C17.3417 12.1006 17.3094 12.2522 17.2387 12.387C17.1681 12.5217 17.0619 12.6346 16.9317 12.7132C16.8015 12.7919 16.6522 12.8334 16.5 12.8331H1.50001C1.34821 12.8325 1.19946 12.7905 1.06974 12.7117C0.940028 12.6328 0.834261 12.5201 0.763816 12.3856C0.693371 12.2512 0.660913 12.1 0.669933 11.9485C0.678953 11.797 0.729109 11.6508 0.815008 11.5256L8.31501 0.692295Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.31452 12.3077C8.39097 12.4187 8.49327 12.5095 8.6126 12.5722C8.73193 12.635 8.86471 12.6677 8.99952 12.6677C9.13433 12.6677 9.26711 12.635 9.38645 12.5722C9.50577 12.5095 9.60807 12.4187 9.68452 12.3077L17.1845 1.47437C17.2713 1.34942 17.3222 1.20306 17.3317 1.05121C17.3412 0.899354 17.3089 0.747806 17.2383 0.613032C17.1677 0.478257 17.0615 0.36541 16.9312 0.286752C16.801 0.208093 16.6517 0.166631 16.4995 0.166871H1.49952C1.34772 0.167498 1.19897 0.209493 1.06925 0.28834C0.939539 0.367187 0.833772 0.479903 0.763327 0.614365C0.692882 0.748828 0.660424 0.89995 0.669444 1.05148C0.678464 1.20301 0.728621 1.34921 0.81452 1.47437L8.31452 12.3077Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                )}
              </p>
            </div>
            {showServicesSalas && (
              <div className="servicesSection">
                <Service
                  svg={
                    <svg width="58" height="49" viewBox="0 0 58 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1080)">
                        <path d="M46.3491 48.9993C46.3491 23.2166 25.5939 2.37231 0 2.37231V49.0634H46.3491V48.9993Z" fill="#FF972F" />
                        <path d="M50.2963 27.5784C53.0976 27.5784 55.3896 25.2053 55.3896 22.3192C55.3896 19.4331 53.0976 17.0601 50.2963 17.0601C47.4949 17.0601 45.203 19.369 45.203 22.3192C45.1393 25.2053 47.4313 27.5784 50.2963 27.5784Z" fill="white" />
                        <path d="M57.9999 38.097C57.9999 33.7357 54.4983 30.2083 50.2326 30.2083C49.8506 30.2083 49.4049 30.2724 49.0229 30.3365V38.097H57.9999Z" fill="white" />
                        <path d="M34.316 17.7009C37.1173 17.7009 39.4093 15.392 39.4093 12.4418C39.4093 9.55565 37.1173 7.18262 34.316 7.18262C31.5146 7.18262 29.2227 9.55565 29.2227 12.4418C29.2227 15.3279 31.5146 17.7009 34.316 17.7009Z" fill="white" />
                        <path d="M34.125 22.9599V26.8722L35.1437 27.0005L41.7649 27.706H41.9559C41.7013 23.6013 38.327 20.3303 34.2523 20.3303C32.979 20.3303 31.7693 20.651 30.687 21.2282L32.597 21.4206C33.4883 21.4848 34.125 22.1261 34.125 22.9599Z" fill="white" />
                        <path d="M18.3993 10.4539C21.2006 10.4539 23.4926 8.14497 23.4926 5.19471C23.4926 2.30858 21.2006 -0.0644531 18.3993 -0.0644531C15.598 -0.0644531 13.306 2.30858 13.306 5.19471C13.2423 8.14497 15.5343 10.4539 18.3993 10.4539Z" fill="white" />
                        <path d="M18.5907 14.4946C19.3547 14.4946 19.9277 15.1359 19.9277 15.8414V20.0744L20.9463 20.2027L26.1033 20.7799C25.976 16.5469 22.538 13.1477 18.3997 13.1477C17.0627 13.1477 15.7894 13.4684 14.707 14.1097L15.089 14.1739L18.5907 14.4946Z" fill="white" />
                        <path
                          d="M47.4949 43.2911H47.4313L30.5597 41.4311C29.2227 41.4311 28.1404 40.2767 28.1404 38.9298V34.8893L17.0624 33.6707C15.7891 33.6707 14.7705 32.5804 14.7705 31.2976V27.0647L4.07451 25.9102C2.86485 25.9102 1.84619 24.884 1.84619 23.6013V14.3016C1.84619 13.0189 2.86485 11.9927 4.07451 11.9927C4.13818 11.9927 4.13818 11.9927 4.20184 11.9927L18.6541 13.5319C19.8638 13.5319 20.8824 14.5581 20.8824 15.8408V19.2401L32.788 20.5228C34.0613 20.5228 35.08 21.6131 35.08 22.8958V26.0385L41.956 26.744L47.6223 27.3212C48.9593 27.3212 50.0416 28.4757 50.0416 29.8225V40.6615C49.9779 42.1366 48.8956 43.2911 47.4949 43.2911ZM4.07451 13.8526C3.81985 13.8526 3.69251 14.045 3.69251 14.3016V23.5372C3.69251 23.7937 3.88351 23.9861 4.13818 23.9861C4.20184 23.9861 4.20184 23.9861 4.26551 23.9861L15.7891 25.2047C16.2348 25.2688 16.6168 25.6537 16.6168 26.1026V31.1694C16.6168 31.4901 16.8714 31.7466 17.1898 31.7466C17.2534 31.7466 17.2534 31.7466 17.3171 31.7466L29.2864 33.0293C29.732 33.0935 30.114 33.4783 30.114 33.9272V38.8016C30.114 39.1864 30.4324 39.5071 30.7507 39.5071C30.7507 39.5071 30.8144 39.5071 30.878 39.5071L47.7496 41.3029C48.0679 41.3029 48.3863 40.9822 48.3863 40.5974V29.9508C48.3863 29.566 48.0679 29.2453 47.7496 29.2453H47.6859L34.316 27.8343C33.8703 27.7702 33.4883 27.3853 33.4883 26.9364V23.0241C33.4883 22.7034 33.2337 22.4469 32.979 22.4469C32.9153 22.4469 32.9153 22.4469 32.8517 22.4469L20.1184 21.1C19.6728 21.0359 19.2908 20.651 19.2908 20.2021V15.9691C19.2908 15.7126 19.0998 15.5202 18.8451 15.5202C18.7814 15.5202 18.7814 15.5202 18.7178 15.5202L4.07451 13.8526Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1080">
                          <rect width="58" height="49" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Salas de reunión y videocall'}
                  subtitle={'Espacios equipados para reunirse y realizar videollamadas.'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="54" height="49" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1081)">
                        <path d="M-0.5 44.9836C24.4831 44.9836 44.7429 24.8398 44.7429 0H-0.5V44.9836Z" fill="#FF972F" />
                        <path d="M11.1216 40.2875C11.1216 41.894 9.81651 43.1916 8.20069 43.1916C6.58487 43.1916 5.27979 41.894 5.27979 40.2875C5.27979 38.6809 6.58487 37.3833 8.20069 37.3833C9.81651 37.3833 11.1216 38.6809 11.1216 40.2875Z" fill="white" />
                        <path d="M8.26277 44.613C5.83904 44.613 3.91249 46.5285 3.85034 48.9384H12.6131C12.6131 46.5903 10.6865 44.613 8.26277 44.613Z" fill="white" />
                        <path d="M21.5623 40.2875C21.5623 41.894 20.2572 43.1916 18.6414 43.1916C17.0255 43.1916 15.7205 41.894 15.7205 40.2875C15.7205 38.6809 17.0255 37.3833 18.6414 37.3833C20.2572 37.3833 21.5623 38.6809 21.5623 40.2875Z" fill="white" />
                        <path d="M18.6412 44.613C16.2175 44.613 14.2909 46.5285 14.2288 48.9384H22.9915C22.9915 46.5903 21.0649 44.613 18.6412 44.613Z" fill="white" />
                        <path d="M31.9407 40.2875C31.9407 41.894 30.6356 43.1916 29.0198 43.1916C27.404 43.1916 26.0989 41.894 26.0989 40.2875C26.0989 38.6809 27.404 37.3833 29.0198 37.3833C30.6356 37.3833 31.9407 38.6809 31.9407 40.2875Z" fill="white" />
                        <path d="M29.0196 44.613C26.5959 44.613 24.6693 46.5285 24.6072 48.9384H33.3699C33.432 46.5903 31.4433 44.613 29.0196 44.613Z" fill="white" />
                        <path d="M42.3191 40.2875C42.3191 41.894 41.014 43.1916 39.3982 43.1916C37.7824 43.1916 36.4773 41.894 36.4773 40.2875C36.4773 38.6809 37.7824 37.3833 39.3982 37.3833C41.014 37.3833 42.3191 38.6809 42.3191 40.2875Z" fill="white" />
                        <path d="M39.4603 44.613C37.0366 44.613 35.11 46.5285 35.0479 48.9384H43.8106C43.8106 46.5903 41.884 44.613 39.4603 44.613Z" fill="white" />
                        <path d="M52.76 40.2875C52.76 41.894 51.4549 43.1916 49.8391 43.1916C48.2233 43.1916 46.9182 41.894 46.9182 40.2875C46.9182 38.6809 48.2233 37.3833 49.8391 37.3833C51.4549 37.3833 52.76 38.6809 52.76 40.2875Z" fill="white" />
                        <path d="M49.8389 44.613C47.4152 44.613 45.4887 46.5285 45.4265 48.9384H54.1892C54.2514 46.5903 52.2627 44.613 49.8389 44.613Z" fill="white" />
                        <path d="M15.9067 37.6307C15.9067 38.8665 14.8502 39.917 13.6073 39.917C12.3644 39.917 11.3079 38.8665 11.3079 37.6307C11.3079 36.3949 12.3644 35.3445 13.6073 35.3445C14.8502 35.3445 15.9067 36.3331 15.9067 37.6307Z" fill="white" />
                        <path d="M13.6074 41.0908C11.6809 41.0908 10.1272 42.6356 10.1272 44.5511H17.0876C17.0876 42.6356 15.534 41.0908 13.6074 41.0908Z" fill="white" />
                        <path d="M26.2854 37.6307C26.2854 38.8665 25.2289 39.917 23.986 39.917C22.743 39.917 21.6865 38.8665 21.6865 37.6307C21.6865 36.3949 22.743 35.3445 23.986 35.3445C25.2289 35.3445 26.2854 36.3331 26.2854 37.6307Z" fill="white" />
                        <path d="M23.9861 41.0908C22.0595 41.0908 20.5059 42.6356 20.5059 44.5511H27.4663C27.4663 42.6356 25.9126 41.0908 23.9861 41.0908Z" fill="white" />
                        <path d="M36.6018 37.6307C36.6018 38.8665 35.5453 39.917 34.3024 39.917C33.0594 39.917 32.0029 38.8665 32.0029 37.6307C32.0029 36.3949 33.0594 35.3445 34.3024 35.3445C35.5453 35.3445 36.6018 36.3331 36.6018 37.6307Z" fill="white" />
                        <path d="M34.3022 41.0908C32.3757 41.0908 30.822 42.6356 30.822 44.5511H37.7825C37.7825 42.6356 36.2288 41.0908 34.3022 41.0908Z" fill="white" />
                        <path d="M46.9802 37.6307C46.9802 38.8665 45.9237 39.917 44.6808 39.917C43.4378 39.917 42.3813 38.8665 42.3813 37.6307C42.3813 36.3949 43.4378 35.3445 44.6808 35.3445C45.9237 35.3445 46.9802 36.3331 46.9802 37.6307Z" fill="white" />
                        <path d="M44.6809 41.0908C42.7544 41.0908 41.2007 42.6356 41.2007 44.5511H48.1611C48.1611 42.6356 46.6075 41.0908 44.6809 41.0908Z" fill="white" />
                        <path d="M16.0931 7.66202C16.0931 9.33037 14.7258 10.6898 13.0479 10.6898C11.3699 10.6898 10.0027 9.33037 10.0027 7.66202C10.0027 5.99367 11.3699 4.63428 13.0479 4.63428C14.6637 4.63428 16.0931 5.99367 16.0931 7.66202Z" fill="white" />
                        <path d="M12.9857 12.2961C10.4377 12.2961 8.38685 14.3352 8.32471 16.8687H17.5846C17.6467 14.3352 15.5337 12.2961 12.9857 12.2961Z" fill="white" />
                        <path
                          d="M20.3816 30.4629H5.65278C4.96917 30.4629 4.40985 29.9068 4.40985 29.2271V22.7391H4.22341C3.53979 22.7391 2.98047 22.183 2.98047 21.5033V19.217C2.98047 18.5373 3.53979 17.9812 4.22341 17.9812H21.811C22.4946 17.9812 23.0539 18.5373 23.0539 19.217V21.5033C23.0539 22.183 22.4946 22.7391 21.811 22.7391H21.6245V29.2889C21.6245 29.9686 21.0652 30.4629 20.3816 30.4629ZM6.21211 28.7328H19.8223V21.874C19.8223 21.3797 20.1952 21.0089 20.6923 21.0089H21.2517V19.7731H4.78273V21.0089H5.34205C5.83923 21.0089 6.21211 21.3797 6.21211 21.874V28.7328Z"
                          fill="white"
                        />
                        <path d="M53.1949 26.5081H28.1497C27.4661 26.5081 26.9067 25.952 26.9067 25.2723V6.11716C26.9067 5.43746 27.4661 4.88135 28.1497 4.88135H41.6356C48.7203 4.88135 54.5 10.6279 54.5 17.672V25.2723C54.5 25.952 53.8785 26.5081 53.1949 26.5081ZM28.6469 24.7162H52.6977V17.6102C52.6977 11.5547 47.726 6.5497 41.6356 6.5497H28.6469V24.7162Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1081">
                          <rect width="54" height="49" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'SUM'}
                  subtitle={'Salón de usos múltiples adaptable para cursos, workshops, eventos, desde 10 a 150 personas.'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="55" height="51" viewBox="0 0 55 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1082)">
                        <path d="M46.4174 46.41C46.4174 20.7825 25.8555 0 0.5 0V46.41H46.4174Z" fill="#FF972F" />
                        <path d="M30.0813 44.4341C31.9105 44.4341 33.3611 45.9003 33.3611 47.7491C33.3611 49.5978 31.9105 51.0641 30.0813 51.0641C28.2522 51.0641 26.8015 49.5978 26.8015 47.7491C26.8015 45.9003 28.2522 44.4341 30.0813 44.4341Z" fill="white" />
                        <path d="M53.5447 23.2048C53.0401 23.2048 52.4725 23.0136 52.094 22.5673C46.3544 16.3198 38.5333 12.8773 30.1445 12.8773C21.7557 12.8773 13.9977 16.3198 8.25802 22.5673C7.50114 23.3961 6.23968 23.3961 5.4828 22.6948C4.66284 21.9298 4.66284 20.6548 5.35665 19.8898C11.8532 12.7498 20.6835 8.86108 30.1445 8.86108C39.6055 8.86108 48.4358 12.7498 54.9323 19.8261C55.6892 20.6548 55.6261 21.9298 54.8062 22.6311C54.4908 23.0136 53.9862 23.2048 53.5447 23.2048Z" fill="white" />
                        <path d="M46.2913 31.4928C45.7867 31.4928 45.2822 31.3016 44.9037 30.9191C40.867 26.7753 35.6319 24.4803 30.1445 24.4803C24.7202 24.4803 19.4851 26.7753 15.3854 30.9191C14.6285 31.6841 13.367 31.6841 12.6101 30.9191C11.8533 30.1541 11.8533 28.8791 12.6101 28.1141C17.4037 23.2053 23.648 20.5278 30.1445 20.5278C36.6411 20.5278 42.8854 23.2053 47.6789 28.1141C48.4358 28.8791 48.4358 30.1541 47.6789 30.9191C47.3005 31.3016 46.7959 31.4928 46.2913 31.4928Z" fill="white" />
                        <path
                          d="M21.7558 39.7801C21.2512 39.7801 20.7466 39.5888 20.3682 39.2063C19.6113 38.4413 19.6113 37.1663 20.3682 36.4013C22.9542 33.8513 26.6125 32.1938 30.0184 32.1938H30.1446C33.4875 32.1938 37.2088 33.7876 39.7948 36.4013C40.5517 37.1663 40.5517 38.4413 39.7948 39.2063C39.0379 39.9713 37.7765 39.9713 37.0196 39.2063C35.1904 37.3576 32.4783 36.2101 30.1446 36.2101H30.0184C27.6847 36.2101 25.0356 37.4213 23.1434 39.2063C22.765 39.5888 22.2604 39.7801 21.7558 39.7801Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1082">
                          <rect width="55" height="51" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Tecnología'}
                  subtitle={'WiFi de alta velocidad + Back Up'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="74" height="78" viewBox="0 0 74 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1075)">
                        <path d="M0 24.0703C0 53.8911 24.124 78.0742 53.872 78.0742V24.0703H0Z" fill="#FF972F" />
                        <path d="M50.394 25.2569C50.32 25.2569 50.172 25.2569 50.098 25.1827L33.078 17.9871C32.708 17.8388 32.486 17.3195 32.634 16.9486C32.782 16.5777 33.3 16.3551 33.67 16.5035L50.69 23.6991C51.06 23.8474 51.282 24.3667 51.134 24.7376C50.986 25.1085 50.69 25.2569 50.394 25.2569Z" fill="white" />
                        <path d="M33.3741 37.8678C32.9301 37.8678 32.5601 37.4969 32.5601 37.0518V25.9246C32.5601 25.4795 32.9301 25.1086 33.3741 25.1086C33.8181 25.1086 34.1881 25.4795 34.1881 25.9246V37.0518C34.1881 37.4969 33.8181 37.8678 33.3741 37.8678Z" fill="white" />
                        <path d="M50.3941 38.7582C49.9501 38.7582 49.5801 38.3873 49.5801 37.9422V24.4413C49.5801 24.1445 49.8021 23.8478 50.0981 23.6994L67.1181 16.5039C67.4881 16.3555 68.0061 16.5039 68.1541 16.949C68.3021 17.3199 68.1541 17.8391 67.7101 17.9875L51.2081 24.9605V37.9422C51.2081 38.3873 50.8381 38.7582 50.3941 38.7582Z" fill="white" />
                        <path d="M67.414 18.0618C67.34 18.0618 67.192 18.0618 67.118 17.9876L50.098 10.7921C49.728 10.6437 49.506 10.1244 49.654 9.75352C49.802 9.38262 50.32 9.16007 50.69 9.30843L67.71 16.504C68.08 16.6524 68.302 17.1716 68.154 17.5425C68.006 17.8393 67.71 18.0618 67.414 18.0618Z" fill="white" />
                        <path d="M33.3739 18.0614C33.0779 18.0614 32.7819 17.9131 32.6339 17.5422C32.4859 17.1713 32.6339 16.652 33.0779 16.5036L50.0979 9.30808C50.5419 9.15971 50.9859 9.30808 51.1339 9.75316C51.2819 10.1241 51.1339 10.6433 50.6899 10.7917L33.6699 17.9873C33.5959 18.0614 33.5219 18.0614 33.3739 18.0614Z" fill="white" />
                        <path d="M45.7322 31.1172L28.7122 23.9217L33.3742 17.2454L50.3942 24.4409L45.7322 31.1172Z" fill="white" />
                        <path
                          d="M45.7319 31.9337C45.6579 31.9337 45.5099 31.9337 45.4359 31.8595L28.4159 24.6639C28.1939 24.5897 28.0459 24.3672 27.9719 24.1447C27.8979 23.9221 27.9719 23.6996 28.1199 23.477L32.7819 16.8007C33.0039 16.504 33.3739 16.3556 33.7439 16.504L50.7639 23.6996C50.9859 23.7738 51.1339 23.9963 51.2079 24.2188C51.2819 24.4414 51.2079 24.6639 51.0599 24.8865L46.3979 31.5628C46.2499 31.7853 45.9539 31.9337 45.7319 31.9337ZM29.9699 23.5512L45.4359 30.0792L49.1359 24.7381L33.6699 18.2102L29.9699 23.5512Z"
                          fill="white"
                        />
                        <path d="M50.394 24.4409L55.056 31.1172L72.076 23.9217L67.414 17.2454" fill="white" />
                        <path
                          d="M55.0559 31.9333C54.8339 31.9333 54.5379 31.785 54.3899 31.5624L49.7279 24.8861C49.5059 24.5152 49.5799 23.996 49.9499 23.7734C50.3199 23.5509 50.8379 23.6251 51.0599 23.996L55.3519 30.153L70.8179 23.6251L66.7479 17.7648C66.5259 17.3938 66.5999 16.8746 66.9699 16.652C67.3399 16.4295 67.8579 16.5037 68.0799 16.8746L72.7419 23.5509C72.8899 23.7734 72.8899 23.996 72.8899 24.2185C72.8159 24.4411 72.6679 24.6636 72.4459 24.7378L55.4259 31.9333C55.2779 31.9333 55.2039 31.9333 55.0559 31.9333Z"
                          fill="white"
                        />
                        <path d="M14.948 51.072L20.128 45.8052L33.078 58.861L27.898 64.1279L14.948 51.072Z" fill="white" />
                        <path d="M27.8979 64.7218C27.7499 64.7218 27.6019 64.6476 27.4539 64.5734L14.5039 51.4434C14.2819 51.2208 14.2819 50.8499 14.5039 50.6274L19.6839 45.3605C19.9059 45.138 20.2759 45.138 20.4979 45.3605L33.4479 58.4164C33.6699 58.6389 33.6699 59.0098 33.4479 59.2324L28.2679 64.4992C28.1939 64.6476 28.0459 64.7218 27.8979 64.7218ZM15.7619 51.0725L27.8979 63.3123L32.2639 58.9357L20.1279 46.6216L15.7619 51.0725Z" fill="white" />
                        <path
                          d="M31.746 58.3419C31.524 58.3419 31.302 58.2677 31.154 58.1193L20.794 47.6598C20.498 47.363 20.498 46.8438 20.794 46.5471L30.71 36.5326C30.858 36.3842 31.08 36.3101 31.302 36.3101H48.47C50.246 36.3101 51.726 37.7937 51.726 39.574V40.8351C51.726 41.4286 51.578 42.022 51.282 42.5413H57.276C57.72 42.5413 58.164 42.3929 58.46 42.022L67.044 33.3428C68.228 32.1559 70.448 32.1559 71.632 33.3428L73.038 34.8264C73.63 35.4199 74 36.2359 74 37.126C74 38.0162 73.63 38.8322 73.038 39.4257L59.57 52.9266C58.978 53.5201 58.164 53.891 57.276 53.891H35.446L32.412 57.9709C32.264 58.1935 32.042 58.3419 31.746 58.3419C31.82 58.3419 31.82 58.3419 31.746 58.3419ZM22.57 47.0663L31.672 56.2648L34.41 52.5557C34.558 52.3332 34.78 52.259 35.076 52.259H57.35C57.794 52.259 58.238 52.1106 58.534 51.7397L72.002 38.1646C72.298 37.8679 72.52 37.4228 72.52 36.9777C72.52 36.5326 72.372 36.0875 72.002 35.7908L70.522 34.3072C69.93 33.7137 68.82 33.7137 68.228 34.3072L59.57 43.0605C58.978 43.654 58.164 44.0249 57.276 44.0249H48.544C48.1 44.0249 47.73 43.654 47.73 43.2089C47.73 42.7638 48.1 42.3929 48.544 42.3929C49.432 42.3929 50.172 41.6511 50.172 40.6867V39.4257C50.172 38.5355 49.432 37.7195 48.544 37.7195H31.746L22.57 47.0663Z"
                          fill="white"
                        />
                        <path d="M48.5441 44.0253H40.4041C39.9601 44.0253 39.5901 43.6544 39.5901 43.2093C39.5901 42.7642 39.9601 42.3933 40.4041 42.3933H48.5441C48.9881 42.3933 49.3581 42.7642 49.3581 43.2093C49.2841 43.6544 48.9881 44.0253 48.5441 44.0253Z" fill="white" />
                        <path d="M51.6521 14.1303C51.5041 13.982 51.2081 13.982 50.9861 14.1303L50.0981 15.0205C49.9501 15.1688 49.9501 15.4656 50.0981 15.6881C50.2461 15.8365 50.5421 15.8365 50.7641 15.6881L51.6521 14.7979C51.8001 14.5754 51.8001 14.2787 51.6521 14.1303Z" fill="white" />
                        <path d="M49.2099 16.578C49.0619 16.4296 48.7659 16.3554 48.5439 16.578L47.6559 17.4681C47.5079 17.6165 47.5079 17.9874 47.6559 18.1358C47.8039 18.2841 48.0999 18.2841 48.3219 18.1358L49.2099 17.2456C49.4319 17.023 49.4319 16.7263 49.2099 16.578Z" fill="white" />
                        <path d="M51.6521 17.4681L50.7641 16.578C50.6161 16.4296 50.3201 16.3554 50.0981 16.578C49.9501 16.7263 49.9501 17.023 50.0981 17.2456L50.9861 18.1358C51.1341 18.2841 51.4301 18.2841 51.6521 18.1358C51.8001 17.9132 51.8001 17.6165 51.6521 17.4681Z" fill="white" />
                        <path d="M49.2099 15.0205L48.3219 14.1303C48.1739 13.982 47.8779 13.982 47.6559 14.1303C47.5079 14.2787 47.5079 14.5754 47.6559 14.7979L48.5439 15.6881C48.6919 15.8365 48.9879 15.8365 49.2099 15.6881C49.4319 15.5398 49.4319 15.243 49.2099 15.0205Z" fill="white" />
                        <path d="M45.7319 5.15424C45.5839 5.00588 45.4359 5.00588 45.3619 5.15424L44.8439 5.67351C44.6959 5.82187 44.6959 5.97023 44.8439 6.1186C44.9179 6.26696 45.1399 6.26696 45.2139 6.1186L45.7319 5.59933C45.8799 5.45096 45.8799 5.3026 45.7319 5.15424Z" fill="white" />
                        <path d="M44.2519 6.63788C44.1039 6.48952 43.9559 6.48952 43.8819 6.63788L43.3639 7.15715C43.2159 7.30551 43.2159 7.45388 43.3639 7.60224C43.5119 7.7506 43.6599 7.7506 43.7339 7.60224L44.2519 7.08297C44.3999 6.93461 44.3999 6.78625 44.2519 6.63788Z" fill="white" />
                        <path d="M45.7319 7.23137L45.2139 6.7121C45.0659 6.56374 44.9179 6.56374 44.8439 6.7121C44.6959 6.86046 44.6959 7.00883 44.8439 7.15719L45.3619 7.67646C45.5099 7.82482 45.6579 7.82482 45.7319 7.67646C45.8799 7.52809 45.8799 7.30555 45.7319 7.23137Z" fill="white" />
                        <path d="M44.2519 5.74773L43.7339 5.22846C43.5859 5.0801 43.4379 5.0801 43.3639 5.22846C43.2159 5.37682 43.2159 5.52518 43.3639 5.67355L43.8819 6.19281C44.0299 6.34118 44.1779 6.34118 44.2519 6.19281C44.3999 6.04445 44.3999 5.82191 44.2519 5.74773Z" fill="white" />
                        <path d="M57.498 3.07706C57.72 3.29961 58.09 3.29961 58.312 3.07706L59.422 1.96434C59.644 1.7418 59.644 1.3709 59.422 1.14835C59.2 0.925809 58.83 0.925809 58.608 1.14835L57.498 2.26107C57.276 2.48361 57.276 2.85452 57.498 3.07706Z" fill="white" />
                        <path d="M54.5381 6.04435C54.7601 6.26689 55.1301 6.26689 55.3521 6.04435L56.4621 4.93163C56.6841 4.70909 56.6841 4.33818 56.4621 4.11564C56.2401 3.89309 55.8701 3.89309 55.6481 4.11564L54.5381 5.22835C54.3161 5.4509 54.3161 5.8218 54.5381 6.04435Z" fill="white" />
                        <path d="M57.498 4.93163L58.608 6.04435C58.83 6.26689 59.2 6.26689 59.422 6.04435C59.644 5.8218 59.644 5.4509 59.422 5.22835L58.312 4.11564C58.09 3.89309 57.72 3.89309 57.498 4.11564C57.276 4.33818 57.276 4.70909 57.498 4.93163Z" fill="white" />
                        <path d="M54.5381 1.96434L55.6481 3.07706C55.8701 3.29961 56.2401 3.29961 56.4621 3.07706C56.6841 2.85452 56.6841 2.48361 56.4621 2.26107L55.3521 1.14835C55.1301 0.925809 54.7601 0.925809 54.5381 1.14835C54.3161 1.3709 54.3161 1.7418 54.5381 1.96434Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1075">
                          <rect width="74" height="78" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Market Vida'}
                  subtitle={'Tenemos todo lo que necesitas para acompañarte en tu día como en casa. Sector autogestionable, elegís el producto y dejas el pago en su frasco.'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="66" height="55" viewBox="0 0 66 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1024)">
                        <path d="M0 6.63794C0 33.3793 21.7666 55 48.6885 55V6.63794H0Z" fill="#FF972F" />
                        <path
                          d="M54.0346 41.4717C49.5158 41.4717 45.8244 37.8683 45.7607 33.3798V33.3165V25.8568C45.7607 25.4775 46.079 25.0981 46.5245 25.0981H61.4811C63.9633 25.0981 65.9999 27.1211 65.9999 29.5866C65.9999 31.7993 64.3451 33.6326 62.2448 34.0119C61.863 38.1211 58.4261 41.3453 54.2892 41.4085C54.1619 41.4717 54.0983 41.4717 54.0346 41.4717ZM47.2882 33.3165C47.2882 36.9832 50.2159 39.9545 53.8437 40.0177C53.9073 40.0177 53.971 40.0177 54.0346 40.0177C57.726 40.0177 60.7174 37.0464 60.781 33.3798C60.781 33.0004 61.0992 32.6211 61.5447 32.6211C63.1995 32.6211 64.5361 31.2935 64.5361 29.6499C64.5361 28.0062 63.1995 26.6786 61.5447 26.6786H47.2882V33.3165Z"
                          fill="white"
                        />
                        <path d="M50.916 19.408V23.6436C53.2709 23.6436 55.1802 21.7471 55.1802 19.408V15.1724C52.8254 15.1724 50.916 17.0689 50.916 19.408Z" fill="white" />
                        <path d="M50.916 10.937V15.1727C53.2709 15.1727 55.1802 13.2761 55.1802 10.937V6.70142C52.8254 6.70142 50.916 8.59797 50.916 10.937Z" fill="white" />
                        <path d="M56.5803 15.1724V19.408C58.9352 19.408 60.8445 17.5115 60.8445 15.1724V10.9368C58.4897 10.9368 56.5803 12.8333 56.5803 15.1724Z" fill="white" />
                        <path
                          d="M32.2046 22.7586H17.8208C16.8025 22.7586 15.8478 22.3161 15.1477 21.6207C14.4476 20.9253 14.1294 19.9138 14.193 18.9023L15.4659 3.35057C15.5932 1.45402 17.1843 0 19.0937 0H30.9317C32.841 0 34.3685 1.45402 34.5595 3.28736L35.8324 18.8391C35.896 19.8506 35.5778 20.8621 34.8777 21.5575C34.1776 22.3793 33.1593 22.7586 32.2046 22.7586ZM30.868 1.45402H19.0937C17.9481 1.45402 17.057 2.27586 16.9298 3.41379L15.6569 18.9655C15.5932 19.5345 15.7841 20.1667 16.2297 20.6092C16.6115 21.0517 17.1843 21.3046 17.8208 21.3046H32.2046C32.7774 21.3046 33.3502 21.0517 33.7957 20.6092C34.1776 20.1667 34.4322 19.5977 34.3685 18.9655L33.0956 3.41379C32.9047 2.33908 32.0137 1.51724 30.868 1.45402Z"
                          fill="white"
                        />
                        <path
                          d="M34.8775 31.7353H15.0839C13.6837 31.7353 12.6017 30.787 12.5381 29.5859V26.1089C12.5381 24.9077 13.6837 23.9595 15.0202 23.8962H34.8775C36.2777 23.8962 37.3597 24.9077 37.4233 26.0457V29.5227C37.4233 30.787 36.2777 31.7353 34.8775 31.7353ZM15.0839 25.4135C14.5111 25.4135 14.0656 25.7296 14.0656 26.1089V29.5859C14.0656 29.9652 14.5111 30.2813 15.0839 30.2813H34.9412C35.514 30.2813 35.9595 29.9652 35.9595 29.5859V26.1089C35.9595 25.7296 35.514 25.4135 34.9412 25.4135H15.0839Z"
                          fill="white"
                        />
                        <path d="M36.8508 28.5117H36.0234V27.2473H36.8508C37.9964 27.2473 38.8875 26.3623 38.8875 25.2243V22.822H40.1604V25.2243C40.224 27.0577 38.6965 28.5117 36.8508 28.5117Z" fill="white" />
                        <path
                          d="M39.5873 23.4541C38.5053 23.4541 37.487 22.822 37.0415 21.7472C36.596 20.7357 36.8506 19.5346 37.6143 18.776C38.378 18.0174 39.5873 17.7645 40.6056 18.207C41.6239 18.6495 42.324 19.5978 42.324 20.7357C42.324 22.253 41.0511 23.4541 39.5873 23.4541ZM39.5873 19.2817C39.0145 19.2817 38.4417 19.5978 38.2507 20.1668C37.9962 20.6725 38.1235 21.3047 38.569 21.7472C38.9508 22.1898 39.5873 22.3162 40.1601 22.0633C40.7329 21.8737 41.0511 21.3047 41.0511 20.7357C40.9875 19.9139 40.351 19.2817 39.5873 19.2817Z"
                          fill="white"
                        />
                        <path d="M13.9384 28.5117H13.111C11.2653 28.5117 9.80144 27.0577 9.73779 25.2243V22.822H11.0107V25.2243C11.0107 26.3623 11.9017 27.2473 13.0473 27.2473H13.8747V28.5117H13.9384Z" fill="white" />
                        <path
                          d="M10.4376 23.4541C9.35567 23.4541 8.33735 22.7587 7.89183 21.7472C7.44631 20.7357 7.70089 19.5346 8.46464 18.776C9.22838 18.0174 10.4376 17.7645 11.456 18.207C12.4743 18.6495 13.1744 19.5978 13.1744 20.7357C13.1744 21.4311 12.8561 22.1266 12.347 22.6955C11.8378 23.2013 11.1377 23.4541 10.4376 23.4541ZM10.4376 19.2817C9.86483 19.2817 9.35567 19.661 9.10109 20.1668C8.84651 20.6725 8.9738 21.3047 9.41931 21.7472C9.80118 22.1266 10.4376 22.253 11.0104 22.0633C11.5196 21.8737 11.9015 21.3047 11.9015 20.7357C11.9015 20.3564 11.7742 19.9771 11.456 19.7243C11.1377 19.4082 10.8195 19.2817 10.4376 19.2817Z"
                          fill="white"
                        />
                        <path d="M28.195 21.3674H26.9221V24.5916H28.195V21.3674Z" fill="white" />
                        <path d="M23.0395 21.3674H21.7666V24.5916H23.0395V21.3674Z" fill="white" />
                        <path d="M25.649 34.9597H24.3761C22.9122 34.9597 21.7666 33.8218 21.7666 32.3677V30.408H28.2584V32.3677C28.2584 33.7585 27.0491 34.9597 25.649 34.9597ZM23.0395 31.7355V32.3677C23.0395 33.0631 23.6123 33.6321 24.3124 33.6321H25.5853C26.2854 33.6321 26.8582 33.0631 26.8582 32.3677V31.7355H23.0395Z" fill="white" />
                        <path d="M35.2594 42.1664H33.9865V41.5342C33.9865 40.3962 33.0318 39.448 31.8862 39.448H18.2025C17.0569 39.448 16.1022 40.3962 16.1022 41.5342V42.1664H14.8293V41.5342C14.8293 39.7008 16.3568 38.1836 18.2025 38.1836H31.8862C33.7319 38.1836 35.2594 39.7008 35.2594 41.5342V42.1664Z" fill="white" />
                        <path
                          d="M34.623 45.8973C33.732 45.8973 32.9046 45.3916 32.5864 44.5697C32.2682 43.7479 32.4591 42.7996 33.0319 42.1674C33.6684 41.5352 34.623 41.3456 35.4504 41.7249C36.2778 42.041 36.787 42.8628 36.787 43.7479C36.8506 44.949 35.8323 45.8973 34.623 45.8973ZM34.623 42.7996C34.2412 42.7996 33.923 42.9893 33.7957 43.3686C33.6684 43.6847 33.732 44.064 33.9866 44.3168C34.2412 44.5697 34.623 44.6329 34.9413 44.5065C35.2595 44.3801 35.5141 44.064 35.5141 43.6847C35.5141 43.2421 35.1322 42.7996 34.623 42.7996Z"
                          fill="white"
                        />
                        <path
                          d="M25.0125 45.8973C24.1214 45.8973 23.294 45.3916 22.9758 44.5697C22.6576 43.7479 22.8485 42.7996 23.4213 42.1674C24.0578 41.5352 25.0125 41.3456 25.8398 41.7249C26.6672 42.041 27.1764 42.8628 27.1764 43.7479C27.24 44.949 26.2854 45.8973 25.0125 45.8973ZM25.0125 42.7996C24.6306 42.7996 24.3124 42.9893 24.1851 43.3686C24.0578 43.6847 24.1214 44.064 24.376 44.3168C24.6306 44.5697 25.0125 44.6329 25.3307 44.5065C25.6489 44.3801 25.9035 44.064 25.9035 43.6847C25.9671 43.2421 25.5216 42.7996 25.0125 42.7996Z"
                          fill="white"
                        />
                        <path
                          d="M15.4658 45.8973C14.5748 45.8973 13.7474 45.3916 13.4292 44.5697C13.111 43.7479 13.3019 42.7996 13.8747 42.1674C14.5111 41.5352 15.4658 41.3456 16.2932 41.7249C17.1206 42.041 17.6298 42.8628 17.6298 43.7479C17.6298 44.949 16.6751 45.8973 15.4658 45.8973ZM15.4658 42.7996C15.084 42.7996 14.7657 42.9893 14.6384 43.3686C14.5111 43.6847 14.5748 44.064 14.8294 44.3168C15.084 44.5697 15.4658 44.6329 15.784 44.5065C16.1023 44.3801 16.3569 44.064 16.3569 43.6847C16.3569 43.2421 15.975 42.7996 15.4658 42.7996Z"
                          fill="white"
                        />
                        <path d="M25.5852 34.2646H24.3123V42.1669H25.5852V34.2646Z" fill="white" />
                        <path d="M12.0925 20.7362C12.0925 21.6845 11.3288 22.3799 10.4377 22.3799C9.48305 22.3799 8.78296 21.6213 8.78296 20.7362C8.78296 19.788 9.5467 19.0926 10.4377 19.0926C11.3288 19.0293 12.0925 19.788 12.0925 20.7362Z" fill="white" />
                        <path d="M41.2422 20.7362C41.2422 21.6845 40.4784 22.3799 39.5874 22.3799C38.6327 22.3799 37.9326 21.6213 37.9326 20.7362C37.9326 19.788 38.6964 19.0926 39.5874 19.0926C40.4784 19.0293 41.2422 19.788 41.2422 20.7362Z" fill="white" />
                        <path d="M35.7049 43.7466C35.7049 44.3787 35.1958 44.8213 34.623 44.8213C33.9865 44.8213 33.541 44.3155 33.541 43.7466C33.541 43.1144 34.0502 42.6719 34.623 42.6719C35.2594 42.6086 35.7049 43.1144 35.7049 43.7466Z" fill="white" />
                        <path d="M26.1578 43.7466C26.1578 44.3787 25.6487 44.8213 25.0759 44.8213C24.4394 44.8213 23.9939 44.3155 23.9939 43.7466C23.9939 43.1144 24.5031 42.6719 25.0759 42.6719C25.6487 42.6086 26.1578 43.1144 26.1578 43.7466Z" fill="white" />
                        <path d="M16.5477 43.7466C16.5477 44.3787 16.0386 44.8213 15.4658 44.8213C14.8293 44.8213 14.3838 44.3155 14.3838 43.7466C14.3838 43.1144 14.8929 42.6719 15.4658 42.6719C16.0386 42.6086 16.5477 43.1144 16.5477 43.7466Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1024">
                          <rect width="66" height="55" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Equipamiento'}
                  subtitle={'Sillas ergométricas. Proyector y Tv. Lockers numerados. Cocinas e infusiones.'}
                  darkText={true}
                />
              </div>
            )}
            <div className="servicesDropdownMenu" onClick={() => setShowServicesEspacios((prevState) => !prevState)}>
              <button className="servicesDropdownMenuButton">Espacios</button>
              <p>
                {!showServicesEspacios ? (
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.31501 0.692295C8.39146 0.581261 8.49375 0.490475 8.61308 0.427757C8.73241 0.365039 8.8652 0.332269 9.00001 0.332269C9.13482 0.332269 9.2676 0.365039 9.38693 0.427757C9.50626 0.490475 9.60856 0.581261 9.68501 0.692295L17.185 11.5256C17.2718 11.6506 17.3227 11.7969 17.3322 11.9488C17.3417 12.1006 17.3094 12.2522 17.2387 12.387C17.1681 12.5217 17.0619 12.6346 16.9317 12.7132C16.8015 12.7919 16.6522 12.8334 16.5 12.8331H1.50001C1.34821 12.8325 1.19946 12.7905 1.06974 12.7117C0.940028 12.6328 0.834261 12.5201 0.763816 12.3856C0.693371 12.2512 0.660913 12.1 0.669933 11.9485C0.678953 11.797 0.729109 11.6508 0.815008 11.5256L8.31501 0.692295Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.31452 12.3077C8.39097 12.4187 8.49327 12.5095 8.6126 12.5722C8.73193 12.635 8.86471 12.6677 8.99952 12.6677C9.13433 12.6677 9.26711 12.635 9.38645 12.5722C9.50577 12.5095 9.60807 12.4187 9.68452 12.3077L17.1845 1.47437C17.2713 1.34942 17.3222 1.20306 17.3317 1.05121C17.3412 0.899354 17.3089 0.747806 17.2383 0.613032C17.1677 0.478257 17.0615 0.36541 16.9312 0.286752C16.801 0.208093 16.6517 0.166631 16.4995 0.166871H1.49952C1.34772 0.167498 1.19897 0.209493 1.06925 0.28834C0.939539 0.367187 0.833772 0.479903 0.763327 0.614365C0.692882 0.748828 0.660424 0.89995 0.669444 1.05148C0.678464 1.20301 0.728621 1.34921 0.81452 1.47437L8.31452 12.3077Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                )}
              </p>
            </div>
            {showServicesEspacios && (
              <div className="servicesSection">
                <Service
                  svg={
                    <svg width="76" height="68" viewBox="0 0 76 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1073)">
                        <path d="M0 10.7659C0 42.1866 25.6746 67.667 57.3347 67.667V10.7659H0Z" fill="#FF972F" />
                        <path d="M42.6858 49.0648H25.3594C25.0444 49.0648 24.8081 48.9084 24.6506 48.674C24.4931 48.4395 24.4931 48.1268 24.6506 47.8142L31.1874 36.559C31.3449 36.3245 31.5812 36.1682 31.8962 36.1682H42.6071C43.0796 36.1682 43.4734 36.559 43.4734 37.028V48.2832C43.5522 48.7521 43.1584 49.0648 42.6858 49.0648ZM26.8558 47.4234H41.8195V37.8096H32.4475L26.8558 47.4234Z" fill="white" />
                        <path d="M25.4383 48.2826L18.8228 36.9493L25.5958 25.3815L23.7057 24.2872L34.4953 21.3953L37.3305 32.1033L35.4404 31.0091L29.9274 40.4665L25.4383 48.2826Z" fill="white" />
                        <path
                          d="M25.4386 49.0646C25.1236 49.0646 24.8873 48.9082 24.7298 48.6738L18.1142 37.3404C17.9567 37.1059 17.9567 36.7933 18.1142 36.4807L24.4147 25.6163L23.2334 24.9128C22.9184 24.7565 22.7609 24.4439 22.8396 24.0531C22.9184 23.7404 23.1546 23.4278 23.4697 23.3496L34.2593 20.4577C34.4956 20.3795 34.7318 20.4577 34.8894 20.5358C35.0469 20.614 35.2044 20.8485 35.2831 21.083L38.1971 31.791C38.2759 32.1036 38.1971 32.4944 37.8821 32.6508C37.6458 32.8853 37.2521 32.8853 36.937 32.7289L35.7557 32.0255L26.1474 48.6738C25.9899 48.9082 25.7536 49.0646 25.4386 49.0646ZM19.8469 36.9496L25.4386 46.5634L34.7318 30.6186C34.8106 30.4623 35.0469 30.3059 35.2831 30.2278C35.5194 30.1496 35.7557 30.2278 35.9132 30.3059L36.0707 30.3841L33.8655 22.4117L25.8324 24.522L25.9899 24.6784C26.1474 24.7565 26.3049 24.991 26.3837 25.2255C26.4624 25.46 26.3837 25.6944 26.3049 25.8508L19.8469 36.9496Z"
                          fill="white"
                        />
                        <path d="M75.2124 37.8095H62.06C61.745 37.8095 61.5087 37.6532 61.3512 37.4187L55.9958 28.1957C55.7595 27.8049 55.917 27.2578 56.3108 27.0233L66.1554 21.3957C66.3129 21.3175 66.5491 21.2394 66.7854 21.3175C67.0217 21.3957 67.1792 21.552 67.3367 21.7083L75.9999 36.5589C76.1574 36.7934 76.1574 37.106 75.9999 37.4187C75.7637 37.6532 75.4486 37.8095 75.2124 37.8095ZM62.5326 36.0899H73.716L66.2341 23.1934L57.8859 27.9612L62.5326 36.0899Z" fill="white" />
                        <path d="M75.2125 36.9495L68.5969 48.2828H55.1296V50.4713L47.2539 42.5771L55.1296 34.761V36.9495H75.2125Z" fill="white" />
                        <path
                          d="M55.1294 51.3307C54.8932 51.3307 54.6569 51.2526 54.4994 51.0963L46.6237 43.202C46.3087 42.8894 46.3087 42.3422 46.6237 42.0296L54.4994 34.1354C54.7356 33.9009 55.1294 33.8227 55.4444 33.979C55.7595 34.1354 55.9957 34.448 55.9957 34.7606V36.1675H75.1336C75.4486 36.1675 75.6849 36.3239 75.8424 36.5583C75.9999 36.7928 75.9999 37.1055 75.8424 37.4181L69.3056 48.7514C69.1481 48.9859 68.9118 49.1422 68.5968 49.1422H55.9957V50.471C55.9957 50.7836 55.7595 51.0963 55.4444 51.2526C55.3657 51.3307 55.2869 51.3307 55.1294 51.3307ZM48.4351 42.5767L54.2631 48.4388V48.2825C54.2631 48.048 54.3419 47.8135 54.4994 47.6572C54.6569 47.5009 54.8932 47.4227 55.1294 47.4227H68.1242L73.716 37.8089H55.1294C54.6569 37.8089 54.2631 37.4181 54.2631 36.9491V36.7928L48.4351 42.5767Z"
                          fill="white"
                        />
                        <path
                          d="M41.7408 21.8645C41.5833 21.8645 41.4258 21.8645 41.347 21.7863L31.5025 16.1587C31.1087 15.9242 30.9512 15.3771 31.1874 14.9863L39.8506 0.135714C40.0082 -0.17693 40.2444 -0.333252 40.5594 -0.333252C40.8745 -0.333252 41.1107 -0.17693 41.2683 0.0575527L47.8838 11.3909C48.0413 11.6254 48.0413 11.938 47.8838 12.2507L42.5284 21.4736C42.4496 21.63 42.2133 21.7863 41.9771 21.8645C41.8983 21.8645 41.8196 21.8645 41.7408 21.8645ZM33.0776 15.0645L41.4258 19.8323L46.1512 11.7817L40.5594 2.1679L33.0776 15.0645Z"
                          fill="white"
                        />
                        <path d="M40.5596 0.526611H53.7119L60.4062 12.0944L62.3751 11.0002L59.4611 21.7082L48.6715 18.8163L50.5616 17.722L45.1274 8.26454L40.5596 0.526611Z" fill="white" />
                        <path
                          d="M59.4612 22.5679C59.3824 22.5679 59.3036 22.5679 59.2249 22.5679L48.4353 19.6759C48.1202 19.5978 47.884 19.2851 47.8052 18.9725C47.7264 18.6599 47.9627 18.269 48.199 18.1127L49.3803 17.4093L39.8508 0.917323C39.6933 0.68284 39.6933 0.370196 39.8508 0.0575526C40.0083 -0.17693 40.2446 -0.333252 40.5596 -0.333252H53.7119C54.027 -0.333252 54.2632 -0.17693 54.4207 0.0575526L60.7213 10.9219L61.9026 10.2185C62.2176 10.0622 62.5327 10.0622 62.8477 10.2966C63.084 10.5311 63.2415 10.8438 63.1627 11.1564L60.2487 21.8644C60.17 22.0989 60.0125 22.2553 59.8549 22.4116C59.7762 22.4897 59.6187 22.5679 59.4612 22.5679ZM50.8767 18.5817L58.9099 20.692L61.0363 12.7196L60.8788 12.7978C60.6425 12.9541 60.4062 12.9541 60.17 12.8759C59.9337 12.7978 59.7762 12.6415 59.6187 12.4851L53.2394 1.38629H42.056L51.3492 17.3311C51.5855 17.7219 51.428 18.269 51.0342 18.5035L50.8767 18.5817Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1073">
                          <rect width="76" height="68" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Espacio verde'}
                  subtitle={'Patio de 500 mt2 rodeado de naturaleza. Quincho con parrilla y ducha.'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="44" height="59" viewBox="0 0 44 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1079)">
                        <path d="M44 59.0002C44 34.8262 24.3026 15.2332 0 15.2332V59.0002H44Z" fill="#FF972F" />
                        <path d="M22.2498 14.0739C26.1893 14.0739 29.352 10.928 29.352 7.00936C29.352 3.14593 26.1338 0 22.2498 0C18.3104 0 15.1477 3.14593 15.1477 7.06455C15.1477 10.928 18.3104 14.0739 22.2498 14.0739Z" fill="white" />
                        <path d="M38.6734 11.1491C37.5637 9.93488 35.6772 9.87969 34.4565 10.9835L27.7983 17.1098H16.9786L10.3203 10.9835C9.09966 9.87969 7.21315 9.93488 6.10344 11.1491C4.99373 12.3633 5.04922 14.2398 6.2699 15.3437L13.8159 22.2426V43.7674H13.8714V51.715C18.3102 51.715 21.8613 48.1276 21.8613 43.7674C21.8613 48.1276 25.4124 51.715 29.8512 51.715V43.7674V43.4363V23.3465L38.507 15.3437C39.7276 14.2398 39.7831 12.3633 38.6734 11.1491Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1079">
                          <rect width="44" height="59" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Espacio libre de stress'}
                  subtitle={'Todos los gastos están incluidos.'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="76" height="56" viewBox="0 0 76 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50.1159 1.10645C22.442 1.10645 0 23.6447 0 51.4373H50.1159V1.10645Z" fill="#FF972F" />
                      <path
                        d="M41.2357 24.0593C41.2357 19.0815 38.3444 14.7259 34.2139 12.6519C35.3842 11.3383 36.1415 9.54074 36.1415 7.60494C36.1415 3.38765 32.7683 0 28.569 0C24.3697 0 20.9965 3.38765 20.9965 7.60494C20.9965 9.54074 21.7538 11.3383 22.9241 12.6519C18.7936 14.7259 15.9023 19.0815 15.9023 24.0593C15.9023 30.7654 21.0654 36.2963 27.6741 36.7802V28.2074L21.9603 22.4691C21.6161 22.1235 21.6161 21.5012 21.9603 21.1556C22.3045 20.8099 22.9241 20.8099 23.2683 21.1556L27.6741 25.5802V7.95062C27.6741 7.39753 28.0871 6.98272 28.6379 6.98272C29.1886 6.98272 29.6016 7.39753 29.6016 7.95062V25.8568L32.4241 23.5062C32.8371 23.1605 33.3879 23.2296 33.7321 23.6444C34.0763 24.0593 34.0074 24.6123 33.5944 24.958L29.6016 28.2765V36.7802C36.0038 36.2963 41.2357 30.8346 41.2357 24.0593Z"
                        fill="white"
                      />
                      <path d="M27.5361 36.7805V45.6299C27.5361 46.183 27.9492 46.5978 28.4999 46.5978C29.0506 46.5978 29.4637 46.183 29.4637 45.6299V36.7805C29.1195 36.7805 28.8441 36.8497 28.4999 36.8497C28.1557 36.8497 27.8803 36.8497 27.5361 36.7805Z" fill="white" />
                      <path
                        d="M68.3585 42.7263H39.239C35.0397 42.7263 31.5977 39.2695 31.5977 35.0523V34.3609C31.5977 30.9041 33.9382 27.8621 37.1737 26.9634C36.4853 25.5806 36.1411 24.0597 36.1411 22.4695C36.1411 17.4918 39.652 13.2053 44.402 12.2374C44.815 7.39793 48.8078 3.59546 53.7643 3.59546C58.652 3.59546 62.7136 7.39793 63.1266 12.2374C67.8766 13.2745 71.3875 17.4918 71.3875 22.4695C71.3875 24.0597 71.0433 25.5806 70.3549 26.9634C73.5904 27.8621 75.931 30.9041 75.931 34.3609V35.0523C75.9998 39.2695 72.5578 42.7263 68.3585 42.7263ZM53.7643 5.53126C49.7027 5.53126 46.3295 8.84978 46.3295 12.9979C46.3295 13.4819 45.9853 14.035 45.5035 14.035C41.3042 14.5881 38.1375 18.1831 38.1375 22.4695C38.1375 24.1288 38.6194 25.7189 39.5143 27.1708C39.7208 27.4473 39.7208 27.8621 39.5832 28.1387C39.4455 28.4844 39.1013 28.6918 38.7571 28.6918C35.7969 28.8992 33.5252 31.3881 33.5252 34.3609V35.0523C33.5252 38.2325 36.0723 40.7905 39.1701 40.7905H68.2897C71.3875 40.7905 73.9346 38.2325 73.9346 35.0523V34.3609C73.9346 31.3881 71.6629 28.8992 68.7027 28.6918C68.3585 28.6918 68.0143 28.4844 67.8766 28.1387C67.739 27.793 67.739 27.4473 67.9455 27.1708C68.8404 25.7881 69.3223 24.1979 69.3223 22.4695C69.3223 18.1831 66.1556 14.5881 61.9564 14.035C61.4745 13.9658 61.0614 13.551 61.0614 13.0671V12.9979C61.1991 8.84978 57.8259 5.53126 53.7643 5.53126Z"
                        fill="white"
                      />
                      <path d="M53.7643 55.9998C53.2136 55.9998 52.8005 55.585 52.8005 55.0319V14.7257C52.8005 14.1726 53.2136 13.7578 53.7643 13.7578C54.315 13.7578 54.7281 14.1726 54.7281 14.7257V55.101C54.6592 55.585 54.2462 55.9998 53.7643 55.9998Z" fill="white" />
                      <path d="M53.7645 37.6795C53.558 37.6795 53.2826 37.6104 53.0761 37.403L46.8805 31.1807C46.5363 30.8351 46.5363 30.2128 46.8805 29.8672C47.2247 29.5215 47.8442 29.5215 48.1884 29.8672L54.3841 36.0894C54.7283 36.4351 54.7283 37.0573 54.3841 37.403C54.2464 37.5412 53.971 37.6795 53.7645 37.6795Z" fill="white" />
                      <path d="M53.7647 32.079C53.5582 32.079 53.2828 32.0098 53.0763 31.8024C52.7321 31.4568 52.7321 30.8345 53.0763 30.4889L58.5835 24.958C58.9277 24.6123 59.5473 24.6123 59.8915 24.958C60.2357 25.3037 60.2357 25.9259 59.8915 26.2716L54.3842 31.8024C54.2466 32.0098 53.9712 32.079 53.7647 32.079Z" fill="white" />
                      <path d="M53.7646 26.548C53.4204 26.548 53.0762 26.3406 52.9386 26.0641C52.5255 25.5801 49.9784 23.0912 47.7067 20.8789C47.3625 20.5332 47.2936 19.911 47.7067 19.5653C48.0509 19.2196 48.6704 19.1505 49.0146 19.5653C54.7284 25.027 54.7284 25.1653 54.7284 25.7184C54.6596 26.1332 54.2465 26.548 53.7646 26.548Z" fill="white" />
                    </svg>
                  }
                  title={'Eco'}
                  subtitle={'Hábitos y tips para cuidar el planeta'}
                  darkText={true}
                />
              </div>
            )}
            <div className="servicesDropdownMenu" onClick={() => setShowServicesServicios((prevState) => !prevState)}>
              <button className="servicesDropdownMenuButton">Servicios</button>
              <p>
                {!showServicesSalas ? (
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.31501 0.692295C8.39146 0.581261 8.49375 0.490475 8.61308 0.427757C8.73241 0.365039 8.8652 0.332269 9.00001 0.332269C9.13482 0.332269 9.2676 0.365039 9.38693 0.427757C9.50626 0.490475 9.60856 0.581261 9.68501 0.692295L17.185 11.5256C17.2718 11.6506 17.3227 11.7969 17.3322 11.9488C17.3417 12.1006 17.3094 12.2522 17.2387 12.387C17.1681 12.5217 17.0619 12.6346 16.9317 12.7132C16.8015 12.7919 16.6522 12.8334 16.5 12.8331H1.50001C1.34821 12.8325 1.19946 12.7905 1.06974 12.7117C0.940028 12.6328 0.834261 12.5201 0.763816 12.3856C0.693371 12.2512 0.660913 12.1 0.669933 11.9485C0.678953 11.797 0.729109 11.6508 0.815008 11.5256L8.31501 0.692295Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                ) : (
                  <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.31452 12.3077C8.39097 12.4187 8.49327 12.5095 8.6126 12.5722C8.73193 12.635 8.86471 12.6677 8.99952 12.6677C9.13433 12.6677 9.26711 12.635 9.38645 12.5722C9.50577 12.5095 9.60807 12.4187 9.68452 12.3077L17.1845 1.47437C17.2713 1.34942 17.3222 1.20306 17.3317 1.05121C17.3412 0.899354 17.3089 0.747806 17.2383 0.613032C17.1677 0.478257 17.0615 0.36541 16.9312 0.286752C16.801 0.208093 16.6517 0.166631 16.4995 0.166871H1.49952C1.34772 0.167498 1.19897 0.209493 1.06925 0.28834C0.939539 0.367187 0.833772 0.479903 0.763327 0.614365C0.692882 0.748828 0.660424 0.89995 0.669444 1.05148C0.678464 1.20301 0.728621 1.34921 0.81452 1.47437L8.31452 12.3077Z"
                      fill="#5B5B5B"
                    />
                  </svg>
                )}
              </p>
            </div>
            {showServicesServicios && (
              <div className="servicesSection">
                <Service
                  svg={
                    <svg width="59" height="67" viewBox="0 0 59 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1076)">
                        <path d="M59.5 58.5747C59.5 26.0457 33.0797 -0.333496 0.5 -0.333496V58.5747H59.5Z" fill="#FF972F" />
                        <path
                          d="M26.5961 66.6662C17.3571 66.6662 9.82005 59.4645 9.65796 50.6445V50.5636V35.9174C9.65796 35.0273 10.3874 34.2991 11.2788 34.2991H41.6703C46.7761 34.2991 50.9904 38.345 50.9904 43.2C50.9904 47.5696 47.6676 51.2109 43.3722 52.0201C42.5618 60.031 35.592 66.3426 27.0824 66.5853C26.9203 66.5853 26.7582 66.6662 26.5961 66.6662ZM12.9808 50.4017V50.4826C12.9808 57.4416 18.897 63.1868 26.1099 63.3486C26.272 63.3486 26.353 63.2677 26.5151 63.2677C33.8901 63.2677 39.9684 57.5225 40.0494 50.4017C40.0494 49.5116 40.7788 48.7834 41.6703 48.7834C44.9121 48.7834 47.5865 46.194 47.5865 43.1191C47.5865 39.9633 44.9121 37.4549 41.5893 37.4549H12.9808V50.4017Z"
                          fill="white"
                        />
                        <path d="M19.5454 24.0228V31.3054C23.7597 31.3054 27.1635 28.0687 27.1635 24.0228V16.7402C23.0303 16.6593 19.5454 19.9769 19.5454 24.0228Z" fill="white" />
                        <path d="M19.5454 9.3766V16.6592C23.7597 16.6592 27.1635 13.4225 27.1635 9.3766V2.09399C23.0303 2.09399 19.5454 5.33071 19.5454 9.3766Z" fill="white" />
                        <path d="M29.6758 16.6593V23.9419C33.8901 23.9419 37.2939 20.7052 37.2939 16.6593V9.37671C33.0796 9.37671 29.6758 12.6134 29.6758 16.6593Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1076">
                          <rect width="59" height="67" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Catering'}
                  subtitle={'Lo armamos en base a lo que necesites.'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="64" height="59" viewBox="0 0 64 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1077)">
                        <path d="M51.6304 8.97925C51.6304 36.7846 28.7341 59.3333 0.5 59.3333V8.97925H51.6304Z" fill="#FF972F" />
                        <path
                          d="M42.4298 48.3358C39.9013 48.3358 34.704 45.8457 30.2793 41.6265C26.2057 37.6839 21.2893 30.7672 21.2893 20.392V10.9852C21.2893 9.60188 22.2726 8.2877 23.6773 7.94186C29.7174 6.28184 35.3361 3.99931 40.8144 0.817594C41.7977 0.264253 43.0619 0.264253 44.0452 0.817594C49.3127 3.7918 55.3529 6.351 61.1823 7.94186C62.587 8.2877 63.5703 9.60188 63.5703 10.9852V20.3229C63.5703 30.698 58.7241 37.6148 54.5803 41.5573C50.1555 45.7766 44.9582 48.3358 42.4298 48.3358ZM42.0786 2.89262C36.4599 6.21267 30.6304 8.63354 24.3796 10.2936C24.0987 10.3627 23.888 10.6394 23.888 10.9161V20.2537C23.888 29.7988 28.383 36.0931 32.1054 39.759C36.4599 43.9782 41.0953 45.7766 42.5 45.7766C43.9047 45.7766 48.4699 43.9782 52.8947 39.759C56.6171 36.1623 61.1121 29.7988 61.1121 20.2537V10.9852C61.1121 10.7086 60.9014 10.4319 60.6204 10.3627C54.5803 8.77187 48.3294 6.1435 42.9214 2.96179C42.5702 2.75429 42.2893 2.75429 42.0786 2.89262Z"
                          fill="white"
                        />
                        <path d="M37.8647 31.943C38.2159 32.2889 38.7075 32.4964 39.2694 32.4964C39.761 32.4964 40.2527 32.2889 40.6741 31.943L53.3864 19.4237C54.159 18.6628 54.159 17.487 53.3864 16.7262C52.6139 15.9653 51.4199 15.9653 50.6473 16.7262L39.2694 27.8621L34.353 23.0204C33.5804 22.2596 32.3864 22.2596 31.6139 23.0204C30.8413 23.7812 30.8413 24.9571 31.6139 25.7179L37.8647 31.943Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1077">
                          <rect width="64" height="59" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Seguridad'}
                  subtitle={'Lo armamos en base a lo que necesites.'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="66" height="62" viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1078)">
                        <path d="M0 62.0002C33.5848 62.0002 60.8203 34.8335 60.8203 1.3335H0V62.0002Z" fill="#FF972F" />
                        <path d="M30.3264 52.0834C18.2125 52.0834 8.35425 42.2501 8.35425 30.0834C8.35425 18.0001 18.2125 8.16675 30.3264 8.16675C42.4403 8.16675 52.2985 18.0001 52.2985 30.0834C52.215 42.2501 42.3568 52.0834 30.3264 52.0834ZM30.3264 10.5834C19.5492 10.5834 10.8606 19.3334 10.8606 30.0834C10.8606 40.8334 19.6327 49.5834 30.3264 49.5834C41.1036 49.5834 49.7922 40.8334 49.7922 30.0834C49.7922 19.3334 41.0201 10.5834 30.3264 10.5834Z" fill="white" />
                        <path d="M38.848 24.4166C38.848 29.1666 35.005 32.9999 30.3265 32.9999C25.5645 32.9999 21.7214 29.1666 21.7214 24.4166C21.7214 19.6666 25.5645 15.8333 30.243 15.8333C35.005 15.8333 38.848 19.6666 38.848 24.4166Z" fill="white" />
                        <path d="M42.6076 46.4166C40.9367 41.1666 36.0911 37.3333 30.243 37.3333C24.4785 37.3333 19.5494 41.1666 17.8785 46.4166C17.5443 47.5833 24.8962 49.9999 24.8962 49.9999L34.3367 50.2499" fill="white" />
                        <path
                          d="M38.7644 3.08333L39.1821 3C40.0176 2.83333 40.6859 2.16667 40.9365 1.25L41.0201 0.833333C41.1036 0.333333 41.5214 0 42.0226 0C42.5239 0 42.9416 0.333333 43.0252 0.833333L43.1087 1.25C43.2758 2.08333 43.9441 2.83333 44.8631 3L45.2809 3.08333C45.7821 3.16667 46.1163 3.58333 46.1163 4.08333C46.1163 4.58333 45.7821 5 45.2809 5.08333L44.8631 5.16667C44.0277 5.33333 43.2758 6 43.1087 6.91667L43.0252 7.33333C42.9416 7.83333 42.5239 8.16667 42.0226 8.16667C41.5214 8.16667 41.1036 7.83333 41.0201 7.33333L40.9365 6.91667C40.7695 6.08333 40.1011 5.33333 39.1821 5.16667L38.7644 5.08333C38.2631 5 37.929 4.58333 37.929 4.08333C37.929 3.58333 38.2631 3.16667 38.7644 3.08333Z"
                          fill="white"
                        />
                        <path d="M44.1951 22.8333C43.9444 22.8333 43.7773 22.6666 43.7773 22.4166V21.2499C43.7773 20.9999 43.9444 20.8333 44.1951 20.8333C44.4457 20.8333 44.6128 20.9999 44.6128 21.2499V22.4166C44.6128 22.6666 44.3622 22.8333 44.1951 22.8333Z" fill="white" />
                        <path d="M44.1951 25.9998C43.9444 25.9998 43.7773 25.8331 43.7773 25.5831V24.4164C43.7773 24.1664 43.9444 23.9998 44.1951 23.9998C44.4457 23.9998 44.6128 24.1664 44.6128 24.4164V25.5831C44.6128 25.7498 44.3622 25.9998 44.1951 25.9998Z" fill="white" />
                        <path d="M43.1923 23.8336H42.0227C41.7721 23.8336 41.605 23.6669 41.605 23.4169C41.605 23.1669 41.7721 23.0002 42.0227 23.0002H43.1923C43.443 23.0002 43.61 23.1669 43.61 23.4169C43.61 23.6669 43.443 23.8336 43.1923 23.8336Z" fill="white" />
                        <path d="M46.2836 23.8336H45.114C44.8634 23.8336 44.6963 23.6669 44.6963 23.4169C44.6963 23.1669 44.8634 23.0002 45.114 23.0002H46.2836C46.5343 23.0002 46.7014 23.1669 46.7014 23.4169C46.7014 23.6669 46.5343 23.8336 46.2836 23.8336Z" fill="white" />
                        <path
                          d="M50.043 9.58341L52.048 9.16675C53.886 8.83341 55.2227 7.41675 55.6404 5.58341L56.0581 3.58341C56.2252 2.91675 56.7265 2.41675 57.4784 2.41675C58.1468 2.41675 58.7316 2.83341 58.8987 3.58341L59.3164 5.58341C59.6506 7.41675 61.0708 8.83341 62.9088 9.16675L64.9138 9.58341C65.5822 9.75008 66.0835 10.2501 66.0835 11.0001C66.0835 11.6667 65.6657 12.2501 64.9138 12.4167L62.9088 12.8334C61.0708 13.1667 59.7341 14.5834 59.3164 16.4167L58.8151 18.3334C58.648 19.0001 58.1468 19.5001 57.3949 19.5001C56.7265 19.5001 56.1417 19.0834 55.9746 18.3334L55.5569 16.3334C55.2227 14.5001 53.8025 13.0834 51.9645 12.7501L49.9594 12.3334C49.2911 12.1667 48.7898 11.6667 48.7898 10.9167C48.9569 10.2501 49.3746 9.75008 50.043 9.58341Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1078">
                          <rect width="66" height="62" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Asesoramiento personalizado'}
                  subtitle={'Nos adaptamos a las necesidades de cada jornada.'}
                  darkText={true}
                />
                <Service
                  svg={
                    <svg width="54" height="55" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_7_1072)">
                        <path d="M0 55.3334C24.2819 55.3334 43.9732 35.6398 43.9732 11.355H0V55.3334Z" fill="#FF972F" />
                        <path d="M12.3825 18.5439C7.12746 18.5439 2.83887 14.2547 2.83887 8.93867C2.83887 3.6226 7.12746 -0.666504 12.3825 -0.666504C17.6375 -0.666504 21.9261 3.6226 21.9261 8.93867C21.9865 14.1943 17.6979 18.5439 12.3825 18.5439ZM12.3825 0.662515C7.85229 0.662515 4.16773 4.34752 4.16773 8.93867C4.16773 13.5298 7.85229 17.2148 12.4429 17.2148C16.9731 17.2148 20.7181 13.5298 20.7181 8.93867C20.6577 4.34752 16.9731 0.662515 12.3825 0.662515Z" fill="white" />
                        <path d="M16.1276 6.46197C16.1276 8.51591 14.4364 10.2074 12.3827 10.2074C10.329 10.2074 8.6377 8.51591 8.6377 6.46197C8.6377 4.40803 10.329 2.71655 12.3827 2.71655C14.4364 2.71655 16.1276 4.34762 16.1276 6.46197Z" fill="white" />
                        <path d="M17.7584 16.0673C17.0335 13.7717 14.9194 12.1406 12.3825 12.1406C9.84561 12.1406 7.73151 13.8321 7.00668 16.0673C6.82547 16.611 10.0268 17.6379 10.0268 17.6379L14.1342 17.7587" fill="white" />
                        <path d="M44.4564 18.5439C39.2013 18.5439 34.9127 14.2547 34.9127 8.93867C34.8523 3.6226 39.1409 -0.666504 44.4564 -0.666504C49.7114 -0.666504 54 3.6226 54 8.93867C54 14.1943 49.7114 18.5439 44.4564 18.5439ZM44.4564 0.662515C39.9262 0.662515 36.1812 4.34752 36.1812 8.93867C36.1812 13.5298 39.8658 17.2148 44.4564 17.2148C48.9866 17.2148 52.7315 13.5298 52.7315 8.93867C52.6711 4.34752 48.9866 0.662515 44.4564 0.662515Z" fill="white" />
                        <path d="M48.1411 6.46197C48.1411 8.51591 46.4498 10.2074 44.3961 10.2074C42.3424 10.2074 40.6511 8.51591 40.6511 6.46197C40.6511 4.40803 42.3424 2.71655 44.3961 2.71655C46.5102 2.71655 48.1411 4.34762 48.1411 6.46197Z" fill="white" />
                        <path d="M49.8323 16.0673C49.1075 13.7717 46.9934 12.1406 44.4565 12.1406C41.9196 12.1406 39.8055 13.8321 39.0807 16.0673C38.8994 16.611 42.1008 17.6379 42.1008 17.6379L46.2082 17.7587" fill="white" />
                        <path d="M12.3825 51.1652C7.12746 51.1652 2.83887 46.8761 2.83887 41.56C2.83887 36.2439 7.12746 31.9548 12.3825 31.9548C17.6375 31.9548 21.9261 36.2439 21.9261 41.56C21.9865 46.8761 17.6979 51.1652 12.3825 51.1652ZM12.3825 33.2839C7.85229 33.2839 4.10732 36.9689 4.10732 41.56C4.10732 46.1512 7.79189 49.8362 12.3825 49.8362C16.9127 49.8362 20.6577 46.1512 20.6577 41.56C20.6577 36.9689 16.9731 33.2839 12.3825 33.2839Z" fill="white" />
                        <path d="M16.1276 39.0833C16.1276 41.1372 14.4364 42.8287 12.3827 42.8287C10.329 42.8287 8.6377 41.1372 8.6377 39.0833C8.6377 37.0294 10.329 35.3379 12.3827 35.3379C14.4364 35.3379 16.1276 36.969 16.1276 39.0833Z" fill="white" />
                        <path d="M17.7584 48.6886C17.0335 46.393 14.9194 44.762 12.3825 44.762C9.84561 44.762 7.73151 46.4534 7.00668 48.6886C6.82547 49.2323 10.0268 50.2593 10.0268 50.2593L14.1342 50.3801" fill="white" />
                        <path d="M44.4565 51.1652C39.2014 51.1652 34.9128 46.8761 34.9128 41.56C34.9128 36.2439 39.2014 31.9548 44.4565 31.9548C49.7115 31.9548 54.0001 36.2439 54.0001 41.56C54.0001 46.8761 49.7115 51.1652 44.4565 51.1652ZM44.4565 33.2839C39.9263 33.2839 36.1813 36.9689 36.1813 41.56C36.1813 46.1512 39.8659 49.8362 44.4565 49.8362C48.9867 49.8362 52.7316 46.1512 52.7316 41.56C52.6712 36.9689 48.9867 33.2839 44.4565 33.2839Z" fill="white" />
                        <path d="M48.1411 39.0833C48.1411 41.1372 46.4498 42.8287 44.3961 42.8287C42.3424 42.8287 40.6511 41.1372 40.6511 39.0833C40.6511 37.0294 42.3424 35.3379 44.3961 35.3379C46.5102 35.3379 48.1411 36.969 48.1411 39.0833Z" fill="white" />
                        <path d="M49.8323 48.6886C49.1075 46.393 46.9934 44.762 44.4565 44.762C41.9196 44.762 39.8055 46.4534 39.0807 48.6886C38.8994 49.2323 42.1008 50.2593 42.1008 50.2593L46.2082 50.3801" fill="white" />
                        <path
                          d="M33.0403 30.1423L32.7987 30.0819C32.2551 29.9611 31.8323 29.5382 31.7115 28.9946L31.6511 28.7529C31.5906 28.4509 31.349 28.2092 30.9866 28.2092C30.6846 28.2092 30.443 28.4509 30.3222 28.7529L30.2618 28.9946C30.141 29.5382 29.7182 29.9611 29.1745 30.0819L28.9933 30.1423C28.6913 30.2028 28.4497 30.4444 28.4497 30.8069C28.4497 31.1089 28.6913 31.411 28.9933 31.4714L29.2349 31.5318C29.7786 31.6526 30.2014 32.0755 30.3222 32.6191L30.3826 32.8608C30.443 33.1628 30.6846 33.4045 31.047 33.4045C31.349 33.4045 31.6511 33.1628 31.7115 32.8608L31.7719 32.6191C31.8927 32.0755 32.3155 31.6526 32.8591 31.5318L33.1007 31.4714C33.4027 31.411 33.6443 31.1693 33.6443 30.8069C33.5839 30.5048 33.3423 30.2028 33.0403 30.1423Z"
                          fill="white"
                        />
                        <path d="M32.9194 20.3561C33.1007 20.3561 33.2215 20.2353 33.2215 20.054V19.2083C33.2215 19.0271 33.1007 18.9062 32.9194 18.9062C32.7382 18.9062 32.6174 19.0271 32.6174 19.2083V20.054C32.6174 20.2353 32.7986 20.3561 32.9194 20.3561Z" fill="white" />
                        <path d="M32.9194 22.7118C33.1007 22.7118 33.2215 22.591 33.2215 22.4098V21.564C33.2215 21.3828 33.1007 21.262 32.9194 21.262C32.7382 21.262 32.6174 21.3828 32.6174 21.564V22.4098C32.6174 22.5306 32.7986 22.7118 32.9194 22.7118Z" fill="white" />
                        <path d="M33.7047 21.0812H34.5504C34.7316 21.0812 34.8524 20.9603 34.8524 20.7791C34.8524 20.5979 34.7316 20.4771 34.5504 20.4771H33.7047C33.5235 20.4771 33.4027 20.5979 33.4027 20.7791C33.3423 20.9603 33.5235 21.0812 33.7047 21.0812Z" fill="white" />
                        <path d="M31.3489 21.0812H32.1945C32.3757 21.0812 32.4965 20.9603 32.4965 20.7791C32.4965 20.5979 32.3757 20.4771 32.1945 20.4771H31.3489C31.1677 20.4771 31.0469 20.5979 31.0469 20.7791C31.0469 20.9603 31.1677 21.0812 31.3489 21.0812Z" fill="white" />
                        <path
                          d="M28.6309 23.2562L27.3624 23.0146C26.2148 22.7729 25.3691 21.9272 25.1275 20.7794L24.8859 19.5108C24.8255 19.0879 24.4631 18.7859 24.0403 18.7859C23.6175 18.7859 23.2551 19.0879 23.1947 19.5108L22.953 20.7794C22.7114 21.9272 21.8658 22.7729 20.7181 23.0146L19.4497 23.2562C19.0269 23.3166 18.7249 23.6791 18.7249 24.102C18.7249 24.5248 19.0269 24.8873 19.4497 24.9477L20.7181 25.1893C21.8658 25.431 22.7114 26.2767 22.953 27.4245L23.1947 28.6931C23.2551 29.116 23.6175 29.418 24.0403 29.418C24.4631 29.418 24.8255 29.116 24.8859 28.6931L25.1275 27.4245C25.3691 26.2767 26.2148 25.431 27.3624 25.1893L28.6309 24.9477C29.0537 24.8873 29.3557 24.5248 29.3557 24.102C29.3557 23.6791 29.0537 23.3166 28.6309 23.2562Z"
                          fill="white"
                        />
                        <path d="M23.1947 7.48875C22.8322 7.48875 22.5302 7.24711 22.4698 6.94506C22.349 6.52219 22.5906 6.09932 23.0134 5.9785C26.4564 5.01194 30.2618 5.01194 33.7651 5.91809C34.1879 6.03891 34.4295 6.46178 34.3087 6.88465C34.1879 7.30752 33.7651 7.54916 33.3423 7.42834C30.141 6.52219 26.6376 6.5826 23.4363 7.48875C23.3155 7.48875 23.2551 7.48875 23.1947 7.48875Z" fill="white" />
                        <path d="M28.3893 45.2453C26.5772 45.2453 24.7651 45.0036 23.0134 44.5204C22.5906 44.3995 22.349 43.9767 22.4698 43.5538C22.5906 43.1309 23.0134 42.8893 23.4363 43.0101C26.6376 43.9163 30.0806 43.9163 33.2819 43.0101C33.7047 42.8893 34.1275 43.1309 34.2483 43.5538C34.3692 43.9767 34.1275 44.3995 33.7047 44.5204C32.0134 45.064 30.2014 45.2453 28.3893 45.2453Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_7_1072">
                          <rect width="54" height="55" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Comunidad Vida'}
                  subtitle={'Brindamos experiencias y propuestas mensuales a nuestros coworkers. Contamos con una red de beneficios de la mano de reconocidos emprendedores de la zona.'}
                  darkText={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="carouselEventos" className="eventsContainerCarousel carousel slide" data-ride="carousel" data-interval="3000" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={SalasBackground} alt="Vida" height="650px" />
          </div>
          <div className="carousel-item">
            <img src={EventosBackground} alt="Vida" height="650px" />
          </div>
        </div>
        {/* <img src={RightSVGOrangeSection} alt="Eventos" className="eventsSVGContainer" /> */}
        <div className="eventsContainer">
          <Slider {...carouselSettings}>
            <div>
              <p className="eventsTitle extraBoldFont">EVENTOS</p>
              <p className="eventsSubtitle">Contamos con cuatro salas full equipadas para 4, 5, 6 y hasta 12 personas.</p>
              <p className="eventsContent1">Incluyen TV con conexión HDMI, pizarra, uso de cocinas e infusiones, WI-FI de alta velocidad y recepción de invitadxs.</p>
              <Link to="/eventos">
                <button className="eventsButton boldFont">Ver más</button>
              </Link>
            </div>
            <div>
              <p className="eventsTitle extraBoldFont">EVENTOS.</p>
              <p className="eventsSubtitle">Contamos con cuatro salas full equipadas para 4, 5, 6 y hasta 12 personas.</p>
              <p className="eventsContent1">Incluyen TV con conexión HDMI, pizarra, uso de cocinas e infusiones, WI-FI de alta velocidad y recepción de invitadxs.</p>
              <Link to="/eventos">
                <button className="eventsButton boldFont">Ver más</button>
              </Link>
            </div>
          </Slider>
        </div>
      </div>

      <div className="eventsContainerMobile">
        <img src={SalasBackground} alt="Vida" height="auto" width="100%" style={{ minHeight: '300px', objectFit: 'cover' }} />
        <div className="customContainer">
          <p className="eventsTitleMobile extraBoldFont">EVENTOS</p>
          <p className="eventsSubtitleMobile">Nuestros espacios son ideales para que puedas brindar cursos, workshops, clases personalizadas y eventos de todo tipo</p>
          <p className="eventsContent1Mobile">Contamos con diferentes formatos para que puedas visualizar cuál se adapta mejor a tu necesidad</p>
        </div>
      </div>

      <div className="communityContainer">
        <div className="customContainer">
          <p className="communityTitle extraBoldFont">COMUNIDAD</p>

          <div className="row rowCards">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} />
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} />
            </div>
          </div>

          <p className="communityTitleBenefits boldFont">Beneficios</p>
          <div className="row rowCards">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} />
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} />
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} />
            </div>
          </div>

          <p className="communityTitleBenefits boldFont">Notas o lo que se quiera destacar, por ejemplo, eventos</p>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12" style={{ position: 'relative' }}>
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <div>
                <Link to="/comunidad">
                  <button className="communitySeeMoreButton boldFont">Ver más</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="strategicPlaceContainer">
        <img src={BackgroundSVGHome3} alt="Vida" className="backgroundSVGHome3" />
        <div className="customContainer">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p className="strategicPlaceTitle extraBoldFont">LUGAR ESTRATÉGICO</p>
              <div className="d-flex strategicPlaceLogoContainer">
                <img src={StrategicPlaceLogo} alt="Vida" className="strategicPlaceLogo" />
                <div className="flex-column">
                  <p className="locationText boldFont">Fernando Fader 3971</p>
                  <p className="locationSubtext boldFont">Cerro de las Rosas | Córdoba</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12"></div>
            <div className="row" style={{ paddingBottom: '60px' }}>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Service
                  svg={
                    <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.4922 0C12.819 0 0.0500901 12.8569 0.0500901 28.7509H28.4922V0Z" fill="#FF972F" />
                      <path
                        d="M30.2948 23.8914H31.7469C32.3478 23.6889 32.1475 23.1321 32.1976 22.7272C32.5481 22.6766 32.8485 22.7272 33.149 22.626C33.5496 22.5753 33.9001 22.3729 34.1004 22.0186C34.2506 21.7655 34.4008 21.5124 34.501 21.2593V7.69373L34.4509 7.64311C34.2506 6.52952 33.5996 5.82087 32.5982 5.41593C31.797 5.11222 30.8956 5.11222 30.0444 5.01098C29.3934 4.96037 28.7925 4.96037 28.1416 4.90975C28.0915 4.90975 28.0915 4.85913 28.0915 4.85913H24.5863C24.5362 4.85913 24.4862 4.90975 24.4361 4.90975C23.9353 4.96037 23.3845 4.96037 22.8838 5.01098C22.1327 5.0616 21.3816 5.16284 20.6304 5.26407C19.5288 5.41593 18.4773 6.27643 18.2269 7.39002C18.1768 7.59249 18.1267 7.79496 18.0767 8.04805V21.0568L18.1267 21.1074C18.1768 21.8667 18.8278 22.5753 19.5789 22.6766C19.8793 22.7272 20.1297 22.7272 20.4301 22.7778C20.4301 23.2334 20.33 23.7396 20.9309 23.942H22.383C22.9839 23.7396 22.7836 23.1828 22.8337 22.7778H29.794C29.8441 23.1828 29.6939 23.6889 30.2948 23.8914ZM19.2784 13.8185C19.2784 12.7555 19.2784 11.7938 19.2784 10.7814C19.2784 9.87029 19.2784 8.90855 19.3285 7.99743C19.3786 7.28878 20.0296 6.63075 20.7306 6.52952C21.2814 6.42828 21.8322 6.37766 22.383 6.32705C23.2343 6.22581 24.0355 6.17519 24.8867 6.12458C25.9884 6.12458 27.0399 6.12457 28.1416 6.17519C28.6423 6.17519 29.1931 6.22581 29.6939 6.27643C30.445 6.32705 31.1961 6.42828 31.8971 6.52952C32.6482 6.63075 33.2992 7.3394 33.2992 8.14929C33.2992 9.87029 33.2992 11.6419 33.2992 13.3629C33.2992 13.8185 33.2992 13.8185 32.8485 13.8691C32.1475 13.9703 31.4965 14.0209 30.7955 14.1222C30.2447 14.1728 29.6438 14.2234 29.0429 14.274C28.2918 14.3247 27.5907 14.3753 26.8396 14.3753C26.2888 14.3753 25.6879 14.3753 25.1371 14.3247C24.386 14.274 23.5848 14.274 22.8337 14.2234C22.6334 14.2234 22.383 14.1728 22.1827 14.1728C21.5819 14.1222 20.981 14.0209 20.4301 13.9703C20.0796 13.9197 19.7291 13.8691 19.2784 13.8185ZM33.3493 15.0839V15.3876C33.3493 17.1592 33.3493 18.9815 33.3493 20.7531C33.3493 21.2593 33.0488 21.4618 32.5982 21.4618C28.442 21.4618 24.2358 21.4618 20.0796 21.4618C19.5288 21.4618 19.2784 21.2087 19.2784 20.6519V15.3876V15.1345C19.3786 15.1345 19.4787 15.1345 19.5789 15.1345C20.0796 15.1852 20.6304 15.2864 21.1312 15.337C21.9324 15.4382 22.6835 15.4889 23.4847 15.5395C24.1857 15.5901 24.8367 15.6407 25.5377 15.6407C26.1887 15.6407 26.7896 15.6407 27.4405 15.5901C28.5422 15.5395 29.6438 15.4889 30.7454 15.3876C31.3463 15.337 31.9973 15.2358 32.5982 15.1852C32.8485 15.1345 33.0989 15.1345 33.3493 15.0839Z"
                        fill="white"
                      />
                      <path d="M22.3827 20.8038C23.0337 20.8544 23.5845 20.247 23.5845 19.589C23.5845 18.9816 23.0337 18.3741 22.3827 18.3741C21.7818 18.3741 21.1809 18.9816 21.1809 19.589C21.1809 20.1964 21.7818 20.8544 22.3827 20.8038Z" fill="white" />
                      <path d="M29.694 20.8038C30.395 20.8544 30.8958 20.247 30.8958 19.589C30.8958 18.9309 30.2448 18.3741 29.694 18.3741C29.043 18.3741 28.4922 18.9309 28.4922 19.589C28.4922 20.2976 29.0931 20.8038 29.694 20.8038Z" fill="white" />
                    </svg>
                  }
                  title={'Colectivos desde Zona Centro y Nueva Córdoba'}
                  subtitle={'13 18 19 80 83'}
                  small={true}
                  darkText={false}
                />
                <Service
                  svg={
                    <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M35.1895 28.7509C35.1895 12.8917 22.3274 0 6.50475 0V28.7509H35.1895Z" fill="#FF972F" />
                      <path
                        d="M0.049375 6.71293C0.243518 7.394 0.534734 8.02643 1.02009 8.51291C1.50545 9.04803 2.03935 9.58316 2.57324 10.1183C2.91299 10.4588 3.30128 10.7507 3.64103 11.0426C4.36907 11.6264 5.0971 12.2101 5.87368 12.7939C6.65025 13.3777 7.42683 13.9128 8.2034 14.3993C9.65948 15.3723 11.2612 16.1993 12.8628 16.8803C14.0277 17.4155 15.2411 17.9019 16.406 18.3884C16.9399 18.583 17.4738 18.7776 18.0076 18.9722C18.2989 19.0695 18.5415 19.0208 18.7842 18.7776C19.3667 18.2425 19.9491 17.6587 20.483 17.1236C21.1139 16.5398 21.7934 15.9074 22.4244 15.3236C22.57 15.1777 22.6671 14.9831 22.7642 14.8371V14.5452C22.7156 14.4479 22.6671 14.302 22.57 14.2047C22.3273 13.9128 22.0847 13.6696 21.842 13.4263C21.6964 13.2804 21.4537 13.1831 21.3081 13.2317C20.7257 13.2804 20.1432 13.4263 19.6093 13.475C19.1725 13.5236 18.7842 13.7669 18.3474 13.5723C18.1047 13.475 17.8135 13.329 17.5708 13.2317C16.9884 12.9399 16.406 12.6966 15.775 12.4047C15.9691 12.3561 16.0662 12.3074 16.1633 12.2588C16.9884 11.9183 17.8135 11.5777 18.6386 11.1885C19.2696 10.8967 19.9005 10.6534 20.5315 10.3615C21.0654 10.1183 21.1625 9.53451 20.7742 9.14533C20.2403 8.6102 19.7549 8.07507 19.221 7.5886C19.0754 7.44265 18.7842 7.34536 18.5901 7.34536C17.9591 7.34536 17.3281 7.44265 16.6972 7.4913C15.8721 7.53995 15.047 7.63724 14.2218 7.68589C13.5423 7.73454 12.8143 7.78319 12.1348 7.83184C11.7951 7.88048 11.4068 7.92913 11.067 7.92913C10.7758 7.92913 10.4361 7.97778 10.1934 7.83184C9.80509 7.63724 9.46533 7.29671 9.07705 7.05347C7.86365 6.12916 6.50465 5.49674 5.04857 5.1562C4.66028 5.05891 4.272 5.01026 3.88371 4.91296H2.23349C2.03935 4.96161 1.79667 4.96161 1.60252 5.01026C1.02009 5.1562 0.437664 5.30215 0.146449 5.93457V6.71293H0.049375ZM20.8227 14.7398C20.8227 14.7885 20.8227 14.7885 20.8227 14.7885C20.6286 14.9344 20.483 15.0804 20.2888 15.2263C19.5608 15.9074 18.8813 16.5884 18.1533 17.3182C18.1047 17.3668 17.9106 17.4155 17.862 17.3668C17.2796 17.1236 16.6972 16.929 16.1147 16.6857C15.1926 16.2966 14.2704 15.9074 13.3967 15.5182C12.2319 14.9831 11.1156 14.4479 9.99923 13.7669C8.93144 13.1345 7.91219 12.4047 6.89293 11.675C5.87368 10.9453 4.9515 10.1183 3.98078 9.33992C3.64103 9.09668 3.34982 8.80479 3.0586 8.51291C2.42763 7.92913 1.79667 7.29671 1.55399 6.42105C2.18495 6.32375 2.76738 6.22646 3.34982 6.2751C4.36907 6.3724 5.29125 6.61564 6.21343 7.05347C7.32976 7.53995 8.25194 8.26967 9.22265 8.99938C9.4168 9.14533 9.70801 9.33992 9.95069 9.33992C10.4846 9.38857 11.0185 9.29127 11.5038 9.24262C11.7951 9.24262 12.0863 9.19398 12.329 9.19398C13.2511 9.09668 14.2218 9.04803 15.144 8.95074C15.8235 8.90209 16.503 8.85344 17.1825 8.80479C17.4738 8.80479 17.7164 8.75614 18.0076 8.75614C18.1047 8.75614 18.2503 8.65885 18.2989 8.7075C18.493 8.90209 18.6871 9.09668 18.9298 9.33992C18.7842 9.38857 18.7842 9.38857 18.7357 9.38857C17.134 10.0696 15.4838 10.7994 13.8821 11.4804C13.5423 11.6264 13.2511 12.1128 13.5909 12.5507C13.7365 12.7453 13.9792 12.9399 14.1733 13.0858C15.2411 13.6209 16.3089 14.1561 17.3281 14.6912C18.0076 15.0804 18.7357 15.129 19.5123 14.9344C19.9491 14.8858 20.3859 14.7885 20.8227 14.7398Z"
                        fill="white"
                      />
                      <path d="M2.86552 23.2534H19.9016V24.7129H2.86552V23.2534Z" fill="white" />
                      <path
                        d="M9.4165 16.881C8.97968 16.6378 8.59139 16.3945 8.10604 16.1513C7.86336 16.6378 7.66921 17.0756 7.42653 17.6107C7.23239 17.4161 7.03825 17.2702 6.94117 17.027C6.8441 16.8324 6.8441 16.5891 6.8441 16.3459C6.8441 16.054 6.94117 15.8108 6.94117 15.5189C6.94117 15.4216 6.89264 15.2756 6.8441 15.227C6.45581 14.9351 6.01899 14.6432 5.58217 14.3513C5.53363 14.5946 5.53363 14.8378 5.4851 15.081C5.43656 15.7621 5.38803 16.4432 5.29096 17.1242C5.24242 17.4161 5.38803 17.6594 5.58217 17.854C6.11606 18.3404 6.60142 18.8269 7.08678 19.362C7.42653 19.7999 8.15457 19.6539 8.34871 19.1188C8.68847 18.3891 9.07675 17.6594 9.4165 16.881Z"
                        fill="white"
                      />
                    </svg>
                  }
                  title={"12' del aeropuerto"}
                  subtitle={''}
                  small={true}
                  darkText={false}
                />
                <Service
                  svg={
                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_106_270)">
                        <path d="M33.0498 0C15.0585 0 0.465466 14.593 0.465466 32.5843H33.0498V0Z" fill="#FF972F" />
                        <path d="M14.8576 9.84523C17.3065 9.84523 19.3555 7.84619 19.3555 5.34739C19.3555 2.89856 17.3564 0.849548 14.8576 0.849548C12.4088 0.849548 10.3598 2.84859 10.3598 5.34739C10.4098 7.79621 12.4088 9.84523 14.8576 9.84523ZM14.8576 2.1989C16.6068 2.1989 18.0061 3.59823 18.0061 5.34739C18.0061 7.09655 16.6068 8.49587 14.8576 8.49587C13.1085 8.49587 11.7091 7.09655 11.7091 5.34739C11.7091 3.59823 13.1584 2.1989 14.8576 2.1989Z" fill="white" />
                        <path d="M15.3589 4.04802C15.3589 4.4978 15.7088 4.89761 16.2085 4.89761C16.6583 4.89761 17.0581 4.54778 17.0581 4.04802C17.0581 3.59823 16.7083 3.19843 16.2085 3.19843C15.7088 3.19843 15.3589 3.59823 15.3589 4.04802Z" fill="white" />
                        <path d="M14.8574 19.2404C15.2072 19.2404 15.5071 18.9405 15.5071 18.5907V9.14523C15.5071 8.7954 15.2072 8.49554 14.8574 8.49554C14.5076 8.49554 14.2077 8.7954 14.2077 9.14523V18.5907C14.2077 18.9405 14.5076 19.2404 14.8574 19.2404Z" fill="white" />
                        <path d="M14.8592 22.4387C19.407 22.4387 24.2546 21.0894 24.2546 18.5906C24.2546 16.0918 19.407 14.7424 14.8592 14.7424C10.3113 14.7424 5.46367 16.0918 5.46367 18.5906C5.46367 21.0894 10.3113 22.4387 14.8592 22.4387ZM14.8592 16.0418C19.7568 16.0418 22.9053 17.5411 22.9053 18.5906C22.9053 19.6401 19.7568 21.1394 14.8592 21.1394C9.96151 21.1394 6.81302 19.6401 6.81302 18.5906C6.81302 17.5411 9.96151 16.0418 14.8592 16.0418Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_106_270">
                          <rect width="33" height="33" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'Cercanía a bares y restaurantes'}
                  subtitle={''}
                  small={true}
                  darkText={false}
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Service
                  svg={
                    <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_106_271)">
                        <path d="M10.3372 33.2234C26.1908 33.2234 39.0498 20.3571 39.0498 4.49457H10.3372V33.2234Z" fill="#FF972F" />
                        <path
                          d="M13.3758 0C13.3318 0 13.2877 0.0440627 13.2437 0.0440627C11.8785 0.0440627 10.6455 0.440627 9.45643 1.0575C8.31145 1.67438 7.34262 2.46751 6.54994 3.48095C5.88937 4.3622 5.36092 5.28752 5.05266 6.34502C4.87651 6.91784 4.78843 7.53471 4.70035 8.15159C4.65632 8.68034 4.61228 9.2091 4.65632 9.69378C4.70035 10.7072 4.96458 11.7207 5.36092 12.646C5.88937 13.8797 6.68205 14.9372 7.69492 15.8626C8.44357 16.5235 9.28028 17.0522 10.2051 17.4488C10.8656 17.7572 11.5702 17.9335 12.3189 18.0657C12.5391 18.1098 12.7593 18.1098 12.9795 18.1098C13.0675 18.1098 13.1556 18.1538 13.1996 18.1538H14.2565C14.3446 18.1538 14.4327 18.1098 14.4767 18.1098C14.6969 18.0657 14.9171 18.0657 15.1373 18.0657C15.8419 17.9335 16.5465 17.7572 17.2511 17.4488C18.1759 17.0522 19.0126 16.5235 19.7613 15.8626C20.7741 14.9372 21.5228 13.8797 22.0953 12.646C22.4916 11.6766 22.7118 10.7072 22.7999 9.69378C22.8439 9.16503 22.7999 8.63628 22.7558 8.15159C22.6678 7.53471 22.5797 6.91784 22.4035 6.34502C22.0953 5.28752 21.5668 4.3622 20.9063 3.48095C20.1136 2.46751 19.1447 1.63032 17.9998 1.0575C16.8107 0.440627 15.5336 0.0440627 14.2125 0.0440627C13.9923 0.0440627 13.9483 0 13.9042 0H13.3758ZM13.64 16.9641C9.28028 17.0082 5.8013 13.395 5.75726 9.29722C5.66919 4.7147 9.28028 1.41 13.1996 1.23375C18.0438 1.01344 21.4347 4.84689 21.5228 8.90066C21.6109 13.395 17.9117 17.0082 13.64 16.9641Z"
                          fill="white"
                        />
                        <path
                          d="M23.1072 0C22.7549 0.132188 22.6228 0.440627 22.6228 0.793128C22.6228 2.42345 22.6228 4.05376 22.6228 5.68408C22.6228 6.34502 22.843 6.91784 23.3274 7.3144C23.5476 7.53471 23.8118 7.6669 24.076 7.79909C24.2962 7.88722 24.2962 7.97534 24.2962 8.15159C24.2962 11.1919 24.2962 14.2763 24.2962 17.3166C24.2962 17.6691 24.3843 17.9776 24.7366 18.1538H25.0449C25.3531 18.0216 25.4853 17.8013 25.4853 17.4488C25.4853 14.3644 25.4853 11.3241 25.4853 8.23972V7.93128C25.9697 7.75503 26.4541 7.53471 26.7183 7.09409C26.8945 6.82971 27.0266 6.52127 27.1587 6.21283V0.352501C27.0266 0.264376 26.8945 0.132188 26.7183 0H26.4981C26.1458 0.132188 26.0137 0.440627 26.0137 0.793128C26.0137 2.37938 26.0137 4.0097 26.0137 5.59596C26.0137 6.03658 25.8376 6.30096 25.4853 6.6094V6.30096C25.4853 4.45033 25.4853 2.64376 25.4853 0.793128C25.4853 0.396564 25.3972 0.132188 25.0008 0H24.7807C24.4283 0.132188 24.2962 0.440627 24.2962 0.793128C24.2962 2.5997 24.2962 4.45033 24.2962 6.2569V6.56534C23.988 6.34502 23.8118 6.08065 23.8118 5.72815C23.8118 4.09783 23.8118 2.51157 23.8118 0.881253C23.8118 0.440627 23.6797 0.132188 23.2834 0H23.1072Z"
                          fill="white"
                        />
                        <path
                          d="M0.823776 18.1979C1.17608 18.0216 1.26415 17.7573 1.26415 17.3607C1.26415 15.2897 1.26415 13.2188 1.26415 11.1479V10.8835C1.61645 10.8394 1.92472 10.8394 2.23298 10.7954C2.89355 10.6632 3.51007 9.95816 3.46604 9.25316C3.46604 7.09409 3.422 4.93502 3.46604 2.77595C3.46604 1.54219 2.49721 0.396564 1.35223 0.132188C1.17608 0.0440627 0.999927 0.0440627 0.823776 0H0.559551C0.3834 0.132188 0.251288 0.264376 0.0751372 0.352501V18.1538H0.823776V18.1979ZM1.26415 1.36594C1.88068 1.54219 2.32106 2.2472 2.32106 2.73189C2.32106 4.84689 2.32106 6.9619 2.32106 9.07691C2.32106 9.34129 2.18894 9.51754 1.92472 9.5616C1.70453 9.60566 1.48434 9.60566 1.26415 9.64972V1.36594Z"
                          fill="white"
                        />
                        <path
                          d="M13.0672 2.86383C13.0672 3.21633 13.2434 3.43664 13.6397 3.43664C14.9168 3.4807 16.1499 3.87727 17.1627 4.67039C18.3077 5.59571 18.9683 6.74134 19.2325 8.19541C19.2325 8.50385 19.2325 8.81228 19.2325 9.12072C19.2325 9.3851 19.4527 9.64947 19.7169 9.69354C19.9371 9.7376 20.2454 9.60541 20.3775 9.3851C20.4215 9.29697 20.4656 9.16479 20.4656 9.07666C20.3775 8.50385 20.3335 7.88697 20.2014 7.31415C19.9812 6.38884 19.5408 5.55165 18.9683 4.80258C18.4398 4.09758 17.7793 3.56883 16.9866 3.1282C16.238 2.68757 15.4453 2.4232 14.5645 2.29101C14.2563 2.24695 13.904 2.24695 13.5957 2.24695C13.2874 2.29101 13.0672 2.55539 13.0672 2.86383Z"
                          fill="white"
                        />
                        <path
                          d="M6.85834 9.42928C6.90238 10.8393 7.34275 12.073 8.17947 13.1746C8.88408 14.0999 9.72079 14.8049 10.7777 15.2896C11.4383 15.5981 12.0988 15.8184 12.8034 15.8624C13.0677 15.8624 13.3759 15.9065 13.6402 15.9065C13.9925 15.9065 14.2126 15.6421 14.2126 15.3337C14.2126 14.9812 13.9925 14.7609 13.6402 14.7609C12.275 14.7168 11.086 14.3202 10.0291 13.439C9.01619 12.6018 8.35562 11.5002 8.09139 10.1783C8.00332 9.82585 8.00332 9.47335 8.00332 9.12085C8.00332 8.76834 7.69506 8.50397 7.38679 8.50397C7.12256 8.54803 6.77026 8.72428 6.8143 9.12085C6.85834 9.20897 6.85834 9.2971 6.85834 9.42928Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_106_271">
                          <rect width="40" height="33" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={"5' de acceso a circunvalación"}
                  subtitle={''}
                  small={true}
                  darkText={false}
                />
                <Service
                  svg={
                    <svg width="42" height="33" viewBox="0 0 42 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_106_273)">
                        <path d="M9.81918 32.7508C27.0631 32.7508 41.0498 18.6707 41.0498 1.31165H9.81918V32.7508Z" fill="#FF972F" />
                        <path d="M5.79485 14.0895C5.79485 14.0895 8.42934 16.1147 11.447 14.0895C14.4647 12.0643 17.0992 14.0895 17.0992 14.0895C17.0992 14.0895 20.4522 16.838 22.7513 14.0895C22.7513 14.0895 25.2421 11.2445 28.4514 14.4753" stroke="white" strokeWidth="1.27782" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2.2989 20.2135C2.2989 20.2135 5.31658 22.2387 8.76536 20.2135C12.2141 18.1882 15.2318 20.2135 15.2318 20.2135C15.2318 20.2135 19.1117 22.962 21.6983 20.2135C21.6983 20.2135 24.5723 17.3685 28.2126 20.5992" stroke="white" strokeWidth="1.27782" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M26.5833 6.23014C26.4875 6.23014 26.3917 6.32658 26.3917 6.42302C26.3917 6.51946 26.4875 6.61589 26.5833 6.61589C26.6791 6.61589 26.7749 6.51946 26.7749 6.42302C26.7749 6.32658 26.6791 6.23014 26.5833 6.23014ZM26.5833 5.26575C27.206 5.26575 27.7329 5.79616 27.7329 6.42302C27.7329 7.04987 27.206 7.58028 26.5833 7.58028C25.9606 7.58028 25.4337 7.04987 25.4337 6.42302C25.4337 5.79616 25.9606 5.26575 26.5833 5.26575Z" fill="white" />
                        <path d="M13.6995 8.83372L9.62799 2.32408C6.1313 -3.17294 4.07162 2.80628 4.07162 2.80628C4.07162 2.80628 1.29343 10.7625 0.000139419 13.7039" stroke="white" strokeWidth="1.27782" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M10.9682 4.108C11.5909 2.17921 13.3153 0.0575562 14.5128 0.0575562C16.4288 0.0575562 19.8776 5.8439 21.2188 7.62802" stroke="white" strokeWidth="1.27782" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_106_273">
                          <rect width="42" height="33" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={'300 metros de la zona bancaria'}
                  subtitle={''}
                  small={true}
                  darkText={false}
                />
                <Service
                  svg={
                    <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_106_274)">
                        <path d="M0.437091 5.17487C0.437091 22.4254 14.5774 36.4175 32.0107 36.4175V5.17487H0.437091Z" fill="#FF972F" />
                        <path
                          d="M40.0498 11.5962V10.7337L40.0014 10.6857C39.9045 10.1586 39.614 9.67946 39.1297 9.39196C38.4033 8.96069 37.6285 8.52943 36.8537 8.09817C35.6431 7.42731 34.4808 6.70854 33.2702 6.03769C32.2048 5.41475 31.1394 4.83973 30.0741 4.2168C28.8634 3.54594 27.7012 2.82717 26.4906 2.15632C25.7158 1.72505 24.9409 1.24587 24.1661 0.814608C23.7787 0.575018 23.3429 0.383345 22.9071 0.143754C22.8102 0.0479181 22.6165 0.0479181 22.3744 0H22.1322C22.0838 0 22.0354 0.0479181 21.987 0.0479181C21.309 0.143754 20.7763 0.431263 20.4373 1.00628C20.1468 1.53338 19.8562 2.06048 19.5172 2.58758C18.6456 4.07304 17.8223 5.51059 16.9507 6.99605C16.757 7.33148 16.5633 7.47523 16.1759 7.47523C15.4979 7.47523 15.0136 7.81066 14.6262 8.33776C14.4325 8.62527 14.3357 8.96069 14.1904 9.29612V21.5632C14.1904 21.6111 14.2388 21.6111 14.2388 21.659C14.2873 22.234 14.6262 22.7132 15.0621 23.0486C15.3526 23.2882 15.74 23.3361 16.079 23.4799H34.9167L34.9651 23.432C35.982 23.3841 36.8537 22.3299 36.8537 21.3236C36.8053 20.0777 36.8537 18.8318 36.8537 17.6339C36.8537 17.4901 36.9021 17.2984 36.999 17.1547C37.1443 16.8672 37.338 16.5797 37.5317 16.2922C37.9191 15.6692 38.258 15.0463 38.6455 14.3754C39.0813 13.4171 39.7108 12.6025 40.0498 11.5962ZM35.7399 12.7462V18.1131C34.6261 18.2568 33.706 18.6881 32.8828 19.4548C32.108 20.2215 31.6237 21.1798 31.4784 22.2819H31.43C27.5559 22.2819 23.6819 22.2819 19.8078 22.2819C19.6625 22.2819 19.6141 22.234 19.6141 22.0903C19.6141 22.0423 19.6141 21.9465 19.6141 21.8986C19.372 20.7006 18.7424 19.7423 17.7739 19.0235C17.1444 18.5922 16.4664 18.2568 15.74 18.161C15.5463 18.1131 15.4495 18.0651 15.4979 17.8735C15.4979 16.2442 15.4979 14.5671 15.4979 12.9379C15.4979 12.89 15.4979 12.7941 15.4979 12.7941C15.8853 12.6983 16.2243 12.6025 16.5633 12.5066C17.3865 12.2191 18.1129 11.7399 18.694 11.0212C19.2267 10.3982 19.5172 9.67946 19.6625 8.86486C19.711 8.62527 19.7594 8.57735 20.0015 8.57735C23.7787 8.57735 27.5559 8.57735 31.3332 8.57735H31.5753C31.7206 10.8295 33.5607 12.5546 35.7399 12.7462ZM25.6673 2.97092C28.2339 4.45639 30.8489 5.94185 33.4639 7.47523H18.016C18.5972 6.46895 19.1783 5.46267 19.7594 4.45639C22.0838 5.271 24.0209 4.83973 25.6673 2.97092ZM20.3405 3.40219C20.631 2.87509 20.97 2.39591 21.2606 1.82089C21.648 1.10212 22.2775 0.958363 22.8586 1.29379C23.4397 1.62922 24.0693 2.01256 24.6504 2.34799C23.7787 3.59386 21.7933 4.12096 20.3405 3.40219ZM36.8537 9.39196C37.3864 9.67946 37.8706 9.96697 38.4033 10.2545C38.8392 10.4941 39.1781 11.0691 38.8392 11.6441C38.3549 12.5066 37.8706 13.3212 37.3864 14.1838C37.2411 14.4713 37.0474 14.7109 36.9021 15.0463V9.39196H36.8537ZM32.5922 8.57735C33.3186 8.57735 34.045 8.57735 34.723 8.57735C35.1104 8.57735 35.5946 8.96069 35.6431 9.34404C35.6915 9.82322 35.6915 10.2545 35.6915 10.7337C35.6915 11.0212 35.6915 11.3566 35.6915 11.6441C33.9966 11.2608 32.9796 10.2545 32.5922 8.57735ZM35.7399 19.2631C35.7399 19.9819 35.7883 20.6527 35.7399 21.3715C35.6915 21.9465 35.1104 22.3778 34.6745 22.3299C34.384 22.2819 34.0934 22.3299 33.8029 22.3299H32.6407C32.9312 20.4131 34.5777 19.3589 35.7399 19.2631ZM18.4519 8.57735C18.3066 9.87114 17.1928 11.3566 15.4011 11.6441C15.4011 10.9733 15.4495 10.3024 15.4011 9.63155C15.4011 9.20028 15.7885 8.57735 16.3696 8.57735C17.0475 8.52943 17.7255 8.57735 18.4519 8.57735ZM18.4519 22.2819C17.7255 22.2819 17.0475 22.2819 16.3696 22.2819C15.8369 22.2819 15.4011 21.8507 15.4011 21.3236C15.4011 20.7486 15.4011 20.2215 15.4011 19.6464V19.2152C16.9023 19.4548 18.3066 20.8444 18.4519 22.2819Z"
                          fill="white"
                        />
                        <path
                          d="M24.9899 12.2671C24.6025 12.2671 24.2635 12.2671 23.8761 12.2671C23.5371 12.2671 23.3919 12.4588 23.3434 12.7463C23.295 13.1296 23.5371 13.3213 23.8761 13.3213C24.5057 13.3213 25.1352 13.3213 25.7647 13.3213C26.1521 13.3213 26.4911 13.6567 26.5395 14.0401C26.588 14.3755 26.2974 14.7589 25.9584 14.8547C25.7163 14.9026 25.4742 14.8547 25.1836 14.8547C24.3604 14.9026 23.5856 15.4297 23.3919 16.2443C23.1013 17.3944 23.7308 18.4006 24.9415 18.5923C24.9415 18.784 24.9415 18.9757 24.9415 19.1194C24.8931 19.4548 25.1836 19.6465 25.4742 19.6465C25.8132 19.6465 26.0553 19.4548 26.0553 19.1194C26.0553 18.9757 26.0553 18.784 26.0553 18.5923C26.3943 18.5923 26.7333 18.5923 27.0238 18.5923C27.2659 18.5923 27.4112 18.5444 27.5565 18.3048C27.7018 18.0652 27.6533 17.8735 27.5565 17.6819C27.4112 17.4423 27.1691 17.4423 26.9754 17.4423C26.3943 17.4423 25.7647 17.4423 25.1836 17.4423C24.7962 17.4423 24.5057 17.1068 24.4572 16.7714C24.4088 16.3881 24.6994 16.0047 25.0383 15.9568C25.3289 15.9089 25.571 15.9089 25.8616 15.9089C26.6848 15.9089 27.4596 15.238 27.6049 14.4234C27.7502 13.7526 27.5565 13.1776 27.0722 12.6984C26.8301 12.4588 26.4911 12.3629 26.2006 12.2192C26.0553 12.1713 26.0553 12.1234 26.0069 11.9796C26.0069 11.74 25.9584 11.5004 25.91 11.3087C25.8616 11.1171 25.571 11.0212 25.3773 11.0692C25.0868 11.165 24.9415 11.3087 24.9415 11.5483C24.9415 11.6442 24.9415 11.74 24.9415 11.8358V12.2671H24.9899Z"
                          fill="white"
                        />
                        <path d="M18.5486 16.5318C19.0812 16.5797 19.6624 16.1005 19.6624 15.4776C19.6624 14.8547 19.2265 14.3755 18.5486 14.3755C17.9674 14.3755 17.4348 14.8068 17.4348 15.4297C17.4832 16.0526 17.9674 16.5797 18.5486 16.5318Z" fill="white" />
                        <path d="M30.6075 15.4294C30.5106 16.1003 31.1886 16.5315 31.6728 16.5315C32.2055 16.5315 32.7866 16.0044 32.7866 15.4294C32.7866 14.8065 32.3024 14.3752 31.6728 14.3752C31.1401 14.3273 30.559 14.7107 30.6075 15.4294Z" fill="white" />
                      </g>
                      <defs>
                        <clipPath id="clip0_106_274">
                          <rect width="40" height="36" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                  title={"15' del centro"}
                  subtitle={''}
                  small={true}
                  darkText={false}
                />
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.434882088902!2d-64.2347723843618!3d-31.37457028141809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299b7ceb33413%3A0x89c5c3a779773b97!2sVida%20Cowork!5e0!3m2!1ses-419!2sar!4v1638208913348!5m2!1ses-419!2sar" width="100%" height="600" style={{ border: '0', zIndex: '2', paddingBottom: '100px' }} allowFullScreen={true} loading="lazy"></iframe>
          </div>
        </div>
      </div>

      <div className="strategicPlaceContainerMobile">
        <div className="customContainer">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <p className="strategicPlaceTitle extraBoldFont">LUGAR ESTRATÉGICO</p>
              <div className="d-flex strategicPlaceLogoContainerMobile">
                <img src={StrategicPlaceLogo} alt="Vida" className="strategicPlaceLogo" />
                <div className="flex-column">
                  <p className="locationText boldFont">Fernando Fader 3971</p>
                  <p className="locationSubtext boldFont">Cerro de las Rosas | Córdoba</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3406.434882088902!2d-64.2347723843618!3d-31.37457028141809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943299b7ceb33413%3A0x89c5c3a779773b97!2sVida%20Cowork!5e0!3m2!1ses-419!2sar!4v1638208913348!5m2!1ses-419!2sar" width="100%" height="450" style={{ border: '0', marginTop: '60px' }} allowFullScreen={true} loading="lazy"></iframe>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <Service
                svg={
                  <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.4922 0C12.819 0 0.0500908 12.8569 0.0500908 28.7509H28.4922V0Z" fill="#FF972F" />
                    <path
                      d="M30.2948 23.8914H31.7469C32.3478 23.6889 32.1475 23.1321 32.1976 22.7272C32.5481 22.6766 32.8485 22.7272 33.149 22.626C33.5496 22.5753 33.9001 22.3729 34.1004 22.0186C34.2506 21.7655 34.4008 21.5124 34.501 21.2593V7.69373L34.4509 7.64311C34.2506 6.52952 33.5996 5.82087 32.5982 5.41593C31.797 5.11222 30.8956 5.11222 30.0444 5.01098C29.3934 4.96037 28.7925 4.96037 28.1416 4.90975C28.0915 4.90975 28.0915 4.85913 28.0915 4.85913H24.5863C24.5362 4.85913 24.4862 4.90975 24.4361 4.90975C23.9353 4.96037 23.3845 4.96037 22.8838 5.01098C22.1327 5.0616 21.3816 5.16284 20.6304 5.26407C19.5288 5.41593 18.4773 6.27643 18.2269 7.39002C18.1768 7.59249 18.1267 7.79496 18.0767 8.04805V21.0568L18.1267 21.1074C18.1768 21.8667 18.8278 22.5753 19.5789 22.6766C19.8793 22.7272 20.1297 22.7272 20.4301 22.7778C20.4301 23.2334 20.33 23.7396 20.9309 23.942H22.383C22.9839 23.7396 22.7836 23.1828 22.8337 22.7778H29.794C29.8441 23.1828 29.6939 23.6889 30.2948 23.8914ZM19.2784 13.8185C19.2784 12.7555 19.2784 11.7938 19.2784 10.7814C19.2784 9.87029 19.2784 8.90855 19.3285 7.99743C19.3786 7.28878 20.0296 6.63075 20.7306 6.52952C21.2814 6.42828 21.8322 6.37766 22.383 6.32705C23.2343 6.22581 24.0355 6.17519 24.8867 6.12458C25.9884 6.12458 27.0399 6.12457 28.1416 6.17519C28.6423 6.17519 29.1931 6.22581 29.6939 6.27643C30.445 6.32705 31.1961 6.42828 31.8971 6.52952C32.6482 6.63075 33.2992 7.3394 33.2992 8.14929C33.2992 9.87029 33.2992 11.6419 33.2992 13.3629C33.2992 13.8185 33.2992 13.8185 32.8485 13.8691C32.1475 13.9703 31.4965 14.0209 30.7955 14.1222C30.2447 14.1728 29.6438 14.2234 29.0429 14.274C28.2918 14.3247 27.5907 14.3753 26.8396 14.3753C26.2888 14.3753 25.6879 14.3753 25.1371 14.3247C24.386 14.274 23.5848 14.274 22.8337 14.2234C22.6334 14.2234 22.383 14.1728 22.1827 14.1728C21.5819 14.1222 20.981 14.0209 20.4301 13.9703C20.0796 13.9197 19.7291 13.8691 19.2784 13.8185ZM33.3493 15.0839V15.3876C33.3493 17.1592 33.3493 18.9815 33.3493 20.7531C33.3493 21.2593 33.0488 21.4618 32.5982 21.4618C28.442 21.4618 24.2358 21.4618 20.0796 21.4618C19.5288 21.4618 19.2784 21.2087 19.2784 20.6519V15.3876V15.1345C19.3786 15.1345 19.4787 15.1345 19.5789 15.1345C20.0796 15.1852 20.6304 15.2864 21.1312 15.337C21.9324 15.4382 22.6835 15.4889 23.4847 15.5395C24.1857 15.5901 24.8367 15.6407 25.5377 15.6407C26.1887 15.6407 26.7896 15.6407 27.4405 15.5901C28.5422 15.5395 29.6438 15.4889 30.7454 15.3876C31.3463 15.337 31.9973 15.2358 32.5982 15.1852C32.8485 15.1345 33.0989 15.1345 33.3493 15.0839Z"
                      fill="white"
                    />
                    <path d="M22.3827 20.8038C23.0337 20.8544 23.5845 20.247 23.5845 19.589C23.5845 18.9816 23.0337 18.3741 22.3827 18.3741C21.7818 18.3741 21.1809 18.9816 21.1809 19.589C21.1809 20.1964 21.7818 20.8544 22.3827 20.8038Z" fill="white" />
                    <path d="M29.6942 20.8038C30.3953 20.8544 30.896 20.247 30.896 19.589C30.896 18.9309 30.245 18.3741 29.6942 18.3741C29.0433 18.3741 28.4924 18.9309 28.4924 19.589C28.4924 20.2976 29.0933 20.8038 29.6942 20.8038Z" fill="white" />
                  </svg>
                }
                title={'Colectivos desde Zona Centro y Nueva Córdoba'}
                subtitle={'13 18 19 80 83'}
                small={true}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="36" height="29" viewBox="0 0 36 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.1895 28.7509C35.1895 12.8917 22.3274 0 6.50475 0V28.7509H35.1895Z" fill="#FF972F" />
                    <path
                      d="M0.0493755 6.71293C0.243519 7.394 0.534733 8.02643 1.02009 8.51291C1.50545 9.04803 2.03935 9.58316 2.57324 10.1183C2.91299 10.4588 3.30128 10.7507 3.64103 11.0426C4.36907 11.6264 5.09711 12.2101 5.87368 12.7939C6.65025 13.3777 7.42683 13.9128 8.2034 14.3993C9.65948 15.3723 11.2612 16.1993 12.8628 16.8803C14.0277 17.4155 15.2411 17.9019 16.406 18.3884C16.9399 18.583 17.4738 18.7776 18.0076 18.9722C18.2989 19.0695 18.5415 19.0208 18.7842 18.7776C19.3667 18.2425 19.9491 17.6587 20.483 17.1236C21.1139 16.5398 21.7934 15.9074 22.4244 15.3236C22.57 15.1777 22.6671 14.9831 22.7642 14.8371V14.5452C22.7156 14.4479 22.6671 14.302 22.57 14.2047C22.3273 13.9128 22.0847 13.6696 21.842 13.4263C21.6964 13.2804 21.4537 13.1831 21.3081 13.2317C20.7257 13.2804 20.1432 13.4263 19.6093 13.475C19.1725 13.5236 18.7842 13.7669 18.3474 13.5723C18.1047 13.475 17.8135 13.329 17.5708 13.2317C16.9884 12.9399 16.406 12.6966 15.775 12.4047C15.9691 12.3561 16.0662 12.3074 16.1633 12.2588C16.9884 11.9183 17.8135 11.5777 18.6386 11.1885C19.2696 10.8967 19.9005 10.6534 20.5315 10.3615C21.0654 10.1183 21.1625 9.53451 20.7742 9.14533C20.2403 8.6102 19.7549 8.07507 19.221 7.5886C19.0754 7.44265 18.7842 7.34536 18.5901 7.34536C17.9591 7.34536 17.3281 7.44265 16.6972 7.4913C15.8721 7.53995 15.047 7.63724 14.2218 7.68589C13.5423 7.73454 12.8143 7.78319 12.1348 7.83184C11.7951 7.88048 11.4068 7.92913 11.067 7.92913C10.7758 7.92913 10.4361 7.97778 10.1934 7.83184C9.80509 7.63724 9.46533 7.29671 9.07705 7.05347C7.86365 6.12916 6.50465 5.49674 5.04857 5.1562C4.66028 5.05891 4.272 5.01026 3.88371 4.91296H2.23349C2.03934 4.96161 1.79667 4.96161 1.60253 5.01026C1.02009 5.1562 0.437664 5.30215 0.146448 5.93457V6.71293H0.0493755ZM20.8227 14.7398C20.8227 14.7885 20.8227 14.7885 20.8227 14.7885C20.6286 14.9344 20.483 15.0804 20.2888 15.2263C19.5608 15.9074 18.8813 16.5884 18.1533 17.3182C18.1047 17.3668 17.9106 17.4155 17.862 17.3668C17.2796 17.1236 16.6972 16.929 16.1147 16.6857C15.1926 16.2966 14.2704 15.9074 13.3967 15.5182C12.2319 14.9831 11.1156 14.4479 9.99923 13.7669C8.93144 13.1345 7.91219 12.4047 6.89293 11.675C5.87368 10.9453 4.9515 10.1183 3.98078 9.33992C3.64103 9.09668 3.34982 8.80479 3.0586 8.51291C2.42764 7.92913 1.79667 7.29671 1.55399 6.42105C2.18495 6.32375 2.76739 6.22646 3.34982 6.2751C4.36907 6.3724 5.29125 6.61564 6.21343 7.05347C7.32976 7.53995 8.25194 8.26967 9.22265 8.99938C9.4168 9.14533 9.70801 9.33992 9.95069 9.33992C10.4846 9.38857 11.0185 9.29127 11.5038 9.24262C11.7951 9.24262 12.0863 9.19397 12.329 9.19397C13.2511 9.09668 14.2218 9.04803 15.144 8.95074C15.8235 8.90209 16.503 8.85344 17.1825 8.80479C17.4738 8.80479 17.7164 8.75614 18.0076 8.75614C18.1047 8.75614 18.2503 8.65885 18.2989 8.7075C18.493 8.90209 18.6871 9.09668 18.9298 9.33992C18.7842 9.38857 18.7842 9.38857 18.7357 9.38857C17.134 10.0696 15.4838 10.7994 13.8821 11.4804C13.5423 11.6264 13.2511 12.1128 13.5909 12.5507C13.7365 12.7453 13.9792 12.9399 14.1733 13.0858C15.2411 13.6209 16.3089 14.1561 17.3281 14.6912C18.0076 15.0804 18.7357 15.129 19.5123 14.9344C19.9491 14.8858 20.3859 14.7885 20.8227 14.7398Z"
                      fill="white"
                    />
                    <path d="M2.86527 23.2534p9.9014V24.7129H2.86527V23.2534Z" fill="white" />
                    <path
                      d="M9.4165 16.881C8.97968 16.6378 8.59139 16.3945 8.10604 16.1513C7.86336 16.6378 7.66921 17.0756 7.42653 17.6107C7.23239 17.4161 7.03825 17.2702 6.94117 17.027C6.8441 16.8324 6.8441 16.5891 6.8441 16.3459C6.8441 16.054 6.94117 15.8108 6.94117 15.5189C6.94117 15.4216 6.89264 15.2756 6.8441 15.227C6.45582 14.9351 6.01899 14.6432 5.58217 14.3513C5.53363 14.5946 5.53363 14.8378 5.4851 15.081C5.43656 15.7621 5.38803 16.4432 5.29096 17.1242C5.24242 17.4161 5.38803 17.6594 5.58217 17.854C6.11606 18.3404 6.60142 18.8269 7.08678 19.362C7.42653 19.7999 8.15457 19.6539 8.34871 19.1188C8.68847 18.3891 9.07675 17.6594 9.4165 16.881Z"
                      fill="white"
                    />
                  </svg>
                }
                title={"12' del aeropuerto"}
                subtitle={''}
                small={true}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.0498 0C15.0585 0 0.465466 14.593 0.465466 32.5843H33.0498V0Z" fill="#FF972F" />
                    <path d="M14.8576 9.84529C17.3065 9.84529 19.3555 7.84625 19.3555 5.34745C19.3555 2.89862 17.3564 0.849609 14.8576 0.849609C12.4088 0.849609 10.3598 2.84865 10.3598 5.34745C10.4098 7.79627 12.4088 9.84529 14.8576 9.84529ZM14.8576 2.19896C16.6068 2.19896 18.0061 3.59829 18.0061 5.34745C18.0061 7.09661 16.6068 8.49593 14.8576 8.49593C13.1085 8.49593 11.7091 7.09661 11.7091 5.34745C11.7091 3.59829 13.1584 2.19896 14.8576 2.19896Z" fill="white" />
                    <path d="M15.3589 4.04796C15.3589 4.49774 15.7088 4.89755 16.2085 4.89755C16.6583 4.89755 17.0581 4.54772 17.0581 4.04796C17.0581 3.59817 16.7083 3.19836 16.2085 3.19836C15.7088 3.19836 15.3589 3.59817 15.3589 4.04796Z" fill="white" />
                    <path d="M14.8576 19.2404C15.2075 19.2404 15.5073 18.9406 15.5073 18.5908V9.14529C15.5073 8.79546 15.2075 8.49561 14.8576 8.49561C14.5078 8.49561 14.2079 8.79546 14.2079 9.14529V18.5908C14.2079 18.9406 14.5078 19.2404 14.8576 19.2404Z" fill="white" />
                    <path d="M14.8589 22.4387C19.4067 22.4387 24.2544 21.0894 24.2544 18.5906C24.2544 16.0918 19.4067 14.7424 14.8589 14.7424C10.3111 14.7424 5.46343 16.0918 5.46343 18.5906C5.46343 21.0894 10.3111 22.4387 14.8589 22.4387ZM14.8589 16.0418C19.7566 16.0418 22.905 17.5411 22.905 18.5906C22.905 19.6401 19.7566 21.1394 14.8589 21.1394C9.96126 21.1394 6.81278 19.6401 6.81278 18.5906C6.81278 17.5411 9.96126 16.0418 14.8589 16.0418Z" fill="white" />
                  </svg>
                }
                title={'Cercanía a bares y restaurantes'}
                subtitle={''}
                small={true}
                darkText={false}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
              <Service
                svg={
                  <svg width="40" height="34" viewBox="0 0 40 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3372 33.2234C26.1908 33.2234 39.0498 20.3571 39.0498 4.49451p0.3372V33.2234Z" fill="#FF972F" />
                    <path
                      d="M13.3755 0C13.3315 0 13.2875 0.0440627 13.2434 0.0440627C11.8783 0.0440627 10.6452 0.440627 9.45619 1.0575C8.31121 1.67438 7.34237 2.46751 6.54969 3.48095C5.88913 4.3622 5.36068 5.28752 5.05241 6.34502C4.87626 6.91784 4.78819 7.53471 4.70011 8.15159C4.65607 8.68034 4.61204 9.2091 4.65607 9.69378C4.70011 10.7072 4.96434 11.7207 5.36068 12.646C5.88913 13.8797 6.68181 14.9372 7.69468 15.8626C8.44332 16.5235 9.28004 17.0522 10.2048 17.4488C10.8654 17.7572 11.57 17.9335 12.3186 18.0657C12.5388 18.1098 12.759 18.1098 12.9792 18.1098C13.0673 18.1098 13.1554 18.1538 13.1994 18.1538p4.2563C14.3444 18.1538 14.4325 18.1098 14.4765 18.1098C14.6967 18.0657 14.9169 18.0657 15.1371 18.0657C15.8417 17.9335 16.5463 17.7572 17.2509 17.4488C18.1757 17.0522 19.0124 16.5235 19.761 15.8626C20.7739 14.9372 21.5225 13.8797 22.095 12.646C22.4914 11.6766 22.7116 10.7072 22.7996 9.69378C22.8437 9.16503 22.7996 8.63628 22.7556 8.15159C22.6675 7.53471 22.5794 6.91784 22.4033 6.34502C22.095 5.28752 21.5666 4.3622 20.906 3.48095C20.1133 2.46751 19.1445 1.63032 17.9995 1.0575C16.8105 0.440627 15.5334 0.0440627 14.2123 0.0440627C13.9921 0.0440627 13.948 0 13.904 0p3.3755ZM13.6398 16.9641C9.28004 17.0082 5.80105 13.395 5.75702 9.29722C5.66894 4.7147 9.28004 1.41 13.1994 1.23375C18.0436 1.01344 21.4345 4.84689 21.5225 8.90066C21.6106 13.395 17.9114 17.0082 13.6398 16.9641Z"
                      fill="white"
                    />
                    <path
                      d="M23.1072 0C22.7549 0.132188 22.6228 0.440627 22.6228 0.793128C22.6228 2.42345 22.6228 4.05376 22.6228 5.68408C22.6228 6.34502 22.843 6.91784 23.3274 7.3144C23.5476 7.53471 23.8118 7.6669 24.076 7.79909C24.2962 7.88722 24.2962 7.97534 24.2962 8.15159C24.2962 11.1919 24.2962 14.2763 24.2962 17.3166C24.2962 17.6691 24.3843 17.9776 24.7366 18.1538H25.0449C25.3531 18.0216 25.4853 17.8013 25.4853 17.4488C25.4853 14.3644 25.4853 11.3241 25.4853 8.23972V7.93128C25.9697 7.75503 26.4541 7.53471 26.7183 7.09409C26.8945 6.82971 27.0266 6.52127 27.1587 6.21283V0.352501C27.0266 0.264376 26.8945 0.132188 26.7183 0H26.4981C26.1458 0.132188 26.0137 0.440627 26.0137 0.793128C26.0137 2.37938 26.0137 4.0097 26.0137 5.59596C26.0137 6.03658 25.8376 6.30096 25.4853 6.6094V6.30096C25.4853 4.45033 25.4853 2.64376 25.4853 0.793128C25.4853 0.396564 25.3972 0.132188 25.0008 0H24.7807C24.4283 0.132188 24.2962 0.440627 24.2962 0.793128C24.2962 2.5997 24.2962 4.45033 24.2962 6.2569V6.56534C23.988 6.34502 23.8118 6.08065 23.8118 5.72815C23.8118 4.09783 23.8118 2.51157 23.8118 0.881253C23.8118 0.440627 23.6797 0.132188 23.2834 0H23.1072Z"
                      fill="white"
                    />
                    <path
                      d="M0.823776 18.1979C1.17608 18.0216 1.26415 17.7573 1.26415 17.3607C1.26415 15.2897 1.26415 13.2188 1.26415 11.1479V10.8835C1.61645 10.8394 1.92472 10.8394 2.23298 10.7954C2.89355 10.6632 3.51007 9.95816 3.46604 9.25316C3.46604 7.09409 3.422 4.93502 3.46604 2.77595C3.46604 1.54219 2.49721 0.396564 1.35223 0.132188C1.17608 0.0440627 0.999927 0.0440627 0.823776 0H0.559551C0.3834 0.132188 0.251288 0.264376 0.0751371 0.352501V18.1538H0.823776V18.1979ZM1.26415 1.36594C1.88068 1.54219 2.32106 2.2472 2.32106 2.73189C2.32106 4.84689 2.32106 6.9619 2.32106 9.07691C2.32106 9.34128 2.18894 9.51754 1.92472 9.5616C1.70453 9.60566 1.48434 9.60566 1.26415 9.64972V1.36594Z"
                      fill="white"
                    />
                    <path
                      d="M13.0675 2.86383C13.0675 3.21633 13.2436 3.43664 13.64 3.43664C14.9171 3.4807 16.1501 3.87727 17.163 4.67039C18.308 5.59571 18.9685 6.74134 19.2328 8.19541C19.2328 8.50385 19.2328 8.81228 19.2328 9.12072C19.2328 9.3851 19.453 9.64947 19.7172 9.69354C19.9374 9.7376 20.2456 9.60541 20.3777 9.3851C20.4218 9.29697 20.4658 9.16479 20.4658 9.07666C20.3777 8.50385 20.3337 7.88697 20.2016 7.31415C19.9814 6.38884 19.541 5.55165 18.9685 4.80258C18.4401 4.09758 17.7795 3.56883 16.9868 3.1282C16.2382 2.68757 15.4455 2.4232 14.5648 2.29101C14.2565 2.24695 13.9042 2.24695 13.5959 2.24695C13.2877 2.29101 13.0675 2.55539 13.0675 2.86383Z"
                      fill="white"
                    />
                    <path
                      d="M6.85858 9.42934C6.90262 10.8393 7.343 12.0731 8.17972 13.1747C8.88432 14.1 9.72104 14.805 10.7779 15.2897C11.4385 15.5981 12.0991 15.8184 12.8037 15.8625C13.0679 15.8625 13.3762 15.9066 13.6404 15.9066C13.9927 15.9066 14.2129 15.6422 14.2129 15.3337C14.2129 14.9812 13.9927 14.7609 13.6404 14.7609C12.2752 14.7169 11.0862 14.3203 10.0293 13.439C9.01643 12.6019 8.35587 11.5003 8.09164 10.1784C8.00356 9.82591 8.00356 9.47341 8.00356 9.12091C8.00356 8.76841 7.6953 8.50403 7.38703 8.50403C7.12281 8.54809 6.77051 8.72434 6.81455 9.12091C6.85858 9.20903 6.85858 9.29716 6.85858 9.42934Z"
                      fill="white"
                    />
                  </svg>
                }
                title={"5' de acceso a circunvalación"}
                subtitle={''}
                small={true}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="43" height="34" viewBox="0 0 43 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8192 33.7508C28.0631 33.7508 42.0498 19.6707 42.0498 2.31165p0.8192V33.7508Z" fill="#FF972F" />
                    <path d="M6.7951 15.0894C6.7951 15.0894 9.42958 17.1147 12.4473 15.0894C15.4649 13.0642 18.0994 15.0894 18.0994 15.0894C18.0994 15.0894 21.4524 17.838 23.7516 15.0894C23.7516 15.0894 26.2424 12.2445 29.4517 15.4752" stroke="white" strokeWidth="1.27782" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3.29865 21.2135C3.29865 21.2135 6.31633 23.2387 9.76511 21.2135C13.2139 19.1882 16.2316 21.2135 16.2316 21.2135C16.2316 21.2135 20.1115 23.962 22.698 21.2135C22.698 21.2135 25.572 18.3685 29.2124 21.5992" stroke="white" strokeWidth="1.27782" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M27.5833 7.23014C27.4875 7.23014 27.3917 7.32658 27.3917 7.42302C27.3917 7.51946 27.4875 7.61589 27.5833 7.61589C27.6791 7.61589 27.7749 7.51946 27.7749 7.42302C27.7749 7.32658 27.6791 7.23014 27.5833 7.23014ZM27.5833 6.26575C28.206 6.26575 28.7329 6.79616 28.7329 7.42302C28.7329 8.04987 28.206 8.58028 27.5833 8.58028C26.9606 8.58028 26.4337 8.04987 26.4337 7.42302C26.4337 6.79616 26.9606 6.26575 27.5833 6.26575Z" fill="white" />
                    <path d="M14.6992 9.83372L10.6277 3.32408C7.13106 -2.17294 5.07137 3.80628 5.07137 3.80628C5.07137 3.80628 2.29319 11.7625 0.999895 14.7039" stroke="white" strokeWidth="1.27782" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M11.9682 5.10806C12.5909 3.17928 14.3153 1.05762 15.5128 1.05762C17.4288 1.05762 20.8776 6.84396 22.2188 8.62808" stroke="white" strokeWidth="1.27782" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                title={'300 metros de la zona bancaria'}
                subtitle={''}
                small={true}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.437092 5.17493C0.437092 22.4255 14.5774 36.4176 32.0107 36.4176V5.17493H0.437092Z" fill="#FF972F" />
                    <path
                      d="M40.0498 11.5962V10.7337L40.0014 10.6857C39.9045 10.1586 39.614 9.67946 39.1297 9.39196C38.4033 8.96069 37.6285 8.52943 36.8537 8.09817C35.6431 7.42731 34.4808 6.70854 33.2702 6.03769C32.2048 5.41475 31.1395 4.83973 30.0741 4.2168C28.8634 3.54594 27.7012 2.82717 26.4906 2.15632C25.7158 1.72505 24.9409 1.24587 24.1661 0.814608C23.7787 0.575018 23.3429 0.383345 22.9071 0.143754C22.8102 0.0479181 22.6165 0.0479181 22.3744 0H22.1322C22.0838 0 22.0354 0.0479181 21.987 0.0479181C21.309 0.143754 20.7763 0.431263 20.4373 1.00628C20.1468 1.53338 19.8562 2.06048 19.5172 2.58758C18.6456 4.07304 17.8223 5.51059 16.9507 6.99605C16.757 7.33148 16.5633 7.47523 16.1759 7.47523C15.4979 7.47523 15.0136 7.81066 14.6262 8.33776C14.4325 8.62527 14.3357 8.96069 14.1904 9.29612V21.5632C14.1904 21.6111 14.2388 21.6111 14.2388 21.659C14.2873 22.234 14.6262 22.7132 15.0621 23.0486C15.3526 23.2882 15.74 23.3361 16.079 23.4799H34.9167L34.9651 23.432C35.982 23.3841 36.8537 22.3299 36.8537 21.3236C36.8053 20.0777 36.8537 18.8318 36.8537 17.6339C36.8537 17.4901 36.9021 17.2984 36.999 17.1547C37.1443 16.8672 37.338 16.5797 37.5317 16.2922C37.9191 15.6692 38.258 15.0463 38.6455 14.3754C39.0813 13.4171 39.7108 12.6025 40.0498 11.5962ZM35.7399 12.7462V18.1131C34.6261 18.2568 33.706 18.6881 32.8828 19.4548C32.108 20.2215 31.6237 21.1798 31.4784 22.2819H31.43C27.5559 22.2819 23.6819 22.2819 19.8078 22.2819C19.6625 22.2819 19.6141 22.234 19.6141 22.0903C19.6141 22.0423 19.6141 21.9465 19.6141 21.8986C19.372 20.7006 18.7424 19.7423 17.7739 19.0235C17.1444 18.5922 16.4664 18.2568 15.74 18.161C15.5463 18.1131 15.4495 18.0651 15.4979 17.8735C15.4979 16.2442 15.4979 14.5671 15.4979 12.9379C15.4979 12.89 15.4979 12.7941 15.4979 12.7941C15.8853 12.6983 16.2243 12.6025 16.5633 12.5066C17.3865 12.2191 18.1129 11.7399 18.694 11.0212C19.2267 10.3982 19.5172 9.67946 19.6625 8.86486C19.711 8.62527 19.7594 8.57735 20.0015 8.57735C23.7787 8.57735 27.5559 8.57735 31.3332 8.57735H31.5753C31.7206 10.8295 33.5607 12.5546 35.7399 12.7462ZM25.6673 2.97092C28.2339 4.45639 30.8489 5.94185 33.4639 7.47523p8.016C18.5972 6.46895 19.1783 5.46267 19.7594 4.45639C22.0838 5.271 24.0209 4.83973 25.6673 2.97092ZM20.3405 3.40219C20.631 2.87509 20.97 2.39591 21.2606 1.82089C21.648 1.10212 22.2775 0.958363 22.8586 1.29379C23.4397 1.62922 24.0693 2.01256 24.6504 2.34799C23.7787 3.59386 21.7933 4.12096 20.3405 3.40219ZM36.8537 9.39196C37.3864 9.67946 37.8706 9.96697 38.4033 10.2545C38.8392 10.4941 39.1781 11.0691 38.8392 11.6441C38.3549 12.5066 37.8706 13.3212 37.3864 14.1838C37.2411 14.4713 37.0474 14.7109 36.9021 15.0463V9.39196H36.8537ZM32.5922 8.57735C33.3186 8.57735 34.045 8.57735 34.723 8.57735C35.1104 8.57735 35.5946 8.96069 35.6431 9.34404C35.6915 9.82322 35.6915 10.2545 35.6915 10.7337C35.6915 11.0212 35.6915 11.3566 35.6915 11.6441C33.9966 11.2608 32.9796 10.2545 32.5922 8.57735ZM35.7399 19.2631C35.7399 19.9819 35.7883 20.6527 35.7399 21.3715C35.6915 21.9465 35.1104 22.3778 34.6745 22.3299C34.384 22.2819 34.0934 22.3299 33.8029 22.3299H32.6407C32.9312 20.4131 34.5777 19.3589 35.7399 19.2631ZM18.4519 8.57735C18.3066 9.87114 17.1928 11.3566 15.4011 11.6441C15.4011 10.9733 15.4495 10.3024 15.4011 9.63155C15.4011 9.20028 15.7885 8.57735 16.3696 8.57735C17.0475 8.52943 17.7255 8.57735 18.4519 8.57735ZM18.4519 22.2819C17.7255 22.2819 17.0475 22.2819 16.3696 22.2819C15.8369 22.2819 15.4011 21.8507 15.4011 21.3236C15.4011 20.7486 15.4011 20.2215 15.4011 19.6464V19.2152C16.9023 19.4548 18.3066 20.8444 18.4519 22.2819Z"
                      fill="white"
                    />
                    <path
                      d="M24.9897 12.2672C24.6023 12.2672 24.2633 12.2672 23.8759 12.2672C23.5369 12.2672 23.3916 12.4588 23.3432 12.7464C23.2948 13.1297 23.5369 13.3214 23.8759 13.3214C24.5054 13.3214 25.135 13.3214 25.7645 13.3214C26.1519 13.3214 26.4909 13.6568 26.5393 14.0401C26.5877 14.3756 26.2972 14.7589 25.9582 14.8548C25.7161 14.9027 25.4739 14.8548 25.1834 14.8548C24.3601 14.9027 23.5853 15.4298 23.3916 16.2444C23.1011 17.3944 23.7306 18.4007 24.9413 18.5924C24.9413 18.784 24.9413 18.9757 24.9413 19.1195C24.8928 19.4549 25.1834 19.6466 25.4739 19.6466C25.8129 19.6466 26.055 19.4549 26.055 19.1195C26.055 18.9757 26.055 18.784 26.055 18.5924C26.394 18.5924 26.733 18.5924 27.0236 18.5924C27.2657 18.5924 27.411 18.5444 27.5562 18.3049C27.7015 18.0653 27.6531 17.8736 27.5562 17.6819C27.411 17.4423 27.1688 17.4423 26.9751 17.4423C26.394 17.4423 25.7645 17.4423 25.1834 17.4423C24.796 17.4423 24.5054 17.1069 24.457 16.7715C24.4086 16.3881 24.6991 16.0048 25.0381 15.9569C25.3287 15.9089 25.5708 15.909 25.8613 15.909C26.6846 15.909 27.4594 15.2381 27.6047 14.4235C27.7499 13.7526 27.5562 13.1776 27.072 12.6984C26.8299 12.4588 26.4909 12.363 26.2003 12.2193C26.055 12.1713 26.055 12.1234 26.0066 11.9797C26.0066 11.7401 25.9582 11.5005 25.9098 11.3088C25.8613 11.1171 25.5708 11.0213 25.3771 11.0692C25.0865 11.1651 24.9413 11.3088 24.9413 11.5484C24.9413 11.6442 24.9413 11.7401 24.9413 11.8359V12.2672H24.9897Z"
                      fill="white"
                    />
                    <path d="M18.5488 16.5318C19.0815 16.5797 19.6626 16.1005 19.6626 15.4776C19.6626 14.8547 19.2268 14.3755 18.5488 14.3755C17.9677 14.3755 17.435 14.8068 17.435 15.4297C17.4834 16.0526 17.9677 16.5797 18.5488 16.5318Z" fill="white" />
                    <path d="M30.6075 15.4294C30.5106 16.1003 31.1886 16.5315 31.6728 16.5315C32.2055 16.5315 32.7866 16.0044 32.7866 15.4294C32.7866 14.8065 32.3024 14.3752 31.6728 14.3752C31.1401 14.3273 30.559 14.7107 30.6075 15.4294Z" fill="white" />
                  </svg>
                }
                title={"15' del centro"}
                subtitle={''}
                small={true}
                darkText={false}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ratingContainer">
        <div className="row w-100">
          <div className="col-lg-7 col-md-7 col-sm-12">
            <div className="ratingContainerMargin">
              <div className="ratingContent">
                <p className="opinionTitle">
                  Nos esforzamos cada día para brindarle un espacio cómodo para trabajar. <b>Tu opinión es relevante.</b>
                </p>
                <p className="opinionSubtitle">Mirá lo que otros usuarios dicen de Vida:</p>
                <div className="opinionContainer">
                  <img src={ExampleRatingPhoto} alt="Vida" className="ratingUserPhoto" />
                  <div className="flex-column opinionInformation">
                    <p className="opinionName">Nombre, Apellido</p>
                    <div className="opinionCalification">
                      <div className="d-flex">
                        <img src={YellowStar} alt="Vida" />
                        <img src={YellowStar} alt="Vida" />
                        <img src={YellowStar} alt="Vida" />
                        <img src={YellowStar} alt="Vida" />
                        <img src={GrayStar} alt="Vida" />
                      </div>
                    </div>
                    <p className="opinionDetail">Me encantó el lugar!! Fui a una reunión con mi empresa.</p>
                  </div>
                </div>
                <div className="opinionContainer">
                  <img src={ExampleRatingPhoto} alt="Vida" className="ratingUserPhoto" />
                  <div className="flex-column opinionInformation">
                    <p className="opinionName">Nombre, Apellido</p>
                    <div className="opinionCalification">
                      <div className="d-flex">
                        <img src={YellowStar} alt="Vida" />
                        <img src={YellowStar} alt="Vida" />
                        <img src={YellowStar} alt="Vida" />
                        <img src={YellowStar} alt="Vida" />
                        <img src={GrayStar} alt="Vida" />
                      </div>
                    </div>
                    <p className="opinionDetail">Me encantó el lugar!! Fui a una reunión con mi empresa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12">
            <div className="consultContainer">
              <p className="consultTitle extraBoldFont">Enviá tu consulta</p>
              <hr className="consultSeparator" />
              <div className="md-form input-with-pre-icon consultDataContainer">
                <i className="fas fa-envelope input-prefix"></i>
                <input type="text" id="consultEmail" className="form-control consultEmail" />
                <label htmlFor="consultEmail" className="consultEmailLabel">
                  E-mail
                </label>
              </div>
              <select className="mdb-select md-form consultSelect boldFont" id="consultSelect" defaultValue="Tipo de Consulta">
                <option value="Tipo de Consulta">Tipo de consulta</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <div className="form-group">
                <label htmlFor="consultContent" id="consultLabel" className="consultLabel boldFont">
                  Consulta
                </label>
                <textarea className="form-control rounded-0 consultInput" id="consultContent" rows="3"></textarea>
              </div>
              <button className="consultButton boldFont">Enviar</button>
            </div>
            <div className="consultContainerMobile">
              <div className="customContainer">
                <p className="consultTitleMobile extraBoldFont">Enviá tu consulta</p>
                <hr className="consultSeparator" />
                <div className="md-form input-with-pre-icon">
                  <i className="fas fa-envelope input-prefix"></i>
                  <input type="text" id="consultEmail" className="form-control consultEmail" />
                  <label htmlFor="consultEmail" className="consultEmailLabel">
                    E-mail
                  </label>
                </div>
                <select className="mdb-select md-form consultSelect" id="consultSelectMobile boldFont" defaultValue="Tipo de Consulta">
                  <option value="Tipo de Consulta">Tipo de consulta</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                <div className="form-group">
                  <label htmlFor="consultInputMobile" id="consultLabel" className="consultLabel boldFont">
                    Consulta
                  </label>
                  <textarea className="form-control rounded-0 consultInputMobile" id="consultInputMobile" rows="3"></textarea>
                </div>
                <button className="consultButtonMobile boldFont">Enviar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ratingContainerMobile">
        <div className="d-flex flex-column">
          <div className="customContainer">
            <p className="opinionSubtitleMobile">
              Nos esforzamos cada día para brindarle un espacio cómodo para trabajar. <b>Tu opinión es relevante.</b>
            </p>
            <p className="opinionContent1Mobile">Mirá lo que otros usuarios dicen de Vida:</p>
          </div>
          <div className="opinionContainerMobile">
            <img src={ExampleRatingPhoto} alt="Vida" className="ratingUserPhoto" />
            <div className="flex-column opinionInformation">
              <p className="opinionName">Nombre, Apellido</p>
              <div className="opinionCalification">
                <div className="d-flex">
                  <img src={YellowStar} alt="Vida" />
                  <img src={YellowStar} alt="Vida" />
                  <img src={YellowStar} alt="Vida" />
                  <img src={YellowStar} alt="Vida" />
                  <img src={GrayStar} alt="Vida" />
                </div>
              </div>
              <p className="opinionDetail">Me encantó el lugar!! Fui a una reunión con mi empresa.</p>
            </div>
          </div>
          <div className="opinionContainerMobile">
            <img src={ExampleRatingPhoto} alt="Vida" className="ratingUserPhoto" />
            <div className="flex-column opinionInformation">
              <p className="opinionName">Nombre, Apellido</p>
              <div className="opinionCalification">
                <div className="d-flex">
                  <img src={YellowStar} alt="Vida" />
                  <img src={YellowStar} alt="Vida" />
                  <img src={YellowStar} alt="Vida" />
                  <img src={YellowStar} alt="Vida" />
                  <img src={GrayStar} alt="Vida" />
                </div>
              </div>
              <p className="opinionDetail">Me encantó el lugar!! Fui a una reunión con mi empresa.</p>
            </div>
          </div>
          <div className="consultContainerMobile">
            <div className="customContainer">
              <p className="consultTitleMobile extraBoldFont">Envía tu consulta</p>
              <hr className="consultSeparator" />
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-envelope input-prefix"></i>
                <input type="text" id="consultEmail" className="form-control" />
                <label htmlFor="consultEmail" className="consultEmailLabel">
                  E-mail
                </label>
              </div>
              <select className="mdb-select md-form consultSelect boldFont" id="consultSelectMobile" defaultValue="Tipo de Consulta">
                <option value="Tipo de Consulta">Tipo de consulta</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <div className="form-group">
                <label htmlFor="consultInputMobile" id="consultLabel" className="consultLabel boldFont">
                  Consulta
                </label>
                <textarea className="form-control rounded-0 consultInputMobile" id="consultInputMobile" rows="3"></textarea>
              </div>
              <button className="consultButtonMobile boldFont">Enviar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="partnersContainer">
        <div className="customContainer">
          <p className="partnersTitle extraBoldFont">NUESTROS PARTNERS</p>
          <div className="partnersLogos">
            <Carousel
              infiniteLoop
              showThumbs={false}
              showArrows
              centerMode
              centerSlidePercentage={20}
              autoplay
              selectedItem={5}
              showIndicators={false}
              showStatus={false}
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
              <img src={Partner1} alt="AnkaLoo" />
              <img src={Partner2} alt="Aliaga" />
              <img src={Partner3} alt="Marangoni" />
              <img src={Partner4} alt="Argentis" />
              <img src={Partner5} alt="Awla" />
              <img src={Partner6} alt="Bodego" />
              <img src={Partner7} alt="Cervetti" />
              <img src={Partner8} alt="Grupo Gauss" />
              <img src={Partner9} alt="Big Capital" />
              <img src={Partner10} alt="Molinos" />
              <img src={Partner11} alt="Weiv" />
              <img src={Partner12} alt="GNorte" />
              <img src={Partner13} alt="Boceto" />
              <img src={Partner14} alt="The Ludwe" />
              <img src={Partner15} alt="NeWaves" />
              <img src={Partner16} alt="Oliver" />
              <img src={Partner17} alt="SocialBits" />
              <img src={Partner18} alt="SimpleState" />
              <img src={Partner19} alt="Solvo" />
              <img src={Partner20} alt="Tempel" />
              <img src={Partner21} alt="Pipncia" />
              <img src={Partner22} alt="Trading Club CBA" />
            </Carousel>
            <Slider {...carouselSettings}></Slider>
          </div>
        </div>
      </div>

      <div className="partnersContainerMiddle">
        <div className="customContainer">
          <p className="partnersTitle extraBoldFont">NUESTROS PARTNERS</p>
          <div className="partnersLogos">
            <Carousel
              infiniteLoop
              showThumbs={false}
              showArrows
              centerMode
              centerSlidePercentage={60}
              autoplay
              selectedItem={5}
              showIndicators={false}
              showStatus={false}
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
              <img src={Partner1} alt="AnkaLoo" />
              <img src={Partner2} alt="Aliaga" />
              <img src={Partner3} alt="Marangoni" />
              <img src={Partner4} alt="Argentis" />
              <img src={Partner5} alt="Awla" />
              <img src={Partner6} alt="Bodego" />
              <img src={Partner7} alt="Cervetti" />
              <img src={Partner8} alt="Grupo Gauss" />
              <img src={Partner9} alt="Big Capital" />
              <img src={Partner10} alt="Molinos" />
              <img src={Partner11} alt="Weiv" />
              <img src={Partner12} alt="GNorte" />
              <img src={Partner13} alt="Boceto" />
              <img src={Partner14} alt="The Ludwe" />
              <img src={Partner15} alt="NeWaves" />
              <img src={Partner16} alt="Oliver" />
              <img src={Partner17} alt="SocialBits" />
              <img src={Partner18} alt="SimpleState" />
              <img src={Partner19} alt="Solvo" />
              <img src={Partner20} alt="Tempel" />
              <img src={Partner21} alt="Pipncia" />
              <img src={Partner22} alt="Trading Club CBA" />
            </Carousel>
            <Slider {...carouselSettings}></Slider>
          </div>
        </div>
      </div>

      <div className="partnersContainerMobile">
        <div className="customContainer">
          <p className="partnersTitle extraBoldFont">NUESTROS PARTNERS</p>
          <div className="partnersLogos">
            <Carousel
              infiniteLoop
              showThumbs={false}
              showArrows
              centerMode
              centerSlidePercentage={100}
              autoplay
              selectedItem={5}
              showIndicators={false}
              showStatus={false}
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
              <img src={Partner1} alt="AnkaLoo" />
              <img src={Partner2} alt="Aliaga" />
              <img src={Partner3} alt="Marangoni" />
              <img src={Partner4} alt="Argentis" />
              <img src={Partner5} alt="Awla" />
              <img src={Partner6} alt="Bodego" />
              <img src={Partner7} alt="Cervetti" />
              <img src={Partner8} alt="Grupo Gauss" />
              <img src={Partner9} alt="Big Capital" />
              <img src={Partner10} alt="Molinos" />
              <img src={Partner11} alt="Weiv" />
              <img src={Partner12} alt="GNorte" />
              <img src={Partner13} alt="Boceto" />
              <img src={Partner14} alt="The Ludwe" />
              <img src={Partner15} alt="NeWaves" />
              <img src={Partner16} alt="Oliver" />
              <img src={Partner17} alt="SocialBits" />
              <img src={Partner18} alt="SimpleState" />
              <img src={Partner19} alt="Solvo" />
              <img src={Partner20} alt="Tempel" />
              <img src={Partner21} alt="Pipncia" />
              <img src={Partner22} alt="Trading Club CBA" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
