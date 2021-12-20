import React, { useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';

const ComunidadAdmin = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div className="row marginNavbar generalContent">
      {/* <NavbarAdmin /> */}
      <div className="col-lg-2 col-md-3 col-sm-12 p-0">
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
        <div className="row generalContentBody">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <p className="comunidadAdminNoticeTitle extraBoldFont">Enviar comunicado</p>
            <div className="comunidadAdminNoticeReceiver">
              <p className="comunidadAdminNoticeReceiverText">Enviar a: </p>
              <select className="mdb-select md-form comunidadAdminNoticeReceiverSelect" defaultValue="Todos en Vida Cowork">
                <option value="Todos en Vida Cowork">Todos en Vida Cowork</option>
                <option value="Todos en Vida Cowork">Todos en Vida Cowork</option>
              </select>
            </div>
            <input type="text" className="form-control comunidadAdminNoticeReceiverTitle" placeholder="Título" />
            <div class="md-form comunidadAdminNoticeReceiverMessage">
              <textarea class="md-textarea form-control" rows="3"></textarea>
            </div>
            <select className="mdb-select md-form comunidadAdminNoticeReceiverSelect" defaultValue="Permitir acción (asistir a evento)">
              <option value="Permitir acción (asistir a evento)">Permitir acción (asistir a evento)</option>
              <option value="Permitir acción (asistir a evento)">Permitir acción (asistir a evento)</option>
            </select>

            <p className="comunidadAdminTitle boldFont">Aprovechá nuestro espacio al máximo</p>
            <p className="comunidadAdminSubtitle">Seguí estas normas de convivencia para evitar inconvenientes.</p>
            <p className="comunidadAdminText lightFont">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="communityTitleComunidadAdmin extraBoldFont">Títulos</p>

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
              <div className="col-lg-12 col-md-12 col-sm-12" style={{ position: 'relative' }}>
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
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="comunidadAdminRightSide">
              <p className="comunidadAdminRightSideTitle boldFont">Cumpleaños del día</p>
              <div className="comunidadAdminRightSideBirthdayContainer">
                <div className="comunidadAdminRightSideBirthdayImage"></div>
                <div className="comunidadAdminRightSideBirthdayData">
                  <p className="boldFont">Nombre Apellido</p>
                  <p>Ocupación: </p>
                  <p>Usuario desde: </p>
                  <div className="comunidadAdminRightSideBirthdayButtonContainer">
                    <button className="comunidadAdminRightSideBirthdayButton">Ver</button>
                  </div>
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

export default ComunidadAdmin;
