import React from 'react';
import AOS from "aos";

function RecentBlogComponent(props) {
    AOS.init()
    return (
        <>
            <section className="ftco-section">
                <div className="container-xl">
                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                        <div className="col-lg-7 heading-section text-center" >
                            <span className="subheading">Our Blog</span>
                            <h2>Recent From Blog</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease" data-aos-duration="600">
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div className="blog-entry justify-content-end" >
                                <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_1.jpg")'}}>
                                </a>
                                <div className="text">
                                    <p className="meta"><span><i className="fa fa-user me-1" />Admin</span> <span><i className="fa fa-calendar me-1" />Mar. 01, 2021</span> <span><a href="#"><i className="fa fa-comment me-1" /> 3 Comments</a></span></p>
                                    <h3 className="heading mb-3"><a href="#">Improving Your Design &amp; Programming Skills</a></h3>
                                    <p>A small river named Duden flows by their place.</p>
                                    <a href="blog.html" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div className="blog-entry justify-content-end" >
                                <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_2.jpg")'}}>
                                </a>
                                <div className="text">
                                    <p className="meta"><span><i className="fa fa-user me-1" />Admin</span> <span><i className="fa fa-calendar me-1" />Mar. 01, 2021</span> <span><a href="#"><i className="fa fa-comment me-1" /> 3 Comments</a></span></p>
                                    <h3 className="heading mb-3"><a href="#">Improving Your Design &amp; Programming Skills</a></h3>
                                    <p>A small river named Duden flows by their place.</p>
                                    <a href="blog.html" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 d-flex">
                            <div className="blog-entry justify-content-end" >
                                <a href="blog-single.html" className="block-20 img" style={{backgroundImage: 'url("images/image_3.jpg")'}}>
                                </a>
                                <div className="text">
                                    <p className="meta"><span><i className="fa fa-user me-1" />Admin</span> <span><i className="fa fa-calendar me-1" />Mar. 01, 2021</span> <span><a href="#"><i className="fa fa-comment me-1" /> 3 Comments</a></span></p>
                                    <h3 className="heading mb-3"><a href="#">Improving Your Design &amp; Programming Skills</a></h3>
                                    <p>A small river named Duden flows by their place.</p>
                                    <a href="blog.html" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RecentBlogComponent;