import React from "react";
import styled from 'styled-components';
import { ProdutoConsumer } from "../../Contexto";
import { Link } from "react-router-dom";

export default function MenuAdmin() {
    return (
        <ProdutoConsumer>
            {value => {
                const { menuAdmin, menuAdminShow } = value;

                return (
                    <div>
                        {menuAdminShow ?
                            <ButtonWrapper>
                                <button onClick={() => { value.showMenuAdmin(); }} className="btn-admin dropdown-toggle">
                                    <span className="m-2">
                                        <i className="fas fa-users-cog"></i>
                                    </span>
                                    Área administrador
                                </button>
                                {menuAdmin ?
                                    (<div className="div-list">
                                        <Link to="/admin-pedidos" style={{ textDecoration: "none" }} className="col-6">
                                            <button name="admin-option" onClick={() => { value.showMenuAdmin(); }}>
                                                <span>Pedidos</span>
                                            </button>
                                        </Link>
                                        <Link to="/admin-fichasproducao" style={{ textDecoration: "none" }} className="col-6">
                                            <button name="admin-option" onClick={() => { value.showMenuAdmin(); }}>
                                                <span>Fichas de produção</span>
                                            </button>
                                        </Link>
                                        <Link to="/admin-produtos" style={{ textDecoration: "none" }} className="col-6">
                                            <button name="admin-option" onClick={() => { value.showMenuAdmin(); }}>
                                                <span>Produtos</span>
                                            </button>
                                        </Link>
                                    </div>)
                                    : null}
                            </ButtonWrapper>
                            : null
                        }
                    </div>
                )
            }}
        </ProdutoConsumer>
    );
};

const ButtonWrapper = styled.div`
.div-list{
    border: 0.05rem solid;
    border-radius: 0.5rem;
    border-color: var(--lightBlue);
    //width: 25rem;
    padding: 0 0.3rem;
    position: absolute;
    display: inline;
}
.btn-admin {
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 100;
    padding: 0.4rem 0.6rem;
    margin: 0.2rem 0.5rem 0.2rem 0;
    border: solid #337FED 0;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    text-align: center;
    color: #FFFFFF;
    background-color: #3D94F6;
 }
 
 .btn-admin:hover {
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
 }
 button[name=admin-option]{
    text-transform: capitalized;
    text-align: center;
    font-size: 1rem;
    width: 8rem;
    padding: 0.2rem 0.5rem 0.2rem 0.5rem;
    margin: 0.3rem 0.1rem 0.3rem 0.1rem;
    text-align: left;
    border: none;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background-color: #3D94F6;
}
button[name=admin-option]:hover{    
    background: #1E62D0;
    border: solid #337FED 0;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    text-decoration: none;
}
`;