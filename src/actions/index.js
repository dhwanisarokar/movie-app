// {
//   type: "ADD_MOVIES";
// }

// action types
export const ADD_MOVIES = "ADD_MOVIES";

// actions creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
