import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../Contexto";
import styled from "styled-components";
import Title from "../Title";
import { Link } from "react-router-dom";

export default class EditarEndereco extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { idEndereco, rua, numero, bairro, cidade, cep, complemento } = value.enderecoEditar;
                    const { cidadesMostrar, resultLogin, estados, handleSubmitEditarEndereco, editarEnderecoInputs } = value;

                    const send = (event) => {
                        event.preventDefault();
                        let resultVerificacao = false;

                        for (var i = 0; i < editarEnderecoInputs.length; i++) {
                            if (editarEnderecoInputs[i].resultVerificacao) {
                                console.log(editarEnderecoInputs[i].resultVerificacao);
                                resultVerificacao = true;
                            }
                            else
                                resultVerificacao = false;
                        }

                        if (resultVerificacao) {
                            const novoEnderecoSalvar = {
                                idEndereco: idEndereco,
                                usuario: resultLogin.usuario,
                                rua: inputLogradouro.value,
                                numero: inputNumero.value,
                                bairro: inputBairro.value,
                                complemento: inputComplemento.value,
                                cep: inputCEP.value.replace(/\D/g, ""),
                                cidade: { idCidade: selectCidade.value }
                            };
                            handleSubmitEditarEndereco(novoEnderecoSalvar);
                        }
                        else
                            console.log("erro");
                    }

                    return (
                        <EditarEnderecoWrapper className="py-5 container background-white">
                            <div className="container">
                                <Link to="/user" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                    <button className="btn-voltar">
                                        <span className="m-2">
                                            <i className="fas fa-arrow-left" />
                                        </span>
                                        Voltar
                                    </button>
                                </Link>
                            </div>
                            <Title name="EDITAR " title="ENDEREÇO" />
                            <div className="container card">
                                <div className="row justify-content-center">
                                    <div className="col-2"></div>
                                    <div className="col-8 my-5">
                                        <h5 className="text-center div-title">Atual</h5>
                                        <div className="container px-5">
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-4">
                                                    Logradouro:
                                                </div>
                                                <div className="col-4 div-data">
                                                    {rua}
                                                </div>
                                                <div className="col-2"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-4">
                                                    Número:
                                                </div>
                                                <div className="col-4 div-data">
                                                    {numero}
                                                </div>
                                                <div className="col-2"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-4">
                                                    Bairro:
                                                </div>
                                                <div className="col-4 div-data">
                                                    {bairro}
                                                </div>
                                                <div className="col-2"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-4">
                                                    Complemento:
                                                </div>
                                                <div className="col-4 div-data">
                                                    {complemento}
                                                </div>
                                                <div className="col-2"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-4">
                                                    CEP:
                                                </div>
                                                <div className="col-4 div-data">
                                                    {cep}
                                                </div>
                                                <div className="col-2"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-4">
                                                    Cidade:
                                                </div>
                                                <div className="col-4 div-data">
                                                    {cidade.nome}
                                                </div>
                                                <div className="col-2"></div>
                                            </div>
                                            <div className="row">
                                                <div className="col-2"></div>
                                                <div className="col-4">
                                                    Estado:
                                                </div>
                                                <div className="col-4 div-data">
                                                    {cidade.estado.nome}
                                                </div>
                                                <div className="col-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                </div>
                                <div className="row justify-content-center">
                                    <div className="col-2"></div>
                                    <div className="col-8">
                                        <h5 className="text-center div-title">Novo</h5>
                                        <div className="px-5">
                                            <form id="form-novo-endereco" onSubmit={send}>
                                                <div className="div-inputs-form">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inputLogradouro">Logradouro:</label>
                                                        <input type="text" className="form-control" onChange={() => { value.handleChangeEditarEndereco(); }} id="inputLogradouro" name="inputLogradouro" />
                                                        <div className="text-danger" hidden={value.editarEnderecoInputs[0].errorNotVisible ? true : false}>{value.editarEnderecoInputs[0].error}</div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inputNumero">Número:</label>
                                                        <input type="text" className="form-control" onChange={() => { value.handleChangeEditarEndereco(); }} id="inputNumero" name="inputNumero" />
                                                        <div className="text-danger" hidden={value.editarEnderecoInputs[1].errorNotVisible ? true : false}>{value.editarEnderecoInputs[1].error}</div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inputBairro">Bairro:</label>
                                                        <input type="text" className="form-control" onChange={() => { value.handleChangeEditarEndereco(); }} id="inputBairro" name="inputBairro" />
                                                        <div className="text-danger" hidden={value.editarEnderecoInputs[2].errorNotVisible ? true : false}>{value.editarEnderecoInputs[2].error}</div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inputComplemento">Complemento:</label>
                                                        <input type="text" className="form-control" id="inputComplemento" name="inputComplemento" />
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inputCEP">CEP:</label>
                                                        <input maxLength="9" type="text" className="form-control" onInput={() => { value.mascaraCEP("#####-###"); }} onChange={() => { value.handleChangeEditarEndereco(); }} id="inputCEP" name="inputCEP" />
                                                        <div className="text-danger" hidden={value.editarEnderecoInputs[3].errorNotVisible ? true : false}>{value.editarEnderecoInputs[3].error}</div>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inputEstado">
                                                            Estado:
                                                        </label>
                                                        <select className="form-control" onChange={() => { value.handleCidadesMostrar(); }} id="selectEstado" name="selectEstado">
                                                            <option value="" selected disabled hidden>--Selecione--</option>
                                                            {estados.map(estado => {
                                                                return <option key={estado.idEstado} value={estado.idEstado}>{estado.nome}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="inputCidade">Cidade:</label>
                                                        <select className="form-control" disabled={value.cidadesMostrarDisabled ? true : false} onChange={() => { value.handleChangeEditarEndereco(); }} id="selectCidade" name="selectCidade">
                                                            <option value="" selected>--Selecione--</option>
                                                            {cidadesMostrar.map(cidade => {
                                                                return <option key={cidade.idCidade} value={cidade.idCidade}>{cidade.nome}</option>
                                                            })}
                                                        </select>
                                                        <div className="text-danger" hidden={value.editarEnderecoInputs[4].errorNotVisible ? true : false}>{value.editarEnderecoInputs[4].error}</div>
                                                    </div>
                                                    <div className="row div-row justify-content-end mx-2">
                                                        <button className="btn-submit">
                                                            Salvar
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-2"></div>
                                </div>
                            </div>
                        </EditarEnderecoWrapper>
                    );
                }
                }
            </ProdutoConsumer >
        );
    }
}

