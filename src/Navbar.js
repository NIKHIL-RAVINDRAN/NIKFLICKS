import React from 'react'
import './Navbar.css'
import {
    Link
} from "react-router-dom";

function Navbar() {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark gradient-custom fixed-top py-3">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home"><strong>NIKFLICKS</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">HOME</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    CATEGORIES
                                </Link>
                                <ul className="dropdown-menu gradient-custom" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/netflixoriginals">NETFLIX ORIGINALS</Link></li>
                                    <li><Link className="dropdown-item" to="/toprated">TOP RATED</Link></li>
                                    <li><Link className="dropdown-item" to="/comedyshows">COMEDY SHOWS</Link></li>
                                    <li><Link className="dropdown-item" to="/romanticshows">ROMANTIC SHOWS</Link></li>
                                    <li><Link className="dropdown-item" to="/horrorshows">HORROR SHOWS</Link></li>
                                    <li><Link className="dropdown-item" to="/actionshows">ACTION SHOWS</Link></li>
                                    <li><Link className="dropdown-item" to="/documentaries">DOCUMENTARIES</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">ABOUT US</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar