import React from 'react';

const Service = ({ svg, title, subtitle }) => {
  return (
    <div className="serviceContainer">
      <div className="serviceContainerImage">{svg}</div>
      <div className="serviceContainerInformation">
        <p className="boldFont">{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Service;
