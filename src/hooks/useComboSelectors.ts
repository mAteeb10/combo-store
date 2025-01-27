import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useComboSelectors = () => {
  const { availableCombos, selectedChips, selectedDrink, selectedChocolate } =
    useSelector((state: RootState) => state.combo);

  const availableChips = useMemo(() => {
    const chips = new Set(availableCombos.map((combo) => combo.chips));
    return Array.from(chips);
  }, [availableCombos]);

  const availableDrinks = useMemo(() => {
    let drinks = availableCombos;
    if (selectedChips) {
      drinks = drinks.filter((combo) => combo.chips === selectedChips);
    }
    if (selectedChocolate) {
      drinks = drinks.filter((combo) => combo.chocolate === selectedChocolate);
    }
    return Array.from(new Set(drinks.map((combo) => combo.drink)));
  }, [availableCombos, selectedChips, selectedChocolate]);

  const availableChocolates = useMemo(() => {
    let chocolates = availableCombos;
    if (selectedChips) {
      chocolates = chocolates.filter((combo) => combo.chips === selectedChips);
    }
    if (selectedDrink) {
      chocolates = chocolates.filter((combo) => combo.drink === selectedDrink);
    }
    return Array.from(new Set(chocolates.map((combo) => combo.chocolate)));
  }, [availableCombos, selectedChips, selectedDrink]);

  return {
    availableChips,
    availableDrinks,
    availableChocolates,
  };
};
