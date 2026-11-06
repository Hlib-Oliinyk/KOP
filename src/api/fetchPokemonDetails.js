import { fetchJson } from './fetchJson'
import { normalizePokemonDetails } from './normalizePokemonDetails'
import { getIdFromUrl } from './pokeApiUrls'

async function fetchEvolutionChain(species, signal) {
  if (!species.evolution_chain) return null
  return fetchJson(`/evolution-chain/${getIdFromUrl(species.evolution_chain.url)}`, signal)
}

export async function fetchPokemonDetails(id, { signal } = {}) {
  const pokemon = await fetchJson(`/pokemon/${id}`, signal)
  const species = await fetchJson(`/pokemon-species/${pokemon.species.name}`, signal)
  const evolutionChain = await fetchEvolutionChain(species, signal)

  return normalizePokemonDetails(pokemon, species, evolutionChain)
}
