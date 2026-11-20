import { STORAGE_KEYS, writeStorage } from './storage'
import { selectTheme } from './settingsSlice'
import { selectFavorites } from './favoritesSlice'
import { selectChartTypes } from './chartsSlice'

const PERSISTED_VALUES = [
  { key: STORAGE_KEYS.theme, select: selectTheme },
  { key: STORAGE_KEYS.favorites, select: selectFavorites },
  { key: STORAGE_KEYS.chartTypes, select: selectChartTypes },
]

export function persistState(store) {
  let previousState = store.getState()

  return store.subscribe(() => {
    const state = store.getState()

    PERSISTED_VALUES.forEach(({ key, select }) => {
      const value = select(state)
      if (value !== select(previousState)) writeStorage(key, value)
    })

    previousState = state
  })
}
