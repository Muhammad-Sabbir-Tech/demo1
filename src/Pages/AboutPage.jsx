import React from 'react';
import TopNav from "../Components/TopNav/TopNav";
import CommonBanner from "../Components/CommonBanner/CommonBanner";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import CountComponent from "../Components/CountComponent/CountComponent";
import AllTeamComponent from "../Components/AllTeamComponent/AllTeamComponent";
import TestimonialComponent from "../Components/TestimonialComponent/TestimonialComponent";
import GetStartComponent from "../Components/GetStartComponent/GetStartComponent";
import FooterComponent from "../Components/FooterComponent/FooterComponent";

function AboutPage(props) {
    return (
        <>
            <TopNav title="About page"/>
            <CommonBanner title="About us"/>
            <AboutComponent/>
            <CountComponent/>
            <AllTeamComponent/>
            <TestimonialComponent/>
            <GetStartComponent/>
            <FooterComponent/>
        </>
    );
}

export default AboutPage;