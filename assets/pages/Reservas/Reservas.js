import React, { useState, useEffect, useRef } from 'react';
import NavbarLogin from '../../components/NavbarLogin';
import NavbarLoginMobile from '../../components/NavbarLoginMobile';
import BackgroundSVGReservas1 from '../../images/SVGs/BackgroundSVGReservas1.svg';
import BackgroundSVGReservas2 from '../../images/SVGs/BackgroundSVGReservas2.svg';

const Reservas = ({ hideAlternativeFooter }) => {
  useEffect(() => {
    hideAlternativeFooter();
    window.scroll(0, 0);
  }, []);

  const [firstStepReservation, setFirstStepReservation] = useState(true);
  const [secondStepReservation, setSecondStepReservation] = useState(false);
  const [thirdStepReservation, setThirdStepReservation] = useState(false);
  const [finishReservation, setFinishReservation] = useState(false);

  const registeredUser = useRef(null);
  const unregisteredUser = useRef(null);
  const enterprise = useRef(null);
  const notEnterprise = useRef(null);
  const reservationMercadoPagoMethod = useRef(null);
  const reservationVidaMethod = useRef(null);
  const reservationName = useRef(null);
  const reservationEmail = useRef(null);
  const reservationPhone = useRef(null);
  const reservationDate = useRef(null);
  const reservationRoomType = useRef(null);
  const reservationTime = useRef(null);
  const reservationCoupon = useRef(null);
  const registeredUserMobile = useRef(null);
  const unregisteredUserMobile = useRef(null);
  const enterpriseMobile = useRef(null);
  const notEnterpriseMobile = useRef(null);
  const reservationMercadoPagoMethodMobile = useRef(null);
  const reservationVidaMethodMobile = useRef(null);
  const reservationNameMobile = useRef(null);
  const reservationEmailMobile = useRef(null);
  const reservationPhoneMobile = useRef(null);
  const reservationDateMobile = useRef(null);
  const reservationRoomTypeMobile = useRef(null);
  const reservationTimeMobile = useRef(null);
  const reservationCouponMobile = useRef(null);

  return (
    <main className="reservationsGeneralContainer">
      <div className="navbarLarger">
        <NavbarLogin />
      </div>

      <div className="navbarMobile">
        <NavbarLoginMobile />
      </div>

      <div className="reservasContainerLarger">
        <div className="customContainer">
          <img src={BackgroundSVGReservas1} alt="Vida" className="backgroundSVGReservas1" />
          <p className="reservationTitle boldFont">Accedé a nuestras salas de reunión, oficinas o creá tus eventos</p>
          <p className="reservationSubtitle">Texto para las reservas</p>
          <div className="reservationContainer">
            <select className="mdb-select md-form reservationContainerTitle boldFont" id="reservationContainerTitle" defaultValue="Tipo de Consulta">
              <option value="Sala de reunión">Sala de reunión</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <hr className="reservationHorizontalSeparator" />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="d-flex">
                  <div style={{ paddingLeft: '100px' }}>
                    <p className="reservationUserTitle">Usuario registrado</p>
                    <div className="registerUserOptions">
                      <div className="form-check reservationUser">
                        <input type="radio" className="form-check-input" id="registeredUser" name="registeredUser" ref={registeredUser} />
                        <label className="form-check-label lightFont" for="registeredUser">
                          Sí
                        </label>
                      </div>
                      <div className="form-check reservationUser">
                        <input type="radio" className="form-check-input" id="unregistereduser" name="registeredUser" ref={unregisteredUser} />
                        <label className="form-check-label lightFont" for="unregistereduser">
                          No
                        </label>
                      </div>
                    </div>
                    <p className="businessTitle">Empresa</p>
                    <div className="businessOptions">
                      <div className="form-check businessOption">
                        <input type="radio" className="form-check-input" id="enterprise" name="enterprise" ref={enterprise} />
                        <label className="form-check-label lightFont" for="enterprise">
                          Sí
                        </label>
                      </div>
                      <div className="form-check businessOption">
                        <input type="radio" className="form-check-input" id="notEnterprise" name="enterprise" ref={notEnterprise} />
                        <label className="form-check-label lightFont" for="notEnterprise">
                          No
                        </label>
                      </div>
                    </div>
                    <input type="text" className="businessName" placeholder="Nombre y apellido / Empresa" ref={reservationName} />
                    <input type="text" className="businessEmail" placeholder="E-mail" ref={reservationEmail} />
                    <input type="text" className="businessPhone" placeholder="Celular" ref={reservationPhone} />
                    <div className="md-form input-with-pre-icon">
                      <i className="fas fa-calendar-alt input-prefix" id="loginDateIcon"></i>
                      <input type="text" id="reservationDate" className="form-control reservationDate" ref={reservationDate} />
                      <label htmlhtmlFor="reservationDate">Fecha</label>
                    </div>
                    <div className="md-form input-with-pre-icon">
                      <i className="fas fa-filter input-prefix login" id="loginRoomIcon"></i>
                      <input type="text" id="reservationRoomType" className="form-control reservationRoomType" ref={reservationRoomType} />
                      <label htmlhtmlFor="reservationRoomType">Tipo de Sala</label>
                    </div>
                    <div className="md-form input-with-pre-icon">
                      <i className="fas fa-clock input-prefix login" id="loginTimeIcon"></i>
                      <input type="text" id="reservationTime" className="form-control reservationTime" ref={reservationTime} />
                      <label htmlhtmlFor="reservationTime">Horario</label>
                    </div>
                  </div>
                  <div>
                    <div className="reservationVerticalSeparator"></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <p className="reservationTotalTitle extraBoldFont">Total sin descuento</p>
                <p className="reservationTotalNumber">$2400</p>
                <p className="reservationCouponQuestion">¿Tenés un cupón de descuento?</p>
                <input type="text" className="reservationCouponCode" placeholder="Ingresá tu código" ref={reservationCoupon} />
                <p className="reservationPaymentMethodTitle">Método de pago</p>
                <div className="form-check reservationPaymentMethodOption">
                  <input type="radio" className="form-check-input" id="reservationMercadoPagoMethod" name="reservationPaymentMethod" ref={reservationMercadoPagoMethod} />
                  <label className="form-check-label lightFont" for="reservationMercadoPagoMethod">
                    Mercado Pago
                  </label>
                </div>
                <div className="form-check reservationPaymentMethodOption">
                  <input type="radio" className="form-check-input" id="reservationVidaMethod" name="reservationPaymentMethod" ref={reservationVidaMethod} />
                  <label className="form-check-label lightFont" for="reservationVidaMethod">
                    Coordinar pago con Vida Cowork
                  </label>
                </div>
                <button className="reservationAcceptButton boldFont">Reservar</button>
              </div>
            </div>
          </div>
          <div className="reservationFooter">
            <p className="reservationFooterTitle boldFont">Suscribite a un plan para facilitar el acceso a todas nuestras salas!</p>
            <p className="reservationFooterSubtitle">Te será de mucha ayuda para organizarte ya que podrás visualizar:</p>
            <p className="reservationFooterSubtitle">Todos los detalles de tu plan</p>
            <p className="reservationFooterSubtitle">La cantidad de horas que utilizaste y cuántas te quedan</p>
            <p className="reservationFooterSubtitle">Un calendario donde ver tus reservas y realizar nuevas</p>
          </div>
          <img src={BackgroundSVGReservas2} alt="Vida" className="backgroundSVGReservas2" />
        </div>
      </div>

      <div className="reservasContainerMobile">
        <img src={BackgroundSVGReservas1} alt="Vida" className="backgroundSVGReservas1" />
        <div className="customContainer">
          <p className="reservationTitle boldFont">Accedé a nuestras salas de reunión, oficinas o creá tus eventos</p>
          <p className="reservationSubtitle">Texto para las reservas</p>
        </div>
        <div className="reservationContainerMobile">
          {firstStepReservation && (
            <>
              <select className="mdb-select md-form reservationContainerTitle boldFont" id="reservationContainerTitle" defaultValue="Tipo de Consulta" ref={reservationRoomTypeMobile}>
                <option value="Sala de reunión">Sala de reunión</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <hr className="reservationHorizontalSeparator" />
              <div className="d-flex">
                <div>
                  <p className="reservationUserTitle">Usuario registrado</p>
                  <div className="registerUserOptions">
                    <div className="form-check reservationUser">
                      <input type="radio" className="form-check-input" id="registeredUserMobile" name="registeredUserMobile" ref={registeredUserMobile} />
                      <label className="form-check-label lightFont" for="registeredUserMobile">
                        Sí
                      </label>
                    </div>
                    <div className="form-check reservationUser">
                      <input type="radio" className="form-check-input" id="unregistereduserMobile" name="registeredUserMobile" ref={unregisteredUserMobile} />
                      <label className="form-check-label lightFont" for="unregistereduserMobile">
                        No
                      </label>
                    </div>
                  </div>
                  <p className="businessTitle">Empresa</p>
                  <div className="businessOptions">
                    <div className="form-check businessOption">
                      <input type="radio" className="form-check-input" id="enterpriseMobile" name="enterpriseMobile" ref={enterpriseMobile} />
                      <label className="form-check-label lightFont" for="enterpriseMobile">
                        Sí
                      </label>
                    </div>
                    <div className="form-check businessOption">
                      <input type="radio" className="form-check-input" id="notEnterpriseMobile" name="enterpriseMobile" ref={notEnterpriseMobile} />
                      <label className="form-check-label lightFont" for="notEnterpriseMobile">
                        No
                      </label>
                    </div>
                  </div>
                  <input type="text" className="businessName w-100" placeholder="Nombre y apellido / Empresa" ref={reservationNameMobile} />
                  <input type="text" className="businessEmail w-100" placeholder="E-mail" ref={reservationEmailMobile} />
                  <input type="text" className="businessPhone w-100" placeholder="Celular" ref={reservationPhoneMobile} />
                  <button
                    className="reservationNextButton boldFont"
                    onClick={() => {
                      window.scroll(0, 0);
                      setFirstStepReservation(false);
                      setSecondStepReservation(true);
                    }}>
                    Siguiente
                  </button>
                </div>
              </div>
            </>
          )}

          {secondStepReservation && (
            <>
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-calendar-alt input-prefix" id="loginDateIcon"></i>
                <input type="text" id="reservationDate" className="form-control reservationDate" ref={reservationDateMobile} />
                <label htmlhtmlFor="reservationDate">Fecha</label>
              </div>
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-filter input-prefix login" id="loginRoomIcon"></i>
                <input type="text" id="reservationRoomType" className="form-control reservationRoomType" ref={reservationRoomTypeMobile} />
                <label htmlhtmlFor="reservationRoomType">Tipo de Sala</label>
              </div>
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-clock input-prefix login" id="loginTimeIcon"></i>
                <input type="text" id="reservationTime" className="form-control reservationTime" ref={reservationTimeMobile} />
                <label htmlhtmlFor="reservationTime">Horario</label>
              </div>
              <button
                className="reservationNextButton boldFont"
                onClick={() => {
                  window.scroll(0, 0);
                  setSecondStepReservation(false);
                  setThirdStepReservation(true);
                }}>
                Siguiente
              </button>
            </>
          )}

          {thirdStepReservation && (
            <>
              <p className="reservationTotalTitle extraBoldFont">Total sin descuento</p>
              <p className="reservationTotalNumber">$2400</p>
              <p className="reservationCouponQuestion">¿Tenés un cupón de descuento?</p>
              <input type="text" className="reservationCouponCode" placeholder="Ingresá tu código" ref={reservationCouponMobile} />
              <p className="reservationPaymentMethodTitle">Método de pago</p>
              <div className="form-check reservationPaymentMethodOption">
                <input type="radio" className="form-check-input" id="reservationMercadoPagoMethodMobile" name="reservationPaymentMethodMobile" ref={reservationMercadoPagoMethodMobile} />
                <label className="form-check-label lightFont" for="reservationMercadoPagoMethodMobile">
                  Mercado Pago
                </label>
              </div>
              <div className="form-check reservationPaymentMethodOption">
                <input type="radio" className="form-check-input" id="reservationVidaMethodMobile" name="reservationPaymentMethodMobile" ref={reservationVidaMethodMobile} />
                <label className="form-check-label lightFont" for="reservationVidaMethodMobile">
                  Coordinar pago con Vida Cowork
                </label>
              </div>
              <button
                className="reservationAcceptButton boldFont"
                onClick={() => {
                  window.scroll(0, 0);
                  setThirdStepReservation(false);
                  setFinishReservation(true);
                }}>
                Reservar
              </button>
            </>
          )}

          {finishReservation && (
            <>
              <p>Gracias</p>
            </>
          )}
        </div>
        <img src={BackgroundSVGReservas2} alt="Vida" className="backgroundSVGReservas2" />
      </div>
    </main>
  );
};

export default Reservas;
