import {Dispatcher} from 'flux';

var AppDispatcher = new Dispatcher();

AppDispatcher.handleAction = (action) => {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
