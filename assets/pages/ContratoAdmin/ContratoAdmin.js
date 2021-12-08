import React from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import FilterLogo from '../../images/Icons/FilterIcon.svg';
import TableListIcon from '../../images/Icons/TableListIcon.svg';
import CalendarIcon from '../../images/Icons/CalendarIcon.svg';
import MoreOptionsIcon from '../../images/Icons/MoreOptionsIcon.svg';
import Profile from '../../images/Icons/ProfileIcon.svg';

const ContratoAdmin = () => {
  return (
    <div className="row marginNavbar generalContent">
      <NavbarAdmin />
      <div className="col-lg-2 col-md-3 col-sm-12 p-0">
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 p-3">
        <div className="generalContentBody">
          <h1 className="sectionTitle">Contrato</h1>
          <div className="filtersSection">
            <img src={FilterLogo} alt="Filtrar" />
            <div className="filterButton">
              <svg width="31" height="30" viewBox="0 0 31 30" fill="none" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M29.25 28.5L22.8752 22.1138L29.25 28.5ZM26.4079 13.5789C26.4079 16.7825 25.1353 19.8548 22.8701 22.1201C20.6048 24.3853 17.5325 25.6579 14.3289 25.6579C11.1254 25.6579 8.05308 24.3853 5.78784 22.1201C3.5226 19.8548 2.25 16.7825 2.25 13.5789C2.25 10.3754 3.5226 7.30308 5.78784 5.03784C8.05308 2.7726 11.1254 1.5 14.3289 1.5C17.5325 1.5 20.6048 2.7726 22.8701 5.03784C25.1353 7.30308 26.4079 10.3754 26.4079 13.5789V13.5789Z"
                  stroke="white"
                  strokeWidth="2.84211"
                  strokeLinecap="round"
                />
              </svg>

              <button className="normalButton mr-4" type="button">
                Buscar
              </button>
            </div>
            <div className="filterButton">
              <svg width="26" height="29" viewBox="0 0 26 29" className="mx-2" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6.76667 13.5333H5.8V15.4667H6.76667V13.5333ZM18.3667 15.4667H19.3333V13.5333H18.3667V15.4667ZM6.76667 7.73333H5.8V9.66667H6.76667V7.73333ZM10.6333 9.66667H11.6V7.73333H10.6333V9.66667ZM18.3667 0.966667L19.0511 0.282267L18.7669 0H18.3667V0.966667ZM24.1667 6.76667H25.1333V6.36647L24.8511 6.08227L24.1667 6.76667ZM13.5333 21.2667L12.8489 21.9511L13.5333 21.2667ZM12.5667 22.2333L12.9997 23.0975L13.0771 23.0589L13.1467 23.0067L12.5667 22.2333ZM6.76667 15.4667H18.3667V13.5333H6.76667V15.4667ZM6.76667 9.66667H10.6333V7.73333H6.76667V9.66667ZM22.2333 27.0667H2.9V29H22.2333V27.0667ZM1.93333 26.1V2.9H0V26.1H1.93333ZM2.9 1.93333H18.3667V0H2.9V1.93333ZM23.2 6.76667V26.1H25.1333V6.76667H23.2ZM17.6823 1.65107L23.4823 7.45107L24.8511 6.08227L19.0511 0.282267L17.6823 1.65107ZM2.9 27.0667C2.64362 27.0667 2.39775 26.9648 2.21646 26.7835C2.03518 26.6023 1.93333 26.3564 1.93333 26.1H0C0 26.8691 0.305535 27.6068 0.849391 28.1506C1.39325 28.6945 2.13087 29 2.9 29V27.0667ZM22.2333 29C23.0025 29 23.7401 28.6945 24.2839 28.1506C24.8278 27.6068 25.1333 26.8691 25.1333 26.1H23.2C23.2 26.3564 23.0982 26.6023 22.9169 26.7835C22.7356 26.9648 22.4897 27.0667 22.2333 27.0667V29ZM1.93333 2.9C1.93333 2.64362 2.03518 2.39775 2.21646 2.21646C2.39775 2.03518 2.64362 1.93333 2.9 1.93333V0C2.13087 0 1.39325 0.305535 0.849391 0.84939C0.305535 1.39325 0 2.13087 0 2.9H1.93333ZM8.64973 22.5388C8.86433 21.895 9.47527 21.2976 10.2544 21.0888C10.9833 20.8935 11.9209 21.0211 12.8489 21.9511L14.2177 20.5823C12.8257 19.1903 11.1843 18.8365 9.75367 19.2212C8.3752 19.5924 7.24613 20.6383 6.815 21.9279L8.65167 22.5388H8.64973ZM12.8489 21.9511C12.9033 22.0039 12.9543 22.06 13.0017 22.1193L14.529 20.9322C14.4326 20.8099 14.3286 20.6936 14.2177 20.5842L12.8489 21.9511ZM13.0017 22.1193C13.1525 22.3126 13.1177 22.3745 13.1235 22.3319C13.1273 22.3049 13.1351 22.3493 13.0191 22.4537C12.8519 22.5935 12.6624 22.7039 12.4584 22.7805C12.2133 22.8791 11.9577 22.9491 11.6967 22.9893C11.5374 23.0196 11.3745 23.0261 11.2133 23.0086C11.1805 23.0009 11.2481 23.0086 11.3487 23.0801C11.472 23.1753 11.5626 23.3064 11.608 23.4554C11.6533 23.6044 11.6512 23.7638 11.6019 23.9115C11.591 23.9435 11.576 23.974 11.5575 24.0023C11.5536 24.0062 11.5865 23.9637 11.6967 23.8728C11.9171 23.6949 12.3231 23.4359 12.9997 23.0995L12.1336 21.3691C11.4047 21.7326 10.8576 22.0651 10.4825 22.3687C10.2923 22.5171 10.1232 22.6908 9.97987 22.8849C9.79754 23.129 9.70225 23.4271 9.7092 23.7317C9.72853 24.1493 9.95473 24.4567 10.2022 24.6365C10.4207 24.7989 10.6623 24.8685 10.8402 24.9052C11.2017 24.9767 11.6135 24.9574 11.9867 24.9013C12.7213 24.7892 13.6725 24.4721 14.3202 23.8844C14.6566 23.577 14.9756 23.1362 15.0433 22.5581C15.1129 21.9665 14.9002 21.4117 14.5271 20.9341L12.9997 22.1193H13.0017ZM13.1467 23.0067C13.456 22.7701 13.7921 22.5709 14.1481 22.4131L13.3806 20.6383C12.9166 20.8394 12.4526 21.112 11.9867 21.46L13.1467 23.0067ZM14.1481 22.4131C15.4048 21.8699 16.5281 22.156 17.6784 22.7031C17.9684 22.8423 18.2507 22.9931 18.5368 23.1478C18.8152 23.2986 19.1091 23.4591 19.3875 23.6021C19.9211 23.8709 20.5823 24.1667 21.2667 24.1667V22.2333C21.0849 22.2333 20.7872 22.1425 20.2613 21.8776C20.0139 21.75 19.7548 21.6069 19.4571 21.4465C19.1671 21.2899 18.8461 21.1178 18.5097 20.9593C17.1603 20.3155 15.3951 19.7683 13.3806 20.6383L14.1481 22.4131Z"
                  fill="#fff"
                />
              </svg>
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tipo de plan
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Eter
                </a>
                <a className="dropdown-item" href="#">
                  Aire
                </a>
                <a className="dropdown-item" href="#">
                  Agua
                </a>
                <a className="dropdown-item" href="#">
                  Fuego
                </a>
                <a className="dropdown-item" href="#">
                  Tierra
                </a>
              </div>
            </div>
            <div className="filterButton">
              <button className="dropdownButton dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                A-Z
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  1
                </a>
              </div>
            </div>
          </div>
          <div className="table-responsive" style={{ borderRadius: '15px' }}>
            <table className="table">
              <thead className="primaryColorDarkerRow">
                <tr>
                  <th scope="col" className="text-center">
                    <svg width="34" height="40" viewBox="0 0 34 40" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.4815 24.4615C22.2369 24.3815 20.6907 23.6846 21.6569 20.7477H21.643C24.1615 18.1538 26.0861 13.98 26.0861 9.87076C26.0861 3.5523 21.8846 0.23999 17.0015 0.23999C12.1154 0.23999 7.93689 3.55076 7.93689 9.87076C7.93689 13.9969 9.85074 18.1877 12.3846 20.7754C13.3723 23.3661 11.6061 24.3277 11.2369 24.4631C6.12305 26.3123 0.123047 29.6831 0.123047 33.0108V34.2585C0.123047 38.7923 8.91382 39.8231 17.0492 39.8231C25.1969 39.8231 33.8769 38.7923 33.8769 34.2585V33.0108C33.8769 29.5831 27.8477 26.2385 22.4815 24.4615Z" />
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
                    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.35157" y="1.35157" width="33.2969" height="21.2969" rx="1.64843" stroke="white" strokeWidth="2.70314" />
                      <rect x="21" y="6.59991" width="10.2" height="1.8" rx="0.9" fill="white" />
                      <rect x="21" y="10.2" width="10.2" height="1.8" rx="0.9" fill="white" />
                      <g clip-path="url(#clip0_97:3444)">
                        <path
                          d="M14.1378 13.7398C14.0424 13.7086 13.4394 13.4368 13.8162 12.2914H13.8108C14.793 11.2798 15.5436 9.652 15.5436 8.0494C15.5436 5.5852 13.905 4.2934 12.0006 4.2934C10.095 4.2934 8.46537 5.5846 8.46537 8.0494C8.46537 9.6586 9.21177 11.293 10.2 12.3022C10.5852 13.3126 9.89637 13.6876 9.75237 13.7404C7.75797 14.4616 5.41797 15.7762 5.41797 17.074V17.5606C5.41797 19.3288 8.84637 19.7308 12.0192 19.7308C15.1968 19.7308 18.582 19.3288 18.582 17.5606V17.074C18.582 15.7372 16.2306 14.4328 14.1378 13.7398Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_97:3444">
                          <rect width="15.6" height="15.6" fill="white" transform="translate(4.19971 4.19995)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </th>
                  <th scope="col" className="text-center">
                    <svg width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.93429 0.544854L4.27032 0.117722C5.5244 -0.282094 6.86167 0.364813 7.39931 1.62883L8.4659 4.14692C8.93029 5.24331 8.67326 6.53339 7.82769 7.33551L5.47598 9.56802C5.62001 10.904 6.06949 12.219 6.82194 13.5128C7.53687 14.7646 8.49574 15.8603 9.64176 16.7349L12.4665 15.7912C13.5381 15.4349 14.704 15.8459 15.3596 16.8106L16.8906 19.0581C17.6542 20.1805 17.5176 21.7276 16.5702 22.6787L15.5546 23.6981C14.5438 24.7126 13.0998 25.0814 11.765 24.6642C8.61242 23.6808 5.71438 20.7616 3.06963 15.9067C0.421167 11.0444 -0.513806 6.91707 0.265959 3.52981C0.593758 2.10438 1.6082 0.968261 2.93429 0.544854Z"
                        fill="white"
                      />
                    </svg>
                  </th>
                  <th scope="col" className="text-center">
                    <svg width="27" height="32" viewBox="0 0 27 32" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  </th>
                  <th scope="col" className="text-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 0C6.72 0 0 6.72 0 15C0 23.28 6.72 30 15 30C23.28 30 30 23.28 30 15C30 6.72 23.28 0 15 0ZM15 27C8.37 27 3 21.63 3 15C3 8.37 8.37 3 15 3C21.63 3 27 8.37 27 15C27 21.63 21.63 27 15 27Z" fill="white" />
                      <path d="M7.5 17.25C8.74264 17.25 9.75 16.2426 9.75 15C9.75 13.7574 8.74264 12.75 7.5 12.75C6.25736 12.75 5.25 13.7574 5.25 15C5.25 16.2426 6.25736 17.25 7.5 17.25Z" fill="white" />
                      <path d="M15 17.25C16.2426 17.25 17.25 16.2426 17.25 15C17.25 13.7574 16.2426 12.75 15 12.75C13.7574 12.75 12.75 13.7574 12.75 15C12.75 16.2426 13.7574 17.25 15 17.25Z" fill="white" />
                      <path d="M22.5 17.25C23.7426 17.25 24.75 16.2426 24.75 15C24.75 13.7574 23.7426 12.75 22.5 12.75C21.2574 12.75 20.25 13.7574 20.25 15C20.25 16.2426 21.2574 17.25 22.5 17.25Z" fill="white" />
                    </svg>
                  </th>
                  <th scope="col" className="text-center">
                    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M29.25 28.5L22.8752 22.1138L29.25 28.5ZM26.4079 13.5789C26.4079 16.7825 25.1353 19.8548 22.8701 22.1201C20.6048 24.3853 17.5325 25.6579 14.3289 25.6579C11.1254 25.6579 8.05308 24.3853 5.78784 22.1201C3.5226 19.8548 2.25 16.7825 2.25 13.5789C2.25 10.3754 3.5226 7.30308 5.78784 5.03784C8.05308 2.7726 11.1254 1.5 14.3289 1.5C17.5325 1.5 20.6048 2.7726 22.8701 5.03784C25.1353 7.30308 26.4079 10.3754 26.4079 13.5789V13.5789Z"
                        stroke="white"
                        strokeWidth="2.84211"
                        strokeLinecap="round"
                      />
                    </svg>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="rowHover">
                  <th scope="row">Nombre</th>
                  <td>Fecha de alta</td>
                  <td>DNI</td>
                  <td>Celular</td>
                  <td>Plan</td>
                  <td>Estado</td>
                  <td>Ver contrato</td>
                </tr>
                <tr className="rowHover">
                  <th scope="row">Nombre</th>
                  <td>Fecha de alta</td>
                  <td>DNI</td>
                  <td>Celular</td>
                  <td>Plan</td>
                  <td>Estado</td>
                  <td>Ver contrato</td>
                </tr>
                <tr className="rowHover">
                  <th scope="row">Nombre</th>
                  <td>Fecha de alta</td>
                  <td>DNI</td>
                  <td>Celular</td>
                  <td>Plan</td>
                  <td>Estado</td>
                  <td>Ver contrato</td>
                </tr>
                <tr className="rowHover">
                  <th scope="row">Nombre</th>
                  <td>Fecha de alta</td>
                  <td>DNI</td>
                  <td>Celular</td>
                  <td>Plan</td>
                  <td>Estado</td>
                  <td>Ver contrato</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <nav aria-label="Page navigation example">
              <ul className="pagination pg-blue">
                <li className="page-item ">
                  <a className="page-link" tabindex="-1">
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
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="contract">
                <div className="contractContent">
                  <p>Plan Eter</p>
                </div>
                <hr className="whiteSeparator" />
                <div className="contractContent">
                  <div className="d-flex justify-content-start mb-3">
                    <img src={TableListIcon} alt="icono" width="50px" />
                    <p className="mt-3 ml-3">1 día a la semana</p>
                  </div>
                  <p>PART: Incluye 3 Hs. en salas de reunión</p>
                </div>
                <hr className="whiteSeparator" />
                <div className="contractContent">
                  <div className="d-flex justify-content-start mb-3">
                    <img src={CalendarIcon} alt="icono" width="50px" />
                    <p className="mt-3 ml-3">Fecha de firma</p>
                  </div>
                  <p>12/10/2021</p>
                </div>
                <hr className="whiteSeparator" />
                <div className="contractContent">
                  <div className="d-flex justify-content-start mb-3">
                    <img src={MoreOptionsIcon} alt="icono" width="50px" />
                    <p className="mt-3 ml-3">Estado</p>
                  </div>
                  <p>Pendiente de firma</p>
                </div>
                <div className="d-flex justify-content-center m-2">
                  <button className="buttonContainer">Firmar</button>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-6 col-sm-12">
              <div className="d-flex justify-content-start">
                <img src={Profile} alt="icono" width="50px" />
                <p className="mt-3 ml-3">Nombre</p>
              </div>
              <p className="textIndentation">DNI</p>
              <p className="textIndentation">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="textIndentation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="textIndentation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <div className="d-flex justify-content-start">
                <img src={MoreOptionsIcon} alt="icono" width="50px" />
                <p className="mt-3 ml-3">Estado</p>
              </div>
              <p className="textIndentation">pendiente de firma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContratoAdmin;
