import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { data } from "../data";
import React from "react";
import { addMovies, setShowFavorites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate(); // never use this.
    });

    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    const { favorites } = this.props.store.getState();

    const index = favorites.indexOf(movie);

    if (index !== -1) {
      return true;
    }

    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavorites(val));
  };

  render() {
    const { list, showFavorites, favorites } = this.props.store.getState();

    const displayMovies = showFavorites ? favorites : list;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavorites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavorites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favorites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movie-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No Favorites Movies :(</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
