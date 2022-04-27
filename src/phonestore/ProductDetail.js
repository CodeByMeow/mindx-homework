import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    const { name, img, ...desc } = this.props.detail;
    return (
      <div className="product-detail-container">
        <div className="product-image">
          <h2>{name}</h2>
          <img src={img} />
        </div>
        <div className="product-desc">
          <h2>thông số kỹ thuật</h2>
          <table>
            <tbody>
              <tr><td>màn hình</td><td>{desc.info.screen}</td></tr>
              <tr><td>hệ điều hành</td><td>{desc.info.os}</td></tr>
              <tr><td>camera trước</td><td>{desc.info.frontCamera}</td></tr>
              <tr><td>camera sau</td><td>{desc.info.backCamera}</td></tr>
              <tr><td>ram</td><td>{desc.ram}</td></tr>
              <tr><td>rom</td><td>{desc.rom}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ProductDetail
