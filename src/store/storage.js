export const STORAGE_KEYS = {
  theme: 'pokedash:theme',
  favorites: 'pokedash:favorites',
  chartTypes: 'pokedash:chart-types',
}

export function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value === null ? fallback : JSON.parse(value)
  } catch {
    return fallback
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}
