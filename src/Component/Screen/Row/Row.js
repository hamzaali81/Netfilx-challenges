import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './row.css';

function Row({ title, fetchUrl, isLargeRow = false}) {
    const [ movies, setMovies ] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
    })

    return (
        <div className="row">
            <h1>{title}</h1>

            <div className="row__posters">
            {
                movies.map(movie => (
                   ((isLargeRow && movie.poster__path) || (!isLargeRow && movie.backdrop_path) && (

                       <img 
                       key={movie.id}
                       className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                       src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                   )

                ))
            }
            </div>

        </div>
    )
}

export default Row;
