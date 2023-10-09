import React from "react";

interface InputProps {
    placeholder: string;
    className?: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const CustomInput: React.FC<InputProps> = ({ placeholder, className, value, setValue }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <input
            type="text"
            value={value}
            className={`input-style ${className}`}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
};

export default CustomInput;
