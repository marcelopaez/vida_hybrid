import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Sidemenu from '../SideMenu';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Sidemenu} />
        {/* <Route path="/404" component={NotFound} /> */}
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
