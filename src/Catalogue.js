import { useState, useEffect } from 'react';
import axios from 'axios';

// import a Link component
import { Link } from 'react-router-dom';

const Catalogue = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios({
            url: 'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac',
                language: 'en-US',
                sort_by: 'popularity.desc',
                include_adult: 'false',
                include_video: 'false',
                page: 1,
                primary_release_year: 1988,
            },
        }).then((res) => {
            const movieResults = res.data.results;
            setMovies(movieResults);
        })
    }, []);

    return (
        <ul className="catalogue">
            {movies.map((movie) => (
                <li key={movie.id}>
                    {
                        // wrap the Link component around each Catalogue image and 
                        // set the "to" attribute to our route's URL path with movie ID stored in our API data 
                    }
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