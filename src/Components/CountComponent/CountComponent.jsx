import React, {useState} from 'react';
import AOS from "aos";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

function CountComponent(props) {
    const [didViewCountUp, setDidViewCountUp] = useState(false)
    AOS.init();
    const onVisibilityChange = (isVisible) => {

        if (isVisible) {
            setDidViewCountUp(true)
        } else {
            setDidViewCountUp(false)
        }
    }
    return (
        <>
            <section className="ftco-section-counter img" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
                <div className="overlay"/>
                <div className="container">
                    <div className="row section-counter" data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease"
                         data-aos-duration="600">
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="counter-wrap-2">
                                <h2 className="number"><span className="countup">
                                    <VisibilitySensor
                                        scrollCheck={true}
                                        onChange={onVisibilityChange}
                                        >
                                        <CountUp start={0} end={didViewCountUp ? 60 : 0} duration={5}/>
                                    </VisibilitySensor>
                                </span></h2>
                                <span className="caption">Year of Experienced</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="counter-wrap-2">
                                <h2 className="number"><span className="countup">
                                    <VisibilitySensor
                                        scrollCheck={true}
                                        onChange={onVisibilityChange}
                                    >
                                        <CountUp start={0} end={didViewCountUp ? 9200 : 0} duration={5}/>
                                    </VisibilitySensor>
                                </span></h2>
                                <span className="caption">Satisfied Customers </span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="counter-wrap-2">
                                <h2 className="number"><span className="countup">
                                    <VisibilitySensor
                                        scrollCheck={true}
                                        onChange={onVisibilityChange}
                                    >
                                            <CountUp start={0} end={didViewCountUp ? 5800 : 0} duration={5}/>
                                        </VisibilitySensor>
                                </span></h2>
                                <span className="caption">Project Completed</span>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-3 d-flex align-items-stretch">
                            <div className="counter-wrap-2">
                                <h2 className="number"><span className="countup">
                                    <VisibilitySensor
                                        scrollCheck={true}
                                        onChange={onVisibilityChange}
                                    >
                                        <CountUp start={0} end={didViewCountUp ? 1000: 0} duration={5}/>
                                    </VisibilitySensor>
                                </span></h2>
                                <span className="caption">Get Awards</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default CountComponent;