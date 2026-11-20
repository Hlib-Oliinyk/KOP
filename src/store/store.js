import { configureStore } from '@reduxjs/toolkit'
import filtersReducer from './filtersSlice'
import settingsReducer from './settingsSlice'
import { pokeApi } from './pokeApi'
import { persistState } from './persistence'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    settings: settingsReducer,
    [pokeApi.reducerPath]: pokeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokeApi.middleware),
})

persistState(store)
