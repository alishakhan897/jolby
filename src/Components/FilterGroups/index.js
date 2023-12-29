import './index.css'

const FilterGroups = props => {
  const {employmentTypesListData} = props
  const {label} = employmentTypesListData

  return (
    <li>
      <input type="checkbox" className="label" />
      <p className="title">{label}</p>
    </li>
  )
}

export default FilterGroups
