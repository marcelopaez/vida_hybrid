import React from 'react';

const PlanHorizontal = ({ svg, title, description, full, part, price }) => {
  return (
    <div className="planHorizontalContainer">
      <div className="planHorizontalLeftSide">
        {svg}
        <p className="planHorizontalContainerTitle extraBoldFont">{title}</p>
      </div>
      <div className="planHorizontalRightSide">
        <p className="planHorizontalContainerDescription lightFont">
          {description}
          {full?.length > 0 ? (
            <>
              <br />
              FULL: {full} <br />
              PART: {part}
            </>
          ) : null}
        </p>
        {price?.length > 0 ? <p className="planHorizontalContainerPrice extraBoldFont">${price}</p> : null}
      </div>
    </div>
  );
};

export default PlanHorizontal;
