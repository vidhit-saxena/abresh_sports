import Image from "next/image";
import Navbar from "@/app/HomePageSections/Navbar/Navbar";
import Hero from "@/app/HomePageSections/HeroSection/Hero"
import UpcomingEvents from "@/app/HomePageSections/UpcomingEvents/UpcomingEvents"
import Gallery from "@/app/HomePageSections/Gallery/Gallery"
import CompanyLogos from "@/app/HomePageSections/CompanyLogos/CompanyLogos"
import AboutUs from "@/app/HomePageSections/AboutUs/AboutUs"
import Recognition from "@/app/HomePageSections/Recognition/Recognition"
import BookTraining from "@/app/HomePageSections/BookTraining/BookTraining"
import CoachForm from "@/app/Forms/CoachForm"
import RegisterAcademy from "@/app/HomePageSections/RegisterAcademy/RegisterAcademy"
import ContactUs from "./HomePageSections/ConatctUS/ContactUs";
import Branches from "./HomePageSections/Branches/Branches";
import OurCoaches from "./HomePageSections/OurCoaches/OurCoaches";
import OurAthletes from "./HomePageSections/OurAthletes/OurAthletes";
import BookSession from "./HomePageSections/Register/BookSession";
import Enquiry from "./HomePageSections/Enquiry/Enquiry";
import Footer from "./HomePageSections/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CompanyLogos />
      <AboutUs />
      <UpcomingEvents />
      <Gallery />
      <Recognition />
      <BookTraining />
      <OurCoaches />
      <OurAthletes />
      <RegisterAcademy />
      <Branches />
      <Enquiry />
      <Footer />
      {/* <BookSession /> */}
      {/* <ContactUs /> */}
      {/* <RegisterAcademy /> */}
    </>
  );
}
