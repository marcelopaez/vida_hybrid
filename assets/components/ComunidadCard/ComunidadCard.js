import React from 'react';

const ComunidadCard = ({ image, title, content, vertical, admin }) => {
  return vertical ? (
    <div className="cardVidaVertical">
      <img className="cardVidaImgTop" src={image} alt="Vida" />
      {admin ? (
        <div className="cardVidaBodyAdmin">
          <svg width="24" height="30" viewBox="0 0 24 30" className="cardVidaBodyEditIcon" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 27H22.5C22.8978 27 23.2794 27.158 23.5607 27.4393C23.842 27.7206 24 28.1022 24 28.5C24 28.8978 23.842 29.2794 23.5607 29.5607C23.2794 29.842 22.8978 30 22.5 30H1.5C1.10218 30 0.720645 29.842 0.43934 29.5607C0.158036 29.2794 0 28.8978 0 28.5C0 28.1022 0.158036 27.7206 0.43934 27.4393C0.720645 27.158 1.10218 27 1.5 27ZM0 19.5L15 4.5L19.5 9L4.5 24H0V19.5ZM16.5 3L19.5 0L24 4.5L20.9985 7.5015L16.5 3Z" fill="#C4C4C4" />
          </svg>
          <p className="cardVidaBodyTitle extraBoldFont">{title}</p>
          <p className="cardVidaBodyContent">{content}</p>
        </div>
      ) : (
        <div className="cardVidaBody">
          <p className="cardVidaBodyTitle extraBoldFont">{title}</p>
          <p className="cardVidaBodyContent">{content}</p>
        </div>
      )}
    </div>
  ) : (
    <div className="cardVidaHorizontal">
      <img className="cardVidaImgHorizontal" src={image} alt="Vida" />
      {admin ? (
        <div className="cardVidaBodyAdmin">
          <svg width="24" height="30" viewBox="0 0 24 30" className="cardVidaBodyEditIcon" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.5 27H22.5C22.8978 27 23.2794 27.158 23.5607 27.4393C23.842 27.7206 24 28.1022 24 28.5C24 28.8978 23.842 29.2794 23.5607 29.5607C23.2794 29.842 22.8978 30 22.5 30H1.5C1.10218 30 0.720645 29.842 0.43934 29.5607C0.158036 29.2794 0 28.8978 0 28.5C0 28.1022 0.158036 27.7206 0.43934 27.4393C0.720645 27.158 1.10218 27 1.5 27ZM0 19.5L15 4.5L19.5 9L4.5 24H0V19.5ZM16.5 3L19.5 0L24 4.5L20.9985 7.5015L16.5 3Z" fill="#C4C4C4" />
          </svg>
          <p className="cardVidaBodyTitle extraBoldFont">{title}</p>
          <p className="cardVidaBodyContent">{content}</p>
        </div>
      ) : (
        <div className="cardVidaBody">
          <p className="cardVidaBodyTitle extraBoldFont">{title}</p>
          <p className="cardVidaBodyContent">{content}</p>
        </div>
      )}
    </div>
  );
};

export default ComunidadCard;
