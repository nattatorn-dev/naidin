import React from 'react';
import CartStore from '../store/CartStore'
import AppAction from '../actions/AppAction';

export default class Cart extends React.Component {

  constructor() {
    super();
    this.showOrHideCart = this.showOrHideCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  showOrHideCart() {
    AppAction.showOrHideCart( this.props.visibile);
  }

  removeItem(item) {
    AppAction.removeItem(item);
  }

  render() {
    let self = this;
    let visClass = this.props.visibile? '': 'hidden',
        apClass = this.props.visibile? 'fa-minus': 'fa-plus';
    let cartItems = this.props.cartItems;
  	return (

        <aside >
          <a className={"cart-ctr fa fa-2x "+ apClass } onClick={this.showOrHideCart}></a>
          <section className={"cart-wrap  " + visClass}>
            <div className="text-center">
              <i className="fa fa-shopping-cart fa-3x"></i>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td colSpan="5"><p>total: ${this.props.totalPrice}</p></td>
                </tr>
                <tr>
                  <td colSpan="5"><p>promotion: {this.props.promotionName}</p></td>
                </tr>
                <tr>
                  <td colSpan="5"><p>discount: ${this.props.totalDiscountPrice}</p></td>
                </tr>
                <tr>
                  <td colSpan="5"><p>net: ${this.props.netPrice}</p></td>
                </tr>
              </tfoot>
              <tbody>
                {Object.keys(cartItems).map(function(item){
                  return (
                    <tr key={item} className="item">
                        <td><p>{cartItems[item].book_name}</p> </td>
                        <td><p>${cartItems[item].price}</p> </td>
                        <td><p>{cartItems[item].quantity}</p> </td>
                        <td><p>${(cartItems[item].price * cartItems[item].quantity)}</p> </td>
                        <td><a className="remove" onClick={self.removeItem.bind(self, item)}>Remove</a> </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </section>
        </aside>
  	);
  }

};
