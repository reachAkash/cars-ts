import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Car {
  [key: string]: any; // This allows for arbitrary fields
}

export interface CarState {
  data: Car[];
  dataLength: number;
}

const initialState: CarState = {
  data: [],
  dataLength: 0,
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    setCar: (state, action) => {
      console.log(action.payload);
      state.data = action.payload.data;
      state.dataLength = action.payload.dataLength;
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
