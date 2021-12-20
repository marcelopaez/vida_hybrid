import React, { useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import RoomType1 from '../../images/Salas/RoomType1.svg';
import RoomType2 from '../../images/Salas/RoomType2.svg';
import RoomType3 from '../../images/Salas/RoomType3.svg';
import RoomType4 from '../../images/Salas/RoomType4.svg';
import RoomType5 from '../../images/Salas/RoomType5.svg';
import RoomType6 from '../../images/Salas/RoomType6.svg';
import RoomType7 from '../../images/Salas/RoomType7.svg';
import RoomType8 from '../../images/Salas/RoomType8.svg';
import EterLogo from '../../images/Planes/EterLogo.svg';

const ClientesAdmin = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div className="row marginNavbar generalContent">
      <NavbarAdmin />
      <div className="col-lg-2 col-md-3 col-sm-12 p-0">
        <SideMenu />
      </div>

      <div className="col-lg-10 col-md-9 col-sm-12 bg-white p-3">
        <div className="generalContentBody">
          <h1 className="reservasAdminTitle extraBoldFont">Reservas</h1>
          <div className="reservasAdminFilterButtonsContainer">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="#0e4327" xmlns="http://www.w3.org/2000/svg" className="reservasAdminFilterLogo">
              <path
                d="M21.9583 0H1.29167C0.949095 0 0.620555 0.136086 0.37832 0.37832C0.136086 0.620555 0 0.949095 0 1.29167V4.63708C0 5.31263 0.275125 5.97654 0.753042 6.45446L7.75 13.4514V23.25C7.75025 23.4701 7.80667 23.6864 7.91391 23.8786C8.02115 24.0708 8.17566 24.2324 8.36282 24.3481C8.54998 24.4639 8.76359 24.53 8.98342 24.5401C9.20325 24.5502 9.42203 24.5041 9.61904 24.406L14.7857 21.8227C15.2236 21.6031 15.5 21.1562 15.5 20.6667V13.4514L22.497 6.45446C22.9749 5.97654 23.25 5.31263 23.25 4.63708V1.29167C23.25 0.949095 23.1139 0.620555 22.8717 0.37832C22.6294 0.136086 22.3009 0 21.9583 0ZM13.2951 12.0035C13.1749 12.1232 13.0796 12.2655 13.0147 12.4223C12.9497 12.579 12.9164 12.747 12.9167 12.9167V19.8684L10.3333 21.1601V12.9167C10.3336 12.747 10.3003 12.579 10.2353 12.4223C10.1704 12.2655 10.0751 12.1232 9.95487 12.0035L2.58333 4.63708V2.58333H20.668L20.6705 4.62804L13.2951 12.0035Z"
                fill="#0e4327"
                buttonContainer
              />
            </svg>
            <div className="reservasAdminFilterButton">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="#fff" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.90625 0C6.13003 0 6.34464 0.0888949 6.50287 0.247129C6.66111 0.405362 6.75 0.619974 6.75 0.84375V1.6875H20.25V0.84375C20.25 0.619974 20.3389 0.405362 20.4971 0.247129C20.6554 0.0888949 20.87 0 21.0938 0C21.3175 0 21.5321 0.0888949 21.6904 0.247129C21.8486 0.405362 21.9375 0.619974 21.9375 0.84375V1.6875H23.625C24.5201 1.6875 25.3785 2.04308 26.0115 2.67601C26.6444 3.30895 27 4.16739 27 5.0625V23.625C27 24.5201 26.6444 25.3785 26.0115 26.0115C25.3785 26.6444 24.5201 27 23.625 27H3.375C2.47989 27 1.62145 26.6444 0.988515 26.0115C0.355579 25.3785 0 24.5201 0 23.625V5.0625C0 4.16739 0.355579 3.30895 0.988515 2.67601C1.62145 2.04308 2.47989 1.6875 3.375 1.6875H5.0625V0.84375C5.0625 0.619974 5.15139 0.405362 5.30963 0.247129C5.46786 0.0888949 5.68247 0 5.90625 0V0ZM1.6875 6.75V23.625C1.6875 24.0726 1.86529 24.5018 2.18176 24.8182C2.49822 25.1347 2.92745 25.3125 3.375 25.3125H23.625C24.0726 25.3125 24.5018 25.1347 24.8182 24.8182C25.1347 24.5018 25.3125 24.0726 25.3125 23.625V6.75H1.6875Z"
                  fill="#fff"
                />
              </svg>
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mes
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Enero
                </a>
                <a className="dropdown-item" href="#">
                  Febrero
                </a>
                <a className="dropdown-item" href="#">
                  Marzo
                </a>
                <a className="dropdown-item" href="#">
                  Abril
                </a>
                <a className="dropdown-item" href="#">
                  Mayo
                </a>
                <a className="dropdown-item" href="#">
                  Junio
                </a>
                <a className="dropdown-item" href="#">
                  Julio
                </a>
                <a className="dropdown-item" href="#">
                  Agosto
                </a>
                <a className="dropdown-item" href="#">
                  Septiembre
                </a>
                <a className="dropdown-item" href="#">
                  Octubre
                </a>
                <a className="dropdown-item" href="#">
                  Noviembre
                </a>
                <a className="dropdown-item" href="#">
                  Diciembre
                </a>
              </div>
            </div>
            <div className="reservasAdminFilterButton">
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
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Día
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  1
                </a>
                <a className="dropdown-item" href="#">
                  2
                </a>
                <a className="dropdown-item" href="#">
                  3
                </a>
                <a className="dropdown-item" href="#">
                  4
                </a>
                <a className="dropdown-item" href="#">
                  5
                </a>
                <a className="dropdown-item" href="#">
                  6
                </a>
                <a className="dropdown-item" href="#">
                  7
                </a>
                <a className="dropdown-item" href="#">
                  8
                </a>
                <a className="dropdown-item" href="#">
                  9
                </a>
                <a className="dropdown-item" href="#">
                  10
                </a>
                <a className="dropdown-item" href="#">
                  11
                </a>
                <a className="dropdown-item" href="#">
                  12
                </a>
                <a className="dropdown-item" href="#">
                  13
                </a>
                <a className="dropdown-item" href="#">
                  14
                </a>
                <a className="dropdown-item" href="#">
                  15
                </a>
              </div>
            </div>
            <div className="reservasAdminFilterButton">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9998 29.3334C23.3636 29.3334 29.3332 23.3639 29.3332 16.0001C29.3332 8.63629 23.3636 2.66675 15.9998 2.66675C8.63604 2.66675 2.6665 8.63629 2.6665 16.0001C2.6665 23.3639 8.63604 29.3334 15.9998 29.3334Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 21.3333L16.7813 18.1147C16.2812 17.6147 16.0002 16.9365 16 16.2293V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hora
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  1
                </a>
                <a className="dropdown-item" href="#">
                  2
                </a>
                <a className="dropdown-item" href="#">
                  3
                </a>
                <a className="dropdown-item" href="#">
                  4
                </a>
                <a className="dropdown-item" href="#">
                  5
                </a>
                <a className="dropdown-item" href="#">
                  6
                </a>
                <a className="dropdown-item" href="#">
                  7
                </a>
                <a className="dropdown-item" href="#">
                  8
                </a>
                <a className="dropdown-item" href="#">
                  9
                </a>
                <a className="dropdown-item" href="#">
                  10
                </a>
                <a className="dropdown-item" href="#">
                  11
                </a>
                <a className="dropdown-item" href="#">
                  12
                </a>
                <a className="dropdown-item" href="#">
                  13
                </a>
                <a className="dropdown-item" href="#">
                  14
                </a>
                <a className="dropdown-item" href="#">
                  15
                </a>
              </div>
            </div>
            <div className="reservasAdminFilterButton">
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.31 0.1522C18.8769 0.000337948 19.4681 -0.0383722 20.05 0.0382799C20.6318 0.114932 21.1929 0.305445 21.7011 0.59894C22.2093 0.892435 22.6548 1.28316 23.012 1.74881C23.3692 2.21447 23.6312 2.74592 23.783 3.31282L28.1997 19.7936C28.3516 20.3605 28.3903 20.9517 28.3136 21.5336C28.237 22.1154 28.0465 22.6765 27.753 23.1847C27.4595 23.6929 27.0688 24.1384 26.6031 24.4956C26.1375 24.8528 25.606 25.1148 25.0391 25.2666L14.839 28.0014C14.2719 28.1538 13.6803 28.1929 13.0981 28.1165C12.5159 28.04 11.9544 27.8496 11.4458 27.5561C10.9372 27.2626 10.4915 26.8717 10.134 26.4058C9.77662 25.9399 9.51451 25.4081 9.36273 24.8408L4.9476 8.36007C4.79574 7.79318 4.75703 7.20193 4.83368 6.62007C4.91034 6.03822 5.10085 5.47717 5.39434 4.96894C5.68784 4.46072 6.07857 4.01529 6.54422 3.65808C7.00987 3.30087 7.54132 3.03888 8.10823 2.88707L18.31 0.1522ZM4.93135 14.5838L7.7946 25.2601C8.07591 26.3185 8.63857 27.281 9.42285 28.0453L8.70298 28.0063C7.51955 27.9442 6.40927 27.4145 5.61634 26.5338C4.82341 25.6531 4.41277 24.4935 4.47473 23.3101L4.93135 14.5838ZM18.9405 2.50682L8.73873 5.24332C8.21867 5.38273 7.77523 5.72292 7.50587 6.18912C7.23651 6.65532 7.16326 7.20939 7.30223 7.72957L11.7174 24.2119C11.7864 24.4696 11.9055 24.7112 12.0679 24.9229C12.2302 25.1345 12.4327 25.3121 12.6638 25.4455C12.8948 25.5789 13.1498 25.6655 13.4143 25.7003C13.6788 25.7351 13.9475 25.7175 14.2052 25.6484L24.4086 22.9136C24.9287 22.7742 25.3721 22.434 25.6415 21.9678C25.9108 21.5016 25.9841 20.9475 25.8451 20.4273L21.4284 3.94333C21.2889 3.42326 20.9488 2.97982 20.4826 2.71046C20.0164 2.4411 19.4623 2.36786 18.9421 2.50682H18.9405ZM3.42823 12.1821L2.85135 23.2256C2.79123 24.3598 3.04635 25.4388 3.54035 26.3781L2.8676 26.1164C2.31969 25.9062 1.81856 25.59 1.39283 25.1861C0.967096 24.7821 0.625107 24.2982 0.386387 23.7621C0.147668 23.226 0.0168933 22.648 0.00153128 22.0614C-0.0138308 21.4747 0.0865204 20.8907 0.296855 20.3428L3.42823 12.1821ZM11.3306 7.06982C11.5367 7.01455 11.7518 7.00043 11.9634 7.02825C12.175 7.05608 12.379 7.12531 12.5639 7.23199C12.7487 7.33867 12.9107 7.48072 13.0407 7.65002C13.1706 7.81932 13.266 8.01256 13.3212 8.2187C13.3765 8.42484 13.3906 8.63985 13.3628 8.85145C13.335 9.06306 13.2657 9.26711 13.1591 9.45195C13.0524 9.6368 12.9103 9.79882 12.741 9.92877C12.5717 10.0587 12.3785 10.1541 12.1724 10.2093C11.9662 10.2646 11.7512 10.2787 11.5396 10.2509C11.328 10.2231 11.1239 10.1538 10.9391 10.0472C10.5658 9.8317 10.2934 9.47677 10.1817 9.06045C10.0701 8.64412 10.1284 8.20051 10.3439 7.8272C10.5593 7.45388 10.9143 7.18145 11.3306 7.06982Z"
                  fill="white"
                />
              </svg>
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tipo de sala
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Mesa Rusa
                </a>
                <a className="dropdown-item" href="#">
                  Herradura
                </a>
                <a className="dropdown-item" href="#">
                  Taller
                </a>
                <a className="dropdown-item" href="#">
                  Escuela
                </a>
                <a className="dropdown-item" href="#">
                  Imperial
                </a>
                <a className="dropdown-item" href="#">
                  Auditorio
                </a>
                <a className="dropdown-item" href="#">
                  Libre
                </a>
                <a className="dropdown-item" href="#">
                  Outdoor
                </a>
              </div>
            </div>
          </div>

          <div className="table-responsive reservasAdminTable">
            <table className="table">
              <thead className="reservasAdminPrimaryColorDarkerRow">
                <tr>
                  <th scope="col" className="text-center">
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.90625 0C6.13003 0 6.34464 0.0888949 6.50287 0.247129C6.66111 0.405362 6.75 0.619974 6.75 0.84375V1.6875H20.25V0.84375C20.25 0.619974 20.3389 0.405362 20.4971 0.247129C20.6554 0.0888949 20.87 0 21.0938 0C21.3175 0 21.5321 0.0888949 21.6904 0.247129C21.8486 0.405362 21.9375 0.619974 21.9375 0.84375V1.6875H23.625C24.5201 1.6875 25.3785 2.04308 26.0115 2.67601C26.6444 3.30895 27 4.16739 27 5.0625V23.625C27 24.5201 26.6444 25.3785 26.0115 26.0115C25.3785 26.6444 24.5201 27 23.625 27H3.375C2.47989 27 1.62145 26.6444 0.988515 26.0115C0.355579 25.3785 0 24.5201 0 23.625V5.0625C0 4.16739 0.355579 3.30895 0.988515 2.67601C1.62145 2.04308 2.47989 1.6875 3.375 1.6875H5.0625V0.84375C5.0625 0.619974 5.15139 0.405362 5.30963 0.247129C5.46786 0.0888949 5.68247 0 5.90625 0V0ZM1.6875 6.75V23.625C1.6875 24.0726 1.86529 24.5018 2.18176 24.8182C2.49822 25.1347 2.92745 25.3125 3.375 25.3125H23.625C24.0726 25.3125 24.5018 25.1347 24.8182 24.8182C25.1347 24.5018 25.3125 24.0726 25.3125 23.625V6.75H1.6875Z"
                        fill="white"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="text-center">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.6816 21.1845V11.5166H10.5342C9.71254 11.9546 8.91839 12.4425 8.15625 12.9775V14.2372C8.83594 13.7714 9.91256 13.1134 10.4364 12.8289H10.4581V21.1845H11.6816ZM13.8348 18.8192C13.92 19.9792 14.9114 21.3676 16.9215 21.3676C19.2016 21.3676 20.5465 19.4354 20.5465 16.1639C20.5465 12.6585 19.1309 11.3281 17.0067 11.3281C15.3283 11.3281 13.7496 12.5461 13.7496 14.6069C13.7496 16.7094 15.2431 17.8151 16.7874 17.8151C18.1395 17.8151 19.0168 17.1336 19.2941 16.3832H19.343C19.3357 18.7684 18.5074 20.3054 16.9777 20.3054C15.7742 20.3054 15.1507 19.4898 15.0746 18.8192H13.8348ZM19.1871 14.6196C19.1871 15.8811 18.1739 16.7584 17.0411 16.7584C15.9518 16.7584 14.9676 16.0642 14.9676 14.5834C14.9676 13.0917 16.0225 12.3902 17.0846 12.3902C18.2319 12.3902 19.1871 13.1116 19.1871 14.6196Z"
                        fill="white"
                      />
                      <path
                        d="M6.34375 0C6.5841 0 6.81461 0.0954797 6.98457 0.265435C7.15452 0.435389 7.25 0.665898 7.25 0.90625V1.8125H21.75V0.90625C21.75 0.665898 21.8455 0.435389 22.0154 0.265435C22.1854 0.0954797 22.4159 0 22.6562 0C22.8966 0 23.1271 0.0954797 23.2971 0.265435C23.467 0.435389 23.5625 0.665898 23.5625 0.90625V1.8125H25.375C26.3364 1.8125 27.2584 2.19442 27.9383 2.87424C28.6181 3.55406 29 4.47609 29 5.4375V25.375C29 26.3364 28.6181 27.2584 27.9383 27.9383C27.2584 28.6181 26.3364 29 25.375 29H3.625C2.66359 29 1.74156 28.6181 1.06174 27.9383C0.381919 27.2584 0 26.3364 0 25.375V5.4375C0 4.47609 0.381919 3.55406 1.06174 2.87424C1.74156 2.19442 2.66359 1.8125 3.625 1.8125H5.4375V0.90625C5.4375 0.665898 5.53298 0.435389 5.70293 0.265435C5.87289 0.0954797 6.1034 0 6.34375 0V0ZM1.8125 7.25V25.375C1.8125 25.8557 2.00346 26.3167 2.34337 26.6566C2.68328 26.9965 3.14429 27.1875 3.625 27.1875H25.375C25.8557 27.1875 26.3167 26.9965 26.6566 26.6566C26.9965 26.3167 27.1875 25.8557 27.1875 25.375V7.25H1.8125Z"
                        fill="white"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="text-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.9998 29.3334C23.3636 29.3334 29.3332 23.3639 29.3332 16.0001C29.3332 8.63629 23.3636 2.66675 15.9998 2.66675C8.63604 2.66675 2.6665 8.63629 2.6665 16.0001C2.6665 23.3639 8.63604 29.3334 15.9998 29.3334Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20 21.3333L16.7813 18.1147C16.2812 17.6147 16.0002 16.9365 16 16.2293V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </th>
                  <th scope="col" className="text-center">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.31 0.1522C18.8769 0.000337948 19.4681 -0.0383722 20.05 0.0382799C20.6318 0.114932 21.1929 0.305445 21.7011 0.59894C22.2093 0.892435 22.6548 1.28316 23.012 1.74881C23.3692 2.21447 23.6312 2.74592 23.783 3.31282L28.1997 19.7936C28.3516 20.3605 28.3903 20.9517 28.3136 21.5336C28.237 22.1154 28.0465 22.6765 27.753 23.1847C27.4595 23.6929 27.0688 24.1384 26.6031 24.4956C26.1375 24.8528 25.606 25.1148 25.0391 25.2666L14.839 28.0014C14.2719 28.1538 13.6803 28.1929 13.0981 28.1165C12.5159 28.04 11.9544 27.8496 11.4458 27.5561C10.9372 27.2626 10.4915 26.8717 10.134 26.4058C9.77662 25.9399 9.51451 25.4081 9.36273 24.8408L4.9476 8.36007C4.79574 7.79318 4.75703 7.20193 4.83368 6.62007C4.91034 6.03822 5.10085 5.47717 5.39434 4.96894C5.68784 4.46072 6.07857 4.01529 6.54422 3.65808C7.00987 3.30087 7.54132 3.03888 8.10823 2.88707L18.31 0.1522ZM4.93135 14.5838L7.7946 25.2601C8.07591 26.3185 8.63857 27.281 9.42285 28.0453L8.70298 28.0063C7.51955 27.9442 6.40927 27.4145 5.61634 26.5338C4.82341 25.6531 4.41277 24.4935 4.47473 23.3101L4.93135 14.5838ZM18.9405 2.50682L8.73873 5.24332C8.21867 5.38273 7.77523 5.72292 7.50587 6.18912C7.23651 6.65532 7.16326 7.20939 7.30223 7.72957L11.7174 24.2119C11.7864 24.4696 11.9055 24.7112 12.0679 24.9229C12.2302 25.1345 12.4327 25.3121 12.6638 25.4455C12.8948 25.5789 13.1498 25.6655 13.4143 25.7003C13.6788 25.7351 13.9475 25.7175 14.2052 25.6484L24.4086 22.9136C24.9287 22.7742 25.3721 22.434 25.6415 21.9678C25.9108 21.5016 25.9841 20.9475 25.8451 20.4273L21.4284 3.94333C21.2889 3.42326 20.9488 2.97982 20.4826 2.71046C20.0164 2.4411 19.4623 2.36786 18.9421 2.50682H18.9405ZM3.42823 12.1821L2.85135 23.2256C2.79123 24.3598 3.04635 25.4388 3.54035 26.3781L2.8676 26.1164C2.31969 25.9062 1.81856 25.59 1.39283 25.1861C0.967096 24.7821 0.625107 24.2982 0.386387 23.7621C0.147668 23.226 0.0168933 22.648 0.00153128 22.0614C-0.0138308 21.4747 0.0865204 20.8907 0.296855 20.3428L3.42823 12.1821ZM11.3306 7.06982C11.5367 7.01455 11.7518 7.00043 11.9634 7.02825C12.175 7.05608 12.379 7.12531 12.5639 7.23199C12.7487 7.33867 12.9107 7.48072 13.0407 7.65002C13.1706 7.81932 13.266 8.01256 13.3212 8.2187C13.3765 8.42484 13.3906 8.63985 13.3628 8.85145C13.335 9.06306 13.2657 9.26711 13.1591 9.45195C13.0524 9.6368 12.9103 9.79882 12.741 9.92877C12.5717 10.0587 12.3785 10.1541 12.1724 10.2093C11.9662 10.2646 11.7512 10.2787 11.5396 10.2509C11.328 10.2231 11.1239 10.1538 10.9391 10.0472C10.5658 9.8317 10.2934 9.47677 10.1817 9.06045C10.0701 8.64412 10.1284 8.20051 10.3439 7.8272C10.5593 7.45388 10.9143 7.18145 11.3306 7.06982Z"
                        fill="white"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="text-center">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.1667 0C21.9583 0 28.3333 6.375 28.3333 14.1667C28.3333 21.9583 21.9583 28.3333 14.1667 28.3333C6.375 28.3333 0 21.9583 0 14.1667C0 6.375 6.375 0 14.1667 0ZM14.1667 2.83333C11.475 2.83333 9.06667 3.68333 7.225 5.24167L23.0917 21.1083C24.5083 19.125 25.5 16.7167 25.5 14.1667C25.5 7.93333 20.4 2.83333 14.1667 2.83333ZM21.1083 23.0917L5.24167 7.225C3.68333 9.06667 2.83333 11.475 2.83333 14.1667C2.83333 20.4 7.93333 25.5 14.1667 25.5C16.8583 25.5 19.2667 24.65 21.1083 23.0917Z"
                        fill="white"
                      />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="reservasAdminRowHover">
                  <th scope="row">Mes</th>
                  <td>Mes</td>
                  <td>Hora</td>
                  <td>Tipo de Sala</td>
                  <td>
                    <button className="reservasAdminCancelButton">
                      <span className="px-5 py-2">Cancelar</span>
                    </button>
                  </td>
                </tr>
                <tr className="reservasAdminRowHover">
                  <th scope="row">Mes</th>
                  <td>Mes</td>
                  <td>Hora</td>
                  <td>Tipo de Sala</td>
                  <td>
                    <button className="reservasAdminCancelButton">
                      <span className="px-5 py-2">Cancelar</span>
                    </button>
                  </td>
                </tr>
                <tr className="reservasAdminRowHover">
                  <th scope="row">Mes</th>
                  <td>Mes</td>
                  <td>Hora</td>
                  <td>Tipo de Sala</td>
                  <td>
                    <button className="reservasAdminCancelButton">
                      <span className="px-5 py-2">Cancelar</span>
                    </button>
                  </td>
                </tr>
                <tr className="reservasAdminRowHover">
                  <th scope="row">Mes</th>
                  <td>Mes</td>
                  <td>Hora</td>
                  <td>Tipo de Sala</td>
                  <td>
                    <button className="reservasAdminCancelButton">
                      <span className="px-5 py-2">Cancelar</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination pg-blue">
                <li className="page-item ">
                  <a className="page-link" tabIndex="-1">
                    Anterior
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">1</a>
                </li>
                <li className="page-item active">
                  <a className="page-link">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link">3</a>
                </li>
                <li className="page-item ">
                  <a className="page-link">Siguiente</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="reservasAdminAvailabilityTitle extraBoldFont">Disponibilidad de salas</div>
          <div className="reservasAdminFilterButtonsContainer">
            <div className="reservasAdminFilterButton">
              <svg width="27" height="27" viewBox="0 0 27 27" fill="#fff" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.90625 0C6.13003 0 6.34464 0.0888949 6.50287 0.247129C6.66111 0.405362 6.75 0.619974 6.75 0.84375V1.6875H20.25V0.84375C20.25 0.619974 20.3389 0.405362 20.4971 0.247129C20.6554 0.0888949 20.87 0 21.0938 0C21.3175 0 21.5321 0.0888949 21.6904 0.247129C21.8486 0.405362 21.9375 0.619974 21.9375 0.84375V1.6875H23.625C24.5201 1.6875 25.3785 2.04308 26.0115 2.67601C26.6444 3.30895 27 4.16739 27 5.0625V23.625C27 24.5201 26.6444 25.3785 26.0115 26.0115C25.3785 26.6444 24.5201 27 23.625 27H3.375C2.47989 27 1.62145 26.6444 0.988515 26.0115C0.355579 25.3785 0 24.5201 0 23.625V5.0625C0 4.16739 0.355579 3.30895 0.988515 2.67601C1.62145 2.04308 2.47989 1.6875 3.375 1.6875H5.0625V0.84375C5.0625 0.619974 5.15139 0.405362 5.30963 0.247129C5.46786 0.0888949 5.68247 0 5.90625 0V0ZM1.6875 6.75V23.625C1.6875 24.0726 1.86529 24.5018 2.18176 24.8182C2.49822 25.1347 2.92745 25.3125 3.375 25.3125H23.625C24.0726 25.3125 24.5018 25.1347 24.8182 24.8182C25.1347 24.5018 25.3125 24.0726 25.3125 23.625V6.75H1.6875Z"
                  fill="#fff"
                />
              </svg>
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Mes
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Enero
                </a>
                <a className="dropdown-item" href="#">
                  Febrero
                </a>
                <a className="dropdown-item" href="#">
                  Marzo
                </a>
                <a className="dropdown-item" href="#">
                  Abril
                </a>
                <a className="dropdown-item" href="#">
                  Mayo
                </a>
                <a className="dropdown-item" href="#">
                  Junio
                </a>
                <a className="dropdown-item" href="#">
                  Julio
                </a>
                <a className="dropdown-item" href="#">
                  Agosto
                </a>
                <a className="dropdown-item" href="#">
                  Septiembre
                </a>
                <a className="dropdown-item" href="#">
                  Octubre
                </a>
                <a className="dropdown-item" href="#">
                  Noviembre
                </a>
                <a className="dropdown-item" href="#">
                  Diciembre
                </a>
              </div>
            </div>
            <div className="reservasAdminFilterButton">
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
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Día
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  1
                </a>
                <a className="dropdown-item" href="#">
                  2
                </a>
                <a className="dropdown-item" href="#">
                  3
                </a>
                <a className="dropdown-item" href="#">
                  4
                </a>
                <a className="dropdown-item" href="#">
                  5
                </a>
                <a className="dropdown-item" href="#">
                  6
                </a>
                <a className="dropdown-item" href="#">
                  7
                </a>
                <a className="dropdown-item" href="#">
                  8
                </a>
                <a className="dropdown-item" href="#">
                  9
                </a>
                <a className="dropdown-item" href="#">
                  10
                </a>
                <a className="dropdown-item" href="#">
                  11
                </a>
                <a className="dropdown-item" href="#">
                  12
                </a>
                <a className="dropdown-item" href="#">
                  13
                </a>
                <a className="dropdown-item" href="#">
                  14
                </a>
                <a className="dropdown-item" href="#">
                  15
                </a>
              </div>
            </div>
            <div className="reservasAdminFilterButton">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9998 29.3334C23.3636 29.3334 29.3332 23.3639 29.3332 16.0001C29.3332 8.63629 23.3636 2.66675 15.9998 2.66675C8.63604 2.66675 2.6665 8.63629 2.6665 16.0001C2.6665 23.3639 8.63604 29.3334 15.9998 29.3334Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 21.3333L16.7813 18.1147C16.2812 17.6147 16.0002 16.9365 16 16.2293V8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hora
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  1
                </a>
                <a className="dropdown-item" href="#">
                  2
                </a>
                <a className="dropdown-item" href="#">
                  3
                </a>
                <a className="dropdown-item" href="#">
                  4
                </a>
                <a className="dropdown-item" href="#">
                  5
                </a>
                <a className="dropdown-item" href="#">
                  6
                </a>
                <a className="dropdown-item" href="#">
                  7
                </a>
                <a className="dropdown-item" href="#">
                  8
                </a>
                <a className="dropdown-item" href="#">
                  9
                </a>
                <a className="dropdown-item" href="#">
                  10
                </a>
                <a className="dropdown-item" href="#">
                  11
                </a>
                <a className="dropdown-item" href="#">
                  12
                </a>
                <a className="dropdown-item" href="#">
                  13
                </a>
                <a className="dropdown-item" href="#">
                  14
                </a>
                <a className="dropdown-item" href="#">
                  15
                </a>
              </div>
            </div>
          </div>

          <div className="reservasAdminRoomsContainer">
            <div className="reservasAdminRoomContainer">
              <p className="reservasAdminRoomContainerTitle">Sala</p>
              <div className="reservasAdminRoomContainerImage"></div>
              <div className="reservasAdminRoomContainerDataContainer">
                <div className="reservasAdminRoomContainerData">
                  <div className="reservasAdminRoomContainerDataImage"></div>
                  <p className="reservasAdminRoomContainerDataText">Dato 1</p>
                </div>
                <div className="reservasAdminRoomContainerData">
                  <div className="reservasAdminRoomContainerDataImage"></div>
                  <p className="reservasAdminRoomContainerDataText">Dato 2</p>
                </div>
              </div>
            </div>

            <div className="reservasAdminRoomContainer">
              <p className="reservasAdminRoomContainerTitle">Sala</p>
              <div className="reservasAdminRoomContainerImage"></div>
              <div className="reservasAdminRoomContainerDataContainer">
                <div className="reservasAdminRoomContainerData">
                  <div className="reservasAdminRoomContainerDataImage"></div>
                  <p className="reservasAdminRoomContainerDataText">Dato 1</p>
                </div>
                <div className="reservasAdminRoomContainerData">
                  <div className="reservasAdminRoomContainerDataImage"></div>
                  <p className="reservasAdminRoomContainerDataText">Dato 2</p>
                </div>
              </div>
            </div>

            <div className="reservasAdminRoomContainer">
              <p className="reservasAdminRoomContainerTitle">Sala</p>
              <div className="reservasAdminRoomContainerImage"></div>
              <div className="reservasAdminRoomContainerDataContainer">
                <div className="reservasAdminRoomContainerData">
                  <div className="reservasAdminRoomContainerDataImage"></div>
                  <p className="reservasAdminRoomContainerDataText">Dato 1</p>
                </div>
                <div className="reservasAdminRoomContainerData">
                  <div className="reservasAdminRoomContainerDataImage"></div>
                  <p className="reservasAdminRoomContainerDataText">Dato 2</p>
                </div>
              </div>
            </div>

            <div className="reservasAdminRoomContainer">
              <p className="reservasAdminRoomContainerTitle">Sala</p>
              <div className="reservasAdminRoomContainerImage"></div>
              <div className="reservasAdminRoomContainerDataContainer">
                <div className="reservasAdminRoomContainerData">
                  <div className="reservasAdminRoomContainerDataImage"></div>
                  <p className="reservasAdminRoomContainerDataText">Dato 1</p>
                </div>
                <div className="reservasAdminRoomContainerData">
                  <div className="reservasAdminRoomContainerDataImage"></div>
                  <p className="reservasAdminRoomContainerDataText">Dato 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientesAdmin;