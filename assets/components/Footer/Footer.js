import React from 'react';
import Logo from '../../images/Logos/BlackLogo.svg';
import FooterLogoDark from '../../images/Logos/FooterLogoDark.svg';
import InstagramIconRoundedDark from '../../images/Icons/InstagramIconRoundedDark.svg';
import FacebookIconRoundedDark from '../../images/Icons/FacebookIconRoundedDark.svg';
import InstagramIconRoundedDarkWhiteBackground from '../../images/Icons/InstagramIconRoundedDarkWhiteBackground.svg';
import FacebookIconRoundedDarkWhiteBackground from '../../images/Icons/FacebookIconRoundedDarkWhiteBackground.svg';

const Footer = () => {
  return (
    <main>
      <div className="footer">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="footerColumn footerColumnLeft firstFooterColumn">
            <div className="d-flex strategicPlaceLocationContainer">
              <img src={FooterLogoDark} alt="Vida" className="footerLogo" />
              <div className="d-flex flex-column justify-content-center">
                <p className="locationTextFooter boldFont">Fernando Fader 3971</p>
                <p className="locationSubTextFooter boldFont">Cerro de las Rosas | Córdoba</p>
              </div>
            </div>
            <p className="locationSubText2 lightFont">El trabajo es parte de nuestra vida. Te invitamos a disfrutarlo en un espacio relajado, flexible y rodeado de naturaleza.</p>
          </div>
          <div className="footerColumn secondFooterColumn">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="footerSubColumn">
                <div className="footerDescriptionTitle boldFont">Disposición</div>
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
                <div className="footerDescriptionTitle boldFont">Servicios</div>
                <div className="footerDescriptionContent">Contamos con una gran variedad de servicios para brindarte la mayor comodidad</div>
              </div>
              <div className="footerSubColumn">
                <div className="footerDescriptionTitle boldFont">Formato de salas</div>
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
                <div className="footerDescriptionTitle boldFont">Planes</div>
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
          <div className="footerColumn footerColumnRight thirdFooterColumn">
            <img src={Logo} alt="Vida" className="vidaLogoFooter" />
            <div className="footerDescriptionTitleSocial boldFont">Seguinos en redes</div>
            <div className="d-flex justify-content-center align-items-center w-100">
              <img src={InstagramIconRoundedDarkWhiteBackground} alt="Instagram" className="footerIconRounded" />
              <img src={FacebookIconRoundedDarkWhiteBackground} alt="Facebook" className="footerIconRounded" />
            </div>
          </div>
        </div>
        <div className="rights lightText">
          <p>Todos los derechos reservados. 2021</p>
        </div>
      </div>

      <div className="footerMobile">
        <div className="customContainer">
          <div className="footerTitlesSectionMobile">
            <p>Salas</p>
            <p>Formatos</p>
            <p>Planes</p>
            <p>Servicios</p>
            <p>Comunidad</p>
            <p>Reserva</p>
          </div>
          <hr />
          <div className="footerMobileLocation">
            <div className="footerMobileLocationText">
              <img src={FooterLogoDark} alt="Vida Cowork" className="mr-4" />
              <div className="flex-column">
                <p className="locationTextFooter boldFont">Fernando Fader 3971</p>
                <p className="locationSubTextFooter boldFont">Cerro de las Rosas | Córdoba</p>
              </div>
            </div>
            <img src={Logo} alt="Vida Cowork" className="vidaLogoFooterMobile" />
          </div>
          <hr />
          <div className="locationSubText2Mobile boldFont">Seguinos en redes</div>
          <div className="d-flex justify-content-center align-items-center w-100">
            <img src={FacebookIconRoundedDark} alt="Facebook" className="footerIconRounded" />
            <img src={InstagramIconRoundedDark} alt="Instagram" className="footerIconRounded" />
          </div>
        </div>
        <div className="rights lightText">
          <p>Todos los derechos reservados. 2021</p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
