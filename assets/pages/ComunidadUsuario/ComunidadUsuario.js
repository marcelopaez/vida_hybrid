import React, { useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';
import BenefitAdmin from '../../components/BenefitAdmin';
import { Carousel } from 'react-responsive-carousel';
import ComunidadCard from '../../components/ComunidadCard';

const ComunidadUsuario = () => {
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
      <div className="col-lg-10 col-md-9 col-sm-12 p-5">
        <div className="generalAdminHeaderMoreMargin">
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
          <p className="comunidadUsuarioTitle boldFont">Aprovechá nuestro espacio al máximo</p>
          <p className="comunidadUsuarioSubtitle">Seguí estas normas de convivencia para evitar inconvenientes.</p>
          <p className="comunidadUsuarioText lightFont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="comunidadUsuarioArticlesTitle boldFont">Títulos</p>

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

          <p className="comunidadUsuarioArticlesTitle boldFont">Beneficios</p>
          <div className="comunidadUsuarioArticlesContainerLarger">
            <Carousel infiniteLoop showThumbs={false} showStatus={false} showIndicators showArrows centerMode centerSlidePercentage={20}>
              <BenefitAdmin image={Comunidad1} title={'Beneficio 1'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 2'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 3'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 4'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            </Carousel>
          </div>
          <div className="comunidadUsuarioArticlesContainerMiddle">
            <Carousel infiniteLoop showThumbs={false} showStatus={false} showIndicators showArrows centerMode centerSlidePercentage={40}>
              <BenefitAdmin image={Comunidad1} title={'Beneficio 1'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 2'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 3'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 4'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            </Carousel>
          </div>
          <div className="comunidadUsuarioArticlesContainerMobile">
            <Carousel infiniteLoop showThumbs={false} showStatus={false} showIndicators showArrows centerMode centerSlidePercentage={100}>
              <BenefitAdmin image={Comunidad1} title={'Beneficio 1'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 2'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 3'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 4'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            </Carousel>
          </div>

          <p className="comunidadUsuarioArticlesTitle boldFont">Notas o lo que se quiera destacar, por ejemplo, eventos</p>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12" style={{ position: 'relative', marginBottom: '75px' }}>
              <ComunidadCard
                image={Comunidad1}
                title={'Título noticia, artículo, evento'}
                content={
                  'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              />
            </div>
          </div>
        </div>
        <div className="generalAdminFooterMoreMargin">
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

export default ComunidadUsuario;
