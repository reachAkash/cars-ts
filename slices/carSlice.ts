import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Car {
  [key: string]: any; // This allows for arbitrary fields
}

export interface CarState {
  data: Car[];
}

const initialState: CarState = {
  data: [],
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCar: (state, action) => {
      state.data = action.payload;
    },
    addCar: (state, action: PayloadAction<Car>) => {
      state.data.push(action.payload);
    },
    focusInput: (state, action) => {
      action.payload.current.focus();
    },
  },
});

export const { setCar, addCar, focusInput } = carSlice.actions;

export default carSlice.reducer;
