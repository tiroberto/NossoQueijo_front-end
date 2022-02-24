import React from "react";

export default function PedidoColunas() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row">
                <div className="col-10 mx-auto col-lg-2">
                    <strong><p className="text-uppercase">Produto</p></strong>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong><p className="text-uppercase">Nome produto</p></strong>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong><p className="text-uppercase">Preço unitário</p></strong>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong><p className="text-uppercase">Quantidade</p></strong>
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    <strong><p className="text-uppercase">Subtotal</p></strong>
                </div>
            </div>
        </div>
    );
}