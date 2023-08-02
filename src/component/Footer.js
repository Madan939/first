import React from 'react'
import{default as logo} from "../component/images/29c6fee-blue_short.svg"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="bg-body-secondary">
    <div className="container m-2">
        <div className="row p-2">
            <div className="col-8 col-md-6 ">
                <Link to="/"><img src={logo} style={{height:"60px",width:"150px"}} alt='logo'/></Link>
          
            <p className='h5 ab'><u>About us:</u></p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repudianda hfxsgfsfgfv gcjgffjhcgdd cftddt hyguhjb juuii hih jhikn.</p>
            </div>
            <div className="col-4 col-md-6">
               
                <h5 className='mt-3'><u>Follow us on:</u></h5>
                <ul className="list-unstyled mt-2">
                    <li  className='a'><a href="https://www.facebook.com/your-page"target='_blank' rel="noreferrer"><i className="fa-brands fa-facebook" style={{color:"black"}}></i></a></li>
                    <li  className='a' ><a href="https://www.linkedin.com/in/your-profile"target='_blank' rel="noreferrer" ><i className="fa-brands fa-linkedin" style={{color:"black"}}></i></a></li>
                    <li  className='a'><a href="https://instagram.com/your-handle" target='_blank'  rel="noreferrer"><i className="fa-brands fa-instagram" style={{color:"black"}}></i></a></li>
                </ul>
            </div>
        </div>
        <p className='h5 text-center p-2'>&copy;2023 All Rights Reserved Cinema App</p>
    </div>
</footer>
  )
}

export default Footer