import React, { useState } from "react";
import Button from "../../components/Button/Button";
import ImgLogo from "../../components/ImgLogo/ImgLogo";
import Input from "../../components/Input/Input";
import PrincipalTitleProps from "../../components/PrincipalTitle/PrincipalTitle";
import { api } from "../../services/AxiosConfig";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/login/", { email, password });

            console.log(response.data);
        } catch (error) {
            setErrorMessage("Credenciais inválidas. Tente novamente.");
            console.error(error );
        }
    };

    return (
        <div className="flex items-center justify-center h-screen font-poppins ">
            <form className="w-full max-w-xs mr-9" onSubmit={handleSubmit}>
                <ImgLogo />
                <PrincipalTitleProps text="Login" className="text-h1" />
                <div className="input-div">
                    <Input placeholder="E-mail" className="input_style mt-6" setValue={setEmail} value={email} />
                    <Input placeholder="Senha" className="input_style mt-6" setValue={setPassword} value={password} />
                    <h3 className="h3_error text-red-500 " >{errorMessage}</h3>
                </div>
                <div className="text-center display-flex mt-5 text-[9D9FA1]  rounded-t-lg">
                    <h6 className="h6_style">
                        Não tem cadastro? 
                        <a className="a_style" href="/Cadastro">
                            Cadastre-se aqui
                        </a>
                    </h6>
                </div>
                <Button type="submit" />
            </form>
        </div>
    );
};

export default Login;
