import React, { Component } from "react";
import logo from "../Imagens/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ProdutoConsumer } from "../Contexto";
import Default from "./Default";

export default class NavBar extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    return (
                        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                            <div className="navbar-header">
                                <Link to="/">
                                    <img src={logo} alt="nossoqueijo" className="navbar-brand" />
                                </Link>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="navbar-nav nav">
                                    <li className="nav-item ml-5">
                                        <Link to="/" className="nav-link">
                                            Produtos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-collapse collapse"></div>
                            <div className="navbar-collapse collapse"></div>
                            <div className="navbar-collapse collapse"></div>
                            <div className="navbar-collapse collapse"></div>
                            <div className="navbar-collapse collapse"></div>
                            <div className="navbar-collapse collapse">
                                <div className="input-group ps-5" id="busca">
                                    <div className="form-outline">
                                        <input type="text" className="form-control rounded" placeholder="Procurar" aria-label="Procurar"
                                            aria-describedby="search-addon" />
                                    </div>
                                    <span onClick={() => { value.handleBuscaProdutos(); }} className="input-group-text border-0 search-btn" id="search-addon">
                                        <Link to="/search-result">
                                            <i className="fas fa-search" />
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="navbar-collapse collapse">
                                <Link to="/user" className="ml-auto">
                                    <button className="btn-perfil">
                                        <span className="m-2">
                                            <i className="fas fa-user" />
                                        </span>
                                        Meu perfil
                                    </button>
                                </Link>
                                <Link to="/cart" className="ml-auto">
                                    <ButtonContainer>
                                        <span className="m-2">
                                            <i className="fas fa-cart-plus" />
                                        </span>
                                        Meu carrinho
                                        {(value.carrinho.length > 0) ?
                                            <span className="position-absolute translate-middle badge rounded-pill bg-danger">
                                                {value.countItensCarrinho()}
                                            </span>
                                            : null
                                        }
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </NavWrapper>
                    );
                }}
            </ProdutoConsumer>
        );
    }
}

const NavWrapper = styled.nav`
background: var(--mainDark);
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform capitalize;
}
#busca{
    font-family: "Roboto Condensed";
}
.search-btn:hover{
    cursor: pointer;
}
.btn-perfil{
    text-transform: capitalized;
    background: transparent;
    font-size: 1.4rem;
    border: 0.05rem solid;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    align: right;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    border-color: var(--lightGreen);
    color: var(--lightGreen);
}
.btn-perfil:hover{
    background: var(--lightGreen);
    color: var(--mainWhite);
}
.btn-perfil:focus{
    outline: none;
}
`;