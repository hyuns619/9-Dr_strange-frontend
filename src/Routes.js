import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import ProductList from "Pages/ProductList/ProductList";
import ProductDetail from "Pages/ProductDetail/ProductDetail";
import Cart from "Pages/Cart/Cart";
import CartModal from "Components/CartModal/CartModal";
import MyPageHome from "Pages/MyPage/MyPageHome";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/cart_modal" component={CartModal} />
          <Route exact path="/products/search" component={ProductList} />
          <Route exact path="/products/list" component={ProductList} />
          <Route
            exact
            path="/products/list/:category"
            component={ProductList}
          />
          <Route exact path="/products/detail" component={ProductDetail} />
          <Route exact path="/products/detail/:id" component={ProductDetail} />
          <Route exact path="/mypage" component={MyPageHome} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
