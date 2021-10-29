import React from 'react';
import TopNav from "../Components/TopNav/TopNav";
import CommonBanner from "../Components/CommonBanner/CommonBanner";
import AllProjectComponent from "../Components/AllProjectComponent/AllProjectComponent";
import GetStartComponent from "../Components/GetStartComponent/GetStartComponent";
import FooterComponent from "../Components/FooterComponent/FooterComponent";

function ProjectPage(props) {
    return (
        <>
            <TopNav title="Project page"/>
            <CommonBanner title="project"/>
            <AllProjectComponent/>
            <GetStartComponent/>
            <FooterComponent/>
        </>
    );
}

export default ProjectPage;