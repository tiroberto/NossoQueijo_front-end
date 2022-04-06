import React, { Component } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

export default class Default extends Component {
    render() {
        return (
            <div className="container py-5 background-white">
                <div className="row">
                    <div className="text-center text-title">
                        <Title name="PÁGINA " title="NÃO ENCONTRADA" />
                    </div>
                    <div className="text-center">
                        <Link to="/">
                            <button type="button">
                                Voltar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}