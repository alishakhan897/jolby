import {Component} from 'react'
import Cookies from 'js-cookie'
import JobCards from '../JobCard'
import {BsSearch} from 'react-icons/bs'
import './index.css'

class AllJobsContent extends Component {
  state = {AllJobsDetailsData: [], SearchInput: ''}

  componentDidMount() {
    this.AllJobsApis()
  }

  SearchInput = event => {
    this.setState({SearchInput: event.target.value})
  }

  AllJobsApis = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const UpdatedJobs = data.jobs.map(each => ({
        companyLogoOrl: each.company_logo_url,
        employmentType: each.employment_type,
        id: each.id,
        jobDescription: each.job_description,
        Location: each.location,
        Packageperannum: each.package_per_annum,
        rating: each.rating,
        title: each.title,
      }))

      this.setState({AllJobsDetailsData: UpdatedJobs})
    }
  }

  render() {
    const {AllJobsDetailsData, SearchInput} = this.state
    const FilteredJobs = AllJobsDetailsData.filter(each =>
      each.title.toLowerCase().includes(SearchInput.toLowerCase()),
    )
    return (
      <div>
        <div className="search-input-div">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            onChange={this.SearchInput}
            value={SearchInput}
          />
          <div>
            <button type="button" data-testid="searchButton">
              <BsSearch className="search-icon" />
            </button>
          </div>
        </div>
        {FilteredJobs.map(each => (
          <JobCards key={each.id} JobCardDetail={each} />
        ))}
      </div>
    )
  }
}

export default AllJobsContent
