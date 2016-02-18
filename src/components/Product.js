import React from 'react';
import AppAction from '../actions/AppAction';

export default class Product extends React.Component {

  constructor(){
    super();
    this.selectbook = this.selectbook.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  selectbook(evt) {
    AppAction.selectProduct(evt.target.value);
  }

  addToCart() {
    AppAction.addToCart( this.props.selected);
  }

  render() {

    let selectedId = this.props.selected.id;
    let remain = (selectedId in this.props.cartItems) ?
      this.props.selected.inventory - this.props.cartItems[selectedId].quantity :
      this.props.selected.inventory;
    let disabledClass = remain  > 0 ? '' : 'disabled';

  	return (

      <article className="product-wrap">
        <section className="control">
          <select onChange={this.selectbook}>
            {this.props.products.books.map(function(book , index){
              return (
                  <option key={index} value={index}>{book.book_name}</option>
                )
            })}
          </select>
          <button className={"btn "+ disabledClass} onClick={this.addToCart} disabled={disabledClass}> {remain > 0 ?'add to cart' : 'sold out'}</button>
        </section>
      </article>
  	);
  }

};
