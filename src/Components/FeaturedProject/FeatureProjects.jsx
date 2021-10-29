import React from 'react';
import AOS from "aos";

function FeatureProjects(props) {
    AOS.init()
    return (
        <>
            <section className="ftco-gallery ftco-no-pb ftco-section">
                <div className="container" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                    <div className="row mb-5 justify-content-between" >
                        <div className="col-md-6" >
                            <blockquote className="blockquote">
                                <p>"Marketers need to build digital relationships and reputation before closing a sale"</p>
                            </blockquote>
                            <p><a href="#" className="btn btn-quarternary btn-outline-quarternary py-3 px-4">Request A Quote</a></p>
                        </div>
                        <div className="col-md-4" >
                            <div className="progress-wrap">
                                <h3>Design &amp; Development</h3>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar"  style={{width: '70%'}}>
                                        <span>70%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <h3>Branding</h3>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width: '85%'}}>
                                        <span>85%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="progress-wrap">
                                <h3>Marketing</h3>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar"  style={{width: '75%'}}>
                                        <span>75%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                        <div className="col-lg-5 heading-section text-center mb-5" >
                            <span className="subheading">Projects</span>
                            <h2 className="mb-4">Featured Projects</h2>
                        </div>
                    </div>
                    <div className="row mb-4 justify-content-center" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                        <div className="col-md-12 text-center">
                            <p className="menu">
                                <a href="#">All</a>
                                <a href="#" className="active">Web Design</a>
                                <a href="#">Web Development</a>
                                <a href="#">Branding</a>
                                <a href="#">Marketing</a>
                                <a href="#">UI/UX Design</a>
                            </p>
                        </div>
                    </div>
                    <div className="row g-1 justify-content-center" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                        <div className="col-md-4 col-lg-3" >
                            <div className="gallery-wrap">
                                <a href="images/gallery-1.jpg" className="gallery img d-flex align-items-end justify-content-center glightbox" style={{backgroundImage: 'url(images/gallery-1.jpg)'}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search" /></div>
                                </a>
                                <div className="text">
                                    <h2 className="mb-0">Innovative Design</h2>
                                    <span className="subheading">Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3" >
                            <div className="gallery-wrap">
                                <a href="images/gallery-2.jpg" className="gallery img d-flex align-items-end justify-content-center glightbox" style={{backgroundImage: 'url(images/gallery-2.jpg)'}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search" /></div>
                                </a>
                                <div className="text">
                                    <h2 className="mb-0">Innovative Design</h2>
                                    <span className="subheading">Web Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3">
                            <div className="gallery-wrap">
                                <a href="images/gallery-3.jpg" className="gallery img d-flex align-items-end justify-content-center glightbox" style={{backgroundImage: 'url(images/gallery-3.jpg)'}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search" /></div>
                                </a>
                                <div className="text">
                                    <h2 className="mb-0">Innovative Design</h2>
                                    <span className="subheading">Digital Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3" >
                            <div className="gallery-wrap">
                                <a href="images/gallery-4.jpg" className="gallery img d-flex align-items-end justify-content-center glightbox" style={{backgroundImage: 'url(images/gallery-4.jpg)'}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search" /></div>
                                </a>
                                <div className="text">
                                    <h2 className="mb-0">Innovative Design</h2>
                                    <span className="subheading">Branding</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3" >
                            <div className="gallery-wrap">
                                <a href="images/gallery-5.jpg" className="gallery img d-flex align-items-end justify-content-center glightbox" style={{backgroundImage: 'url(images/gallery-5.jpg)'}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search" /></div>
                                </a>
                                <div className="text">
                                    <h2 className="mb-0">Innovative Design</h2>
                                    <span className="subheading">Web Design</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3" >
                            <div className="gallery-wrap">
                                <a href="images/gallery-6.jpg" className="gallery img d-flex align-items-end justify-content-center glightbox" style={{backgroundImage: 'url(images/gallery-6.jpg)'}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search" /></div>
                                </a>
                                <div className="text">
                                    <h2 className="mb-0">Innovative Design</h2>
                                    <span className="subheading">Web Development</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3" >
                            <div className="gallery-wrap">
                                <a href="images/gallery-7.jpg" className="gallery img d-flex align-items-end justify-content-center glightbox" style={{backgroundImage: 'url(images/gallery-7.jpg)'}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search" /></div>
                                </a>
                                <div className="text">
                                    <h2 className="mb-0">Innovative Design</h2>
                                    <span className="subheading">Digital Marketing</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-3" >
                            <div className="gallery-wrap">
                                <a href="images/gallery-8.jpg" className="gallery img d-flex align-items-end justify-content-center glightbox" style={{backgroundImage: 'url(images/gallery-8.jpg)'}}>
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-search" /></div>
                                </a>
                                <div className="text">
                                    <h2 className="mb-0">Innovative Design</h2>
                                    <span className="subheading">Branding</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FeatureProjects;