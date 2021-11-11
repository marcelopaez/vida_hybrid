import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import NavbarAdmin from '../NavbarAdmin';
import Footer from '../Footer';
import Home from '../../pages/Home';
import Reservas from '../../pages/Reservas';
import Planes from '../../pages/Planes';
import Contrato from '../../pages/Contrato';
import NotFound from '../../components/NotFound';

const App = () => {
  return (
    <BrowserRouter basename='/app/'>
      {/* <NavbarAdmin /> */}
      <Navbar />
      <Switch>
        <Route exact path="/app" component={Home} />
        <Route exact path="/reservas" component={Reservas} />
        <Route exact path="/planes" component={Planes} />
        <Route exact path="/contrato" component={Contrato} />
        <Redirect to="/404" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
