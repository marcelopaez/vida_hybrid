import React, { useEffect, useState } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';

const GeneralAdmin = () => {
  useEffect(() => window.scroll(0, 0), []);

  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  return (
    <div className="row marginNavbar generalContent">
      <NavbarAdmin />
      <div className="col-lg-2 col-md-3 col-sm-12 p-0">
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 bg-white p-0">
        <div className="generalAdminLarger">
          <div className="generalContentAdminBody">
            <p className="generalAdminTitle extraBoldFont">No te quedes sin lugar, reservá</p>
            <div className="blocksContainerGeneralAdmin">
              <div className="blockGeneralAdmin">
                <div className="blockGeneralAdminTitleContainer1">
                  <p className="blockGeneralAdminTitle extraBoldFont">Espacio compartido</p>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="blockGeneralAdminInfoHover" onMouseEnter={() => setShowInfo1(true)} onMouseLeave={() => setShowInfo1(false)}>
                    <path
                      d="M16 0.25C7.30234 0.25 0.25 7.30234 0.25 16C0.25 24.6977 7.30234 31.75 16 31.75C24.6977 31.75 31.75 24.6977 31.75 16C31.75 7.30234 24.6977 0.25 16 0.25ZM17.125 23.5938C17.125 23.7484 16.9984 23.875 16.8438 23.875H15.1562C15.0016 23.875 14.875 23.7484 14.875 23.5938V14.0312C14.875 13.8766 15.0016 13.75 15.1562 13.75H16.8438C16.9984 13.75 17.125 13.8766 17.125 14.0312V23.5938ZM16 11.5C15.5584 11.491 15.138 11.3092 14.8288 10.9937C14.5197 10.6783 14.3466 10.2542 14.3466 9.8125C14.3466 9.37082 14.5197 8.94674 14.8288 8.63125C15.138 8.31576 15.5584 8.13401 16 8.125C16.4416 8.13401 16.8621 8.31576 17.1712 8.63125C17.4803 8.94674 17.6534 9.37082 17.6534 9.8125C17.6534 10.2542 17.4803 10.6783 17.1712 10.9937C16.8621 11.3092 16.4416 11.491 16 11.5Z"
                      fill="#004B2A"
                    />
                  </svg>
                  {showInfo1 && (
                    <div className="blockGeneralAdminInfoHoverContainer">
                      <p className="blockGeneralAdminInfoHoverText">Los creditos Vida son los que te daran acceso a dias en Vida Cowork. Un credito = jornada part timeSi queres asistir un dia entero, se utilizaran 2 creditos</p>
                    </div>
                  )}
                </div>
                <div className="blockGeneralAdminSeparator"></div>
                <p className="blockGeneralAdminContent1">Créditos Vida disponibles</p>
                <p className="blockGeneralAdminContent2 extraBoldFont">5</p>
                <button className="blockGeneralAdminButton">Reservá</button>
              </div>
              <div className="blockGeneralAdmin">
                <div className="blockGeneralAdminTitleContainer2">
                  <p className="blockGeneralAdminTitle extraBoldFont">Salas de reunión</p>
                  <svg svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="blockGeneralAdminInfoHover" onMouseEnter={() => setShowInfo2(true)} onMouseLeave={() => setShowInfo2(false)}>
                    <path
                      d="M16 0.25C7.30234 0.25 0.25 7.30234 0.25 16C0.25 24.6977 7.30234 31.75 16 31.75C24.6977 31.75 31.75 24.6977 31.75 16C31.75 7.30234 24.6977 0.25 16 0.25ZM17.125 23.5938C17.125 23.7484 16.9984 23.875 16.8438 23.875H15.1562C15.0016 23.875 14.875 23.7484 14.875 23.5938V14.0312C14.875 13.8766 15.0016 13.75 15.1562 13.75H16.8438C16.9984 13.75 17.125 13.8766 17.125 14.0312V23.5938ZM16 11.5C15.5584 11.491 15.138 11.3092 14.8288 10.9937C14.5197 10.6783 14.3466 10.2542 14.3466 9.8125C14.3466 9.37082 14.5197 8.94674 14.8288 8.63125C15.138 8.31576 15.5584 8.13401 16 8.125C16.4416 8.13401 16.8621 8.31576 17.1712 8.63125C17.4803 8.94674 17.6534 9.37082 17.6534 9.8125C17.6534 10.2542 17.4803 10.6783 17.1712 10.9937C16.8621 11.3092 16.4416 11.491 16 11.5Z"
                      fill="#004B2A"
                    />
                  </svg>
                  {showInfo2 && (
                    <div className="blockGeneralAdminInfoHoverContainer">
                      <p className="blockGeneralAdminInfoHoverText">Los creditos Vida son los que te daran acceso a dias en Vida Cowork. Un credito = jornada part timeSi queres asistir un dia entero, se utilizaran 2 creditos 2</p>
                    </div>
                  )}
                </div>
                <div className="blockGeneralAdminSeparator"></div>
                <p className="blockGeneralAdminContent1">Horas disponibles</p>
                <p className="blockGeneralAdminContent2 extraBoldFont">3</p>
                <button className="blockGeneralAdminButton">Reservá</button>
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
        <div className="generalAdminMobile">
          <div className="customContainer">
            <p className="generalAdminTitleMobile extraBoldFont">No te quedes sin lugar, reservá</p>
            <div className="blocksContainerGeneralAdmin">
              <div className="blockGeneralAdmin">
                <p className="blockGeneralAdminTitle extraBoldFont">Espacio compartido</p>
                <div className="blockGeneralAdminSeparator"></div>
                <p className="blockGeneralAdminContent1">Créditos Vida disponibles</p>
                <p className="blockGeneralAdminContent2 extraBoldFont">5</p>
                <button className="blockGeneralAdminButton">Reservá</button>
              </div>
              <div className="blockGeneralAdmin">
                <p className="blockGeneralAdminTitle extraBoldFont">Salas de reunión</p>
                <div className="blockGeneralAdminSeparator"></div>
                <p className="blockGeneralAdminContent1">Horas disponibles</p>
                <p className="blockGeneralAdminContent2 extraBoldFont">3</p>
                <button className="blockGeneralAdminButton">Reservá</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralAdmin;
