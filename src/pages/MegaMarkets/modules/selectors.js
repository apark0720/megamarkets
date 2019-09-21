import { createSelector } from 'reselect'

const getMarketList = store => store.markets.marketList;
export const getTotalCards = createSelector(
  getMarketList,
  marketList => marketList.reduce((cardCount, market) => cardCount += market.cardCount, 0)
  )
  
export const getTotalMarkets = store => store.markets.marketList.length;