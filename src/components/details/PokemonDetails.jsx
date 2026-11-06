import { useFetch } from '../../hooks/useFetch'
import { fetchPokemonDetails } from '../../api/fetchPokemonDetails'
import LoadingState from '../status/LoadingState'
import ErrorState from '../status/ErrorState'
import NotFoundState from '../status/NotFoundState'
import PokemonHero from './PokemonHero'
import PokemonStats from './PokemonStats'
import PokemonAbilities from './PokemonAbilities'
import PokemonEvolutions from './PokemonEvolutions'

const NOT_FOUND_STATUS = 404

function PokemonDetails({ id }) {
  const { data: pokemon, loading, error, refetch } = useFetch(fetchPokemonDetails, id)

  if (error?.status === NOT_FOUND_STATUS) {
    return <NotFoundState title="Покемона не знайдено" message={`Покемона з id ${id} не існує.`} />
  }
  if (error) return <ErrorState message={error.message} onRetry={refetch} />
  if (loading) return <LoadingState message="Завантаження покемона..." />

  return (
    <article className="pokemon-details">
      <title>{`${pokemon.name} - Pokemon Dashboard`}</title>
      <PokemonHero pokemon={pokemon} />
      <div className="details-grid">
        <PokemonStats stats={pokemon.stats} />
        <PokemonAbilities abilities={pokemon.abilities} />
      </div>
      <PokemonEvolutions stages={pokemon.evolutions} />
    </article>
  )
}

export default PokemonDetails
