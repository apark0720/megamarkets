import React from "react";
import MarketDisplay from "./MarketDisplay";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./MarketsDisplay.module.css";

const mapStateToProps = store => ({
  marketList: store.markets.marketList
});

const MarketsDisplay = ({ marketList }) => {
  let markets = marketList.map(market => {
    return (
      <MarketDisplay
        key={market.marketId}
        marketId={market.marketId}
        location={market.location}
        cardCount={market.cardCount}
      />
    );
  });
  return (
    <div className={styles.displayBox}>
      <h4>Markets</h4>
      {markets}
    </div>
  );
};

MarketsDisplay.propTypes = {
  marketList: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(MarketsDisplay);
