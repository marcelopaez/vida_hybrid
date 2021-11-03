import React from 'react';

const PlanIndex = ({ svg, title, description, full, part }) => {
  return (
    <div className="planContainerIndex">
      {/* <svg className="planContainerImage" width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.0501 4.32912L1.77159 0C-0.620814 6.1519 2.45514 13.1013 8.72097 15.4937L19.8855 19.8228C22.2779 13.6709 19.202 6.72152 13.0501 4.32912Z" fill="#fff" />
        <path d="M40.3921 23.0125L29.2276 18.6834C26.8352 24.8353 29.9111 31.8986 36.063 34.1771L47.2276 38.5062C49.62 32.3543 46.544 25.4049 40.3921 23.0125Z" fill="#fff" />
        <path d="M23.6447 33.0382L12.4801 28.7091C10.0877 34.861 13.1636 41.8104 19.4295 44.2028L30.594 48.5319C32.9864 42.38 29.9105 35.3167 23.6447 33.0382Z" fill="#fff" />
      </svg> */}
      {svg}
      <p className="planContainerTitle">{title}</p>
      <p className="planContainerDescription">
        <b>{description}</b>
        <br />
        FULL: {full} <br />
        PART: {part}
      </p>
      <button className="planContainerButton">Suscribite</button>
    </div>
  );
};

export default PlanIndex;
