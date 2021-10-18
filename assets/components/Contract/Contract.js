import React from 'react';
import ContractIcon1 from '../../images/ContractIcon1.svg';
import ContractIcon2 from '../../images/ContractIcon2.svg';
import ContractIcon3 from '../../images/ContractIcon3.svg';
import Profile from '../../images/Profile.svg';

const Contract = () => {
  return (
    <div className="generalContentBody">
      <h1 className="sectionTitle">Contrato</h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="contract">
            <div className="contractContent">
              <p>Plan Eter</p>
            </div>
            <hr className="whiteSeparator" />
            <div className="contractContent">
              <div className="d-flex justify-content-start mb-3">
                <img src={ContractIcon1} alt="icono" width="50px" />
                <p className="mt-3 ml-3">1 día a la semana</p>
              </div>
              <p>PART: Incluye 3 Hs. en salas de reunión</p>
            </div>
            <hr className="whiteSeparator" />
            <div className="contractContent">
              <div className="d-flex justify-content-start mb-3">
                <img src={ContractIcon2} alt="icono" width="50px" />
                <p className="mt-3 ml-3">Fecha de firma</p>
              </div>
              <p>12/10/2021</p>
            </div>
            <hr className="whiteSeparator" />
            <div className="contractContent">
              <div className="d-flex justify-content-start mb-3">
                <img src={ContractIcon3} alt="icono" width="50px" />
                <p className="mt-3 ml-3">Estado</p>
              </div>
              <p>Pendiente de firma</p>
            </div>
            <div className="d-flex justify-content-center m-2">
              <button className="buttonContainer">Firmar</button>
            </div>
          </div>
        </div>
        <div className="col-lg-9 col-md-6 col-sm-12">
          <div className="d-flex justify-content-start">
            <img src={Profile} alt="icono" width="50px" />
            <p className="mt-3 ml-3">Nombre</p>
          </div>
          <p className="textIndentation">DNI</p>
          <p className="textIndentation">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="textIndentation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className="textIndentation">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div className="d-flex justify-content-start">
            <img src={ContractIcon3} alt="icono" width="50px" />
            <p className="mt-3 ml-3">Estado</p>
          </div>
          <p className="textIndentation">pendiente de firma</p>
        </div>
      </div>
    </div>
  );
};

export default Contract;
