import React, { useEffect } from 'react';
import SideMenu from '../../components/SideMenu';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

const CrearReservaAdmin = () => {
  useEffect(() => window.scroll(0, 0), []);

  const handleDateClick = (arg, selectedOptionEvent) => {
    console.log(arg.dateStr);
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
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="crearReservaUsuarioRightSide">
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

export default CrearReservaAdmin;
