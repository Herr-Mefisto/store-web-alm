import React from "react";
import { connect } from "react-redux";
import * as productsActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class ProductsPage extends React.Component {
  state = { product: { title: "" } };

  handleChange = event => {
    const product = { ...this.state.product, title: event.target.value };
    this.setState({ product });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createProduct(this.state.product);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Products</h2>
        <h3>Add product</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.product.title}
        />
        <input type="submit" value="Save" />

        {this.props.products.map(product => (
          <div key={product.title}>{product.title}</div>
        ))}
      </form>
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
