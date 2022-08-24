import React from "react";



const IMG_API = "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";
 const Movie =({tittle, poster_path, overview, vote_average}) => (
    <div className="movie"> 
    <img src={IMG_API + poster_path}  alt ={tittle} />

    </div>
 );

 export default Movie;
