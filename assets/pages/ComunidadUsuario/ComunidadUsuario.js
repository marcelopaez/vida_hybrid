import React, { useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';

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
      <div className="col-lg-10 col-md-9 col-sm-12 p-3">
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
          <p className="comunidadUsuarioTitle boldFont">Aprovechá nuestro espacio al máximo</p>
          <p className="comunidadUsuarioSubtitle">Seguí estas normas de convivencia para evitar inconvenientes.</p>
          <p className="comunidadUsuarioText lightFont">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="communityTitleComunidadUsuario extraBoldFont">Títulos</p>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="cardVidaHorizontal">
                <img className="cardVidaImgHorizontal" src={Comunidad1} alt="Vida" />
                <div className="cardVidaBody">
                  <p className="cardVidaBodyTitle extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="cardVidaBodyContent">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="cardVidaVertical">
                <img className="cardVidaImgTop" src={Comunidad1} alt="Vida" />
                <div className="cardVidaBody">
                  <p className="cardVidaBodyTitle extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="cardVidaBodyContent">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <div className="cardVidaVertical">
                <img className="cardVidaImgTop" src={Comunidad1} alt="Vida" />
                <div className="cardVidaBody">
                  <p className="cardVidaBodyTitle extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="cardVidaBodyContent">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>

          <p className="communityTitleBenefits boldFont">Beneficios</p>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="cardVidaVertical">
                <img className="cardVidaImgTop" src={Comunidad1} alt="Vida" />
                <div className="cardVidaBody">
                  <p className="cardVidaBodyTitle extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="cardVidaBodyContent">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="cardVidaVertical">
                <img className="cardVidaImgTop" src={Comunidad1} alt="Vida" />
                <div className="cardVidaBody">
                  <p className="cardVidaBodyTitle extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="cardVidaBodyContent">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="cardVidaVertical">
                <img className="cardVidaImgTop" src={Comunidad1} alt="Vida" />
                <div className="cardVidaBody">
                  <p className="cardVidaBodyTitle extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="cardVidaBodyContent">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
          </div>

          <p className="communityTitleBenefits boldFont">Notas o lo que se quiera destacar, por ejemplo, eventos</p>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12" style={{ position: 'relative', marginBottom: '75px' }}>
              <div className="cardVidaHorizontal">
                <img className="cardVidaImgTop" src={Comunidad1} alt="Vida" />
                <div className="cardVidaBody">
                  <p className="cardVidaBodyTitle extraBoldFont">Título noticia, artículo, evento</p>
                  <p className="cardVidaBodyContent">Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div>
              </div>
            </div>
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

export default ComunidadUsuario;
