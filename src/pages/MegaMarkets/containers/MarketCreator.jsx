import React from "react";
import { connect } from "react-redux";
import { addMarket, updateLocation } from "../modules/actions.js";
import PropTypes from "prop-types";
import styles from "./MarketCreator.module.css";

const MarketCreator = ({ newLocation, addMarket, updateLocation }) => {
  const handleSubmit = e => {
    e.preventDefault();
    addMarket(e.target.location.value);
  };
  const handleChange = e => {
    updateLocation(e.target.value);
  };

  return (
    <div id={styles.borderBottom}>
      <h3>Create New Market</h3>
      <div className="nowrap">
        <h3>Location: </h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newLocation}
            name="location"
            onChange={handleChange}
          />
          <button>Add Market</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  newLocation: store.markets.newLocation
});

const mapDispatchToProps = {
  addMarket,
  updateLocation
};

MarketCreator.propTypes = {
  newLocation: PropTypes.string.isRequired,
  addMarket: PropTypes.func.isRequired,
  updateLocation: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MarketCreator);
