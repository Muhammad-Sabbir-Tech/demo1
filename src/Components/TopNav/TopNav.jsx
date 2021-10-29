import React from 'react';
import {Link} from "react-router-dom";

function TopNav(props) {
    return (
        <>
            <title>{props.title}</title>
            <nav  className="navbar navbar-expand-lg topNav  ftco-navbar-light">
                <div className="container-xl">
                    <Link to="/" className="navbar-brand brand-name" href="index.html">
                        Saita<small>.</small>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"/> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link  className="mx-3 px-0 nav-link" to="/">Home</Link></li>
                            <li className="nav-item"><Link   className="mx-3 px-0 nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link   className="mx-3 px-0 nav-link" to="/project">Project</Link></li>
                            <li className="nav-item"><Link   className="mx-3 px-0 nav-link" to="/service">Service</Link></li>
                            <li className="nav-item"><Link   className="mx-3 px-0 nav-link" to="/blog">Blog</Link></li>
                            <li className="nav-item"><Link   className="mx-3 px-0 nav-link" to="/contact">Contact</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default TopNav;