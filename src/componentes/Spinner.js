import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProdutoConsumer } from "../Contexto";

export default function Spinner() {
    return (
        <ProdutoConsumer>
            {(value) => {
                const { spinnerOpen } = value;

                if (!spinnerOpen)
                    return null;
                else
                    return (
                        <ModalContainer>
                            <div className="spinner-border var(--lightBlue)" role="status">
                                <span className="sr-only">Carregando...</span>
                            </div>
                        </ModalContainer>
                    );
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
`;