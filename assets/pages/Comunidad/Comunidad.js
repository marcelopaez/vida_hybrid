import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import BackgroundImage from '../../images/Backgrounds/OfficesBackground.jpg';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';

const Comunidad = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <main>
      <div className="navbarLarger">
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

      <div className="communityContainerLargerCommunity">
        <div className="customContainer">
          <p className="communityTitleBenefitsCommunity boldFont">Titulos</p>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="card-vida-horizontal">
                <img className="card-vida-img-horizontal" src={Comunidad1} alt="Vida" />
                <div className="card-vida-body">
                  <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="card-vida-vertical">
                <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
                <div className="card-vida-body">
                  <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="card-vida-vertical">
                <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
                <div className="card-vida-body">
                  <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>

          <p className="communityTitleBenefitsCommunity boldFont">Beneficios</p>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-vida-vertical">
                <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
                <div className="card-vida-body">
                  <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-vida-vertical">
                <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
                <div className="card-vida-body">
                  <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="card-vida-vertical">
                <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
                <div className="card-vida-body">
                  <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>

          <p className="communityTitleBenefitsCommunity boldFont">Notas o lo que se quiera destacar, por ejemplo, eventos</p>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card-vida-horizontal">
                <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
                <div className="card-vida-body">
                  <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="communityContainerMobileCommunity">
        <div className="communityMobileBackground" style={{ backgroundImage: `url(${Comunidad1})` }}>
          <div className="semiCircleHeaderMobile">
            <p className="communityTitleMobile extraBoldFont">Comunidad</p>
          </div>
        </div>
        <div className="customContainer">
          <div className="card-vida-horizontal">
            <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
            <div className="card-vida-body">
              <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
              <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
          <p className="communityTitleBenefitsMobile">Beneficios</p>
          <div className="d-flex justify-content-center flex-wrap">
            <div className="card-vida-vertical">
              <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
              <div className="card-vida-body">
                <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="card-vida-vertical">
              <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
              <div className="card-vida-body">
                <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="card-vida-vertical">
              <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
              <div className="card-vida-body">
                <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
                <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
          </div>
          <p className="communityTitleBenefitsMobile">Título</p>
          <div className="card-vida-horizontal">
            <img className="card-vida-img-top" src={Comunidad1} alt="Vida" />
            <div className="card-vida-body">
              <p className="card-vida-body-title extraBoldFont">Título noticia, artículo, evento</p>
              <p className="card-vida-body-content">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Comunidad;
