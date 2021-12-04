import React from 'react';
import GoogleIcon from '../../images/GoogleIcon.svg';
import FacebookIcon from '../../images/FacebookIcon.svg';
import NavbarLogin from '../../components/NavbarLogin';
import NavbarLoginMobile from '../../components/NavbarLoginMobile';

const Login = () => {
  return (
    <main>
      <div className="navbarLarger">
        <NavbarLogin />
      </div>

      <div className="navbarMobile">
        <NavbarLoginMobile />
      </div>

      <div className="container loginContainer">
        <p className="loginTitle extraBoldFont">Comenzá tu experiencia en Vida Cowork</p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="md-form input-with-pre-icon">
              <i className="fas fa-envelope input-prefix inputIconOrange"></i>
              <input type="text" id="consultEmailLogin" className="form-control consultEmailLogin" />
              <label htmlFor="consultEmailLogin">E-mail</label>
            </div>
            <div className="md-form input-with-pre-icon">
              <i className="fas fa-lock input-prefix inputIconOrange"></i>
              <input type="text" id="consultPasswordLogin" className="form-control consultPasswordLogin" />
              <label htmlFor="consultPasswordLogin">Contraseña</label>
            </div>
            <button className="loginButton">Enviar</button>
            <button className="loginButton">Registrate</button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
            <div className="loginSeparator" />
            <div className="flex-column">
              <p className="loginSubtitle">O iniciá sesión con</p>
              <div className="loginIconsContainer">
                <img src={GoogleIcon} alt="Google" style={{ marginRight: '20px', opacity: '0.5' }} />
                <img src={FacebookIcon} alt="Facebook" style={{ marginLeft: '20px', opacity: '0.5' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
