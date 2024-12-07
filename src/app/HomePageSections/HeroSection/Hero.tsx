'use client';
import { useState } from "react";

interface Slide {
    id: number;
    title: string;
    description: string;
    image: string;
}

const Hero: React.FC = () => {
    const slides: Slide[] = [
        {
            id: 1,
            title: "Football Tournament",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Experience the best moments in the championship league.",
            image: "/images/football1.jpg",
        },
        {
            id: 2,
            title: "Championship League",
            description: "Experience the best moments in the championship league.",
            image: "/images/badminton1.jpg",
        },
        {
            id: 3,
            title: "Soccer Fever",
            description: "Join us to celebrate the love for soccer.",
            image: "/images/football1.jpg",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleNext = (): void => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = (): void => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative w-full h-screen">
            {/* Blurred Background */}
            <div
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                    zIndex: 0,
                }}
            ></div>

            {/* Carousel Container */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
                {/* Centered Carousel */}
                <div className="relative w-[80%] h-[85%] bg-cover bg-center rounded-lg shadow-lg overflow-hidden">
                    {/* Carousel Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center brightness-110"
                        style={{
                            backgroundImage: `url(${slides[currentSlide].image})`,
                        }}
                    ></div>

                    {/* Text and Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-40 p-4">
                        <h1 className="text-white text-3xl font-bold mb-4 uppercase md:text-5xl">{slides[currentSlide].title}</h1>
                        <p className="text-white text-lg max-w-lg">{slides[currentSlide].description}</p>

                        {/* Pagination */}
                        <div className="flex justify-center space-x-2 mt-6">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.id}
                                    className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-400"
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="absolute top-3/4 md:top-2/3 lg:top-1/2 left-4 transform -translate-y-1/2">
                        <button
                            onClick={handlePrev}
                            className="text-white bg-black bg-opacity-50 p-3 rounded-md hover:bg-opacity-75 focus:outline-none"
                            aria-label="Previous Slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-3/4 md:top-2/3 lg:top-1/2 right-4 transform -translate-y-1/2">
                        <button
                            onClick={handleNext}
                            className="text-white bg-black bg-opacity-50 p-3 rounded-md hover:bg-opacity-75 focus:outline-none"
                            aria-label="Next Slide"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;




