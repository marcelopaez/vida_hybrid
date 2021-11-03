import React from 'react';
import Logo from '../../images/GreenLogo.svg';
import Profile from '../../images/ProfileIcon.svg';
import Notifications from '../../images/NotificationsIcon.svg';

const NavbarAdmin = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
      <a className="navbar-brand" href="/" className="m-0 p-0">
        <img src={Logo} height="30" alt="Vida Cowork" className="navbarLogo" />
      </a>
      <div className="userBar">
        <img src={Profile} alt="Perfil" className="profileIcon" />
        <div className="profileName">
          <p className="m-0 p-0">
            <b>Nombre Apellido</b>
          </p>
          <p className="m-0 p-0">Usuario</p>
        </div>
        <img src={Notifications} alt="Vida Cowork" className="notificationsIcon" />
      </div>
    </nav>
  );
};

export default NavbarAdmin;
