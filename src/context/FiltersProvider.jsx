import { usePokemonFilters } from '../hooks/usePokemonFilters'
import { FiltersContext } from './FiltersContext'

function FiltersProvider({ children }) {
  const filtersForm = usePokemonFilters()

  return <FiltersContext value={filtersForm}>{children}</FiltersContext>
}

export default FiltersProvider
