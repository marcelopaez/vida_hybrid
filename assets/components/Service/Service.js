import React from 'react';

const Service = ({ svg, title, subtitle, small, darkText }) => {
  return (
    <div className={!small ? (!darkText ? 'serviceContainer' : 'serviceContainerDarkText') : !darkText ? 'smallServiceContainer' : 'smallServiceContainerDarkText'}>
      <div>{svg}</div>
      <div className={!small ? 'serviceContainerInformation' : 'smallServiceContainerInformation'}>
        <p className={!small ? 'serviceTitle extraBoldFont' : 'smallServiceTitle extraBoldFont'}>{title}</p>
        <p className="serviceSubtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default Service;
