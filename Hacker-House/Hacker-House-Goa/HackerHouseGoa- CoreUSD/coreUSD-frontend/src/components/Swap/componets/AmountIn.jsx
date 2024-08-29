/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { useOnClickOutside } from "../../../lib/utils";
import styles from "../styles";

const AmountIn = ({
  onChange,
  currencyValue,
  onSelect,
  currencies,
  isSwapping,
}) => {
  const [showList, setShowList] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState(currencyValue);
  const ref = useRef();

  useOnClickOutside(ref, () => setShowList(false));

  useEffect(() => {
    if (currencies.includes(currencyValue)) {
      setActiveCurrency(currencyValue);
    } else {
      setActiveCurrency("Select");
    }
  }, [currencies, currencyValue]);

  return (
    <div className={styles.amountContainer}>
      <input
        placeholder="0.0"
        type="number"
        disabled={isSwapping}
        onChange={(e) =>
          typeof onChange === "function" && onChange(e.target.value)
        }
        className={styles.amountInput}
      />

      <div className="relative">
        <button className={styles.currencyButton}>CUSD</button>

        {showList && (
          <ul ref={ref} className={styles.currencyList}>
            {currencies.map((token, index) => (
              <li
                key={index}
                className={`${styles.currencyListItem} ${
                  activeCurrency === token ? "bg-site-dim2" : ""
                } cursor-pointer`}
                onClick={() => {
                  if (typeof onSelect === "function") onSelect(token);
                  setActiveCurrency(token);
                  setShowList(false);
                }}
              >
                {token}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AmountIn;