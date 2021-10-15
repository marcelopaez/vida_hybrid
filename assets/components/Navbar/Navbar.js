import React from 'react';
import Logo from '../../images/Logo.svg';
import Profile from '../../images/Profile.svg';
import Notifications from '../../images/Notifications.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-nav navbar-nav-scroll">
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

export default Navbar;
