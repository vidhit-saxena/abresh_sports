import React from "react";

const EnquiryForm = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-3xl">
                <h1 className="text-4xl font-bold text-center text-blue-800 mb-4 uppercase">ENQUIRY</h1>
                <p className="text-center text-gray-600 mb-6">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text.
                </p>
                <form className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-normal text-black mb-1" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="your name"
                                className="w-full px-4 py-2 border border-solid border-black rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-normal text-black mb-1" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="your name"
                                className="w-full px-4 py-2 border border-solid border-black rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Email & Phone Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-normal text-black mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your Email ID"
                                className="w-full px-4 py-2 border border-solid border-black rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-normal text-black mb-1" htmlFor="phone">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="your phone number"
                                className="w-full px-4 py-2 border border-solid border-black rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-sm font-normal text-black mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Type Here"
                            // rows="5"
                            className="w-full px-4 py-2  border-solid border border-black rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full md:w-auto px-20 py-2 bg-blue-800 text-white rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 uppercase"
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
