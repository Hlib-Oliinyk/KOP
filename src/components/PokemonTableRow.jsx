import { metersToFeetInches, kgToLbs } from '../utils/units'

function PokemonTableRow({ pokemon, isNormal }) {
  return (
    <tr>
      <td>{pokemon.id}</td>
      <td>{pokemon.name}</td>
      <td>
        <span className="type-badges">
          {pokemon.types.map((type) => (
            <span key={type} className={`type-badge type-badge--${type.toLowerCase()}`}>
              {type}
            </span>
          ))}
        </span>
      </td>
      <td>{pokemon.stats.hp}</td>
      <td>{pokemon.stats.attack}</td>
      <td>{isNormal ? `${pokemon.height} м` : metersToFeetInches(pokemon.height)}</td>
      <td>{isNormal ? `${pokemon.weight} кг` : `${kgToLbs(pokemon.weight)} lbs`}</td>
    </tr>
  )
}

export default PokemonTableRow
