"use client";
import { useState } from "react";
import TextFieldProps from "./TextField";
const ContactUs = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className=" grid md:grid-cols-5 grid-cols-1 lg:gap-10 py-12 lg:px-28 px-4 md:px-8 gap-2">
            <div className=" col-span-2">
                <img
                    src="/contact_us.png"
                    alt="contact us photo"
                    className=" mb-10 h-80 w-full object-cover"
                />
                <div className=" lg:px-10">
                    <h3 className=" mb-1 text-primary text-xl md:visible hidden">Contact Us ____</h3>
                    <h4 className=" uppercase text-primary text-2xl mb-3">
                        We're here to help
                    </h4>
                    <p>
                        Ask us anything about our products, services, and/or any questions
                        you may have.
                    </p>
                    <address className=" text-gray-400 my-5">
                        44, Regal Building, Connaught Place, New Delhi 110001 India
                    </address>
                    <div className=" lg:flex lg:justify-between text-start w-full md:text-xs lg:text-sm text-sm">
                        <div>
                            <p className=" uppercase">Phone Number</p>
                            <p className=" text-primary">+91 123 456 7890</p>
                        </div>
                        <div className="mt-3 lg:mt-auto">
                            <p className=" uppercase">Email Address</p>
                            <p className=" text-primary">info@Company.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-3 text-start ">
                <h2 className=" uppercase text-3xl font-medium sm:pt-4 lg:pt-0 text-primary max-sm:mt-4">
                    Contact us
                </h2>
                <p className=" my-6 max-sm:mt-1">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                </p>
                <TextFieldProps
                    label={"First Name"}
                    placeholder={"your name"}
                    type={"text"}
                    id={"first-name"}
                />
                <TextFieldProps
                    label={"Email"}
                    placeholder={"your Email ID"}
                    type={"email"}
                    id={"email"}
                />
                <TextFieldProps
                    label={"Phone Number"}
                    placeholder={"your phone number"}
                    type={"number"}
                    id={"mobile-number"}
                />
                <TextFieldProps
                    label={"Last Name"}
                    placeholder={"your name"}
                    type={"text"}
                    id={"last-name"}
                />
                <label htmlFor="message" className=" block mb-1">
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={3}
                    placeholder="Type Here"
                    className=" border-black border rounded-md w-full p-2 mb-3"
                ></textarea>

                <p className="text-sm mb-3">
                    By continuing, you agree to our{" "}
                    <a href="/privacy-policy" className="text-primary underline">
                        Privacy Policy
                    </a>
                    .
                </p>

                <div className="flex items-center mb-4">
                    <input
                        id="privacy-checkbox"
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-primary rounded"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label
                        htmlFor="privacy-checkbox"
                        className="ml-3 text-gray-700 text-sm"
                    >
                        I agree to the Privacy Policy
                    </label>
                </div>

                <button
                    type="submit"
                    className={`bg-primary text-white p-2 s rounded w-80 font-bold mt-6 ${!isChecked ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
                        }`}
                    disabled={!isChecked}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default ContactUs;