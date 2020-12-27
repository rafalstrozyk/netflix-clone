import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';

import Home from 'views/home';
import Films from 'views/films';
import Programs from 'views/programs';
import MyList from 'views/myList';

const Root = () => {
  return (
    <MainTemplate>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/programs">
          <Programs />
        </Route>
        <Route path="/my-list">
          <MyList />
        </Route>
      </Switch>
    </MainTemplate>
  );
};

export default Root;
