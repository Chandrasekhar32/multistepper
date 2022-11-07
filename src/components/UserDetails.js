import React from 'react'

const UserDetails = ({nextStep,values,handleChange}) => {
  return (
    <div>UserDetails
        <h1>Hello user: "step-{values.step}"</h1>
        <button onClick={nextStep}>Next</button>
    </div>
  )
}

export default UserDetails