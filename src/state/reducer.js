const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'SET_MOVIE':
      return {
        ...state,
        movie: action.payload,
      };
    case 'SET_IS_OPEN':
      return {
        ...state,
        movieIsOpen: action.payload,
      };
    case 'SET_SEARCH_STRING':
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
