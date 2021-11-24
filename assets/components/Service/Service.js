import React from 'react';

const Service = ({ svg, title, subtitle, small }) => {
  return (
    <div className={!small ? 'serviceContainer' : 'smallServiceContainer'}>
      <div className="serviceContainerImage">{svg}</div>
      <div className="serviceContainerInformation">
        <p className="boldFont serviceTitle">{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Service;
