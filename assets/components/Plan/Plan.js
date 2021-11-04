import React from 'react';

const Plan = ({ svg, title, description, full, part, background }) => {
  return (
    <div className={background ? 'planContainer' : 'planContainerWithBackground'}>
      {svg}
      <p className="planContainerTitle">{title}</p>
      <p className="planContainerDescription">
        <b>{description}</b>
        <br />
        FULL: {full} <br />
        PART: {part}
      </p>
      <button className="planContainerButton">Suscribite</button>
    </div>
  );
};

export default Plan;
