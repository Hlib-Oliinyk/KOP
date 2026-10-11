const BASE_URL = 'https://pokeapi.co/api/v2'

function capitalize(text) {
  return text
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function getBaseStat(stats, name) {
  return stats.find((item) => item.stat.name === name).base_stat
}

function normalizePokemon(data) {
  return {
    id: data.id,
    name: capitalize(data.name),
    types: [...data.types].sort((a, b) => a.slot - b.slot).map((item) => capitalize(item.type.name)),
    height: data.height / 10,
    weight: data.weight / 10,
    stats: {
      hp: getBaseStat(data.stats, 'hp'),
      attack: getBaseStat(data.stats, 'attack'),
      defense: getBaseStat(data.stats, 'defense'),
      speed: getBaseStat(data.stats, 'speed'),
    },
    abilities: [...data.abilities]
      .sort((a, b) => a.slot - b.slot)
      .map((item) => capitalize(item.ability.name)),
  }
}

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
