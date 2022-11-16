// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVORITES = "SET_SHOW_FAVORITES";
export const ADD_TO_MOVIE_LIST = "ADD_TO_MOVIE_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

// actions creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function addFavourite(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie,
  };
}

export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}

export function setShowFavorites(val) {
  return {
    type: SET_SHOW_FAVORITES,
    val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_TO_MOVIE_LIST,
    movie,
  };
}

export function handleMovieSearch(searchText) {
  return function (dispatch) {
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    fetch(url)
      .then((respone) => respone.json())
      .then((movie) => {
        // console.log("movie", movie.Error);

        // dispatch an action
        if (movie.Response !== "False") {
          dispatch(addSearchResult(movie));
        }

        alert(movie.Error);
      });
  };
}

export function addSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
