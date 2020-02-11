import React from 'react'
import { Link } from 'react-router-dom'

const User = (props: any) => {
  console.log('TCL: User -> props', props)
  return (
    <div>
      USER
      <Link to="/">Home</Link>
    </div>
  )
}

export default User
