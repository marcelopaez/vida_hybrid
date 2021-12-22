import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Footer from '../Footer';
import Home from '../../pages/Home';

import GeneralUsuario from '../../pages/GeneralUsuario';
import CrearReservaUsuario from '../../pages/CrearReservaUsuario';
import PlanesUsuario from '../../pages/PlanesUsuario';
import ContratoUsuario from '../../pages/ContratoUsuario';
import ComunidadUsuario from '../../pages/ComunidadUsuario';
import ComunidadBeneficiosUsuario from '../../pages/ComunidadBeneficiosUsuario';

import ReservasAdmin from '../../pages/ReservasAdmin';
import ClientesAdmin from '../../pages/ClientesAdmin';
import PlanesAdmin from '../../pages/PlanesAdmin';
import ComunidadAdmin from '../../pages/ComunidadAdmin';
import ComunidadBeneficiosAdmin from '../../pages/ComunidadBeneficiosAdmin';
import CrearReservaAdmin from '../../pages/CrearReservaAdmin';

import IngresosAdmin from '../../pages/IngresosAdmin';

import Planes from '../../pages/Planes';
import Salas from '../../pages/Salas';
import Oficinas from '../../pages/Oficinas';
import Eventos from '../../pages/Eventos';
import Comunidad from '../../pages/Comunidad';
import Login from '../../pages/Login';
import Reservas from '../../pages/Reservas';
import NotFound from '../../components/NotFound';

const App = () => {
  return (
    <BrowserRouter basename="/app/">
      {/* <NavbarAdmin /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Cliente */}
        <Route exact path="/generalUsuario" component={GeneralUsuario} />
        <Route exact path="/crearReservaUsuario" component={CrearReservaUsuario} />
        <Route exact path="/planesUsuario" component={PlanesUsuario} />
        <Route exact path="/contratoUsuario" component={ContratoUsuario} />
        <Route exact path="/comunidadUsuario" component={ComunidadUsuario} />
        <Route exact path="/comunidadBeneficiosUsuario" component={ComunidadBeneficiosUsuario} />
        {/* Admin */}
        <Route exact path="/controlClientes" component={ReservasAdmin} />
        <Route exact path="/clientesAdmin" component={ClientesAdmin} />
        <Route exact path="/planesAdmin" component={PlanesAdmin} />
        <Route exact path="/comunidadAdmin" component={ComunidadAdmin} />
        <Route exact path="/comunidadBeneficiosAdmin" component={ComunidadBeneficiosAdmin} />
        <Route exact path="/crearReservaAdmin" component={CrearReservaAdmin} />
        <Route exact path="/ingresosAdmin" component={IngresosAdmin} />
        {/* Home */}
        <Route exact path="/planes" component={Planes} />
        <Route exact path="/salas" component={Salas} />
        <Route exact path="/oficinas" component={Oficinas} />
        <Route exact path="/comunidad" component={Comunidad} />
        <Route exact path="/eventos" component={Eventos} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reservar" component={Reservas} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
