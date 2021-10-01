import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactData from './pages/ContactData';
import ContactAdd from './pages/ContactAdd';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ContactData />
      </Route>

      
      <Route exact path="/addContact">
        <ContactAdd />
      </Route>
    </Switch>
  );
}

export default Routes;