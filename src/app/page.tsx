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

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <CompanyLogos />
      <UpcomingEvents />
      <Gallery />
      <Recognition />
      <BookTraining />
      <RegisterAcademy />
      {/* <CoachForm /> */}
    </>
  );
}
