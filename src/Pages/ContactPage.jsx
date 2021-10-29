import React from 'react';
import TopNav from "../Components/TopNav/TopNav";
import CommonBanner from "../Components/CommonBanner/CommonBanner";
import ContactComponent from "../Components/ContactComponent/ContactComponent";
import FooterComponent from "../Components/FooterComponent/FooterComponent";

function ContactPage(props) {
    return (
        <>
            <TopNav title="Contact page"/>
            <CommonBanner title="Contact"/>
            <ContactComponent/>
            <FooterComponent/>
        </>
    );
}

export default ContactPage;