import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {userid}=useParams();
  return (
    <div className="bg-amber-500 text-center py-10 text-2xl">User : {userid}</div>
  )
}

export default User