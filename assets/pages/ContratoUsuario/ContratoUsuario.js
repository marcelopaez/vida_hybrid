import React, { useEffect, useState } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';

const ContratoUsuario = () => {
  useEffect(() => window.scroll(0, 0), []);

  const [signContract, setSignContract] = useState(false);

  return (
    <div className="row marginNavbar generalContent">
      <div className="navbarAdminLarger">
        <NavbarAdmin />
      </div>
      <div className="navbarAdminMobile">
        <NavbarAdminMobile />
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 sideMenu" style={{ height: '1024px' }}>
        <SideMenu />
      </div>

      <div className="col-lg-10 col-md-9 col-sm-12 bg-white px-3" style={{ height: '1024px' }}>
        <div className={`${signContract ? 'generalContentBodyBlur' : 'generalContentBody'}`}>
          <div className="contratoUsuarioContractContainer">
            <p className="contratoUsuarioTitle extraBoldFont">Contrato</p>
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contratoUsuarioContractLeft">
                  <p className="contratoUsuarioContractLeftTitle extraBoldFont">Plan Eter</p>
                  <div className="contratoUsuarioContractLeftSeparator"></div>
                  <div className="contratoUsuarioContractLeftFirstSection">
                    <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.25 3.14285H3.08333C2.5308 3.14285 2.0009 3.36862 1.61019 3.77048C1.21949 4.17235 1 4.71739 1 5.28571V28.8571C1 29.4255 1.21949 29.9705 1.61019 30.3724C2.0009 30.7742 2.5308 31 3.08333 31H23.9167C24.4692 31 24.9991 30.7742 25.3898 30.3724C25.7805 29.9705 26 29.4255 26 28.8571V5.28571C26 4.71739 25.7805 4.17235 25.3898 3.77048C24.9991 3.36862 24.4692 3.14285 23.9167 3.14285H19.75" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.33333 1H17.6667C18.2192 1 18.749T1 1.22576 19.1398 1.62763C19.5305 2.02949 19.75 2.57454 19.75 3.14286C19.75 3.71118 19.5305 4.25622 19.1398 4.65809C18.7491 5.05995 18.2192 5.28571 17.6667 5.28571H9.33333C8.7808 5.28571 8.2509 5.05995 7.86019 4.65809C7.46949 4.25622 7.25 3.71118 7.25 3.14286C7.25 2.57454 7.46949 2.02949 7.86019 1.62763C8.2509 1.22576 8.7808 1 9.33333 1Z"
                        stroke="#004b2a"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M11.4165 11.7143H21.8332" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.4165 18.1429H21.8332" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M11.4165 24.5714H21.8332" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.1665 11.7143H7.24984" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.1665 18.1429H7.24984" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5.1665 24.5714H7.24984" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="contratoUsuarioContractLeftFirstSectionDescription boldFont">
                      1 día a la semana <br /> PART: Incluye 3 Hs. en salas de reunión
                    </p>
                  </div>
                  <div className="contratoUsuarioContractLeftSeparator"></div>
                  <div className="contratoUsuarioContractLeftSecondSection">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.6816 21.1845V11.5166H10.5342C9.71254 11.9546 8.91839 12.4425 8.15625 12.9775V14.2372C8.83594 13.7714 9.91256 13.1134 10.4364 12.8289H10.4581V21.1845H11.6816ZM13.8348 18.8192C13.92 19.9792 14.9114 21.3676 16.9215 21.3676C19.2016 21.3676 20.5465 19.4354 20.5465 16.1639C20.5465 12.6585 19.1309 11.3281 17.0067 11.3281C15.3283 11.3281 13.7496 12.5461 13.7496 14.6069C13.7496 16.7094 15.2431 17.8151 16.7874 17.8151C18.1395 17.8151 19.0168 17.1336 19.2941 16.3832H19.343C19.3357 18.7684 18.5074 20.3054 16.9777 20.3054C15.7742 20.3054 15.1507 19.4898 15.0746 18.8192H13.8348ZM19.1871 14.6196C19.1871 15.8811 18.1739 16.7584 17.0411 16.7584C15.9518 16.7584 14.9676 16.0642 14.9676 14.5834C14.9676 13.0917 16.0225 12.3902 17.0846 12.3902C18.2319 12.3902 19.1871 13.1116 19.1871 14.6196Z"
                        fill="#004b2a"
                      />
                      <path
                        d="M6.34375 0C6.5841 0 6.81461 0.0954797 6.98457 0.265435C7.15452 0.435389 7.25 0.665898 7.25 0.90625V1.8125H21.75V0.90625C21.75 0.665898 21.8455 0.435389 22.0154 0.265435C22.1854 0.0954797 22.4159 0 22.6562 0C22.8966 0 23.1271 0.0954797 23.2971 0.265435C23.467 0.435389 23.5625 0.665898 23.5625 0.90625V1.8125H25.375C26.3364 1.8125 27.2584 2.19442 27.9383 2.87424C28.6181 3.55406 29 4.47609 29 5.4375V25.375C29 26.3364 28.6181 27.2584 27.9383 27.9383C27.2584 28.6181 26.3364 29 25.375 29H3.625C2.66359 29 1.74156 28.6181 1.06174 27.9383C0.381919 27.2584 0 26.3364 0 25.375V5.4375C0 4.47609 0.381919 3.55406 1.06174 2.87424C1.74156 2.19442 2.66359 1.8125 3.625 1.8125H5.4375V0.90625C5.4375 0.665898 5.53298 0.435389 5.70293 0.265435C5.87289 0.0954797 6.1034 0 6.34375 0V0ZM1.8125 7.25V25.375C1.8125 25.8557 2.00346 26.3167 2.34337 26.6566C2.68328 26.9965 3.14429 27.1875 3.625 27.1875H25.375C25.8557 27.1875 26.3167 26.9965 26.6566 26.6566C26.9965 26.3167 27.1875 25.8557 27.1875 25.375V7.25H1.8125Z"
                        fill="#004b2a"
                      />
                    </svg>
                    <p className="contratoUsuarioContractLeftSecondSectionDescription boldFont">
                      Fecha de firma <br />
                      12/10/2021
                    </p>
                  </div>
                  <div className="contratoUsuarioContractLeftSeparator"></div>
                  <div className="contratoUsuarioContractLeftThirdtSection">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z" fill="#004b2a" />
                      <path d="M7.5 17.25C8.74264 17.25 9.75 16.2426 9.75 15C9.75 13.7574 8.74264 12.75 7.5 12.75C6.25736 12.75 5.25 13.7574 5.25 15C5.25 16.2426 6.25736 17.25 7.5 17.25Z" fill="#004b2a" />
                      <path d="M15 17.25C16.2426 17.25 17.25 16.2426 17.25 15C17.25 13.7574 16.2426 12.75 15 12.75C13.7574 12.75 12.75 13.7574 12.75 15C12.75 16.2426 13.7574 17.25 15 17.25Z" fill="#004b2a" />
                      <path d="M22.5 17.25C23.7426 17.25 24.75 16.2426 24.75 15C24.75 13.7574 23.7426 12.75 22.5 12.75C21.2574 12.75 20.25 13.7574 20.25 15C20.25 16.2426 21.2574 17.25 22.5 17.25Z" fill="#004b2a" />
                    </svg>
                    <p className="contratoUsuarioContractLeftThirdtSectionDescription boldFont">
                      Estado <br /> Pendiente de firma
                    </p>
                  </div>
                  <button
                    className="contratoUsuarioContractLeftButton"
                    onClick={() => {
                      window.scroll(0, 0);
                      setSignContract(true);
                    }}>
                    Firmar
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="contratoUsuarioContractRight">
                  <div className="contactAdminContractRightNameContainer">
                    <svg width="34" height="40" viewBox="0 0 34 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M22.4815 24.4615C22.2369 24.3815 20.6907 23.6846 21.6569 20.7477H21.643C24.1615 18.1538 26.0861 13.98 26.0861 9.87076C26.0861 3.5523 21.8846 0.23999 17.0015 0.23999C12.1154 0.23999 7.93689 3.55076 7.93689 9.87076C7.93689 13.9969 9.85074 18.1877 12.3846 20.7754C13.3723 23.3661 11.6061 24.3277 11.2369 24.4631C6.12305 26.3123 0.123047 29.6831 0.123047 33.0108V34.2585C0.123047 38.7923 8.91382 39.8231 17.0492 39.8231C25.1969 39.8231 33.8769 38.7923 33.8769 34.2585V33.0108C33.8769 29.5831 27.8477 26.2385 22.4815 24.4615Z"
                        fill="#004B2A"
                      />
                    </svg>
                    <p className="contratoUsuarioContractRightName">
                      Nombre <br />
                      DNI
                    </p>
                  </div>
                  <p className="contratoUsuarioContractRightDescription lightFont">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <div className="contratoUsuarioContractRightStatusContainer">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z" fill="#004b2a" />
                      <path d="M7.5 17.25C8.74264 17.25 9.75 16.2426 9.75 15C9.75 13.7574 8.74264 12.75 7.5 12.75C6.25736 12.75 5.25 13.7574 5.25 15C5.25 16.2426 6.25736 17.25 7.5 17.25Z" fill="#004b2a" />
                      <path d="M15 17.25C16.2426 17.25 17.25 16.2426 17.25 15C17.25 13.7574 16.2426 12.75 15 12.75C13.7574 12.75 12.75 13.7574 12.75 15C12.75 16.2426 13.7574 17.25 15 17.25Z" fill="#004b2a" />
                      <path d="M22.5 17.25C23.7426 17.25 24.75 16.2426 24.75 15C24.75 13.7574 23.7426 12.75 22.5 12.75C21.2574 12.75 20.25 13.7574 20.25 15C20.25 16.2426 21.2574 17.25 22.5 17.25Z" fill="#004b2a" />
                    </svg>
                    <p className="contratoUsuarioContractRightStatus">
                      Nombre <br />
                      DNI
                    </p>
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
            <p className="generalAdminFooterSecondext">¿Necesitás un espacio ahora mismo? Reservá la próxima sala disponible</p>
          </div>
          <div className="generalAdminFooterRight">
            <button className="generalAdminFooterRightButton">Reservá</button>
          </div>
        </div>
        {signContract && (
          <div className="contratoUsuarioSignModal">
            <div className="contratoUsuarioSignModalHeader">
              <p className="contratoUsuarioSignModalHeaderTitle extraBoldFont">ATENCIÓN</p>
              <p className="contratoUsuarioSignModalHeaderX" onClick={() => setSignContract(false)}>
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                </svg>
              </p>
            </div>
            <div className="contratoUsuarioSignModalBody">
              <div className="d-flex">
                <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.25 3.14285H3.08333C2.5308 3.14285 2.0009 3.36862 1.61019 3.77048C1.21949 4.17235 1 4.71739 1 5.28571V28.8571C1 29.4255 1.21949 29.9705 1.61019 30.3724C2.0009 30.7742 2.5308 31 3.08333 31H23.9167C24.4692 31 24.9991 30.7742 25.3898 30.3724C25.7805 29.9705 26 29.4255 26 28.8571V5.28571C26 4.71739 25.7805 4.17235 25.3898 3.77048C24.9991 3.36862 24.4692 3.14285 23.9167 3.14285H19.75" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.33333 1H17.6667C18.2192 1 18.7491 1.22576 19.1398 1.62763C19.5305 2.02949 19.75 2.57454 19.75 3.14286C19.75 3.71118 19.5305 4.25622 19.1398 4.65809C18.7491 5.05995 18.2192 5.28571 17.6667 5.28571H9.33333C8.7808 5.28571 8.2509 5.05995 7.86019 4.65809C7.46949 4.25622 7.25 3.71118 7.25 3.14286C7.25 2.57454 7.46949 2.02949 7.86019 1.62763C8.2509 1.22576 8.7808 1 9.33333 1Z"
                    stroke="#004b2a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M11.4165 11.7143H21.8332" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.4165 18.1429H21.8332" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.4165 24.5714H21.8332" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.1665 11.7143H7.24984" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.1665 18.1429H7.24984" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5.1665 24.5714H7.24984" stroke="#004b2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="contratoUsuarioSignModalBodyDescription">
                  <b>Plan eter</b> <br /> PART: Incluye 3 Hs. en salas de reunión <br /> <b>Fecha de firma</b> <br /> 20/10/2021
                </p>
              </div>
            </div>
            <div className="custom-control custom-checkbox contratoUsuarioSignModalFooter">
              <input type="checkbox" className="custom-control-input" id="acceptTerms" />
              <label className="custom-control-label" htmlFor="acceptTerms">
                Acepto términos y condiciones
              </label>
            </div>
            <div className="contratoUsuarioSignModalButton boldFont">Firmar</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContratoUsuario;
