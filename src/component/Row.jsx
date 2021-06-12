import React, { useEffect, useState } from 'react'
import instance from '../axios'
import Movie from './Movie';
import "./Row.css"
const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies, setMovies] = useState([]);
    const path = "https://image.tmdb.org/t/p/original/";


    useEffect(() => {
        async function fetchData(){
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            
            return request;
        }
        fetchData();
    }, [fetchUrl])

    

    return (
        <div className="row">
            <h2 className="title">{title}</h2>
            <div className="row_container">
                {
                    movies.map((movie) => (
                       <img className={`movie_poster ${isLargeRow && "row_posterLarge"}`} src={`${path}${isLargeRow? movie.backdrop_path:movie.poster_path}`} alt={movie.name}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Row
