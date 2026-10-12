function capitalize(text) {
  return text
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function getBaseStat(stats, name) {
  return stats.find((item) => item.stat.name === name).base_stat
}

export function normalizePokemon(data) {
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
