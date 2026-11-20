import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filtersSlice'
import favoritesReducer from './favoritesSlice'
import settingsReducer from './settingsSlice'
import { pokeApi } from './pokeApi'
import { persistState } from './persistence'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    favorites: favoritesReducer,
    settings: settingsReducer,
    [pokeApi.reducerPath]: pokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokeApi.middleware),
})

persistState(store)
