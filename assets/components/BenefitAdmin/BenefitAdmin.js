import React from 'react';

const BenefitAdmin = ({ image, title, content }) => {
  return (
    <div className="benefitAdminContainer">
      <img className="benefitImage" src={image} alt={title} />
      <div className="benefitAdminBody">
        <p className="benefitAdminBodyTitle extraBoldFont">{title}</p>
        <p className="benefitAdminBodyContent">{content}</p>
      </div>
    </div>
  );
};

export default BenefitAdmin;
