import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../index";

const initialState: IAppState = {
  isReady: false,
  isSidebarExpanded: false,
};

export interface IAppState {
  isReady: boolean;
  isSidebarExpanded: boolean;
}

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    appReady(state) {
      state.isReady = true;
    },
  },
});

export const { appReady } = app.actions;

export const selectApp = (state: RootState) => state.app;

export default app.reducer;
