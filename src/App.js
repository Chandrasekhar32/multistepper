import "./App.css";
import SignUp from "./components/SignUp";
import React, { useState } from "react";
import {GlobalProvider} from '../src/context/GlobalState';

function App() {
  const [isActive, setIsActive] = useState(false);
  const [state, setState] = useState({
    step: 1,
    email: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    levelOfEducation: "",
  });

  const { step } = state;
  const {
    email,
    username,
    password,
    firstName,
    lastName,
    country,
    levelOfEducation,
  } = state;
  const values = {
    email,
    username,
    password,
    firstName,
    lastName,
    country,
    step,
  };

  const steps = [
    { number: 1, name: "one", visited: true },
    { number: 2, name: "two", visited: false },
    { number: 3, name: "three", visited: false },
    { number: 4, name: "four", visited: false },
  ];

  // const completed = steps.map((item) => item.visited);

  //go back to previous state
  const prevStep = () => {
    setState({ step: step - 1 });
  };

  // //proceed to the next step
  const nextStep = () => {
    setState({ step: step + 1 });
  };

  // // Handle fields change
  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const addNew = () => {
    setState({ step: 1 });
  };

  return (
    <GlobalProvider >
    <div className="App">
      Multi stepper
      <div style={{ display: "flex", justifyContent: "center" }}>
        {steps.map((step, index) => {
          return (
            <p
              key={index}
              className={`step-${step.name} ${
                state.step === step.number ? "active-step" : "inactive-step"
              }`}
            >
              {step.number}
            </p>
          );
        })}
      </div>
      <SignUp prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values} addNew={addNew}/>
    </div>
    </GlobalProvider>
  );
}

export default App;
