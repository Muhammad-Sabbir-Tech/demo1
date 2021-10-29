import React from 'react';
import HomeBanner from "../Components/HomeBanner/HomeBanner";
import TopNav from "../Components/TopNav/TopNav";
import HomeBannerCard from "../Components/HomeBannerCard/HomeBannerCard";
import AboutComponent from "../Components/AboutComponent/AboutComponent";
import CountComponent from "../Components/CountComponent/CountComponent";
import ServiceComponent from "../Components/ServiceComponent/ServiceComponent";
import FeatureProjects from "../Components/FeaturedProject/FeatureProjects";
import TeamComponent from "../Components/TeamComponent/TeamComponent";
import RecentBlogComponent from "../Components/RecentBlogComponent/RecentBlogComponent";
import TestimonialComponent from "../Components/TestimonialComponent/TestimonialComponent";
import FooterComponent from "../Components/FooterComponent/FooterComponent";
import GetStartComponent from "../Components/GetStartComponent/GetStartComponent";

function HomePage(props) {
    return (
        <>
            <TopNav title="Home page"/>
            <HomeBanner/>
            <HomeBannerCard/>
            <AboutComponent/>
            <CountComponent/>
            <ServiceComponent/>
            <FeatureProjects/>
            <TeamComponent/>
            <RecentBlogComponent/>
            <TestimonialComponent/>
            <GetStartComponent/>
            <FooterComponent/>
        </>
    );
}

export default HomePage;