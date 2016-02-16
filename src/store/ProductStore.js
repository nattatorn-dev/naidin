import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionConstants from '../constants/ActionConstants';
import _ from 'underscore';

let _product = {}, _selected = null;

let loadProductData = (data) => {
  _product = data[0];
  _selected = data[0].books[0];
}

let selectProduct = (index) => {
  _selected = _product.books[index];
}

let ProductStore = _.extend({}, EventEmitter.prototype, {

  getProduct: function() {
    return _product;
  },
  getSelected: function() {
    return _selected;
  },

  // Emit Change event
  emitChange: function() {
    this.emit('change');
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});

AppDispatcher.register(function(payload) {
  let action = payload.action;
  let text;

  switch(action.actionType) {

    case ActionConstants.RECEIVE_DATA:
      loadProductData(action.data);
      break;
    case ActionConstants.SELECT_DATA:
      selectProduct(action.data);
      break;

    default:
      return true;
  }
  ProductStore.emitChange();
  return true;
});


module.exports = ProductStore;
