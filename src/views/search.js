import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Context } from 'state/store';
import Card from 'components/Slider/Card/Card';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const searchResults = (state, query) => {
  const newArray = state.movies.filter((item) => {
    return item.title.toLowerCase().indexOf(query.get('search').toLowerCase()) >= 0;
  });
  return newArray;
};
const Search = () => {
  const query = useQuery();
  const { state } = useContext(Context);

  return (
    <div>
      <h1>Search: {query.get('search')}</h1>
      {searchResults(state, query).map((item) => (
        <Card movie={item} width="15" key={item.id} />
      ))}
    </div>
  );
};

export default Search;
