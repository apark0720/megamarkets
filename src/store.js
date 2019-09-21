import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import marketsReducer from './pages/MegaMarkets/modules/marketsReducer';

const reducers = combineReducers({
  markets: marketsReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools()
);

export default store;