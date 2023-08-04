import React, { } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from './images/29c6fee-blue_short.svg'
const Header = () => {
  const navigate=useNavigate()
  const submit=(e)=>{
    e.preventDefault()
    const queryterm=e.target.search.value
    e.target.reset()
    return navigate(`/search?q=${queryterm}`)
  }
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="navbar-brand" to="/">
    <img src={logo} style={{height:"50px",width:"110px"}} alt='logo'/>
    </Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie/popular">Popular movie</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie/top">Top Rated</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/movie/upcoming">Upcoming</NavLink>
        </li>
      </ul>
      <form className="d-flex" role='search'onSubmit={submit} >
        <input className="form-control me-2" type="text" name='search' placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"  >Search</button>
      </form>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header