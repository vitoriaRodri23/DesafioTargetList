import React, { useState } from "react";
import Button from "../../components/Button/Button";
import ImgLogo from "../../components/ImgLogo/ImgLogo";
import Input from "../../components/Input/Input";
import { PrincipalTitleProps } from "../../components/PrincipalTitle/PrincipalTitle";
import { api } from "../../services/AxiosConfig";
import { useAuth } from "../../context/AuthProvaider/useAuth";

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const { cadastro } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await cadastro(email, password, name);
            setSuccessMessage("Cadastro realizado com sucesso! Você pode fazer login agora.");

            setTimeout(() => {
                window.location.href = "/login";
            }, 5 * 60 * 1000);
        } catch (error) {
            setErrorMessage("Credenciais inválidas. Tente novamente.");
            console.error(error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen font-poppins">
            <form className="w-full max-w-xs mr-9" onSubmit={handleSubmit}>
                <ImgLogo />
                <PrincipalTitleProps text="Cadastro" className="text-h1" />

                <div className="div-input">
                    <Input
                        placeholder="Nome"
                        className="input_style mt-6"
                        setValue={setName}
                        value={name}
                        type="text"
                    />
                    <Input
                        placeholder="Sobrenome"
                        className="input_style mt-6"
                        setValue={setLastName}
                        value={lastName}
                        type="text"
                    />
                    <Input
                        placeholder="E-mail institucional"
                        className="input_style mt-6"
                        setValue={setEmail}
                        value={email}
                        type="email"
                    />
                    <Input
                        placeholder="Senha"
                        className="input_style mt-6"
                        setValue={setPassword}
                        value={password}
                        type="password"
                    />
                    <h3 className="h3_error text-red-500 ">{errorMessage}</h3>
                    <p className="text-green-500 ">{successMessage}</p>
                </div>
                <Button type="submit" />
            </form>
        </div>
    );
};

export default Cadastro;
