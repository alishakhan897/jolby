import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsSearch} from 'react-icons/bs'
import ProfileDetails from '../ProfileDetails'
import AllJobsContent from '../AllJobs'
import Header from '../Header'
import FilterGroups from '../FilterGroups'
import SalaryGroups from '../SalaryRange'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class JobSection extends Component {
  state = {profileinf: []}

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData = async () => {
    const apiUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const UpdatedProfiledata = data.profile_details
      const UpdatedProfile = {
        name: UpdatedProfiledata.name,
        ProfileImageUrl: UpdatedProfiledata.profile_image_url,
        shortBio: UpdatedProfiledata.short_bio,
      }
      console.log(response)
      this.setState({profileinf: UpdatedProfile})
    }
  }

  render() {
    const {profileinf} = this.state

    return (
      <>
        <Header />
        <div className="job-section-container">
          <div className="small-container-job">
            <div className="rightsidediv">
              <div className="profile-section">
                <ProfileDetails ProfileDetailsData={profileinf} />
              </div>
              <hr />
              <h1 className="employment">Types of Employment</h1>
              {employmentTypesList.map(each => (
                <FilterGroups employmentTypesListData={each} />
              ))}
              <hr />
              <h1 className="employment">Salary Range</h1>
              {salaryRangesList.map(each => (
                <SalaryGroups SalaryTypesListData={each} />
              ))}
            </div>

            <div className="leftsidediv">
              <AllJobsContent />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default JobSection
