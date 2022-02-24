import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProdutoConsumer } from "../../Contexto";
import PropTypes from "prop-types";

export default class Produto extends Component {
    render() {
        const { idProduto, nome, qntdEstoque, preco, peso, imagem, adicionadoAoCarrinho } = this.props.produto;
        var precoFormatado = preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",");
        return (
            <ProdutoWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProdutoConsumer>
                        {value => (
                            <div className="img-container p-5" onClick={() => value.handleDetalhe(idProduto)}>
                                <Link to="/details">
                                    <img src={imagem} alt="produto" className="card-img-top" />
                                </Link>
                                <button className="cart-btn" disabled={adicionadoAoCarrinho ? true : false}
                                    onClick={() => { value.addToCarrinho(idProduto); value.openModal(idProduto); }}
                                >
                                    {adicionadoAoCarrinho ? (
                                        <p className="text-capitalize mb-0" disabled>{""}No carrinho</p>
                                    ) : (
                                        <i className="fas fa-cart-plus" />
                                    )}
                                </button>
                            </div>
                        )}
                    </ProdutoConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {nome}
                        </p>
                        <h3 className="text-blue mb-0">
                            <span className="mr-1">
                                {precoFormatado}
                            </span>
                        </h3>
                    </div>
                </div>
            </ProdutoWrapper>
        );
    }
}

Produto.propType = {
    produto: PropTypes.shape({
        idProduto: PropTypes.number,
        nome: PropTypes.string,
        qntdEstoque: PropTypes.number,
        preco: PropTypes.number,
        peso: PropTypes.number,
        imagem: PropTypes.string,
        adicionadoAoCarrinho: PropTypes.bool
    }).isRequired
};

const ProdutoWrapper = styled.div`
.card{
    border-radius: 1rem;
    border-color:transparent;
    transition:all 0.3s linear;
}
.card-footer{
    border-radius: 0 0 1rem 1rem;
    //background:rgba(210,250,260);
    background: var(--lightBlue2);
    border-color:transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.05rem solid rgba(0,0,0,0.2);
        box-shadow:px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background:rgba(150,247,260);        
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 0.3s linear;    
}
.img-container:hover .card-img-top{
    transform:scale(1.1);
}
.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding:0.2rem 0.4rem;
    background: var(--mainGreen);
    border:none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.3rem 0 0 0;
    //transform:translate(100%, 100%);
    transition: all 0.5s linear;
}
.img-container:hover .cart-btn{
    transform:translate(0, 0);
}
.cart-btn:hover{
    color: var(--lightGreen);
    cursor:pointer;
}
`;