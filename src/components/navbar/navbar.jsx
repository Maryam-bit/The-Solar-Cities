import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-light p-4 bg-light shadow fixed-top">
                <a className="navbar-brand" href="#"><b>Solar City</b></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <Link to='/'>
                            <li className="nav-item active">
                                Home
                            </li>
                        </Link>
                        <Link to='/portfolio'>
                            <li className="nav-item">
                                Portfolio
                            </li>
                        </Link>
                        <Link to='/contact'>
                            <li className="nav-item mr-4">
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>
                <a href="tel:03215561073">
                    <button className='btn contact-btn'><i className="fa fa-phone" aria-hidden="true"></i> 03215561073</button>
                </a>
            </nav>
        </div>
    )
}
export default Navbar