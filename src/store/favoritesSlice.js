import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, readStorage } from './storage'

function isValidFavorite(item) {
  return Number.isInteger(item?.id) && typeof item.name === 'string' && Array.isArray(item.types)
}

function loadFavorites() {
  const saved = readStorage(STORAGE_KEYS.favorites, [])
  return Array.isArray(saved) ? saved.filter(isValidFavorite) : []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { items: loadFavorites() },
  reducers: {
    toggleFavorite: (state, action) => {
      const { id, name, types } = action.payload
      const isFavorite = state.items.some((item) => item.id === id)

      return {
        ...state,
        items: isFavorite ? state.items.filter((item) => item.id !== id) : [...state.items, { id, name, types }],
      }
    },
    clearFavorites: (state) => ({ ...state, items: [] }),
  },
  selectors: {
    selectFavorites: (state) => state.items,
    selectIsFavorite: (state, id) => state.items.some((item) => item.id === id),
  },
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions
export const { selectFavorites, selectIsFavorite } = favoritesSlice.selectors
export default favoritesSlice.reducer
