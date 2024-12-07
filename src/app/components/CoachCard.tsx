import React from "react";

interface CoachCardProps {
    name: string;
    role: string;
    image: string;
}

const CoachCard: React.FC<CoachCardProps> = ({ name, role, image }) => {
    return (
        // <div className="bg-white w-full rounded-lg shadow-lg overflow-hidden flex flex-col items-center text-center">
        //     {/* Name and Role Section */}
        //     <div className="mb-4 bg-yellow-400">
        //         <h3 className="text-lg font-bold text-black">{name}</h3>
        //         <p className="text-sm text-gray-900">{role}</p>
        //     </div>
            
        //     {/* Avatar Section */}
        //     <div className="w-32 h-32 overflow-hidden border-4 border-white shadow-lg mb-4">
        //         <img
        //             src={image}
        //             alt={name}
        //             className="w-full h-full object-cover"
        //         />
        //     </div>    
        // </div>

        <div className="">
            <div className="text-center bg-yellow-500 text-white py-2">
                <h3 className="text-xl font-bold">{name}</h3>
                <p className="font-semibold">{role}</p>
            </div>
            <div className="bg-white h-48">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
    
    );
};

export default CoachCard;

{/* Action Button */}
{/* <button className="w-full bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-900 transition">
    BOOK A COACH
</button> */}

// import React from "react";

// interface CoachCardProps {
//     name: string;
//     role: string;
//     image: string;
// }

// const CoachCard: React.FC<CoachCardProps> = ({ name, role, image }) => {
//     return (
//         <div className="bg-yellow-400 rounded-lg shadow-lg overflow-hidden group">
//             <img
//                 src={image}
//                 alt={name}
//                 className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//             <div className="p-4">
//                 <h3 className="text-lg font-bold text-gray-900">{name}</h3>
//                 <p className="text-sm text-gray-800">{role}</p>
//             </div>
//             <div className="p-4 pt-0">
//                 <button className="w-full bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-900 transition">
//                     BOOK A COACH
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CoachCard;
