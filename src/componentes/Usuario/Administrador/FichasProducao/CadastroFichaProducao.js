import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProdutoConsumer } from "../../../../Contexto";
import BotaoVoltar from "../../../ButtonVoltar";
import Title from "../../../Title";
import CurrencyInput from "react-currency-masked-input";

export default class CadastroFichaProducao extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { cadastroFichaProducaoInputs, usuariosList, produtos, openModalMensagem } = value;

                    var usuariosPermitidos = [];
                    for (var i = 0; i < usuariosList.length; i++) {
                        if (usuariosList[i].tipoUsuario.idTipoUsuario == 1)
                            usuariosPermitidos.push(usuariosList[i]);
                    }

                    const send = (event) => {
                        event.preventDefault();
                        var inputData = event.target.elements.inputData;
                        var selectUsuario = event.target.elements.selectUsuario;
                        var inputVolumePingo = event.target.elements.inputVolumePingo;
                        var inputVolumeLeite = event.target.elements.inputVolumeLeite;
                        var inputVolumeCoalho = event.target.elements.inputVolumeCoalho;
                        var inputQntdSal = event.target.elements.inputQntdSal;
                        var inputQntdProduzida = event.target.elements.inputQntdProduzida;
                        var selectProduto = event.target.elements.selectProduto;
                        let resultVerificacao = false;                    

                        for (var i = 0; i < cadastroFichaProducaoInputs.length; i++) {
                            if (cadastroFichaProducaoInputs[i].resultVerificacao) {
                                console.log(cadastroFichaProducaoInputs[i].resultVerificacao);
                                resultVerificacao = true;
                            }
                            else
                                resultVerificacao = false;
                        }

                        if (resultVerificacao) {
                            const fichaProducaoSalvar = {
                                idFichaProducao: 0,
                                data: inputData.value,
                                usuario: { idUsuario: selectUsuario.value },
                                volumePingo: inputVolumePingo.value,
                                volumeLeite: inputVolumeLeite.value,
                                volumeCoalho: inputVolumeCoalho.value,
                                qntdSal: inputQntdSal.value,
                                qntdProduzida: inputQntdProduzida.value,
                                produto: { idProduto: selectProduto.value },
                                estoquePorData: { idFichaProducao: 0, idProduto: selectProduto.value }
                            };
                            console.log(fichaProducaoSalvar);
                            value.handleSubmitCadastroFichaProducao(fichaProducaoSalvar);
                        }
                        else
                            openModalMensagem("Alguns campos não foram preenchidos!", "/new-fichaproducao");
                    }
                    return (
                        <>
                            <div className="container py-5 background-white">
                                <div className="col-6 ml-auto">
                                    <ButtonWrapper>
                                        <Link to="/admin-fichasproducao" style={{ textDecoration: "none" }}>
                                            <BotaoVoltar />
                                        </Link>
                                    </ButtonWrapper>
                                </div>
                                <Title name="CADASTRO DE FICHA DE " title="PRODUÇÃO" />
                                <div className="row">
                                    <div className="col-12">
                                        <CadastroFichaProducaoWrapper className="card">
                                            <form onSubmit={send}>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputData">Data</label>
                                                    <input type="date" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputData" name="inputData" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[0].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[0].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="selectUsuario">Usuario</label>
                                                    <select onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="selectUsuario" name="selectUsuario">
                                                        <option value="" selected disabled hidden>--Selecione--</option>
                                                        {usuariosPermitidos.map(usuario => {
                                                            return <option key={usuario.idUsuario} value={usuario.idUsuario}>{usuario.nome}</option>
                                                        })}
                                                    </select>
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[1].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[1].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputVolumePingo">Volume do pingo em litros</label>
                                                    <CurrencyInput type="number" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumePingo" name="inputVolumePingo" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[2].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[2].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputVolumeLeite">Volume do leite em litros</label>
                                                    <CurrencyInput type="number" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumeLeite" name="inputVolumeLeite" aria-describedby="emailHelp" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[3].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[3].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputVolumeCoalho">Volume do coalho em litros</label>
                                                    <CurrencyInput type="number" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumeCoalho" name="inputVolumeCoalho" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[4].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[4].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputQntdSal">Quantidade de sal em kg</label>
                                                    <CurrencyInput type="number" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputQntdSal" name="inputQntdSal" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[5].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[5].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputQntdProduzida">Quantidade produzida</label>
                                                    <input type="number" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputQntdProduzida" name="inputQntdProduzida" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[6].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[6].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="selectProduto">Produto</label>
                                                    <select onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="selectProduto" name="selectProduto">
                                                        <option value="" selected disabled hidden>--Selecione--</option>
                                                        {produtos.map(produto => {
                                                            return <option key={produto.idProduto} value={produto.idProduto}>{produto.nome}</option>
                                                        })}
                                                    </select>
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[7].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[7].error}</div>
                                                </div>
                                                <div className="mt-3">
                                                    <ButtonWrapper>
                                                        <button type="submit" className="btn-salvar">Salvar</button>
                                                    </ButtonWrapper>
                                                </div>
                                            </form>
                                        </CadastroFichaProducaoWrapper>
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
.btn-salvar{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 1.2rem;
    margin: 0.2rem 0.5rem 2rem 0;
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

const CadastroFichaProducaoWrapper = styled.div`
margin: 3rem 20rem;
padding: 50px 50px;
input {
    font-family: "Roboto Condensed";
}
h3 {
    color: var(--mainBlue);
}
select {
    font-family: "Roboto Condensed";
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