import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import TypeBadges from '../pokemon/TypeBadges'
import { selectIsNormal } from '../../store/settingsSlice'
import { formatHeight, formatWeight } from '../../utils/units'
import { getPokemonPath } from '../../routes/paths'

function PokemonListItems({ pokemons }) {
  const isNormal = useSelector(selectIsNormal)

  return (
    <>
      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <div className="pokemon-info">
              <Link to={getPokemonPath(pokemon.id)} className="pokemon-name pokemon-link">
                {pokemon.name}
              </Link>
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
