import { CHART_TYPE_LABELS } from '../../constants/charts'

function ChartTypeSwitch({ types, value, onChange }) {
  return (
    <div className="chart-type-switch" role="group" aria-label="Тип графіка">
      {types.map((type) => {
        const isActive = type === value

        return (
          <button
            key={type}
            type="button"
            className={isActive ? 'chart-type-button chart-type-button--active' : 'chart-type-button'}
            aria-pressed={isActive}
            onClick={() => onChange(type)}
          >
            {CHART_TYPE_LABELS[type]}
          </button>
        )
      })}
    </div>
  )
}

export default ChartTypeSwitch
