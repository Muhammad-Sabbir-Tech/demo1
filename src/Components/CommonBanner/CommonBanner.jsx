import React from 'react';
import {Link} from "react-router-dom";

function CommonBanner(props) {
    return (
        <>
            <section className="hero-wrap hero-wrap-2 pb-5 ">
                <div className="overlay" />
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center mt-5">
                            <p className="breadcrumbs"><span className="me-2"><Link to="/">Home <i className="fa fa-chevron-right" /></Link></span> <span>{props.title} <i className="fa fa-chevron-right" /></span></p>
                            <h1 className="mb-0 bread">{props.title}</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CommonBanner;