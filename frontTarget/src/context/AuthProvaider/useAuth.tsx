import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginRequest, getUserLocalStorage, setUserLocalStorange } from "../../utils/util";
import { IAuthProvider, IContext, IUser } from "./types";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        getUserLocalStorage();

        if (user) {
            setUser(user);
        }
    }, []);

    async function login(email: string, password: string) {
        const response = await LoginRequest(email, password);

        const payload = { token: response.token, email };

        setUser(payload);
        setUserLocalStorange(payload);
    }

    async function logout() {
        setUser(null);
        setUserLocalStorange(null);
    }

    return <AuthContext.Provider value={{ ...user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    return context;
};
