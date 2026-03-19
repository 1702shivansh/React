import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'


const Profile = () => {
  const {user}=useContext(UserContext);
  if(!user){
    return <p>Please login to view your profile.</p>
  }
  return (
    <div>Welcome {user.username}</div>
  )
}

export default Profile