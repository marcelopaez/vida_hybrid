import React from 'react';

const PlanAdmin = ({ svg, title, description, full, part }) => {
  return (
    <div className="planAdminContainer">
      <div className="planAdminHeader">
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
      </div>
    </div>
  );
};

export default PlanAdmin;
