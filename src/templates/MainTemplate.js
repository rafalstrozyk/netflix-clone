import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import Store from 'state/store';
import MoviesConsumer from 'templates/MoviesConsumer';
import Navigation from 'components/Navigation/Navigation';
import CardFullSize from 'components/Slider/Card/CardFullSize';

const MainTemplate = ({ children }) => (
  <BrowserRouter>
    <Store>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        <CardFullSize />
        <MoviesConsumer>{children}</MoviesConsumer>
      </ThemeProvider>
    </Store>
  </BrowserRouter>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired,
};

export default MainTemplate;
