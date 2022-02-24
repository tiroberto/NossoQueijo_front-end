import React, { Component, useContext } from "react";
import { ProdutoConsumer } from "../../../../Contexto";
import styled from "styled-components";
import Title from "../../../Title";
import { Link } from "react-router-dom";

export default class EditarFichaProducao extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { cadastroFichaProducaoInputs, produtos, usuariosList, handleSubmitEditarEndereco, editarEnderecoInputs } = value;
                    const { idFichaProducao, usuario, data, volumePingo, volumeLeite, volumeCoalho, qntdSal, qntdProduzida, produto } = value.detalhesFichaProducao;

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
                                idFichaProducao: idFichaProducao,
                                data: inputData.value,
                                usuario: { idUsuario: selectUsuario.value },
                                volumePingo: inputVolumePingo.value,
                                volumeLeite: inputVolumeLeite.value,
                                volumeCoalho: inputVolumeCoalho.value,
                                qntdSal: inputQntdSal.value,
                                qntdProduzida: inputQntdProduzida.value,
                                produto: { idProduto: selectProduto.value },
                                estoquePorData: { idFichaProducao: idFichaProducao, idProduto: selectProduto.value }
                            };
                            console.log(fichaProducaoSalvar);
                            value.handleSubmitCadastroFichaProducao(fichaProducaoSalvar);
                        }
                        else
                            console.log("erro");
                    }

                    return (
                        <EditarFichaProducaoWrapper className="mt-5">
                            <div className="container">
                                <Link to="/details-fichaproducao" className="col-6 ml-auto" style={{ textDecoration: "none" }}>
                                    <button className="btn-voltar">
                                        <span className="m-2">
                                            <i className="fas fa-arrow-left" />
                                        </span>
                                        Voltar
                                    </button>
                                </Link>
                            </div>
                            <Title name="EDITAR " title={`FICHA DE PRODUÇÃO #${idFichaProducao}`} />
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-10">
                                        <div className="card">
                                            <div className="p-4 container">
                                                <div className="row pb-4 div-background">
                                                    <div className="col-4 border">
                                                        <h5 className="text-center div-title">Atual</h5>
                                                        <div className="row">
                                                            <div className="col-6">
                                                                Data:
                                                            </div>
                                                            <div className="col-6 div-data">
                                                                <span>{data}</span>
                                                            </div>
                                                            <div className="col-6">
                                                                Usuario:
                                                            </div>
                                                            <div className="col-6 div-data">
                                                                <span>{usuario.nome}</span>
                                                            </div>
                                                            <div className="col-6">
                                                                Volume do pingo:
                                                            </div>
                                                            <div className="col-6 div-data">
                                                                <span>{volumePingo}l</span>
                                                            </div>

                                                            <div className="col-6">
                                                                Volume do leite:
                                                            </div>
                                                            <div className="col-6 div-data">
                                                                <span>{volumeLeite}l</span>
                                                            </div>
                                                            <div className="col-6">
                                                                Volume do coalho:
                                                            </div>
                                                            <div className="col-6 div-data">
                                                                <span>{volumeCoalho}l</span>
                                                            </div>
                                                            <div className="col-6">
                                                                Quantidade de sal:
                                                            </div>
                                                            <div className="col-6 div-data">
                                                                <span>{qntdSal}kg</span>
                                                            </div>
                                                            <div className="col-6">
                                                                Quantidade produzida:
                                                            </div>
                                                            <div className="col-6 div-data">
                                                                <span>{qntdProduzida}</span>
                                                            </div>
                                                            <div className="col-6">
                                                                Produto:
                                                            </div>
                                                            <div className="col-6 div-data">
                                                                <span>{produto.nome}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-8 border">
                                                        <form id="form-novo-endereco" onSubmit={send}>
                                                            <h5 className="text-center div-title">Novo</h5>
                                                            <div className="div-inputs-form">
                                                                <div className="row div-row">
                                                                    <div className="col-2 div-campo">
                                                                        Data:
                                                                    </div>
                                                                    <div className="col-10 div-input">
                                                                        <input type="date" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputData" name="inputData" />
                                                                        <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[0].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[0].error}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row div-row">
                                                                    <div className="col-2 div-campo">
                                                                        Usuario:
                                                                    </div>
                                                                    <div className="col-10 div-input">
                                                                        <select onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="selectUsuario" name="selectUsuario">
                                                                            <option value="" selected disabled hidden>--Selecione--</option>
                                                                            {usuariosList.map(usuario => {
                                                                                return <option key={usuario.idUsuario} value={usuario.idUsuario}>{usuario.nome}</option>
                                                                            })}
                                                                        </select>
                                                                        <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[1].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[1].error}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row div-row">
                                                                    <div className="col-2 div-campo">
                                                                        Volume do pingo em litros:
                                                                    </div>
                                                                    <div className="col-10 div-input">
                                                                        <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumePingo" name="inputVolumePingo" />
                                                                        <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[2].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[2].error}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row div-row">
                                                                    <div className="col-2 div-campo">
                                                                        Volume do leite em litros:
                                                                    </div>
                                                                    <div className="col-10 div-input">
                                                                        <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumeLeite" name="inputVolumeLeite" aria-describedby="emailHelp" />
                                                                        <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[3].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[3].error}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row div-row">
                                                                    <div className="col-2 div-campo">
                                                                        Volume do coalho em litros:
                                                                    </div>
                                                                    <div className="col-10 div-input">
                                                                        <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputVolumeCoalho" name="inputVolumeCoalho" />
                                                                        <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[4].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[4].error}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row div-row">
                                                                    <div className="col-2 div-campo">
                                                                        Quantidade de sal em kg:
                                                                    </div>
                                                                    <div className="col-10 div-input">
                                                                        <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputQntdSal" name="inputQntdSal" />
                                                                        <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[5].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[5].error}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row div-row">
                                                                    <div className="col-2 div-campo">
                                                                        Quantidade produzida:
                                                                    </div>
                                                                    <div className="col-10 div-input">
                                                                        <input type="text" onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="inputQntdProduzida" name="inputQntdProduzida" />
                                                                        <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[6].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[6].error}</div>
                                                                    </div>
                                                                </div>
                                                                <div className="row div-row">
                                                                    <div className="col-2 div-campo">
                                                                        Quantidade produzida:
                                                                    </div>
                                                                    <div className="col-10 div-input">
                                                                        <select onChange={() => { value.handleChangeCadastroFichaProducao(); }} className="form-control" id="selectProduto" name="selectProduto">
                                                                            <option value="" selected disabled hidden>--Selecione--</option>
                                                                            {produtos.map(produto => {
                                                                                return <option key={produto.idProduto} value={produto.idProduto}>{produto.nome}</option>
                                                                            })}
                                                                        </select>
                                                                        <div className="text-danger" hidden={value.cadastroFichaProducaoInputs[7].errorNotVisible ? true : false}>{value.cadastroFichaProducaoInputs[7].error}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row div-row justify-content-center">
                                                                <button className="btn-submit">
                                                                    Salvar
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </EditarFichaProducaoWrapper>
                    );
                }
                }
            </ProdutoConsumer >
        );
    }
}

const EditarFichaProducaoWrapper = styled.div`
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
    padding: 4px;
    border-style:solid;
    transition:all 0.3s linear;
}
.div-data{
    font-family: "Roboto Condensed";
    color: var(--lightBlue);
    text-align: left;
}
.div-input{
    font-family: "Roboto Condensed";
}
.div-campo{
    text-align: right;
}
input{
    width: 100%;
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
    background: transparent;
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
