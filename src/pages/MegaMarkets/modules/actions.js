
import * as types from './actionTypes'

export const addCard = (marketId) => ({
  type: types.ADD_CARD,
  marketId,
});

export const deleteCard = (marketId) => ({
  type: types.DELETE_CARD,
  marketId,
});

export const updateLocation = (location) => ({
  type: types.UPDATE_LOCATION,
  location,
})

export const addMarket = (location) => ({
  type: types.ADD_MARKET,
  location,
});

