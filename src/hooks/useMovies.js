import { useState } from "react";
import { useEffect } from "react";
import { apiApi, apiKey} from "../Useful/linksAPI";

export function useMovies (){
    const [movies, setMovies] = useState([]);
  

    useEffect(() => {
        const topRatedUrl = `${apiApi}top_rated?${apiKey}`;
        getTopRatedMovies(topRatedUrl);
      }, []);

    const getTopRatedMovies = async (url) => {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      console.log(data.results)
    };
 
    return {movies }
 
}