import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import PrincipalTitleProps from "../../components/PrincipalTitle/PrincipalTitle";
import ImgLogo from "../../components/ImgLogo/ImgLogo";
import { api } from "../../services/AxiosConfig";

export const Cadastro = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLateName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/register/", { name, lastName, email, password,  });

            console.log(response.data);
        } catch (error) {
            setErrorMessage("Credenciais inválidas. Tente novamente.");
            console.error({error });
        }
    };
    return (
        <div className="flex items-center justify-center h-screen font-poppins">
            <form className="w-full max-w-xs mr-9" onSubmit={handleSubmit}>
                <ImgLogo />
                <PrincipalTitleProps text="Cadastro" className="text-h1" />
                <div className="div-input">
                    <Input placeholder="Nome" className="input_style mt-6"  setValue={setName} value={name}/>
                    <Input placeholder="Sobrenome" className="input_style mt-6"setValue={setLateName} value={lastName} />
                    <Input placeholder="E-mail institucional" className="input_style mt-6" setValue={setEmail} value={email} />
                    <Input placeholder="Senha" className="input_style mt-6"  setValue={setPassword} value={password} />
              
                </div>
                <Button type="submit"/>
            </form>
        </div>
    );
};

export default Cadastro;
