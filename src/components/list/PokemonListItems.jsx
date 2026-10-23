import TypeBadges from '../pokemon/TypeBadges'
import { formatHeight, formatWeight } from '../../utils/units'

function PokemonListItems({ pokemons, isNormal }) {
  return (
    <>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <div className="pokemon-info">
              <span className="pokemon-name">{pokemon.name}</span>
              <span className="pokemon-measurements">
                {formatHeight(pokemon.height, isNormal)}
                {' · '}
                {formatWeight(pokemon.weight, isNormal)}
              </span>
            </div>
            <TypeBadges types={pokemon.types} />
          </li>
        ))}
      </ul>

      {pokemons.length === 0 && <p className="empty-state">Немає покемонів цього типу</p>}
    </>
  )
}

export default PokemonListItems
