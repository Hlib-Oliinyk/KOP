import { useState } from 'react'

function metersToFeetInches(meters) {
  const totalInches = meters * 39.3701
  const feet = Math.floor(totalInches / 12)
  const inches = Math.round(totalInches % 12)
  return `${feet}'${inches}"`
}

function kgToLbs(kg) {
  return Math.round(kg * 2.20462 * 10) / 10
}

function Toggle({ pokemon }) {
  const [isNormal, setIsNormal] = useState(true)

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

      <div className="unit-preview">
        <p className="unit-preview-name">{pokemon.name}</p>
        <p>
          Зріст: {isNormal ? `${pokemon.height} м` : metersToFeetInches(pokemon.height)}
        </p>
        <p>Вага: {isNormal ? `${pokemon.weight} кг` : `${kgToLbs(pokemon.weight)} lbs`}</p>
      </div>
    </div>
  )
}

export default Toggle
