import React from 'react'

const Success = ({addNew,values}) => {
 
  return (
    <div>Successfull
        <h1>"step-{values.step}":success</h1>
        <button onClick={addNew}>Add another user</button>   
    </div>
  )
}

export default Success