
import actionTypes from './actionTypes'

export const addCard = (marketId) => ({
  type: actionTypes.ADD_CARD,
  marketId,
});

export const deleteCard = (marketId) => ({
  type: actionTypes.DELETE_CARD,
  marketId,
});

export const updateLocation = (location) => ({
  type: actionTypes.UPDATE_LOCATION,
  location,
})

export const addMarket = (location) => ({
  type: actionTypes.ADD_MARKET,
  location,
});

