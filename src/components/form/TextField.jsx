function TextField({ label, value, onChange, ...inputProps }) {
  return (
    <label className="form-field">
      {label}
      <input
        {...inputProps}
        className="form-control"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export default TextField
