import React from 'react';
import TopNav from "../Components/TopNav/TopNav";
import CommonBanner from "../Components/CommonBanner/CommonBanner";
import ServiceCard from "../Components/AllService/ServiceCard";
import AllService from "../Components/AllService/AllService";
import GetStartComponent from "../Components/GetStartComponent/GetStartComponent";
import FooterComponent from "../Components/FooterComponent/FooterComponent";

function ServicePage(props) {
    return (
        <>
            <TopNav title="service"/>
            <CommonBanner title="Service"/>
            <ServiceCard/>
            <AllService/>
            <GetStartComponent/>
            <FooterComponent/>
        </>
    );
}

export default ServicePage;