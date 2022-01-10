import React, { useEffect, useState, useRef } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

const CrearReservaUsuario = () => {
  useEffect(() => window.scroll(0, 0), []);

  const [selectedOptionEvent, setSelectedOptionEvent] = useState('meetingsRoom');
  const [showMeetingsRoomModal, setShowMeetingsRoomModal] = useState(false);
  const [showSharedPlaceModal, setShowSharedPlaceModal] = useState(false);
  const [showFinalStep, setShowFinalStep] = useState(false);
  const reservationHourMorning = useRef(null);
  const reservationHourAfternoon = useRef(null);
  const documentReservation = useRef(null);
  const emailReservation = useRef(null);

  const handleDateClick = (arg, selectedOptionEvent) => {
    console.log(arg.dateStr);
    if (selectedOptionEvent === 'meetingsRoom') {
      setShowMeetingsRoomModal(true);
      setShowSharedPlaceModal(false);
    } else {
      setShowSharedPlaceModal(true);
      setShowMeetingsRoomModal(false);
    }
  };

  function renderEventContent(eventInfo) {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <b>{eventInfo.timeText}</b>
        <br />
        <i>{eventInfo.event.title}</i>
      </div>
    );
  }

  return (
    <div className="row marginNavbar generalContent">
      <div className="navbarAdminLarger">
        <NavbarAdmin />
      </div>
      <div className="navbarAdminMobile">
        <NavbarAdminMobile />
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 sideMenu" style={{ height: '1224px' }}>
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 px-3" style={{ height: '1024px' }}>
        <div className="row generalContentBody">
          <div className="col-lg-8 col-md-12 col-sm-12" style={{ position: 'relative' }}>
            <div className="d-flex align-items-center">
              {selectedOptionEvent === 'meetingsRoom' ? (
                <button className="crearReservaUsuarioModalEventOptionButton">Sala de reunión</button>
              ) : (
                <button
                  className="crearReservaUsuarioModalEventOptionButtonDisabled"
                  onClick={() => {
                    setSelectedOptionEvent('meetingsRoom');
                  }}>
                  Sala de reunión
                </button>
              )}
              {selectedOptionEvent === 'sharedSpace' ? (
                <button className="crearReservaUsuarioModalEventOptionButton">Espacio compartido</button>
              ) : (
                <button
                  className="crearReservaUsuarioModalEventOptionButtonDisabled"
                  onClick={() => {
                    setSelectedOptionEvent('sharedSpace');
                  }}>
                  Espacio compartido
                </button>
              )}
            </div>
            {selectedOptionEvent === 'meetingsRoom' && (
              <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={(selectedOptionEvent) => handleDateClick(selectedOptionEvent)}
                events={[
                  { title: 'Reserva 1', date: '2021-12-21' },
                  { title: 'Reserva 2', date: '2021-12-22' },
                  {
                    title: 'Reserva3',
                    start: '2021-12-21T13:30:00',
                    end: '2021-12-21T14:30:00',
                    description: 'Espacio compartido',
                  },
                ]}
                locale={esLocale}
                eventContent={renderEventContent}
              />
            )}
            {selectedOptionEvent !== 'meetingsRoom' && (
              <FullCalendar
                // plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                // initialView="timeGridWeek"
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={(selectedOptionEvent) => handleDateClick(selectedOptionEvent)}
                events={[
                  { title: 'Reserva 1', date: '2021-12-23' },
                  { title: 'Reserva 2', date: '2021-12-24' },
                  {
                    title: 'Reserva3',
                    start: '2021-12-25T13:30:00',
                    end: '2021-12-25T14:30:00',
                    description: 'Espacio compartido',
                  },
                ]}
                locale={esLocale}
                eventContent={renderEventContent}
              />
            )}
            {showMeetingsRoomModal && (
              <div className="crearReservaUsuarioModalNewEventContainer">
                <div className="crearReservaUsuarioModalNewEventHeader">
                  <p className="crearReservaUsuarioModalNewEventHeaderTitle extraBoldFont">Sala de reunión</p>
                  <p className="crearReservaUsuarioModalNewEventHeaderX" onClick={() => setShowMeetingsRoomModal(false)}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                    </svg>
                  </p>
                </div>
                <hr />
                <div className="crearReservaUsuarioModalNewEventOptionsContainer">
                  <div className="crearReservaUsuarioModalNewEventOptionContainer">
                    <p className="crearReservaUsuarioModalNewEventOptionTitle boldFont">Cosmos</p>
                    <p className="crearReservaUsuarioModalNewEventOptionSubtitle">
                      Capacidad: <b>4 personas</b>
                    </p>
                  </div>
                  <div className="crearReservaUsuarioModalNewEventOptionContainer">
                    <p className="crearReservaUsuarioModalNewEventOptionTitle boldFont">Río</p>
                    <p className="crearReservaUsuarioModalNewEventOptionSubtitle">
                      Capacidad: <b>5 personas</b>
                    </p>
                  </div>
                  <div className="crearReservaUsuarioModalNewEventOptionContainer">
                    <p className="crearReservaUsuarioModalNewEventOptionTitle boldFont">Cielo</p>
                    <p className="crearReservaUsuarioModalNewEventOptionSubtitle">
                      Capacidad: <b>6 personas</b>
                    </p>
                  </div>
                  <div className="crearReservaUsuarioModalNewEventOptionContainer">
                    <p className="crearReservaUsuarioModalNewEventOptionTitle boldFont">Bosque</p>
                    <p className="crearReservaUsuarioModalNewEventOptionSubtitle">
                      Capacidad: <b>12 personas</b>
                    </p>
                  </div>
                </div>
                <button
                  className="crearReservaUsuarioModalNewEventButton"
                  onClick={() => {
                    setShowMeetingsRoomModal(false);
                    setShowFinalStep(true);
                  }}>
                  Reservar
                </button>
              </div>
            )}
            {showSharedPlaceModal && (
              <div className="crearReservaUsuarioModalNewEventContainer">
                <div className="crearReservaUsuarioModalNewEventHeader">
                  <p className="crearReservaUsuarioModalNewEventHeaderTitle extraBoldFont">Espacio compartido</p>
                  <p className="crearReservaUsuarioModalNewEventHeaderX" onClick={() => setShowSharedPlaceModal(false)}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                    </svg>
                  </p>
                </div>
                <hr />
                <div className="crearReservaUsuarioModalNewEventOptionsContainer">
                  <div className="md-form input-with-pre-icon">
                    <i className="fas fa-envelope input-prefix inputIconGreen"></i>
                    <input type="number" id="userReservationDocument" className="form-control userReservationDocument" ref={documentReservation} />
                    <label htmlFor="userReservationDocument" className="userReservationDocument">
                      DNI
                    </label>
                  </div>
                  <div className="md-form input-with-pre-icon">
                    <i className="fas fa-envelope input-prefix inputIconGreen"></i>
                    <input type="email" id="userReservationMail" className="form-control userReservationMail" ref={emailReservation} />
                    <label htmlFor="userReservationMail" className="userReservationMail">
                      E-mail
                    </label>
                  </div>
                  <div className="crearReservaUsuarioModalNewEventOptionContainer">
                    <p className="crearReservaUsuarioModalNewEventOptionTitle boldFont">SUM</p>
                    <p className="crearReservaUsuarioModalNewEventOptionSubtitle">Hay disponibilidad de lugar</p>
                  </div>
                </div>
                <div className="crearReservaUsuarioNewEventAvailabilityContainer">
                  <p className="crearReservaUsuarioNewEventAvailabilityTitle boldFont">Te quedan 3 créditos</p>

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
                <button
                  className="crearReservaUsuarioModalNewEventButton"
                  onClick={() => {
                    setShowSharedPlaceModal(false);
                    setShowFinalStep(true);
                  }}>
                  Reservar
                </button>
              </div>
            )}
            {showFinalStep && (
              <div className="crearReservaUsuarioModalNewEventConfirmationContainer">
                <div className="crearReservaUsuarioModalNewEventHeader">
                  <p className="crearReservaUsuarioModalNewEventHeaderTitle extraBoldFont">¡Tu reserva se guardó con éxito!</p>
                  <p className="crearReservaUsuarioModalNewEventHeaderX" onClick={() => setShowFinalStep(false)}>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.0005 1L11.0005 10.5M1.00049 20L11.0005 10.5M11.0005 10.5L1.00049 1L21.0005 20" stroke="#343434" />
                    </svg>
                  </p>
                </div>
                <hr />
                <div className="crearReservaUsuarioModalNewEventConfirmationContentContainer">
                  <p className="crearReservaUsuarioModalNewEventConfirmationContentTitle">Te acompañarán ese día...</p>
                  <div className="crearReservaUsuarioModalNewEventConfirmationContentCompany">
                    <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElement">
                      <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementImage"></div>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementTitle">Nombre</p>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementSubitle">Cargo profesional</p>
                    </div>
                    <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElement">
                      <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementImage"></div>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementTitle">Nombre</p>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementSubitle">Cargo profesional</p>
                    </div>
                    <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElement">
                      <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementImage"></div>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementTitle">Nombre</p>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementSubitle">Cargo profesional</p>
                    </div>
                    <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElement">
                      <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementImage"></div>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementTitle">Nombre</p>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementSubitle">Cargo profesional</p>
                    </div>
                    <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElement">
                      <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementImage"></div>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementTitle">Nombre</p>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementSubitle">Cargo profesional</p>
                    </div>
                    <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElement">
                      <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementImage"></div>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementTitle">Nombre</p>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementSubitle">Cargo profesional</p>
                    </div>
                    <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElement">
                      <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementImage"></div>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementTitle">Nombre</p>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementSubitle">Cargo profesional</p>
                    </div>
                    <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElement">
                      <div className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementImage"></div>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementTitle">Nombre</p>
                      <p className="crearReservaUsuarioModalNewEventConfirmationContentCompanyElementSubitle">Cargo profesional</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="crearReservaUsuarioRightSide">
              <p className="crearReservaUsuarioRightSideTitle extraBoldFont">Créditos disponibles:</p>
              <p className="crearReservaUsuarioRightSideAvailableCredits extraBoldFont">5/10</p>

              <div className="crearReservaUsuarioRightSideActualPlanContainer">
                <p className="crearReservaUsuarioRightSideActualPlanTitle">Suscrito a plan Eter</p>
                <p className="crearReservaUsuarioRightSideActualPlanSubtitle">Part</p>
              </div>

              <p className="crearReservaUsuarioRightSideMyReservationsTitle">Mis Reservas</p>
              <div className="table-responsive crearReservaUsuarioRightSideMyReservationsTable">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Sala</th>
                      <th scope="col">Fecha</th>
                      <th scope="col">Turno</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sala</td>
                      <td>Fecha</td>
                      <td>Turno</td>
                    </tr>
                    <tr>
                      <td>Sala</td>
                      <td>Fecha</td>
                      <td>Turno</td>
                    </tr>
                    <tr>
                      <td>Sala</td>
                      <td>Fecha</td>
                      <td>Turno</td>
                    </tr>
                    <tr>
                      <td>Sala</td>
                      <td>Fecha</td>
                      <td>Turno</td>
                    </tr>
                    <tr>
                      <td>Sala</td>
                      <td>Fecha</td>
                      <td>Turno</td>
                    </tr>
                    <tr>
                      <td>Sala</td>
                      <td>Fecha</td>
                      <td>Turno</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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
      </div>
    </div>
  );
};

export default CrearReservaUsuario;
