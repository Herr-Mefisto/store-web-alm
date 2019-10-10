import React, { Component } from "react";
import { connect } from "react-redux";
import * as colorsActions from "../../redux/actions/colorsActions";
import { bindActionCreators } from "redux";
import TextInput from "../common/TextInput";
import NumberInput from "../common/NumberInput";
import ConfirmModal from "../common/ConfirmModal";
import Select from "../common/Select";
import * as productsApi from "../../api/productsApi";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0, name: "", price: 0 };
    const id = props.match.params.id;

    this.props.actions.loadColors(this.state).then(result => {
      this.availableColors = result.colors;
    });
    productsApi
      .getProduct(id)
      .then(data => {
        this.setState(data);
      })
      .catch(err => {});
  }

  availableColors = [];

  onTitleChanged = newValue => {
    this.setState({ ...this.state, name: newValue });
  };
  onQuantityChanged = newValue => {
    this.setState({ ...this.state, quantity: newValue });
  };
  onPriceChanged = newValue => {
    this.setState({ ...this.state, price: newValue });
  };
  onColorChanged = newValue => {
    this.setState({ ...this.state, color: newValue });
  };

  onSubmitForm = event => {
    event.preventDefault();
    productsApi
      .saveProduct({ ...this.state })
      .then(a => {})
      .catch(err => {
        alert(err);
      });
  };

  onDeleteRequested = event => {
    productsApi
      .deleteProduct(this.state.id)
      .then(a => {})
      .catch(err => {
        alert(err);
      });
  };
  render() {
    if (this.state.id === undefined) {
      return <h2>This product does not exists.</h2>;
    }
    return (
      <>
        <div>
          <h2 className="float-left">Manage product:</h2>
          <div className="float-right">
            <ConfirmModal
              body="Are you sure you want to remove this product?"
              title="Delete product"
              onConfirm={this.onDeleteRequested}
            ></ConfirmModal>
          </div>
          <div className="clearfix"></div>
        </div>

        <form>
          <TextInput
            title="Title"
            value={this.state.name}
            onChange={this.onTitleChanged}
          ></TextInput>
          <NumberInput
            title="Quantity"
            value={this.state.quantity}
            onChange={this.onQuantityChanged}
            min="0"
            max="1000"
            step="1"
          ></NumberInput>
          <NumberInput
            title="Price"
            value={this.state.price}
            onChange={this.onPriceChanged}
            min="0"
            max="10000"
            step="0.01"
          ></NumberInput>
          <Select
            title="Color"
            options={this.availableColors}
            value={this.state.color}
            onChange={this.onColorChanged}
          ></Select>
          <input
            type="submit"
            className="form-control"
            style={{ width: "100px" }}
            onClick={this.onSubmitForm}
            value="Save"
          />
        </form>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(colorsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductForm);
