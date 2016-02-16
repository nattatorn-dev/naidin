import EventEmitter from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionConstants from '../constants/ActionConstants';
import _ from 'underscore';

let _products = {},
    _discountInformation = {},
    _promotion = [],
    _cartVisible = false,
    _productsTotalPrice = 0;

let add = (data) => {
    let id = data.id;
    data.quantity = id in _products ? _products[id].quantity + 1 : 1;
    _products[id] = _.extend({}, _products[id], data);
    setCartVisible(false);
}

let loadPromotionData = (data) => {
    _promotion = data[0].promotion;
}

let setCartVisible = (data) => {
    _cartVisible = !data;
}

let setPromotion = (data) => {
    let promotion  = _promotion.find(m => m.duplicate === data);
    return promotion ? promotion : {discount:0};
}

let removeItem = (id) => {
    let item = _products[id];
    item.quantity = id in _products ? item.quantity - 1 : 1;
    if (item.quantity <= 0) {
        let tmp = {};
        Object.keys(_products).map((i) => {
            if (i != id) {
                tmp[i] = _products[i];
            }
        });
        _products = tmp;
    }
}

let CartStore = _.extend({}, EventEmitter.prototype, {

    getCartItems: () => {
        return _products;
    },

    getCartVisible: () => {
        return _cartVisible;
    },

    getTotalPrice: () => {
        let _total = 0;

        Object.keys(_products).map((i) => {
            _total += _products[i].price * _products[i].quantity;
        });
        _productsTotalPrice = _total;
        return _total;
    },

    getDiscountInformation: () => {
        let masterId = [],
            local = [],
            totalDuplicate = 0,
            maxQuantity = 0,
            difference = null,
            promotionName = null;

        Object.keys(_products).map((i) => {
          let localQty = _products[i].quantity;
          let index = 1;
          maxQuantity = maxQuantity < localQty ? localQty : maxQuantity;
          for(index; localQty >= index; index++){
            let localproduct = _products[i];
              localproduct.group = index;
              localproduct = _.extend({}, localproduct[i], localproduct);
              local.push( localproduct)
            }

        });

        for(let nextnumber = 1; nextnumber <= maxQuantity; nextnumber++){
            let compareId = []; let compareTable = [];

             Object.keys(local).map((i) => {
               let itemGroup = local[i].group;
                     if(itemGroup === 1){
                         masterId.push(local[i]._id);
                     }
                     if(itemGroup === nextnumber){
                         compareId.push(local[i]._id);
                         compareTable.push(local[i]);
                     }
             });

              let aCompare = new Set(masterId);
              let bCompare = new Set(compareId);

              difference = new Set([...aCompare].filter(x => !bCompare.has(x)));

              if(difference.size === 0 && (aCompare.size !== 1 && bCompare !== 1)){
                  let promotion = setPromotion(aCompare.size)
                  promotionName = promotion.promotion_name;
                  for (let [key, value] in compareTable) {
                      totalDuplicate += compareTable[key].price * promotion.discount;
                  }
              }
         }

         _discountInformation = {
           promotionName: promotionName,
           totalDiscountPrice: totalDuplicate,
           netPrice:  _productsTotalPrice - totalDuplicate
         }
        return _discountInformation;
    },

    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }


});

AppDispatcher.register(function(payload) {
    let action = payload.action;
    let text;

    switch (action.actionType) {

        case ActionConstants.RECEIVE_PROMOTION_DATA:
            loadPromotionData(action.data);
            break;
        case ActionConstants.ADD_TO_CART:
            add(action.data);
            break;
        case ActionConstants.SHOW_HIDE_CART:
            setCartVisible(action.data);
            break;
        case ActionConstants.REMOVE_DATA:
            removeItem(action.data);
            break;
        default:
            return true;
    }

    CartStore.emitChange();

    return true;
});


module.exports = CartStore;
