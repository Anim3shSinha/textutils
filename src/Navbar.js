import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';

export default function Navbar(props) {

  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/* <Link className="navbar-brand" to="/Textform">{props.title}</Link> */}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/Textform">Home </Link> */}
          <a className="nav-link active" aria-current="page" href="#">Home </a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/About">{props.about}</Link> */}
          <a className="nav-link" href="#">{props.about}</a>
        </li>
      </ul>
    </div>
    <div className={`form-check form-switch text-${props.mode==='light'? 'Dark' : 'light'}`}>
      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
  </div>
</div>
</nav>
    </>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, 
                    about: PropTypes.string}; 

Navbar.defaultProps = {
                        title: 'Set title here',
                        about: 'About text here'
                      };
