import { createSlice } from '@reduxjs/toolkit'
import { DEFAULT_FILTERS } from '../constants/filters'

const filtersSlice = createSlice({
  name: 'filters',
  initialState: DEFAULT_FILTERS,
  reducers: {
    setSearch: (state, action) => ({ ...state, search: action.payload }),
    setType: (state, action) => ({ ...state, type: action.payload }),
    setLimit: (state, action) => ({ ...state, limit: action.payload }),
    resetFilters: () => DEFAULT_FILTERS,
  },
  selectors: {
    selectFilters: (state) => state,
    selectIsFiltersDirty: (state) =>
      state.search !== DEFAULT_FILTERS.search ||
      state.type !== DEFAULT_FILTERS.type ||
      state.limit !== DEFAULT_FILTERS.limit,
  },
})

export const { setSearch, setType, setLimit, resetFilters } = filtersSlice.actions
export const { selectFilters, selectIsFiltersDirty } = filtersSlice.selectors
export default filtersSlice.reducer
