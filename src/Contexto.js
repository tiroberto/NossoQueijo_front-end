import React, { Component } from "react";
import api from "./Serviços/api";
import { useHistory, Redirect } from "react-router-dom";
import axios from "axios";

const ProdutoContexto = React.createContext();

class ProdutoProvider extends Component {
    state = {
        modalExcluirNomeEntidade: "",
        modalIdExcluir: 0,
        modalExcluirOpen: false,
        detalhesProdutoAdmin: Object,
        enderecoPedidoSelecionado: Object,
        valorFreteConsultado: 0,
        resultadoConsultaCorreios: { Valor: 0 },
        freteConsultado: false,
        produtosListaBusca: [],
        pathModalMensagem: "",
        dataFichaProducaoCSV: [],
        dataCSV: [],
        menuAdminShow: false,
        mensagemModalMensagem: "",
        menuAdmin: false,
        detalhesFichaProducao: Object,
        idFiltroAtual: 0,
        spinnerOpen: false,
        pedidosListadosFiltro: [],
        fichasProducaoListadosFiltro: [],
        filtroPedidosAdmin: "",
        filtroFichaProducao: "",
        usuariosList: [],
        statusList: [],
        cidadesMostrar: [],
        cidadesMostrarDisabled: true,
        produtos: [],
        cidades: [],
        estados: [],
        detalhesProduto: Object,
        detalhesPedido: Object,
        detalhesPedidoAdmin: Object,
        enderecoEditar: Object,
        carrinho: [],
        modalOpen: false,
        modalMensagemOpen: false,
        modalEditarStatusOpen: false,
        modalProduto: Object,
        modalPedidoEditarStatus: Object,
        carrinhoTotal: 0,
        formasPagamento: [],
        cidadesEstadoSelecionado: Object,
        formaPagamentoSelecionada: Object,
        editarEnderecoInputs: [
            {
                input: "logradouro",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "numero",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "bairro",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "cep",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "cidade",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            }
        ],
        loginInputs: [
            {
                input: "email",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "password",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            }
        ],
        cadastroProdutoInputs: [
            {
                input: "nome",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "preco",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "peso",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            }
            ,
            {
                input: "quantidade",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            }
            ,
            {
                input: "linkImagem",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            }
        ],
        cadastroInputs: [
            {
                input: "nome",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "cpf",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "dataNascimento",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "email",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "password",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "confirmPassword",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            }
        ],
        cadastroFichaProducaoInputs: [
            {
                input: "data",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "usuario",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "volumePingo",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "volumeLeite",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "volumeCoalho",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "qntdSal",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "qntdProduzida",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            },
            {
                input: "produto",
                error: "",
                inputValue: "",
                errorNotVisible: true,
                resultVerificacao: false
            }
        ],
        resultLogin: {
            usuario: Object,
            message: "",
            pedidos: [],
            enderecos: [],
            logado: false,
            token: ""
        }
    };








    componentDidMount() {
        this.setProdutos();
        this.setFormasPagamento();
        //this.handleSubmitLogin({ email: "cliente@cliente.com", senha: "clientecliente123" });
        //this.handleSubmitLogin({ email: "humbertojrpratinha@gmail.com", senha: "418951230hj" });
        this.setCidades();
        this.setEstados();
        this.setStatus();
        this.setUsuarios();
        this.setFichasProducao();
    };

