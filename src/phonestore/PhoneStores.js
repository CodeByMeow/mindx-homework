import React, { Component } from "react";
import productSource from "./products.json";
import ProductList from './ProductList';
import ProductDetail from "./ProductDetail";

class PhoneStores extends Component {
  state = { products: productSource, id: 1 }
  onCickView = (product_id) => {
    // this.setState({ id: product_id })
    console.log("clicked")
  }
  render() {
    const { products, id } = this.state;
    const detail = products.find(product => product.id === id);
    return (
      <div>
        <p className="product-list-header">Product List</p>
        <ProductList products={products} event={() => this.onCickView} />
        <ProductDetail detail={detail} />
      </div>
    )
  }
}

export default PhoneStores
