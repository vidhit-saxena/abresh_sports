import React from 'react'

const CoachForm = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-3xl font-bold bg-yellow-500 text-black py-4">
                        COACHES SEEKING EMPLOYMENT
                    </h1>
                    <p className="mt-2 text-blue-600 font-semibold">PERSONAL INFORMATION</p>
                </div>

                {/* Form */}
                <form className="mt-6 space-y-8">
                    {/* Personal Information Section */}
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    placeholder="Enter your Contact Number"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your Email Address"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <textarea
                                placeholder="Enter your Address"
                                rows={3}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            ></textarea>
                        </div>
                    </div>

                    {/* Other Sections Here... */}
                    {/* Coaching Background Section */}
                    <div>
                        <p className="text-blue-600 font-semibold text-center">COACHING BACKGROUND AND EXPERIENCE</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Total Years of Coaching Experience
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter your Total Years of Coaching Experience"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Sports/Activities Coached
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your Sports/Activities Coached"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>

                        <p className="text-gray-700 font-semibold mt-6">PREVIOUS COACHING ROLES</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Organization/Institution
                                </label>
                                <input
                                    type="text"
                                    placeholder="Organization/Institution"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Duration
                                </label>
                                <input
                                    type="text"
                                    placeholder="Duration"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Responsibilities
                            </label>
                            <textarea
                                placeholder="Responsibilities"
                                rows={3}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            ></textarea>
                        </div>
                    </div>

                    {/* Certifications and Qualifications Section */}
                    <div>
                        <p className="text-blue-600 font-semibold text-center">CERTIFICATIONS AND QUALIFICATIONS</p>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Educational Background
                            </label>
                            <textarea
                                placeholder="Your Educational Background"
                                rows={3}
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            ></textarea>
                        </div>

                        <p className="text-gray-700 font-semibold mt-6">COACHING CERTIFICATIONS</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Certificate Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Certificate Name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Issuing Authority
                                </label>
                                <input
                                    type="text"
                                    placeholder="Issuing Authority"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">
                                Year of Certification
                            </label>
                            <input
                                type="text"
                                placeholder="Year of Certification"
                                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                            />
                        </div>
                    </div>

                    {/* Portfolio or Achievements Section */}
                    <div>
                        <p className="text-blue-600 font-semibold text-center">PORTFOLIO OR ACHIEVEMENTS</p>
                        <div className="space-y-4 mt-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Coaching Achievements
                                </label>
                                <input
                                    type="text"
                                    placeholder="1 Coaching Achievements"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="2 Coaching Achievements"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Links to Online Portfolio/Profile
                                </label>
                                <input
                                    type="url"
                                    placeholder="Links to Online Portfolio/Profile"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* References Section */}
                    <div>
                        <p className="text-blue-600 font-semibold text-center">REFERENCES</p>
                        <div className="space-y-4 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Contact Number
                                    </label>
                                    <input
                                        type="tel"
                                        placeholder="Contact Number"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Relationship
                                </label>
                                <input
                                    type="text"
                                    placeholder="Relationship"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                                />
                            </div>
                            <button
                                type="button"
                                className="px-4 py-2 mt-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none"
                            >
                                + Reference
                            </button>
                        </div>
                    </div>

                    {/* Requested Documents Section */}
                    <div>
                        <p className="text-blue-600 font-semibold text-center">REQUESTED DOCUMENTS</p>
                        <div className="space-y-4 mt-4">
                            {["Proof of Identity (e.g., Aadhar, Passport)", "Proof of Education and Qualifications", "Relevant Certifications"].map(
                                (label, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-700">
                                            {label}
                                        </label>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <button
                                                type="button"
                                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                                            >
                                                <svg
                                                    className="w-5 h-5 inline"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 10h2m4 0h4m-8 0h2m4 0h2m4 0h2m-8 0v6m-4-2v2m12-10h2m-4 2h2m4 4h2m-4-4h2m-8 4h2m-4 2h2"
                                                    />
                                                </svg>{" "}
                                                Attach
                                            </button>
                                            <span className="text-sm text-gray-500">Attached</span>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Required Attachments Section */}
                    <div>
                        <p className="text-blue-600 font-semibold text-center">REQUIRED ATTACHMENTS</p>
                        <div className="space-y-4 mt-4">
                            {["Resume or CV", "Certificates and Diplomas", "Additional Documentation (e.g., licenses, contracts)"].map(
                                (label, index) => (
                                    <div key={index}>
                                        <label className="block text-sm font-medium text-gray-700">
                                            {label}
                                        </label>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <button
                                                type="button"
                                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                                            >
                                                <svg
                                                    className="w-5 h-5 inline"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M3 10h2m4 0h4m-8 0h2m4 0h2m4 0h2m-8 0v6m-4-2v2m12-10h2m-4 2h2m4 4h2m-4-4h2m-8 4h2m-4 2h2"
                                                    />
                                                </svg>{" "}
                                                Attach
                                            </button>
                                            <span className="text-sm text-gray-500">Attached</span>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            type="button"
                            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md shadow-md hover:bg-gray-400 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                        >
                            Submit
                        </button>
                    </div>

                    {/* Submit Button */}
                    {/* <div className="text-center mt-6">
                        <button
                            type="submit"
                            className="px-6 py-2 mr-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none"
                        >
                            Submit
                        </button>
                    </div> */}
                </form>
            </div>
        </div>
    );
}

export default CoachForm



// import React from 'react'

// const CoachForm = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen flex justify-center items-center">
//             <div className="w-full max-w-5xl p-6 bg-white shadow-lg rounded-lg">
//                 <h1 className="text-2xl font-bold mb-4 text-center bg-yellow-500">Coaching Application Form</h1>
//                 <form className="space-y-6">
//                     {/* Personal Details */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block text-sm font-medium">Full Name</label>
//                             <input type="text" placeholder="Enter your full name" className="mt-1 w-full border rounded-md p-2" />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium">Date of Birth</label>
//                             <input type="date" className="mt-1 w-full border rounded-md p-2" />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium">Contact Number</label>
//                             <input type="tel" placeholder="Enter your contact number" className="mt-1 w-full border rounded-md p-2" />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium">Email Address</label>
//                             <input type="email" placeholder="Enter your email address" className="mt-1 w-full border rounded-md p-2" />
//                         </div>
//                         <div className="col-span-2">
//                             <label className="block text-sm font-medium">Address</label>
//                             <input type="text" placeholder="Enter your address" className="mt-1 w-full border rounded-md p-2" />
//                         </div>
//                     </div>

//                     {/* Coaching Experience */}
//                     <div>
//                         <h2 className="text-lg font-semibold">Coaching Experience</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium">Total Years of Coaching Experience</label>
//                                 <input type="number" placeholder="Enter years of experience" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Sports/Activities Coached</label>
//                                 <input type="text" placeholder="Enter sports or activities" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Previous Coaching Roles */}
//                     <div>
//                         <h2 className="text-lg font-semibold">Previous Coaching Roles</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium">Organization/Institution</label>
//                                 <input type="text" placeholder="Enter organization name" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Duration</label>
//                                 <input type="text" placeholder="Enter duration" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Responsibilities</label>
//                                 <input type="text" placeholder="Enter responsibilities" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Coaching Certifications */}
//                     <div>
//                         <h2 className="text-lg font-semibold">Coaching Certifications</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium">Certificate Name</label>
//                                 <input type="text" placeholder="Enter certificate name" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Issuing Authority</label>
//                                 <input type="text" placeholder="Enter issuing authority" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Year of Certification</label>
//                                 <input type="number" placeholder="Enter year" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* File Uploads */}
//                     <div>
//                         <h2 className="text-lg font-semibold">File Uploads</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium">Resume or CV</label>
//                                 <input type="file" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Certificates</label>
//                                 <input type="file" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* References */}
//                     <div>
//                         <h2 className="text-lg font-semibold">References</h2>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                             <div>
//                                 <label className="block text-sm font-medium">Name</label>
//                                 <input type="text" placeholder="Enter reference name" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                             <div>
//                                 <label className="block text-sm font-medium">Contact Number</label>
//                                 <input type="tel" placeholder="Enter reference contact number" className="mt-1 w-full border rounded-md p-2" />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Submit Button */}
//                     <div className="flex justify-end gap-4">
//                         <button type="button" className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
//                         <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CoachForm;
