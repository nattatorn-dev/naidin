import React from 'react';
import Product from './Product';
import Cart from './Cart';
import ProductStore from '../store/ProductStore';
import CartStore from '../store/CartStore';

let getState = ()=> {
  return   {
     product :ProductStore.getProduct(),
     selected : ProductStore.getSelected(),
     cartItems: CartStore.getCartItems(),
     visibile: CartStore.getCartVisible(),
     totalPrice: CartStore.getTotalPrice(),
     discountInformation:CartStore.getDiscountInformation()
   };
}
export default class CartApp extends React.Component {

  constructor = () => {
    super();
    this.state = getState() ;

  }
  componentDidMount = () => {
      CartStore.addChangeListener(() => {
          this.setState(getState());
      });
      ProductStore.addChangeListener(() => {
          this.setState(getState());
      });
  }

  render = () => {
    return ( < div className = "cart-app" >
      < Product products={this.state.product} selected={this.state.selected} cartItems={this.state.cartItems} />
    < Cart cartItems={this.state.cartItems} visibile ={this.state.visibile} totalPrice={this.state.totalPrice}
        promotionName={this.state.discountInformation.promotionName}
        totalDiscountPrice={this.state.discountInformation.totalDiscountPrice}
        netPrice={this.state.discountInformation.netPrice}/>
      < /div>
    );
  }

};
