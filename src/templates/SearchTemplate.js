import React, { useContext } from 'react';

import { Redirect } from 'react-router-dom';
// import Search from 'views/search';
import { Context } from 'state/store';

const SearchTemplate = () => {
  const { state } = useContext(Context);
  return (
    <>
      {state.searchString.length > 0 && (
        <Redirect
          to={{
            pathname: '/search',
            search: `?search=${state.searchString}`,
          }}
        />
      )}
    </>
  );
};

export default SearchTemplate;
