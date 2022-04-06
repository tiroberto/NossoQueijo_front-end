import React, { Component } from "react";
import styled from "styled-components";
import { ProdutoConsumer } from "../Contexto";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Modal extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { imagem, nome, preco } = value.modalProduto;
                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-5 text-center text-capitalizer py-4">
                                            <h5>Produto adicionado no carrinho</h5>
                                            <img src={imagem} className="img-fluid" alt="produto" />
                                            <h5>{nome}</h5>
                                            <h5 className="text-muted">Preço: R$ {preco}</h5>
                                            <Link to="/">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Continuar comprando
                                                </ButtonContainer>
                                            </Link>
                                            <Link to="/cart">
                                                <ButtonContainer onClick={() => closeModal()}>
                                                    Ir ao carrinho
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }}
            </ProdutoConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.6);
display: flex;
align-items: center;
justify-content: center;
#modal{
    padding: 1rem 1rem;
    background: var(--mainWhite);
    border-radius: 1rem;
}
`;