    setFichasProducao = async () => {
        try {
            await api.get('/FichaProducao/listar')
                .then(res => {
                    this.setState({ fichaProducaoList: res.data });
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    setUsuarios = async () => {
        try {
            await api.get('/Usuario/listar')
                .then(res => {
                    var usuarios = res.data;
                    this.namesOrder(usuarios);
                    this.setState({ usuariosList: usuarios });
                    console.log(usuarios);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    setStatus = async () => {
        try {
            await api.get('/Status/listar')
                .then(res => {
                    this.setState({ statusList: res.data });
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    setFormasPagamento = async () => {
        try {
            api.get('/FormaPagamento/listar')
                .then(res => {
                    this.setState({ formasPagamento: res.data });
                })
                .catch(err => {
                    console.log(err);
                });
        }
        catch (error) {
            console.log(error);
        }
    };

    setCidades = async () => {
        try {
            api.get('/Cidade/listar')
                .then(res => {
                    this.setState({ cidades: res.data });
                })
                .catch(err => {
                    console.log(err);
                });
        }
        catch (error) {
            console.log(error);
        }
    };

    setEstados = async () => {
        try {
            await api.get('/Estado/listar')
                .then(res => {
                    console.log(res.data);
                    this.setState({ estados: res.data });
                })
                .catch(err => {
                    console.log(err);
                });
        }
        catch (error) {
            console.log(error);
        }
    };

    setFiltroListagem = (input) => {
        var inputCliente = document.querySelector(`input[id=rdCliente]`);
        var inputStatus = document.querySelector(`input[id=rdStatus]`);
        var inputFormaPagamento = document.querySelector(`input[id=rdFormaPagamento]`);
        var inputPeriodo = document.querySelector(`input[id=rdPeriodo]`);

        if (input == "rdCliente") {
            this.setState(() => {
                return { filtroPedidosAdmin: "cliente" };
            });
            inputStatus.checked = false;
            inputFormaPagamento.checked = false;
            inputPeriodo.checked = false;
        }
        else if (input == "rdStatus") {
            this.setState(() => {
                return { filtroPedidosAdmin: "status" };
            });
            inputCliente.checked = false;
            inputFormaPagamento.checked = false;
            inputPeriodo.checked = false;
        }
        else if (input == "rdFormaPagamento") {
            this.setState(() => {
                return { filtroPedidosAdmin: "formaPagamento" };
            });
            inputStatus.checked = false;
            inputCliente.checked = false;
            inputPeriodo.checked = false;
        }
        else if (input == "rdPeriodo") {
            this.setState(() => {
                return { filtroPedidosAdmin: "periodo" };
            });
            inputStatus.checked = false;
            inputCliente.checked = false;
            inputFormaPagamento.checked = false;
        }
    };

    setFiltroListagemFichaProducao = (input) => {
        var inputUsuario = document.querySelector(`input[id=rdUsuario]`);
        var inputPeriodo = document.querySelector(`input[id=rdPeriodo]`);

        if (input == "rdUsuario") {
            this.setState(() => {
                return { filtroFichaProducao: "usuario" };
            });
            inputPeriodo.checked = false;
        }
        else if (input == "rdPeriodo") {
            this.setState(() => {
                return { filtroFichaProducao: "periodo" };
            });
            inputUsuario.checked = false;
        }
    };

    setProdutos = async () => {
        try {
            this.openSpinner();
            await api.get('/Produto/listar')
                .then(res => {
                    console.log(res.data);
                    this.setState({ produtos: res.data });
                })
                .catch(err => {
                    console.log(err);
                });
            this.closeSpinner();
        }
        catch (error) {
            console.log(error);
        }
    };





    handleDetalheProdutoAdmin = idProduto => {
        const produto = this.state.produtos.find(item => item.idProduto === idProduto);
        this.setState(() => {
            return { detalhesProdutoAdmin: produto };
        });
    };

    handleDetalheFichaProducao = idFichaProducao => {
        const fichaProducao = this.state.fichaProducaoList.find(item => item.idFichaProducao === idFichaProducao);
        this.setState(() => {
            return { detalhesFichaProducao: fichaProducao };
        });
    };

    handleDetalhe = idProduto => {
        const produto = this.getItem(idProduto);
        this.setState(() => {
            return { detalhesProduto: produto };
        });
    };

    handleDetalhePedido = idPedido => {
        const pedido = this.state.resultLogin.pedidos.find(item => item.idPedido === idPedido);
        this.setState(() => {
            return { detalhesPedido: pedido };
        });
    };

    handleDetalhePedidoAdmin = idPedido => {
        const pedido = this.state.pedidosListadosFiltro.find(item => item.idPedido === idPedido);
        this.setState(() => {
            return { detalhesPedidoAdmin: pedido };
        });
    };

    handleCidadesMostrar = () => {
        const selectEstado = document.querySelector("select[id=selectEstado]");
        const estado = this.state.estados.find(item => item.idEstado == selectEstado.value);
        const cidadesMostrar = estado.cidades;
        this.state.cidadesMostrarDisabled = false;

        this.setState({
            cidadesMostrar: cidadesMostrar
        });
    };

    handleEnderecoEditar = idEndereco => {
        const endereco = this.state.resultLogin.usuario.enderecos.find(item => item.idEndereco === idEndereco);
        this.setState(() => {
            return { enderecoEditar: endereco };
        });
    };

    handleFormaPagamento = (idFormaPagamento) => {
        const formaPagamento = this.state.formasPagamento.find(item => item.idFormaPagamento === idFormaPagamento);
        this.setState(() => {
            return { formaPagamentoSelecionada: formaPagamento };
        })
    };

    handleLogOut = () => {
        var resultLoginInicial = {
            usuario: Object,
            message: "",
            pedidos: [],
            enderecos: [],
            logado: false,
            token: ""
        };
        this.setState(() => {
            return { resultLogin: resultLoginInicial };
        });
    };

    handleBuscaProdutos = () => {
        var listaProdutos = [];
        var produtos = this.state.produtos;
        var inputBusca = document.querySelector("input[type=text]").value.toLowerCase();

        if (inputBusca.value != "")
            for (var i = 0; i < produtos.length; i++) {
                if (produtos[i].nome.toLowerCase().includes(inputBusca))
                    listaProdutos.push(produtos[i]);
            }

        this.setState(() => {
            return { produtosListaBusca: listaProdutos };
        });
    };

    handleEnderecoPedido = (idEndereco) => {
        try {
            this.openSpinner();
            const endereco = this.state.resultLogin.enderecos.find(item => item.idEndereco == idEndereco);
            const valorFrete = this.calcularFreteComParametro(endereco.cep);
            console.log(endereco);
            this.setState(() => {
                return { enderecoPedidoSelecionado: endereco, resultadoConsultaCorreios: valorFrete, freteConsultado: true };
            });
            this.closeSpinner();
        }
        catch (error) {
            console.log(error);
        }
    };



    handleDeleteProdutoAdmin = async (idProduto) => {
        try {
            this.openSpinner();

            await api.delete(`/Produto/excluir?id=${idProduto}`)
                .then((res) => {
                    console.log(res);
                    if (res.data.isValid) {
                        let indexProdutoExcluir = this.state.produtos.map(item => { return item.idProduto }).indexOf(idProduto);
                        let produtosAntigo = this.state.produtos;
                        if (indexProdutoExcluir > -1)
                            produtosAntigo.splice(indexProdutoExcluir, 1);
                        const produtosAtualizar = produtosAntigo;
                        this.setState(() => {
                            return { produtos: produtosAtualizar };
                        });
                        this.closeSpinner();
                        this.openModalMensagem("Excluído com sucesso!", "/admin-produtos")
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        catch (error) {
            console.log(error);
        }
    };

    handleSubmitCadastroFichaProducao = async (fichaProducaoSalvar) => {
        try {
            this.openSpinner();

            if (fichaProducaoSalvar.idFichaProducao > 0) {
                let indexFichaProducaoAntiga = this.state.fichaProducaoList.map(item => { return item.idFichaProducao }).indexOf(fichaProducaoSalvar.idFichaProducao);
                fichaProducaoSalvar.usuario = this.state.usuariosList.find(item => item.idUsuario == fichaProducaoSalvar.usuario.idUsuario);
                fichaProducaoSalvar.produto = this.state.produtos.find(item => item.idProduto == fichaProducaoSalvar.produto.idProduto);
                let fichaProducaoListAntigo = this.state.fichaProducaoList;
                fichaProducaoListAntigo[indexFichaProducaoAntiga] = fichaProducaoSalvar;
                const fichaProducaoListAtualizar = fichaProducaoListAntigo;

                await api.post("/FichaProducao/salvar", fichaProducaoSalvar)
                    .then((res) => {
                        console.log(res);
                        this.setState(() => {
                            return { fichaProducaoList: fichaProducaoListAtualizar, detalhesFichaProducao: fichaProducaoSalvar };
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            else {
                var fichaProducaoListAntigo = this.state.fichaProducaoList;
                fichaProducaoSalvar.usuario = this.state.usuariosList.find(item => item.idUsuario == fichaProducaoSalvar.usuario.idUsuario);
                fichaProducaoSalvar.produto = this.state.produtos.find(item => item.idProduto == fichaProducaoSalvar.produto.idProduto);
                await api.post("/FichaProducao/salvar", fichaProducaoSalvar)
                    .then((res) => {
                        console.log(res);
                        var fichaProducao = res.data.result;

                        if (fichaProducao.idFichaProducao > 0) {
                            fichaProducaoListAntigo.push(fichaProducao);
                            var fichaProducaoListAtualizar = fichaProducaoListAntigo;
                            this.setState(() => {
                                return { fichaProducaoList: fichaProducaoListAtualizar };
                            });
                            this.openModalMensagem("Ficha de produção cadastrada com sucesso!", "/admin-fichasproducao");
                            this.closeSpinner();
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    handleSubmitEditarEndereco = async (novoEnderecoSalvar) => {
        try {
            this.openSpinner();
            var result = false;
            if (novoEnderecoSalvar.idEndereco > 0) {
                await api.post("/Endereco/salvar", novoEnderecoSalvar)
                    .then((res) => {
                        console.log(res);
                        result = res.data.hasResult;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                if (result) {
                    const cidade = this.state.cidades.find(item => item.idCidade == novoEnderecoSalvar.cidade.idCidade);
                    novoEnderecoSalvar.cidade = cidade;
                    let indexEnderecoAntigo = this.state.resultLogin.enderecos.map(item => { return item.idEndereco }).indexOf(novoEnderecoSalvar.idEndereco);
                    let resultLoginAntigo = this.state.resultLogin;
                    resultLoginAntigo.enderecos[indexEnderecoAntigo] = novoEnderecoSalvar;
                    const resultLoginAtualizar = resultLoginAntigo;
                    this.setState(() => {
                        return { resultLogin: resultLoginAtualizar, enderecoEditar: novoEnderecoSalvar };
                    });
                }
            }
            else {
                var resultLoginAtualizar = this.state.resultLogin;
                await api.post("/Endereco/salvar", novoEnderecoSalvar)
                    .then((res) => {
                        console.log(res);
                        novoEnderecoSalvar.idEndereco = res.data.result.idEndereco;
                        result = res.data.hasResult;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
                if (novoEnderecoSalvar.idEndereco > 0 && result) {
                    const cidade = this.state.cidades.find(item => item.idCidade == novoEnderecoSalvar.cidade.idCidade);
                    novoEnderecoSalvar.cidade = cidade;
                    resultLoginAtualizar.enderecos.push(novoEnderecoSalvar);
                    this.setState(() => {
                        return { resultLogin: resultLoginAtualizar };
                    });
                }
            }
            this.closeSpinner();
            this.openModalMensagem("Salvo com sucesso!", "/user");
        }
        catch (error) {
            console.log(error);
        }
    };

    handleSubmitLogin = async (usuarioLogin) => {
        try {
            this.openSpinner();
            await api.post(`/Usuario/login?email=${usuarioLogin.email}&senha=${usuarioLogin.senha}`)
                .then(res => {
                    if (!res.data.logado && (res.data.token == "")) {
                        this.closeSpinner();
                        this.openModalMensagem("Usuário ou senha inválidos!", "/login")
                    }
                    else {
                        this.closeSpinner();
                        this.openModalMensagem("Login efetuado com sucesso!", "/user");
                        if (res.data.usuario.tipoUsuario.idTipoUsuario == 1)
                            var menuAdminShow = true;
                        this.setState(() => {
                            return { resultLogin: res.data, menuAdminShow: menuAdminShow };
                        });
                        console.log(res);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
        catch (error) {
            console.log(error);
        }
    };

    listarPedidosFiltro = async (data) => {
        try {
            this.openSpinner();
            if (this.state.filtroPedidosAdmin == "cliente") {
                await api.get(`/Pedido/listar-por-usuario?idUsuario=${data.idFiltro}`)
                    .then(res => {
                        this.setState({ pedidosListadosFiltro: res.data.result, idFiltroAtual: data.idFiltro });
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                this.handleDataCSV();
            }
            else if (this.state.filtroPedidosAdmin == "status") {
                await api.get(`/Pedido/listar-por-status?idStatus=${data.idFiltro}`)
                    .then(res => {
                        this.setState({ pedidosListadosFiltro: res.data.result, idFiltroAtual: data.idFiltro });
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                this.handleDataCSV();
            }
            else if (this.state.filtroPedidosAdmin == "formaPagamento") {
                await api.get(`/Pedido/listar-por-formapagamento?idFormaPagamento=${data.idFiltro}`)
                    .then(res => {
                        this.setState({ pedidosListadosFiltro: res.data.result, idFiltroAtual: data.idFiltro });
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                this.handleDataCSV();
            }
            else if (this.state.filtroPedidosAdmin == "periodo") {
                await api.get(`/Pedido/listar-por-periodo?inicio=${data.dataInicial}&fim=${data.dataFinal}`)
                    .then(res => {
                        this.setState({ pedidosListadosFiltro: res.data.result });
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                this.handleDataCSV();
            }
            this.closeSpinner();
        }
        catch (error) {
            console.log(error);
        }
    };

    listarFichasProducaoFiltro = async (data) => {
        try {
            this.openSpinner();
            if (this.state.filtroFichaProducao == "usuario")
                await api.get(`/FichaProducao/listar-por-usuario?idUsuario=${data.idUsuario}`)
                    .then(res => {
                        this.setState({ fichasProducaoListadosFiltro: res.data.result });
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            else if (this.state.filtroFichaProducao == "periodo")
                await api.get(`/FichaProducao/listar-por-periodo?inicio=${data.periodoInicio}&fim=${data.periodoFim}`)
                    .then(res => {
                        this.setState({ fichasProducaoListadosFiltro: res.data.result });
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            this.handleDataCSVFichaProducao();
            this.closeSpinner();
        }
        catch (error) {
            console.log(error);
        }
    };

    editarStatusPedido = async (pedidoEditar) => {
        try {
            this.openSpinner();
            await api.post("/Pedido/salvar", pedidoEditar)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
            const status = this.state.statusList.find(item => item.idStatus == pedidoEditar.status.idStatus);
            pedidoEditar.status = status;
            let indexPedidoEditar = this.state.pedidosListadosFiltro.map(item => { return item.idPedido }).indexOf(pedidoEditar.idPedido);
            let pedidosListadosAntigo = this.state.pedidosListadosFiltro;
            if (indexPedidoEditar > -1)
                pedidosListadosAntigo.splice(indexPedidoEditar, 1);
            const pedidosListadosAtualizar = pedidosListadosAntigo;
            this.setState(() => {
                return { pedidosListadosFiltro: pedidosListadosAtualizar, detalhesPedidoAdmin: pedidoEditar };
            });
            this.closeSpinner();
            this.openModalMensagem("Editado com sucesso!", "/order-detail-admin");
        }
        catch (error) {
            console.log(error);
        }
    };

    handleSubmitCadastroUsuario = async (usuarioSalvar) => {
        try {
            this.openSpinner();
            var usuariosListAtualizar = this.state.usuariosList;
            await api.post("/Usuario/salvar", usuarioSalvar)
                .then((res) => {
                    console.log(res);
                    var usuario = res.data.result;

                    if (usuario.idUsuario > 0) {
                        usuariosListAtualizar.push(usuario);
                        this.setState(() => {
                            return { usuariosList: usuariosListAtualizar };
                        });
                        this.closeSpinner();
                        this.openModalMensagem(res.data.message, "/login");
                    }
                    else {
                        this.openModalMensagem("Erro", "/login");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        }
        catch (error) {
            console.log(error);
        }
    };

    confirmPedido = async () => {
        try {
            this.openSpinner();
            const tempPedidoProdutos = this.state.carrinho;
            const usuarioLogadoPedido = this.state.resultLogin.usuario;
            var pedido = {
                idPedido: 0,
                usuario: usuarioLogadoPedido,
                valorFrete: parseFloat(this.state.resultadoConsultaCorreios.Valor),
                data: new Date(),
                formaPagamento: this.state.formaPagamentoSelecionada,
                enderecoEntrega: this.state.enderecoPedidoSelecionado,
                status: { idStatus: 7 },
                pedidoProdutos: []
            };

            for (let i = 0; i < tempPedidoProdutos.length; i++) {
                const pedidoProdutos = {
                    idProduto: tempPedidoProdutos[i].idProduto,
                    idPedido: 0,
                    quantidade: tempPedidoProdutos[i].qntdEstoque
                }
                pedido.pedidoProdutos.push(pedidoProdutos);
                this.getItem(tempPedidoProdutos[i].idProduto).adicionadoAoCarrinho = false;
            }

            var resultLoginAtualizar = this.state.resultLogin;
            var result = false;
            await api.post("/Pedido/salvar", pedido)
                .then((res) => {
                    console.log(res);
                    pedido.idPedido = res.data.result.idPedido;
                    pedido.pedidoProdutos.forEach(item => {
                        item.idPedido = res.data.result.idPedido;
                    })
                    result = res.data.hasResult;
                })
                .catch((error) => {
                    console.log(error);
                });
            if (pedido.idPedido > 0 && result) {
                var status = this.state.statusList.find(item => item.idStatus == pedido.status.idStatus);
                pedido.status = status;
                for (var i = 0; i < pedido.pedidoProdutos.length; i++) {
                    var produto = this.state.produtos.find(item => item.idProduto == pedido.pedidoProdutos[i].idProduto);
                    pedido.pedidoProdutos[i].produto = produto;
                }
                resultLoginAtualizar.pedidos.push(pedido);
                this.closeSpinner();
                this.openModalMensagem("Pedido realizado!", "/");
            }
            this.setState(() => {
                return {
                    resultLogin: resultLoginAtualizar,
                    detalhesProduto: Object,
                    carrinho: [],
                    modalOpen: false
                };
            });

        }
        catch (error) {
            console.log(error);
        }
    };

    handleDeleteEndereco = async (idEndereco) => {
        try {
            this.openSpinner();

            await api.delete(`/Endereco/excluir?id=${idEndereco}`)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
            let indexEnderecoExcluir = this.state.resultLogin.enderecos.map(item => { return item.idEndereco }).indexOf(idEndereco);
            let resultLoginAntigo = this.state.resultLogin;
            if (indexEnderecoExcluir > -1)
                resultLoginAntigo.enderecos.splice(indexEnderecoExcluir, 1);
            const resultLoginAtualizar = resultLoginAntigo;
            this.setState(() => {
                return { resultLogin: resultLoginAtualizar };
            });
            this.closeSpinner();
            this.openModalMensagem("Excluído com sucesso!", "/user")
        }
        catch (error) {
            console.log(error);
        }
    };

    handleDeleteFichaProducao = async (idFichaProducao) => {
        try {
            this.openSpinner();
            await api.delete(`/FichaProducao/excluir?id=${idFichaProducao}`)
                .then((res) => {
                    console.log(res);
                })
                .catch((error) => {
                    console.log(error);
                });
            let indexFichaProducaoExcluir = this.state.fichasProducaoListadosFiltro.map(item => { return item.idFichaProducao }).indexOf(idFichaProducao);
            let fichaProducaoListAntigo = this.state.fichasProducaoListadosFiltro;
            if (indexFichaProducaoExcluir > -1)
                fichaProducaoListAntigo.splice(indexFichaProducaoExcluir, 1);
            const fichaProducaoListAtualizar = fichaProducaoListAntigo;
            this.setState(() => {
                return { fichasProducaoListadosFiltro: fichaProducaoListAtualizar };
            });
            this.closeSpinner();
            this.openModalMensagem("Excluído com sucesso!", "/admin-fichasproducao");
        }
        catch (error) {
            console.log(error);
            this.openModalMensagem("Acho que não deu certo!", "/admin-fichasproducao");
        }
    };

    handleSubmitCadastroProduto = async (produtoCadastrar) => {
        try {
            this.openSpinner();
            var produto = {
                idProduto: 0,
                nome: produtoCadastrar.nome,
                qntdEstoque: produtoCadastrar.qntdEstoque,
                preco: produtoCadastrar.preco,
                peso: produtoCadastrar.peso,
                imagem: produtoCadastrar.imagem
            };

            await api.post("/Produto/salvar", produto)
                .then((res) => {
                    console.log(res);
                    var produto = res.data.result;
                    var produtosAtualizar = this.state.produtos;

                    if (produto.idProduto > 0) {
                        produtosAtualizar.push(produto);
                        this.setState(() => {
                            return {
                                produtos: produtosAtualizar
                            };
                        });
                        this.closeSpinner();
                        this.openModalMensagem("Produto cadastrato com sucesso", "/admin-produtos");
                    }
                })
                .catch((error) => {
                    console.log(error);
                    this.openModalMensagem(error, "/admin-produtos");
                });
        }
        catch (error) {
            console.log(error);
        }
    };

    handleDeletePedido = async (idPedido) => {
        try {
            this.openSpinner();
            await api.delete(`/Pedido/excluir?id=${idPedido}`)
                .then((res) => {
                    console.log(res);
                    if (res.data.result) {
                        let indexPedidoExcluir = this.state.pedidosListadosFiltro.map(item => { return item.idPedido }).indexOf(idPedido);
                        let pedidosListadosFiltroAntigo = this.state.pedidosListadosFiltro;
                        if (indexPedidoExcluir > -1) {
                            pedidosListadosFiltroAntigo.splice(indexPedidoExcluir, 1);
                            this.setState(() => {
                                return { pedidosListadosFiltro: pedidosListadosFiltroAntigo };
                            });
                            this.closeSpinner();
                            this.openModalMensagem("Excluído com sucesso!", "/admin-pedidos");
                        }
                        else {
                            throw error;
                        }
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
            this.closeSpinner();
        }
        catch (error) {
            console.log(error);
            this.openModalMensagem("Erro", "/admin-pedidos");
        }
    };




    handleChangeCadastroProduto = () => {
        let inputs = this.state.cadastroProdutoInputs;
        let inputNome = document.querySelector("input[id=inputNome]");
        let inputPreco = document.querySelector("input[id=inputPreco]");
        let inputPeso = document.querySelector("input[id=inputPeso]");
        let inputQuantidade = document.querySelector("input[id=inputQuantidade]");
        let inputImagem = document.querySelector("input[id=inputImagem]");

        inputs[0].inputValue = inputNome.value;
        inputs[1].inputValue = inputPreco.value;
        inputs[2].inputValue = inputPeso.value;
        inputs[3].inputValue = inputQuantidade.value;
        inputs[4].inputValue = inputImagem.value;
        this.setState({
            cadastroProdutoInputs: inputs
        });
        this.validateInputsCadastroProduto();
    };

    handleChangeCadastroFichaProducao = () => {
        let inputs = this.state.cadastroFichaProducaoInputs;
        let inputData = document.querySelector("input[type=date]");
        let selectUsuario = document.querySelector("select[id=selectUsuario]");
        let inputVolumePingo = document.querySelector("input[id=inputVolumePingo]");
        let inputVolumeLeite = document.querySelector("input[id=inputVolumeLeite]");
        let inputVolumeCoalho = document.querySelector("input[id=inputVolumeCoalho]");
        let inputQntdSal = document.querySelector("input[id=inputQntdSal]");
        let inputQntdProduzida = document.querySelector("input[id=inputQntdProduzida]");
        let selectProduto = document.querySelector("select[id=selectProduto]");
        inputs[0].inputValue = inputData.value;
        inputs[1].inputValue = selectUsuario.value;
        inputs[2].inputValue = inputVolumePingo.value;
        inputs[3].inputValue = inputVolumeLeite.value;
        inputs[4].inputValue = inputVolumeCoalho.value;
        inputs[5].inputValue = inputQntdSal.value;
        inputs[6].inputValue = inputQntdProduzida.value;
        inputs[7].inputValue = selectProduto.value;
        this.setState({
            cadastroFichaProducaoInputs: inputs
        });
        this.validateInputsCadastroFichaProducao();
    };

    handleChangeCadastro = () => {
        let inputs = this.state.cadastroInputs;
        let inputNome = document.querySelector("input[id=InputNome]");
        let inputCPF = document.querySelector("input[id=InputCPF]");
        let inputDataNascimento = document.querySelector("input[type=date]");
        let inputEmail = document.querySelector("input[type=email]");
        let inputSenha = document.querySelector("input[id=InputPassword]");
        let inputConfirmSenha = document.querySelector("input[id=InputConfirmPassword]");
        inputs[0].inputValue = inputNome.value;
        inputs[1].inputValue = inputCPF.value;
        inputs[2].inputValue = inputDataNascimento.value;
        inputs[3].inputValue = inputEmail.value;
        inputs[4].inputValue = inputSenha.value;
        inputs[5].inputValue = inputConfirmSenha.value;
        this.setState({
            cadastroInputs: inputs
        });
        this.validateInputsCadastro();
    };

    handleChangeLogin = () => {
        let inputs = this.state.loginInputs;
        let inputEmail = document.querySelector("input[type=email]");
        let inputSenha = document.querySelector("input[id=InputPassword1]");
        inputs[0].inputValue = inputEmail.value;
        inputs[1].inputValue = inputSenha.value;
        this.setState({
            loginInputs: inputs
        });
        this.validateEmailSenhaLogin();
    };

    handleChangeEstadoSelecionado = (idEstado) => {
        const cidadesEstadoSelecionado = this.state.cidadesEstadoSelecionado.find(item => item.idEstado === idEstado);
    };

    handleChangeEditarEndereco = () => {
        let editarEnderecoInputs = this.state.editarEnderecoInputs;
        let inputLogradouro = document.querySelector("input[id=inputLogradouro]");
        let inputNumero = document.querySelector("input[id=inputNumero]");
        let inputBairro = document.querySelector("input[id=inputBairro]");
        let inputCEP = document.querySelector("input[id=inputCEP]");
        let selectCidade = document.querySelector("select[id=selectCidade]");
        editarEnderecoInputs[0].inputValue = inputLogradouro.value;
        editarEnderecoInputs[1].inputValue = inputNumero.value;
        editarEnderecoInputs[2].inputValue = inputBairro.value;
        editarEnderecoInputs[3].inputValue = inputCEP.value;
        editarEnderecoInputs[4].inputValue = selectCidade.value;
        this.setState({
            editarEnderecoInputs: editarEnderecoInputs
        });
        this.validateFormEditarEndereco();
    };

    handleDataCSV = () => {
        const relatorio = this.state.pedidosListadosFiltro;
        var data = [];

        for (var i = 0; i < relatorio.length; i++)
            data.push({
                idPedido: relatorio[i].idPedido,
                usuario: relatorio[i].usuario.nome,
                valorFrete: relatorio[i].valorFrete,
                formaPagamento: relatorio[i].formaPagamento.descricao,
                status: relatorio[i].status.descricao
            });

        this.setState(() => {
            return { dataCSV: data };
        });
    }

    handleDataCSVFichaProducao = () => {
        const relatorio = this.state.fichasProducaoListadosFiltro;
        var data = [];

        for (var i = 0; i < relatorio.length; i++)
            data.push({
                idFichaProducao: relatorio[i].idFichaProducao,
                data: relatorio[i].data,
                usuario: relatorio[i].usuario.nome,
                volumePingo: relatorio[i].volumePingo,
                volumeLeite: relatorio[i].volumeLeite,
                volumeCoalho: relatorio[i].volumeCoalho,
                qntdSal: relatorio[i].qntdSal,
                qntdProduzida: relatorio[i].qntdProduzida,
                produto: relatorio[i].produto.nome
            });

        this.setState(() => {
            return { dataFichaProducaoCSV: data };
        });
    }




    validateInputsCadastroProduto = () => {
        const cadastroProdutoInputs = this.state.cadastroProdutoInputs;

        for (var i = 0; i < cadastroProdutoInputs.length; i++) {
            if (cadastroProdutoInputs[i].inputValue === "") {
                cadastroProdutoInputs[i].error = "Campo obrigatório";
                cadastroProdutoInputs[i].errorNotVisible = false;
                cadastroProdutoInputs[i].resultVerificacao = false;
            }
            else {
                cadastroProdutoInputs[i].errorNotVisible = true;
                cadastroProdutoInputs[i].resultVerificacao = true;
            }
        }

        if (cadastroProdutoInputs[3].inputValue <= 0) {
            cadastroProdutoInputs[3].error = "Valor deve ser maior que 0";
            cadastroProdutoInputs[3].errorNotVisible = false;
            cadastroProdutoInputs[3].resultVerificacao = false;
        }

        this.setState(() => {
            return { cadastroProdutoInputs: cadastroProdutoInputs };
        });
    };

    validateFormEditarEndereco = () => {
        const editarEnderecoInputs = this.state.editarEnderecoInputs;

        for (var i = 0; i < editarEnderecoInputs.length; i++) {
            if (editarEnderecoInputs[i].inputValue === "") {
                editarEnderecoInputs[i].error = "Campo obrigatório";
                editarEnderecoInputs[i].errorNotVisible = false;
                editarEnderecoInputs[i].resultVerificacao = false;
            }
            else {
                editarEnderecoInputs[i].errorNotVisible = true;
                editarEnderecoInputs[i].resultVerificacao = true;
            }
        }

        this.setState(() => {
            return { editarEnderecoInputs: editarEnderecoInputs };
        });
    };

    validateEmailSenhaLogin() {
        let loginInputs = this.state.loginInputs;

        if (typeof loginInputs[0].inputValue !== "undefined") {
            var pattern = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
            if (!pattern.test(loginInputs[0].inputValue)) {
                loginInputs[0].error = "Digite um e-mail válido";
                loginInputs[0].errorNotVisible = false;
                loginInputs[0].resultVerificacao = false;
            }
            else {
                loginInputs[0].errorNotVisible = true;
                loginInputs[0].resultVerificacao = true;
            }
        }

        if (!loginInputs[1].inputValue || loginInputs[1].inputValue.length < 8) {
            loginInputs[1].error = "Insira uma senha de 8 a 30 dígitos";
            loginInputs[1].errorNotVisible = false;
            loginInputs[1].resultVerificacao = false;
        }
        else {
            loginInputs[1].errorNotVisible = true;
            loginInputs[1].resultVerificacao = true;
        }

        this.setState({
            loginInputs: loginInputs
        });
    };

    validateInputsCadastro = () => {
        let cadastroInputs = this.state.cadastroInputs;

        for (var i = 0; i < cadastroInputs.length; i++) {
            if (cadastroInputs[i].inputValue === "") {
                cadastroInputs[i].error = "Campo obrigatório";
                cadastroInputs[i].errorNotVisible = false;
                cadastroInputs[i].resultVerificacao = false;
                continue;
            }
            else {
                if (cadastroInputs[i].input == "cpf") {
                    var pattern = new RegExp(/^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$/);
                    if (!this.TestaCPF(cadastroInputs[i].inputValue.replace(/\D/g, ""))) {
                        cadastroInputs[i].error = "CPF inválido";
                        cadastroInputs[i].errorNotVisible = false;
                        cadastroInputs[i].resultVerificacao = false;
                        continue;
                    }

                }
                else if (cadastroInputs[i].input == "email") {
                    var pattern = new RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
                    if (!pattern.test(cadastroInputs[3].inputValue)) {
                        cadastroInputs[i].error = "Digite um e-mail válido";
                        cadastroInputs[i].errorNotVisible = false;
                        cadastroInputs[i].resultVerificacao = false;
                        continue;
                    }
                }
                else if (cadastroInputs[i].input == "password") {
                    if (cadastroInputs[i].inputValue.length < 8) {
                        cadastroInputs[i].error = "Insira uma senha de 8 a 30 dígitos";
                        cadastroInputs[i].errorNotVisible = false;
                        cadastroInputs[i].resultVerificacao = false;
                        continue;
                    }
                }
                else if (cadastroInputs[i].input == "confirmPassword") {
                    if (cadastroInputs[i].inputValue.length < 8) {
                        cadastroInputs[i].error = "Insira uma senha de 8 a 30 dígitos";
                        cadastroInputs[i].errorNotVisible = false;
                        cadastroInputs[i].resultVerificacao = false;
                        continue;
                    }
                    else if (cadastroInputs[i].inputValue !== cadastroInputs[i - 1].inputValue) {
                        console.log('testet');
                        cadastroInputs[i].error = "As senhas digitadas não são iguais";
                        cadastroInputs[i].errorNotVisible = false;
                        cadastroInputs[i].resultVerificacao = false;
                        continue;
                    }
                }
                cadastroInputs[i].errorNotVisible = true;
                cadastroInputs[i].resultVerificacao = true;
            }
        }
        this.setState({
            cadastroInputs: cadastroInputs
        });
    };

    validateInputsCadastroFichaProducao = () => {
        let inputs = this.state.cadastroFichaProducaoInputs;

        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].inputValue === "") {
                inputs[i].error = "Campo obrigatório";
                inputs[i].errorNotVisible = false;
                inputs[i].resultVerificacao = false;
            }
            else {
                inputs[i].errorNotVisible = true;
                inputs[i].resultVerificacao = true;
            }
        }

        this.setState({
            cadastroFichaProducaoInputs: inputs
        });
    };

    TestaCPF = (strCPF) => {
        var Soma = 0;
        var Resto;
        var i;
        if (strCPF == "00000000000") return false;

        for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10))) return false;

        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11))) return false;
        return true;
    };






    countItensCarrinho = () => {
        return this.state.carrinho.length;
    }

    namesOrder(arrayObj) {
        return arrayObj.sort(function (objA, objB) {
            var a = objA.nome.toLowerCase().replace(/[àáâãäå]/, "a").replace(/[èéêë]/, "e").replace(/[ìíîï]/, "i").replace(/[òóôõö]/, "o").replace(/[ùúûü]/, "u").replace(/[ç]/, "c").replace(/[^a-z0-9]/gi, '')
            var b = objB.nome.toLowerCase().replace(/[àáâãäå]/, "a").replace(/[èéêë]/, "e").replace(/[ìíîï]/, "i").replace(/[òóôõö]/, "o").replace(/[ùúûü]/, "u").replace(/[ç]/, "c").replace(/[^a-z0-9]/gi, '')
            return a < b ? -1 : a > b ? 1 : 0;
        })
    };

    showMenuAdmin = () => {
        if (this.state.menuAdmin)
            this.setState(() => { return { menuAdmin: false }; })
        else
            this.setState(() => { return { menuAdmin: true }; })
    };

    sanitization = (cep) => {
        const regex = new RegExp(/[^0-9]|[/ /]/g, '');
        const sCep = cep.replace(/\D/g, "");
        if (sCep.length !== 8) throw Error(`Cep: ${cep} inválido!`);
        return sCep;
    };

    calcularFreteComParametro = async (cep) => {
        try {
            this.openSpinner();
            const queryString = require('query-string');
            var pesoPedido = 0;
            for (let i = 0; i < this.state.carrinho.length; i++) {
                pesoPedido += this.state.carrinho[i].peso;
            }

            let args = {
                // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
                sCepOrigem: "38960000",
                sCepDestino: this.sanitization(cep),
                nVlPeso: `${pesoPedido}`,
                nCdFormato: 1,
                nVlComprimento: 20,
                nVlAltura: 20,
                nVlLargura: 20,
                nCdServico: '04510', //Array com os códigos de serviço 04510 pac 04014 sedex
                nVlDiametro: 20,
            };
            const content = {
                nCdEmpresa: "",
                nDsSenha: "",
                sCepOrigem: args.sCepOrigem,
                sCepDestino: args.sCepDestino,
                nVlPeso: args.nVlPeso,
                nCdFormato: args.nCdFormato,
                nVlComprimento: args.nVlComprimento,
                nVlAltura: args.nVlAltura,
                nVlLargura: args.nVlLargura,
                sCdMaoPropria: "N",
                nVlValorDeclarado: "0",
                sCdAvisoRecebimento: "N",
                nCdServico: args.nCdServico,
                nVlDiametro: args.nVlDiametro,
                StrRetorno: "xml",
                nIndicaCalculo: "3"
            };

            axios.post('https://private-cors-server.herokuapp.com/http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?wsdl',
                queryString.stringify(content),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => {
                    console.log(res);
                    const json = this.converterXMLparaJSON(res.data);
                    this.setState(() => {
                        return { resultadoConsultaCorreios: json.Servicos.cServico, freteConsultado: true };
                    });
                    console.log(this.state.resultadoConsultaCorreios);
                    this.calculaTotal();
                }).catch(err => { console.log(err) });

            this.closeSpinner();
        }
        catch (err) {
            console.log(err);
        }
    };

    calcularFrete = async () => {
        try {
            this.openSpinner();
            const queryString = require('query-string');
            const inputCEP = document.querySelector("input[id=inputCEP]");
            var pesoPedido = 0;
            for (let i = 0; i < this.state.carrinho.length; i++) {
                pesoPedido += this.state.carrinho[i].peso;
            }

            let args = {
                // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
                sCepOrigem: "38960000",
                sCepDestino: this.sanitization(inputCEP.value),
                nVlPeso: `${pesoPedido}`,
                nCdFormato: 1,
                nVlComprimento: 20,
                nVlAltura: 20,
                nVlLargura: 20,
                nCdServico: '04510', //Array com os códigos de serviço 04510 pac 04014 sedex
                nVlDiametro: 20,
            };
            const content = {
                nCdEmpresa: "",
                nDsSenha: "",
                sCepOrigem: args.sCepOrigem,
                sCepDestino: args.sCepDestino,
                nVlPeso: args.nVlPeso,
                nCdFormato: args.nCdFormato,
                nVlComprimento: args.nVlComprimento,
                nVlAltura: args.nVlAltura,
                nVlLargura: args.nVlLargura,
                sCdMaoPropria: "N",
                nVlValorDeclarado: "0",
                sCdAvisoRecebimento: "N",
                nCdServico: args.nCdServico,
                nVlDiametro: args.nVlDiametro,
                StrRetorno: "xml",
                nIndicaCalculo: "3"
            };

            axios.post('https://private-cors-server.herokuapp.com/http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?wsdl',
                queryString.stringify(content),
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(res => {
                    console.log(res);
                    const json = this.converterXMLparaJSON(res.data);
                    this.setState(() => {
                        return { resultadoConsultaCorreios: json.Servicos.cServico, freteConsultado: true };
                    });
                    console.log(this.state.resultadoConsultaCorreios);
                    this.calculaTotal();
                }).catch(err => { console.log(err) });



            //console.log(response);

            this.closeSpinner();
        }
        catch (err) {
            console.log(err);
        }
    };

    calculaTotal = () => {
        var totalCarrinho = 0;
        if (this.state.carrinho.length === 0)
            this.setState(() => {
                return { carrinhoTotal: 0 };
            });
        for (var i = 0; i < this.state.carrinho.length; i++) {
            totalCarrinho += this.state.carrinho[i].total;
        }

        if (this.state.freteConsultado)
            totalCarrinho += parseFloat(this.state.resultadoConsultaCorreios.Valor);

        return totalCarrinho;
    };

    addToCarrinho = idProduto => {
        let tempProdutos = [...this.state.produtos];
        const index = tempProdutos.indexOf(this.getItem(idProduto));
        const produto = tempProdutos[index];
        produto.adicionadoAoCarrinho = true;
        produto.qntdEstoque = 1;
        produto.pedidoProdutos.quantidade = 1;
        const preco = produto.preco;
        produto.total = preco;
        this.state.carrinho.push(produto);
    };

    getItem = idProduto => {
        const produto = this.state.produtos.find(item => item.idProduto === idProduto);
        return produto;
    };

    openModal = idProduto => {
        const produto = this.getItem(idProduto);
        this.setState(() => {
            return { modalProduto: produto, modalOpen: true };
        });
    };

    openEditarModal = () => {
        const pedidoEditar = this.state.detalhesPedidoAdmin;
        this.setState(() => {
            return { modalPedidoEditarStatus: pedidoEditar, modalEditarStatusOpen: true };
        });
    };

    closeEditarModal = () => {
        this.setState(() => {
            return { modalEditarStatusOpen: false };
        });
    };

    openModalMensagem = (mensagem, path) => {
        this.setState(() => {
            return { modalMensagemOpen: true, mensagemModalMensagem: mensagem, pathModalMensagem: path };
        });
    };

    openModalExcluir = (idExcluir, nomeEntidadeExcluir) => {
        this.setState(() => {
            return { modalExcluirOpen: true, modalIdExcluir: idExcluir, modalExcluirNomeEntidade: nomeEntidadeExcluir };
        });
    };

    closeModalMensagem = () => {
        this.setState(() => {
            return { modalMensagemOpen: false, mensagemModalMensagem: "", pathModalMensagem: "" };
        });
        return true;
    };

    closeModalExcluir = () => {
        this.setState(() => {
            return { modalExcluirOpen: false, modalIdExcluir: 0, modalExcluirNomeEntidade: "" };
        });
    };

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        })
    };

    incrementoProduto = idProduto => {
        const produto = this.getItem(idProduto);
        produto.qntdEstoque++;
        produto.total += produto.preco;
        var totalCarrinho = this.calculaTotal();
        this.setState(() => {
            return { carrinhoTotal: totalCarrinho };
        });
    };

    decrementoProduto = idProduto => {
        const produto = this.getItem(idProduto);
        if (produto.qntdEstoque == 1) {
            this.removerItemCarrinho(idProduto);
        }
        else {
            produto.qntdEstoque--;
            produto.total -= produto.preco;
        }
        var totalCarrinho = this.calculaTotal();
        this.setState(() => {
            return { carrinhoTotal: totalCarrinho };
        });
    };

    removerItemCarrinho = idProduto => {
        let tempProdutos = [...this.state.carrinho];
        const produto = this.getItem(idProduto);
        const index = tempProdutos.indexOf(produto);
        if (index > -1)
            tempProdutos.splice(index, 1);
        this.setState(() => {
            return { carrinho: tempProdutos };
        });
        produto.adicionadoAoCarrinho = false;
    };

    limparCarrinho = () => {
        this.setState(() => {
            return { carrinho: [] };
        });
        for (var i = 0; i < this.state.produtos.length; i++) {
            this.state.produtos[i].adicionadoAoCarrinho = false;
        }
    };

    calcularValorTotalPedido = (idPedido) => {
        const pedido = this.state.resultLogin.pedidos.find(item => item.idPedido === idPedido);
        var total = 0;
        for (var i = 0; i < pedido.pedidoProdutos.length; i++)
            total += pedido.pedidoProdutos[i].quantidade * pedido.pedidoProdutos[i].produto.preco;
        return total;
    };

    calcularTotalProdutosPedido = (idPedido) => {
        const pedido = this.state.resultLogin.pedidos.find(item => item.idPedido === idPedido);
        var totalProdutos = 0;
        for (var i = 0; i < pedido.pedidoProdutos.length; i++)
            totalProdutos += pedido.pedidoProdutos[i].quantidade;
        return totalProdutos;
    };

    mascaraCPF = () => {
        let i = document.querySelector("input[id=InputCPF]");
        let inputCPF = i.value;

        if (isNaN(inputCPF[inputCPF.length - 1])) { // impede entrar outro caractere que não seja número
            i.value = inputCPF.substring(0, inputCPF.length - 1);
            return;
        }

        i.setAttribute("maxlength", "14");
        if (inputCPF.length == 3 || inputCPF.length == 7) i.value += ".";
        if (inputCPF.length == 11) i.value += "-";
    };

    mascaraCEP = (mask) => {
        var t = document.querySelector("input[id=inputCEP]");
        var inputCEP = t.value;

        if (isNaN(inputCEP[inputCEP.length - 1])) { // impede entrar outro caractere que não seja número
            t.value = inputCEP.substring(0, inputCEP.length - 1);
            return;
        }

        var i = t.value.length;
        var saida = mask.substring(1, 0);
        var texto = mask.substring(i)
        if (texto.substring(0, 1) != saida) {
            t.value += texto.substring(0, 1);
        }
    };

    mascaraNumeros = (mask, input) => {
        var t = document.querySelector(`input[id=${input}]`);
        var input = t.value;

        if (isNaN(input[input.length - 1])) { // impede entrar outro caractere que não seja número
            t.value = input.substring(0, input.length - 1);
            return;
        }

        var i = t.value.length;
        var saida = mask.substring(1, 0);
        var texto = mask.substring(i)
        if (texto.substring(0, 1) != saida) {
            t.value += texto.substring(0, 1);
        }
    };

    converterXMLparaJSON = (xml) => {
        const json = {};
        for (const res of xml.matchAll(/(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm)) {
            const key = res[1] || res[3];
            const value = res[2] && this.converterXMLparaJSON(res[2]);
            json[key] = ((value && Object.keys(value).length) ? value : res[2]) || null;

        }
        return json;
    };

    openSpinner = () => {
        this.setState(() => {
            return { spinnerOpen: true };
        });
    };

    closeSpinner = () => {
        this.setState(() => {
            return { spinnerOpen: false };
        });
    };





    render() {
        return (
            <ProdutoContexto.Provider value={{
                ...this.state,
                addToCarrinho: this.addToCarrinho,
                handleDetalhe: this.handleDetalhe,
                openModal: this.openModal,
                closeModal: this.closeModal,
                incrementoProduto: this.incrementoProduto,
                decrementoProduto: this.decrementoProduto,
                removerItemCarrinho: this.removerItemCarrinho,
                limparCarrinho: this.limparCarrinho,
                calculaTotal: this.calculaTotal,
                calcularFrete: this.calcularFrete,
                confirmPedido: this.confirmPedido,
                handleFormaPagamento: this.handleFormaPagamento,
                openModalMensagem: this.openModalMensagem,
                closeModalMensagem: this.closeModalMensagem,
                handleChangeLogin: this.handleChangeLogin,
                handleChangeCadastro: this.handleChangeCadastro,
                handleSubmitCadastroUsuario: this.handleSubmitCadastroUsuario,
                mascaraCPF: this.mascaraCPF,
                mascaraNumeros: this.mascaraNumeros,
                calcularValorTotalPedido: this.calcularValorTotalPedido,
                calcularTotalProdutosPedido: this.calcularTotalProdutosPedido,
                handleDetalhePedido: this.handleDetalhePedido,
                handleEnderecoEditar: this.handleEnderecoEditar,
                handleChangeEditarEndereco: this.handleChangeEditarEndereco,
                handleSubmitEditarEndereco: this.handleSubmitEditarEndereco,
                validateFormEditarEndereco: this.validateFormEditarEndereco,
                handleCidadesMostrar: this.handleCidadesMostrar,
                mascaraCEP: this.mascaraCEP,
                handleSubmitLogin: this.handleSubmitLogin,
                handleLogOut: this.handleLogOut,
                showMenuAdmin: this.showMenuAdmin,
                setFiltroListagem: this.setFiltroListagem,
                listarPedidosFiltro: this.listarPedidosFiltro,
                handleDetalhePedidoAdmin: this.handleDetalhePedidoAdmin,
                openEditarModal: this.openEditarModal,
                closeEditarModal: this.closeEditarModal,
                editarStatusPedido: this.editarStatusPedido,
                openSpinner: this.openSpinner,
                closeSpinner: this.closeSpinner,
                handleChangeCadastroFichaProducao: this.handleChangeCadastroFichaProducao,
                handleSubmitCadastroFichaProducao: this.handleSubmitCadastroFichaProducao,
                handleDetalheFichaProducao: this.handleDetalheFichaProducao,
                handleDeleteEndereco: this.handleDeleteEndereco,
                handleDeleteFichaProducao: this.handleDeleteFichaProducao,
                countItensCarrinho: this.countItensCarrinho,
                listarFichasProducaoFiltro: this.listarFichasProducaoFiltro,
                setFiltroListagemFichaProducao: this.setFiltroListagemFichaProducao,
                handleBuscaProdutos: this.handleBuscaProdutos,
                handleEnderecoPedido: this.handleEnderecoPedido,
                handleDetalheProdutoAdmin: this.handleDetalheProdutoAdmin,
                handleDeleteProdutoAdmin: this.handleDeleteProdutoAdmin,
                handleChangeCadastroProduto: this.handleChangeCadastroProduto,
                handleSubmitCadastroProduto: this.handleSubmitCadastroProduto,
                openModalExcluir: this.openModalExcluir,
                closeModalExcluir: this.closeModalExcluir,
                handleDeletePedido: this.handleDeletePedido
            }}>
                {this.props.children}
            </ProdutoContexto.Provider>
        );
    };
}

const ProdutoConsumer = ProdutoContexto.Consumer;

export { ProdutoProvider, ProdutoConsumer, ProdutoContexto };