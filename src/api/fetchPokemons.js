import { fetchJson } from './fetchJson'
import { normalizePokemon } from './normalizePokemon'

const ALL_POKEMONS_LIMIT = 100000

async function fetchPokemonNames(type, signal) {
  if (type) {
    const data = await fetchJson(`/type/${type}`, signal)
    return data.pokemon.map((entry) => entry.pokemon.name)
  }

  const data = await fetchJson(`/pokemon?limit=${ALL_POKEMONS_LIMIT}`, signal)
  return data.results.map((entry) => entry.name)
}

function toSearchQuery(search) {
  return search.trim().toLowerCase().replace(/\s+/g, '-')
}

async function fetchPokemon(name, signal) {
  const data = await fetchJson(`/pokemon/${name}`, signal)
  return normalizePokemon(data)
}

export async function fetchPokemons({ search, type, limit }, { signal } = {}) {
  const names = await fetchPokemonNames(type, signal)
  const query = toSearchQuery(search)
  const matchedNames = names.filter((name) => name.includes(query)).slice(0, limit)

  return Promise.all(matchedNames.map((name) => fetchPokemon(name, signal)))
}
