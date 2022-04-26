import React, { Component } from 'react';
import Product from './Product'

class ProductList extends Component {

  render() {
    const { products, event } = this.props;

    return (
      <div className='product-container'>
        {products.map(product => <Product product={product} key={product.id} event={event} />)}
      </div>
    )
  }
}

export default ProductList;
