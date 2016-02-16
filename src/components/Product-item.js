import React from 'react';
import AppAction from '../actions/AppAction';

export default class ProductItem extends React.Component {

  constructor = () => {
    super();
    this.selectVariant = this.selectVariant.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  selectVariant = (evt) => {
    AppAction.selectProduct(evt.target.value);
  }

  addToCart = () => {
    AppAction.addToCart( this.props.selected);
  }

  render = () => {

    let selectedId = this.props.selected.id;
    let remain = (selectedId in this.props.cartItems) ?
      this.props.selected.inventory - this.props.cartItems[selectedId].quantity :
      this.props.selected.inventory;
    let disabledClass = remain  > 0 ? '' : 'disabled';

  	return (
        <p>{index}{variant.book_name}</p>
      )
  	);
  }
};
