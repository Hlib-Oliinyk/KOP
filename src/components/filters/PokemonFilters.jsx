import { useDispatch, useSelector } from 'react-redux'
import TextField from '../form/TextField'
import SelectField from '../form/SelectField'
import { LIMIT_OPTIONS } from '../../constants/filters'
import {
  resetFilters,
  selectFilters,
  selectIsFiltersDirty,
  setLimit,
  setSearch,
  setType,
} from '../../store/filtersSlice'
import { useGetPokemonTypesQuery } from '../../store/pokeApi'
import { capitalize } from '../../utils/text'

const ALL_TYPES_OPTION = { value: '', label: 'Усі типи' }

const limitOptions = LIMIT_OPTIONS.map((limit) => ({ value: limit, label: `${limit} покемонів` }))

function PokemonFilters() {
  const filters = useSelector(selectFilters)
  const isDirty = useSelector(selectIsFiltersDirty)
  const dispatch = useDispatch()
  const { data: types, isError: typesError } = useGetPokemonTypesQuery()

  const typeOptions = [
    ALL_TYPES_OPTION,
    ...(types ?? []).map((type) => ({ value: type, label: capitalize(type) })),
  ]

  return (
    <form className="widget-card filters-panel" role="search" onSubmit={(event) => event.preventDefault()}>
      <h3>Пошук і фільтри</h3>

      <div className="filters-fields">
        <TextField
          label="Назва"
          type="search"
          placeholder="Напр. pika"
          value={filters.search}
          onChange={(value) => dispatch(setSearch(value))}
        />
        <SelectField
          label="Тип"
          options={typeOptions}
          value={filters.type}
          onChange={(value) => dispatch(setType(value))}
          disabled={!types}
        />
        <SelectField
          label="Кількість"
          options={limitOptions}
          value={filters.limit}
          onChange={(value) => dispatch(setLimit(Number(value)))}
        />
      </div>

      {typesError && <p className="form-hint form-hint--error">Не вдалося завантажити список типів</p>}

      <button
        type="button"
        className="reset-button"
        onClick={() => dispatch(resetFilters())}
        disabled={!isDirty}
      >
        Скинути фільтри
      </button>
    </form>
  )
}

export default PokemonFilters
