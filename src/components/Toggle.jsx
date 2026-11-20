import { useDispatch, useSelector } from 'react-redux'
import { selectIsNormal, setIsNormal } from '../store/settingsSlice'

function Toggle() {
  const isNormal = useSelector(selectIsNormal)
  const dispatch = useDispatch()

  return (
    <div className="widget-card">
      <h3>Одиниці виміру</h3>
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isNormal}
          onChange={(event) => dispatch(setIsNormal(event.target.checked))}
        />
        {isNormal ? 'м / кг' : 'ft / lbs'}
      </label>
      <p className="toggle-hint">Впливає на зріст і вагу в таблиці, списку та на сторінці покемона</p>
    </div>
  )
}

export default Toggle
