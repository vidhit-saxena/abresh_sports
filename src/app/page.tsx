import Image from "next/image";
import Navbar from "@/app/Navbar/Navbar";
import Hero from "@/app/HeroSection/Hero"
import UpcomingEvents from "@/app/UpcomingEvents/UpcomingEvents"
import Gallery from "@/app/Gallery/Gallery"
import CompanyLogos from "@/app/CompanyLogos/CompanyLogos"
import AboutUs from "@/app/AboutUs/AboutUs"
import Recognition from "@/app/Recognition/Recognition"
import BookTraining from "@/app/BookTraining/BookTraining"

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
    </>
  );
}
