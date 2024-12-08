import EnquiryFormField from "./EnquiryFormField";
const Enquiry = () => {
    return (
        <div
            className=" bg-cover bg-center text-center py-10 w-screen"
            style={{
                backgroundImage: `url('/EnuiryBackGround.png')`,

            }}
        >
            <h2 className=" text-primary text-3xl font-medium">Enquiry</h2>
            <p className=" mt-8 mb-8 mx-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
            <div className=" grid  gap-4 justify-center justify-items-center w-full">

                <EnquiryFormField
                    label={"First Name"}
                    hint={"your name"}
                    keyboard={"text"}
                    name={"first-name"}
                />
                <EnquiryFormField
                    label={"Last Name"}
                    hint={"your Last name"}
                    keyboard={"text"}
                    name={"last-name"}
                />
                <EnquiryFormField
                    label={"Email"}
                    hint={"your Email ID"}
                    keyboard={"email"}
                    name={"email"}
                />
                <EnquiryFormField
                    label={"Phone Number"}
                    hint={"your phone number"}
                    keyboard={"number"}
                    name={"number"}
                />
                <div className="text-left col-span-1 sm:col-span-2  w-full ">
                    <label htmlFor="message " className="block mb-2">Message</label>
                    <textarea
                        placeholder="Enter your message here"
                        className=" border-black rounded-md pl-2 placeholder-black  border-2 p-2 w-full"
                        rows={3}
                        name="message"
                    ></textarea>
                </div>

            </div>
            <button className="bg-primary text-white p-2 rounded w-80 font-bold mt-10" >
                Submit
            </button>
        </div>
    );
};

export default Enquiry;