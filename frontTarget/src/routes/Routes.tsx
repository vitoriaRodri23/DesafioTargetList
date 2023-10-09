import React from "react";
import { BrowserRouter, Navigate, Route, Routes as RoutesDom } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro"
import Login from "../pages/Login/Login"
import TableDeals from "../components/TableDeals/TableDeals";
import { ProtectedLayout } from "../routes/ProtectedLayout/ProtectedLayout";
import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar";
import {TablePrincipal} from "../components/Table/TablePrincipal";
import TargetList from "../pages/TargetListDeals/TargetList";

export const Routes: React.FC = () => (
    <BrowserRouter>
        <RoutesDom>
            <Route
                path="/profile"
                element={
                    <ProtectedLayout>
                        <>
                            <h2>Componente profile</h2>
                        </>
                    </ProtectedLayout>
                }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/list" element={<TargetList />} />
            <Route path="/tablef" element={<TablePrincipal data={[]} />} />
            <Route path="/profileAvatar" element={<ProfileAvatar />} />
            <Route path="*" element={<Navigate to="/login" />} />
            
        </RoutesDom>
    </BrowserRouter>
);
