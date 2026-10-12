import { useState } from 'react'
import SortableHeader from './SortableHeader'
import PokemonTableRows from './PokemonTableRows'
import { sortPokemons } from '../../utils/sortPokemons'

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
          <PokemonTableRows pokemons={sortedPokemons} isNormal={isNormal} />
        </table>
      </div>
    </div>
  )
}

export default PokemonTable
