import { Link, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import TypeBadges from '../pokemon/TypeBadges'
import FavoriteButton from '../favorites/FavoriteButton'
import { selectIsNormal } from '../../store/settingsSlice'
import { formatHeight, formatWeight } from '../../utils/units'
import { getPokemonPath } from '../../routes/paths'

function PokemonTableRows({ pokemons }) {
  const isNormal = useSelector(selectIsNormal)
  const navigate = useNavigate()

  const handleRowClick = (event, id) => {
    if (event.target.closest('a, button')) return
    navigate(getPokemonPath(id))
  }

  return (
    <tbody>
      {pokemons.map((pokemon) => (
        <tr key={pokemon.id} className="clickable-row" onClick={(event) => handleRowClick(event, pokemon.id)}>
          <td className="favorite-cell">
            <FavoriteButton pokemon={pokemon} />
          </td>
          <td>{pokemon.id}</td>
          <td>
            <Link to={getPokemonPath(pokemon.id)} className="pokemon-link">
              {pokemon.name}
            </Link>
          </td>
          <td>
            <TypeBadges types={pokemon.types} />
          </td>
          <td>{pokemon.stats.hp}</td>
          <td>{pokemon.stats.attack}</td>
          <td>{formatHeight(pokemon.height, isNormal)}</td>
          <td>{formatWeight(pokemon.weight, isNormal)}</td>
        </tr>
      ))}
    </tbody>
  )
}

export default PokemonTableRows
