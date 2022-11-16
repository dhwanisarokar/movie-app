import React from "react";
import { StoreContent } from "..";
import { addMovieToList, handleMovieSearch } from "../actions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }

  handleAddToMovies = (movie) => {
    // this.setState({
    //   showSearchResults: false,
    // });
    this.props.dispatch(addMovieToList(movie));
  };

  handleSearchClick = () => {
    const { searchText } = this.state;
    if (searchText !== "") {
      this.props.dispatch(handleMovieSearch(searchText));
    } else {
      this.setState({
        showSearchResults: false,
      });
    }
  };

  handleSearchChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    const { result: movie, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleSearchChange} />
          <button id="search-btn" onClick={this.handleSearchClick}>
            Search
          </button>

          {showSearchResults && (
            <div className="search-result">
              <div className="search-results">
                <img src={movie.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{movie.Title}</span>
                  <button onClick={() => this.handleAddToMovies(movie)}>
                    Add to Movies List
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

class NavbarWrapper extends React.Component {
  render() {
    return (
      <StoreContent.Consumer>
        {(store) => (
          <Navbar dispatch={store.dispatch} search={this.props.search} />
        )}
      </StoreContent.Consumer>
    );
  }
}

export default NavbarWrapper;
