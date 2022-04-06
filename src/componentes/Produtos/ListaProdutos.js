import React, { useState, Component } from "react";
import Produto from "./Produto";
import Title from "../Title";
import { ProdutoConsumer } from "../../Contexto";
import AliceCarousel from 'react-alice-carousel';
import styled from "styled-components";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../Imagens/queijo-slider.jpg";
import image2 from "../../Imagens/queijo2-slider.jpg";
import image3 from "../../Imagens/queijo3-slider.jpg";

export default class ListaProdutos extends Component {
    render() {
        return (
            <div className="background-white">
                <SliderWrapper>
                    <AliceCarousel autoPlay disableButtonsControls infinite autoPlayInterval="3000">
                        <img src={image1} className="sliderimg" />
                        <img src={image2} className="sliderimg" />
                        <img src={image3} className="sliderimg" />
                    </AliceCarousel>
                </SliderWrapper>
                <div className="container py-5">
                    <Title name="NOSSOS " title="PRODUTOS" />
                    <div className="row my-5 mx-5">
                        <ProdutoConsumer>
                            {value => {
                                return value.produtos.map(produto => {
                                    return <Produto key={produto.idProduto} produto={produto} />
                                })
                            }}
                        </ProdutoConsumer>
                    </div>
                </div>
            </div>
        );
    }
}

const SliderWrapper = styled.div`
.sliderimg{
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;