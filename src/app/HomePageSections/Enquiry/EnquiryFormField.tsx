import React from "react";

interface FormProps {
    label: string;
    hint: string;
    keyboard: string;
    name: string;
}

const EnquiryFormField: React.FC<FormProps> = ({
    label,
    hint,
    keyboard,
    name,
}) => {
    return (
        <div className=" text-left">
            <label className=" block mb-2" htmlFor={name}>{label}</label>
            <input className=" border-black rounded-md pl-2 placeholder-black  border-2 p-2  w-80 " type={keyboard} name={name} placeholder={hint} />
        </div>
    );
};

export default EnquiryFormField;