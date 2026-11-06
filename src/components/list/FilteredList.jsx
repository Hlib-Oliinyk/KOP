import { useState } from 'react'
import PokemonTypeSelect from './PokemonTypeSelect'
import PokemonListItems from './PokemonListItems'

const ALL_TYPES = 'Усі'

function FilteredList({ pokemons, types }) {
  const [selectedType, setSelectedType] = useState(ALL_TYPES)

  const activeType = types.includes(selectedType) ? selectedType : ALL_TYPES

  const filteredPokemons =
    activeType === ALL_TYPES
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.types.includes(activeType))

  return (
    <div className="widget-card">
      <h3>Покемони за типом</h3>

      <PokemonTypeSelect
        types={types}
        selectedType={activeType}
        onSelectType={setSelectedType}
        allLabel={ALL_TYPES}
      />

      <PokemonListItems pokemons={filteredPokemons} />
    </div>
  )
}

export default FilteredList
