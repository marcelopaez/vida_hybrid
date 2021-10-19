import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Reservas from '../../pages/Reservas';
import Planes from '../../pages/Planes';
import Contrato from '../../pages/Contrato';
import NotFound from '../../components/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/app" component={Reservas} />
        {/* <Route exact path="/app" component={Planes} /> */}
        {/* <Route exact path="/app" component={Contrato} /> */}
        <Redirect to="/404" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
