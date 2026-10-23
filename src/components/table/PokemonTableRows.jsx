import TypeBadges from '../pokemon/TypeBadges'
import { formatHeight, formatWeight } from '../../utils/units'

function PokemonTableRows({ pokemons, isNormal }) {
  return (
    <tbody>
      {pokemons.map((pokemon) => (
        <tr key={pokemon.id}>
          <td>{pokemon.id}</td>
          <td>{pokemon.name}</td>
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
