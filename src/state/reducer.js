const Reducer = (state, action) => {
  const newState = state;
  let isOnList;
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
    case 'ADD_MY_LIST':
      isOnList = newState.movies.find((item) => item.id === action.payload).my_list;
      newState.movies.find((item) => item.id === action.payload).my_list = !isOnList;
      return {
        ...newState,
      };
    default:
      return state;
  }
};

export default Reducer;
