import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../Contexto";
import styled from "styled-components";
import Title from "../Title";
import { Link } from "react-router-dom";
import BotaoVoltar from "../ButtonVoltar";

export default class EditarEndereco extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { idEndereco, rua, numero, bairro, cidade, cep, complemento } = value.enderecoEditar;
                    const { cidadesMostrar, resultLogin, estados, handleSubmitEditarEndereco, editarEnderecoInputs } = value;

                    const send = (event) => {
                        event.preventDefault();
                        var inputLogradouro = event.target.elements.inputLogradouro;
                        var inputNumero = event.target.elements.inputNumero;
                        var inputBairro = event.target.elements.inputBairro;
                        var inputComplemento = event.target.elements.inputComplemento;
                        var inputCEP = event.target.elements.inputCEP;
                        var selectCidade = event.target.elements.selectCidade;
                        var selectEstado = event.target.elements.selectEstado;

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
                                cidade: { idCidade: selectCidade.value, estado: { idEstado: selectEstado.value } }
                            };
                            handleSubmitEditarEndereco(novoEnderecoSalvar);
                        }
                        else
                            console.log("erro");
                    }

                    return (
                        <EditarEnderecoWrapper className="py-5 container background-white">
                            <div className="row">
                                <Link to="/user" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                    <BotaoVoltar />
                                </Link>
                            </div>
                            <Title name="EDITAR " title="ENDEREÇO" />
                            <div className="row card mx-5">
                                <div className="row justify-content-center">
                                    <div className="col-8 my-3 card">
                                        <h5 className="text-center div-title">Atual</h5>
                                        <div className="container px-5">
                                            <div className="row">
                                                <div className="col-6 d-flex align-items-end flex-column">
                                                    <span>Logradouro:</span>
                                                    <span>Número:</span>
                                                    <span>Bairro:</span>
                                                    <span>Complemento:</span>
                                                    <span>CEP:</span>
                                                    <span>Cidade:</span>
                                                    <span>Estado:</span>
                                                </div>
                                                <div className="col-6 d-flex align-items-start flex-column div-data">
                                                    <span>{rua}</span>
                                                    <span>{numero}</span>
                                                    <span>{bairro}</span>
                                                    <span>{complemento}</span>
                                                    <span>{cep}</span>
                                                    <span>{cidade.nome}</span>
                                                    <span>{cidade.estado.nome}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row d-flex flex-column align-items-center">
                                    <div className="col-8 my-3 card">
                                        <h5 className="text-center div-title">Novo</h5>
                                        <div className="px-5">
                                            <form id="form-novo-endereco" onSubmit={send}>
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
                                                <div className="mt-3">
                                                    <button className="btn-submit">
                                                        Salvar
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
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
.btn-submit {
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #3D94F6;
    font-size: 20px;
    font-weight: 100;
    //width: 20%;
    padding: 0.4rem 1.2rem;
    margin: 1rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    cursor: pointer;
    text-align: center;
 } 
 .btn-submit:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;
