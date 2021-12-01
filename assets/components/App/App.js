import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavbarAdmin from '../NavbarAdmin';
import Footer from '../Footer';
import Home from '../../pages/Home';
import ReservasAdmin from '../../pages/ReservasAdmin';
import PlanesAdmin from '../../pages/PlanesAdmin';
import ContratoAdmin from '../../pages/Contrato';
import Planes from '../../pages/Planes';
import Salas from '../../pages/Salas';
import Oficinas from '../../pages/Oficinas';
import Eventos from '../../pages/Eventos';
import Comunidad from '../../pages/Comunidad';
import NotFound from '../../components/NotFound';

const App = () => {
  return (
    <BrowserRouter basename="/app/">
      {/* <NavbarAdmin /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/reservasAdmin" component={ReservasAdmin} />
        <Route exact path="/planesAdmin" component={PlanesAdmin} />
        <Route exact path="/contratoAdmin" component={ContratoAdmin} />
        <Route exact path="/planes" component={Planes} />
        <Route exact path="/salas" component={Salas} />
        <Route exact path="/oficinas" component={Oficinas} />
        <Route exact path="/comunidad" component={Comunidad} />
        <Route exact path="/eventos" component={Eventos} />
        <Redirect to="/404" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
