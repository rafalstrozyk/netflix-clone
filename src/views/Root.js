import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Slider from 'components/Slider/Slider';
import { videos } from 'data';

const Root = () => {
  return (
    <div>
      <GlobalStyle />
      <Slider movies={videos} />
    </div>
  );
};

export default Root;
