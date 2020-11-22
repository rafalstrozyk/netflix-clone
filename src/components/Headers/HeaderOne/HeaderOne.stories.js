import React from 'react';
import Header from 'components/Headers/HeaderOne';

export default {
  title: 'Header',
  component: Header,
};

export const header1 = () => <Header as="h1">Title1</Header>;
export const header2 = () => <Header as="h2">Title2</Header>;
export const header3 = () => <Header as="h3">Title3</Header>;
export const header4 = () => <Header as="h4">Title4</Header>;
