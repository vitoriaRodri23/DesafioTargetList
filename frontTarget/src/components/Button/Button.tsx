import React from "react";
import { useAuth } from "../../context/AuthProvaider/useAuth";

interface IButtonProps {
    type?: "submit" | "reset" | "button";
    onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({ type, onClick }) => {
    return (
        <div className="text-center mt-5">
            <button type={type} onClick={onClick} className="bg-slate-600 text-white">
                Entrar
            </button>
        </div>
    );
};

export default Button;
