function Toggle({ isNormal, onToggle }) {
  return (
    <div className="widget-card">
      <h3>Одиниці виміру</h3>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isNormal}
          onChange={(event) => onToggle(event.target.checked)}
        />
        {isNormal ? 'м / кг' : 'ft / lbs'}
      </label>
      <p className="toggle-hint">Впливає на зріст і вагу в списку покемонів нижче</p>
    </div>
  )
}

export default Toggle
