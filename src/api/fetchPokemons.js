import { normalizePokemon } from './normalizePokemon'

const BASE_URL = 'https://pokeapi.co/api/v2'

async function fetchPokemon(id) {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`)

  if (!response.ok) {
    throw new Error(`Не вдалося завантажити покемона №${id} (статус ${response.status})`)
  }

  const data = await response.json()
  return normalizePokemon(data)
}

export function fetchPokemons(count) {
  const ids = Array.from({ length: count }, (_, index) => index + 1)
  return Promise.all(ids.map(fetchPokemon))
}
