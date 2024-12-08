import React from "react";
import CoachCard from "@/app/components/CoachCard";
import Navbar from "@/app/HomePageSections/Navbar/Navbar";
import ContactUs from "@/app/HomePageSections/ConatctUS/ContactUs"
import Footer from "@/app/HomePageSections/Footer/Footer"
import Enquiry from "../HomePageSections/Enquiry/Enquiry";


interface Coach {
    id: number;
    name: string;
    role: string;
    image: string;
}

const OurCoachesPage: React.FC = () => {
    const coaches: Coach[] = [
        { id: 1, name: "Jai Sharma", role: "Basketball Coach", image: "/coaches.png" },
        { id: 2, name: "Jai Sharma", role: "Hockey Coach", image: "/coaches.png" },
        { id: 3, name: "Jai Sharma", role: "Volleyball Coach", image: "/coaches.png" },
        { id: 4, name: "Jai Sharma", role: "Pole Coach", image: "/coaches.png" },
        { id: 5, name: "Dwiti Sharma", role: "Volleyball Coach", image: "/coaches.png" },
        { id: 6, name: "Jai Sharma", role: "Cricket Coach", image: "/coaches.png" },
        { id: 7, name: "Jai Sharma", role: "Race Coach", image: "/coaches.png" },
        { id: 8, name: "Jai Sharma", role: "Hockey Coach", image: "/coaches.png" },
        { id: 9, name: "Jigyasa Sharma", role: "Basketball Coach", image: "/coaches.png" },
        { id: 10, name: "Dwiti Sharma", role: "Hockey Coach", image: "/coaches.png" },
        { id: 11, name: "Jai Sharma", role: "Cricket Coach", image: "/coaches.png" },
        { id: 12, name: "Jai Sharma", role: "Basketball Coach", image: "/coaches.png" },
        { id: 13, name: "Jai Sharma", role: "Race Coach", image: "/coaches.png" },
        { id: 14, name: "Jai Sharma", role: "Pole Coach", image: "/coaches.png" },
        { id: 15, name: "Jigyasa Sharma", role: "Hockey Coach", image: "/coaches.png" },
        { id: 16, name: "Dwiti Sharma", role: "Basketball Coach", image: "/coaches.png" },
    ];

    return (
        <>
            <Navbar />
            <div className="bg-blue-900 min-h-screen px-6 py-10">
                {/* Header Section */}
                <h1 className="text-4xl text-center font-bold text-white mb-8">OUR COACHES</h1>
                
                {/* Coach Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-12">
                    {coaches.map((coach) => (
                        <CoachCard
                            key={coach.id}
                            name={coach.name}
                            role={coach.role}
                            image={coach.image}
                        />
                    ))}
                </div>
            </div>

            <Enquiry />
            <Footer />
        </>
    );
};

export default OurCoachesPage;


// import React from "react";
// import CoachCard from "@/app/components/CoachCard";

// interface Coach {
//     id: number;
//     name: string;
//     role: string;
//     image: string;
// }

// const OurCoaches: React.FC = () => {
//     const coaches: Coach[] = [
//         { id: 1, name: "Jai Sharma", role: "Basketball Coach", image: "/coach1.jpg" },
//         { id: 2, name: "Jai Sharma", role: "Hockey Coach", image: "/coach2.jpg" },
//         { id: 3, name: "Jai Sharma", role: "Volleyball Coach", image: "/coach3.jpg" },
//         { id: 4, name: "Jai Sharma", role: "Pole Coach", image: "/coach4.jpg" },
//         { id: 5, name: "Dwiti Sharma", role: "Volleyball Coach", image: "/coach5.jpg" },
//         { id: 6, name: "Jai Sharma", role: "Cricket Coach", image: "/coach6.jpg" },
//         { id: 7, name: "Jai Sharma", role: "Race Coach", image: "/coach7.jpg" },
//         { id: 8, name: "Jai Sharma", role: "Hockey Coach", image: "/coach8.jpg" },
//         { id: 9, name: "Jigyasa Sharma", role: "Basketball Coach", image: "/coach9.jpg" },
//         { id: 10, name: "Dwiti Sharma", role: "Hockey Coach", image: "/coach10.jpg" },
//         { id: 11, name: "Jai Sharma", role: "Cricket Coach", image: "/coach11.jpg" },
//         { id: 12, name: "Jai Sharma", role: "Basketball Coach", image: "/coach12.jpg" },
//         { id: 13, name: "Jai Sharma", role: "Race Coach", image: "/coach13.jpg" },
//         { id: 14, name: "Jai Sharma", role: "Pole Coach", image: "/coach14.jpg" },
//         { id: 15, name: "Jigyasa Sharma", role: "Hockey Coach", image: "/coach15.jpg" },
//         { id: 16, name: "Dwiti Sharma", role: "Basketball Coach", image: "/coach16.jpg" },
//     ];

//     return (
//         <div className="bg-blue-900 min-h-screen px-6 py-10">
//             <h1 className="text-4xl text-center font-bold text-white mb-8">OUR COACHES</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {coaches.map((coach) => (
//                     <CoachCard
//                         key={coach.id}
//                         name={coach.name}
//                         role={coach.role}
//                         image={coach.image}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurCoaches;
