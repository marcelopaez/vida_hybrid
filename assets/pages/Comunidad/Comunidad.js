import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import BackgroundImage from '../../images/Backgrounds/OfficesBackground.jpg';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';
import ComunidadCard from '../../components/ComunidadCard';

const Comunidad = ({ showAlternativeFooter }) => {
  useEffect(() => showAlternativeFooter(), []);
  useEffect(() => window.scroll(0, 0), []);

  return (
    <main>
      <div className="navbarLarger" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="background" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="leftSVGNavbar">
            <div className="communityHeaderContent">
              <p className="communityTitleCommunity extraBoldFont">Comunidad</p>
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

      <div className="comunidadCommunityContainer">
        <div className="customContainer">
          <p className="communityTitleBenefitsCommunity boldFont">Titulos</p>
          <div className="row rowCards">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 mt-0">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 mt-0">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} />
            </div>
            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 mt-0">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} />
            </div>
          </div>

          <p className="communityTitleBenefitsCommunity boldFont">Beneficios</p>
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

          <p className="communityTitleBenefitsCommunity boldFont">Notas o lo que se quiera destacar, por ejemplo, eventos</p>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Comunidad;
