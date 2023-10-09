import React, { ReactElement } from "react";
import { AuthProvider } from "./AuthProvaider/useAuth";

interface IProvidersProps {
    children: ReactElement;
}

export const Providers: React.FC<IProvidersProps> = ({ children }) => {
    return <AuthProvider>{children}</AuthProvider>;
};
