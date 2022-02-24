import React, { Component } from "react";
import styled from "styled-components";
import { ProdutoConsumer } from "../../Contexto";
import { Link } from "react-router-dom";

export default class FormaPagamento extends Component {
    render() {
        const { idFormaPagamento, descricao, imagem } = this.props.formaPagamento;
        const { handleFormaPagamento, resultLogin, openModalMensagem } = this.props.value;
        return (
            <FormaPagamentoWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => { handleFormaPagamento(idFormaPagamento); if (!resultLogin.logado) openModalMensagem("Faça o login para continuar.", "/login"); }}>
                        <Link to="/select-address">
                            <img src={imagem} alt="formaPagamento" className="card-img-top" />
                        </Link>
                    </div>
                    <div className="card-footer d-flex justify-content-between">
                        <h3 className="text-blue mb-0">
                            <span className="mr-1">
                                {descricao}
                            </span>
                        </h3>
                    </div>
                </div>
            </FormaPagamentoWrapper>
        );
    }
}

const FormaPagamentoWrapper = styled.div`
.img-container{
    position:relative;
    overflow:hidden;
}
.img-container:hover .card-img-top{
    transform:scale(1.1);
}
.card-footer{
    background:rgba(210,250,260);
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
.img-container:hover{
    color: var(--lightGreen);
    cursor:pointer;
}
.card-img-top{
    transition:all 0.3s linear;    
}
.img-label:before {
    content: url("https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/unchecked_checkbox.png");
    position: absolute;
    z-index: 100;
}
:checked+img-label:before {
    content: url("https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/checked_checkbox.png");
}
input[type=checkbox] {
    display: none;
}
`;