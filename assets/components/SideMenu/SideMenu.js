import React from 'react';
import { Link } from 'react-router-dom';
import SideMenuItem from '../SideMenuItem/SideMenuItem';
import SideMenuSubItem from '../SideMenuSubItem/SideMenuSubItem';
import ProfileIcon from '../../images/Icons/ProfileIconWhite.svg';

const SideMenu = () => {
  return (
    <main className="sideMenu">
      <div className="userNameSideMenu">
        <img src={ProfileIcon} alt="Vida Cowork" />
        <div className="userNameDataSideMenu">
          <p className="userNameNameSideMenu boldFont">Nombre Apellido</p>
          <p className="userNameDescription lightFont">Usuario</p>
        </div>
      </div>
      <ul className="p-0 m-0 w-100">
        <SideMenuItem
          svg={
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.90625 0C6.13003 0 6.34464 0.0888949 6.50287 0.247129C6.66111 0.405362 6.75 0.619974 6.75 0.84375V1.6875H20.25V0.84375C20.25 0.619974 20.3389 0.405362 20.4971 0.247129C20.6554 0.0888949 20.87 0 21.0938 0C21.3175 0 21.5321 0.0888949 21.6904 0.247129C21.8486 0.405362 21.9375 0.619974 21.9375 0.84375V1.6875H23.625C24.5201 1.6875 25.3785 2.04308 26.0115 2.67601C26.6444 3.30895 27 4.16739 27 5.0625V23.625C27 24.5201 26.6444 25.3785 26.0115 26.0115C25.3785 26.6444 24.5201 27 23.625 27H3.375C2.47989 27 1.62145 26.6444 0.988515 26.0115C0.355579 25.3785 0 24.5201 0 23.625V5.0625C0 4.16739 0.355579 3.30895 0.988515 2.67601C1.62145 2.04308 2.47989 1.6875 3.375 1.6875H5.0625V0.84375C5.0625 0.619974 5.15139 0.405362 5.30963 0.247129C5.46786 0.0888949 5.68247 0 5.90625 0V0ZM1.6875 6.75V23.625C1.6875 24.0726 1.86529 24.5018 2.18176 24.8182C2.49822 25.1347 2.92745 25.3125 3.375 25.3125H23.625C24.0726 25.3125 24.5018 25.1347 24.8182 24.8182C25.1347 24.5018 25.3125 24.0726 25.3125 23.625V6.75H1.6875Z"
                fill="#004b2a"
              />
            </svg>
          }
          link={'/generalUsuario'}
          title={'General'}
        />

        {(window.document.documentURI.includes('general') || window.document.documentURI.includes('crearReserva')) && (
          <SideMenuSubItem
            svg={
              <svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3.5H4.5C3.57174 3.5 2.6815 3.86875 2.02513 4.52513C1.36875 5.1815 1 6.07174 1 7V28C1 28.9283 1.36875 29.8185 2.02513 30.4749C2.6815 31.1313 3.57174 31.5 4.5 31.5H22C22.9283 31.5 23.8185 31.1313 24.4749 30.4749C25.1313 29.8185 25.5 28.9283 25.5 28V7C25.5 6.07174 25.1313 5.1815 24.4749 4.52513C23.8185 3.86875 22.9283 3.5 22 3.5H18.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.9167 2.25H11.5833C9.74238 2.25 8.25 3.36929 8.25 4.75C8.25 6.13071 9.74238 7.25 11.5833 7.25H14.9167C16.7576 7.25 18.25 6.13071 18.25 4.75C18.25 3.36929 16.7576 2.25 14.9167 2.25Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 24.5V15.75" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.25 24.5V22.75" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18.5 24.5V19.25" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            link={'/crearReservaUsuario'}
            title={'Crear reserva'}
          />
        )}

        <SideMenuItem
          svg={
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
          }
          link={'/planesUsuario'}
          title={'Planes'}
        />

        <SideMenuItem
          svg={
            <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.76667 13.5333H5.8V15.4667H6.76667V13.5333ZM18.3667 15.4667H19.3333V13.5333H18.3667V15.4667ZM6.76667 7.73333H5.8V9.66667H6.76667V7.73333ZM10.6333 9.66667H11.6V7.73333H10.6333V9.66667ZM18.3667 0.966667L19.0511 0.282267L18.7669 0H18.3667V0.966667ZM24.1667 6.76667H25.1333V6.36647L24.8511 6.08227L24.1667 6.76667ZM13.5333 21.2667L12.8489 21.9511L13.5333 21.2667ZM12.5667 22.2333L12.9997 23.0975L13.0771 23.0589L13.1467 23.0067L12.5667 22.2333ZM6.76667 15.4667H18.3667V13.5333H6.76667V15.4667ZM6.76667 9.66667H10.6333V7.73333H6.76667V9.66667ZM22.2333 27.0667H2.9V29H22.2333V27.0667ZM1.93333 26.1V2.9H0V26.1H1.93333ZM2.9 1.93333H18.3667V0H2.9V1.93333ZM23.2 6.76667V26.1H25.1333V6.76667H23.2ZM17.6823 1.65107L23.4823 7.45107L24.8511 6.08227L19.0511 0.282267L17.6823 1.65107ZM2.9 27.0667C2.64362 27.0667 2.39775 26.9648 2.21646 26.7835C2.03518 26.6023 1.93333 26.3564 1.93333 26.1H0C0 26.8691 0.305535 27.6068 0.849391 28.1506C1.39325 28.6945 2.13087 29 2.9 29V27.0667ZM22.2333 29C23.0025 29 23.7401 28.6945 24.2839 28.1506C24.8278 27.6068 25.1333 26.8691 25.1333 26.1H23.2C23.2 26.3564 23.0982 26.6023 22.9169 26.7835C22.7356 26.9648 22.4897 27.0667 22.2333 27.0667V29ZM1.93333 2.9C1.93333 2.64362 2.03518 2.39775 2.21646 2.21646C2.39775 2.03518 2.64362 1.93333 2.9 1.93333V0C2.13087 0 1.39325 0.305535 0.849391 0.84939C0.305535 1.39325 0 2.13087 0 2.9H1.93333ZM8.64973 22.5388C8.86433 21.895 9.47527 21.2976 10.2544 21.0888C10.9833 20.8935 11.9209 21.0211 12.8489 21.9511L14.2177 20.5823C12.8257 19.1903 11.1843 18.8365 9.75367 19.2212C8.3752 19.5924 7.24613 20.6383 6.815 21.9279L8.65167 22.5388H8.64973ZM12.8489 21.9511C12.9033 22.0039 12.9543 22.06 13.0017 22.1193L14.529 20.9322C14.4326 20.8099 14.3286 20.6936 14.2177 20.5842L12.8489 21.9511ZM13.0017 22.1193C13.1525 22.3126 13.1177 22.3745 13.1235 22.3319C13.1273 22.3049 13.1351 22.3493 13.0191 22.4537C12.8519 22.5935 12.6624 22.7039 12.4584 22.7805C12.2133 22.8791 11.9577 22.9491 11.6967 22.9893C11.5374 23.0196 11.3745 23.0261 11.2133 23.0086C11.1805 23.0009 11.2481 23.0086 11.3487 23.0801C11.472 23.1753 11.5626 23.3064 11.608 23.4554C11.6533 23.6044 11.6512 23.7638 11.6019 23.9115C11.591 23.9435 11.576 23.974 11.5575 24.0023C11.5536 24.0062 11.5865 23.9637 11.6967 23.8728C11.9171 23.6949 12.3231 23.4359 12.9997 23.0995L12.1336 21.3691C11.4047 21.7326 10.8576 22.0651 10.4825 22.3687C10.2923 22.5171 10.1232 22.6908 9.97987 22.8849C9.79754 23.129 9.70225 23.4271 9.7092 23.7317C9.72853 24.1493 9.95473 24.4567 10.2022 24.6365C10.4207 24.7989 10.6623 24.8685 10.8402 24.9052C11.2017 24.9767 11.6135 24.9574 11.9867 24.9013C12.7213 24.7892 13.6725 24.4721 14.3202 23.8844C14.6566 23.577 14.9756 23.1362 15.0433 22.5581C15.1129 21.9665 14.9002 21.4117 14.5271 20.9341L12.9997 22.1193H13.0017ZM13.1467 23.0067C13.456 22.7701 13.7921 22.5709 14.1481 22.4131L13.3806 20.6383C12.9166 20.8394 12.4526 21.112 11.9867 21.46L13.1467 23.0067ZM14.1481 22.4131C15.4048 21.8699 16.5281 22.156 17.6784 22.7031C17.9684 22.8423 18.2507 22.9931 18.5368 23.1478C18.8152 23.2986 19.1091 23.4591 19.3875 23.6021C19.9211 23.8709 20.5823 24.1667 21.2667 24.1667V22.2333C21.0849 22.2333 20.7872 22.1425 20.2613 21.8776C20.0139 21.75 19.7548 21.6069 19.4571 21.4465C19.1671 21.2899 18.8461 21.1178 18.5097 20.9593C17.1603 20.3155 15.3951 19.7683 13.3806 20.6383L14.1481 22.4131Z"
                fill="#004b2a"
              />
            </svg>
          }
          link={'/contratoUsuario'}
          title={'Contrato'}
        />

        <SideMenuItem
          svg={
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.71436 3.72412C3.71436 2.73946 4.10568 1.79514 4.80224 1.09888C5.49881 0.402627 6.44355 0.0114746 7.42864 0.0114746C8.41373 0.0114746 9.35847 0.402627 10.055 1.09888C10.7516 1.79514 11.1429 2.73946 11.1429 3.72412C11.1429 4.70877 10.7516 5.6531 10.055 6.34935C9.35847 7.04561 8.41373 7.43676 7.42864 7.43676C6.44355 7.43676 5.49881 7.04561 4.80224 6.34935C4.10568 5.6531 3.71436 4.70877 3.71436 3.72412ZM7.42864 1.8678C6.9361 1.8678 6.46373 2.06337 6.11544 2.4115C5.76716 2.75963 5.5715 3.23179 5.5715 3.72412C5.5715 4.21644 5.76716 4.68861 6.11544 5.03673C6.46373 5.38486 6.9361 5.58044 7.42864 5.58044C7.92119 5.58044 8.39356 5.38486 8.74184 5.03673C9.09012 4.68861 9.28578 4.21644 9.28578 3.72412C9.28578 3.23179 9.09012 2.75963 8.74184 2.4115C8.39356 2.06337 7.92119 1.8678 7.42864 1.8678Z"
                fill="#004b2a"
              />
              <path
                d="M16.3039 6.66456C15.9148 6.36791 15.5882 5.99733 15.3429 5.57411C15.0975 5.1509 14.9383 4.6834 14.8742 4.19847C14.8102 3.71354 14.8427 3.22074 14.9697 2.74839C15.0968 2.27604 15.3161 1.83345 15.6148 1.44605C15.9136 1.05864 16.286 0.734071 16.7106 0.490975C17.1352 0.247878 17.6038 0.0910521 18.0892 0.0295065C18.5747 -0.032039 19.0675 0.00290949 19.5394 0.132344C20.0113 0.261779 20.453 0.483148 20.8391 0.783732C21.5992 1.3915 22.0902 2.27323 22.2066 3.23922C22.3229 4.2052 22.0552 5.17823 21.4611 5.94894C20.867 6.71965 19.994 7.22644 19.0298 7.36027C18.0657 7.49411 17.0875 7.24428 16.3058 6.66456H16.3039ZM18.5715 1.86782C18.079 1.86782 17.6066 2.0634 17.2583 2.41153C16.91 2.75965 16.7144 3.23182 16.7144 3.72414C16.7144 4.21647 16.91 4.68863 17.2583 5.03676C17.6066 5.38489 18.079 5.58047 18.5715 5.58047C19.064 5.58047 19.5364 5.38489 19.8847 5.03676C20.233 4.68863 20.4286 4.21647 20.4286 3.72414C20.4286 3.23182 20.233 2.75965 19.8847 2.41153C19.5364 2.0634 19.064 1.86782 18.5715 1.86782Z"
                fill="#004b2a"
              />
              <path
                d="M2.78571 9.29297H7.74429C7.54 9.874 7.42857 10.4996 7.42857 11.1493H2.78571C2.53944 11.1493 2.30326 11.2471 2.12912 11.4211C1.95497 11.5952 1.85714 11.8313 1.85714 12.0775C1.85714 13.5941 2.46071 14.719 3.41343 15.4838C3.85171 15.8365 4.37729 16.1205 4.97157 16.3284C4.53516 16.7921 4.19885 17.3406 3.98357 17.9397C3.36019 17.6894 2.77652 17.3499 2.25086 16.9317C0.854286 15.8087 0 14.1491 0 12.0775C0 11.339 0.293494 10.6307 0.815917 10.1085C1.33834 9.58633 2.0469 9.29297 2.78571 9.29297Z"
                fill="#004b2a"
              />
              <path
                d="M9.78304 9.29316C9.29049 10.1464 9.1572 11.1602 9.4125 12.1116C9.66779 13.0631 10.2907 13.8742 11.1443 14.3665C11.9979 14.8588 13.0122 14.992 13.964 14.7369C14.9159 14.4817 15.7274 13.859 16.2199 13.0058C16.7124 12.1526 16.8457 11.1388 16.5904 10.1873C16.3351 9.2359 15.7122 8.4248 14.8586 7.93248C14.005 7.44015 12.9907 7.30692 12.0389 7.5621C11.087 7.81727 10.2756 8.43996 9.78304 9.29316ZM12.5836 9.33957C12.8557 9.27813 13.1382 9.27856 13.4101 9.34084C13.682 9.40311 13.9364 9.52564 14.1546 9.69937C14.3728 9.8731 14.5492 10.0936 14.6707 10.3446C14.7922 10.5956 14.8558 10.8706 14.8568 11.1495C14.8566 11.4988 14.7579 11.8409 14.5719 12.1366C14.386 12.4323 14.1203 12.6696 13.8055 12.8211C13.4907 12.9727 13.1395 13.0324 12.7923 12.9934C12.445 12.9544 12.1158 12.8183 11.8425 12.6007C11.5692 12.3831 11.3628 12.0928 11.2472 11.7632C11.1315 11.4336 11.1112 11.0781 11.1886 10.7375C11.266 10.3969 11.438 10.0851 11.6847 9.83778C11.9315 9.59049 12.2431 9.4178 12.5836 9.33957Z"
                fill="#004b2a"
              />
              <path
                d="M22.5867 15.4838C22.1484 15.8365 21.6229 16.1205 21.0286 16.3284C21.4643 16.7923 21.8 17.3407 22.0147 17.9397C22.6461 17.6817 23.2311 17.3457 23.7493 16.9317C25.1459 15.8087 26.0001 14.1491 26.0001 12.0775C26.0001 11.339 25.7067 10.6307 25.1842 10.1085C24.6618 9.58633 23.9532 9.29297 23.2144 9.29297H18.2559C18.4601 9.874 18.5716 10.4996 18.5716 11.1493H23.2144C23.4607 11.1493 23.6969 11.2471 23.871 11.4211C24.0452 11.5952 24.143 11.8313 24.143 12.0775C24.143 13.5941 23.5394 14.719 22.5867 15.4838Z"
                fill="#004b2a"
              />
              <path
                d="M17.6427 16.7183C18.3815 16.7183 19.0901 17.0116 19.6125 17.5338C20.1349 18.056 20.4284 18.7643 20.4284 19.5028C20.4284 21.5744 19.576 23.234 18.1776 24.357C16.8014 25.4615 14.9554 25.9999 12.9999 25.9999C11.0443 25.9999 9.1983 25.4615 7.82216 24.357C6.42558 23.234 5.5713 21.5744 5.5713 19.5028C5.57032 19.1368 5.6417 18.7743 5.78135 18.436C5.921 18.0977 6.12616 17.7904 6.38503 17.5316C6.6439 17.2729 6.95139 17.0678 7.28981 16.9282C7.62823 16.7886 7.99091 16.7173 8.35701 16.7183H17.6427ZM17.6427 18.5746H8.35701C8.11074 18.5746 7.87456 18.6724 7.70041 18.8464C7.52627 19.0205 7.42844 19.2566 7.42844 19.5028C7.42844 21.0194 8.03201 22.1443 8.98473 22.9091C9.96158 23.6925 11.3656 24.1436 12.9999 24.1436C14.6342 24.1436 16.0382 23.6925 17.015 22.9091C17.9677 22.1443 18.5713 21.0194 18.5713 19.5028C18.5713 19.2566 18.4735 19.0205 18.2993 18.8464C18.1252 18.6724 17.889 18.5746 17.6427 18.5746Z"
                fill="#004b2a"
              />
            </svg>
          }
          link={'/comunidadUsuario'}
          title={'Comunidad'}
        />
      </ul>
    </main>
  );
};

export default SideMenu;
