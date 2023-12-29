import './index.css'
import {FaStar} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {MdLocationOn, MdBusinessCenter} from 'react-icons/md'

const JobCards = props => {
  const {JobCardDetail} = props
  const {
    companyLogoOrl,
    employmentType,
    jobDescription,
    Packageperannum,
    Location,
    rating,
    title,
    id,
  } = JobCardDetail

  return (
    <Link to={`/jobs/${id}`}>
      <div className="job-card-container">
        <div className="job-items">
          <img src={companyLogoOrl} className="img-card" />
          <div className="title-star-card">
            <p className="title">{title}</p>
            <div className="rate-star">
              <FaStar className="star" />
              <p className="title">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="intern">
            <div className="location-div">
              <div className="location-div2">
                <MdLocationOn className="location-color" />
              </div>
              <p className="title">{Location}</p>
            </div>

            <div className="location-div">
              <div className="location-div2">
                <MdBusinessCenter className="location-color" />
              </div>
              <p className="title">{employmentType}</p>
            </div>
          </div>
          <p className="title2">{Packageperannum}</p>
        </div>
        <hr />
        <p className="title3">Description</p>
        <p className="title">{jobDescription}</p>
      </div>
    </Link>
  )
}

export default JobCards
