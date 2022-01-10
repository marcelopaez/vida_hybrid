import React, { useEffect, useRef } from 'react';
import SideMenuAdmin from '../../components/SideMenuAdmin';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';
import ComunidadCard from '../../components/ComunidadCard';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';

const ComunidadAdmin = () => {
  useEffect(() => window.scroll(0, 0), []);

  const noticeReceiver = useRef(null);
  const noticeTitle = useRef(null);
  const noticeContent = useRef(null);
  const noticeAction = useRef(null);

  return (
    <div className="row marginNavbar generalContent">
      <div className="navbarAdminLarger">
        <NavbarAdmin />
      </div>
      <div className="navbarAdminMobile">
        <NavbarAdminMobile />
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 sideMenu sideMenuComunidadAdmin">
        <SideMenuAdmin />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 px-3 panelContentComunidadAdmin">
        <div className="row generalContentBody">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <p className="comunidadAdminNoticeTitle extraBoldFont">Enviar comunicado</p>
            <div className="comunidadAdminNoticeReceiver">
              <p className="comunidadAdminNoticeReceiverText">Enviar a: </p>
              <select className="mdb-select md-form comunidadAdminNoticeReceiverSelect" defaultValue="Todos en Vida Cowork" ref={noticeReceiver}>
                <option value="Todos en Vida Cowork">Todos en Vida Cowork</option>
                <option value="Todos en Vida Cowork">Todos en Vida Cowork</option>
              </select>
            </div>
            <input type="text" className="form-control comunidadAdminNoticeReceiverTitle" placeholder="Título" ref={noticeTitle} />
            <div className="md-form comunidadAdminNoticeReceiverMessage">
              <textarea className="md-textarea form-control" rows="3" ref={noticeContent}></textarea>
            </div>
            <select className="mdb-select md-form comunidadAdminNoticeReceiverSelect" defaultValue="Permitir acción (asistir a evento)" ref={noticeAction}>
              <option value="Permitir acción (asistir a evento)">Permitir acción (asistir a evento)</option>
              <option value="Permitir acción (asistir a evento)">Permitir acción (asistir a evento)</option>
            </select>
            <p className="comunidadAdminArticlesTitle boldFont">Títulos</p>
            <div className="row rowCards">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} admin={true} />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} vertical={true} admin={true} />
              </div>
            </div>
            <p className="comunidadAdminArticlesTitle boldFont">Notas o lo que se quiera destacar, por ejemplo, eventos</p>
            <ComunidadCard image={Comunidad1} title={'Título noticia, artículo, evento'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} admin={true} />
          </div>
          <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
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
      </div>
    </div>
  );
};

export default ComunidadAdmin;
