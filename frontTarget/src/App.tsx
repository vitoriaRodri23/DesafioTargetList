import React from "react";
import { Providers } from "./context/Providers";
import { Routes } from "./routes/Routes";

export const App = () => (
    <Providers>
        <Routes />
    </Providers>
);
