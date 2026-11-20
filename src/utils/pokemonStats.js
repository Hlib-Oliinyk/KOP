import { TYPE_COLORS } from '../constants/charts'

function countTypes(pokemons) {
  return pokemons.flatMap((pokemon) => pokemon.types).reduce((acc, type) => {
    acc[type] = (acc[type] || 0) + 1
    return acc
  }, {})
}

export function getMostCommonType(pokemons) {
  const [type, count] = Object.entries(countTypes(pokemons)).sort((a, b) => b[1] - a[1])[0]
  return { type, count }
}

export function getUniqueTypes(pokemons) {
  return [...new Set(pokemons.flatMap((pokemon) => pokemon.types))].sort()
}

export function getAverageHp(pokemons) {
  const total = pokemons.reduce((sum, pokemon) => sum + pokemon.stats.hp, 0)
  return Math.round(total / pokemons.length)
}

export function getTypeDistribution(pokemons) {
  return Object.entries(countTypes(pokemons))
    .map(([type, count]) => ({ type, count, color: TYPE_COLORS[type] }))
    .sort((a, b) => b.count - a.count || a.type.localeCompare(b.type))
}

export function getStatsChartData(pokemons) {
  return [...pokemons]
    .sort((a, b) => a.id - b.id)
    .map((pokemon) => ({ name: pokemon.name, hp: pokemon.stats.hp, attack: pokemon.stats.attack }))
}
