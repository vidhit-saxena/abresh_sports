"use client";
import { useRef, useState } from "react";
import OurAthletesCard from "./OurAthletesCard";
const athletesImages = [
    "/athletes/image1.png",
    "/athletes/image2.png",
    "/athletes/image3.png",
    "/athletes/image4.png",
    "/athletes/image5.png",
];

const OurAthletes = () => {
    const cards = Array.from({ length: 16 }, (_, index) => <></>);
    const [visibleRows, setVisibleRows] = useState(1);
    const Rows_Size = 4;
    const visibleCards = cards.slice(0, Rows_Size * visibleRows);
    const listRef = useRef<HTMLUListElement | null>(null);
    const handleShowMoreClick = () => {
        setVisibleRows((prev) => {
            const newVisibleRows = prev === 1 ? prev + 3 : prev - 3;
            if (newVisibleRows === 1) {
                if (listRef.current) {
                    listRef.current.scrollIntoView({
                        block: "start",
                        behavior: "smooth",
                    });
                }
            }
            return newVisibleRows;
        });
    };
    return (
        <div
            className=" bg-cover bg-center text-center pt-10 pb-10 w-screen"
            style={{
                backgroundImage: `url('/EnuiryBackGround.png')`,
            }}
        >
            <div className=" sm:flex sm:justify-between sm:items-center w-[91%] mx-auto my-4">
                <h2 className=" text-primary uppercase  font-bold text-3xl pt-0 mt-0  max-sm:mb-4">
                    Our Athletes
                </h2>
                <button
                    onClick={handleShowMoreClick}
                    className="px-6 py-2 bg-white text-blue-900 border border-solid border-blue-800 font-semibold rounded-lg shadow hover:bg-blue-800 hover:text-white transition duration-300 uppercase"
                >
                    SEE MORE
                </button>
            </div>
            <ul
                className=" grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1  my-10 justify-center px-4 gap-2"
                ref={listRef}
            >
                {visibleCards.map((item, index) => (
                    <li key={index}>
                        <OurAthletesCard
                            name={"Niraj Kumar Singh"}
                            sport={"Hocky Gold Medalist"}
                            tournment={"Hocky Gold Medalist"}
                            date={"04 June 2024"}
                            image={"/athletes/image1.png"}
                        />
                    </li>
                ))}
            </ul>
            <button className="bg-primary text-white p-2 rounded w-80 font-bold mt-10">
                Book As An Athlets
            </button>
        </div>
    );
};

export default OurAthletes;