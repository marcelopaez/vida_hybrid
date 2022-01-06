import React, { useEffect, useState, useRef } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';

const GeneralUsuario = () => {
  useEffect(() => window.scroll(0, 0), []);

  const [showInfo1, setShowInfo1] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  const [sharedSpace, setSharedSpace] = useState(false);
  const [meetingsRoom, setMeetingsRoom] = useState(false);
  const [finalReservationStep, setFinalReservationStep] = useState(false);

  const reservationHourMorning = useRef(null);
  const reservationHourAfternoon = useRef(null);
  const reservationHourQuantity = useRef(null);
  const reservationAvailableRooms1 = useRef(null);
  const reservationAvailableRooms2 = useRef(null);
  const reservationCode = useRef(null);
  const reservationMercadoPagoMethod = useRef(null);
  const reservationVidaMethod = useRef(null);

  useEffect(() => {
    location.hash = '#sharedSpaceMobile';
  }, [sharedSpace]);

  useEffect(() => {
    location.hash = '#meetingsRoomMobile';
  }, [meetingsRoom]);

  return (
    <div className="row marginNavbar generalContent">
      <div className="navbarAdminLarger">
        <NavbarAdmin />
      </div>
      <div className="navbarAdminMobile">
        <NavbarAdminMobile />
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 sideMenu" style={{ height: '1024px' }}>
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 bg-white px-3" style={{ height: '1024px' }}>
        <div className="generalAdminLarger">
          <div className={`${sharedSpace || meetingsRoom || finalReservationStep ? 'generalContentAdminBodyBlur' : 'generalContentAdminBody'}`}>
            <p className="generalAdminTitle extraBoldFont">No te quedes sin lugar, reservá</p>
            <div className="blocksContainerGeneralAdmin">
              <div className="blockGeneralUsuario">
                <div className="blockGeneralUsuarioTitleContainer1">
                  <p className="blockGeneralUsuarioTitle extraBoldFont">Espacio compartido</p>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="blockGeneralUsuarioInfoHover" onMouseEnter={() => setShowInfo1(true)} onMouseLeave={() => setShowInfo1(false)}>
                    <path
                      d="M16 0.25C7.30234 0.25 0.25 7.30234 0.25 16C0.25 24.6977 7.30234 31.75 16 31.75C24.6977 31.75 31.75 24.6977 31.75 16C31.75 7.30234 24.6977 0.25 16 0.25ZM17.125 23.5938C17.125 23.7484 16.9984 23.875 16.8438 23.875H15.1562C15.0016 23.875 14.875 23.7484 14.875 23.5938V14.0312C14.875 13.8766 15.0016 13.75 15.1562 13.75H16.8438C16.9984 13.75 17.125 13.8766 17.125 14.0312V23.5938ZM16 11.5C15.5584 11.491 15.138 11.3092 14.8288 10.9937C14.5197 10.6783 14.3466 10.2542 14.3466 9.8125C14.3466 9.37082 14.5197 8.94674 14.8288 8.63125C15.138 8.31576 15.5584 8.13401 16 8.125C16.4416 8.13401 16.8621 8.31576 17.1712 8.63125C17.4803 8.94674 17.6534 9.37082 17.6534 9.8125C17.6534 10.2542 17.4803 10.6783 17.1712 10.9937C16.8621 11.3092 16.4416 11.491 16 11.5Z"
                      fill="#004B2A"
                    />
                  </svg>
                  {showInfo1 && (
                    <div className="blockGeneralUsuarioInfoHoverContainer">
                      <p className="blockGeneralUsuarioInfoHoverText">Los creditos Vida son los que te daran acceso a dias en Vida Cowork. Un credito = jornada part timeSi queres asistir un dia entero, se utilizaran 2 creditos</p>
                    </div>
                  )}
                </div>
                <div className="blockGeneralUsuarioSeparator"></div>
                <p className="blockGeneralUsuarioContent1">Créditos Vida disponibles</p>
                <p className="blockGeneralUsuarioContent2 extraBoldFont">5</p>
                <button
                  className="blockGeneralUsuarioButton"
                  onClick={() => {
                    window.scroll(0, 0);
                    setSharedSpace(true);
                  }}>
                  Reservá
                </button>
              </div>
              <div className="blockGeneralUsuario">
                <div className="blockGeneralUsuarioTitleContainer2">
                  <p className="blockGeneralUsuarioTitle extraBoldFont">Salas de reunión</p>
                  <svg svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="blockGeneralUsuarioInfoHover" onMouseEnter={() => setShowInfo2(true)} onMouseLeave={() => setShowInfo2(false)}>
                    <path
                      d="M16 0.25C7.30234 0.25 0.25 7.30234 0.25 16C0.25 24.6977 7.30234 31.75 16 31.75C24.6977 31.75 31.75 24.6977 31.75 16C31.75 7.30234 24.6977 0.25 16 0.25ZM17.125 23.5938C17.125 23.7484 16.9984 23.875 16.8438 23.875H15.1562C15.0016 23.875 14.875 23.7484 14.875 23.5938V14.0312C14.875 13.8766 15.0016 13.75 15.1562 13.75H16.8438C16.9984 13.75 17.125 13.8766 17.125 14.0312V23.5938ZM16 11.5C15.5584 11.491 15.138 11.3092 14.8288 10.9937C14.5197 10.6783 14.3466 10.2542 14.3466 9.8125C14.3466 9.37082 14.5197 8.94674 14.8288 8.63125C15.138 8.31576 15.5584 8.13401 16 8.125C16.4416 8.13401 16.8621 8.31576 17.1712 8.63125C17.4803 8.94674 17.6534 9.37082 17.6534 9.8125C17.6534 10.2542 17.4803 10.6783 17.1712 10.9937C16.8621 11.3092 16.4416 11.491 16 11.5Z"
                      fill="#004B2A"
                    />
                  </svg>
                  {showInfo2 && (
                    <div className="blockGeneralUsuarioInfoHoverContainer">
                      <p className="blockGeneralUsuarioInfoHoverText">Los creditos Vida son los que te daran acceso a dias en Vida Cowork. Un credito = jornada part timeSi queres asistir un dia entero, se utilizaran 2 creditos 2</p>
                    </div>
                  )}
                </div>
                <div className="blockGeneralUsuarioSeparator"></div>
                <p className="blockGeneralUsuarioContent1">Horas disponibles</p>
                <p className="blockGeneralUsuarioContent2 extraBoldFont">3</p>
                <button
                  className="blockGeneralUsuarioButton"
                  onClick={() => {
                    window.scroll(0, 0);
                    setMeetingsRoom(true);
                  }}>
                  Reservá
                </button>
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

          {sharedSpace && (
            <div className="generalAdminSharedPlaceModal">
              <div className="generalAdminSharedPlaceModalHeader">
                <p className="generalAdminSharedPlaceModalHeaderTitle extraBoldFont">RESERVÁ YA</p>
                <p className="generalAdminSharedPlaceModalHeaderX" onClick={() => setSharedSpace(false)}>
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                  </svg>
                </p>
                <hr className="m-0" />
              </div>
              <div className="generalAdminSharedPlaceModalBody">
                <div className="generalAdminSharedPlaceModalBodyLeftSide">
                  <select className="mdb-select md-form generalAdminSharedPlaceModalBodyLeftSideTitle extraBoldFont" defaultValue="Espacio compartido">
                    <option value="Espacio compartido">Espacio compartido</option>
                    <option value="Espacio compartido">Espacio compartido</option>
                  </select>
                  <p className="generalAdminSharedPlaceModalLeftSideAvailability boldFont">Hay disponibilidad de lugar</p>
                  <p className="generalAdminSharedPlaceModalLeftSideHourTitle">Elegí un horario</p>
                  <div className="form-check sharedPlaceHourOption">
                    <input type="radio" className="form-check-input" id="morningSharedPlace" name="reservationHour" ref={reservationHourMorning} />
                    <label className="form-check-label lightFont" htmlFor="morningSharedPlace">
                      Por la mañana (00 a 00)
                    </label>
                  </div>
                  <div className="form-check sharedPlaceHourOption">
                    <input type="radio" className="form-check-input" id="afternoonSharedPlace" name="reservationHour" ref={reservationHourAfternoon} />
                    <label className="form-check-label lightFont" htmlFor="afternoonSharedPlace">
                      Por la tarde (00 a 00)
                    </label>
                  </div>
                </div>
                <div className="generalAdminSharedPlaceModalVerticalSeparator"></div>
                <div className="generalAdminSharedPlaceModalBodyRightSide">
                  <p className="generalAdminSharedPlaceModalBodyRightSideTitle boldFont">Subtotal</p>
                  <p className="generalAdminSharedPlaceModalBodyRightSidePrice extraBoldFont">$3400</p>
                </div>
              </div>
              <button
                className="generalAdminSharedPlaceModalBodyButton"
                onClick={() => {
                  setSharedSpace(false);
                  setFinalReservationStep(true);
                }}>
                Reservar
              </button>
              <div className="generalAdminModalStepsContainer">
                <div className="fullStepCircle"></div>
                <div className="emptyStepCircle"></div>
              </div>
            </div>
          )}

          {meetingsRoom && (
            <div className="generalAdminMeetingsRoomModal">
              <div className="generalAdminMeetingsRoomModalHeader">
                <p className="generalAdminMeetingsRoomModalHeaderTitle extraBoldFont">RESERVÁ YA</p>
                <p className="generalAdminMeetingsRoomModalHeaderX" onClick={() => setMeetingsRoom(false)}>
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                  </svg>
                </p>
                <hr className="m-0" />
              </div>
              <div className="generalAdminMeetingsRoomModalBody">
                <div className="generalAdminMeetingsRoomModalBodyLeftSide">
                  <select className="mdb-select md-form generalAdminMeetingsRoomModalBodyLeftSideTitle extraBoldFont" defaultValue="Espacio compartido">
                    <option value="Espacio compartido">Espacio compartido</option>
                    <option value="Espacio compartido">Espacio compartido</option>
                  </select>
                  <p className="generalAdminMeetingsRoomModalLeftSideAvailability boldFont">Hay disponibilidad de lugar</p>
                  <p className="generalAdminMeetingsRoomModalLeftSideHourTitle">Elegí un horario</p>
                  <div className="form-check sharedPlaceHourOption">
                    <input type="radio" className="form-check-input" id="morningSharedPlace" name="reservationHour" ref={reservationHourMorning} />
                    <label className="form-check-label lightFont" htmlFor="morningSharedPlace">
                      Por la mañana (00 a 00)
                    </label>
                  </div>
                  <div className="form-check sharedPlaceHourOption">
                    <input type="radio" className="form-check-input" id="afternoonSharedPlace" name="reservationHour" ref={reservationHourAfternoon} />
                    <label className="form-check-label lightFont" htmlFor="afternoonSharedPlace">
                      Por la tarde (00 a 00)
                    </label>
                  </div>
                  <p className="generalAdminMeetingsRoomModalLeftSideTimeTitle">Cantidad de Hs</p>
                  <select className="mdb-select md-form generalAdminMeetingsRoomModalLeftSideTimeOptions extraBoldFont" defaultValue="1 Hs" ref={reservationHourQuantity}>
                    <option value="1 Hs">1 Hs</option>
                    <option value="2 Hs">2 Hs</option>
                    <option value="3 Hs">3 Hs</option>
                    <option value="4 Hs">4 Hs</option>
                  </select>
                </div>
                <div className="generalAdminMeetingsRoomModalVerticalSeparator"></div>
                <div className="generalAdminMeetingsRoomModalBodyRightSide">
                  <p className="generalAdminMeetingsRoomModalBodyRightSideAvailableRoomsTitle">Salas disponibles</p>
                  <div className="form-check meetingsRoomAvailableRoomsOption">
                    <input type="radio" className="form-check-input" id="reservationAvailableRoom1" name="reservationAvailableRooms" ref={reservationAvailableRooms1} />
                    <label className="form-check-label lightFont" htmlFor="reservationAvailableRoom1">
                      Río (5 personas)
                    </label>
                  </div>
                  <div className="form-check meetingsRoomAvailableRoomsOption">
                    <input type="radio" className="form-check-input" id="reservationAvailableRoom2" name="reservationAvailableRooms" ref={reservationAvailableRooms2} />
                    <label className="form-check-label lightFont" htmlFor="reservationAvailableRoom2">
                      Bosque (12 personas)
                    </label>
                  </div>
                  <p className="generalAdminMeetingsRoomModalBodyRightSideTitle boldFont">Subtotal</p>
                  <p className="generalAdminMeetingsRoomModalBodyRightSidePrice extraBoldFont">$3400</p>
                </div>
              </div>
              <button
                className="generalAdminMeetingsRoomModalBodyButton"
                onClick={() => {
                  setMeetingsRoom(false);
                  setFinalReservationStep(true);
                }}>
                Reservar
              </button>
              <div className="generalAdminModalStepsContainer">
                <div className="fullStepCircle"></div>
                <div className="emptyStepCircle"></div>
              </div>
            </div>
          )}

          {finalReservationStep && (
            <div className="generalAdminFinalReservationStepModal">
              <div className="generalAdminFinalReservationStepModalHeader">
                <p className="generalAdminFinalReservationStepModalHeaderTitle extraBoldFont">RESERVÁ YA</p>
                <p className="generalAdminFinalReservationStepModalHeaderX" onClick={() => setFinalReservationStep(false)}>
                  <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                  </svg>
                </p>
                <hr className="m-0" />
              </div>
              <div className="generalAdminFinalReservationStepModalBody">
                <div className="generalAdminFinalReservationStepModalBodyLeftSide">
                  <p className="generalAdminFinalReservationStepModalBodyLeftSideSubtotal boldFont">Subtotal</p>
                  <p className="generalAdminFinalReservationStepModalBodyLeftSidePrice extraBoldFont">$3400</p>
                  <p className="generalAdminFinalReservationStepModalBodyLeftSideCouponTitle">¿Tenés un cupón de descuento?</p>
                  <input type="text" id="coupon" className="form-control form-control-lg generalAdminFinalReservationStepModalBodyLeftSideCoupon" placeholder="Ingresá tu código" ref={reservationCode} />
                </div>
                <div className="generalAdminFinalReservationStepModalVerticalSeparator"></div>
                <div className="generalAdminFinalReservationStepModalBodyRightSide">
                  <p className="generalAdminFinalReservationStepModalBodyRightSideTitle">Método de pago</p>
                  <div className="form-check paymentMethodOption">
                    <input type="radio" className="form-check-input" id="reservationMercadoPagoMethod" name="reservationPaymentMethod" ref={reservationMercadoPagoMethod} />
                    <label className="form-check-label lightFont" htmlFor="reservationMercadoPagoMethod">
                      Mercado Pago
                    </label>
                  </div>
                  <div className="form-check paymentMethodOption">
                    <input type="radio" className="form-check-input" id="reservationVidaMethod" name="reservationPaymentMethod" ref={reservationVidaMethod} />
                    <label className="form-check-label lightFont" htmlFor="reservationVidaMethod">
                      Coordinar pago con Vida Cowork
                    </label>
                  </div>
                </div>
              </div>
              <button className="generalAdminFinalReservationStepModalBodyButton">Reservar</button>
              <div className="generalAdminModalStepsContainer">
                <div className="fullStepCircle"></div>
                <div className="fullStepCircle"></div>
              </div>
            </div>
          )}
        </div>
        <div className="generalAdminMobile">
          <div className="customContainer">
            <p className="generalAdminTitleMobile extraBoldFont">No te quedes sin lugar, reservá</p>
            <div className="blocksContainerGeneralAdmin">
              <div className="blockGeneralUsuario">
                <div className="blockGeneralUsuarioTitleContainer1">
                  <p className="blockGeneralUsuarioTitle extraBoldFont">Espacio compartido</p>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="blockGeneralUsuarioInfoHover" onMouseEnter={() => setShowInfo1(true)} onMouseLeave={() => setShowInfo1(false)}>
                    <path
                      d="M16 0.25C7.30234 0.25 0.25 7.30234 0.25 16C0.25 24.6977 7.30234 31.75 16 31.75C24.6977 31.75 31.75 24.6977 31.75 16C31.75 7.30234 24.6977 0.25 16 0.25ZM17.125 23.5938C17.125 23.7484 16.9984 23.875 16.8438 23.875H15.1562C15.0016 23.875 14.875 23.7484 14.875 23.5938V14.0312C14.875 13.8766 15.0016 13.75 15.1562 13.75H16.8438C16.9984 13.75 17.125 13.8766 17.125 14.0312V23.5938ZM16 11.5C15.5584 11.491 15.138 11.3092 14.8288 10.9937C14.5197 10.6783 14.3466 10.2542 14.3466 9.8125C14.3466 9.37082 14.5197 8.94674 14.8288 8.63125C15.138 8.31576 15.5584 8.13401 16 8.125C16.4416 8.13401 16.8621 8.31576 17.1712 8.63125C17.4803 8.94674 17.6534 9.37082 17.6534 9.8125C17.6534 10.2542 17.4803 10.6783 17.1712 10.9937C16.8621 11.3092 16.4416 11.491 16 11.5Z"
                      fill="#004B2A"
                    />
                  </svg>
                  {showInfo1 && (
                    <div className="blockGeneralUsuarioInfoHoverContainer">
                      <p className="blockGeneralUsuarioInfoHoverText">Los creditos Vida son los que te daran acceso a dias en Vida Cowork. Un credito = jornada part timeSi queres asistir un dia entero, se utilizaran 2 creditos</p>
                    </div>
                  )}
                </div>
                <div className="blockGeneralUsuarioSeparator"></div>
                <p className="blockGeneralUsuarioContent1">Créditos Vida disponibles</p>
                <p className="blockGeneralUsuarioContent2 extraBoldFont">5</p>
                <button
                  className="blockGeneralUsuarioButton"
                  onClick={() => {
                    window.scroll(0, 0);
                    setSharedSpace(true);
                  }}>
                  Reservá
                </button>
              </div>
              <div className="blockGeneralUsuario">
                <div className="blockGeneralUsuarioTitleContainer2">
                  <p className="blockGeneralUsuarioTitle extraBoldFont">Salas de reunión</p>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="blockGeneralUsuarioInfoHover" onMouseEnter={() => setShowInfo2(true)} onMouseLeave={() => setShowInfo2(false)}>
                    <path
                      d="M16 0.25C7.30234 0.25 0.25 7.30234 0.25 16C0.25 24.6977 7.30234 31.75 16 31.75C24.6977 31.75 31.75 24.6977 31.75 16C31.75 7.30234 24.6977 0.25 16 0.25ZM17.125 23.5938C17.125 23.7484 16.9984 23.875 16.8438 23.875H15.1562C15.0016 23.875 14.875 23.7484 14.875 23.5938V14.0312C14.875 13.8766 15.0016 13.75 15.1562 13.75H16.8438C16.9984 13.75 17.125 13.8766 17.125 14.0312V23.5938ZM16 11.5C15.5584 11.491 15.138 11.3092 14.8288 10.9937C14.5197 10.6783 14.3466 10.2542 14.3466 9.8125C14.3466 9.37082 14.5197 8.94674 14.8288 8.63125C15.138 8.31576 15.5584 8.13401 16 8.125C16.4416 8.13401 16.8621 8.31576 17.1712 8.63125C17.4803 8.94674 17.6534 9.37082 17.6534 9.8125C17.6534 10.2542 17.4803 10.6783 17.1712 10.9937C16.8621 11.3092 16.4416 11.491 16 11.5Z"
                      fill="#004B2A"
                    />
                  </svg>
                  {showInfo2 && (
                    <div className="blockGeneralUsuarioInfoHoverContainer">
                      <p className="blockGeneralUsuarioInfoHoverText">Los creditos Vida son los que te daran acceso a dias en Vida Cowork. Un credito = jornada part timeSi queres asistir un dia entero, se utilizaran 2 creditos 2</p>
                    </div>
                  )}
                </div>
                <div className="blockGeneralUsuarioSeparator"></div>
                <p className="blockGeneralUsuarioContent1">Horas disponibles</p>
                <p className="blockGeneralUsuarioContent2 extraBoldFont">3</p>
                <button
                  className="blockGeneralUsuarioButton"
                  onClick={() => {
                    window.scroll(0, 0);
                    setMeetingsRoom(true);
                  }}>
                  Reservá
                </button>
              </div>
            </div>
            {sharedSpace && (
              <div className="generalAdminSharedPlaceModal" id="sharedSpaceMobile">
                <div className="generalAdminSharedPlaceModalHeader">
                  <p className="generalAdminSharedPlaceModalHeaderTitle extraBoldFont">RESERVÁ YA</p>
                  <p className="generalAdminSharedPlaceModalHeaderX" onClick={() => setSharedSpace(false)}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                    </svg>
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="generalAdminSharedPlaceModalBody">
                  <div className="generalAdminSharedPlaceModalBodyLeftSide">
                    <select className="mdb-select md-form generalAdminSharedPlaceModalBodyLeftSideTitle extraBoldFont" defaultValue="Espacio compartido">
                      <option value="Espacio compartido">Espacio compartido</option>
                      <option value="Espacio compartido">Espacio compartido</option>
                    </select>
                    <p className="generalAdminSharedPlaceModalLeftSideAvailability boldFont">Hay disponibilidad de lugar</p>
                    <p className="generalAdminSharedPlaceModalLeftSideHourTitle">Elegí un horario</p>
                    <div className="form-check sharedPlaceHourOption">
                      <input type="radio" className="form-check-input" id="morningSharedPlace" name="reservationHour" ref={reservationHourMorning} />
                      <label className="form-check-label lightFont" htmlFor="morningSharedPlace">
                        Por la mañana (00 a 00)
                      </label>
                    </div>
                    <div className="form-check sharedPlaceHourOption">
                      <input type="radio" className="form-check-input" id="afternoonSharedPlace" name="reservationHour" ref={reservationHourAfternoon} />
                      <label className="form-check-label lightFont" htmlFor="afternoonSharedPlace">
                        Por la tarde (00 a 00)
                      </label>
                    </div>
                  </div>
                  <div className="generalAdminSharedPlaceModalVerticalSeparator"></div>
                  <div className="generalAdminSharedPlaceModalBodyRightSide">
                    <p className="generalAdminSharedPlaceModalBodyRightSideTitle boldFont">Subtotal</p>
                    <p className="generalAdminSharedPlaceModalBodyRightSidePrice extraBoldFont">$3400</p>
                  </div>
                </div>
                <button
                  className="generalAdminSharedPlaceModalBodyButton"
                  onClick={() => {
                    setSharedSpace(false);
                    setFinalReservationStep(true);
                  }}>
                  Reservar
                </button>
                <div className="generalAdminModalStepsContainer">
                  <div className="fullStepCircle"></div>
                  <div className="emptyStepCircle"></div>
                </div>
              </div>
            )}

            {meetingsRoom && (
              <div className="generalAdminMeetingsRoomModal" id="meetingsRoomMobile">
                <div className="generalAdminMeetingsRoomModalHeader">
                  <p className="generalAdminMeetingsRoomModalHeaderTitle extraBoldFont">RESERVÁ YA</p>
                  <p className="generalAdminMeetingsRoomModalHeaderX" onClick={() => setMeetingsRoom(false)}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                    </svg>
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="generalAdminMeetingsRoomModalBody">
                  <div className="generalAdminMeetingsRoomModalBodyLeftSide">
                    <select className="mdb-select md-form generalAdminMeetingsRoomModalBodyLeftSideTitle extraBoldFont" defaultValue="Espacio compartido">
                      <option value="Espacio compartido">Espacio compartido</option>
                      <option value="Espacio compartido">Espacio compartido</option>
                    </select>
                    <p className="generalAdminMeetingsRoomModalLeftSideAvailability boldFont">Hay disponibilidad de lugar</p>
                    <p className="generalAdminMeetingsRoomModalLeftSideHourTitle">Elegí un horario</p>
                    <div className="form-check sharedPlaceHourOption">
                      <input type="radio" className="form-check-input" id="morningSharedPlace" name="reservationHour" ref={reservationHourMorning} />
                      <label className="form-check-label lightFont" htmlFor="morningSharedPlace">
                        Por la mañana (00 a 00)
                      </label>
                    </div>
                    <div className="form-check sharedPlaceHourOption">
                      <input type="radio" className="form-check-input" id="afternoonSharedPlace" name="reservationHour" ref={reservationHourAfternoon} />
                      <label className="form-check-label lightFont" htmlFor="afternoonSharedPlace">
                        Por la tarde (00 a 00)
                      </label>
                    </div>
                    <p className="generalAdminMeetingsRoomModalLeftSideTimeTitle">Cantidad de Hs</p>
                    <select className="mdb-select md-form generalAdminMeetingsRoomModalLeftSideTimeOptions extraBoldFont" defaultValue="1 Hs" ref={reservationHourQuantity}>
                      <option value="1 Hs">1 Hs</option>
                      <option value="2 Hs">2 Hs</option>
                      <option value="3 Hs">3 Hs</option>
                      <option value="4 Hs">4 Hs</option>
                    </select>
                  </div>
                  <div className="generalAdminMeetingsRoomModalVerticalSeparator"></div>
                  <div className="generalAdminMeetingsRoomModalBodyRightSide">
                    <p className="generalAdminMeetingsRoomModalBodyRightSideAvailableRoomsTitle">Salas disponibles</p>
                    <div className="form-check meetingsRoomAvailableRoomsOption">
                      <input type="radio" className="form-check-input" id="reservationAvailableRoom1" name="reservationAvailableRooms" ref={reservationAvailableRooms1} />
                      <label className="form-check-label lightFont" htmlFor="reservationAvailableRoom1">
                        Río (5 personas)
                      </label>
                    </div>
                    <div className="form-check meetingsRoomAvailableRoomsOption">
                      <input type="radio" className="form-check-input" id="reservationAvailableRoom2" name="reservationAvailableRooms" ref={reservationAvailableRooms2} />
                      <label className="form-check-label lightFont" htmlFor="reservationAvailableRoom2">
                        Bosque (12 personas)
                      </label>
                    </div>
                    <p className="generalAdminMeetingsRoomModalBodyRightSideTitle boldFont">Subtotal</p>
                    <p className="generalAdminMeetingsRoomModalBodyRightSidePrice extraBoldFont">$3400</p>
                  </div>
                </div>
                <button
                  className="generalAdminMeetingsRoomModalBodyButton"
                  onClick={() => {
                    setMeetingsRoom(false);
                    setFinalReservationStep(true);
                  }}>
                  Reservar
                </button>
                <div className="generalAdminModalStepsContainer">
                  <div className="fullStepCircle"></div>
                  <div className="emptyStepCircle"></div>
                </div>
              </div>
            )}

            {finalReservationStep && (
              <div className="generalAdminFinalReservationStepModal">
                <div className="generalAdminFinalReservationStepModalHeader">
                  <p className="generalAdminFinalReservationStepModalHeaderTitle extraBoldFont">RESERVÁ YA</p>
                  <p className="generalAdminFinalReservationStepModalHeaderX" onClick={() => setFinalReservationStep(false)}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                    </svg>
                  </p>
                  <hr className="m-0" />
                </div>
                <div className="generalAdminFinalReservationStepModalBody">
                  <div className="generalAdminFinalReservationStepModalBodyLeftSide">
                    <p className="generalAdminFinalReservationStepModalBodyLeftSideSubtotal boldFont">Subtotal</p>
                    <p className="generalAdminFinalReservationStepModalBodyLeftSidePrice extraBoldFont">$3400</p>
                    <p className="generalAdminFinalReservationStepModalBodyLeftSideCouponTitle">¿Tenés un cupón de descuento?</p>
                    <input type="text" id="coupon" className="form-control form-control-lg generalAdminFinalReservationStepModalBodyLeftSideCoupon" placeholder="Ingresá tu código" ref={reservationCode} />
                  </div>
                  <div className="generalAdminFinalReservationStepModalVerticalSeparator"></div>
                  <div className="generalAdminFinalReservationStepModalBodyRightSide">
                    <p className="generalAdminFinalReservationStepModalBodyRightSideTitle">Método de pago</p>
                    <div className="form-check paymentMethodOption">
                      <input type="radio" className="form-check-input" id="reservationMercadoPagoMethod" name="reservationPaymentMethod" ref={reservationMercadoPagoMethod} />
                      <label className="form-check-label lightFont" htmlFor="reservationMercadoPagoMethod">
                        Mercado Pago
                      </label>
                    </div>
                    <div className="form-check paymentMethodOption">
                      <input type="radio" className="form-check-input" id="reservationVidaMethod" name="reservationPaymentMethod" ref={reservationVidaMethod} />
                      <label className="form-check-label lightFont" htmlFor="reservationVidaMethod">
                        Coordinar pago con Vida Cowork
                      </label>
                    </div>
                  </div>
                </div>
                <button className="generalAdminFinalReservationStepModalBodyButton">Reservar</button>
                <div className="generalAdminModalStepsContainer">
                  <div className="fullStepCircle"></div>
                  <div className="fullStepCircle"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralUsuario;
