import React from 'react';
import CartApp from './components/CartApp';
import AppAction from './actions/AppAction';


import '../assets/css/var.less';
import '../assets/css/product.less';
import '../assets/css/cart.less';

import ProductData from './ProductData';
ProductData.init();
AppAction.receiveProduct(JSON.parse(localStorage.getItem('book')));
AppAction.receivePromotion(JSON.parse(localStorage.getItem('promotion')));
React.render(
  <CartApp />,
  document.getElementById('flux-cart')
);
