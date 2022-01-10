import React, { useState, useRef, useEffect } from 'react';
import GoogleIcon from '../../images/Icons/GoogleIcon.svg';
import FacebookIcon from '../../images/Icons/FacebookIcon.svg';
import NavbarLogin from '../../components/NavbarLogin';
import NavbarLoginMobile from '../../components/NavbarLoginMobile';
import BackgroundSVGLogin from '../../images/SVGs/BackgroundSVGLogin.svg';

const Login = ({ showAlternativeFooter }) => {
  useEffect(() => {
    showAlternativeFooter();
    window.scroll(0, 0);
  }, []);

  const [loginUser, setLoginUser] = useState(true);
  const [firstStepRegister, setFirstStepRegister] = useState(false);
  const [secondStepRegister, setSecondStepRegister] = useState(false);

  const emailLogin = useRef(null);
  const passwordLogin = useRef(null);
  const emailRegister = useRef(null);
  const passwordRegister = useRef(null);
  const repeatedPasswordRegister = useRef(null);
  const nameRegister = useRef(null);
  const documentRegister = useRef(null);
  const birthdayRegister = useRef(null);
  const phoneRegister = useRef(null);
  const jobRegister = useRef(null);

  const seePasword = (inputField) => {
    const elem = document.getElementById(inputField);
    if (elem.type === 'password') {
      elem.type = 'text';
    } else {
      elem.type = 'password';
    }
  };

  return (
    <main>
      <div className="navbarLarger">
        <NavbarLogin />
      </div>

      <div className="navbarMobile">
        <NavbarLoginMobile />
      </div>

      <p className="loginTitle extraBoldFont">Comenzá tu experiencia en Vida Cowork</p>
      <div className="customContainer loginContainer">
        {loginUser ? (
          <div className="row">
            <div className="col-lg-3 offset-lg-3 col-md-4 offset-md-2 col-sm-12">
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-envelope input-prefix inputIconOrange"></i>
                <input type="email" id="consultEmailLogin" className="form-control consultEmailLogin" ref={emailLogin} />
                <label htmlFor="consultEmailLogin" className="consultEmailLogin">
                  E-mail
                </label>
              </div>

              <div className="md-form input-with-pre-icon" style={{ position: 'relative' }}>
                <i className="fas fa-lock input-prefix inputIconOrange"></i>
                <input type="password" id="consultPasswordLogin" className="form-control consultPasswordLogin" ref={passwordLogin} />
                <label htmlFor="consultPasswordLogin" className="consultPasswordLogin">
                  Contraseña
                </label>
                <div className="seePassword" onClick={() => seePasword('passwordLogin')}>
                  <i className="far fa-eye"></i>
                </div>
              </div>

              <button className="loginButton boldFont">Iniciar Sesión</button>
              <button
                className="registerButton boldFont"
                onClick={() => {
                  setLoginUser(false);
                  setFirstStepRegister(true);
                }}>
                Registrate
              </button>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-center">
              <div className="loginSeparator" />
              <div className="flex-column">
                <p className="loginSubtitle boldFont">O iniciá sesión con</p>
                <div className="loginIconsContainer">
                  <img src={GoogleIcon} alt="Google" style={{ marginRight: '20px', opacity: '0.5' }} />
                  <img src={FacebookIcon} alt="Facebook" style={{ marginLeft: '20px', opacity: '0.5' }} />
                </div>
                <img src={BackgroundSVGLogin} alt="Vida" className="backgroundSVGLogin" />
              </div>
            </div>
          </div>
        ) : (
          firstStepRegister && (
            <div className="row">
              <div className="col-lg-3 offset-lg-3 col-md-4 offset-md-2 col-sm-12">
                <div className="md-form input-with-pre-icon">
                  <i className="fas fa-envelope input-prefix inputIconOrange"></i>
                  <input type="email" id="consultEmailRegister" className="form-control consultEmailRegister" ref={emailRegister} />
                  <label htmlFor="consultEmailRegister" className="consultEmailRegister">
                    E-mail
                  </label>
                </div>
                <div className="md-form input-with-pre-icon" style={{ position: 'relative' }}>
                  <i className="fas fa-lock input-prefix inputIconOrange"></i>
                  <input type="password" id="consultPasswordRegister1" className="form-control consultPasswordRegister1" ref={passwordRegister} />
                  <label htmlFor="consultPasswordRegister1" className="consultPasswordRegister1">
                    Contraseña
                  </label>
                  <div className="seePassword" onClick={() => seePasword('passwordRegister')}>
                    <i className="far fa-eye"></i>
                  </div>
                </div>
                <div className="md-form input-with-pre-icon" style={{ position: 'relative' }}>
                  <i className="fas fa-lock input-prefix inputIconOrange"></i>
                  <input type="password" id="consultPasswordRegister2" id="repeatedPasswordRegister" className="form-control consultPasswordRegister2" ref={repeatedPasswordRegister} />
                  <label htmlFor="consultPasswordRegister2" className="consultPasswordRegister1">
                    Confirmar Contraseña
                  </label>
                  <div className="seePassword" onClick={() => seePasword('repeatedPasswordRegister')}>
                    <i className="far fa-eye"></i>
                  </div>
                </div>
                <button
                  className="loginButton boldFont"
                  onClick={() => {
                    setFirstStepRegister(false);
                    setSecondStepRegister(true);
                  }}>
                  Siguiente
                </button>
                <div className="loginStepsContainer">
                  <div className="fullStepCircleOrange"></div>
                  <div className="emptyStepCircleOrange"></div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-center">
                <div className="loginSeparator" />
                <div className="flex-column">
                  <p className="loginSubtitle boldFont">O registrate con</p>
                  <div className="loginIconsContainer">
                    <img src={GoogleIcon} alt="Google" style={{ marginRight: '20px', opacity: '0.5' }} />
                    <img src={FacebookIcon} alt="Facebook" style={{ marginLeft: '20px', opacity: '0.5' }} />
                  </div>
                  <img src={BackgroundSVGLogin} alt="Vida" className="backgroundSVGLogin" />
                </div>
              </div>
            </div>
          )
        )}
        {secondStepRegister && (
          <div className="row">
            <div className="col-lg-3 offset-lg-3 col-md-4 offset-md-2 col-sm-12">
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-user input-prefix inputIconOrange"></i>
                <input type="text" id="consultRegisterName" className="form-control consultRegisterName" ref={nameRegister} />
                <label htmlFor="consultRegisterName" className="consultRegisterName">
                  Nombre Completo
                </label>
              </div>
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-id-card input-prefix inputIconOrange"></i>
                <input type="number" id="consultRegisterDocument" className="form-control consultRegisterDocument" ref={documentRegister} />
                <label htmlFor="consultRegisterDocument" className="consultRegisterDocument">
                  DNI
                </label>
              </div>
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-birthday-cake input-prefix inputIconOrange"></i>
                <input type="date" id="consultRegisterBirthday" className="form-control consultRegisterBirthday" ref={birthdayRegister} />
                <label htmlFor="consultRegisterBirthday" className="consultRegisterBirthday">
                  {/* Fecha de Cumpleaños */}
                </label>
              </div>
            </div>
            <div className="loginSeparator" />
            <div className="col-lg-3 col-md-4 col-sm-12 flex-column">
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-phone-alt input-prefix inputIconOrange"></i>
                <input type="number" id="consultRegisterPhone" className="form-control consultRegisterPhone" ref={phoneRegister} />
                <label htmlFor="consultRegisterPhone" className="consultRegisterPhone">
                  Celular
                </label>
              </div>
              <div className="md-form input-with-pre-icon">
                <i className="fas fa-briefcase input-prefix inputIconOrange"></i>
                <input type="text" id="consultRegisterJob" className="form-control consultRegisterJob" ref={jobRegister} />
                <label htmlFor="consultRegisterJob" className="consultRegisterJob">
                  ¿A qué te dedicás?
                </label>
              </div>
            </div>
            <button
              className="loginButtonCenter boldFont w-50"
              onClick={() => {
                setSecondStepRegister(false);
                setLoginUser(true);
              }}>
              Completar Registro
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Login;
