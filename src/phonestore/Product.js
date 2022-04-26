import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { product, event } = this.props;
    return (
      <div className='product-item'>
        <img src={product.img} />
        <h3>{product.name}</h3>
        <button className='btn btn-primary' onClick={() => event}>View Detail</button>
      </div>
    );
  }
}

export default Product;
