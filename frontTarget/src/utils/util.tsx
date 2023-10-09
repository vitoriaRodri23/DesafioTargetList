import { IUser } from "../context/AuthProvaider/types";
import { api } from "../services/AxiosConfig";

export function setUserLocalStorange(user: IUser | null) {
    localStorage.setItem("u", JSON.stringify(user));
}

export function getUserLocalStorage() {
    const json = localStorage.getItem("u");
    if (!json) {
        return null;
    }
    const user = JSON.parse(json);
    return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
    try {
        const request = await api.post("login", { email, password });
        return request.data;
    } catch (error) {
        return null;
    }
}
