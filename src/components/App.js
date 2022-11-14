import MovieCart from "./MovieCart";
import Navbar from "./Navbar";
import { data } from "../data";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favorites</div>
        </div>
      </div>

      <div className="list">
        {data.map((movie) => (
          <MovieCart movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
