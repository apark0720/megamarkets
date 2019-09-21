import React from "react";
import { connect } from "react-redux";
import { addCard, deleteCard } from "../modules/actions";
import { getTotalCards } from "../modules/selectors";
import PropTypes from "prop-types";
import styles from "./MarketDisplay.module.css";

const MarketDisplay = ({
  marketId,
  cardCount,
  location,
  totalCards,
  addCard,
  deleteCard
}) => {
  const handleAdd = () => {
    addCard(marketId);
  };
  const handleDelete = () => {
    if (cardCount > 0) deleteCard(marketId);
  };
  const calculatePercentage = (totalCards, cardCount) => {
    return totalCards ? ((cardCount / totalCards) * 100).toFixed(2) : "0.00";
  };

  return (
    <div className={styles.marketBox}>
      <div>
        <strong>Market ID:</strong>
        {marketId}
      </div>

      <div>
        <strong>Location: </strong>
        {location}
      </div>

      <div>
        <strong>Cards: </strong>
        {cardCount}
      </div>

      <div>
        <strong>% of total: </strong>
        {calculatePercentage(totalCards, cardCount)}%
      </div>

      <div className="nowrap">
        <button onClick={handleAdd}>Add Card</button>
        <button onClick={handleDelete}>Delete Card</button>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  totalCards: getTotalCards(store)
});

const mapDispatchToProps = {
  addCard,
  deleteCard
};

MarketDisplay.propTypes = {
  totalCards: PropTypes.number.isRequired,
  addCard: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketDisplay);
