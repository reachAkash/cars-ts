import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Car {
  [key: string]: any; // This allows for arbitrary fields
}

export interface CarState {
  data: Car[];
  totalCar: Car[];
  dataLength: number;
  loading: boolean;
}

const initialState: CarState = {
  data: [],
  totalCar: [],
  dataLength: 0,
  loading: true,
};

export const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = action.payload;
    },
    totalCars: (state, action) => {
      state.totalCar = action.payload.data;
      state.loading = false;
    },
    setCar: (state, action) => {
      state.data = action.payload.data;
      state.dataLength = action.payload.dataLength;
      state.loading = false;
    },
    addCar: (state, action: PayloadAction<Car>) => {
      state.data.push(action.payload);
      state.loading = false;
    },
    focusInput: (state, action) => {
      action.payload.current.focus();
    },
  },
});

export const { startLoading, totalCars, setCar, addCar, focusInput } =
  carSlice.actions;

export default carSlice.reducer;
