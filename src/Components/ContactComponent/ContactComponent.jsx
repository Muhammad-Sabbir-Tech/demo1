import React from 'react';

function ContactComponent(props) {
    return (
        <>
            <section className="ftco-section bg-light">
                <div className="container-xl">
                    <div className="row no-gutters justify-content-center">
                        <div className="col-lg-10">
                            <div className="wrapper">
                                <div className="row g-0">
                                    <div className="col-lg-12">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3>Let's get in touch</h3>
                                            <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <div className="row mb-4">
                                                <div className="col-md-4">
                                                    <div className="dbox w-100 d-flex align-items-start">
                                                        <div className="text">
                                                            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="dbox w-100 d-flex align-items-start">
                                                        <div className="text">
                                                            <p><span>Email:</span> <a href="/cdn-cgi/l/email-protection#650c0b030a251c0a1017160c11004b060a08"><span className="__cf_email__" data-cfemail="51383f373e11283e2423223825347f323e3c">[email&nbsp;protected]</span></a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="dbox w-100 d-flex align-items-start">
                                                        <div className="text">
                                                            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <form id="contactForm" name="contactForm" className="contactForm">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <div className="form-group">
                                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea name="message" className="form-control" id="message" cols={30} rows={7} placeholder="Create a message here" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                                            <div className="submitting" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="w-100 social-media mt-5">
                                                <h3>Follow us here</h3>
                                                <p>
                                                    <a href="#">Facebook</a>
                                                    <a href="#">Twitter</a>
                                                    <a href="#">Instagram</a>
                                                    <a href="#">Dribbble</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ContactComponent;