import styled from "styled-components";
import React from "react";

export default function Paginacao(data) {
    const { pageCount, totalItemCount } = data.data;
    const { local } = data;
    const { filtroPedidosAdmin, filtroFichaProducao, listarFichasProducaoFiltro, listarPedidosFiltro } = data.value;

    function renderPages() {
        var items = [];
        for (var i = 1; i <= pageCount; i++)
            items.push(i);
        return items;
    }

    function getItemsPage(page) {
        var data = {};

        if (local == "pedido") {
            if (filtroPedidosAdmin.filtro == "periodo") {
                data = { idFiltro: "", dataInicial: filtroPedidosAdmin.dataInicial, dataFinal: filtroPedidosAdmin.dataFinal, pagina: page };
                listarPedidosFiltro(data);
            }
            else if (filtroPedidosAdmin.filtro == "cliente") {
                data = { idFiltro: filtroPedidosAdmin.idFiltro, pagina: page, dataInicial: "", dataFinal: "" };
                listarPedidosFiltro(data);
            }
            else if (filtroPedidosAdmin.filtro == "status") {
                data = { idFiltro: filtroPedidosAdmin.idFiltro, pagina: page, dataInicial: "", dataFinal: "" };
                listarPedidosFiltro(data);
            }
            else if (filtroPedidosAdmin.filtro == "formaPagamento") {
                data = { idFiltro: filtroPedidosAdmin.idFiltro, pagina: page, dataInicial: "", dataFinal: "" };
                listarPedidosFiltro(data);
            }
        }
        else if (local == "fichaProducao") {
            if (filtroFichaProducao.filtro == "periodo") {
                data = { periodoInicio: filtroFichaProducao.periodoInicio, periodoFim: filtroFichaProducao.periodoFim, pagina: page, idUsuario: "" };
                listarFichasProducaoFiltro(data);
            }
            else if (filtroFichaProducao.filtro == "usuario") {
                data = { idUsuario: filtroFichaProducao.idUsuario, pagina: page, periodoInicio: "", periodoFim: "" };
                listarFichasProducaoFiltro(data);
            }
        }
    }

    function setDirecao(direcao) {
        if (direcao == "proximo") {
            if ((pageCount > 1 && (filtroFichaProducao.paginaAtual < pageCount && local == "fichaProducao")) || (pageCount > 1 && (filtroPedidosAdmin.paginaAtual < pageCount && local == "pedido"))) {
                if (local == "pedido")
                    getItemsPage(filtroPedidosAdmin.paginaAtual + 1)
                else if (local == "fichaProducao")
                    getItemsPage(filtroFichaProducao.paginaAtual + 1)
            }
        }
        else if (direcao == "anterior") {
            if (pageCount > 1 && (filtroFichaProducao.paginaAtual > 1 || filtroPedidosAdmin.paginaAtual > 1)) {
                if (local == "pedido")
                    getItemsPage(filtroPedidosAdmin.paginaAtual - 1)
                else if (local == "fichaProducao")
                    getItemsPage(filtroFichaProducao.paginaAtual - 1)
            }
        }
    }

    return (
        <div>
            <PaginacaoContainer>
                <div onClick={() => { setDirecao("anterior") }}><i className="fa fa-angle-left px-2" /> anterior</div>

                {renderPages().map(item => {
                    return <div key={item} onClick={() => { getItemsPage(item) }}>{item}</div>
                })}

                <div onClick={() => { setDirecao("proximo") }}><i className="fa fa-angle-right px-2" /> próximo</div>
            </PaginacaoContainer>
        </div>
    );
}

const PaginacaoContainer = styled.section`
display: flex;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
overflow: auto;
flex-direction: row;
div {
    padding 1px 5px;
    margin: 5px;
    background-color: var(--lightBlue2);
    cursor: pointer;
}
`;