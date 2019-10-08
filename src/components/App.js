import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import ProductsPage from "./products/ProductsPage";
class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
