import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import Navigation from 'components/Navigation/Navigation';

import RowSlider from 'components/RowSlider';
import { videos } from 'data';

const Root = () => {
  return (
    <MainTemplate>
      <Navigation />
      <RowSlider title="Moja Lista" href="/" movies={videos} />
      <RowSlider title="Moja Lista" href="/" movies={videos} />
      <RowSlider title="Moja Lista" href="/" movies={videos} />
      <RowSlider title="Moja Lista" href="/" movies={videos} />
      <RowSlider title="Moja Lista" href="/" movies={videos} />
      <RowSlider title="Moja Lista" href="/" movies={videos} />
      <RowSlider title="Moja Lista" href="/" movies={videos} />
      <RowSlider title="Moja Lista" href="/" movies={videos} />
    </MainTemplate>
  );
};

export default Root;
