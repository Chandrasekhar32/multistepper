import React from 'react'

const Confirmation = ({nextStep,prevStep,values,handleChange}) => {
  return (
    <div>Confirmation
        <h3>"step-{values.step}":confirmation</h3>
        <button onClick={prevStep}>Prev</button>
        <button onClick={nextStep}>Next</button>
    </div>
  )
}

export default Confirmation