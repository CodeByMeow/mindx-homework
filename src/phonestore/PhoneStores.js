import React, { Component } from "react";
import productSource from "./products.json";
import ProductList from './ProductList';
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

export default class PhoneStores extends Component {
  state = { products: productSource, detail_id: 1, cart: [], total_quality: 0, total: 0 }

  onClickView = (product_id) => {
    this.setState({ detail_id: product_id })
  }

  count = (cart) => cart.reduce((sum, item) => sum += item.quality, 0)

  addToCart = (product) => {
    const { cart } = this.state;
    if (!cart.some(item => item.id === product.id)) {
      const item_cart = { ...product, quality: 1 };
      const new_item = [...cart, item_cart];
      return this.setState({
        cart: new_item,
        total_quality: this.count(new_item)
      })
    }

    const temp_cart = [...cart]
    const index = temp_cart.findIndex(item => item.id === product.id);
    temp_cart[index].quality += 1;
    this.setState({
      cart: temp_cart,
      total_quality: this.count(temp_cart)
    })
  }

  removeCartItem = (product) => {
    const { cart } = this.state;
    const temp_cart = [...cart];
    const index_remove = temp_cart.findIndex(item => item.id === product.id);
    temp_cart.splice(index_remove, 1);
    this.setState({
      cart: temp_cart,
      total_quality: this.count(temp_cart)
    })
  }

  updateCartItem = (product, value) => {
    const { cart } = this.state;
    const temp_cart = [...cart];
    const index = temp_cart.findIndex(item => item.id === product.id);
    temp_cart[index].quality += value;
    if (temp_cart[index].quality < 1) return this.removeCartItem(product);
    this.setState({
      cart: temp_cart,
      total_quality: this.count(temp_cart)
    })
  }

  render() {
    const { products, detail_id, total_quality, cart } = this.state;
    const detail = products.find(product => product.id === detail_id);
    return (
      <div>
        <p className="product-list-header">Danh sách sản phẩm</p>
        <Cart quality={total_quality} items={cart} eremove={this.removeCartItem} eupdate={this.updateCartItem} />
        <ProductList products={products} event={this.onClickView} addCart={this.addToCart} />
        <ProductDetail detail={detail} />
      </div>
    )
  }
}

