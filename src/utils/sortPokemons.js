const SORT_ACCESSORS = {
  id: (pokemon) => pokemon.id,
  name: (pokemon) => pokemon.name,
  hp: (pokemon) => pokemon.stats.hp,
  attack: (pokemon) => pokemon.stats.attack,
  height: (pokemon) => pokemon.height,
  weight: (pokemon) => pokemon.weight,
}

export function sortPokemons(pokemons, field, direction) {
  const getValue = SORT_ACCESSORS[field]
  const factor = direction === 'asc' ? 1 : -1

  return [...pokemons].sort((a, b) => {
    const valueA = getValue(a)
    const valueB = getValue(b)
    const result = typeof valueA === 'string' ? valueA.localeCompare(valueB) : valueA - valueB
    return result * factor
  })
}
