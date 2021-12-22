import React from 'react';
import { Link } from 'react-router-dom';
import OrangeLogo from '../../images/Logos/OrangeLogo.svg';

const NotFound = () => {
  return (
    <main className="notFoundContainer">
      <img src={OrangeLogo} alt="Vida Cowork" className="notFoundImage" />
      <p className="notFoundTitle extraBoldFont">Disculpá las molestias. La página que estás buscando no existe.</p>
      <Link to="/">
        <button className="notFoundButton">Volver al Inicio</button>
      </Link>
    </main>
  );
};

export default NotFound;
