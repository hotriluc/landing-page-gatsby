import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  needsUpdate: false,
  theme: localStorage.getItem('theme') || 'dark',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setNeedsUpdate: (state, action: PayloadAction<boolean>) => {
      state.needsUpdate = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
