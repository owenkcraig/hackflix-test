import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieDetails = () => {
    // get access to Params 
    const { movieID } = useParams();

    // create state to store our movie details
    const [movie, setMovie] = useState({});

    // on component mount
    useEffect(() => {
        // make an axios call to get movie details using the movieID param
        axios({
        url: `https://api.themoviedb.org/3/movie/${movieID}`,
        params: {
            api_key: 'ebb13ce3758d1fece17b37c910cccea3'
        },
        }).then( (res) => {
            // set details to state
            setMovie(res.data);
        })
    }, [movieID]);

    // deconstruct properties from the movie state
    const { original_title, tagline, overview, poster_path } = movie;
    // display the details on the page
    return (
        <>
            <div className="poster">
                <div className="description">
                    <h2>{original_title}</h2>
                    <h3>{tagline}</h3>
                    <p>{overview}</p>
                </div>
                <div className="poster-image">
                    <img 
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`} 
                    alt={`Movie poster for ${original_title}`}
                    />
                </div>
            </div>
            <Link to={`/`}>
                <h2>Back</h2>
            </Link>
        </>
    )
}

export default MovieDetails;