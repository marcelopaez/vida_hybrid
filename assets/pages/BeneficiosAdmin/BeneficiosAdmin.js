import React, { useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import { Carousel } from 'react-responsive-carousel';
import BenefitAdmin from '../../components/BenefitAdmin';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';

const BeneficiosAdmin = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div className="row marginNavbar generalContent">
      <NavbarAdmin />
      <div className="col-lg-2 col-md-3 col-sm-12 p-0">
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 p-0">
        <div className="generalAdminHeader">
          <div className="generalAdminHeaderLeft">
            <p className="generalAdminHeaderLeftFirstText boldFont">EVENTO</p>
            <div className="generalAdminHeaderLeftSeparator"></div>
            <p className="generalAdminHeaderSecondText">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div className="generalAdminHeaderRight">
            <button className="generalAdminHeaderRightButton">Botón asistencia</button>
          </div>
        </div>
        <div className="generalContentBody">
          <p className="comunidadAdminTitle boldFont">Beneficios</p>
          <Carousel infiniteLoop showThumbs={false} showArrows centerMode centerSlidePercentage={30} autoplay selectedItem={2} showIndicators={false} showStatus={false}>
            <BenefitAdmin image={Comunidad1} title={'Beneficio 1'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            <BenefitAdmin image={Comunidad1} title={'Beneficio 2'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            <BenefitAdmin image={Comunidad1} title={'Beneficio 3'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            <BenefitAdmin image={Comunidad1} title={'Beneficio 4'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
          </Carousel>
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

export default BeneficiosAdmin;
