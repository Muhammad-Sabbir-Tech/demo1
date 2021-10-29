import React from 'react';
import TopNav from "../Components/TopNav/TopNav";
import CommonBanner from "../Components/CommonBanner/CommonBanner";
import AllBlog from "../Components/AllBlog/AllBlog";
import GetStartComponent from "../Components/GetStartComponent/GetStartComponent";
import FooterComponent from "../Components/FooterComponent/FooterComponent";

function BlogPage(props) {
    return (
        <>
            <TopNav title="Blog page"/>
            <CommonBanner title="Blog"/>
            <AllBlog/>
            <GetStartComponent/>
            <FooterComponent/>
        </>
    );
}

export default BlogPage;