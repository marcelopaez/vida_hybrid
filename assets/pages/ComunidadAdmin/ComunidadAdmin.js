import React, { useEffect } from 'react';
import SideMenuAdmin from '../../components/SideMenuAdmin';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';

const ComunidadAdmin = () => {
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
        <SideMenuAdmin />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 p-3">
        <div className="row generalContentBody">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <p className="comunidadAdminNoticeTitle extraBoldFont">Enviar comunicado</p>
            <div className="comunidadAdminNoticeReceiver">
              <p className="comunidadAdminNoticeReceiverText">Enviar a: </p>
              <select className="mdb-select md-form comunidadAdminNoticeReceiverSelect" defaultValue="Todos en Vida Cowork">
                <option value="Todos en Vida Cowork">Todos en Vida Cowork</option>
                <option value="Todos en Vida Cowork">Todos en Vida Cowork</option>
              </select>
            </div>
            <input type="text" className="form-control comunidadAdminNoticeReceiverTitle" placeholder="Título" />
            <div className="md-form comunidadAdminNoticeReceiverMessage">
              <textarea className="md-textarea form-control" rows="3"></textarea>
            </div>
            <select className="mdb-select md-form comunidadAdminNoticeReceiverSelect" defaultValue="Permitir acción (asistir a evento)">
              <option value="Permitir acción (asistir a evento)">Permitir acción (asistir a evento)</option>
              <option value="Permitir acción (asistir a evento)">Permitir acción (asistir a evento)</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
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
