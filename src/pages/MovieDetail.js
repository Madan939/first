import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const parse=useParams()
  const[data,setdata]=useState({})
 // const[res,setres]=useState({})
useEffect(()=>{
  async function fetchmovie(){
    const res=await fetch(`https://api.themoviedb.org/3/movie/${parse.id}?api_key=954f002a54d0dc5a351d4501e61b0ab2`)
    const json=await res.json()
  setdata(json)
  }
fetchmovie()
},[parse.id])
 console.log(data)
//console.log(res)
const { title, overview, poster_path,release_date,runtime,tagline } = data
const image = `https://image.tmdb.org/t/p/w500/${poster_path}`
// const backimage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`
const hours = Math.floor(runtime / 60);
const minutes = runtime % 60;
  return (
    <>
   
<div className="card bg-dark ">
  <div className="row m-3 text-light">
    <div className="col-12 col-md-3 ">
      <img src={image} className="card-img-top img-fluid " alt="..."/>
    </div>
    <div className="col-12 col-md-9 abc">
        <p className="h1 card-title ab">{title}</p>
        <p className='card-text ab'>{release_date}({data.production_countries &&data.production_countries.map((item)=>item.iso_3166_1)}).{hours}h {minutes}m</p>
        <p className='card-text ab' >{data.genres &&data.genres.map((item)=><p className='btn btn-outline-light text-ligth m-1'>{item.name}</p>)}</p>
        <p className="card-text c ">{tagline}</p>
        <p className="h4 card-text ab">overview</p>
        <p className='card-text ab'>{overview}</p>    
    </div>
  </div>
  </div>


    </>
  )
}

export default MovieDetail
