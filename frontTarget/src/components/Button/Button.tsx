import React from "react";

interface IButtonProps {
    type?: "submit" | "reset" | "button";
}

export const Button: React.FC<IButtonProps> = ({ type }) => {
    return (
        <div className="text-center mt-5">
            <button type={type} className="bg-slate-600 text-white">
                Entrar
            </button>
        </div>
    );
};

export default Button;
