import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CartTotal({ value }) {
    const { carrinho, carrinhoTotal, valorFreteConsultado, freteConsultado, resultadoConsultaCorreios } = value;
    const { mascaraCEP, calcularFrete, calculaTotal, limparCarrinho, openModalMensagem } = value;

    const valorFreteConvertidoParaFloat = parseFloat(resultadoConsultaCorreios.Valor);

    const send = (event) => {
        event.preventDefault();
        var inputCEP = event.target.elements.inputCEP;

        if (inputCEP.value) {
            calcularFrete();
        }
        else {
            console.log("erro");
        }
    }

    return (
        <React.Fragment>
            <div className="container my-5">
                <div className="row">
                    <ButtonWrapper>
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4">
                                    <form onSubmit={send}>
                                        <label htmlFor="inputCEP">
                                            <h4>Calcular frete:</h4>
                                        </label>
                                        <div className="d-flex">
                                            <input maxLength="9" type="text" id="inputCEP" onChange={() => { mascaraCEP("#####-###"); }} className="form-control" />
                                            <button type="submit" className="btn-calcularFrete">
                                                <i className="fas fa-check"></i>
                                            </button>
                                        </div>
                                    </form>

                                    {freteConsultado ?
                                        (<div className="grid">
                                            <div className="row">
                                                <div className="col-2">
                                                    <div className="d-flex">
                                                        <span className="p-1">
                                                            PAC
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-2">
                                                    <div className="d-flex">
                                                        <span className="p-1">
                                                            {valorFreteConvertidoParaFloat.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="d-flex">
                                                        <span className="p-1">
                                                            {resultadoConsultaCorreios.PrazoEntrega} dias úteis
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                        : null}
                                </div>
                                <div className="col-4">
                                    {freteConsultado ?
                                        (<h4>Frete: {valorFreteConvertidoParaFloat.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</h4>)
                                        : <h4>R$ 0,00</h4>}

                                    <h4>Total: {calculaTotal().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <button className="btn-limparCarrinho" onClick={() => { limparCarrinho(); }}>
                                    Limpar carrinho
                                </button>
                            </Link>
                            <Link to="/payment" style={{ textDecoration: "none" }}>
                                <button className="btn-selecionarPagamento">Selecionar pagamento</button>
                            </Link>
                        </div>
                    </ButtonWrapper>
                </div>
            </div>
        </React.Fragment>
    );
}

const ButtonWrapper = styled.div`
display: flex;
#inputCEP{
    font-family: "Roboto Condensed";
    width: 8rem;
}
.btn-calcularFrete{
    background: black;
    color: var(--mainWhite);
    text-align: center;
    border: 0.05rem solid;
    border-radius:0.5rem;
    margin: 0 8px;
    width: 3.5rem;
}
.btn-limparCarrinho{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background: var(--mainOrange);
    font-size: 1.3rem;
    display: inline;
    border: solid #337FED 0;
    cursor: pointer;
    padding: 0.4rem 1.2rem;
    margin: 0 0.5rem 0.5rem 0;
    color: var(--mainWhite);
}
.btn-limparCarrinho:hover{
    background: #C98206;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
.btn-selecionarPagamento{
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    background-color: #3D94F6;
    font-size: 1.3rem;
    display: inline;
    border: solid #337FED 0;
    cursor: pointer;
    padding: 0.4rem 1.2rem;
    margin: 0 0.5rem 0.5rem 0;
    color: var(--mainWhite);
}
.btn-selecionarPagamento:hover{
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;