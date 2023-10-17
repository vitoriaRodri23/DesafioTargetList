import React, { createContext, useContext, useState } from "react";
import { LoginRequest, SignUpRequest, getUserLocalStorage, setUserLocalStorange } from "../../utils/util";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | undefined>(() => getUserLocalStorage());

    async function login(email: string, password: string) {
        const response = await LoginRequest(email, password);

        setUser(response);
        setUserLocalStorange(response);
        window.location.assign("/list");

        console.log(response);
    }

    async function cadastro(email: string, password: string, name: string) {
        const response = await SignUpRequest(email, password, name);

        setUser(response);
        setUserLocalStorange(response);
        window.location.assign("/login");
    }

    return <AuthContext.Provider value={{ user, login, cadastro }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};
