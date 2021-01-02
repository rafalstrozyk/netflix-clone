const Reducer = (state, action) => {
  let newContent;
  let isOnList;
  const arr = [];
  switch (action.type) {
    case 'SET_CONTENT':
      return {
        ...state,
        content: [...action.payload, ...state.content],
      };
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'SET_TVS':
      return {
        ...state,
        tvs: action.payload,
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
      state.content.forEach((content) => {
        arr.push(...content.content);
      });
      isOnList = arr.find((item) => item.id === action.payload).my_list;

      state.content.forEach((content) => {
        newContent = content;
        if (newContent.content.find((item) => item.id === action.payload)) {
          newContent.content.find((item) => item.id === action.payload).my_list = !isOnList;
        }
      });

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default Reducer;
