import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                {/* <Link to="About.js"> */}
                                <Link className="nav-link" to="/About">About</Link>
                                {/* </Link> */}
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                            {/* <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li> */}
                        </ul>
                        <button type="button" onClick={props.handleColorMode} className="btn btn-success  border border-primary mx-4">{props.btnText2}</button>

                        <button type="button" onClick={props.handleDarkMode} className="btn btn-dark  border border-primary">{props.btnText1}</button>

                    </div>
                </div>
            </nav>
        </>

    )
}

Navbar.protoType = {
    title: PropTypes.string.isRequired,
}

Navbar.defaultProps = {
    title: 'Set title Here'
};