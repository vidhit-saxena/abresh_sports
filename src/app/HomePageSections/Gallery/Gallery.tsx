// import React from "react";
// import Image from "next/image";

// const galleryImages = [
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
// ];

// const Gallery: React.FC = () => {
//     return (
//         <section
//             className="relative bg-cover bg-center py-10 px-12"
//             style={{
//                 backgroundImage: "url('/images/background.jpg')", // Replace with your background image path
//             }}
//         >
//             <div className="container mx-auto text-center">
//                 <h2 className="text-4xl font-bold text-blue-800 mb-6 uppercase">Gallery</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
//                     {galleryImages.map((image, index) => (
//                         <div
//                             key={index}
//                             className="relative group overflow-hidden rounded-lg shadow-md"
//                         >
//                             <Image
//                                 src={image}
//                                 alt={`Gallery ${index + 1}`}
//                                 width={200} // Set a desired width
//                                 height={300} // Set a desired height
//                                 className="transition-transform duration-300 group-hover:scale-110 object-cover"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Gallery;

// components/GallerySection.jsx
'use client';

import React from "react";

const galleryItems = [
    { id: 3, type: "video", src: "/images/video1.mp4", alt: "Celebration" },
    { id: 2, type: "image", src: "/images/gallery1.jpg", alt: "Team Photo" },
    { id: 1, type: "image", src: "/images/gallery1.jpg", alt: "Soccer Match" },
    { id: 4, type: "image", src: "/images/gallery1.jpg", alt: "Trophy" },
    { id: 5, type: "video", src: "/images/video2.mp4", alt: "Match Highlights" },
    { id: 8, type: "video", src: "/images/video3.mp4", alt: "Player Skills" },
    { id: 6, type: "image", src: "/images/gallery1.jpg", alt: "Basketball Trophy" },
    { id: 7, type: "image", src: "/images/gallery1.jpg", alt: "Training" },
    { id: 9, type: "image", src: "/images/gallery1.jpg", alt: "Tennis Match" },
    { id: 10, type: "image", src: "/images/gallery1.jpg", alt: "Rugby Match" },
    { id: 11, type: "video", src: "/images/video4.mp4", alt: "Football Highlights" },
    // { id: 12, type: "image", src: "/images/gallery1.jpg", alt: "Rugby Match" },
];

const Gallery = () => {
    return (
        // <section className="px-6 py-10 bg-white">
        //     {/* Header section */}
        //     <div className="flex items-center justify-between mb-6">
        //         <h2 className="text-3xl font-bold text-blue-800 ml-4">GALLERY</h2>
        //         <button className="mr-4 px-6 py-2 bg-white text-blue-900 border border-solid border-blue-800 font-semibold rounded-lg shadow hover:bg-blue-800 hover:text-white transition duration-300 uppercase">
        //             SEE MORE
        //         </button>
        //     </div>

        //     {/* Gallery grid */}
        //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        //         {galleryItems.map((item) => (
        //             <div key={item.id} className="relative group overflow-hidden rounded-md">
        //                 {item.type === "image" ? (
        //                     <img
        //                         src={item.src}
        //                         alt={item.alt}
        //                         className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        //                     />
        //                 ) : (
        //                     <video
        //                         src={item.src}
        //                         controls
        //                         className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
        //                     />
        //                 )}
        //                 <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        //                     {item.type === "video" && (
        //                         <span className="text-white text-xl font-semibold">▶</span>
        //                     )}
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </section>
        <section className="px-6 py-10 bg-white">
            {/* Header section */}
            <div className="flex items-center justify-between mb-6 px-8">
                <h2 className="text-3xl font-bold text-blue-800 ml-4">GALLERY</h2>
                <button className="mr-4 px-6 py-2 bg-white text-blue-900 border border-solid border-blue-800 font-semibold rounded-lg shadow hover:bg-blue-800 hover:text-white transition duration-300 uppercase">
                    SEE MORE
                </button>
            </div>

            {/* Gallery grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 px-8">
                {galleryItems.map((item, index) => {
                    const isWide = [0, 3].includes(index); // Wide items
                    const isTall = [1, 3].includes(index); // Tall items

                    return (
                        <div
                            key={item.id}
                            className={`relative group overflow-hidden rounded-md ${isWide ? "col-span-2" : ""
                                } ${isTall ? "row-span-2" : ""}`}
                        >
                            {item.type === "image" ? (
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    controls
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                                />
                            )}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                {item.type === "video" && (
                                    <span className="text-white text-xl font-semibold">▶</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>


    );
};

export default Gallery;

// import React from "react";
// import Image from "next/image";

// const galleryImages = [
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
//     "/images/gallery1.jpg",
// ];

// const Gallery: React.FC = () => {
//     return (
//         <section
//             className="relative bg-cover bg-center py-10 px-12"
//             style={{
//                 backgroundImage: "url('/images/background.jpg')", // Replace with your background image path
//             }}
//         >
//             <div className="container mx-auto text-center">
//                 <h2 className="text-4xl font-bold text-blue-800 mb-6 uppercase">Gallery</h2>
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
//                     {galleryImages.map((image, index) => (
//                         <div
//                             key={index}
//                             className="relative group overflow-hidden rounded-lg shadow-md"
//                         >
//                             <Image
//                                 src={image}
//                                 width={200}
//                                 height={200}
//                                 alt={`Gallery ${index + 1}`}
//                                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Gallery;
