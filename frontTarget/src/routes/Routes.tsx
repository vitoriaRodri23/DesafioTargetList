import React from "react";
import { BrowserRouter, Navigate, Route, Routes as RoutesDom } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import { TargetList } from "../pages/TargetListDeals/TargetList";
import { ProtectedLayout } from "../routes/ProtectedLayout/ProtectedLayout";

export const Routes: React.FC = () => (
    <BrowserRouter>
        <RoutesDom>
            <Route
                path="/list"
                element={
                    <ProtectedLayout>
                        <TargetList />
                    </ProtectedLayout>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<Navigate to="/list" />} />
        </RoutesDom>
    </BrowserRouter>
);
