import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { Helmet } from 'react-helmet';

import Home from 'views/home';
import Films from 'views/films';
import Programs from 'views/programs';
import MyList from 'views/myList';
import Search from 'views/search';

const Root = () => {
  return (
    <MainTemplate>
      <Helmet>
        <title>Netflix clone</title>
        <meta charset="utf-8" />
        <meta name="description" content="Netflix clone app" />
        <meta name="author" content="Rafał Stróżyk" />
        <meta name="copyright" content="Rafał Stróżyk" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
        <Route path="/search">
          <Search />
        </Route>
      </Switch>
    </MainTemplate>
  );
};

export default Root;
