import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import Cart from "./componentes/Cart/Cart";
import Default from "./componentes/Default";
import Details from "./componentes/Produtos/Details";
import ListaProdutos from "./componentes/Produtos/ListaProdutos";
import Modal from "./componentes/Modal";
import Pagamento from "./componentes/Pagamento/Pagamento";
import ResumoPedido from "./componentes/Pedido/ResumoPedido";
import ModalSucesso from "./componentes/ModalMensagem";
import Login from "./componentes/Usuario/Login";
import CadastroUsuario from "./componentes/Usuario/CadastroUsuario";
import PerfilUsuario from "./componentes/Usuario/PerfilUsuario";
import DetalhesPedido from "./componentes/Pedido/DetalhesPedido";
import EditarEndereco from "./componentes/Endereco/EditarEndereco";
import Pedidos from "./componentes/Usuario/Administrador/Pedidos/Pedidos";
import FichasProducao from "./componentes/Usuario/Administrador/FichasProducao/FichasProducao";
import DetalhesPedidoAdmin from "./componentes/Usuario/Administrador/Pedidos/DetalhesPedidoAdmin";
import { PrivateRouter } from './PrivateRouter';
import ModalEditar from './componentes/Usuario/Administrador/Pedidos/ModalEditar';
import Spinner from './componentes/Spinner';
import CadastroFichaProducao from './componentes/Usuario/Administrador/FichasProducao/CadastroFichaProducao';
import DetalhesFichaProducao from './componentes/Usuario/Administrador/FichasProducao/DetalhesFichaProducao';
import EditarFichaProducao from './componentes/Usuario/Administrador/FichasProducao/EditarFichaProducao';
import CadastroEndereco from './componentes/Endereco/CadastroEndereco';
import ModalMensagem from './componentes/ModalMensagem';
import ProdutosBusca from './componentes/Produtos/ProdutosBusca';
import Footer from './componentes/Footer';
import SelecionarEnderecoPedido from './componentes/Endereco/SelecionarEnderecoPedido';
import CadastrarProduto from './componentes/Usuario/Administrador/Produtos/CadastrarProduto';
import { AdminRouter } from './AdminRouter';
import Produtos from './componentes/Usuario/Administrador/Produtos/Produtos';
import DetalhesProdutoAdmin from './componentes/Usuario/Administrador/Produtos/DetalhesProdutoAdmin';
import EditarProduto from './componentes/Usuario/Administrador/Produtos/EditarProduto';
import ModalExcluir from './componentes/ModalExcluir';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ListaProdutos} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/payment" component={Pagamento} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={CadastroUsuario} />
          <Route path="/search-result" component={ProdutosBusca} />

          <AdminRouter path="/admin-pedidos" component={Pedidos} />
          <AdminRouter path="/admin-fichasproducao" component={FichasProducao} />
          <AdminRouter path="/order-detail-admin" component={DetalhesPedidoAdmin} />
          <AdminRouter path="/new-fichaproducao" component={CadastroFichaProducao} />
          <AdminRouter path="/details-fichaproducao" component={DetalhesFichaProducao} />
          <AdminRouter path="/edit-fichaproducao" component={EditarFichaProducao} />
          <AdminRouter path="/new-produto" component={CadastrarProduto} />
          <AdminRouter path="/admin-produtos" component={Produtos} />
          <AdminRouter path="/detail-produto-admin" component={DetalhesProdutoAdmin} />
          <AdminRouter path="/edit-produto-admin" component={EditarProduto} />

          <PrivateRouter path="/order-summary" component={ResumoPedido} />
          <PrivateRouter path="/select-address" component={SelecionarEnderecoPedido} />
          <PrivateRouter path="/user" component={PerfilUsuario} />
          <PrivateRouter path="/new-endereco" component={CadastroEndereco} />
          <PrivateRouter path="/edit-address" component={EditarEndereco} />
          <PrivateRouter path="/order-detail" component={DetalhesPedido} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <ModalMensagem />
        <ModalEditar />
        <ModalExcluir />
        <Spinner />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
