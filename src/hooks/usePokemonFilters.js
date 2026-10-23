import { useMemo } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { DEFAULT_FILTERS } from '../constants/filters'

export function usePokemonFilters() {
  const {
    control,
    reset,
    formState: { isDirty },
  } = useForm({ defaultValues: DEFAULT_FILTERS })

  const [search, type, limit] = useWatch({ control, name: ['search', 'type', 'limit'] })
  const filters = useMemo(() => ({ search, type, limit }), [search, type, limit])

  const resetFilters = () => reset(DEFAULT_FILTERS)

  return { control, filters, isDirty, resetFilters }
}
