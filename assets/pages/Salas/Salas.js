import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import BackgroundImage from '../../images/Backgrounds/PlanesBackground.jpg';
import Service from '../../components/Service';
import ChoosePlan from '../../images/Backgrounds/ChoosePlan.jpg';
import LeftSVGGreenSection from '../../images/SVGs/LeftSVGGreenSection.svg';
import SalasBackground from '../../images/Backgrounds/SalasBackground.jpg';
import PreviousArrow from '../../images/Icons/PreviousArrow.svg';
import NextArrow from '../../images/Icons/NextArrow.svg';

const Salas = ({ hideAlternativeFooter }) => {
  useEffect(() => {
    hideAlternativeFooter();
    window.scroll(0, 0);
  }, []);

  return (
    <main className="roomsGeneralContainerRooms">
      <div className="navbarLarger">
        <div className="background" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
          <div className="leftSVGNavbar">
            <div className="roomHeaderContent">
              <p className="roomTitle extraBoldFont">Cosmos</p>
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
                title={'Capacidad:'}
                subtitle={'4 personas'}
                small={true}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="66" height="55" viewBox="0 0 66 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 6.63794C0 33.3793 21.7666 55 48.6885 55V6.63794H0Z" fill="#FF972F" />
                    <path
                      d="M54.0346 41.4717C49.5158 41.4717 45.8244 37.8683 45.7607 33.3798V33.3165V25.8568C45.7607 25.4775 46.079 25.0981 46.5245 25.0981H61.4811C63.9633 25.0981 65.9999 27.1211 65.9999 29.5866C65.9999 31.7993 64.3451 33.6326 62.2448 34.0119C61.863 38.1211 58.4261 41.3453 54.2892 41.4085C54.1619 41.4717 54.0983 41.4717 54.0346 41.4717ZM47.2882 33.3165C47.2882 36.9832 50.2159 39.9545 53.8437 40.0177C53.9073 40.0177 53.971 40.0177 54.0346 40.0177C57.726 40.0177 60.7174 37.0464 60.781 33.3798C60.781 33.0004 61.0992 32.6211 61.5447 32.6211C63.1995 32.6211 64.5361 31.2935 64.5361 29.6499C64.5361 28.0062 63.1995 26.6786 61.5447 26.6786H47.2882V33.3165Z"
                      fill="white"
                    />
                    <path d="M50.916 19.408V23.6436C53.2709 23.6436 55.1802 21.7471 55.1802 19.408V15.1724C52.8254 15.1724 50.916 17.0689 50.916 19.408Z" fill="white" />
                    <path d="M50.916 10.937V15.1727C53.2709 15.1727 55.1802 13.2761 55.1802 10.937V6.70142C52.8254 6.70142 50.916 8.59797 50.916 10.937Z" fill="white" />
                    <path d="M56.5803 15.1724V19.408C58.9352 19.408 60.8445 17.5115 60.8445 15.1724V10.9368C58.4897 10.9368 56.5803 12.8333 56.5803 15.1724Z" fill="white" />
                    <path
                      d="M32.2046 22.7586H17.8208C16.8025 22.7586 15.8478 22.3161 15.1477 21.6207C14.4476 20.9253 14.1294 19.9138 14.193 18.9023L15.4659 3.35057C15.5932 1.45402 17.1843 0 19.0937 0H30.9317C32.841 0 34.3685 1.45402 34.5595 3.28736L35.8324 18.8391C35.896 19.8506 35.5778 20.8621 34.8777 21.5575C34.1776 22.3793 33.1593 22.7586 32.2046 22.7586ZM30.868 1.45402H19.0937C17.9481 1.45402 17.057 2.27586 16.9298 3.41379L15.6569 18.9655C15.5932 19.5345 15.7841 20.1667 16.2297 20.6092C16.6115 21.0517 17.1843 21.3046 17.8208 21.3046H32.2046C32.7774 21.3046 33.3502 21.0517 33.7957 20.6092C34.1776 20.1667 34.4322 19.5977 34.3685 18.9655L33.0956 3.41379C32.9047 2.33908 32.0137 1.51724 30.868 1.45402Z"
                      fill="white"
                    />
                    <path
                      d="M34.8775 31.7353H15.0839C13.6837 31.7353 12.6017 30.787 12.5381 29.5859V26.1089C12.5381 24.9077 13.6837 23.9595 15.0202 23.8962H34.8775C36.2777 23.8962 37.3597 24.9077 37.4233 26.0457V29.5227C37.4233 30.787 36.2777 31.7353 34.8775 31.7353ZM15.0839 25.4135C14.5111 25.4135 14.0656 25.7296 14.0656 26.1089V29.5859C14.0656 29.9652 14.5111 30.2813 15.0839 30.2813H34.9412C35.514 30.2813 35.9595 29.9652 35.9595 29.5859V26.1089C35.9595 25.7296 35.514 25.4135 34.9412 25.4135H15.0839Z"
                      fill="white"
                    />
                    <path d="M36.8508 28.5117H36.0234V27.2473H36.8508C37.9964 27.2473 38.8875 26.3623 38.8875 25.2243V22.822H40.1604V25.2243C40.224 27.0577 38.6965 28.5117 36.8508 28.5117Z" fill="white" />
                    <path
                      d="M39.5873 23.4541C38.5053 23.4541 37.487 22.822 37.0415 21.7472C36.596 20.7357 36.8506 19.5346 37.6143 18.776C38.378 18.0174 39.5873 17.7645 40.6056 18.207C41.6239 18.6495 42.324 19.5978 42.324 20.7357C42.324 22.253 41.0511 23.4541 39.5873 23.4541ZM39.5873 19.2817C39.0145 19.2817 38.4417 19.5978 38.2507 20.1668C37.9962 20.6725 38.1235 21.3047 38.569 21.7472C38.9508 22.1898 39.5873 22.3162 40.1601 22.0633C40.7329 21.8737 41.0511 21.3047 41.0511 20.7357C40.9875 19.9139 40.351 19.2817 39.5873 19.2817Z"
                      fill="white"
                    />
                    <path d="M13.9384 28.5117H13.111C11.2653 28.5117 9.80144 27.0577 9.73779 25.2243V22.822H11.0107V25.2243C11.0107 26.3623 11.9017 27.2473 13.0473 27.2473H13.8747V28.5117H13.9384Z" fill="white" />
                    <path
                      d="M10.4376 23.4541C9.35567 23.4541 8.33735 22.7587 7.89183 21.7472C7.44631 20.7357 7.70089 19.5346 8.46464 18.776C9.22838 18.0174 10.4376 17.7645 11.456 18.207C12.4743 18.6495 13.1744 19.5978 13.1744 20.7357C13.1744 21.4311 12.8561 22.1266 12.347 22.6955C11.8378 23.2013 11.1377 23.4541 10.4376 23.4541ZM10.4376 19.2817C9.86483 19.2817 9.35567 19.661 9.10109 20.1668C8.84651 20.6725 8.9738 21.3047 9.41931 21.7472C9.80118 22.1266 10.4376 22.253 11.0104 22.0633C11.5196 21.8737 11.9015 21.3047 11.9015 20.7357C11.9015 20.3564 11.7742 19.9771 11.456 19.7243C11.1377 19.4082 10.8195 19.2817 10.4376 19.2817Z"
                      fill="white"
                    />
                    <path d="M28.195 21.3674H26.9221V24.5916H28.195V21.3674Z" fill="white" />
                    <path d="M23.0395 21.3674H21.7666V24.5916H23.0395V21.3674Z" fill="white" />
                    <path d="M25.649 34.9597H24.3761C22.9122 34.9597 21.7666 33.8218 21.7666 32.3677V30.408H28.2584V32.3677C28.2584 33.7585 27.0491 34.9597 25.649 34.9597ZM23.0395 31.7355V32.3677C23.0395 33.0631 23.6123 33.6321 24.3124 33.6321H25.5853C26.2854 33.6321 26.8582 33.0631 26.8582 32.3677V31.7355H23.0395Z" fill="white" />
                    <path d="M35.2594 42.1664H33.9865V41.5342C33.9865 40.3962 33.0318 39.448 31.8862 39.448H18.2025C17.0569 39.448 16.1022 40.3962 16.1022 41.5342V42.1664H14.8293V41.5342C14.8293 39.7008 16.3568 38.1836 18.2025 38.1836H31.8862C33.7319 38.1836 35.2594 39.7008 35.2594 41.5342V42.1664Z" fill="white" />
                    <path
                      d="M34.6231 45.8973C33.732 45.8973 32.9046 45.3916 32.5864 44.5697C32.2682 43.7479 32.4591 42.7996 33.0319 42.1674C33.6684 41.5352 34.623 41.3456 35.4504 41.7249C36.2778 42.041 36.787 42.8628 36.787 43.7479C36.8506 44.949 35.8323 45.8973 34.6231 45.8973ZM34.6231 42.7996C34.2412 42.7996 33.923 42.9893 33.7957 43.3686C33.6684 43.6847 33.732 44.064 33.9866 44.3168C34.2412 44.5697 34.6231 44.6329 34.9413 44.5065C35.2595 44.3801 35.5141 44.064 35.5141 43.6847C35.5141 43.2421 35.1322 42.7996 34.6231 42.7996Z"
                      fill="white"
                    />
                    <path
                      d="M25.0125 45.8973C24.1214 45.8973 23.294 45.3916 22.9758 44.5697C22.6576 43.7479 22.8485 42.7996 23.4213 42.1674C24.0578 41.5352 25.0125 41.3456 25.8398 41.7249C26.6672 42.041 27.1764 42.8628 27.1764 43.7479C27.24 44.949 26.2854 45.8973 25.0125 45.8973ZM25.0125 42.7996C24.6306 42.7996 24.3124 42.9893 24.1851 43.3686C24.0578 43.6847 24.1214 44.064 24.376 44.3168C24.6306 44.5697 25.0125 44.6329 25.3307 44.5065C25.6489 44.3801 25.9035 44.064 25.9035 43.6847C25.9671 43.2421 25.5216 42.7996 25.0125 42.7996Z"
                      fill="white"
                    />
                    <path
                      d="M15.4658 45.8973C14.5748 45.8973 13.7474 45.3916 13.4292 44.5697C13.111 43.7479 13.3019 42.7996 13.8747 42.1674C14.5111 41.5352 15.4658 41.3456 16.2932 41.7249C17.1206 42.041 17.6298 42.8628 17.6298 43.7479C17.6298 44.949 16.6751 45.8973 15.4658 45.8973ZM15.4658 42.7996C15.084 42.7996 14.7657 42.9893 14.6384 43.3686C14.5111 43.6847 14.5748 44.064 14.8294 44.3168C15.084 44.5697 15.4658 44.6329 15.784 44.5065C16.1023 44.3801 16.3569 44.064 16.3569 43.6847C16.3569 43.2421 15.975 42.7996 15.4658 42.7996Z"
                      fill="white"
                    />
                    <path d="M25.5852 34.2646H24.3123V42.1669H25.5852V34.2646Z" fill="white" />
                    <path d="M12.0925 20.7362C12.0925 21.6845 11.3288 22.3799 10.4377 22.3799C9.48305 22.3799 8.78296 21.6213 8.78296 20.7362C8.78296 19.788 9.5467 19.0926 10.4377 19.0926C11.3288 19.0293 12.0925 19.788 12.0925 20.7362Z" fill="white" />
                    <path d="M41.2422 20.7362C41.2422 21.6845 40.4784 22.3799 39.5874 22.3799C38.6327 22.3799 37.9326 21.6213 37.9326 20.7362C37.9326 19.788 38.6964 19.0926 39.5874 19.0926C40.4784 19.0293 41.2422 19.788 41.2422 20.7362Z" fill="white" />
                    <path d="M35.7049 43.7466C35.7049 44.3787 35.1958 44.8213 34.623 44.8213C33.9865 44.8213 33.541 44.3155 33.541 43.7466C33.541 43.1144 34.0502 42.6719 34.623 42.6719C35.2594 42.6086 35.7049 43.1144 35.7049 43.7466Z" fill="white" />
                    <path d="M26.1578 43.7466C26.1578 44.3787 25.6487 44.8213 25.0759 44.8213C24.4394 44.8213 23.9939 44.3155 23.9939 43.7466C23.9939 43.1144 24.5031 42.6719 25.0759 42.6719C25.6487 42.6086 26.1578 43.1144 26.1578 43.7466Z" fill="white" />
                    <path d="M16.5477 43.7466C16.5477 44.3787 16.0386 44.8213 15.4658 44.8213C14.8293 44.8213 14.3838 44.3155 14.3838 43.7466C14.3838 43.1144 14.8929 42.6719 15.4658 42.6719C16.0386 42.6086 16.5477 43.1144 16.5477 43.7466Z" fill="white" />
                  </svg>
                }
                title={'Wi-Fi de alta velocidad'}
                subtitle={''}
                small={true}
                darkText={false}
              />
              <Service
                svg={
                  <svg width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.4174 46.41C46.4174 20.7825 25.8555 0 0.5 0V46.41H46.4174Z" fill="#FF972F" />
                    <path d="M30.0813 44.4341C31.9105 44.4341 33.3611 45.9003 33.3611 47.7491C33.3611 49.5978 31.9105 51.0641 30.0813 51.0641C28.2522 51.0641 26.8015 49.5978 26.8015 47.7491C26.8015 45.9003 28.2522 44.4341 30.0813 44.4341Z" fill="white" />
                    <path d="M53.5447 23.2048C53.0401 23.2048 52.4725 23.0136 52.094 22.5673C46.3544 16.3198 38.5333 12.8773 30.1445 12.8773C21.7557 12.8773 13.9977 16.3198 8.25802 22.5673C7.50114 23.3961 6.23968 23.3961 5.48279 22.6948C4.66284 21.9298 4.66284 20.6548 5.35665 19.8898C11.8532 12.7498 20.6835 8.86108 30.1445 8.86108C39.6055 8.86108 48.4358 12.7498 54.9323 19.8261C55.6892 20.6548 55.6261 21.9298 54.8062 22.6311C54.4908 23.0136 53.9862 23.2048 53.5447 23.2048Z" fill="white" />
                    <path d="M46.2913 31.4928C45.7867 31.4928 45.2822 31.3016 44.9037 30.9191C40.867 26.7753 35.6319 24.4803 30.1445 24.4803C24.7202 24.4803 19.4851 26.7753 15.3854 30.9191C14.6285 31.6841 13.367 31.6841 12.6101 30.9191C11.8533 30.1541 11.8533 28.8791 12.6101 28.1141C17.4037 23.2053 23.648 20.5278 30.1445 20.5278C36.6411 20.5278 42.8854 23.2053 47.6789 28.1141C48.4358 28.8791 48.4358 30.1541 47.6789 30.9191C47.3005 31.3016 46.7959 31.4928 46.2913 31.4928Z" fill="white" />
                    <path
                      d="M21.7558 39.7801C21.2512 39.7801 20.7466 39.5888 20.3682 39.2063C19.6113 38.4413 19.6113 37.1663 20.3682 36.4013C22.9542 33.8513 26.6125 32.1938 30.0184 32.1938H30.1446C33.4875 32.1938 37.2088 33.7876 39.7948 36.4013C40.5517 37.1663 40.5517 38.4413 39.7948 39.2063C39.0379 39.9713 37.7765 39.9713 37.0196 39.2063C35.1904 37.3576 32.4783 36.2101 30.1446 36.2101H30.0184C27.6847 36.2101 25.0356 37.4213 23.1434 39.2063C22.765 39.5888 22.2604 39.7801 21.7558 39.7801Z"
                      fill="white"
                    />
                  </svg>
                }
                title={'Equipamiento:'}
                subtitle={'Sillas ergométricas'}
                small={true}
                darkText={false}
              />
              <button className="roomButton boldFont">Explorá en 360º</button>
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

      <div className="salasContainerLarger">
        <div className="chooseRoomContainer">
          <div className="chooseRoomTitle boldFont">¡Explorá nuestras salas!</div>
          <img className="chooseRoomImage" src={ChoosePlan} alt="Plan" />
          <img className="chooseRoomImage" src={ChoosePlan} alt="Plan" />
          <img className="chooseRoomImage" src={ChoosePlan} alt="Plan" />
        </div>

        <div className="customContainer">
          <div className="hourPlansContainer">
            <div className="hourPlansTitle boldFont">Packs de horas mensuales</div>
            <div className="hourPlansSubtitle">¡Vos elegís cómo organizar las horas!</div>
            <div className="hourPlansTable">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr className="roomsRowTable">
                      <td>Incluye</td>
                      <td>8 Hs. mensuales</td>
                      <td className="priceRoomRowTable">$10.300</td>
                    </tr>
                    <tr className="roomsRowTable">
                      <td>Incluye</td>
                      <td>12 Hs. mensuales</td>
                      <td className="priceRoomRowTable">$13.100</td>
                    </tr>
                    <tr className="roomsRowTable">
                      <td>Incluye</td>
                      <td>16 Hs. mensuales</td>
                      <td className="priceRoomRowTable">$15.900</td>
                    </tr>
                    <tr className="roomsRowTable">
                      <td>Incluye</td>
                      <td>24 Hs. mensuales</td>
                      <td className="priceRoomRowTable">$21.500</td>
                    </tr>
                    <tr className="roomsRowTable">
                      <td>Incluye</td>
                      <td>32 Hs. mensuales</td>
                      <td className="priceRoomRowTable">$25.400</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button className="hourPlansButton boldFont">Reservar</button>
          </div>
        </div>

        <div className="roomsFooter ">
          <img src={LeftSVGGreenSection} alt="Vida" className="roomsFooterSVGContainer" style={{ position: 'absolute' }} />
          <div className="roomsFooterSVGContent">
            <p className="extraBoldFont">Accedé a todas nuestras salas a través de nuestros planes</p>
          </div>
          <Carousel
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators
            showArrows
            centerMode
            centerSlidePercentage={27}
            renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
              hasPrev && (
                <button onClick={clickHandler} className="carouselArrowPrevious">
                  <img src={PreviousArrow} />
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext, labelNext) =>
              hasNext && (
                <button onClick={clickHandler} className="carouselArrowNext">
                  <img src={NextArrow} />
                </button>
              )
            }
            className="roomsFooterCarousel">
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9712 46.9843V62C23.2704 62 30.1051 55.2187 30.1051 46.9843V31.9686C21.8058 31.9686 14.9712 38.5885 14.9712 46.9843Z" fill="#fff" />
                  <path d="M31.7324 15.0157V30.0314C40.0316 30.0314 46.8663 23.2501 46.8663 15.0157V0C38.5671 0 31.7324 6.78128 31.7324 15.0157Z" fill="#fff" />
                  <path d="M15.1339 15.6619H0C0 23.8963 6.83465 30.6776 15.1339 30.6776H30.2677C30.2677 22.4431 23.4331 15.6619 15.1339 15.6619Z" fill="#fff" />
                  <path d="M46.8663 46.6618H62.0001C62.0001 38.4274 55.1655 31.6461 46.8663 31.6461H31.7324C31.7324 40.042 38.5671 46.6618 46.8663 46.6618Z" fill="#fff" />
                </svg>
              </div>
              <p className="roomsFooterPlanTitle extraBoldFont">Plan Eter</p>
            </div>
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.0501 4.32912L1.77159 0C-0.620814 6.1519 2.45514 13.1013 8.72097 15.4937L19.8855 19.8228C22.2779 13.6709 19.202 6.72152 13.0501 4.32912Z" fill="#fff" />
                  <path d="M40.3921 23.0125L29.2276 18.6834C26.8352 24.8353 29.9111 31.8986 36.063 34.1771L47.2276 38.5062C49.62 32.3543 46.544 25.4049 40.3921 23.0125Z" fill="#fff" />
                  <path d="M23.6447 33.0382L12.4801 28.7091C10.0877 34.861 13.1636 41.8104 19.4295 44.2028L30.594 48.5319C32.9864 42.38 29.9105 35.3167 23.6447 33.0382Z" fill="#fff" />
                </svg>
              </div>
              <p className="roomsFooterPlanTitle extraBoldFont">Plan Aire</p>
            </div>
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="41" height="49" viewBox="0 0 41 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.3514 0C25.9561 5.94293 30.6 10.6009 34.9236 15.5801C42.45 24.093 41.9696 35.3363 34.2831 43.0461C26.7568 50.4346 14.4264 50.4346 6.73988 43.0461C-0.946598 35.497 -1.427 24.093 5.93921 15.5801C10.1027 10.6009 14.9068 5.94293 20.3514 0Z" fill="#fff" />
                </svg>
              </div>
              <p className="roomsFooterPlanTitle extraBoldFont">Plan Agua</p>
            </div>
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="45" height="49" viewBox="0 0 45 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.6396 24.4194V48.8387C33.175 48.8387 44.059 37.9547 44.059 24.4194V0C30.5237 0 19.6396 10.8841 19.6396 24.4194Z" fill="#fff" />
                  <path d="M16.0116 33.7684V48.8386C7.63929 48.8386 0.941406 42.1408 0.941406 33.7684V18.8377C9.17422 18.8377 16.0116 25.5356 16.0116 33.7684Z" fill="#fff" />
                </svg>
              </div>
              <p className="roomsFooterPlanTitle extraBoldFont">Plan Fuego</p>
            </div>
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.955566 24.4862C1.42645 37.0432 11.786 47.0888 24.5 47.0888C37.5279 47.0888 48.0444 36.7293 48.0444 23.7014V0.156963C48.0444 0.156963 48.0444 0.156963 47.8874 0.156963C34.8595 0.156963 24.343 10.6735 24.343 23.7014V23.8583C24.343 23.8583 24.343 23.8583 24.343 23.7014C24.343 10.6735 13.9835 0 0.955566 0V24.4862Z" fill="#fff" />
                </svg>
              </div>
              <p className="roomsFooterPlanTitle extraBoldFont">Plan Tierra</p>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="salasContainerMobile">
        <div className="salasMobileBackground" style={{ backgroundImage: `url(${SalasBackground})` }}>
          <div className="semiCircleHeaderMobile">
            <p className="salasTitleMobile extraBoldFont">Eter</p>
          </div>
        </div>
        <div className="customContainer">
          <div className="roomHorizontalMobile">
            <p className="roomHorizontalTitle">Incluye 8 Hs. mensuales</p>
            <p className="roomHorizontalPrice extraBoldFont">$3800</p>
          </div>
          <div className="roomHorizontalMobile">
            <p className="roomHorizontalTitle">Incluye 12 Hs. mensuales</p>
            <p className="roomHorizontalPrice extraBoldFont">$3800</p>
          </div>
          <div className="roomHorizontalMobile">
            <p className="roomHorizontalTitle">Incluye 16 Hs. mensuales</p>
            <p className="roomHorizontalPrice extraBoldFont">$3800</p>
          </div>
          <div className="roomHorizontalMobile">
            <p className="roomHorizontalTitle">Incluye 24 Hs. mensuales</p>
            <p className="roomHorizontalPrice extraBoldFont">$3800</p>
          </div>
          <div className="roomHorizontalMobile">
            <p className="roomHorizontalTitle">Incluye 32 Hs. mensuales</p>
            <p className="roomHorizontalPrice extraBoldFont">$3800</p>
          </div>
          <button className="roomsButtonMobileRooms">Suscribite</button>
        </div>

        <div className="chooseRoomContainerMobile">
          <div className="chooseRoomTitleMobile boldFont">¡Explorá nuestras salas!</div>
          <div className="d-flex justify-content-center flex-wrap">
            <img className="chooseRoomImage" src={ChoosePlan} alt="Plan" />
            <img className="chooseRoomImage" src={ChoosePlan} alt="Plan" />
            <img className="chooseRoomImage" src={ChoosePlan} alt="Plan" />
          </div>
        </div>

        <div className="allRoomsContainerMobile">
          <div className="customContainer">
            <p className="allRoomsTitleMobile extraBoldFont">Accedé a todas nuestras salas a través de nuestros planes</p>
          </div>
          <div className="roomsFooterContainerMobile">
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.8253 63.4214V83.4019C31.8686 83.4019 40.9631 74.3784 40.9631 63.4214V43.4408C29.9198 43.4408 20.8253 52.2494 20.8253 63.4214Z" fill="white" />
                  <path d="M43.1284 20.8825V40.8631C54.1717 40.8631 63.2662 31.8396 63.2662 20.8825V0.901917C52.2229 0.901917 43.1284 9.9254 43.1284 20.8825Z" fill="white" />
                  <path d="M21.0418 21.7423H0.904053C0.904053 32.6994 9.99854 41.7229 21.0418 41.7229H41.1796C41.1796 30.7658 32.0852 21.7423 21.0418 21.7423Z" fill="white" />
                  <path d="M63.2662 62.9923H83.404C83.404 52.0352 74.3095 43.0117 63.2662 43.0117H43.1284C43.1284 54.1836 52.2229 62.9923 63.2662 62.9923Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="84" height="84" viewBox="0 0 83 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8122 8.43523L2.16766 0.89679C-1.99936 11.6093 3.35824 23.7105 14.2719 27.8765L33.718 35.4149C37.885 24.7024 32.5274 12.6012 21.8122 8.43523Z" fill="white" />
                  <path d="M69.4355 40.9693L49.9894 33.4308C45.8224 44.1434 51.18 56.4429 61.8952 60.4105L81.3413 67.949C85.5083 57.2364 80.1507 45.1353 69.4355 40.9693Z" fill="white" />
                  <path d="M40.2658 58.4273L20.8197 50.8889C16.6527 61.6014 22.0103 73.7025 32.9239 77.8685L52.37 85.407C56.5371 74.6944 51.1795 62.3949 40.2658 58.4273Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="84" height="84" viewBox="0 0 68 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.9605 0.153137C43.5064 10.3224 51.4159 18.2928 58.7799 26.813C71.5988 41.3797 70.7806 60.6188 57.689 73.8113C44.8701 86.4541 23.869 86.4541 10.7774 73.8113C-2.31415 60.8936 -3.13238 41.3797 9.41373 26.813C16.505 18.2928 24.6873 10.3224 33.9605 0.153137Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="84" height="84" viewBox="0 0 80 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.4316 45.1519V89.9777C59.2311 89.9777 79.1729 69.9982 79.1729 45.1519V0.32605C54.3735 0.32605 34.4316 20.3056 34.4316 45.1519Z" fill="white" />
                  <path d="M27.7847 62.3137V89.9776C12.4449 89.9776 0.172974 77.6826 0.172974 62.3137V34.9059C15.2572 34.9059 27.7847 47.201 27.7847 62.3137Z" fill="white" />
                </svg>
              </div>
            </div>
            <div className="roomsFooterPlanContainer">
              <div className="roomsFooterSVGSquare">
                <svg width="84" height="84" viewBox="0 0 84 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.595947 43.3733C1.42095 65.3733 19.5709 82.9733 41.8459 82.9733C64.6709 82.9733 83.0959 64.8233 83.0959 41.9983V0.748267C83.0959 0.748267 83.0959 0.748267 82.8209 0.748267C59.9959 0.748267 41.5709 19.1733 41.5709 41.9983V42.2733C41.5709 42.2733 41.5709 42.2733 41.5709 41.9983C41.5709 19.1733 23.4209 0.473267 0.595947 0.473267V43.3733Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Salas;
