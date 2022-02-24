import React, { Component } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import { ProdutoConsumer } from "../../Contexto";

export default function Login() {
    return (
        <ProdutoConsumer>
            {value => {
                const { loginInputs, handleSubmitLogin, resultLogin } = value;

                const send = (event) => {
                    event.preventDefault();
                    let resultVerificacao = false;

                    for (var i = 0; i < loginInputs.length; i++) {
                        if (loginInputs[i].resultVerificacao)
                            resultVerificacao = true;
                        else
                            resultVerificacao = false;
                    }

                    if (resultVerificacao) {
                        const usuarioLogin = {
                            email: InputEmail1.value,
                            senha: InputPassword1.value
                        };
                        handleSubmitLogin(usuarioLogin);
                    }
                    else
                        console.log("erro");
                }

                return (
                    <LoginWrapper className="card">
                        <h3>Login</h3>
                        <form onSubmit={send} className="mt-4">
                            <div className="form-group">
                                <label htmlFor="InputEmail1">E-mail</label>
                                <input type="email" onChange={() => { value.handleChangeLogin(); }} className="form-control text-lowercase" id="InputEmail1" name="InputEmail1" aria-describedby="emailHelp" />
                                <div className="text-danger" hidden={value.loginInputs[0].errorNotVisible ? true : false}>{value.loginInputs[0].error}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="InputPassword1">Senha</label>
                                <input maxLength="30" type="password" onChange={() => { value.handleChangeLogin(); }} className="form-control" id="InputPassword1" name="InputPassword1" />
                                <div className="text-danger" hidden={value.loginInputs[1].errorNotVisible ? true : false}>{value.loginInputs[1].error}</div>
                            </div>
                            <div>
                                <Link to="/register" className="">
                                    <p>Inscrever-se</p>
                                </Link>
                            </div>
                            <button type="submit" className="btn-submit">Entrar</button>
                        </form>
                    </LoginWrapper>
                );
            }
            }
        </ProdutoConsumer>
    );
}

const LoginWrapper = styled.div`
margin: 5% 35% 30% 35%;
padding: 50px 50px;

#InputEmail1 {
    font-family: "Roboto Condensed";
}
h3 {
    color: var(--mainBlue);
}
.btn-submit{
    width: 7rem;
    text-transform: capitalized;
    background: transparent;
    font-size: 1.2rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainBlue);
    color: var(--mainBlue);
}
.btn-submit:hover{
    background: var(--mainBlue);
    color: var(--mainWhite);
}
.btn-submit:focus{
    outline: none;
}
`;