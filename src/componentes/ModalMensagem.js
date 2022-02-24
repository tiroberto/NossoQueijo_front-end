import React, { Component } from "react";
import styled from "styled-components";
import { ProdutoConsumer } from "../Contexto";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default function ModalMensagem() {
    return (
        <ProdutoConsumer>
            {(value) => {
                const { modalMensagemOpen, closeModalMensagem, mensagemModalMensagem, pathModalMensagem } = value;
                if (!modalMensagemOpen) {
                    return null;
                }
                else {
                    return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modalMensagem" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalizer">
                                        <h5>{mensagemModalMensagem}</h5>
                                        <Link to={pathModalMensagem}>
                                            <ButtonContainer onClick={() => closeModalMensagem()}>
                                                Ok!
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

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modalMensagem{
    padding: 1rem 1rem;
    background: var(--mainWhite);
    border-radius: 1rem;
}
`;