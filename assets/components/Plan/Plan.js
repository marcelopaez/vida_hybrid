import React from 'react';
import { Link } from 'react-router-dom';

const Plan = ({ svg, title, description, full, part, background, price, link }) => {
  return (
    <Link to={`/planes#${link}`}>
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
    </Link>
  );
};

export default Plan;
