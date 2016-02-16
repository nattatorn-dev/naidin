import AppDispatcher  from '../dispatcher/AppDispatcher';
import ActionConstants from'../constants/ActionConstants';

let AppAction = {

  receiveProduct: (data) => {
    AppDispatcher.handleAction({
      actionType: ActionConstants.RECEIVE_DATA,
      data: data
    })
  },
  receivePromotion: (data) => {
    AppDispatcher.handleAction({
      actionType: ActionConstants.RECEIVE_PROMOTION_DATA,
      data: data
    })
  },
  selectProduct: (data) => {
    AppDispatcher.handleAction({
      actionType: ActionConstants.SELECT_DATA,
      data: data
    })
  },
  addToCart: (data) => {
    AppDispatcher.handleAction({
      actionType: ActionConstants.ADD_TO_CART,
      data: data
    })
  },
  showOrHideCart: (data) => {
    AppDispatcher.handleAction({
      actionType: ActionConstants.SHOW_HIDE_CART,
      data: data
    })
  },
  removeItem: (item) => {
    AppDispatcher.handleAction({
      actionType: ActionConstants.REMOVE_DATA,
      data: item
    })
  }

};

module.exports = AppAction;
