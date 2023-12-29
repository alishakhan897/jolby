import './index.css'

const SalaryGroups = props => {
  const {SalaryTypesListData, SalaryChange} = props
  const {label, salaryRangeId} = SalaryTypesListData

  const handleRadioChange = () => {
    SalaryChange(salaryRangeId)
  }

  return (
    <li>
      <input type="radio" className="label" onChange={handleRadioChange} />
      <p className="title">{label}</p>
    </li>
  )
}

export default SalaryGroups
