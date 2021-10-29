import React from 'react';

import bannerImage from '../../Asset/Images/hero-1.png'
import {Col, Container, Row} from "react-bootstrap";

function HomeBanner(props) {
    return (
        <>
            <section className="hero-wrap">
                <div className="overlay"/>
                <Container >
                    <Row
                        className="  slider-text align-items-center justify-content-end align-items-stretch">
                        <Col md={6} lg={4} className=" text d-flex align-items-center">
                            <div className="desc">
                                <h1 >We Are Digital Agency Helping To Boost Your sales</h1>
                                <p>A small river named Duden flows by their place and supplies it with the necessary
                                    regelialia.</p>
                                <p className="d-flex align-items-center mt-4">
                                    <a href="#" className="btn btn-white d-flex align-items-center py-3 px-4">Start A
                                        Project</a>
                                    <a href="#" className="btn btn-custom d-flex"><span className="ion-ios-play me-3"/>Watch
                                        the Video</a>
                                </p>
                            </div>
                        </Col>
                        <Col lg={6} md={8}  className=" d-flex align-items-end">
                            <img src={bannerImage} className="img-fluid" alt=""
                                 data-pagespeed-url-hash={1506146930}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default HomeBanner;