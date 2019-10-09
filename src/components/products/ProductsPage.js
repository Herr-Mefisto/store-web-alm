import React from "react";
import { connect } from "react-redux";
import * as productsActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProductList from "./ProductList";
import TextSearch from "../common/TextSearch";

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null };
  }
  onFilterChanged = newFilter => {
    this.setState({ name: newFilter !== "" ? newFilter : null }, () =>
      this.refreshData()
    );
  };
  componentWillMount() {
    this.refreshData();
  }

  refreshData = () => {
    this.props.actions.loadProducts(this.state).catch(err => {
      alert("Loading failed" + err);
    });
  };

  render() {
    return (
      <>
        <h2>Products</h2>
        <TextSearch onSubmit={this.onFilterChanged}></TextSearch>
        <ProductList
          products={this.props.products}
          filter={this.state.filter}
        ></ProductList>
      </>
    );
  }
}

ProductsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
