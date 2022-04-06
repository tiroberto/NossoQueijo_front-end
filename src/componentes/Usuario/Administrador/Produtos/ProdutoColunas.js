import React from "react";

export default function ProdutoColunas() {
    return (
        <div className="container-fluid d-none d-lg-block">
            <div className="row align-items-center text-center">
                <div className="col-3 mx-auto col-lg-2">
                    <strong><p className="text-uppercase">Produto</p></strong>
                </div>
                <div className="col-3 mx-auto col-lg-2">
                    <strong><p className="text-uppercase">Nome produto</p></strong>
                </div>
                <div className="col-3 mx-auto col-lg-2">
                    <strong><p className="text-uppercase">Estoque</p></strong>
                </div>
                <div className="col-3 mx-auto col-lg-2">
                    <strong><p className="text-uppercase"></p></strong>
                </div>
            </div>
        </div>
    );
}