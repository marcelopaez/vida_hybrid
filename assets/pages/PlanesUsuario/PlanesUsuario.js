import React, { useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';

const PlanesUsuario = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div className="row marginNavbar generalContent">
      <div className="navbarAdminLarger">
        <NavbarAdmin />
      </div>
      <div className="navbarAdminMobile">
        <NavbarAdminMobile />
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 sideMenu" style={{ height: '1224px' }}>
        <SideMenu />
      </div>

      <div className="col-lg-10 col-md-9 col-sm-12 bg-white px-3">
        <div className="planesUsuarioLarger">
          <div className="generalContentAdminBody">
            <div className="creditsBlocksContainerPlanesUsuario">
              <div className="row">
                <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                  <div className="creditsLeftBlockPlanesUsuario">
                    <p className="creditsLeftBlockTitle extraBoldFont">Te quedan 2 créditos de tu plan</p>
                    <p className="creditsLeftBlockSubtitle">Utilizalos en espacio compartido</p>
                    <div className="progress" style={{ paddingBottom: '90px' }}>
                      <div className="progress-bar progressBarPlanesUsuario" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div className="creditsLeftBlockFooter">
                      <p className="creditsLeftBlockFooterText extraBoldFont">¡No te quedes sin lugar!</p>
                      <button className="creditsLeftBlockFooterButton">Reservá</button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                  <div className="creditsRightBlockPlanesUsuario">
                    <p className="creditsRightBlockTitle extraBoldFont">No te quedes sin créditos</p>
                    <p className="creditsRightBlockSubtitle">Recargá créditos para seguir utilizando el espacio compartido</p>
                    <button className="creditsRightBlockButton">Recargá</button>
                  </div>
                </div>
              </div>
            </div>

            <p className="planesUsuarioTitle extraBoldFont">Planes</p>

            <div className="plansPlanesUsuarioSection">
              <div className="actualPlanPlanesUsuario">
                <svg className="actualPlanPlanesUsuarioSVG" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9712 46.9843V62C23.2704 62 30.1051 55.2187 30.1051 46.9843V31.9686C21.8058 31.9686 14.9712 38.5885 14.9712 46.9843Z" fill="#00AF62" />
                  <path d="M31.7324 15.0157V30.0314C40.0316 30.0314 46.8663 23.2501 46.8663 15.0157V0C38.5671 0 31.7324 6.78128 31.7324 15.0157Z" fill="#00AF62" />
                  <path d="M15.1339 15.6619H0C0 23.8963 6.83465 30.6776 15.1339 30.6776H30.2677C30.2677 22.4431 23.4331 15.6619 15.1339 15.6619Z" fill="#00AF62" />
                  <path d="M46.8663 46.6618H62.0001C62.0001 38.4274 55.1655 31.6461 46.8663 31.6461H31.7324C31.7324 40.042 38.5671 46.6618 46.8663 46.6618Z" fill="#00AF62" />
                </svg>

                <p className="actualPlanPlanesUsuarioTitle extraBoldFont">Estás suscrito al plan Eter</p>
                <div className="actualPlanPlanesUsuarioSeparator"></div>
                <p className="actualPlanPlanesUsuarioDescription1 boldFont">1 día a la semana</p>
                <p className="actualPlanPlanesUsuarioDescription2">PART: Incluye 3 Hs. en salas de reunión</p>
                <button className="actualPlanPlanesUsuarioButton">Ver detalle</button>
              </div>
              <div className="otherPlanPlanesUsuario">
                <svg className="otherPlanPlanesUsuarioSVG">
                  <path d="M13.0501 4.32912L1.77159 0C-0.620814 6.1519 2.45514 13.1013 8.72097 15.4937L19.8855 19.8228C22.2779 13.6709 19.202 6.72152 13.0501 4.32912Z" fill="#00AF62" />
                  <path d="M40.3921 23.0125L29.2276 18.6834C26.8352 24.8353 29.9111 31.8986 36.063 34.1771L47.2276 38.5062C49.62 32.3543 46.544 25.4049 40.3921 23.0125Z" fill="#00AF62" />
                  <path d="M23.6447 33.0382L12.4801 28.7091C10.0877 34.861 13.1636 41.8104 19.4295 44.2028L30.594 48.5319C32.9864 42.38 29.9105 35.3167 23.6447 33.0382Z" fill="#00AF62" />
                </svg>
                <p className="otherPlanPlanesUsuarioTitle extraBoldFont">Aire</p>
                <p className="otherPlanPlanesUsuarioSubtitle boldFont">Enfocate 2 días a la semana</p>
                <p className="otherPlanPlanesUsuarioDescription">FULL: Incluye 6 Hs. en salas de reunión PART: Incluye 4 Hs. en salas de reunión</p>
                <button className="otherPlanPlanesUsuarioButton">Solicitar</button>
              </div>

              <div className="otherPlanPlanesUsuario">
                <svg className="otherPlanPlanesUsuarioSVG" width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.3514 0C25.9561 5.94293 30.6 10.6009 34.9236 15.5801C42.45 24.093 41.9696 35.3363 34.2831 43.0461C26.7568 50.4346 14.4264 50.4346 6.73988 43.0461C-0.946598 35.497 -1.427 24.093 5.93921 15.5801C10.1027 10.6009 14.9068 5.94293 20.3514 0Z" fill="#00AF62" />
                </svg>
                <p className="otherPlanPlanesUsuarioTitle extraBoldFont">Agua</p>
                <p className="otherPlanPlanesUsuarioSubtitle boldFont">Trabajá 3 veces por semana, descansá 2</p>
                <p className="otherPlanPlanesUsuarioDescription">FULL: Incluye 8 Hs. en salas de reunión PART: Incluye 5 Hs. en salas de reunión</p>
                <button className="otherPlanPlanesUsuarioButton">Solicitar</button>
              </div>

              <div className="otherPlanPlanesUsuario">
                <svg className="otherPlanPlanesUsuarioSVG" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.6396 24.4194V48.8387C33.175 48.8387 44.059 37.9547 44.059 24.4194V0C30.5237 0 19.6396 10.8841 19.6396 24.4194Z" fill="#00AF62" />
                  <path d="M16.0116 33.7684V48.8386C7.63929 48.8386 0.941406 42.1408 0.941406 33.7684V18.8377C9.17422 18.8377 16.0116 25.5356 16.0116 33.7684Z" fill="#00AF62" />
                </svg>
                <p className="otherPlanPlanesUsuarioTitle extraBoldFont">Fuego</p>
                <p className="otherPlanPlanesUsuarioSubtitle boldFont">Un día de franco! 4 veces a la semana</p>
                <p className="otherPlanPlanesUsuarioDescription">FULL: Incluye 10 Hs. en salas de reunión PART: Incluye 6 Hs. en salas de reunión</p>
                <button className="otherPlanPlanesUsuarioButton">Solicitar</button>
              </div>

              <div className="otherPlanPlanesUsuario">
                <svg className="otherPlanPlanesUsuarioSVG" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.955566 24.4862C1.42645 37.0432 11.786 47.0888 24.5 47.0888C37.5279 47.0888 48.0444 36.7293 48.0444 23.7014V0.156963C48.0444 0.156963 48.0444 0.156963 47.8874 0.156963C34.8595 0.156963 24.343 10.6735 24.343 23.7014V23.8583C24.343 23.8583 24.343 23.8583 24.343 23.7014C24.343 10.6735 13.9835 0 0.955566 0V24.4862Z" fill="#00AF62" />
                </svg>
                <p className="otherPlanPlanesUsuarioTitle extraBoldFont">Tierra</p>
                <p className="otherPlanPlanesUsuarioSubtitle boldFont">Vení 5 días a la semana</p>
                <p className="otherPlanPlanesUsuarioDescription">FULL: Incluye 12 Hs. en salas de reunión PART: Incluye 7 Hs. en salas de reunión</p>
                <button className="otherPlanPlanesUsuarioButton">Solicitar</button>
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

        <div className="planesUsuarioMobile">
          <div className="customContainer">
            <div className="creditsBlocksContainerPlanesUsuario">
              <div className="creditsLeftBlockPlanesUsuario">
                <p className="creditsLeftBlockTitle extraBoldFont">Te quedan 2 créditos de tu plan,</p>
                <p className="creditsLeftBlockSubtitle">Utilizalos en espacio compartido</p>
                <div className="progress" style={{ paddingBottom: '90px' }}>
                  <div className="progress-bar progressBarPlanesUsuario" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="creditsLeftBlockButtonMobileContainer">
                  <button className="creditsLeftBlockButtonMobile">Reservá un lugar</button>
                </div>
              </div>
            </div>

            <div className="plansPlanesUsuarioSection">
              <div className="actualPlanPlanesUsuario">
                <p className="actualPlanPlanesUsuarioTitle extraBoldFont">Estás suscrito al plan Eter</p>
                <div className="actualPlanPlanesUsuarioSeparator"></div>
                <p className="actualPlanPlanesUsuarioDescription1 boldFont">1 día a la semana</p>
                <p className="actualPlanPlanesUsuarioDescription2">PART: Incluye 3 Hs. en salas de reunión</p>
                <button className="actualPlanPlanesUsuarioButton">Ver detalle</button>
              </div>

              <p className="planesUsuarioTitle extraBoldFont">Otros Planes</p>

              <div className="otherPlanPlanesUsuarioMobile">
                <div className="otherPlanPlanesUsuarioMobileContainer">
                  <div className="otherPlanPlanesUsuarioMobileLeft">
                    <svg className="otherPlaPlanesUsuarioMobileSVG" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0501 4.32912L1.77159 0C-0.620814 6.1519 2.45514 13.1013 8.72097 15.4937L19.8855 19.8228C22.2779 13.6709 19.202 6.72152 13.0501 4.32912Z" fill="#00AF62" />
                      <path d="M40.3921 23.0125L29.2276 18.6834C26.8352 24.8353 29.9111 31.8986 36.063 34.1771L47.2276 38.5062C49.62 32.3543 46.544 25.4049 40.3921 23.0125Z" fill="#00AF62" />
                      <path d="M23.6447 33.0382L12.4801 28.7091C10.0877 34.861 13.1636 41.8104 19.4295 44.2028L30.594 48.5319C32.9864 42.38 29.9105 35.3167 23.6447 33.0382Z" fill="#00AF62" />
                    </svg>
                    <p className="otherPlanPlanesUsuarioMobileTitle extraBoldFont">Aire</p>
                  </div>
                  <div className="otherPlanPlanesUsuarioMobileRight"></div>
                </div>

                <div className="otherPlanPlanesUsuarioMobileContainer">
                  <div className="otherPlanPlanesUsuarioMobileLeft">
                    <svg className="otherPlaPlanesUsuarioMobileSVG" width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.3514 0C25.9561 5.94293 30.6 10.6009 34.9236 15.5801C42.45 24.093 41.9696 35.3363 34.2831 43.0461C26.7568 50.4346 14.4264 50.4346 6.73988 43.0461C-0.946598 35.497 -1.427 24.093 5.93921 15.5801C10.1027 10.6009 14.9068 5.94293 20.3514 0Z" fill="#00AF62" />
                    </svg>
                    <p className="otherPlanPlanesUsuarioMobileTitle extraBoldFont">Agua</p>
                  </div>
                  <div className="otherPlanPlanesUsuarioMobileRight"></div>
                </div>

                <div className="otherPlanPlanesUsuarioMobileContainer">
                  <div className="otherPlanPlanesUsuarioMobileLeft">
                    <svg className="otherPlaPlanesUsuarioMobileSVG" width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.6396 24.4194V48.8387C33.175 48.8387 44.059 37.9547 44.059 24.4194V0C30.5237 0 19.6396 10.8841 19.6396 24.4194Z" fill="#00AF62" />
                      <path d="M16.0116 33.7684V48.8386C7.63929 48.8386 0.941406 42.1408 0.941406 33.7684V18.8377C9.17422 18.8377 16.0116 25.5356 16.0116 33.7684Z" fill="#00AF62" />
                    </svg>
                    <p className="otherPlanPlanesUsuarioMobileTitle extraBoldFont">Fuego</p>
                  </div>
                  <div className="otherPlanPlanesUsuarioMobileRight"></div>
                </div>

                <div className="otherPlanPlanesUsuarioMobileContainer">
                  <div className="otherPlanPlanesUsuarioMobileLeft">
                    <svg className="otherPlaPlanesUsuarioMobileSVG" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.955566 24.4862C1.42645 37.0432 11.786 47.0888 24.5 47.0888C37.5279 47.0888 48.0444 36.7293 48.0444 23.7014V0.156963C48.0444 0.156963 48.0444 0.156963 47.8874 0.156963C34.8595 0.156963 24.343 10.6735 24.343 23.7014V23.8583C24.343 23.8583 24.343 23.8583 24.343 23.7014C24.343 10.6735 13.9835 0 0.955566 0V24.4862Z" fill="#00AF62" />
                    </svg>
                    <p className="otherPlanPlanesUsuarioMobileTitle extraBoldFont">Tierra</p>
                  </div>
                  <div className="otherPlanPlanesUsuarioMobileRight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanesUsuario;
