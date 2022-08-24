
import React , { useEffect, useState} from "react";

import Movie from "./components/Movie";


const FEATURED_API ="https://api.themoviedb.org/3/movie/550?api_key=378cdbed516f65843d50de45ec4d47ae";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=378cdbed516f65843d50de45ec4d47ae&query="

function App() {
  const movies = ['1', '2', '3'];

  return <div> 
    {movies.map(movie =>(
      <Movie/>
    ))}
    </div>
}
  
export default App;
