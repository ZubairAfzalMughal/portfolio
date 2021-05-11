import React from 'react';
import logo from '../components/logo.png';
function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                       <img src={logo} alt="logo" className="logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">About Us </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="">Contact Us</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    );
}
export default NavBar;

