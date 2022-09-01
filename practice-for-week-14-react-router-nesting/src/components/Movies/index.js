import { NavLink, Route, Switch, useParams } from "react-router-dom";
import MovieDetails from '../MovieDetails'

function Movies({movies}) {
  return (
    <div className='comp orange'>
      <h1>Movies Component</h1>
      <nav>
        {movies.map((movieObj) => {
          return (
            <NavLink to={`/movies/${movieObj.id}`}>{movieObj.title}</NavLink>
          )
        })}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;