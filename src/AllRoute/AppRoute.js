import React from 'react';
import {Route} from "react-router";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProjectPage from "../Pages/ProjectPage";
import ServicePage from "../Pages/ServicePage";
import BlogPage from "../Pages/BlogPage";
import ContactPage from "../Pages/ContactPage";

function AppRoute(props) {
    return (
        <>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/project" component={ProjectPage}/>
            <Route exact path="/service" component={ServicePage}/>
            <Route exact path="/blog" component={BlogPage}/>
            <Route exact path="/contact" component={ContactPage}/>
        </>
    );
}

export default AppRoute;