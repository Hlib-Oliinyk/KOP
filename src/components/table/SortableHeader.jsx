function SortableHeader({ label, field, sortField, sortDirection, onSort }) {
  const isActive = field === sortField
  const arrow = sortDirection === 'asc' ? '▲' : '▼'

  return (
    <th className="sortable-header" onClick={() => onSort(field)}>
      {label} {isActive && arrow}
    </th>
  )
}

export default SortableHeader
