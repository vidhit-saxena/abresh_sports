import React from "react";
interface TextFieldProps {
    label: string;
    placeholder: string;
    type: string;
    id: string;
}

const TextField: React.FC<TextFieldProps> = ({
    label,
    placeholder,
    type,
    id,
}) => {
    return (
        <div>
            <label htmlFor={id} className=" block mb-1">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                name={id}
                id={id}
                required
                className=" border border-black rounded-md pl-4 mb-3 w-full py-2"
                min={3}
            />
        </div>
    );
};

export default TextField;