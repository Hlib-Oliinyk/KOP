import { Controller } from 'react-hook-form'
import TextField from '../form/TextField'
import SelectField from '../form/SelectField'
import { LIMIT_OPTIONS } from '../../constants/filters'
import { capitalize } from '../../utils/text'

const ALL_TYPES_OPTION = { value: '', label: 'Усі типи' }

const limitOptions = LIMIT_OPTIONS.map((limit) => ({ value: limit, label: `${limit} покемонів` }))

function PokemonFilters({ control, types, typesError, isDirty, onReset }) {
  const typeOptions = [
    ALL_TYPES_OPTION,
    ...(types ?? []).map((type) => ({ value: type, label: capitalize(type) })),
  ]

  return (
    <form className="widget-card filters-panel" role="search" onSubmit={(event) => event.preventDefault()}>
      <h3>Пошук і фільтри</h3>

      <div className="filters-fields">
        <Controller
          name="search"
          control={control}
          render={({ field }) => (
            <TextField
              label="Назва"
              type="search"
              placeholder="Напр. pika"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Тип"
              options={typeOptions}
              value={field.value}
              onChange={field.onChange}
              disabled={!types}
            />
          )}
        />
        <Controller
          name="limit"
          control={control}
          render={({ field }) => (
            <SelectField
              label="Кількість"
              options={limitOptions}
              value={field.value}
              onChange={(value) => field.onChange(Number(value))}
            />
          )}
        />
      </div>

      {typesError && <p className="form-hint form-hint--error">Не вдалося завантажити список типів</p>}

      <button type="button" className="reset-button" onClick={onReset} disabled={!isDirty}>
        Скинути фільтри
      </button>
    </form>
  )
}

export default PokemonFilters
