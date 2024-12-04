import Image from "next/image";
import Navbar from "@/app/Navbar/Navbar";
import Hero from "@/app/HeroSection/Hero"
import UpcomingEvents from "@/app/UpcomingEvents/UpcomingEvents"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <UpcomingEvents />
    </>
  );
}
