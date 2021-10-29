import React from 'react';
import {Link} from "react-router-dom";
import AOS from "aos";

function GetStartComponent(props) {
    AOS.init()
    return (
        <>
            <section className="ftco-intro-2 img" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
                <div className="overlay" />
                <div className="container-xl">
                    <div className="row justify-content-center" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                        <div className="col-lg-10 col-xl-10">
                            <div className="row" >
                                <div className="col-md-8 d-flex align-items-center">
                                    <div>
                                        <span className="subheading">Prepare for takeoff</span>
                                        <h1 className="mb-md-0 mb-4">Looking for business opportunity?</h1>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-items-center">
                                    <p className="mb-0"><Link to="/contact" className="btn btn-white py-md-4 py-3 px-md-5 px-4">Get Started</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GetStartComponent;