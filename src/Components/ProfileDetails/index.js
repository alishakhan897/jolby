import './index.css'

const ProfileDetails = props => {
  const {ProfileDetailsData} = props
  const {name, ProfileImageUrl, shortBio} = ProfileDetailsData

  return (
    <div className="main-profile-container">
      <img src={ProfileImageUrl} />
      <h1>{name}</h1>
      <p>{shortBio}</p>
    </div>
  )
}

export default ProfileDetails
