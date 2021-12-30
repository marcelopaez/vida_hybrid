import React, { useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';
import BenefitAdmin from '../../components/BenefitAdmin';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';
import { Carousel } from 'react-responsive-carousel';
import PreviousArrow from '../../images/Icons/PreviousArrow.svg';
import NextArrow from '../../images/Icons/NextArrow.svg';

const ComunidadBeneficiosUsuario = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div className="row marginNavbar generalContent">
      <div className="navbarAdminLarger">
        <NavbarAdmin />
      </div>
      <div className="navbarAdminMobile">
        <NavbarAdminMobile />
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 sideMenu">
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 p-3">
        <div className="generalAdminHeader">
          <div className="generalAdminHeaderLeft">
            <p className="generalAdminHeaderLeftFirstText boldFont">EVENTO</p>
            <div className="generalAdminHeaderLeftSeparator"></div>
            <p className="generalAdminHeaderSecondText">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="generalAdminHeaderRight">
            <button className="generalAdminHeaderRightButton">Botón asistencia</button>
          </div>
        </div>
        <div className="generalContentBody">
          <p className="comunidadBeneficiosUsuarioTitle boldFont">Beneficios</p>
          <div className="comunidadBeneficiosUsuarioBenefitsContainer">
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
              <BenefitAdmin image={Comunidad1} title={'Beneficio 1'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 2'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 3'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 4'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 4'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            </Carousel>
          </div>
        </div>
        <div className="generalAdminFooter">
          <div className="generalAdminFooterLeft">
            <p className="generalAdminFooterLeftFirstText boldFont">Reservá ya</p>
            <div className="generalAdminFooterLeftSeparator"></div>
            <p className="generalAdminFooterSecondText">¿Necesitás un espacio ahora mismo? Reservá la próxima sala disponible</p>
          </div>
          <div className="generalAdminFooterRight">
            <button className="generalAdminFooterRightButton">Reservá</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComunidadBeneficiosUsuario;
