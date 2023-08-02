import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MovieDetail, MovieList, PageNotFound, Search } from '../pages'

const Allroute = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MovieList apiPath="movie/now_playing"/>}/>
                <Route path='/movie/:id' element={<MovieDetail/>}/>
                <Route path='/movie/popular' element={<MovieList apiPath="movie/popular"/>}/>
                <Route path='/movie/top' element={<MovieList apiPath="movie/top_rated"/>}/>
                <Route path='/search' element={<Search apiPath="search/movie"/>}/>
                <Route path='/movie/upcoming' element={<MovieList apiPath="movie/upcoming"/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </>
    )
}

export default Allroute