const EditarEnderecoWrapper = styled.div`
.div-title{
    text-align: center;
    font-size: 1.2rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    margin-bottom: 1rem;
    background: var(--lightBlue2);
}
.div-background{
    background: var(--honeyDew);
}
.div-row{
    padding: 0.3rem 0 0.3rem 0;
}
.card{
    padding: 10px;
    border-style:solid;
    transition:all 0.3s linear;
}
.div-data{
    font-family: "Roboto Condensed";
}
.div-input{
    font-family: "Roboto Condensed";
}
.div-campo{
    text-align: right;
}
input{
    width: 100%;
    font-family: "Roboto Condensed";
}
select{
    width: 100%;
}
.btn-voltar{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.6rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--lightBlue);
    color: var(--lightBlue);
}
.btn-voltar:hover{
    background: var(--lightBlue);
    color: var(--mainWhite);
}
.btn-voltar:focus{
    outline: none;
}
.btn-submit{
    width: 20%;
    text-transform: capitalized;
    background: var(--mainWhite);
    font-size: 1.4rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0 1rem 0 1rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainGreen);
    color: var(--mainGreen);
}
.btn-submit:hover{
    background: var(--mainGreen);
    color: var(--mainWhite);
}
.btn-submit:focus{
    outline: none;
}
`;
