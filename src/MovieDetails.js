import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {

    const { movieID } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID}`,
            params: {
                api_key: 'f012df5d63927931e82fe659a8aaa3ac'
            },
        }).then((res) => {
            setMovie(res.data);
        })
    }, []);

    const { original_title, tagline, overview, poster_path } = movie;
    return (
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
    )
}

export default MovieDetails;