import React from 'react'
import Navbar from '../HomePageSections/Navbar/Navbar';
import ContactUs from '../HomePageSections/ConatctUS/ContactUs';
import Footer from '../HomePageSections/Footer/Footer';
import Branches from '../HomePageSections/Branches/Branches';

const ContactUsPage = () => {
    return (
        <>
            <Navbar />
            <ContactUs />
            <Branches />
            <Footer />
        </>
    )
}

export default ContactUsPage;