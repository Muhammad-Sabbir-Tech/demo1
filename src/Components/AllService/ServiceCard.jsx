import React from 'react';

function ServiceCard(props) {
    return (
        <>
            <section className="ftco-section ftco-no-pt bg-light   pb-0">
                <div className="container-xl ">
                    <div className="row g-2 wrap pt-5">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch services-wrap">
                            <div className="services">
                                <div className="icon"><span className="flaticon-bar-chart"></span></div>
                                <div className="text">
                                    <h2>We have experience for your project</h2>
                                    <p className="mb-0">Far far away, behind the word mountains, far from the countries
                                        Vokalia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch services-wrap">
                            <div className="services active">
                                <div className="icon"><span className="flaticon-piggy-bank"></span></div>
                                <div className="text">
                                    <h2>We know how to save your time and money</h2>
                                    <p className="mb-0">Far far away, behind the word mountains, far from the countries
                                        Vokalia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch services-wrap">
                            <div className="services active-2">
                                <div className="icon"><span className="flaticon-headphone"></span></div>
                                <div className="text">
                                    <h2>We will bring your new pre-qualified customer</h2>
                                    <p className="mb-0">Far far away, behind the word mountains, far from the countries
                                        Vokalia.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch services-wrap">
                            <div className="services active-3">
                                <div className="icon"><span className="flaticon-rocket"></span></div>
                                <div className="text">
                                    <h2>We can boost your project sales</h2>
                                    <p className="mb-0">Far far away, behind the word mountains, far from the countries
                                        Vokalia.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default ServiceCard;