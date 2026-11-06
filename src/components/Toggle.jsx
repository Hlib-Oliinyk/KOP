import { useUnits } from '../hooks/useUnits'

function Toggle() {
  const { isNormal, setIsNormal } = useUnits()

  return (
    <div className="widget-card">
      <h3>Одиниці виміру</h3>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isNormal}
          onChange={(event) => setIsNormal(event.target.checked)}
        />
        {isNormal ? 'м / кг' : 'ft / lbs'}
      </label>
      <p className="toggle-hint">Впливає на зріст і вагу в таблиці, списку та на сторінці покемона</p>
    </div>
  )
}

export default Toggle
