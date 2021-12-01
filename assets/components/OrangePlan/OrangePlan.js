import React from 'react';
import PlanOrangeSVG from '../../images/PlanOrangeSVG.svg';

const OrangePlan = ({ svg, title, price, time }) => {
  return (
    <div className="orangePlan">
      <img src={PlanOrangeSVG} alt="Vida" class="orangePlanSVG" />
      <div className="orangePlanInformation">
        <div className="d-flex justify-content-center align-items-center">
          {svg}
          <p className="orangePlanTitle boldFont">{title}</p>
        </div>
        <p className="orangePlanPrice extraBoldFont">${price}</p>
      </div>
      <select className="mdb-select md-form orangePlanSelect" defaultValue="Tipo de Consulta">
        <option value="1">PART</option>
        <option value="2">FULL</option>
      </select>
      <p className="orangePlanTime">{time} Hs. en salas de reunión</p>
      <button className="orangePlanButton">Suscribite</button>
    </div>
  );
};

export default OrangePlan;
