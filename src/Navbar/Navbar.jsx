import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export default function Navbar() {


  return <>
  <nav className="navbar navbar-expand-lg container-fluid py-4">
  <div className="container">
    <NavLink className="navbar-brand text-white fw-bold logo" to="">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive==true? "nav-link activeLink text-white fw-bold text-uppercase ms-3" : "nav-link text-white fw-bold text-uppercase ms-3"} aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=> isActive==true? "nav-link activeLink text-white fw-bold text-uppercase ms-3" : "nav-link text-white fw-bold text-uppercase ms-3"} to="protfolio">Portfolio</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({isActive})=> isActive==true? "nav-link activeLink text-white fw-bold text-uppercase ms-3" : "nav-link text-white fw-bold text-uppercase ms-3"} to="contact">Contact</NavLink>
        </li>


      </ul>

    </div>
  </div>
</nav>
  </>
}
