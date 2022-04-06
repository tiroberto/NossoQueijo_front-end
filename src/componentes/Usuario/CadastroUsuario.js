import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProdutoConsumer } from "../../Contexto";

export default class CadastroUsuario extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { cadastroInputs } = value;

                    const send = (event) => {
                        event.preventDefault();
                        var InputNome = event.target.elements.InputNome;
                        var InputCPF = event.target.elements.InputCPF;
                        var InputDataNascimento = event.target.elements.InputDataNascimento;
                        var InputEmail = event.target.elements.InputEmail;
                        var InputPassword = event.target.elements.InputPassword;
                        
                        let resultVerificacao = false;

                        for (var i = 0; i < cadastroInputs.length; i++) {
                            if (cadastroInputs[i].resultVerificacao) {
                                console.log(cadastroInputs[i].resultVerificacao);
                                resultVerificacao = true;
                            }
                            else
                                resultVerificacao = false;
                        }

                        if (resultVerificacao) {
                            const usuarioSalvar = {
                                idUsuario: 0,
                                nome: InputNome.value,
                                cpf: InputCPF.value.replace(/\D/g, ""),
                                dataNascimento: InputDataNascimento.value,
                                email: InputEmail.value,
                                senha: InputPassword.value,
                                tipoUsuario: { idTipoUsuario: 2 }
                            };
                            console.log(usuarioSalvar);
                            value.handleSubmitCadastroUsuario(usuarioSalvar);
                        }
                        else
                            console.log("erro");
                    }
                    return (
                        <CadastroUsuarioWrapper className="card">
                            <h3>Inscrever-se</h3>
                            <form onSubmit={send} className="mt-4">
                                <div className="form-group">
                                    <label htmlFor="InputNome">Nome</label>
                                    <input type="text" onChange={() => { value.handleChangeCadastro(); }} className="form-control" id="InputNome" name="InputNome" />
                                    <div className="text-danger" hidden={value.cadastroInputs[0].errorNotVisible ? true : false}>{value.cadastroInputs[0].error}</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputCPF">CPF</label>
                                    <input type="text" onChange={() => { value.handleChangeCadastro(); value.mascaraCPF(); }} className="form-control" id="InputCPF" name="InputCPF" />
                                    <div className="text-danger" hidden={value.cadastroInputs[1].errorNotVisible ? true : false}>{value.cadastroInputs[1].error}</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputDataNascimento">Data de nascimento</label>
                                    <input type="date" onChange={() => { value.handleChangeCadastro(); }} className="form-control" id="InputDataNascimento" name="InputDataNascimento" />
                                    <div className="text-danger" hidden={value.cadastroInputs[2].errorNotVisible ? true : false}>{value.cadastroInputs[2].error}</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputEmail">E-mail</label>
                                    <input type="email" onChange={() => { value.handleChangeCadastro(); }} className="form-control" id="InputEmail" name="InputEmail" aria-describedby="emailHelp" />
                                    <div className="text-danger" hidden={value.cadastroInputs[3].errorNotVisible ? true : false}>{value.cadastroInputs[3].error}</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputPassword">Senha</label>
                                    <input maxLength="30" type="password" onChange={() => { value.handleChangeCadastro(); }} className="form-control" id="InputPassword" name="InputPassword" />
                                    <div className="text-danger" hidden={value.cadastroInputs[4].errorNotVisible ? true : false}>{value.cadastroInputs[4].error}</div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="InputConfirmPassword">Confirmar senha</label>
                                    <input maxLength="30" type="password" onChange={() => { value.handleChangeCadastro(); }} className="form-control" id="InputConfirmPassword" name="InputConfirmPassword" />
                                    <div className="text-danger" hidden={value.cadastroInputs[5].errorNotVisible ? true : false}>{value.cadastroInputs[5].error}</div>
                                </div>
                                <div className="mt-4">
                                    <ButtonWrapper>
                                        <button type="submit" className="btn-confirmar">Confirmar</button>
                                    </ButtonWrapper>
                                </div>
                            </form>
                        </CadastroUsuarioWrapper>
                    );
                }}
            </ProdutoConsumer>
        );
    }
}

const ButtonWrapper = styled.div`
display: flex;
#inputCEP{
    font-family: "Roboto Condensed";
    width: 8rem;
}
.btn-confirmar{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #3D94F6;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
 }
 
 .btn-confirmar:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;

const CadastroUsuarioWrapper = styled.div`
margin: 5% 35% 30% 35%;
padding: 50px 50px;
input {
    margin-bottom: 10px;
    font-family: "Roboto Condensed";
}
h3 {
    color: var(--mainBlue);
}
.btn-submit{
    text-transform: capitalized;
    fon-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    align: right;
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