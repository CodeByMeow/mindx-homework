import React, { Component } from 'react';

class Cart extends Component {
  currency_format = (num) => num.toLocaleString("vi-VN", { style: "currency", currency: "VND" })
  render() {
    const { quality, items, eremove, eupdate } = this.props;
    if (items.length == 0) return (
      <div className='cart-container'>
        <div className="cart-btn">
          <button type="button" className="btn-out btn-sm" data-toggle="modal" data-target="#cart-detail"><i className="fas fa-shopping-cart"></i> ({quality})</button>
        </div>

        <div id="cart-detail" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Giỏ hàng</h4>
              </div>
              <div className="modal-body">
                <p>Giỏ hàng trống</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      </div >
    )

    return (
      <div className='cart-container'>
        <div className="cart-btn">
          <button type="button" className="btn-out btn-sm" data-toggle="modal" data-target="#cart-detail"><i className="fas fa-shopping-cart"></i> ({quality})</button>
        </div>

        <div id="cart-detail" className="modal fade" role="dialog">
          <div className="modal-dialog">

            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Giỏ hàng</h4>
              </div>
              <div className="modal-body">

                <table className='table'>
                  <thead>
                    <tr>
                      <td>Mã sản phẩm</td>
                      <td>Hình ảnh</td>
                      <td>Tên sản phẩm</td>
                      <td>Đơn giá</td>
                      <td>Số lượng</td>
                      <td>Thành tiền</td>
                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td><img src={item.img} className="cart-image" /></td>
                          <td>{item.name}</td>
                          <td>{this.currency_format(parseInt(item.price))}</td>
                          <td><a href="#" className='quality' onClick={() => eupdate(item, -1)}>-</a>{item.quality}<a href="#" className='quality' onClick={() => eupdate(item, 1)}>+</a></td>
                          <td>{this.currency_format(item.quality * item.price)}</td>
                          <td><a href="#" className='btn-remove' onClick={() => eremove(item)}>&times;</a></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      </div >
    );
  }
}

export default Cart;
