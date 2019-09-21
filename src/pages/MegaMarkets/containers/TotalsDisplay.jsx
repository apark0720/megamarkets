import React from "react";
import { connect } from "react-redux";
import { getTotalCards, getTotalMarkets } from "../modules/selectors";
import PropTypes from "prop-types";
import styles from "./TotalsDisplay.module.css";

const TotalsDisplay = ({ totalCards, totalMarkets }) => {
  return (
    <div className={styles.innerBox} id="totals">
      <p>
        <label htmlFor="totalCards">Total Cards: </label>
        <span id={styles.totals}>{totalCards}</span>
      </p>
      <p>
        <label htmlFor="totalMarkets">Total Markets: </label>
        <span id={styles.totals}>{totalMarkets}</span>
      </p>
    </div>
  );
};

const mapStateToProps = store => ({
  // marketList: store.markets.marketList
  totalCards: getTotalCards(store),
  totalMarkets: getTotalMarkets(store)
});

TotalsDisplay.propTypes = {
  totalCards: PropTypes.number.isRequired,
  totalMarkets: PropTypes.number.isRequired
};

export default connect(mapStateToProps)(TotalsDisplay);
