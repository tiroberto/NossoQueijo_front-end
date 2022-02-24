import React from "react";

export default function CartItem(item) {
    const { idProduto, nome, imagem, preco, qntdEstoque, total } = item.item;
    const { incrementoProduto, decrementoProduto, removerItemCarrinho, limparCarrinho, calculaTotal } = item.value;
    return (
        <div className="row my-1 text-capitalize text-center">
            <div className="col-10 mx-buto col-lg-2">
                <img src={imagem} style={{ width: "5rem", height: "5rem" }} className="img-fluid" alt="produto" />
            </div>
            <div className="col-10 mx-buto col-lg-2">
                <span className="d-lg-none">Produto: </span>
                {nome}
            </div>
            <div className="col-10 mx-buto col-lg-2">
                <span className="d-lg-none">Preco: R$</span>
                {preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => {
                            decrementoProduto(idProduto);
                        }}>
                            <i className="fas fa-minus" />
                        </span>
                        <span className="btn-btn-black mx-1">{qntdEstoque}</span>
                        <span className="btn btn-black mx-1" onClick={() => {
                            incrementoProduto(idProduto);
                        }}>
                            <i className="fas fa-plus" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-buto col-lg-2">
                <div className="cart-icon">
                    <span className="mx-1" onClick={() => { removerItemCarrinho(idProduto); }}>
                        <i className="fas fa-trash" />
                    </span>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <strong>{total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }).replace(".", ",")}</strong>
            </div>
        </div>
    );
}