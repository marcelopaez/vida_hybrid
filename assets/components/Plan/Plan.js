import React from 'react';

const Plan = ({ svg, title, description, full, part, background, price }) => {
  return (
    <div className={background ? 'planContainer' : 'planContainerWithBackground'}>
      {svg}
      <p className="planContainerTitle extraBoldFont">{title}</p>
      <p className="planContainerDescription lightFont">
        {description}
        {full?.length > 0 ? (
          <>
            <br />
            FULL: {full} <br />
            PART: {part}
          </>
        ) : null}
      </p>
      {price?.length > 0 ? <p className="planContainerPrice extraBoldFont">${price}</p> : null}
    </div>
  );
};

export default Plan;
