import * as types from './actionTypes';

const initialState = {
  marketList: [],
  newLocation: '',
};

let marketId = 10000
const marketsReducer = (state=initialState, action) => {
  Object.freeze(state);
  let marketList = [...state.marketList]
  
  switch(action.type) {
    case types.ADD_MARKET:
      const newMarket = {
          marketId: marketId++,
          location: action.location,
          cardCount: 0,    
      };
      marketList.push(newMarket);
      return {
        marketList,
        newLocation: '',
      };

    case types.UPDATE_LOCATION:
      return {
        ...state,
        newLocation: action.location, 
      }

      case types.ADD_CARD:
      marketList = marketList.map(market => {
        if (market.marketId === action.marketId) market.cardCount++;
        return market
      })
      return {
        ...state,
        marketList
      }

    case types.DELETE_CARD:
      marketList = marketList.map(market => {
        if (market.marketId === action.marketId) market.cardCount--;
        return market 
      })
      return {
        ...state,
        marketList
      }
      
    default:
      return state;
  }
};

export default marketsReducer;