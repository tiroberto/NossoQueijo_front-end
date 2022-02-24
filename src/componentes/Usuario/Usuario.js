import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProdutoConsumer } from "../../Contexto";
import Endereco from "../Endereco/Endereco";
import { ButtonContainer } from "../Button";

export default class Usuario extends Component {
    render() {
        const { idUsuario, nome, cpf, email, dataNascimento } = this.props.value.resultLogin.usuario;
        return (
            <UsuarioWrapper>
                <div className="card">
                    <div className="div-title mt-2"><h5>Meus dados</h5></div>
                    <div className="p-4 container">
                        <div className="row">
                            <div className="col-6">
                                Nome:
                            </div>
                            <div className="col-6 div-data">
                                <span>{nome}</span>
                            </div>

                            <div className="col-6">
                                CPF:
                            </div>
                            <div className="col-6 div-data">
                                <span>{cpf}</span>
                            </div>

                            <div className="col-6">
                                E-mail:
                            </div>
                            <div className="col-6 div-data">
                                <span>{email}</span>
                            </div>

                            <div className="col-6">
                                Data nascimento:
                            </div>
                            <div className="col-6 div-data">
                                <span>{dataNascimento}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </UsuarioWrapper >
        );
    }
}





const UsuarioWrapper = styled.div`
.card{
    padding: 4px;
    border-style:solid;
    transition:all 0.3s linear;
}
.div-data{
    font-family: "Roboto Condensed";
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
`;