import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 10,
};

export const customReducer = createReducer(initialState, {
  incrementByValue: (state, action) => {
    state.c += 1;
    state.c += action.payload;
  },
  increment: (state, action) => {
    state.c += 1;
  },
  decrement: (state, action) => {
    state.c -= 1;
  },
});
