import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../Hooks/useFetch'
import { Card } from '../component'

const Search = ({apiPath}) => {
  const [searchparams]=useSearchParams()
  const queryterm=searchparams.get("q")
  // console.log(queryterm)
  const{movies}=useFetch(apiPath,queryterm)
  // console.log(movies)
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

export default Search