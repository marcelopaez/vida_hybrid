import React, { useEffect, useRef } from 'react';
import SideMenuAdmin from '../../components/SideMenuAdmin';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';

const ClientesAdmin = () => {
  useEffect(() => window.scroll(0, 0), []);

  const clientSelected = useRef(null);
  const monthSelected = useRef(null);
  const daySelected = useRef(null);
  const hourSelected = useRef(null);
  const roomTypeSelected = useRef(null);

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

      <div className="col-lg-10 col-md-9 col-sm-12 bg-white p-3">
        <div className="row generalContentBody">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <h1 className="clientesAdminTitle extraBoldFont">Clientes</h1>
            <div className="clientesAdminSearch">
              <input type="text" className="form-control clientesAdminInput" ref={clientSelected} />
              <svg width="23" height="23" viewBox="0 0 23 23" className="clientesAdminSearchSVG" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 22L17.2779 17.2695L22 22ZM19.8947 10.9474C19.8947 13.3204 18.9521 15.5962 17.2741 17.2741C15.5962 18.9521 13.3204 19.8947 10.9474 19.8947C8.57438 19.8947 6.29858 18.9521 4.62062 17.2741C2.94267 15.5962 2 13.3204 2 10.9474C2 8.57438 2.94267 6.29858 4.62062 4.62062C6.29858 2.94267 8.57438 2 10.9474 2C13.3204 2 15.5962 2.94267 17.2741 4.62062C18.9521 6.29858 19.8947 8.57438 19.8947 10.9474V10.9474Z" stroke="#7D7C7A" strokeWidth="2.42105" strokeLinecap="round" />
              </svg>
            </div>
            <div className="clientesAdminFilterButtonsContainer">
              <svg width="24" height="25" viewBox="0 0 24 25" fill="#7D7C7A" xmlns="http://www.w3.org/2000/svg" className="clientesAdminFilterLogo">
                <path
                  d="M21.9583 0H1.29167C0.949095 0 0.620555 0.136086 0.37832 0.37832C0.136086 0.620555 0 0.949095 0 1.29167V4.63708C0 5.31263 0.275125 5.97654 0.753042 6.45446L7.75 13.4514V23.25C7.75025 23.4701 7.80667 23.6864 7.91391 23.8786C8.02115 24.0708 8.17566 24.2324 8.36282 24.3481C8.54998 24.4639 8.76359 24.53 8.98342 24.5401C9.20325 24.5502 9.42203 24.5041 9.61904 24.406L14.7857 21.8227C15.2236 21.6031 15.5 21.1562 15.5 20.6667V13.4514L22.497 6.45446C22.9749 5.97654 23.25 5.31263 23.25 4.63708V1.29167C23.25 0.949095 23.1139 0.620555 22.8717 0.37832C22.6294 0.136086 22.3009 0 21.9583 0ZM13.2951 12.0035C13.1749 12.1232 13.0796 12.2655 13.0147 12.4223C12.9497 12.579 12.9164 12.747 12.9167 12.9167V19.8684L10.3333 21.1601V12.9167C10.3336 12.747 10.3003 12.579 10.2353 12.4223C10.1704 12.2655 10.0751 12.1232 9.95487 12.0035L2.58333 4.63708V2.58333H20.668L20.6705 4.62804L13.2951 12.0035Z"
                  fill="#7D7C7A"
                />
              </svg>
              <div className="clientesAdminFilterButton">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="#fff" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.90625 0C6.13003 0 6.34464 0.0888949 6.50287 0.247129C6.66111 0.405362 6.75 0.619974 6.75 0.84375V1.6875H20.25V0.84375C20.25 0.619974 20.3389 0.405362 20.4971 0.247129C20.6554 0.0888949 20.87 0 21.0938 0C21.3175 0 21.5321 0.0888949 21.6904 0.247129C21.8486 0.405362 21.9375 0.619974 21.9375 0.84375V1.6875H23.625C24.5201 1.6875 25.3785 2.04308 26.0115 2.67601C26.6444 3.30895 27 4.16739 27 5.0625V23.625C27 24.5201 26.6444 25.3785 26.0115 26.0115C25.3785 26.6444 24.5201 27 23.625 27H3.375C2.47989 27 1.62145 26.6444 0.988515 26.0115C0.355579 25.3785 0 24.5201 0 23.625V5.0625C0 4.16739 0.355579 3.30895 0.988515 2.67601C1.62145 2.04308 2.47989 1.6875 3.375 1.6875H5.0625V0.84375C5.0625 0.619974 5.15139 0.405362 5.30963 0.247129C5.46786 0.0888949 5.68247 0 5.90625 0V0ZM1.6875 6.75V23.625C1.6875 24.0726 1.86529 24.5018 2.18176 24.8182C2.49822 25.1347 2.92745 25.3125 3.375 25.3125H23.625C24.0726 25.3125 24.5018 25.1347 24.8182 24.8182C25.1347 24.5018 25.3125 24.0726 25.3125 23.625V6.75H1.6875Z"
                    fill="#fff"
                  />
                </svg>
                <select className="mdb-select md-form m-0" defaultValue="Mes" ref={monthSelected}>
                  <option value="Mes" disabled>
                    Mes
                  </option>
                  <option value="Enero">Enero</option>
                  <option value="Febrero">Febrero</option>
                  <option value="Marzo">Marzo</option>
                  <option value="Abril">Abril</option>
                  <option value="Mayo">Mayo</option>
                  <option value="Junio">Junio</option>
                  <option value="Julio">Julio</option>
                  <option value="Agosto">Agosto</option>
                  <option value="Septiembre">Septiembre</option>
                  <option value="Octubre">Octubre</option>
                  <option value="Noviembre">Noviembre</option>
                  <option value="Diciembre">Diciembre</option>
                </select>
              </div>
              <div className="clientesAdminFilterButton">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.6816 21.1845V11.5166H10.5342C9.71254 11.9546 8.91839 12.4425 8.15625 12.9775V14.2372C8.83594 13.7714 9.91256 13.1134 10.4364 12.8289H10.4581V21.1845H11.6816ZM13.8348 18.8192C13.92 19.9792 14.9114 21.3676 16.9215 21.3676C19.2016 21.3676 20.5465 19.4354 20.5465 16.1639C20.5465 12.6585 19.1309 11.3281 17.0067 11.3281C15.3283 11.3281 13.7496 12.5461 13.7496 14.6069C13.7496 16.7094 15.2431 17.8151 16.7874 17.8151C18.1395 17.8151 19.0168 17.1336 19.2941 16.3832H19.343C19.3357 18.7684 18.5074 20.3054 16.9777 20.3054C15.7742 20.3054 15.1507 19.4898 15.0746 18.8192H13.8348ZM19.1871 14.6196C19.1871 15.8811 18.1739 16.7584 17.0411 16.7584C15.9518 16.7584 14.9676 16.0642 14.9676 14.5834C14.9676 13.0917 16.0225 12.3902 17.0846 12.3902C18.2319 12.3902 19.1871 13.1116 19.1871 14.6196Z"
                    fill="white"
                  />
                  <path
                    d="M6.34375 0C6.5841 0 6.81461 0.0954797 6.98457 0.265435C7.15452 0.435389 7.25 0.665898 7.25 0.90625V1.8125H21.75V0.90625C21.75 0.665898 21.8455 0.435389 22.0154 0.265435C22.1854 0.0954797 22.4159 0 22.6562 0C22.8966 0 23.1271 0.0954797 23.2971 0.265435C23.467 0.435389 23.5625 0.665898 23.5625 0.90625V1.8125H25.375C26.3364 1.8125 27.2584 2.19442 27.9383 2.87424C28.6181 3.55406 29 4.47609 29 5.4375V25.375C29 26.3364 28.6181 27.2584 27.9383 27.9383C27.2584 28.6181 26.3364 29 25.375 29H3.625C2.66359 29 1.74156 28.6181 1.06174 27.9383C0.381919 27.2584 0 26.3364 0 25.375V5.4375C0 4.47609 0.381919 3.55406 1.06174 2.87424C1.74156 2.19442 2.66359 1.8125 3.625 1.8125H5.4375V0.90625C5.4375 0.665898 5.53298 0.435389 5.70293 0.265435C5.87289 0.0954797 6.1034 0 6.34375 0V0ZM1.8125 7.25V25.375C1.8125 25.8557 2.00346 26.3167 2.34337 26.6566C2.68328 26.9965 3.14429 27.1875 3.625 27.1875H25.375C25.8557 27.1875 26.3167 26.9965 26.6566 26.6566C26.9965 26.3167 27.1875 25.8557 27.1875 25.375V7.25H1.8125Z"
                    fill="white"
                  />
                </svg>
                <select className="mdb-select md-form m-0" defaultValue="Día" ref={daySelected}>
                  <option value="Día" disabled>
                    Día
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div className="clientesAdminFilterButton">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.9998 29.3334C23.3636 29.3334 29.3332 23.3639 29.3332 16.0001C29.3332 8.63629 23.3636 2.66675 15.9998 2.66675C8.63604 2.66675 2.6665 8.63629 2.6665 16.0001C2.6665 23.3639 8.63604 29.3334 15.9998 29.3334Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 21.3333L16.7813 18.1147C16.2812 17.6147 16.0002 16.9365 16 16.2293V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <select className="mdb-select md-form m-0" defaultValue="Hora" ref={hourSelected}>
                  <option value="Hora" disabled>
                    Hora
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>
              </div>
              <div className="clientesAdminFilterButton">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.31 0.1522C18.8769 0.000337948 19.4681 -0.0383722 20.05 0.0382799C20.6318 0.114932 21.1929 0.305445 21.7011 0.59894C22.2093 0.892435 22.6548 1.28316 23.012 1.74881C23.3692 2.21447 23.6312 2.74592 23.783 3.31282L28.1997 19.7936C28.3516 20.3605 28.3903 20.9517 28.3136 21.5336C28.237 22.1154 28.0465 22.6765 27.753 23.1847C27.4595 23.6929 27.0688 24.1384 26.6031 24.4956C26.1375 24.8528 25.606 25.1148 25.0391 25.2666L14.839 28.0014C14.2719 28.1538 13.6803 28.1929 13.0981 28.1165C12.5159 28.04 11.9544 27.8496 11.4458 27.5561C10.9372 27.2626 10.4915 26.8717 10.134 26.4058C9.77662 25.9399 9.51451 25.4081 9.36273 24.8408L4.9476 8.36007C4.79574 7.79318 4.75703 7.20193 4.83368 6.62007C4.91034 6.03822 5.10085 5.47717 5.39434 4.96894C5.68784 4.46072 6.07857 4.01529 6.54422 3.65808C7.00987 3.30087 7.54132 3.03888 8.10823 2.88707L18.31 0.1522ZM4.93135 14.5838L7.7946 25.2601C8.07591 26.3185 8.63857 27.281 9.42285 28.0453L8.70298 28.0063C7.51955 27.9442 6.40927 27.4145 5.61634 26.5338C4.82341 25.6531 4.41277 24.4935 4.47473 23.3101L4.93135 14.5838ZM18.9405 2.50682L8.73873 5.24332C8.21867 5.38273 7.77523 5.72292 7.50587 6.18912C7.23651 6.65532 7.16326 7.20939 7.30223 7.72957L11.7174 24.2119C11.7864 24.4696 11.9055 24.7112 12.0679 24.9229C12.2302 25.1345 12.4327 25.3121 12.6638 25.4455C12.8948 25.5789 13.1498 25.6655 13.4143 25.7003C13.6788 25.7351 13.9475 25.7175 14.2052 25.6484L24.4086 22.9136C24.9287 22.7742 25.3721 22.434 25.6415 21.9678C25.9108 21.5016 25.9841 20.9475 25.8451 20.4273L21.4284 3.94333C21.2889 3.42326 20.9488 2.97982 20.4826 2.71046C20.0164 2.4411 19.4623 2.36786 18.9421 2.50682H18.9405ZM3.42823 12.1821L2.85135 23.2256C2.79123 24.3598 3.04635 25.4388 3.54035 26.3781L2.8676 26.1164C2.31969 25.9062 1.81856 25.59 1.39283 25.1861C0.967096 24.7821 0.625107 24.2982 0.386387 23.7621C0.147668 23.226 0.0168933 22.648 0.00153128 22.0614C-0.0138308 21.4747 0.0865204 20.8907 0.296855 20.3428L3.42823 12.1821ZM11.3306 7.06982C11.5367 7.01455 11.7518 7.00043 11.9634 7.02825C12.175 7.05608 12.379 7.12531 12.5639 7.23199C12.7487 7.33867 12.9107 7.48072 13.0407 7.65002C13.1706 7.81932 13.266 8.01256 13.3212 8.2187C13.3765 8.42484 13.3906 8.63985 13.3628 8.85145C13.335 9.06306 13.2657 9.26711 13.1591 9.45195C13.0524 9.6368 12.9103 9.79882 12.741 9.92877C12.5717 10.0587 12.3785 10.1541 12.1724 10.2093C11.9662 10.2646 11.7512 10.2787 11.5396 10.2509C11.328 10.2231 11.1239 10.1538 10.9391 10.0472C10.5658 9.8317 10.2934 9.47677 10.1817 9.06045C10.0701 8.64412 10.1284 8.20051 10.3439 7.8272C10.5593 7.45388 10.9143 7.18145 11.3306 7.06982Z"
                    fill="white"
                  />
                </svg>
                <select className="mdb-select md-form m-0" defaultValue="Tipo de Sala" ref={roomTypeSelected}>
                  <option value="Tipo de Sala" disabled>
                    Tipo de Sala
                  </option>
                  <option value="Mesa Rusa">Mesa Rusa</option>
                  <option value="Herradura">Herradura</option>
                  <option value="Taller">Taller</option>
                  <option value="Escuela">Escuela</option>
                  <option value="Imperial">Imperial</option>
                  <option value="Auditorio">Auditorio</option>
                  <option value="Libre">Libre</option>
                  <option value="Outdoor">Outdoor</option>
                </select>
              </div>
            </div>
            <div className="table-responsive clientesAdminTable">
              <table className="table">
                <thead className="clientesAdminTableHead">
                  <tr>
                    <th scope="col" className="text-center">
                      DNI
                    </th>
                    <th scope="col" className="text-center">
                      Nombre
                    </th>
                    <th scope="col" className="text-center">
                      Plan
                    </th>
                    <th scope="col" className="text-center">
                      Horas usadas
                    </th>
                    <th scope="col" className="text-center">
                      Horas disponibles
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="clientesAdminRowHover">
                    <td>39496091</td>
                    <td>Facundo Frastas</td>
                    <td>Eter</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr className="clientesAdminRowHover">
                    <td>39496091</td>
                    <td>Facundo Frastas</td>
                    <td>Eter</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr className="clientesAdminRowHover">
                    <td>39496091</td>
                    <td>Facundo Frastas</td>
                    <td>Eter</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr className="clientesAdminRowHover">
                    <td>39496091</td>
                    <td>Facundo Frastas</td>
                    <td>Eter</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                  <tr className="clientesAdminRowHover">
                    <td>39496091</td>
                    <td>Facundo Frastas</td>
                    <td>Eter</td>
                    <td>2</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <nav>
                <ul className="pagination">
                  <li className="page-item ">
                    <a className="page-link clientesAdminPagination" tabIndex="-1">
                      Anterior
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link clientesAdminPagination">1</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link clientesAdminPagination">
                      2 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link clientesAdminPagination">3</a>
                  </li>
                  <li className="page-item ">
                    <a className="page-link clientesAdminPagination">Siguiente</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="clientesAdminRightSide">
              <div className="clientesAdminRightSideHeader">
                <div className="clientesAdminRightSideHeaderImage"></div>
                <p className="clientesAdminRightSideHeaderName">Nombre, Apellido</p>
              </div>
              <hr />
              <p className="clientesAdminRightSidePersonalDataTitle boldFont">Datos personales</p>
              <p className="clientesAdminRightSidePeronalData">DNI</p>
              <p className="clientesAdminRightSidePeronalData">Fecha de Nacimiento</p>
              <p className="clientesAdminRightSidePeronalData">Ocupación</p>
              <p className="clientesAdminRightSidePeronalData">User IG</p>
              <p className="clientesAdminRightSidePeronalData">User LI</p>
              <hr />
              <p className="clientesAdminRightSidePersonalDataTitle boldFont">Datos de contacto</p>
              <p className="clientesAdminRightSidePeronalData">Teléfono/celular</p>
              <p className="clientesAdminRightSidePeronalData">Info</p>
              <p className="clientesAdminRightSidePeronalData">Info</p>

              <div className="clientesAdminRightSideActualPlan">
                <p className="clientesAdminRightSideActualPlanTitle boldFont">Suscrito a plan Eter</p>
                <p className="clientesAdminRightSideActualPlanDetail">Part</p>
              </div>

              <div className="clientesAdminRightSideAvailableTime">
                <p className="clientesAdminRightSideAvailableTimeTitle">Horas disponibles en salas</p>
                <div className="progress">
                  <div className="progress-bar clientesAdminRightSideProgressBar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="clientesAdminRightSideAvailableTimeTitle">Horas disponibles en salas</p>
                <div className="progress">
                  <div className="progress-bar clientesAdminRightSideProgressBar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>

              <div className="clientesAdminRightSideContractContainer">
                <p className="clientesAdminRightSideContractTitle">Contrato</p>
                <div className="clientesAdminRightSideContract">
                  <div className="clientesAdminRightSideContractData">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="#004b2a" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.6816 21.1845V11.5166H10.5342C9.71254 11.9546 8.91839 12.4425 8.15625 12.9775V14.2372C8.83594 13.7714 9.91256 13.1134 10.4364 12.8289H10.4581V21.1845H11.6816ZM13.8348 18.8192C13.92 19.9792 14.9114 21.3676 16.9215 21.3676C19.2016 21.3676 20.5465 19.4354 20.5465 16.1639C20.5465 12.6585 19.1309 11.3281 17.0067 11.3281C15.3283 11.3281 13.7496 12.5461 13.7496 14.6069C13.7496 16.7094 15.2431 17.8151 16.7874 17.8151C18.1395 17.8151 19.0168 17.1336 19.2941 16.3832H19.343C19.3357 18.7684 18.5074 20.3054 16.9777 20.3054C15.7742 20.3054 15.1507 19.4898 15.0746 18.8192H13.8348ZM19.1871 14.6196C19.1871 15.8811 18.1739 16.7584 17.0411 16.7584C15.9518 16.7584 14.9676 16.0642 14.9676 14.5834C14.9676 13.0917 16.0225 12.3902 17.0846 12.3902C18.2319 12.3902 19.1871 13.1116 19.1871 14.6196Z"
                        fill="#004b2a"
                      />
                      <path
                        d="M6.34375 0C6.5841 0 6.81461 0.0954797 6.98457 0.265435C7.15452 0.435389 7.25 0.665898 7.25 0.90625V1.8125H21.75V0.90625C21.75 0.665898 21.8455 0.435389 22.0154 0.265435C22.1854 0.0954797 22.4159 0 22.6562 0C22.8966 0 23.1271 0.0954797 23.2971 0.265435C23.467 0.435389 23.5625 0.665898 23.5625 0.90625V1.8125H25.375C26.3364 1.8125 27.2584 2.19442 27.9383 2.87424C28.6181 3.55406 29 4.47609 29 5.4375V25.375C29 26.3364 28.6181 27.2584 27.9383 27.9383C27.2584 28.6181 26.3364 29 25.375 29H3.625C2.66359 29 1.74156 28.6181 1.06174 27.9383C0.381919 27.2584 0 26.3364 0 25.375V5.4375C0 4.47609 0.381919 3.55406 1.06174 2.87424C1.74156 2.19442 2.66359 1.8125 3.625 1.8125H5.4375V0.90625C5.4375 0.665898 5.53298 0.435389 5.70293 0.265435C5.87289 0.0954797 6.1034 0 6.34375 0V0ZM1.8125 7.25V25.375C1.8125 25.8557 2.00346 26.3167 2.34337 26.6566C2.68328 26.9965 3.14429 27.1875 3.625 27.1875H25.375C25.8557 27.1875 26.3167 26.9965 26.6566 26.6566C26.9965 26.3167 27.1875 25.8557 27.1875 25.375V7.25H1.8125Z"
                        fill="#004b2a"
                      />
                    </svg>
                    <p>
                      <b>Fecha de firma</b> <br /> 12/10/2021
                    </p>
                  </div>
                  <div className="clientesAdminRightSideContractData">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="#004b2a" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z" fill="#004b2a" />
                      <path d="M7.5 17.25C8.74264 17.25 9.75 16.2426 9.75 15C9.75 13.7574 8.74264 12.75 7.5 12.75C6.25736 12.75 5.25 13.7574 5.25 15C5.25 16.2426 6.25736 17.25 7.5 17.25Z" fill="#004b2a" />
                      <path d="M15 17.25C16.2426 17.25 17.25 16.2426 17.25 15C17.25 13.7574 16.2426 12.75 15 12.75C13.7574 12.75 12.75 13.7574 12.75 15C12.75 16.2426 13.7574 17.25 15 17.25Z" fill="#004b2a" />
                      <path d="M22.5 17.25C23.7426 17.25 24.75 16.2426 24.75 15C24.75 13.7574 23.7426 12.75 22.5 12.75C21.2574 12.75 20.25 13.7574 20.25 15C20.25 16.2426 21.2574 17.25 22.5 17.25Z" fill="#004b2a" />
                    </svg>
                    <p>
                      <b>Estado</b> <br /> Pendiente de firma
                    </p>
                  </div>
                </div>
                <p className="clientesAdminRightSideContractDownload">Descargar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientesAdmin;
