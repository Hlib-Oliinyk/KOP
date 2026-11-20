import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, readStorage } from './storage'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    theme: readStorage(STORAGE_KEYS.theme, 'light') === 'dark' ? 'dark' : 'light',
    isNormal: true,
  },
  reducers: {
    toggleTheme: (state) => ({ ...state, theme: state.theme === 'light' ? 'dark' : 'light' }),
    setIsNormal: (state, action) => ({ ...state, isNormal: action.payload }),
  },
  selectors: {
    selectTheme: (state) => state.theme,
    selectIsNormal: (state) => state.isNormal,
  },
})

export const { toggleTheme, setIsNormal } = settingsSlice.actions
export const { selectTheme, selectIsNormal } = settingsSlice.selectors
export default settingsSlice.reducer
