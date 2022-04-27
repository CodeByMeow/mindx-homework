import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { product, event: onClick, addCart } = this.props;
    return (
      <div className='product-item'>
        <img src={product.img} />
        <h3>{product.name}</h3>
        <button className='btn-out' onClick={() => onClick(product.id)}>Xem chi tiết</button>
        <button className='btn-out' onClick={() => addCart(product)}><i className="fas fa-cart-plus"></i></button>
      </div>
    );
  }
}

export default Product;
