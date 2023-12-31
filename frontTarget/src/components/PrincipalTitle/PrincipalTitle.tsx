import React from "react";

interface PrincipalTitleProps {
    text: string;
    className?: string;
}

export const PrincipalTitleProps: React.FC<PrincipalTitleProps> = ({ text, className }) => {
    return <h2 className={`heading-style ${className}`}>{text}</h2>;
};
