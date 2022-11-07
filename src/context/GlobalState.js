import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
    users:[]
};

  const { step } = initialState;

  const {
    email,
    username,
    password,
    firstName,
    lastName,
    country,
    levelOfEducation,
  } = initialState;

  const values = {
    email,
    username,
    password,
    firstName,
    lastName,
    country,
    step,
  };
//   const steps = [
//     { number: 1, name: "one", visited: true },
//     { number: 2, name: "two", visited: false },
//     { number: 3, name: "three", visited: false },
//     { number: 4, name: "four", visited: false },
//   ];
  
//Create context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //  Actions
  function prevStep(user) {
    dispatch({
      type: "PREV_STEP",
      payload: user
    });
  }
  function nextStep(user) {
    dispatch({
      type: "NEXT_STEP",
      payload: user,
    });
  }
    //Handle fields
    function handleChange(e) {
      dispatch({
        type: "ADD_FIELDS",
        payload: ({
          [e.target.name]: e.target.value,
        }),
      });
    }

    function addNew () {
        dispatch({
            type:'STEP_ONE',
            payload:({ user: 1 })
        })
      
    }
  return <GlobalContext.Provider value={{users:state.users, values, prevStep,nextStep,addNew, handleChange}} >{children}</GlobalContext.Provider>;
};
