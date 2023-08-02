import  { useEffect, useState } from 'react'
//https://api.themoviedb.org/3/discover/movie?api_key=954f002a54d0dc5a351d4501e61b0ab2
export const useFetch = (apiPath,queryterm="") => {
 //console.log(apiPath,queryterm)
  const [movies, setmovies] = useState([])
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryterm}`
  //console.log(url)
  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.results)
      setmovies(data.results)
    }
    fetchMovies()
  }, [url])
  return {
    movies
  }


}
