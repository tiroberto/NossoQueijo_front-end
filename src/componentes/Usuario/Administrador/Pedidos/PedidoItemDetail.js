import React from "react";

export default function PedidoItemDetail(item) {
    const { idProduto, nome, imagem, preco } = item.item.produto;
    const { quantidade } = item.item;
    var subtotal = quantidade * preco;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src={imagem} style={{ width: "5rem", height: "5rem" }} className="img-fluid" alt="produto" />
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Produto: </span>
                {nome}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Preco: R$</span>
                R$ {preco}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <span className="btn-btn-black mx-1">{quantidade}</span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>R$ {subtotal}</strong>
            </div>
        </div>
    );
}