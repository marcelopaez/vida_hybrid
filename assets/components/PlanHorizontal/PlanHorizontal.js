import React from 'react';
import { Link } from 'react-router-dom';

const PlanHorizontal = ({ svg, title, description, price, link }) => {
  return (
    <Link to={`/planes#${link}`}>
      <div className="planHorizontalContainer">
        <div className="planHorizontalLeftSide">
          {svg}
          <p className="planHorizontalContainerTitle extraBoldFont">{title}</p>
        </div>
        <div className="planHorizontalRightSide">
          <p className="planHorizontalContainerDescription lightFont">{description}</p>
          {price?.length > 0 ? <p className="planHorizontalContainerPrice extraBoldFont">${price}</p> : null}
        </div>
      </div>
    </Link>
  );
};

export default PlanHorizontal;
