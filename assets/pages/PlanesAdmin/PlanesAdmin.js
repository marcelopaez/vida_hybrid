import React, { useEffect } from 'react';
import SideMenuAdmin from '../../components/SideMenuAdmin';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';

const PlanesAdmin = () => {
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
      <div className="col-lg-10 col-md-9 col-sm-12 p-3" style={{ backgroundColor: '#e5e5e5' }}>
        <div className="row generalContentBody">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <p className="planesAdminTitle extraBoldFont">Planes</p>
            <div className="planesAdminPlanesContainer">
              <div className="planesAdminPlan">
                <p className="planesAdminPlanTitle">Eter</p>
                <hr />
                <p className="planesAdminPlanQuantity extraBoldFont">24</p>
                <p className="planesAdminPlanDetail lightFont">Personas suscritas</p>
              </div>

              <div className="planesAdminPlan">
                <p className="planesAdminPlanTitle">Aire</p>
                <hr />
                <p className="planesAdminPlanQuantity extraBoldFont">24</p>
                <p className="planesAdminPlanDetail lightFont">Personas suscritas</p>
              </div>

              <div className="planesAdminPlan">
                <p className="planesAdminPlanTitle">Agua</p>
                <hr />
                <p className="planesAdminPlanQuantity extraBoldFont">24</p>
                <p className="planesAdminPlanDetail lightFont">Personas suscritas</p>
              </div>

              <div className="planesAdminPlan">
                <p className="planesAdminPlanTitle">Fuego</p>
                <hr />
                <p className="planesAdminPlanQuantity extraBoldFont">24</p>
                <p className="planesAdminPlanDetail lightFont">Personas suscritas</p>
              </div>

              <div className="planesAdminPlan">
                <p className="planesAdminPlanTitle">Tierra</p>
                <hr />
                <p className="planesAdminPlanQuantity extraBoldFont">24</p>
                <p className="planesAdminPlanDetail lightFont">Personas suscritas</p>
              </div>
            </div>

            <p className="planesAdminNumbersTitle extraBoldFont">Números generales</p>

            <div className="planesAdminGeneralNumbersContainer">
              <div className="planesAdminGeneralNumbers">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="#9f9d9b" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.5 17.5C20.5 17.25 19.5 16.75 18.75 16C18 15.75 17.75 15 17.75 14.5C17.75 14 18 13.25 18.5 13C19.25 12.5 20 12 20.75 12.25C22.25 12.25 23.5 13 24.25 14L26.5 11C25.75 10.25 25 9.75 24.25 9.25C23.5 8.75 22.5 8.5 21.5 8.5V5H18.5V8.5C17.25 8.75 16 9.5 15 10.5C14 11.75 13.25 13.25 13.5 14.75C13.5 16.25 14 17.75 15 18.75C16.25 20 18 20.75 19.5 21.5C20.25 21.75 21.25 22.25 22 22.75C22.5 23.25 22.75 24 22.75 24.75C22.75 25.5 22.5 26.25 22 27C21.25 27.75 20.25 28 19.5 28C18.5 28 17.25 27.75 16.5 27C15.75 26.5 15 25.75 14.5 25L12 27.75C12.75 28.75 13.5 29.5 14.5 30.25C15.75 31 17.25 31.75 18.75 31.75V35H21.5V31.25C23 31 24.25 30.25 25.25 29.25C26.5 28 27.25 26 27.25 24.25C27.25 22.75 26.75 21 25.5 20C24.25 18.75 23 18 21.5 17.5V17.5ZM20 0C9 0 0 9 0 20C0 31 9 40 20 40C31 40 40 31 40 20C40 9 31 0 20 0ZM20 37.25C10.5 37.25 2.75 29.5 2.75 20C2.75 10.5 10.5 2.75 20 2.75C29.5 2.75 37.25 10.5 37.25 20C37.25 29.5 29.5 37.25 20 37.25V37.25Z"
                    fill="#9f9d9b"
                  />
                </svg>
                <div className="planesAdminGeneralNumbersSeparator"></div>
                <div>
                  <p className="planesAdminGeneralNumbersTitle">Ingresos totales</p>
                  <div className="planesAdminGeneralNumbersAmount extraBoldFont">$25464</div>
                </div>
              </div>

              <div className="planesAdminGeneralNumbers">
                <svg width="34" height="40" viewBox="0 0 34 40" fill="#9f9d9b" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.4815 24.4615C22.2369 24.3815 20.6907 23.6846 21.6569 20.7477H21.643C24.1615 18.1538 26.0861 13.98 26.0861 9.87076C26.0861 3.5523 21.8846 0.23999 17.0015 0.23999C12.1154 0.23999 7.93689 3.55076 7.93689 9.87076C7.93689 13.9969 9.85074 18.1877 12.3846 20.7754C13.3723 23.3661 11.6061 24.3277 11.2369 24.4631C6.12305 26.3123 0.123047 29.6831 0.123047 33.0108V34.2585C0.123047 38.7923 8.91382 39.8231 17.0492 39.8231C25.1969 39.8231 33.8769 38.7923 33.8769 34.2585V33.0108C33.8769 29.5831 27.8477 26.2385 22.4815 24.4615Z"
                    fill="#9f9d9b"
                  />
                </svg>
                <div className="planesAdminGeneralNumbersSeparator"></div>
                <div>
                  <p className="planesAdminGeneralNumbersTitle">Total usuarios</p>
                  <div className="planesAdminGeneralNumbersAmount extraBoldFont">464</div>
                </div>
              </div>

              <div className="planesAdminGeneralNumbers">
                <svg width="27" height="32" viewBox="0 0 27 32" fill="#9f9d9b" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.25 3.14282H3.08333C2.5308 3.14282 2.0009 3.36859 1.61019 3.77045C1.21949 4.17231 1 4.71736 1 5.28568V28.8571C1 29.4254 1.21949 29.9705 1.61019 30.3723C2.0009 30.7742 2.5308 31 3.08333 31H23.9167C24.4692 31 24.9991 30.7742 25.3898 30.3723C25.7805 29.9705 26 29.4254 26 28.8571V5.28568C26 4.71736 25.7805 4.17231 25.3898 3.77045C24.9991 3.36859 24.4692 3.14282 23.9167 3.14282H19.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.33333 1H17.6667C18.2192 1 18.7491 1.22576 19.1398 1.62763C19.5305 2.02949 19.75 2.57454 19.75 3.14286C19.75 3.71118 19.5305 4.25622 19.1398 4.65809C18.7491 5.05995 18.2192 5.28571 17.6667 5.28571H9.33333C8.7808 5.28571 8.2509 5.05995 7.86019 4.65809C7.46949 4.25622 7.25 3.71118 7.25 3.14286C7.25 2.57454 7.46949 2.02949 7.86019 1.62763C8.2509 1.22576 8.7808 1 9.33333 1Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M11.4165 11.7142H21.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.4165 18.1428H21.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.4165 24.5714H21.8332" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.1665 11.7142H7.24984" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.1665 18.1428H7.24984" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.1665 24.5714H7.24984" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="planesAdminGeneralNumbersSeparator"></div>
                <div>
                  <p className="planesAdminGeneralNumbersTitle">Total planes vendidos</p>
                  <div className="planesAdminGeneralNumbersAmount extraBoldFont">25464</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="planesAdminRightSide">
              <p className="planesAdminRightSideTitle extraBoldFont">Detalle</p>
              <div className="planesAdminRightSideDetail">
                <div className="planesAdminRightSideDetailTitle">Tierra</div>
                <hr className="planesAdminRightSideDetailSeparator" />
                <p className="planesAdminRightSideDetailNumber extraBoldFont">24</p>
                <p className="planesAdminRightSideDetailText lightFont">Personas suscritas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanesAdmin;
