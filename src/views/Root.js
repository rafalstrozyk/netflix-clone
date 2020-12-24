import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import StateContener from 'state/StateContener';

const Root = () => {
  return (
    <MainTemplate>
      <StateContener />
    </MainTemplate>
  );
};

export default Root;
