import React from 'react'
import ReactDOM from 'react-dom';

function Header() {
    return (
            <header className="header">
                <nav className="navbar navbar-expand-md navbar-light fixed-top scrolling-navbar bg-primary pt-0 pb-0">
                    <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <i className="fab fa-mdb fa-3x" alt="mdb logo"></i>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                        aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="basicExampleNav">

                        <ul className="navbar-nav ml-auto collapsible collapsible-accordion">
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link waves-effect text-light collapsible-header" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="true">
                                    <span className="badge badge-pill red">1</span>
                                    <i className="fas fa-bell border border-light rounded-circle p-2 text-light"></i>
                                </a>
                                <div className="dropdown-menu collapsible-body" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#!">Action</a>
                                <a className="dropdown-item" href="#!">Another action</a>
                                <a className="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link waves-effect text-light collapsible-header" id="navbarDropdownMenuLink3" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="true">
                                    <span className="text-light mr-2">Truong Npt</span>
                                    <i className="fas fa-user border border-light rounded-circle p-2 text-light"></i>
                                </a>
                                <div className="dropdown-menu collapsible-body" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#!">Action</a>
                                <a className="dropdown-item" href="#!">Another action</a>
                                <a className="dropdown-item" href="#!">Something else here</a>
                                </div>
                            </li>
                        </ul>

                    </div>
                    </div>
                </nav>
            </header>
    );
}

export default Header;
