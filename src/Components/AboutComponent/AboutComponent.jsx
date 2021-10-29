import React from 'react';
import {Container, Row} from "react-bootstrap";

import AOS from 'aos';


function AboutComponent(props) {
    AOS.init();
    return (
        <>
            <section className="ftco-section ftco-no-pt mt-5">
                <div className="container-xl">
                    <div   data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600" className="row g-lg-5">
                        <div className="col-lg-6 d-flex align-items-center" >
                            <div className="img about-img w-100" style={{backgroundImage: 'url(images/about.jpg)'}}>
                            </div>
                        </div>
                        <div className="col-lg-6 heading-section d-flex align-items-center" >
                            <div className="mt-0">
                                <span className="subheading">About Us</span>
                                <h2 className="mb-4">We Design, Build Brands &amp; Digital Projects</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                <p className="mt-4"><a href="#" className="btn btn-primary py-3 px-4">Learn More</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutComponent;