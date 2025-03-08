import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params = useParams()
  return (
    <div>The {params.username} is an Authentic User</div>
  )
}

export default User