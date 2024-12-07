import React from "react";

const AboutUs: React.FC = () => {
    return (
        <section className="container mx-auto py-14 px-20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Text Content Section */}
                <div className="text-center lg:text-left lg:w-1/2 mr-6">
                    <h1 className="text-3xl font-bold text-blue-800 mb-4 uppercase">About Us</h1>
                    <p className="text-gray-600 leading-relaxed mb-6 mr-10">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever.
                    </p>
                    {/* <button className="px-6 py-2 bg-blue-800 text-white font-semibold rounded-lg shadow hover:bg-blue-900 transition duration-300 uppercase">
                        See More
                    </button> */}
                    <button className="px-6 py-2 bg-white text-blue-900 border border-solid border-blue-800 font-semibold rounded-lg shadow hover:bg-blue-800 hover:text-white transition duration-300 uppercase">
                        See More
                    </button>
                </div>


                {/* Images Section */}
                <div className="relative lg:w-1/2 ml-16">
                    {/* First Image */}
                    <div className="relative  w-2/3 lg:w-2/3 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/images/athlete2.jpg"
                            alt="Athlete 1"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Second Image */}
                    <div className="absolute -bottom-8 -left-12 lg:-bottom-8 lg:-left-8 w-1/3 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/images/athlete1.jpg"
                            alt="Athlete 2"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

{/* Images Section */}
                {/* <div className="relative lg:w-1/2"> */}
                {/* First Image */}
                {/* <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/images/athlete2.jpg"
                            alt="Athlete 1"
                            className="w-full h-auto object-cover"
                        />
                    </div> */}

                {/* Second Image */}
                {/* <div className="absolute -top-8 -left-8 lg:-top-12 lg:-left-12 w-2/3 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src="/images/athlete1.jpg"
                            alt="Athlete 2"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div> */}

// import React from "react";

// const AboutUs: React.FC = () => {
//     return (
//         <section className="container mx-auto py-12 px-20">
//             <div className="flex flex-col lg:flex-row items-center gap-8">
//                 {/* Images Section */}
//                 <div className="flex flex-col gap-4 lg:order-2">
//                     <div className="relative overflow-hidden rounded-lg shadow-lg">
//                         <img
//                             src="/images/athlete1.jpg"
//                             alt="Athlete 1"
//                             className="w-full h-auto object-cover"
//                         />
//                     </div>
//                     <div className="relative overflow-hidden rounded-lg shadow-lg lg:absolute lg:top-12 lg:left-12">
//                         <img
//                             src="/images/athlete2.jpg"
//                             alt="Athlete 2"
//                             className="w-full h-auto object-cover"
//                         />
//                     </div>
//                 </div>

//                 {/* Text Content Section */}
//                 <div className="text-center lg:text-left">
//                     <h2 className="text-3xl font-bold text-blue-600 mb-4">About Us</h2>
//                     <p className="text-gray-600 leading-relaxed mb-6">
//                         Lorem Ipsum is simply dummy text of the printing and typesetting
//                         industry. Lorem Ipsum has been the industry's standard dummy text
//                         ever.
//                     </p>
//                     <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
//                         See More
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutUs;
