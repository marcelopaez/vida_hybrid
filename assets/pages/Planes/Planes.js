import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import OrangeLogo from '../../images/OrangeLogo.svg';
import OrangePlan from '../../components/OrangePlan';
import BackgroundImage from '../../images/PlanesBackground.jpg';
import Service from '../../components/Service';
import ChoosePlan from '../../images/ChoosePlan.jpg';

const Planes = () => {
  return (
    <main>
      <div className="navbarLarger">
        <div className="background" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="leftSVGNavbar">
            <svg width="707" height="1037" viewBox="0 0 707 1037" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
              <path d="M707 0C707 572.749 390.485 1037 0 1037V0H707Z" fill="#004B2A" />
            </svg>
            <Link to="/">
              <img src={OrangeLogo} className="logo" alt="Vida" />
            </Link>
            <div className="roomHeaderContent">
              <p className="roomTitle">Cosmos</p>
              <Service
                svg={
                  <svg width="41" height="37" viewBox="0 0 41 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.437092 5.17493C0.437092 22.4255 14.5774 36.4176 32.0107 36.4176V5.17493H0.437092Z" fill="#FF972F" />
                    <path
                      d="M40.0498 11.5962V10.7337L40.0014 10.6857C39.9045 10.1586 39.614 9.67946 39.1297 9.39196C38.4033 8.96069 37.6285 8.52943 36.8537 8.09817C35.6431 7.42731 34.4808 6.70854 33.2702 6.03769C32.2048 5.41475 31.1395 4.83973 30.0741 4.2168C28.8634 3.54594 27.7012 2.82717 26.4906 2.15632C25.7158 1.72505 24.9409 1.24587 24.1661 0.814608C23.7787 0.575018 23.3429 0.383345 22.9071 0.143754C22.8102 0.0479181 22.6165 0.0479181 22.3744 0H22.1322C22.0838 0 22.0354 0.0479181 21.987 0.0479181C21.309 0.143754 20.7763 0.431263 20.4373 1.00628C20.1468 1.53338 19.8562 2.06048 19.5172 2.58758C18.6456 4.07304 17.8223 5.51059 16.9507 6.99605C16.757 7.33148 16.5633 7.47523 16.1759 7.47523C15.4979 7.47523 15.0136 7.81066 14.6262 8.33776C14.4325 8.62527 14.3357 8.96069 14.1904 9.29612V21.5632C14.1904 21.6111 14.2388 21.6111 14.2388 21.659C14.2873 22.234 14.6262 22.7132 15.0621 23.0486C15.3526 23.2882 15.74 23.3361 16.079 23.4799H34.9167L34.9651 23.432C35.982 23.3841 36.8537 22.3299 36.8537 21.3236C36.8053 20.0777 36.8537 18.8318 36.8537 17.6339C36.8537 17.4901 36.9021 17.2984 36.999 17.1547C37.1443 16.8672 37.338 16.5797 37.5317 16.2922C37.9191 15.6692 38.258 15.0463 38.6455 14.3754C39.0813 13.4171 39.7108 12.6025 40.0498 11.5962ZM35.7399 12.7462V18.1131C34.6261 18.2568 33.706 18.6881 32.8828 19.4548C32.108 20.2215 31.6237 21.1798 31.4784 22.2819H31.43C27.5559 22.2819 23.6819 22.2819 19.8078 22.2819C19.6625 22.2819 19.6141 22.234 19.6141 22.0903C19.6141 22.0423 19.6141 21.9465 19.6141 21.8986C19.372 20.7006 18.7424 19.7423 17.7739 19.0235C17.1444 18.5922 16.4664 18.2568 15.74 18.161C15.5463 18.1131 15.4495 18.0651 15.4979 17.8735C15.4979 16.2442 15.4979 14.5671 15.4979 12.9379C15.4979 12.89 15.4979 12.7941 15.4979 12.7941C15.8853 12.6983 16.2243 12.6025 16.5633 12.5066C17.3865 12.2191 18.1129 11.7399 18.694 11.0212C19.2267 10.3982 19.5172 9.67946 19.6625 8.86486C19.711 8.62527 19.7594 8.57735 20.0015 8.57735C23.7787 8.57735 27.5559 8.57735 31.3332 8.57735H31.5753C31.7206 10.8295 33.5607 12.5546 35.7399 12.7462ZM25.6673 2.97092C28.2339 4.45639 30.8489 5.94185 33.4639 7.47523H18.016C18.5972 6.46895 19.1783 5.46267 19.7594 4.45639C22.0838 5.271 24.0209 4.83973 25.6673 2.97092ZM20.3405 3.40219C20.631 2.87509 20.97 2.39591 21.2606 1.82089C21.648 1.10212 22.2775 0.958363 22.8586 1.29379C23.4397 1.62922 24.0693 2.01256 24.6504 2.34799C23.7787 3.59386 21.7933 4.12096 20.3405 3.40219ZM36.8537 9.39196C37.3864 9.67946 37.8706 9.96697 38.4033 10.2545C38.8392 10.4941 39.1781 11.0691 38.8392 11.6441C38.3549 12.5066 37.8706 13.3212 37.3864 14.1838C37.2411 14.4713 37.0474 14.7109 36.9021 15.0463V9.39196H36.8537ZM32.5922 8.57735C33.3186 8.57735 34.045 8.57735 34.723 8.57735C35.1104 8.57735 35.5946 8.96069 35.6431 9.34404C35.6915 9.82322 35.6915 10.2545 35.6915 10.7337C35.6915 11.0212 35.6915 11.3566 35.6915 11.6441C33.9966 11.2608 32.9796 10.2545 32.5922 8.57735ZM35.7399 19.2631C35.7399 19.9819 35.7883 20.6527 35.7399 21.3715C35.6915 21.9465 35.1104 22.3778 34.6745 22.3299C34.384 22.2819 34.0934 22.3299 33.8029 22.3299H32.6407C32.9312 20.4131 34.5777 19.3589 35.7399 19.2631ZM18.4519 8.57735C18.3066 9.87114 17.1928 11.3566 15.4011 11.6441C15.4011 10.9733 15.4495 10.3024 15.4011 9.63155C15.4011 9.20028 15.7885 8.57735 16.3696 8.57735C17.0475 8.52943 17.7255 8.57735 18.4519 8.57735ZM18.4519 22.2819C17.7255 22.2819 17.0475 22.2819 16.3696 22.2819C15.8369 22.2819 15.4011 21.8507 15.4011 21.3236C15.4011 20.7486 15.4011 20.2215 15.4011 19.6464V19.2152C16.9023 19.4548 18.3066 20.8444 18.4519 22.2819Z"
                      fill="white"
                    />
                    <path
                      d="M24.9897 12.2672C24.6023 12.2672 24.2633 12.2672 23.8759 12.2672C23.5369 12.2672 23.3916 12.4588 23.3432 12.7464C23.2948 13.1297 23.5369 13.3214 23.8759 13.3214C24.5054 13.3214 25.135 13.3214 25.7645 13.3214C26.1519 13.3214 26.4909 13.6568 26.5393 14.0401C26.5877 14.3756 26.2972 14.7589 25.9582 14.8548C25.7161 14.9027 25.4739 14.8548 25.1834 14.8548C24.3601 14.9027 23.5853 15.4298 23.3916 16.2444C23.1011 17.3944 23.7306 18.4007 24.9413 18.5924C24.9413 18.784 24.9413 18.9757 24.9413 19.1195C24.8928 19.4549 25.1834 19.6466 25.4739 19.6466C25.8129 19.6466 26.055 19.4549 26.055 19.1195C26.055 18.9757 26.055 18.784 26.055 18.5924C26.394 18.5924 26.733 18.5924 27.0236 18.5924C27.2657 18.5924 27.411 18.5444 27.5562 18.3049C27.7015 18.0653 27.6531 17.8736 27.5562 17.6819C27.411 17.4423 27.1688 17.4423 26.9751 17.4423C26.394 17.4423 25.7645 17.4423 25.1834 17.4423C24.796 17.4423 24.5054 17.1069 24.457 16.7715C24.4086 16.3881 24.6991 16.0048 25.0381 15.9569C25.3287 15.9089 25.5708 15.909 25.8613 15.909C26.6846 15.909 27.4594 15.2381 27.6047 14.4235C27.7499 13.7526 27.5562 13.1776 27.072 12.6984C26.8299 12.4588 26.4909 12.363 26.2003 12.2193C26.055 12.1713 26.055 12.1234 26.0066 11.9797C26.0066 11.7401 25.9582 11.5005 25.9098 11.3088C25.8613 11.1171 25.5708 11.0213 25.3771 11.0692C25.0865 11.1651 24.9413 11.3088 24.9413 11.5484C24.9413 11.6442 24.9413 11.7401 24.9413 11.8359V12.2672H24.9897Z"
                      fill="white"
                    />
                    <path d="M18.5488 16.5318C19.0815 16.5797 19.6626 16.1005 19.6626 15.4776C19.6626 14.8547 19.2268 14.3755 18.5488 14.3755C17.9677 14.3755 17.435 14.8068 17.435 15.4297C17.4834 16.0526 17.9677 16.5797 18.5488 16.5318Z" fill="white" />
                    <path d="M30.6075 15.4294C30.5106 16.1003 31.1886 16.5315 31.6728 16.5315C32.2055 16.5315 32.7866 16.0044 32.7866 15.4294C32.7866 14.8065 32.3024 14.3752 31.6728 14.3752C31.1401 14.3273 30.559 14.7107 30.6075 15.4294Z" fill="white" />
                  </svg>
                }
                title={"15' del centro"}
                subtitle={''}
                small={true}
              />
              <button className="roomButton">Suscribite</button>
            </div>
          </div>
          <div className="rightSVGNavbar">
            <svg width="1325" height="179" viewBox="0 0 1325 179" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.90735e-06C130.5 89.8996 593.185 179 1325 179V1.90735e-06H0Z" fill="#FF972F" />
            </svg>
            <Navbar />
          </div>
        </div>
      </div>

      <div className="navbarMobile">
        <div className="backgroundMobile">
          <div className="rightSVGNavbar">
            <NavbarMobile />
          </div>
        </div>
      </div>

      <div className="choosePlan">
        <div className="choosePlanTitle boldFont">¡Elegí el plan que más se adapte a vos!</div>
        <img class="choosePlanImage" src={ChoosePlan} alt="Plan" />
        <img class="choosePlanImage" src={ChoosePlan} alt="Plan" />
        <img class="choosePlanImage" src={ChoosePlan} alt="Plan" />
      </div>

      <div className="plansContainerPlans">
        <OrangePlan
          svg={
            <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9712 46.9843V62C23.2704 62 30.1051 55.2187 30.1051 46.9843V31.9686C21.8058 31.9686 14.9712 38.5885 14.9712 46.9843Z" fill="#fff" />
              <path d="M31.7324 15.0157V30.0314C40.0316 30.0314 46.8663 23.2501 46.8663 15.0157V0C38.5671 0 31.7324 6.78128 31.7324 15.0157Z" fill="#fff" />
              <path d="M15.1339 15.6619H0C0 23.8963 6.83465 30.6776 15.1339 30.6776H30.2677C30.2677 22.4431 23.4331 15.6619 15.1339 15.6619Z" fill="#fff" />
              <path d="M46.8663 46.6618H62.0001C62.0001 38.4274 55.1655 31.6461 46.8663 31.6461H31.7324C31.7324 40.042 38.5671 46.6618 46.8663 46.6618Z" fill="#fff" />
            </svg>
          }
          title={'Plan Eter'}
          price={'3800'}
          time={'3'}
        />
        <OrangePlan
          svg={
            <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0501 4.32912L1.77159 0C-0.620814 6.1519 2.45514 13.1013 8.72097 15.4937L19.8855 19.8228C22.2779 13.6709 19.202 6.72152 13.0501 4.32912Z" fill="#fff" />
              <path d="M40.3921 23.0125L29.2276 18.6834C26.8352 24.8353 29.9111 31.8986 36.063 34.1771L47.2276 38.5062C49.62 32.3543 46.544 25.4049 40.3921 23.0125Z" fill="#fff" />
              <path d="M23.6447 33.0382L12.4801 28.7091C10.0877 34.861 13.1636 41.8104 19.4295 44.2028L30.594 48.5319C32.9864 42.38 29.9105 35.3167 23.6447 33.0382Z" fill="#fff" />
            </svg>
          }
          title={'Plan Aire'}
          price={'4600'}
          time={'4'}
        />
        <OrangePlan
          svg={
            <svg width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.3514 0C25.9561 5.94293 30.6 10.6009 34.9236 15.5801C42.45 24.093 41.9696 35.3363 34.2831 43.0461C26.7568 50.4346 14.4264 50.4346 6.73988 43.0461C-0.946598 35.497 -1.427 24.093 5.93921 15.5801C10.1027 10.6009 14.9068 5.94293 20.3514 0Z" fill="#fff" />
            </svg>
          }
          title={'Plan Agua'}
          price={'6500'}
          time={'5'}
        />
        <OrangePlan
          svg={
            <svg width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.6396 24.4194V48.8387C33.175 48.8387 44.059 37.9547 44.059 24.4194V0C30.5237 0 19.6396 10.8841 19.6396 24.4194Z" fill="#fff" />
              <path d="M16.0116 33.7684V48.8386C7.63929 48.8386 0.941406 42.1408 0.941406 33.7684V18.8377C9.17422 18.8377 16.0116 25.5356 16.0116 33.7684Z" fill="#fff" />
            </svg>
          }
          title={'Plan Fuego'}
          price={'7400'}
          time={'6'}
        />
        <OrangePlan
          svg={
            <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.955566 24.4862C1.42645 37.0432 11.786 47.0888 24.5 47.0888C37.5279 47.0888 48.0444 36.7293 48.0444 23.7014V0.156963C48.0444 0.156963 48.0444 0.156963 47.8874 0.156963C34.8595 0.156963 24.343 10.6735 24.343 23.7014V23.8583C24.343 23.8583 24.343 23.8583 24.343 23.7014C24.343 10.6735 13.9835 0 0.955566 0V24.4862Z" fill="#fff" />
            </svg>
          }
          title={'Plan Tierra'}
          price={'8800'}
          time={'7'}
        />
      </div>

      <div className="container">
        <div className="whyPlanContainer">
          <div className="whyPlanTitle">¿Por qué suscribirme a un plan?</div>
          <div className="whyPlanText">Te será de mucha ayuda para organizarte ya que podrás visualizar: Todos los detalles de tu plan La cantidad de horas que utilizaste y cuántas te quedan Un calendario donde ver tus reservas y realizar nuevas</div>
        </div>
      </div>
    </main>
  );
};

export default Planes;
