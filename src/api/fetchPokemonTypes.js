import { fetchJson } from './fetchJson'

const ALL_TYPES_LIMIT = 100
const TYPES_WITHOUT_POKEMONS = new Set(['stellar', 'unknown', 'shadow'])

export async function fetchPokemonTypes(_params, { signal } = {}) {
  const data = await fetchJson(`/type?limit=${ALL_TYPES_LIMIT}`, signal)

  return data.results
    .map((entry) => entry.name)
    .filter((name) => !TYPES_WITHOUT_POKEMONS.has(name))
    .sort()
}
