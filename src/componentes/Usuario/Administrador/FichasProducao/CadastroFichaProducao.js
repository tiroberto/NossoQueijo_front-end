import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProdutoConsumer } from "../../../../Contexto";
import Title from "../../../Title";

export default class CadastroFichaProducao extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { cadastroFichaProducaoInputs, usuariosList, produtos } = value;

                    const send = (event) => {
                        event.preventDefault();
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
                            console.log("erro");
                    }
                    return (
                        <>
                            <div className="container py-5 background-white">
                                <div className="col-6 ml-auto">
                                    <ButtonWrapper>
                                        <Link to="/admin-fichasproducao" style={{ textDecoration: "none" }}>
                                            <button className="btn-voltar">
                                                <span className="m-2">
                                                    <i className="fas fa-arrow-left" />
                                                </span>
                                                Voltar
                                            </button>
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
                                                        {usuariosList.map(usuario => {
                                                            return <option key={usuario.idUsuario} value={usuario.idUsuario}>{usuario.nome}</option>
                                                        })}
                                                    </select>
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[1].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[1].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputVolumePingo">Volume do pingo em litros</label>
                                                    <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumePingo" name="inputVolumePingo" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[2].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[2].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputVolumeLeite">Volume do leite em litros</label>
                                                    <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumeLeite" name="inputVolumeLeite" aria-describedby="emailHelp" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[3].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[3].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputVolumeCoalho">Volume do coalho em litros</label>
                                                    <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumeCoalho" name="inputVolumeCoalho" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[4].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[4].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputQntdSal">Quantidade de sal em kg</label>
                                                    <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputQntdSal" name="inputQntdSal" />
                                                    <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[5].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[5].error}</div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="inputQntdProduzida">Quantidade produzida</label>
                                                    <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputQntdProduzida" name="inputQntdProduzida" />
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
.btn-salvar{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.2rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.8rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainGreen);
    color: var(--mainGreen);
}
.btn-salvar:hover{
    background: var(--mainGreen);
    color: var(--mainWhite);
}
.btn-salvar:focus{
    outline: none;
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