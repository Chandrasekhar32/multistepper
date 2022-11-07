import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import Success from "./Success";
import UserDetails from "./UserDetails";
import Confirmation from "./Confirmation";

const SignUp = ({values,prevStep,nextStep,addNew,handleChange}) => {
 

  switch (values.step) {
    case 1:
      return (
        <UserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <PersonalDetails
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirmation
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 4:
      return <Success addNew={addNew}  values={values}/>;
    // never forget the default case, otherwise VS code would be mad!
    default:
  }
};

export default SignUp;
