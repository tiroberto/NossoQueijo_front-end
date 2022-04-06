import styled from "styled-components";
import React from "react";

export default function BotaoVoltar() {
    return (
        <div>
            <ButtonVoltarContainer>
                <span className="m-2">
                    <i className="fas fa-arrow-left" />
                </span>
                Voltar
            </ButtonVoltarContainer>
        </div>
    );
}

const ButtonVoltarContainer = styled.button`
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
font-size: 20px;
font-weight: 100;
padding: 0.4rem 0.6rem;
margin: 0.2rem 0.5rem 0.2rem 0;
background-color: var(--mainBlue);
text-decoration: none;
display: inline-block;
cursor: pointer;
text-align: center;
border: solid #337FED 0;
color: #FFFFFF;
&:hover{
    background: #212159;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;