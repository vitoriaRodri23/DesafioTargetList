import axios from "axios";

const requestUserAsString = localStorage.getItem("access_token");
const requestUser = requestUserAsString ? JSON.parse(requestUserAsString) : undefined;
const token = requestUser?.access_token;
export const apiAuth = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Powered-By": "Express",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
});
