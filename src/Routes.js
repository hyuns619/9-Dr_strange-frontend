import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/SignUp/SignUp";
import Main_ImageInfo from "./Components/Main/MainImageInfo";
import ProductDetail from "Pages/ProductDetail/ProductDetail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/main_imageinfo" component={Main_ImageInfo} />
          <Route exact path="/detail" component={ProductDetail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
