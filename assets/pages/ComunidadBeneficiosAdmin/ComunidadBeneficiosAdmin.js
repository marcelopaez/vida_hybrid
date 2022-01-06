import React, { useEffect } from 'react';
import SideMenuAdmin from '../../components/SideMenuAdmin';
import NavbarAdmin from '../../components/NavbarAdmin';
import NavbarAdminMobile from '../../components/NavbarAdminMobile';
import BenefitAdmin from '../../components/BenefitAdmin';
import Comunidad1 from '../../images/Backgrounds/Comunidad1.jpg';

const ComunidadBeneficiosAdmin = () => {
  useEffect(() => window.scroll(0, 0), []);

  return (
    <div className="row marginNavbar generalContent">
      <div className="navbarAdminLarger">
        <NavbarAdmin />
      </div>
      <div className="navbarAdminMobile">
        <NavbarAdminMobile />
      </div>
      <div className="col-lg-2 col-md-3 col-sm-12 sideMenu">
        <SideMenuAdmin />
      </div>
      <div className="col-lg-10 col-md-9 col-sm-12 px-3 mb-3">
        <div className="row generalContentBody">
          <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12">
            <p className="comunidadBeneficiosAdminTitle boldFont">Beneficios</p>
            <div className="comunidadBeneficiosAdminBenefitsContainer">
              <BenefitAdmin image={Comunidad1} title={'Beneficio 1'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} admin={true} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 2'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} admin={true} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 3'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} admin={true} />
              <BenefitAdmin image={Comunidad1} title={'Beneficio 4'} content={'Texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} admin={true} />
            </div>
          </div>
          <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12">
            <div className="comunidadBeneficiosAdminRightSide">
              <p className="comunidadBeneficiosAdminRightSideTitle boldFont">Cumpleaños del día</p>
              <div className="comunidadBeneficiosAdminRightSideBirthdayContainer">
                <div className="comunidadBeneficiosAdminRightSideBirthdayImage"></div>
                <div className="comunidadBeneficiosAdminRightSideBirthdayData">
                  <p className="boldFont">Nombre Apellido</p>
                  <p>Ocupación: </p>
                  <p>Usuario desde: </p>
                  <div className="comunidadBeneficiosAdminRightSideBirthdayButtonContainer">
                    <button className="comunidadBeneficiosAdminRightSideBirthdayButton">Ver</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComunidadBeneficiosAdmin;
