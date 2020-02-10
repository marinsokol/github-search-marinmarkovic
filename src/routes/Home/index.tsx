import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props: any) => {
  console.log('TCL: Home -> props', props)
  return (
    <div>
      HOME
      <Link to="/user">User</Link>
    </div>
  )
}

export default Home
