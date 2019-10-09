import React from "react";
import PropTypes from "prop-types";

const ProductList = ({ products }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Quantity</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {products.map(product => {
        return (
          <tr key={product.id}>
            <td>
              <a
                className="btn btn-light"
                href={"http://localhost:3000/product/" + product.id}
              >
                Watch
              </a>
            </td>
            <td>
              <span className="label">{product.name}</span>
            </td>
            <td>
              <span className="label">{product.quantity}</span>
            </td>
            <td>
              <span className="label">{product.color}</span>
            </td>
            <td>
              <span className="label">{product.price}</span>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;
