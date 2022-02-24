import React from "react";
import Title from "../Title";

export default function CartVazio() {
    return (
        <div className="container py-5 background-white">
            <div className="row">
                <div className="text-center text-title">
                    <Title name="CARRINHO " title="VAZIO" />
                </div>
            </div>
        </div>
    );
}