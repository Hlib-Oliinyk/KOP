import { createSlice } from '@reduxjs/toolkit'
import { STORAGE_KEYS, readStorage } from './storage'
import { CHART_TYPE_LABELS, DEFAULT_CHART_TYPES } from '../constants/charts'

function isChartType(value) {
  return Object.hasOwn(CHART_TYPE_LABELS, value)
}

function loadChartTypes() {
  const saved = readStorage(STORAGE_KEYS.chartTypes, {})

  return Object.fromEntries(
    Object.entries(DEFAULT_CHART_TYPES).map(([chartId, fallback]) => {
      const savedType = saved?.[chartId]
      return [chartId, isChartType(savedType) ? savedType : fallback]
    }),
  )
}

const chartsSlice = createSlice({
  name: 'charts',
  initialState: loadChartTypes(),
  reducers: {
    setChartType: (state, action) => {
      const { chartId, chartType } = action.payload
      return { ...state, [chartId]: chartType }
    },
  },
  selectors: {
    selectChartTypes: (state) => state,
    selectChartType: (state, chartId) => state[chartId],
  },
})

export const { setChartType } = chartsSlice.actions
export const { selectChartTypes, selectChartType } = chartsSlice.selectors
export default chartsSlice.reducer
