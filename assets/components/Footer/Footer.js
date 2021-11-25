import React from 'react';
import FooterLogo from '../../images/FooterLogo.svg';
import Logo from '../../images/OrangeLogo.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center flex-wrap">
        <div className="footerColumn footerColumnLeft">
          <div className="d-flex strategicPlaceLocationContainer">
            <img src={FooterLogo} alt="Vida" className="footerLogo" />
            <div className="flex-column">
              <p className="fw-bold m-0">Fernando Fader 3971</p>
              <p className="m-0">Cerro de las Rosas | Córdoba</p>
            </div>
          </div>
          <p style={{ marginTop: '3rem' }}>El trabajo es parte de nuestra vida. Te invitamos a disfrutarlo en un espacio relajado, flexible y rodeado de naturaleza.</p>
        </div>
        <div className="footerColumn" style={{ marginLeft: '4.7rem', marginRight: '4.7rem' }}>
          <div className="d-flex flex-wrap">
            <div className="footerSubColumn">
              <div className="footerDescriptionTitle">Disposición</div>
              <div className="footerDescriptionContent">
                <ul>
                  <li>Salas de reunión</li>
                  <li>Oficinas privadas</li>
                  <li>Eventos</li>
                  <li>Salón de usos múltiples</li>
                </ul>
              </div>
            </div>
            <div className="footerSubColumn">
              <div className="footerDescriptionTitle">Servicios</div>
              <div className="footerDescriptionContent">Contamos con una gran variedad de servicios para brindarte la mayor comodidad</div>
            </div>
            <div className="footerSubColumn">
              <div className="footerDescriptionTitle">Formato de salas</div>
              <div className="footerDescriptionContent">
                <ul>
                  <li>Mesa rusa</li>
                  <li>Herradura</li>
                  <li>Taller</li>
                  <li>Escuela</li>
                  <li>Imperial</li>
                  <li>Auditorio</li>
                  <li>Libre</li>
                </ul>
              </div>
            </div>
            <div className="footerSubColumn">
              <div className="footerDescriptionTitle">Planes</div>
              <div className="footerDescriptionContent">
                <ul>
                  <li>Eter</li>
                  <li>Aire</li>
                  <li>Agua</li>
                  <li>Fuego</li>
                  <li>Tierra</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footerColumn footerColumnRight">
          <div className="footerDescriptionTitle">Seguinos en redes</div>
          <img src={Logo} alt="Vida" />
        </div>
      </div>
      <div className="rights">
        <p>Todos los derechos reservados. 2021</p>
      </div>
    </div>
  );
};

export default Footer;
