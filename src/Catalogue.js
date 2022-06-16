import axios from 'axios';
import { useEffect, useState } from 'react';
// import the Link component
import { Link } from 'react-router-dom';

const Catalogue = () => {

    const [movies, setMovies] = useState([]);
  // After our component gets mounted...
  useEffect( () => {
    // Make an AJAX call to TMDB to get a list of popular movies for a year
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: 'ebb13ce3758d1fece17b37c910cccea3',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1984,
      }
    }).then( (res) => {
      // Store those movies in state
      setMovies(res.data.results);
    })
  },[]);

  return (
      <ul className="catalogue">
        {/* Map through the movies state to put those movies on the page */}
        {/* We will use an implicit return here instead of the function block  */}
        {
          movies.map( (movie) => (
            <li key={movie.id}>
            {/* wrap the Link component around each Catalogue image and set the "to" attribute to our route's URL path with movie ID stored in our API data  */}
            <Link to={`/movie/${movie.id}`}>
              <img 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                alt={`Movie poster for ${movie.original_title}`} 
              />
            </Link>
          </li>
          ))
        }
      </ul>
  );
}

export default Catalogue;