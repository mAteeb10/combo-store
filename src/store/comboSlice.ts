import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Combo } from "../types";

interface ComboState {
  selectedChips: string | null;
  selectedDrink: string | null;
  selectedChocolate: string | null;
  availableCombos: Combo[];
  isLoading: boolean;
  error: string | null;
}

const initialState: ComboState = {
  selectedChips: null,
  selectedDrink: null,
  selectedChocolate: null,
  availableCombos: [],
  isLoading: false,
  error: null,
};

const comboSlice = createSlice({
  name: "combo",
  initialState,
  reducers: {
    setCombos: (state, action: PayloadAction<Combo[]>) => {
      state.availableCombos = action.payload;
    },
    selectChips: (state, action: PayloadAction<string | null>) => {
      state.selectedChips = action.payload;
      if (!action.payload) {
        state.selectedDrink = null;
        state.selectedChocolate = null;
      }
    },
    selectDrink: (state, action: PayloadAction<string | null>) => {
      state.selectedDrink = action.payload;
      if (!action.payload) {
        state.selectedChocolate = null;
      }
    },
    selectChocolate: (state, action: PayloadAction<string | null>) => {
      state.selectedChocolate = action.payload;
    },
    resetSelection: (state) => {
      state.selectedChips = null;
      state.selectedDrink = null;
      state.selectedChocolate = null;
    },
  },
});

export const {
  setCombos,
  selectChips,
  selectDrink,
  selectChocolate,
  resetSelection,
} = comboSlice.actions;
export default comboSlice.reducer;
