import React from 'react'

const PersonalDetails = ({nextStep,values,handleChange,prevStep}) => {
  return (
    <div>PersonalDetails
        <h1> "step-{values.step}":user</h1>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
    </div>
  )
}

export default PersonalDetails