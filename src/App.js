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
          <PrivateRouter path="/order-summary" component={ResumoPedido} />
          <PrivateRouter path="/select-address" component={SelecionarEnderecoPedido} />
          <PrivateRouter path="/user" component={PerfilUsuario} />
          <PrivateRouter path="/admin-pedidos" component={Pedidos} />
          <PrivateRouter path="/admin-fichasproducao" component={FichasProducao} />
          <PrivateRouter path="/order-detail-admin" component={DetalhesPedidoAdmin} />
          <PrivateRouter path="/new-fichaproducao" component={CadastroFichaProducao} />
          <PrivateRouter path="/details-fichaproducao" component={DetalhesFichaProducao} />
          <PrivateRouter path="/edit-fichaproducao" component={EditarFichaProducao} />
          <PrivateRouter path="/new-endereco" component={CadastroEndereco} />
          <PrivateRouter path="/edit-address" component={EditarEndereco} />
          <PrivateRouter path="/order-detail" component={DetalhesPedido} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <ModalMensagem />
        <ModalEditar />
        <Spinner />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
