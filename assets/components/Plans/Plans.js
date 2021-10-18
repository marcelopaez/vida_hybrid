import React from 'react';
import EterLogo from '../../images/EterLogo.svg';
import AireLogo from '../../images/AireLogo.svg';
import AguaLogo from '../../images/AguaLogo.svg';
import FuegoLogo from '../../images/FuegoLogo.svg';
import TierraLogo from '../../images/TierraLogo.svg';

const Plans = () => {
  return (
    <div className="generalContentBody">
      <h1 className="sectionTitle">Planes</h1>
      <div className="plansContainer">
        <div className="currentPlanContainer">
          <img src={EterLogo} alt="Plan Eter" className="planIcon" />
          <div className="currentPlanContent">
            <p>Estás suscripto al plan Eter</p>
          </div>
          <hr className="whiteSeparator" />
          <div className="currentPlanContent">
            <p className="font-weight-bold">1 día a la semana</p>
            <p>PART: Incluye 3 Hs. en salas de reunión</p>
            <div className="d-flex justify-content-center">
              <button className="buttonContainer">Modificar</button>
            </div>
          </div>
        </div>
        <div className="planContainer">
          <img src={AireLogo} alt="Plan Aire" className="planIcon" />
          <div className="currentPlanContent">
            <p className="m-0 p-0">Aire</p>
          </div>
          <hr className="whiteSeparator" />
          <div className="currentPlanContent">
            <p className="font-weight-bold">Enfocate 2 días a la semana</p>
            <p>FULL: Incluye 6 Hs. en salas de reunión PART: Incluye 4 Hs. en salas de reunión</p>
            <div className="d-flex justify-content-center">
              <button className="buttonContainer">Suscribir</button>
            </div>
          </div>
        </div>
        <div className="planContainer">
          <img src={AguaLogo} alt="Plan Agua" className="planIcon" />
          <div className="currentPlanContent">
            <p className="m-0 p-0">Agua</p>
          </div>
          <hr className="whiteSeparator" />
          <div className="currentPlanContent">
            <p className="font-weight-bold">Trabajá 3 veces por semana, descansá 2</p>
            <p>FULL: Incluye 8 Hs. en salas de reunión PART: Incluye 5 Hs. en salas de reunión</p>
            <div className="d-flex justify-content-center">
              <button className="buttonContainer">Suscribir</button>
            </div>
          </div>
        </div>
        <div className="planContainer">
          <img src={FuegoLogo} alt="Plan Fuego" className="planIcon" />
          <div className="currentPlanContent">
            <p className="m-0 p-0">Fuego</p>
          </div>
          <hr className="whiteSeparator" />
          <div className="currentPlanContent">
            <p className="font-weight-bold">Un día de franco! 4 veces a la semana</p>
            <p>FULL: Incluye 10 Hs. en salas de reunión PART: Incluye 6 Hs. en salas de reunión</p>
            <div className="d-flex justify-content-center">
              <button className="buttonContainer">Suscribir</button>
            </div>
          </div>
        </div>
        <div className="planContainer">
          <img src={TierraLogo} alt="Plan Tierra" className="planIcon" />
          <div className="currentPlanContent">
            <p className="m-0 p-0">Tierra</p>
          </div>
          <hr className="whiteSeparator" />
          <div className="currentPlanContent">
            <p className="font-weight-bold">Vení 5 días a la semana</p>
            <p>FULL: Incluye 12 Hs. en salas de reunión PART: Incluye 7 Hs. en salas de reunión</p>
            <div className="d-flex justify-content-center">
              <button className="buttonContainer">Suscribir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
