import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AOS from "aos";

function TestimonialComponent(props) {
    AOS.init()
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="ftco-section testimony-section bg-light">
                <div className="container-xl">
                    <div className="row justify-content-center pb-4" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                        <div className="col-lg-7 text-center heading-section" >
                            <span className="subheading">Testimonial</span>
                            <h2 className="mb-2">Happy Customers</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                            <Slider {...settings} >
                                <div>
                                    <div className="testimony-wrap mx-2 mt-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                                                <div className="ps-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimony-wrap mx-2 mt-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                                                <div className="ps-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimony-wrap mx-2 mt-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                                                <div className="ps-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimony-wrap mx-2 mt-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                                                <div className="ps-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimony-wrap mx-2 mt-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                                                <div className="ps-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimony-wrap mx-2 mt-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                                                <div className="ps-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimony-wrap mx-2 mt-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                                                <div className="ps-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="testimony-wrap mx-2 mt-4">
                                        <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left" /></div>
                                        <div className="text">
                                            <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                            <div className="d-flex align-items-center">
                                                <div className="user-img" style={{backgroundImage: 'url(images/person_1.jpg)'}} />
                                                <div className="ps-3">
                                                    <p className="name">Roger Scott</p>
                                                    <span className="position">Marketing Manager</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>






                            <div className="carousel-testimony">
                                <div className="item">

                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TestimonialComponent;