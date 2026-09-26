export function getMostCommonType(pokemons) {
  const counts = pokemons.flatMap((pokemon) => pokemon.types).reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1
    return acc
  }, {})

  const [type, count] = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]
  return { type, count }
}

export function getAverageHp(pokemons) {
  const total = pokemons.reduce((sum, pokemon) => sum + pokemon.stats.hp, 0)
  return Math.round(total / pokemons.length)
}
