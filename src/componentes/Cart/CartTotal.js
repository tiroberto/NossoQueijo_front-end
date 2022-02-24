import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CartTotal({ value }) {
    const { carrinho, carrinhoTotal, valorFreteConsultado } = value;
    const { mascaraCEP, calcularFrete, calculaTotal, limparCarrinho, openModalMensagem } = value;

    const send = (event) => {
        event.preventDefault();

        if (inputCEP.value) {
            calcularFrete();
        }
        else {
            console.log("erro");
        }
    }

    return (
        <React.Fragment>
            <div className="container-fluid justify-content-end my-5 d-flex">
                <div className="row">
                    <ButtonWrapper>
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
                        </div>
                        <div className="col-4">
                            <h4>Frete: {valorFreteConsultado.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</h4>
                            <h4>Total: {calculaTotal().toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</h4>
                        </div>
                        <div className="col-4">
                            <div className="d-inline">
                                <Link to="/" style={{ textDecoration: "none" }}>
                                    <button className="btn-limparCarrinho" onClick={() => { limparCarrinho(); }}>
                                        Limpar carrinho
                                    </button>
                                </Link>
                            </div>
                            <div className="d-inline">
                                <Link to="/payment" style={{ textDecoration: "none" }}>
                                    <button className="btn-selecionarPagamento">Selecionar pagamento</button>
                                </Link>
                            </div>
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
    width: 17rem;
    text-transform: capitalized;
    background: transparent;
    font-size: 1.6rem;
    display: inline;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.5rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--mainRed);
    color: var(--mainRed);
}
.btn-limparCarrinho:hover{
    background: var(--mainRed);
    color: var(--mainWhite);
}
.btn-limparCarrinho:focus{
    outline: none;
}
.btn-selecionarPagamento{
    width: 17rem;
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
    border-color: var(--mainGreen);
    color: var(--mainGreen);
}
.btn-selecionarPagamento:hover{
    background: var(--mainGreen);
    color: var(--mainWhite);
}
.btn-selecionarPagamento:focus{
    outline: none;
}
`;