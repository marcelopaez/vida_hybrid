import React from 'react';
import SideMenu from '../../components/SideMenu';
import Contract from '../../components/Contract';

const Contrato = () => {
  return (
    <div className="row marginNavbar generalContent">
      <div className="col-lg-2 col-md-3 col-sm-12 p-0">
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 p-3">
        <Contract />
      </div>
    </div>
  );
};

export default Contrato;
