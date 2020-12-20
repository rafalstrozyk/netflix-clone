import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import GlobalStyle from 'theme/GlobalStyle';
import Store from 'state/store';
import MoviesConsumer from 'templates/MoviesConsumer';

const MainTemplate = ({ children }) => (
  <Store>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <MoviesConsumer>{children}</MoviesConsumer>
    </ThemeProvider>
  </Store>
);

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.array]).isRequired,
};

export default MainTemplate;
