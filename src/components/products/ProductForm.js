import React, { Component } from "react";
import TextInput from "../common/TextInput";
import NumberInput from "../common/NumberInput";
import ConfirmModal from "../common/ConfirmModal";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0, name: "", price: 0 };
    const id = props.match.params.id;

    fetch("http://localhost:4000/products/" + id, {
      method: "GET",
      headers: { "Content-type": "application/json" }
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState(data);
      })
      .catch(err => {});
  }
  onTitleChanged = newValue => {
    this.setState({ ...this.state, name: newValue });
  };
  onQuantityChanged = newValue => {
    this.setState({ ...this.state, quantity: newValue });
  };
  onPriceChanged = newValue => {
    this.setState({ ...this.state, price: newValue });
  };
  onSubmitForm = event => {
    event.preventDefault();
    const data = this.state;
    const id = this.state.id;

    data["id"] = undefined;
    data["color"] = undefined;
    fetch("http://localhost:4000/products/" + id, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(a => {})
      .catch(err => {
        alert(err);
      });
  };

  onDeleteRequested = event => {
    const id = this.state.id;
    fetch("http://localhost:4000/products/" + id, {
      method: "DELETE",
      headers: { "Content-type": "application/json" }
    })
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

export default ProductForm;
