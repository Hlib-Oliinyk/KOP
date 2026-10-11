import { useState } from 'react'
import SortableHeader from './SortableHeader'
import { sortPokemons } from '../../utils/sortPokemons'
import { metersToFeetInches, kgToLbs } from '../../utils/units'

function PokemonTable({ pokemons, isNormal }) {
  const [sortField, setSortField] = useState('id')
  const [sortDirection, setSortDirection] = useState('asc')

  const sortedPokemons = sortPokemons(pokemons, sortField, sortDirection)

  const handleSort = (field) => {
    if (field === sortField) {
      setSortDirection((direction) => (direction === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const sortProps = { sortField, sortDirection, onSort: handleSort }

  return (
    <div className="widget-card">
      <h3>Таблиця покемонів</h3>
      <div className="table-wrapper">
        <table className="pokemon-table">
          <thead>
            <tr>
              <SortableHeader label="№" field="id" {...sortProps} />
              <SortableHeader label="Ім'я" field="name" {...sortProps} />
              <th>Типи</th>
              <SortableHeader label="HP" field="hp" {...sortProps} />
              <SortableHeader label="Атака" field="attack" {...sortProps} />
              <SortableHeader label="Зріст" field="height" {...sortProps} />
              <SortableHeader label="Вага" field="weight" {...sortProps} />
            </tr>
          </thead>
          <tbody>
            {sortedPokemons.map((pokemon) => (
              <tr key={pokemon.id}>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PokemonTable
