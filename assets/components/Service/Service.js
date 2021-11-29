import React from 'react';

const Service = ({ svg, title, subtitle, small }) => {
  return (
    <div className={!small ? 'serviceContainer' : 'smallServiceContainer'}>
      <div className={!small ? 'serviceContainerImage' : 'smallServiceContainerImage'}>{svg}</div>
      <div className={!small ? 'serviceContainerInformation' : 'smallServiceContainerInformation'}>
        <p className={!small ? 'serviceTitle boldFont' : 'smallServiceTitle boldFont'}>{title}</p>
        <p className="serviceSubtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Service;
