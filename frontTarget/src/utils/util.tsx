import { IUser } from "../context/AuthProvaider/types";
import { apiAuth } from "../services/axiosConfig.auth";

export function setUserLocalStorange(user: IUser | undefined) {
    localStorage.setItem("access_token", JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem("access_token");
    if (!json) {
        return undefined;
    }
    const user = JSON.parse(json);
    return user;
}

export async function LoginRequest(email: string, password: string) {
    try {
        const request = await apiAuth.post("/auth/login", { email, password });
        return request.data;
    } catch (error) {
        return "fail";
    }
}

export async function SignUpRequest(email: string, password: string, name: string) {
    try {
        const request = await apiAuth.post("/auth/register", { email, password, name });
        return request.data;
    } catch (error) {
        return "fail";
    }
}
