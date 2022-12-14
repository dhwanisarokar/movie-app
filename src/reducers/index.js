import { combineReducers } from "redux";
import {
  ADD_TO_FAVOURITE,
  ADD_MOVIES,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVORITES,
  ADD_SEARCH_RESULT,
  ADD_TO_MOVIE_LIST,
} from "../actions";

const initialMoviesState = {
  list: [],
  favorites: [],
  showFavorites: false,
};
export function movies(state = initialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favorites: [action.movie, ...state.favorites],
      };
    case REMOVE_FROM_FAVOURITE:
      const filterArray = state.favorites.filter((movie) => {
        return movie.Title !== action.movie.Title;
      });

      return {
        ...state,
        favorites: filterArray,
      };
    case SET_SHOW_FAVORITES:
      return {
        ...state,
        showFavorites: action.val,
      };
    case ADD_TO_MOVIE_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_TO_MOVIE_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
}

// const initialRootState = {
//   search: initialSearchState,
//   movies: initialMoviesState,
// };

// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
