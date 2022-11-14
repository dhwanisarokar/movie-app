import MovieCart from "./MovieCart";
import Navbar from "./Navbar";
import { data } from "../data";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate(); // never use this.
    });

    store.dispatch({
      type: "ADD_MOVIES",
      movies: data,
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favorites</div>
          </div>
          <div className="list">
            {data.map((movie, index) => (
              <MovieCart movie={movie} key={`movie-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
