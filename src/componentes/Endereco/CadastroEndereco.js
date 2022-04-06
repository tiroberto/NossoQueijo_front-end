import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProdutoConsumer } from "../../Contexto";
import Title from "../Title";
import BotaoVoltar from "../ButtonVoltar";

export default class CadastroEndereco extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { editarEnderecoInputs, estados, cidadesMostrar, handleSubmitEditarEndereco, resultLogin } = value;

                    function validateNumber() {
                        let i = document.querySelector("input[id=inputNumero]");
                        let inputNumero = i.value;
                        if (isNaN(inputNumero[inputNumero.length - 1])) { // impede entrar outro caractere que não seja número
                            i.value = inputNumero.substring(0, inputNumero.length - 1);
                            return;
                        }
                    }

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
                                idEndereco: 0,
                                rua: inputLogradouro.value,
                                numero: inputNumero.value,
                                bairro: inputBairro.value,
                                complemento: inputComplemento.value,
                                cep: inputCEP.value.replace(/\D/g, ""),
                                cidade: { idCidade: selectCidade.value, estado: { idEstado: selectEstado.value } },
                                usuario: resultLogin.usuario
                            };
                            handleSubmitEditarEndereco(novoEnderecoSalvar);
                        }
                        else
                            console.log("erro");
                    }
                    return (
                        <>
                            <div className="container py-5 background-white">
                                <div className="col-6 ml-auto">
                                    <ButtonWrapper>
                                        <Link to="/user" style={{ textDecoration: "none" }}>
                                            <BotaoVoltar />
                                        </Link>
                                    </ButtonWrapper>
                                </div>
                                <Title name="CADASTRO DE " title="ENDEREÇO" />
                                <div className="row">
                                    <div className="col-12">
                                        <CadastroEnderecoWrapper className="card">
                                            <form onSubmit={send}>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputLogradouro">Logradouro</label>
                                                    <input type="text" onChange={() => { value.handleChangeEditarEndereco(); }} className="form-control" id="inputLogradouro" name="inputLogradouro" />
                                                    <div className="text-danger" hidden={value.editarEnderecoInputs[0].errorNotVisible ? true : false}>{value.editarEnderecoInputs[0].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputNumero">Número</label>
                                                    <input type="text" onChange={() => { value.handleChangeEditarEndereco(); validateNumber(); }} className="form-control" id="inputNumero" name="inputNumero" />
                                                    <div className="text-danger" hidden={value.editarEnderecoInputs[1].errorNotVisible ? true : false}>{value.editarEnderecoInputs[1].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputBairro">Bairro</label>
                                                    <input type="text" onChange={() => { value.handleChangeEditarEndereco(); }} className="form-control" id="inputBairro" name="inputBairro" />
                                                    <div className="text-danger" hidden={value.editarEnderecoInputs[2].errorNotVisible ? true : false}>{value.editarEnderecoInputs[2].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputComplemento">Complemento</label>
                                                    <input type="text" onChange={() => { value.handleChangeEditarEndereco(); }} className="form-control" id="inputComplemento" name="inputComplemento" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[3].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[3].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputCEP">CEP</label>
                                                    <input maxLength="9" type="text" onInput={() => { value.mascaraCEP("#####-###"); }} onChange={() => { value.handleChangeEditarEndereco(); }} className="form-control" id="inputCEP" name="inputCEP" />
                                                    <div className="text-danger" hidden={value.editarEnderecoInputs[3].errorNotVisible ? true : false}>{value.editarEnderecoInputs[3].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="selectEstado">Estado</label>
                                                    <select onChange={() => { value.handleCidadesMostrar(); }} className="form-control" id="selectEstado" name="selectEstado">
                                                        <option value="" selected disabled hidden>--Selecione--</option>
                                                        {estados.map(estado => {
                                                            return <option key={estado.idEstado} value={estado.idEstado}>{estado.nome}</option>
                                                        })}
                                                    </select>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="selectCidade">Cidade</label>
                                                    <select disabled={value.cidadesMostrarDisabled ? true : false} className="form-control" onChange={() => { value.handleChangeEditarEndereco(); }} id="selectCidade" name="selectCidade">
                                                        <option value="" selected>--Selecione--</option>
                                                        {cidadesMostrar.map(cidade => {
                                                            return <option key={cidade.idCidade} value={cidade.idCidade}>{cidade.nome}</option>
                                                        })}
                                                    </select>
                                                    <div className="text-danger" hidden={value.editarEnderecoInputs[4].errorNotVisible ? true : false}>{value.editarEnderecoInputs[4].error}</div>
                                                </div>
                                                <div className="mt-3">
                                                    <ButtonWrapper>
                                                        <button type="submit" className="btn-salvar">Salvar</button>
                                                    </ButtonWrapper>
                                                </div>
                                            </form>
                                        </CadastroEnderecoWrapper>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }}
            </ProdutoConsumer>
        );
    }
}

const ButtonWrapper = styled.div`
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
.btn-salvar {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    background-color: #3D94F6;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
 }
 
 .btn-salvar:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;

const CadastroEnderecoWrapper = styled.div`
margin: 3rem 20rem;
padding: 50px 50px;
input {
    font-family: "Roboto Condensed";
}
select {
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