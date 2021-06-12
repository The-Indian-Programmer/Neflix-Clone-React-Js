import React, { useEffect, useState } from 'react'
import "./Banner.css"
import instance from '../axios';
import request from '../request';
const Banner = () => {
    const [movies, setMovies] = useState([]);
    const path = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData(){
            const requests = await instance.get(request.fetchNetflix);
            setMovies(requests.data.results[Math.floor(Math.random() * (requests.data.results.length - 1))]); 
        }
        fetchData();
    }, [])
    console.log(movies);


    return (
         <div className="banner" style={{
             backgroundSize:"cover",
             backgroundImage:`url(${path}${movies?.backdrop_path})`,
             backgroundPosition:"center",
         }}>  
          <div className="banner_content">
            <h1 className="banner_title">{movies?.title || movies?.name || movies?.original_name}</h1>
            <div className="banner_btn">
                <button className="btn_watch"> Watch </button>
                <button className="btn_addmylist">My List</button>
            </div>
            <h2 className="banner_overview">{movies.overview}</h2>
          </div> 
            
        </div>
    )
}

export default Banner
