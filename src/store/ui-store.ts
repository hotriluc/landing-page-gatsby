import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CursorType } from '../interfaces/Cursor';

const initialState: {
  needsUpdate: boolean;
  theme: string;
  cursorType: CursorType;
  toggleMenu: boolean;
} = {
  needsUpdate: false,
  theme: localStorage.getItem('theme') || 'dark',
  cursorType: null,
  toggleMenu: false,
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
    setCursorType: (state, action: PayloadAction<null | CursorType>) => {
      state.cursorType = action.payload;
    },
    setToggleMenu: (state) => {
      state.toggleMenu = !state.toggleMenu;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
