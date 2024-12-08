"use client";
import { useRef, useState } from "react";
import CouachesContainer from "./CouachesContainer";
const OurCoaches = () => {
    const cards = Array.from({ length: 16 }, (_, i) => <CouachesContainer />);
    const [visibleRows, setVislbleRows] = useState(1);
    const rowSize = 4;
    const visibleCards = cards.slice(0, rowSize * visibleRows);

    const listRef = useRef<HTMLUListElement | null>(null);

    const handleClick = () => {
        setVislbleRows((prev) => {
            const newVisibleRows = prev === 1 ? prev + 3 : prev - 3;
            if (newVisibleRows === 1) {
                // When shrinking, scroll to the top of the list container
                if (listRef.current) {
                    listRef.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
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
                backgroundImage: `url('/branches/background.png')`,
            }}
        >
            <h2 className=" text-white text-3xl font-medium">Our Coaches</h2>
            <ul
                className={` grid lg:grid-cols-4 md:grid-cols-2 max-sm:grid-cols-1  my-10 justify-center px-4 gap-2`}
                ref={listRef}
            >
                {visibleCards.map((item, index) => {
                    return (
                        <li key={index}>
                            <CouachesContainer />
                        </li>
                    );
                })}
            </ul>
            <button
                onClick={handleClick}
                className="bg-transparent text-white p-2 rounded w-80 font-bold mt-10 border-white border-2 "
            >
                SEE MORE
            </button>
        </div>
    );
};

export default OurCoaches;
function handleClick() {
    throw new Error("Function not implemented.");
}