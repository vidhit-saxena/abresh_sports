// import React from "react";

// const galleryImages = [
//     "/images/gallery1.jpg",
//     "/images/gallery2.jpg",
//     "/images/gallery3.jpg",
//     "/images/gallery4.jpg",
//     "/images/gallery5.jpg",
//     "/images/gallery6.jpg",
//     "/images/gallery7.jpg",
//     "/images/gallery8.jpg",
//     "/images/gallery9.jpg",
//     "/images/gallery10.jpg",
//     "/images/gallery11.jpg",
//     "/images/gallery12.jpg",
// ];

// const Gallery: React.FC = () => {
//     return (
//         <section
//             className="relative bg-cover bg-center py-16 px-8 md:px-12"
//             style={{
//                 backgroundImage: "url('/images/background.jpg')", // Replace with your background image path
//             }}
//         >
//             <div className="container mx-auto text-center">
//                 {/* Section Title */}
//                 <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 uppercase drop-shadow-md">
//                     Our Gallery
//                 </h2>

//                 {/* Image Grid */}
//                 <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {galleryImages.map((image, index) => (
//                         <div
//                             key={index}
//                             className="relative group overflow-hidden rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition duration-300"
//                         >
//                             {/* Image */}
//                             <img
//                                 src={image}
//                                 alt={`Gallery ${index + 1}`}
//                                 className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
//                             />
//                             {/* Overlay */}
//                             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
//                                 <p className="text-white text-lg font-semibold">View Image</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Gallery;


import React from "react";

const galleryImages = [
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
    "/images/gallery1.jpg",
];

const Gallery: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center py-10 px-12"
            style={{
                backgroundImage: "url('/images/background.jpg')", // Replace with your background image path
            }}
        >
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-blue-800 mb-6 uppercase">Gallery</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative group overflow-hidden rounded-lg shadow-md"
                        >
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
