import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };  
  
  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    this.setState({ movies : movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }
  
  render(){
    const {isLoading, movies} = this.state;
    return(
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}





























/*

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count : current.count + 1 }))
  };
  minus = () => {
    this.setState(current => ({ count : current.count - 1}))
  };
  
  render(){
  return (
    <div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>plus</button>
      <button onClick={this.minus}>minus</button>
    </div>
  )
  }
}

*/
export default App;