import React, { useState } from 'react';
import Logo from '../../images/Logos/GreenLogo.svg';
import Notifications from '../../images/Icons/NotificationsIcon.svg';

const NavbarAdmin = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar navbarAdmin">
      <a className="navbar-brand" href="/app" className="m-0 p-0">
        <img src={Logo} width="200px" alt="Vida Cowork" className="navbarLogoAdmin" />
      </a>
      <div className="navbarAdminData">
        <img src={Notifications} alt="Vida Cowork" className="notificationsIcon" onClick={() => setShowNotifications(!showNotifications)} />
        {showNotifications && (
          <div className="notificationAdminContainer">
            <div className="notificationAdminHeader">
              <p className="notificationAdminTitle extraBoldFont">Notificaciones</p>
              <p className="notificationAdminX" onClick={() => setShowNotifications(!showNotifications)}>
                X
              </p>
            </div>
            <div className="blockAdminSeparator"></div>
            <div className="notificationAdmin">
              <svg className="notificationAdminSVG" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#A6A6A6" />
                <path
                  d="M23.9966 12.2522C23.767 12.1245 23.5145 12.0432 23.2535 12.0132C22.9925 11.9831 22.7281 12.0047 22.4755 12.0769C22.2229 12.1491 21.987 12.2703 21.7812 12.4337C21.5755 12.5971 21.404 12.7995 21.2766 13.0292L17.5636 19.7112L15.4386 17.5862C15.2541 17.3952 15.0334 17.2428 14.7894 17.138C14.5454 17.0332 14.2829 16.978 14.0174 16.9757C13.7518 16.9734 13.4885 17.024 13.2427 17.1246C12.9969 17.2251 12.7736 17.3736 12.5858 17.5614C12.398 17.7492 12.2495 17.9725 12.1489 18.2183C12.0484 18.4641 11.9978 18.7275 12.0001 18.993C12.0024 19.2586 12.0576 19.521 12.1624 19.765C12.2672 20.009 12.4196 20.2297 12.6106 20.4142L16.6106 24.4142C16.9886 24.7932 17.4986 25.0012 18.0246 25.0012L18.3016 24.9812C18.6081 24.9383 18.9005 24.8249 19.1558 24.6498C19.4111 24.4747 19.6222 24.2428 19.7726 23.9722L24.7726 14.9722C24.9002 14.7427 24.9814 14.4902 25.0115 14.2293C25.0416 13.9684 25.02 13.7041 24.9479 13.4515C24.8759 13.1989 24.7548 12.963 24.5915 12.7572C24.4283 12.5515 24.2261 12.3799 23.9966 12.2522Z"
                  fill="white"
                />
              </svg>
              <p className="notificationAdminText">¡Tu reserva se guardó con éxito!</p>
            </div>
            <div className="blockAdminNotificationSeparator"></div>
            <div className="notificationAdmin">
              <svg className="notificationAdminSVG" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="19" cy="19" r="19" fill="#A6A6A6" />
                <path
                  d="M23.9966 12.2522C23.767 12.1245 23.5145 12.0432 23.2535 12.0132C22.9925 11.9831 22.7281 12.0047 22.4755 12.0769C22.2229 12.1491 21.987 12.2703 21.7812 12.4337C21.5755 12.5971 21.404 12.7995 21.2766 13.0292L17.5636 19.7112L15.4386 17.5862C15.2541 17.3952 15.0334 17.2428 14.7894 17.138C14.5454 17.0332 14.2829 16.978 14.0174 16.9757C13.7518 16.9734 13.4885 17.024 13.2427 17.1246C12.9969 17.2251 12.7736 17.3736 12.5858 17.5614C12.398 17.7492 12.2495 17.9725 12.1489 18.2183C12.0484 18.4641 11.9978 18.7275 12.0001 18.993C12.0024 19.2586 12.0576 19.521 12.1624 19.765C12.2672 20.009 12.4196 20.2297 12.6106 20.4142L16.6106 24.4142C16.9886 24.7932 17.4986 25.0012 18.0246 25.0012L18.3016 24.9812C18.6081 24.9383 18.9005 24.8249 19.1558 24.6498C19.4111 24.4747 19.6222 24.2428 19.7726 23.9722L24.7726 14.9722C24.9002 14.7427 24.9814 14.4902 25.0115 14.2293C25.0416 13.9684 25.02 13.7041 24.9479 13.4515C24.8759 13.1989 24.7548 12.963 24.5915 12.7572C24.4283 12.5515 24.2261 12.3799 23.9966 12.2522Z"
                  fill="white"
                />
              </svg>
              <p className="notificationAdminText">¡Tu reserva se guardó con éxito!</p>
            </div>
            <div className="blockAdminNotificationSeparator"></div>
          </div>
        )}
        <p className="navbarAdminName boldFont">Nombre Apellido</p>
        <div className="fakeProfilePictureAdmin"></div>
        <div className="arrowProfileAdmin"></div>
      </div>
    </nav>
  );
};

export default NavbarAdmin;
