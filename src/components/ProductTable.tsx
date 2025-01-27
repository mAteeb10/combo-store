import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectChips, selectDrink, selectChocolate } from "../store/comboSlice";
import { RootState } from "../store/store";
import { useComboSelectors } from "../hooks/useComboSelectors";

export const ProductTable: React.FC = () => {
  const dispatch = useDispatch();
  const { availableChips, availableDrinks, availableChocolates } =
    useComboSelectors();
  const { selectedChips, selectedDrink, selectedChocolate } = useSelector(
    (state: RootState) => state.combo
  );

  const handleChipsSelect = (chips: string) => {
    dispatch(selectChips(chips));
  };

  const handleDrinkSelect = (drink: string) => {
    dispatch(selectDrink(drink));
  };

  const handleChocolateSelect = (chocolate: string) => {
    dispatch(selectChocolate(chocolate));
  };

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Chips</th>
            {selectedChips && <th>Drinks</th>}
            {selectedChips && selectedDrink && <th>Chocolates</th>}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ul className="product-list">
                {availableChips.map((chips) => (
                  <li
                    key={chips}
                    onClick={() => handleChipsSelect(chips)}
                    className={selectedChips === chips ? "selected" : ""}
                  >
                    {chips}
                  </li>
                ))}
              </ul>
            </td>
            {selectedChips && (
              <td>
                <ul className="product-list">
                  {availableDrinks.map((drink) => (
                    <li
                      key={drink}
                      onClick={() => handleDrinkSelect(drink)}
                      className={selectedDrink === drink ? "selected" : ""}
                    >
                      {drink}
                    </li>
                  ))}
                </ul>
              </td>
            )}
            {selectedChips && selectedDrink && (
              <td>
                <ul className="product-list">
                  {availableChocolates.map((chocolate) => (
                    <li
                      key={chocolate}
                      onClick={() => handleChocolateSelect(chocolate)}
                      className={
                        selectedChocolate === chocolate ? "selected" : ""
                      }
                    >
                      {chocolate}
                    </li>
                  ))}
                </ul>
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
