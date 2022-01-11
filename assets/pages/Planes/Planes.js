import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import NavbarMobile from '../../components/NavbarMobile';
import OrangePlan from '../../components/OrangePlan';
import BackgroundImage from '../../images/Backgrounds/PlanesBackground.jpg';
import ChoosePlan from '../../images/Backgrounds/ChoosePlan.jpg';
import PlanesBackground from '../../images/Backgrounds/PlanesBackground.jpg';
import PlanesBackground2 from '../../images/Backgrounds/HomeBackground.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PreviousArrow from '../../images/Icons/PreviousArrowWhite.svg';
import NextArrow from '../../images/Icons/NextArrowWhite.svg';
import PreviousArrowGray from '../../images/Icons/PreviousArrow.svg';
import NextArrowGray from '../../images/Icons/NextArrow.svg';

const Planes = ({ hideAlternativeFooter }) => {
  useEffect(() => hideAlternativeFooter(), []);
  useEffect(() => window.scroll(0, 0), []);

  const queryType = useRef(null);
  const queryTypeMobile = useRef(null);

  const [planToShow, setPlanToShow] = useState(0);

  useEffect(() => {
    if (window.document.documentURI.includes('#')) {
      const selectedPlan = window.document.documentURI.split('#')[1];
      window.scroll(0, 0);
      switch (selectedPlan) {
        case 'Eter':
          setPlanToShow(0);
          return;
        case 'Aire':
          setPlanToShow(1);
          return;
        case 'Agua':
          setPlanToShow(2);
          return;
        case 'Fuego':
          setPlanToShow(3);
          return;
        case 'Tierra':
          setPlanToShow(4);
          return;
        default:
          return;
      }
    }
  }, []);

  return (
    <main className="plansGeneralContainerPlans">
      <div className="navbarLarger" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="background" style={{ backgroundImage: `${planToShow === 0 ? `url(${PlanesBackground})` : planToShow === 1 ? `url(${PlanesBackground2})` : planToShow === 2 ? `url(${PlanesBackground})` : planToShow === 3 ? `url(${PlanesBackground2})` : `url(${PlanesBackground})`}`, backgroundSize: 'cover' }}>
          <div className="leftSVGNavbar">
            <div className="planesHeaderContent">
              <div className="d-flex align-items-center w-75">
                <Carousel
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  showArrows
                  selectedItem={planToShow}
                  centerMode={true}
                  centerSlidePercentage={100}
                  onChange={(index, argument) => setPlanToShow(index)}
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
                  }>
                  {planToShow === 0 && (
                    <div className="actualPlanHeaderLarger">
                      <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9712 46.9843V62C23.2704 62 30.1051 55.2187 30.1051 46.9843V31.9686C21.8058 31.9686 14.9712 38.5885 14.9712 46.9843Z" fill="#fff" />
                        <path d="M31.7324 15.0157V30.0314C40.0316 30.0314 46.8663 23.2501 46.8663 15.0157V0C38.5671 0 31.7324 6.78128 31.7324 15.0157Z" fill="#fff" />
                        <path d="M15.1339 15.6619H0C0 23.8963 6.83465 30.6776 15.1339 30.6776H30.2677C30.2677 22.4431 23.4331 15.6619 15.1339 15.6619Z" fill="#fff" />
                        <path d="M46.8663 46.6618H62.0001C62.0001 38.4274 55.1655 31.6461 46.8663 31.6461H31.7324C31.7324 40.042 38.5671 46.6618 46.8663 46.6618Z" fill="#fff" />
                      </svg>
                      <p className="actualPlanTitle extraBoldFont">Eter</p>
                    </div>
                  )}
                  {planToShow === 1 && (
                    <div className="actualPlanHeaderLarger">
                      <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8122 8.43523L2.16766 0.89679C-1.99936 11.6093 3.35824 23.7105 14.2719 27.8765L33.718 35.4149C37.885 24.7024 32.5274 12.6012 21.8122 8.43523Z" fill="white" />
                        <path d="M69.4355 40.9693L49.9894 33.4308C45.8224 44.1434 51.18 56.4429 61.8952 60.4105L81.3413 67.949C85.5083 57.2364 80.1507 45.1353 69.4355 40.9693Z" fill="white" />
                        <path d="M40.2658 58.4273L20.8197 50.8889C16.6527 61.6014 22.0103 73.7025 32.9239 77.8685L52.37 85.407C56.5371 74.6944 51.1795 62.3949 40.2658 58.4273Z" fill="white" />
                      </svg>
                      <p className="actualPlanTitle extraBoldFont">Aire</p>
                    </div>
                  )}
                  {planToShow === 2 && (
                    <div className="actualPlanHeaderLarger">
                      <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.9605 0.153137C43.5064 10.3224 51.4159 18.2928 58.7799 26.813C71.5988 41.3797 70.7806 60.6188 57.689 73.8113C44.8701 86.4541 23.869 86.4541 10.7774 73.8113C-2.31415 60.8936 -3.13238 41.3797 9.41373 26.813C16.505 18.2928 24.6873 10.3224 33.9605 0.153137Z" fill="white" />
                      </svg>
                      <p className="actualPlanTitle extraBoldFont">Agua</p>
                    </div>
                  )}
                  {planToShow === 3 && (
                    <div className="actualPlanHeaderLarger">
                      <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.4316 45.1519V89.9777C59.2311 89.9777 79.1729 69.9982 79.1729 45.1519V0.32605C54.3735 0.32605 34.4316 20.3056 34.4316 45.1519Z" fill="white" />
                        <path d="M27.7847 62.3137V89.9776C12.4449 89.9776 0.172974 77.6826 0.172974 62.3137V34.9059C15.2572 34.9059 27.7847 47.201 27.7847 62.3137Z" fill="white" />
                      </svg>
                      <p className="actualPlanTitle extraBoldFont">Fuego</p>
                    </div>
                  )}
                  {planToShow === 4 && (
                    <div className="actualPlanHeaderLarger">
                      <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.595947 43.3733C1.42095 65.3733 19.5709 82.9733 41.8459 82.9733C64.6709 82.9733 83.0959 64.8233 83.0959 41.9983V0.748267C83.0959 0.748267 83.0959 0.748267 82.8209 0.748267C59.9959 0.748267 41.5709 19.1733 41.5709 41.9983V42.2733C41.5709 42.2733 41.5709 42.2733 41.5709 41.9983C41.5709 19.1733 23.4209 0.473267 0.595947 0.473267V43.3733Z" fill="white" />
                      </svg>
                      <p className="actualPlanTitle extraBoldFont">Tierra</p>
                    </div>
                  )}
                </Carousel>
              </div>
              {planToShow === 0 ? (
                <p className="actualPlanText">
                  5 créditos Vida. <br /> 3 Hs. en salas de reunión.
                </p>
              ) : planToShow === 1 ? (
                <p className="actualPlanText">
                  10 créditos Vida. <br /> 6 Hs. en salas de reunión.
                </p>
              ) : planToShow === 2 ? (
                <p className="actualPlanText">
                  15 créditos Vida. <br /> 9 Hs. en salas de reunión.
                </p>
              ) : planToShow === 3 ? (
                <p className="actualPlanText">
                  20 créditos Vida. <br /> 12 Hs. en salas de reunión.
                </p>
              ) : (
                <p className="actualPlanText">
                  25 créditos Vida. <br /> 15 Hs. en salas de reunión.
                </p>
              )}
              <p className="actualPlanPrice extraBoldFont">{planToShow === 0 ? '$3000' : planToShow === 1 ? '$4000' : planToShow === 2 ? '$5000' : planToShow === 3 ? '$6000' : '$7000'}</p>
              <button className="actualPlanButton boldFont">Suscribite</button>
            </div>
          </div>
          <div className="rightSVGNavbar">
            <svg width="1325" height="179" viewBox="0 0 1325 179" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.90735e-06C130.5 89.8996 593.185 179 1325 179V1.90735e-06H0Z" fill="#FF972F" />
            </svg>
            <Navbar />
          </div>
          <a href="https://api.whatsapp.com/send?phone=5493513333333" className="floatWhatsApp floatButton d-none d-lg-flex justify-content-center align-items-center" target="_blank">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="navbarMobile">
        <div className="backgroundMobile">
          <div className="rightSVGNavbar">
            <NavbarMobile />
          </div>
        </div>
      </div>

      <div className="plansContainerLargerPlans">
        <div className="leftSVGNavbar" style={{ marginTop: '-100px', backgroundImage: `${planToShow === 0 ? `url(${PlanesBackground})` : planToShow === 1 ? `url(${PlanesBackground2})` : planToShow === 2 ? `url(${PlanesBackground})` : planToShow === 3 ? `url(${PlanesBackground2})` : `url(${PlanesBackground})`}`, backgroundSize: 'cover' }}>
          <div className="planesHeaderContent">
            <div className="d-flex align-items-center w-75">
              <Carousel
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                showArrows
                selectedItem={planToShow}
                centerMode={true}
                centerSlidePercentage={100}
                onChange={(index, argument) => setPlanToShow(index)}
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
                }>
                {planToShow === 0 && (
                  <div className="actualPlanHeaderLarger">
                    <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.9712 46.9843V62C23.2704 62 30.1051 55.2187 30.1051 46.9843V31.9686C21.8058 31.9686 14.9712 38.5885 14.9712 46.9843Z" fill="#fff" />
                      <path d="M31.7324 15.0157V30.0314C40.0316 30.0314 46.8663 23.2501 46.8663 15.0157V0C38.5671 0 31.7324 6.78128 31.7324 15.0157Z" fill="#fff" />
                      <path d="M15.1339 15.6619H0C0 23.8963 6.83465 30.6776 15.1339 30.6776H30.2677C30.2677 22.4431 23.4331 15.6619 15.1339 15.6619Z" fill="#fff" />
                      <path d="M46.8663 46.6618H62.0001C62.0001 38.4274 55.1655 31.6461 46.8663 31.6461H31.7324C31.7324 40.042 38.5671 46.6618 46.8663 46.6618Z" fill="#fff" />
                    </svg>
                    <p className="actualPlanTitle extraBoldFont">Eter</p>
                  </div>
                )}
                {planToShow === 1 && (
                  <div className="actualPlanHeaderLarger">
                    <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.8122 8.43523L2.16766 0.89679C-1.99936 11.6093 3.35824 23.7105 14.2719 27.8765L33.718 35.4149C37.885 24.7024 32.5274 12.6012 21.8122 8.43523Z" fill="white" />
                      <path d="M69.4355 40.9693L49.9894 33.4308C45.8224 44.1434 51.18 56.4429 61.8952 60.4105L81.3413 67.949C85.5083 57.2364 80.1507 45.1353 69.4355 40.9693Z" fill="white" />
                      <path d="M40.2658 58.4273L20.8197 50.8889C16.6527 61.6014 22.0103 73.7025 32.9239 77.8685L52.37 85.407C56.5371 74.6944 51.1795 62.3949 40.2658 58.4273Z" fill="white" />
                    </svg>
                    <p className="actualPlanTitle extraBoldFont">Aire</p>
                  </div>
                )}
                {planToShow === 2 && (
                  <div className="actualPlanHeaderLarger">
                    <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33.9605 0.153137C43.5064 10.3224 51.4159 18.2928 58.7799 26.813C71.5988 41.3797 70.7806 60.6188 57.689 73.8113C44.8701 86.4541 23.869 86.4541 10.7774 73.8113C-2.31415 60.8936 -3.13238 41.3797 9.41373 26.813C16.505 18.2928 24.6873 10.3224 33.9605 0.153137Z" fill="white" />
                    </svg>
                    <p className="actualPlanTitle extraBoldFont">Agua</p>
                  </div>
                )}
                {planToShow === 3 && (
                  <div className="actualPlanHeaderLarger">
                    <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.4316 45.1519V89.9777C59.2311 89.9777 79.1729 69.9982 79.1729 45.1519V0.32605C54.3735 0.32605 34.4316 20.3056 34.4316 45.1519Z" fill="white" />
                      <path d="M27.7847 62.3137V89.9776C12.4449 89.9776 0.172974 77.6826 0.172974 62.3137V34.9059C15.2572 34.9059 27.7847 47.201 27.7847 62.3137Z" fill="white" />
                    </svg>
                    <p className="actualPlanTitle extraBoldFont">Fuego</p>
                  </div>
                )}
                {planToShow === 4 && (
                  <div className="actualPlanHeaderLarger">
                    <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.595947 43.3733C1.42095 65.3733 19.5709 82.9733 41.8459 82.9733C64.6709 82.9733 83.0959 64.8233 83.0959 41.9983V0.748267C83.0959 0.748267 83.0959 0.748267 82.8209 0.748267C59.9959 0.748267 41.5709 19.1733 41.5709 41.9983V42.2733C41.5709 42.2733 41.5709 42.2733 41.5709 41.9983C41.5709 19.1733 23.4209 0.473267 0.595947 0.473267V43.3733Z" fill="white" />
                    </svg>
                    <p className="actualPlanTitle extraBoldFont">Tierra</p>
                  </div>
                )}
              </Carousel>
            </div>
            {planToShow === 0 ? (
              <p className="actualPlanText">
                5 créditos Vida. <br /> 3 Hs. en salas de reunión.
              </p>
            ) : planToShow === 1 ? (
              <p className="actualPlanText">
                10 créditos Vida. <br /> 6 Hs. en salas de reunión.
              </p>
            ) : planToShow === 2 ? (
              <p className="actualPlanText">
                15 créditos Vida. <br /> 9 Hs. en salas de reunión.
              </p>
            ) : planToShow === 3 ? (
              <p className="actualPlanText">
                20 créditos Vida. <br /> 12 Hs. en salas de reunión.
              </p>
            ) : (
              <p className="actualPlanText">
                25 créditos Vida. <br /> 15 Hs. en salas de reunión.
              </p>
            )}
            <p className="actualPlanPrice extraBoldFont">{planToShow === 0 ? '$3000' : planToShow === 1 ? '$4000' : planToShow === 2 ? '$5000' : planToShow === 3 ? '$6000' : '$7000'}</p>
            <button className="actualPlanButton actualPlanButtonExtraMargin boldFont">Suscribite</button>
          </div>
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
            link={'Eter'}
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
            link={'Aire'}
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
            link={'Agua'}
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
            link={'Fuego'}
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
            link={'Tierra'}
          />
        </div>

        <div className="customContainer">
          <div className="whyPlanContainer">
            <div className="whyPlanTitle extraBoldFont">¿Por qué suscribirme a un plan?</div>
            <div className="whyPlanText">Te será de mucha ayuda para organizarte ya que podrás visualizar: Todos los detalles de tu plan La cantidad de horas que utilizaste y cuántas te quedan Un calendario donde ver tus reservas y realizar nuevas</div>
          </div>
        </div>
      </div>

      <div className="plansContainerMobilePlans">
        <div className="actualPlanHeaderPlansMobileBackground" style={{ backgroundImage: `url(${PlanesBackground})` }}>
          <div className="semiCircleHeaderMobileColumn">
            {planToShow === 0 ? (
              <div className="actualPlanHeaderMobile">
                <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.9712 46.9843V62C23.2704 62 30.1051 55.2187 30.1051 46.9843V31.9686C21.8058 31.9686 14.9712 38.5885 14.9712 46.9843Z" fill="#fff" />
                  <path d="M31.7324 15.0157V30.0314C40.0316 30.0314 46.8663 23.2501 46.8663 15.0157V0C38.5671 0 31.7324 6.78128 31.7324 15.0157Z" fill="#fff" />
                  <path d="M15.1339 15.6619H0C0 23.8963 6.83465 30.6776 15.1339 30.6776H30.2677C30.2677 22.4431 23.4331 15.6619 15.1339 15.6619Z" fill="#fff" />
                  <path d="M46.8663 46.6618H62.0001C62.0001 38.4274 55.1655 31.6461 46.8663 31.6461H31.7324C31.7324 40.042 38.5671 46.6618 46.8663 46.6618Z" fill="#fff" />
                </svg>
                <p className="actualPlanTitleMobile extraBoldFont">Eter</p>
              </div>
            ) : planToShow === 1 ? (
              <div className="actualPlanHeaderMobile">
                <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.8122 8.43523L2.16766 0.89679C-1.99936 11.6093 3.35824 23.7105 14.2719 27.8765L33.718 35.4149C37.885 24.7024 32.5274 12.6012 21.8122 8.43523Z" fill="white" />
                  <path d="M69.4355 40.9693L49.9894 33.4308C45.8224 44.1434 51.18 56.4429 61.8952 60.4105L81.3413 67.949C85.5083 57.2364 80.1507 45.1353 69.4355 40.9693Z" fill="white" />
                  <path d="M40.2658 58.4273L20.8197 50.8889C16.6527 61.6014 22.0103 73.7025 32.9239 77.8685L52.37 85.407C56.5371 74.6944 51.1795 62.3949 40.2658 58.4273Z" fill="white" />
                </svg>
                <p className="actualPlanTitleMobile extraBoldFont">Aire</p>
              </div>
            ) : planToShow === 2 ? (
              <div className="actualPlanHeaderMobile">
                <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.9605 0.153137C43.5064 10.3224 51.4159 18.2928 58.7799 26.813C71.5988 41.3797 70.7806 60.6188 57.689 73.8113C44.8701 86.4541 23.869 86.4541 10.7774 73.8113C-2.31415 60.8936 -3.13238 41.3797 9.41373 26.813C16.505 18.2928 24.6873 10.3224 33.9605 0.153137Z" fill="white" />
                </svg>
                <p className="actualPlanTitleMobile extraBoldFont">Agua</p>
              </div>
            ) : planToShow === 3 ? (
              <div className="actualPlanHeaderMobile">
                <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.4316 45.1519V89.9777C59.2311 89.9777 79.1729 69.9982 79.1729 45.1519V0.32605C54.3735 0.32605 34.4316 20.3056 34.4316 45.1519Z" fill="white" />
                  <path d="M27.7847 62.3137V89.9776C12.4449 89.9776 0.172974 77.6826 0.172974 62.3137V34.9059C15.2572 34.9059 27.7847 47.201 27.7847 62.3137Z" fill="white" />
                </svg>
                <p className="actualPlanTitleMobile extraBoldFont">Fuego</p>
              </div>
            ) : (
              <div className="actualPlanHeaderMobile">
                <svg width="62" height="62" className="actualPlanSVG" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.595947 43.3733C1.42095 65.3733 19.5709 82.9733 41.8459 82.9733C64.6709 82.9733 83.0959 64.8233 83.0959 41.9983V0.748267C83.0959 0.748267 83.0959 0.748267 82.8209 0.748267C59.9959 0.748267 41.5709 19.1733 41.5709 41.9983V42.2733C41.5709 42.2733 41.5709 42.2733 41.5709 41.9983C41.5709 19.1733 23.4209 0.473267 0.595947 0.473267V43.3733Z" fill="white" />
                </svg>
                <p className="actualPlanTitleMobile extraBoldFont">Tierra</p>
              </div>
            )}
          </div>
        </div>
        <div className="customContainer">
          <select className="mdb-select md-form mobileSelect" id="servicesMiddle" defaultValue="Plan" ref={queryTypeMobile}>
            <option value="Plan">Plan</option>
            <option value="Eter">Eter</option>
            <option value="Aire">Aire</option>
            <option value="Agua">Agua</option>
            <option value="Fuego">Fuego</option>
            <option value="Tierra">Tierra</option>
          </select>

          <div className="creditsContainer">
            <div className="flex-column">
              <p className="creditsDescriptionMobile">5 créditos Vida</p>
              <p className="creditsDescriptionMobile">3 Hs. en salas de reunión</p>
            </div>
            <div className="creditsPriceContainer py-4">
              <p className="extraBoldFont m-0">$3800</p>
            </div>
          </div>

          <button className="plansButtonMobilePlans boldFont">Suscribite</button>
        </div>

        <div className="choosePlanContainerMobile">
          <div className="customContainer">
            <div className="choosePlanTitleMobile boldFont">¡Elegí el plan que más se adapte a vos!</div>
            <Carousel
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              showArrows
              selectedItem={planToShow}
              centerMode={true}
              centerSlidePercentage={100}
              renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
                hasPrev && (
                  <button onClick={clickHandler} className="carouselArrowPrevious">
                    <img src={PreviousArrowGray} />
                  </button>
                )
              }
              renderArrowNext={(clickHandler, hasNext, labelNext) =>
                hasNext && (
                  <button onClick={clickHandler} className="carouselArrowNext">
                    <img src={NextArrowGray} />
                  </button>
                )
              }>
              <img className="choosePlanImage" src={ChoosePlan} alt="Plan" />
              <img className="choosePlanImage" src={ChoosePlan} alt="Plan" />
              <img className="choosePlanImage" src={ChoosePlan} alt="Plan" />
              <img className="choosePlanImage" src={ChoosePlan} alt="Plan" />
              <img className="choosePlanImage" src={ChoosePlan} alt="Plan" />
            </Carousel>
          </div>
        </div>
        <div className="whyPlanContainerMobile">
          <div className="customContainer">
            <div className="whyPlanTitleMobile extraBoldFont">¿Por qué suscribirme a un plan?</div>
            <div className="whyPlanTextMobile">Te será de mucha ayuda para organizarte ya que podrás visualizar: Todos los detalles de tu plan La cantidad de horas que utilizaste y cuántas te quedan Un calendario donde ver tus reservas y realizar nuevas</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Planes;
