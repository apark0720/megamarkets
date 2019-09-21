import React from "react";
import TotalsDisplay from "./containers/TotalsDisplay";
import MarketsDisplay from "./containers/MarketsDisplay";
import MarketCreator from "./containers/MarketCreator";
import styles from "./MegaMarkets.module.css";

export default function MegaMarkets() {
  return (
    <div className={`${styles.outerBox} boxShadow`}>
      <h1 id={styles.header}>MegaMarket Loyalty Cards</h1>
      <TotalsDisplay />

      <div className={`${styles.innerBox} boxShadow`}>
        <MarketCreator />
        <MarketsDisplay />
      </div>
    </div>
  );
}
