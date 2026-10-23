function SelectField({ label, value, onChange, options, disabled = false }) {
  return (
    <label className="form-field">
      {label}
      <select
        className="form-control"
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SelectField
