"use client";
import React, { useState } from "react";

const recognitions = [
    {
        id: 1,
        title: "Football International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 2,
        title: "Hockey International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 3,
        title: "Football International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 4,
        title: "Football International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 5,
        title: "Hockey International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 6,
        title: "Hockey International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 7,
        title: "Hockey International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 8,
        title: "Hockey International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 9,
        title: "Hockey International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
    {
        id: 10,
        title: "Hockey International Tournament",
        date: "04 June 2024",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
        image: "/images/football1.jpg",
    },
];

const Recognition = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Calculate the items for the current page
    const totalPages = Math.ceil(recognitions.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = recognitions.slice(startIndex, startIndex + itemsPerPage);

    return (
        <section className="px-4 py-10 pt-4 bg-gray-50">
            <h1 className="text-center text-3xl font-bold text-blue-800 mb-8">
                RECOGNITION
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {currentItems.map((recognition) => (
                    <div
                        key={recognition.id}
                        className="relative bg-black text-white rounded-sm shadow-lg overflow-hidden"
                    >
                        {/* Background Image with Overlay */}
                        <img
                            src={recognition.image}
                            alt={recognition.title}
                            className="w-full h-64 object-cover brightness-50"
                        />
                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col justify-end p-3">
                            <p className="text-sm font-light">
                                {recognition.title} - {recognition.date}
                            </p>
                            <h3 className="text-md font-bold uppercase">
                                {recognition.description.split(" ").slice(0, 6).join(" ")} - Awards
                            </h3>
                            <p className="text-sm mt-1">
                                {recognition.description.length > 100
                                    ? `${recognition.description.slice(0, 100)}...`
                                    : recognition.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentItems.map((recognition) => (
                    <div
                        key={recognition.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                        <img
                            src={recognition.image}
                            alt={recognition.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-gray-800">
                                {recognition.title} - {recognition.date}
                            </h3>
                            <p className="text-sm text-gray-600 mt-2">
                                {recognition.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 space-x-2">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-lg ${currentPage === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    &larr;
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 rounded-lg ${currentPage === index + 1
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200 text-gray-600 hover:bg-blue-100"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-lg ${currentPage === totalPages
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                        }`}
                >
                    &rarr;
                </button>
            </div>
        </section>
    );
};

export default Recognition;
