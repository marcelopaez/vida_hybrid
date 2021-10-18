import React from 'react';
import SideMenu from '../../components/SideMenu';
import Bookings from '../../components/Bookings';

const Reservas = () => {
  return (
    <div className="row marginNavbar generalContent">
      <div className="col-lg-2 col-md-3 col-sm-12 p-0">
        <SideMenu />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 p-3">
        <Bookings />
      </div>
    </div>
  );
};

export default Reservas;
