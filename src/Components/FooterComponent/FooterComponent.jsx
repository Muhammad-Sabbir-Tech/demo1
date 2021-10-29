import React from 'react';
import FooterCredit from "./FooterCredit";

function FooterComponent(props) {
    return (
        <>
            <footer className="ftco-footer">
                <div className="overlay" />
                <div className="container-xl">
                    <div className="row mb-5 justify-content-between">
                        <div className="col-md-6 col-lg">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2 logo d-flex">
                                    <a className="navbar-brand" href="index.html">
                                        Saita.
                                    </a>
                                </h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <ul className="ftco-footer-social mt-4">
                                    <li><a href="#"><span className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><span className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><span className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Recent Posts</h2>
                                <div className="block-21 mb-4 d-flex">
                                    <a className="blog-img img rounded" style={{backgroundImage: 'url(images/image_1.jpg)'}} />
                                    <div className="text">
                                        <div className="meta">
                                            <div><a href="#"><span className="fa fa-calendar" /> Mar. 01, 2021</a></div>
                                            <div><a href="#"><span className="fa fa-user" /> Admin</a></div>
                                        </div>
                                        <h3 className="heading"><a href="#">Improving Your Design &amp; Programming Skills</a></h3>
                                    </div>
                                </div>
                                <div className="block-21 mb-4 d-flex">
                                    <a className="blog-img img rounded" style={{backgroundImage: 'url(images/image_2.jpg)'}} />
                                    <div className="text">
                                        <div className="meta">
                                            <div><a href="#"><span className="fa fa-calendar" /> Mar. 01, 2021</a></div>
                                            <div><a href="#"><span className="fa fa-user" /> Admin</a></div>
                                        </div>
                                        <h3 className="heading"><a href="#">Improving Your Design &amp; Programming Skills</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Services</h2>
                                <div className="d-md-flex">
                                    <ul className="list-unstyled w-100">
                                        <li><a href="#"><span className="ion ion-ios-arrow-round-forward me-2" />Creative Desgin</a></li>
                                        <li><a href="#"><span className="ion ion-ios-arrow-round-forward me-2" />Digital Marketing</a></li>
                                        <li><a href="#"><span className="ion ion-ios-arrow-round-forward me-2" />Application Design</a></li>
                                        <li><a href="#"><span className="ion ion-ios-arrow-round-forward me-2" />Web Development</a></li>
                                    </ul>
                                    <ul className="list-unstyled w-100">
                                        <li><a href="#"><span className="ion ion-ios-arrow-round-forward me-2" />Branding</a></li>
                                        <li><a href="#"><span className="ion ion-ios-arrow-round-forward me-2" />Graphic Design</a></li>
                                        <li><a href="#"><span className="ion ion-ios-arrow-round-forward me-2" />Web Design</a></li>
                                        <li><a href="#"><span className="ion ion-ios-arrow-round-forward me-2" />Email Marketing Consulting</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Have a Questions?</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        <li><span className="icon fa fa-map marker" /><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                                        <li><a href="#"><span className="icon fa fa-phone" /><span className="text">+2 392 3929 210</span></a></li>
                                        <li><a href="#"><span className="icon fa fa-paper-plane" /><span className="text"><span className="__cf_email__" data-cfemail="244d4a424b645d4b5156404b49454d4a0a474b49">[email&nbsp;protected]</span></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*footer credit initial here*/}
                <FooterCredit/>

            </footer>
        </>
    );
}

export default FooterComponent;