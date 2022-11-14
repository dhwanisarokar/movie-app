import {
  ADD_TO_FAVOURITE,
  ADD_MOVIES,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVORITES,
} from "../actions";

const initialMoviesState = {
  list: [],
  favorites: [],
  showFavorites: false,
};
export default function movies(state = initialMoviesState, action) {
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
    default:
      return state;
  }
}
