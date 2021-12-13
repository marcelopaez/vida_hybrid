import React from 'react';
import NavbarLogin from '../../components/NavbarLogin';
import NavbarLoginMobile from '../../components/NavbarLoginMobile';
import BackgroundSVGReservas1 from '../../images/SVGs/BackgroundSVGReservas1.svg';
import BackgroundSVGReservas2 from '../../images/SVGs/BackgroundSVGReservas2.svg';

const Reservas = () => {
  return (
    <main className="reservationsGeneralContainer">
      <div className="navbarLarger">
        <NavbarLogin />
      </div>

      <div className="navbarMobile">
        <NavbarLoginMobile />
      </div>

      <div className="customContainer">
        <img src={BackgroundSVGReservas1} alt="Vida" className="backgroundSVGReservas1" />
        <p className="reservationTitle boldFont">Accedé a nuestras salas de reunión, oficinas o creá tus eventos</p>
        <p className="reservationSubtitle">Texto para las reservas</p>
        <div className="reservationContainer">
          <select className="mdb-select md-form reservationContainerTitle boldFont" id="reservationContainerTitle" defaultValue="Tipo de Consulta">
            <option value="">Sala de reunión</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <hr className="reservationHorizontalSeparator" />
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="d-flex">
                <div>
                  <p className="reservationUserTitle">Usuario registrado</p>
                  <div className="registerUserOptions">
                    <div className="custom-control custom-checkbox reservationUser">
                      <input type="checkbox" className="custom-control-input" id="registeredUser" />
                      <label className="custom-control-label" for="registeredUser">
                        Sí
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox reservationUser">
                      <input type="checkbox" className="custom-control-input" id="notRegisteredUser" />
                      <label className="custom-control-label" for="notRegisteredUser">
                        No
                      </label>
                    </div>
                  </div>
                  <p className="businessTitle">Empresa</p>
                  <div className="businessOptions">
                    <div className="custom-control custom-checkbox businessOption">
                      <input type="checkbox" className="custom-control-input" id="isBusiness" />
                      <label className="custom-control-label" for="isBusiness">
                        Sí
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox businessOption">
                      <input type="checkbox" className="custom-control-input" id="notBusiness" />
                      <label className="custom-control-label" for="notBusiness">
                        No
                      </label>
                    </div>
                  </div>
                  <input type="text" className="businessName" placeholder="Nombre y apellido / Empresa" />
                  <input type="text" className="businessEmail" placeholder="E-mail" />
                  <input type="text" className="businessPhone" placeholder="Celular" />
                  <div className="md-form input-with-pre-icon">
                    <i className="fas fa-calendar-alt input-prefix" id="loginDateIcon"></i>
                    <input type="text" id="reservationDate" className="form-control reservationDate" />
                    <label htmlFor="reservationDate">Fecha</label>
                  </div>
                  <div className="md-form input-with-pre-icon">
                    <i className="fas fa-filter input-prefix login" id="loginRoomIcon"></i>
                    <input type="text" id="reservationRoomType" className="form-control reservationRoomType" />
                    <label htmlFor="reservationRoomType">Tipo de Sala</label>
                  </div>
                  <div className="md-form input-with-pre-icon">
                    <i className="fas fa-clock input-prefix login" id="loginTimeIcon"></i>
                    <input type="text" id="reservationTime" className="form-control reservationTime" />
                    <label htmlFor="reservationTime">Horario</label>
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
              <input type="text" className="reservationCouponCode" placeholder="Ingresá tu código" />
              <p className="reservationPaymentMethodTitle">Método de pago</p>
              <div className="custom-control custom-checkbox reservationPaymentMethodOption">
                <input type="checkbox" className="custom-control-input" id="paymentMethodMercadoPago" />
                <label className="custom-control-label" for="paymentMethodMercadoPago">
                  Mercado Pago
                </label>
              </div>
              <div className="custom-control custom-checkbox reservationPaymentMethodOption">
                <input type="checkbox" className="custom-control-input" id="paymentMethodVida" />
                <label className="custom-control-label" for="paymentMethodVida">
                  Coordinar pago con Vida Cowork
                </label>
              </div>
              <button className="reservationAcceptButton">Reservar</button>
            </div>
          </div>
        </div>
        <div className="reservationFooter">
          <p className="reservationFooterTitle">Suscribite a un plan para facilitar el acceso a todas nuestras salas!</p>
          <p className="reservationFooterSubtitle">Te será de mucha ayuda para organizarte ya que podrás visualizar:</p>
          <p className="reservationFooterSubtitle">Todos los detalles de tu plan</p>
          <p className="reservationFooterSubtitle">La cantidad de horas que utilizaste y cuántas te quedan</p>
          <p className="reservationFooterSubtitle">Un calendario donde ver tus reservas y realizar nuevas</p>
        </div>
        <img src={BackgroundSVGReservas2} alt="Vida" className="backgroundSVGReservas2" />
      </div>
    </main>
  );
};

export default Reservas;
