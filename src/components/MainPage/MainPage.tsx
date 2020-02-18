import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RestaurantPage } from '../RestaurantPage/index';
import { RestaurantsListPage } from '../RestaurantsListPage/index';
import { MenuItem } from '../MenuItem/index';
const MainPage = () => (
  <div className="page">
    <main className="content">
      <Route
        exact
        path="/restaurants"
      >
        <RestaurantsListPage />
      </Route>
      <Route
        path="/restaurants/:uuid/:itemUuid?"
      >
        <RestaurantPage />
      </Route>
      <Route
        path="/restaurants/:uuid/:itemUuid"
      >
        <MenuItem />
      </Route>
      <Redirect from="/" to="/restaurants" />
    </main>
  </div>
);

export default MainPage;