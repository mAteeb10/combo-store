import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductTable } from "./ProductTable";
import { setCombos, resetSelection } from "../store/comboSlice";
import { RootState } from "../store/store";
import { Combo } from "../types";

export const ComboSelector: React.FC = () => {
  const dispatch = useDispatch();
  const { selectedChips, selectedDrink, selectedChocolate } = useSelector(
    (state: RootState) => state.combo
  );

  useEffect(() => {
    // Simulating API fetch
    const fetchCombos = async () => {
      const combos: Combo[] = [
        { id: "1", chips: "Lays Salted", drink: "Pepsi", chocolate: "Cadbury" },
        { id: "2", chips: "Slims", drink: "7Up", chocolate: "Perk" },
        { id: "3", chips: "Potato Sticks", drink: "Pepsi", chocolate: "Now" },
        { id: "4", chips: "Slanty", drink: "Miranda", chocolate: "Cadbury" },
        { id: "5", chips: "Slims", drink: "Pepsi", chocolate: "Perk" },
      ];
      dispatch(setCombos(combos));
    };
    fetchCombos();
  }, [dispatch]);

  const isComboComplete = selectedChips && selectedDrink && selectedChocolate;

  return (
    <div className="combo-selector">
      <ProductTable />

      {isComboComplete && (
        <div className="selected-combo">
          <h3>Selected Combo</h3>
          <p>Chips: {selectedChips}</p>
          <p>Drink: {selectedDrink}</p>
          <p>Chocolate: {selectedChocolate}</p>
          <button onClick={() => dispatch(resetSelection())}>
            Change Combo
          </button>
        </div>
      )}
    </div>
  );
};
