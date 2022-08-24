
import React , { useEffect, useState} from "react";

import Movie from "./components/Movie";


const FEATURED_API ="https://api.themoviedb.org/3/movie/550?api_key=378cdbed516f65843d50de45ec4d47ae";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=378cdbed516f65843d50de45ec4d47ae&query="

function App() {
  const [ movies, setMovies] = useState([]);

  useEffect( () => {
    fetch(FEATURED_API)
           .then((res) =>res.json())
           .then((data) => {
            setMovies(data.results);
    });
    
    
  }, []);





  return <div>
    {
      movies.length > 0 && 
         movies.map((movie) =>
        <Movie key ={movie.id}  {...movie}/>
      )
    }
  </div>

}

export default App;
