import React from 'react';
import Card from 'components/Slider/Card/Card';

const movie = {
  title: 'title',
  img:
    'https://occ-0-2509-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcEY9fr9xfQUA4GSB2_A2beUqfhOyTMaYNJCNZwCzoHJhMp01FMjscpSzw5dpQ9RzUopvciUw6m-JBxLIBYXzFU0opAo0m_ogzXqhCMptlNJ7wpPkac1RzbTjCAx.jpg?r=0de',
};

export default {
  title: 'Card',
  component: Card,
};

export const cardNoOpen = () => <Card movie={movie} width="350px" />;
