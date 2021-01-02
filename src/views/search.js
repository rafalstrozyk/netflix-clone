import React, { useContext } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Context } from 'state/store';
import Card from 'components/Slider/Card/Card';
import Header from 'components/Headers/HeaderOne';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const searchResults = (state, query) => {
  const resultsArray = [];
  state.content.forEach((contentArr) => {
    const newArray = contentArr.content.filter((item) => {
      return item.title.toLowerCase().indexOf(query.get('search').toLowerCase()) >= 0;
    });
    resultsArray.push(...newArray);
    return newArray;
  });
  return resultsArray;
};

const StyledSearch = styled.div`
  margin-top: 70px;

  h2 {
    margin-bottom: 30px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > * {
      margin-bottom: 20px;
    }
  }
`;

const Search = () => {
  const query = useQuery();
  const { state } = useContext(Context);

  return (
    <StyledSearch>
      <Header as="h2">Search: {query.get('search')}</Header>
      <div className="container">
        {searchResults(state, query).map((item) => (
          <Card content={item} width="16.5" key={item.id} />
        ))}
      </div>
    </StyledSearch>
  );
};

export default Search;
