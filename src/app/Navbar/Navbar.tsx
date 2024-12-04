'use client';
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-yellow-400 px-4 py-3 md:px-10">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-900">Logo</div>

                {/* Hamburger Menu (Small Devices) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-blue-900 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Links (Desktop) */}
                <div className="hidden md:flex space-x-6 text-blue-900 font-medium">
                    <Link href="/" className=" hover:bg-white hover:text-yellow-600 rounded-lg p-2">Home</Link>
                    <Link href="/events" className=" hover:bg-white hover:text-yellow-600 rounded-lg p-2">Upcoming Events</Link>
                    <Link href="/coaches" className=" hover:bg-white hover:text-yellow-600 rounded-lg p-2">Our Coaches</Link>
                    <Link href="/athletes" className=" hover:bg-white hover:text-yellow-600 rounded-lg p-2">Our Athletes</Link>
                    <Link href="/contact" className=" hover:bg-white hover:text-yellow-600 rounded-lg p-2">Contact Us</Link>
                </div>
            </div>

            {/* Links (Mobile) */}
            {isMenuOpen && (
                <div className="mt-4 md:hidden flex flex-col space-y-4 text-blue-900 font-medium border-t border-blue-900 pt-4">
                    <Link href="/" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </Link>
                    <Link href="/events" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                        Upcoming Events
                    </Link>
                    <Link href="/coaches" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                        Our Coaches
                    </Link>
                    <Link href="/athletes" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                        Our Athletes
                    </Link>
                    <Link href="/contact" className="hover:text-white" onClick={() => setIsMenuOpen(false)}>
                        Contact Us
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
