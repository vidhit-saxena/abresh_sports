'use client';
import React, { useState } from "react";
import EventCard, { Event } from "@/app/components/EventCard";

const events: Event[] = [
    { id: 1, title: "Football Tournament", date: "12 JAN, 2025", location: "Nation Events-Jaipur Stadium", image: "/images/football1.jpg" },
    { id: 2, title: "Badminton Tournament", date: "12 JAN, 2025", location: "Nationl Events-Jaipur Stadium", image: "/images/badminton1.jpg" },
    { id: 3, title: "Football Tournament", date: "12 JAN, 2025", location: "International Level Events", image: "/images/football1.jpg" },
    { id: 4, title: "Football Tournament", date: "12 JAN, 2025", location: "Nationl Events-Jaipur Stadium", image: "/images/football1.jpg" },
    { id: 5, title: "Football Tournament", date: "12 JAN, 2025", location: "Nationl Events-Jaipur Stadium", image: "/images/football1.jpg" },
    { id: 6, title: "Badminton Tournament", date: "12 JAN, 2025", location: "Nationl Events-Jaipur Stadium", image: "/images/badminton1.jpg" },
    { id: 7, title: "Football Tournament", date: "12 JAN, 2025", location: "International Level Events", image: "/images/football1.jpg" },
    { id: 8, title: "Football Tournament", date: "12 JAN, 2025", location: "Nationl Events-Jaipur Stadium", image: "/images/football1.jpg" },
    { id: 9, title: "Football Tournament", date: "12 JAN, 2025", location: "Nationl Events-Jaipur Stadium", image: "/images/football1.jpg" },
    { id: 10, title: "Football Tournament", date: "12 JAN, 2025", location: "Nationl Events- Jaipur Stadium", image: "/images/football1.jpg" },
    { id: 11, title: "Badminton Tournament", date: "12 JAN, 2025", location: "Nationl Events-Jaipur Stadium", image: "/images/badminton1.jpg" },
    { id: 12, title: "Football Tournament", date: "12 JAN, 2025", location: "International Level Events", image: "/images/football1.jpg" },
];

const UpcomingEvents = () => {
    const [showAll, setShowAll] = useState(false);

    // Slice events based on whether "Show All" is toggled
    const displayedEvents = showAll ? events : events.slice(0, 6);

    return (
        <div className="px-8 py-10">
            <h1 className="text-center text-3xl font-bold text-blue-800 mb-8">UPCOMING EVENTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayedEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow hover:bg-blue-900 transition duration-300"
                >
                    {showAll ? "Show Less Events" : "Show More Events"}
                </button>
            </div>
        </div>
    );
};

export default UpcomingEvents;


// import React from 'react'
// import { FC } from "react";
// import EventCard, { Event } from "@/app/components/EventCard";

// const events: Event[] = [
//   {
//     id: 1,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "Nation Events-Jaipur Stadium",
//     image: "/images/football1.jpg",
//   },
//   {
//     id: 2,
//     title: "Badminton Tournament",
//     date: "12 JAN, 2025",
//     location: "Nationl Events-Jaipur Stadium",
//     image: "/images/badminton1.jpg",
//   },
//   {
//     id: 3,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "International Level Events",
//     image: "/images/football1.jpg",
//   },
//   {
//     id: 4,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "Nationl Events-Jaipur Stadium",
//     image: "/images/football1.jpg",
//   },
//   {
//     id: 5,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "Nationl Events-Jaipur Stadium",
//     image: "/images/football1.jpg",
//   },
//   {
//     id: 6,
//     title: "Badminton Tournament",
//     date: "12 JAN, 2025",
//     location: "Nationl Events-Jaipur Stadium",
//     image: "/images/badminton1.jpg",
//   },
//   {
//     id: 7,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "International Level Events",
//     image: "/images/football1.jpg",
//   },
//   {
//     id: 8,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "Nationl Events-Jaipur Stadium",
//     image: "/images/football1.jpg",
//   },
//   {
//     id: 9,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "Nationl Events-Jaipur Stadium",
//     image: "/images/football1.jpg",
//   },
//   {
//     id: 10,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "Nationl Events- Jaipur Stadium",
//     image: "/images/football1.jpg",
//   },
//   {
//     id: 11,
//     title: "Badminton Tournament",
//     date: "12 JAN, 2025",
//     location: "Nationl Events-Jaipur Stadium",
//     image: "/images/badminton1.jpg",
//   },
//   {
//     id: 12,
//     title: "Football Tournament",
//     date: "12 JAN, 2025",
//     location: "International Level Events",
//     image: "/images/football1.jpg",
//   },
// ];
// const UpcomingEvents = () => {
//     return (
//         <div className="px-4 py-10">
//             <h1 className="text-center text-3xl font-bold text-blue-600 mb-8">UPCOMING EVENTS</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {events.map((event) => (
//                     <EventCard key={event.id} event={event} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default UpcomingEvents;
