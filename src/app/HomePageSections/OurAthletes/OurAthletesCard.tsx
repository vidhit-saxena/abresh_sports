import React from "react";
interface Props {
    name: string;
    sport: string;
    tournment: string;
    date: string;
    image: string;
}
const OurAthletesCard: React.FC<Props> = ({
    name,
    sport,
    tournment,
    date,
    image,
}) => {
    return (
        <div className=" overflow-hidden rounded-md relative mx-auto w-[75%]" >
            <img src={image} alt="athele photo" className=" rounded-3xl z-0" />
            <div className=" bg-gray-50 mx-auto p-2 text-start absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 transform w-[90%] opacity-[0.5]">
                <p className=" font-bold text-black  block text-sm">{name}</p>
                <p className=" text-black  block text-sm">{sport}</p>
            </div>
            <div className=" flex justify-between w-full my-4">
                <p>{tournment}</p>
                <p className=" text-gray-400">{date}</p>
            </div>
        </div>
    );
};

export default OurAthletesCard;