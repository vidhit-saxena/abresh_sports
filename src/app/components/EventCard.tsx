import { FC } from "react";

// Define the Event type
export interface Event {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
}

interface EventCardProps {
    event: Event;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
    return (
        <div className="relative bg-white shadow-lg rounded-sm overflow-hidden">
            {/* Image Section with Overlay */}
            <div
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${event.image})` }}
            >
                <div className="absolute top-0 left-0 right-0 flex justify-between font-medium p-2 text-white text-xs bg-gradient-to-t from-transparent to-black/60 uppercase">
                    <span className="bg-black/50 px-1 py-1 rounded">{event.location}</span>
                    <span className="bg-black/50 px-1 py-1 rounded">{event.date}</span>
                </div>
            </div>
    
            {/* Title Section */}
            <div className="relative -mt-5 bg-yellow-400 text-center py-2 mx-4 shadow-lg">
                <h2 className="text-xl font-bold text-black uppercase">{event.title}</h2>
            </div>
        </div>
    );
    

    // return (
    //     <div className="relative bg-white shadow-lg rounded-sm overflow-hidden">
    //         {/* Image Section with Overlay */}
    //         <div
    //             className="h-48 bg-cover bg-center relative"
    //             style={{ backgroundImage: `url(${event.image})` }}
    //         >
    //             <div className="absolute top-0 left-0 right-0 flex justify-between font-semibold p-2 text-white text-xs bg-gradient-to-t from-transparent to-black/60 uppercase">
    //                 <span>{event.location}</span>
    //                 <span>{event.date}</span>
    //             </div>
    //         </div>

    //         {/* Title Section */}
    //         <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 bg-yellow-400 text-center py-2 mx-4 shadow-lg">
    //             <h2 className="text-lg font-bold text-black uppercase">{event.title}</h2>
    //         </div>
    //     </div>
    // );




    // return (
    //     <div className="relative bg-white shadow-lg rounded-sm overflow-hidden">
    //         {/* Image Section with Overlay */}
    //         <div
    //             className="h-48 bg-cover bg-center relative"
    //             style={{ backgroundImage: `url(${event.image})` }}
    //         >
    //             <div className="absolute top-0 left-0 right-0 flex justify-between p-2 text-white text-xs bg-gradient-to-t from-transparent to-black/60 uppercase">
    //                 <span>{event.location}</span>
    //                 <span className="">{event.date}</span>
    //             </div>
    //         </div>

    //         {/* Title Section */}
    //         <div className="bg-yellow-400 text-center py-2 mx-2">
    //             <h2 className="text-lg font-bold text-black uppercase">{event.title}</h2>
    //         </div>
    //     </div>
    // );
};

export default EventCard;



// import { FC } from "react";

// // Define the Event type
// export interface Event {
//     id: number;
//     title: string;
//     date: string;
//     location: string;
//     image: string;
// }

// interface EventCardProps {
//     event: Event;
// }

// const EventCard: FC<EventCardProps> = ({ event }) => {
//     return (
//         <div className="bg-white shadow-lg rounded-sm overflow-hidden">
//             <div
//                 className="h-48 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${event.image})` }}
//             ></div>
//             <div className="p-4">
//                 <p className="text-sm text-gray-500">{event.date}</p>
//                 <h2 className="text-lg font-bold text-gray-800">{event.title}</h2>
//                 <p className="text-sm text-gray-600">{event.location}</p>
//             </div>
//             <div className="bg-yellow-500 text-center py-2">
//                 <button className="text-white font-semibold">Learn More</button>
//             </div>
//         </div>
//     );
// };

// export default EventCard;
