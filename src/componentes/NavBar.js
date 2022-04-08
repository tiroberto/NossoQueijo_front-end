import React, { Component } from "react";
import logo from "../Imagens/logo-site.png";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ProdutoConsumer } from "../Contexto";
import Default from "./Default";

export default class NavBar extends Component {
    render() {
        return (
            <ProdutoConsumer>
                {value => {
                    const { handleBuscaProdutos, showResultadoBusca } = value;
                    const send = (event) => {
                        event.preventDefault();
                        var campoPesquisa = event.target.elements.campoPesquisa;

                        if (campoPesquisa.value != "" || campoPesquisa.value != null || campoPesquisa.value != typeof undefined)
                            handleBuscaProdutos(campoPesquisa.value);
                    }
                    return (
                        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                            <div className="navbar-header">
                                <Link to="/">
                                    <img src={logo} alt="nossoqueijo" className="navbar-brand m-auto" />
                                </Link>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="navbar-nav nav">
                                    <li className="nav-item ml-5">
                                        <Link to="/" className="nav-link">
                                            Pagina inicial
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar-collapse collapse justify-content-end">
                                <div className="busca">
                                    {showResultadoBusca ? <Redirect to="/search-result" /> : null}

                                    <form onSubmit={send} action="/search-result" className="d-flex">
                                        <input type="text" className="form-control rounded" id="campoPesquisa" name="campoPesquisa" placeholder="Procurar" aria-label="Procurar"
                                            aria-describedby="search-addon" />
                                        <button type="submit" className="input-group-text search-btn nav-link" id="search-addon">
                                            <i className="fas text-dark fa-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="navbar-collapse collapse justify-content-end">
                                <Link to="/user" className="ml-auto">
                                    <button className="BUTTON_TRS">
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
img{
    display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.div-imagem{
    position: relative;
    background-color: rgba(255,255,255,0.5);
}
.nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
.busca{
    font-family: "Roboto Condensed";
    width: 100%;
}
.search-btn:hover{
    cursor: pointer;
}

.BUTTON_TRS {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    color: #FFFFFF;
    background-color: #3D94F6;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 0.6rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
 }
 
 .BUTTON_TRS:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
`;