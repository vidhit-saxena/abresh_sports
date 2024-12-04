import React from 'react'
import { FC } from "react";
import EventCard, { Event } from "@/app/components/EventCard";

const events: Event[] = [
  {
    id: 1,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "Nation Events-Jaipur Stadium",
    image: "/images/football1.jpg",
  },
  {
    id: 2,
    title: "Badminton Tournament",
    date: "12 JAN, 2025",
    location: "Nationl Events-Jaipur Stadium",
    image: "/images/badminton1.jpg",
  },
  {
    id: 3,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "International Level Events",
    image: "/images/football1.jpg",
  },
  {
    id: 4,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "Nationl Events-Jaipur Stadium",
    image: "/images/football1.jpg",
  },
  {
    id: 5,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "Nationl Events-Jaipur Stadium",
    image: "/images/football1.jpg",
  },
  {
    id: 6,
    title: "Badminton Tournament",
    date: "12 JAN, 2025",
    location: "Nationl Events-Jaipur Stadium",
    image: "/images/badminton1.jpg",
  },
  {
    id: 7,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "International Level Events",
    image: "/images/football1.jpg",
  },
  {
    id: 8,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "Nationl Events-Jaipur Stadium",
    image: "/images/football1.jpg",
  },
  {
    id: 9,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "Nationl Events-Jaipur Stadium",
    image: "/images/football1.jpg",
  },
  {
    id: 10,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "Nationl Events- Jaipur Stadium",
    image: "/images/football1.jpg",
  },
  {
    id: 11,
    title: "Badminton Tournament",
    date: "12 JAN, 2025",
    location: "Nationl Events-Jaipur Stadium",
    image: "/images/badminton1.jpg",
  },
  {
    id: 12,
    title: "Football Tournament",
    date: "12 JAN, 2025",
    location: "International Level Events",
    image: "/images/football1.jpg",
  },
];
const UpcomingEvents = () => {
    return (
        <div className="px-4 py-10">
            <h1 className="text-center text-3xl font-bold text-blue-600 mb-8">UPCOMING EVENTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingEvents;
