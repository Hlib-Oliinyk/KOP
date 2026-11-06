import { normalizePokemon } from './normalizePokemon'
import { getIdFromUrl, getSpriteUrl } from './pokeApiUrls'
import { capitalize } from '../utils/text'

const LANGUAGE = 'en'

function findInLanguage(entries) {
  return entries.find((entry) => entry.language.name === LANGUAGE)
}

function cleanText(text) {
  return text.replace(/\s+/g, ' ').trim()
}

function getEvolutionStages(chain, currentSpeciesName) {
  const stages = []
  let level = [chain]

  while (level.length > 0) {
    stages.push(
      level.map((node) => {
        const id = getIdFromUrl(node.species.url)
        return {
          id,
          name: capitalize(node.species.name),
          image: getSpriteUrl(id),
          isCurrent: node.species.name === currentSpeciesName,
        }
      }),
    )
    level = level.flatMap((node) => node.evolves_to)
  }

  return stages
}

export function normalizePokemonDetails(pokemon, species, evolutionChain) {
  const { id, name, types, height, weight } = normalizePokemon(pokemon)
  const description = findInLanguage(species.flavor_text_entries)

  return {
    id,
    name,
    types,
    height,
    weight,
    image: pokemon.sprites.other['official-artwork'].front_default ?? pokemon.sprites.front_default,
    baseExperience: pokemon.base_experience,
    genus: findInLanguage(species.genera)?.genus ?? null,
    description: description ? cleanText(description.flavor_text) : null,
    isLegendary: species.is_legendary,
    isMythical: species.is_mythical,
    stats: pokemon.stats.map((item) => ({ key: item.stat.name, value: item.base_stat })),
    abilities: [...pokemon.abilities]
      .sort((a, b) => a.slot - b.slot)
      .map((item) => ({ name: capitalize(item.ability.name), isHidden: item.is_hidden })),
    evolutions: evolutionChain ? getEvolutionStages(evolutionChain.chain, species.name) : [],
  }
}
