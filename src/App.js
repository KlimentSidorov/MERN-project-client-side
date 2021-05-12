import React from 'react';
import './styles.js';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './compomemts/Navbar/Navbar';
import Footer from './compomemts/Footer/Footer';
import Home from './compomemts/Home/Home';
import Auth from './compomemts/Auth/Auth';

const App = () => (
  <BrowserRouter>
    <Container maxWidth='lg'>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' exact component={Auth} />
      </Switch>
      <Footer />
    </Container>
  </BrowserRouter>
);

export default App;
