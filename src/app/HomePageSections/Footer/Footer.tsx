import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import UpcomingEventsPage from "@/app/UpcomingEventsPage/page";
import OurCoachesPage from "@/app/OurCoachesPage/page";
import OurAthletesPage from "@/app/OurAthletesPage/page";
import ContactUsPage from "@/app/ContactUsPage/page";

const Footer = () => {
    return (
        <footer className=" h-[200] bg-yellow-500 block md:py-14 py-4 w-screen text-sm ">
            <div className=" md:flex md:justify-between md:items-center lg:px-14 md:px-8 px-4">
                <div className=" align-middle">
                    <ul className=" flex justify-start align-middle pl-0 text-white space-x-3 md:text-sm lg:text-lg text-center">
                        <li className=" font-bold">
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/UpcomingEventsPage"}>Upcoming Events</Link>
                        </li>
                        <li>
                            <Link href={"/OurCoachesPage"}>Our Coaches</Link>
                        </li>
                        <li>
                            <Link href={"/OurAthletesPage"}>Our Athletes</Link>
                        </li>
                        <li>
                            <Link href={"/ContactUsPage"}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className=" flex md:justify-end align-middle pl-0 mt-6 md:mt-0 text-white h-8 w-8">
                        <li>
                            <button className=" bg-primary p-2 rounded mr-2 text-3xl">
                                <FaFacebook className=" " />
                            </button>
                        </li>
                        <li>
                            <button className=" bg-primary p-2 rounded mr-2 text-3xl">
                                {" "}
                                <FaInstagram className=" " />{" "}
                            </button>
                        </li>
                        <li>
                            <button className=" bg-primary p-2 rounded mr-2 text-3xl">
                                {" "}
                                <FaTwitter className="  " />{" "}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <hr className=" border-t-2 border-primary my-6  w-screen" />

            <div className=" md:px-14 px-4 flex justify-between text-primary">
                <p className="text-xl">© Abresh. All rights reserved.</p>
                <ul className="flex text-md md:space-x-3 items-center uppercase text-center">
                    <li>
                        <a href="">Terms & Conditions</a>
                    </li>
                    <li>
                        <a href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="">Refund Policy</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;