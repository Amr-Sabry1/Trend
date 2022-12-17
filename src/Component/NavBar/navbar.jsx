import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
let uname ="";
if (localStorage.getItem('userName') == null) {
    uname=""
} else {
    uname = localStorage.getItem('userName')

}
let navigate = useNavigate()

function deleteuname(){
  localStorage.removeItem("userName")
 navigate("/")
  
}
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand fw-bold text-white"  to="home">TREND</Link>
    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars fs-4 "></i>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent1">
      {uname?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to='home'>Home</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to='movies'>Movies</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to='tvshows'>TvShows</Link>
        </li>
  
        <li className="nav-item">
          <Link className="nav-link" to='people'>People</Link>
        </li>
      
          <li className="nav-item">

          <Link className="nav-link" to='contact'>Contact</Link>
        </li>
      
      </ul>:""}
   
     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       {uname? <>     <li className="nav-item">
          <p className="nav-link m-0 text-uppercase text-white" >{uname}</p>
        </li><li className="nav-item">
          <a className="nav-link text-bg-primary text-center bg-opacity-25 rounded-3 p-2" href='/' onClick={()=>deleteuname()} >Log Out</a>
        </li>
       
        </>:<><li className="nav-item">
          <Link className="nav-link" to='register'>Register</Link>
        </li><li className="nav-item">
          <Link className="nav-link" to='/'>LogIn</Link>
        </li></> 
             }
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
