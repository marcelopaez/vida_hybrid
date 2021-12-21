import React, { useEffect, useState } from 'react';
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
      <div className="col-lg-2 col-md-3 col-sm-12 sideMenu">
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 p-3">
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
            <FullCalendar
              plugins={[timeGridPlugin, interactionPlugin]}
              initialView="timeGridWeek"
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
            {showMeetingsRoomModal && (
              <div className="crearReservaUsuarioModalNewEventContainer">
                <div className="crearReservaUsuarioModalNewEventHeader">
                  <p className="crearReservaUsuarioModalNewEventHeaderTitle extraBoldFont">Sala de reunión</p>
                  <p className="crearReservaUsuarioModalNewEventHeaderX" onClick={() => setShowMeetingsRoomModal(false)}>
                    X
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
                    X
                  </p>
                </div>
                <hr />
                <div className="crearReservaUsuarioModalNewEventOptionsContainer">
                  <div className="crearReservaUsuarioModalNewEventOptionContainer">
                    <p className="crearReservaUsuarioModalNewEventOptionTitle boldFont">SUM</p>
                    <p className="crearReservaUsuarioModalNewEventOptionSubtitle">Hay disponibilidad de lugar</p>
                  </div>
                </div>
                <div className="crearReservaUsuarioNewEventAvailabilityContainer">
                  <p className="crearReservaUsuarioNewEventAvailabilityTitle boldFont">Te quedan 3 créditos</p>
                  <o className="crearReservaUsuarioNewEventAvailabilityOption">Por la mañana (00 a 00)</o>
                  <o className="crearReservaUsuarioNewEventAvailabilityOption">Por la tarde (00 a 00)</o>
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
                    X
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