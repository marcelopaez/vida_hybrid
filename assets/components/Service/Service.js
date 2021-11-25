import React from 'react';

const Service = ({ svg, title, subtitle, small }) => {
  return (
    <div className={!small ? 'serviceContainer' : 'smallServiceContainer'}>
      <div className={!small ? 'serviceContainerImage' : 'smallServiceContainerImage'}>{svg}</div>
      <div className={!small ? 'serviceContainerInformation' : 'smallServiceContainerInformation'}>
        <p className="boldFont serviceTitle">{title}</p>
        <p className="serviceSubtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Service;
