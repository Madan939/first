import React, {} from 'react'
import { Card } from '../component'
import { useFetch } from '../Hooks/useFetch'

const MovieList = ({apiPath}) => {
  const{movies}=useFetch(apiPath)
console.log(movies)
  //   const [movies,setmovies]=useState([])
//   console.log("hello")
//   useEffect(()=>{
//     async function fetchMovies(){
// const res=await fetch('https://api.themoviedb.org/3/discover/movie?api_key=954f002a54d0dc5a351d4501e61b0ab2')
// const data=await res.json()
// // console.log(data.results)
// setmovies(data.results)
//     }
//     fetchMovies()
//   },[])
  return (
    <section className='mx-auto'>
    <div className='row row-cols-1 row-cols-md-3 g-4'>
    {
      movies.map((movie)=>(
        <Card key={movie.id} movie={movie}/>
      ))
      }

    </div>
    </section>
  )
}

export default MovieList