import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container-fluid shadow  bg-dark">
   <nav className=" container navbar  navbar-expand-lg navbar-dark ">
  <div className="container-fluid">
    <h5 className="navbar-brand text-primary"> ALI HAMZA</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link " to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/counter">Stop_Watch</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/service">Service</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>

  )
}

export default Navbar
