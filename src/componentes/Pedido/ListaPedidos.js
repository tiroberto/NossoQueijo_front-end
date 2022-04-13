import React from "react";
import styled from "styled-components";
import Pedido from "./Pedido";

export default function ListaPedidos({ value }) {
    const { items } = value.resultLogin.pedidos;
    return (
        <ListaPedidosWrapper>
            <div className="card">
                <div className="div-title mt-2"><h5>Meus pedidos</h5></div>
                <div className="p-2 container">
                    <div className="row">
                        {items.map(item => {                            
                            return <Pedido key={item.idPedido} item={item} value={value} />
                        })}
                    </div>
                </div>
            </div>
        </ListaPedidosWrapper>
    );
}

const ListaPedidosWrapper = styled.div`
margin-top: 1.6rem;
.card{
    padding: 4px;
    border-style:solid;
    transition:all 0.3s linear;
}
.div-title{
    text-align: center;
    font-size: 1rem;
    margin: 0 12px 0 12px;
    padding: 4px;
    background: var(--lightBlue2);
}
`;