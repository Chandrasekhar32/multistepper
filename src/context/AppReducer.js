const AppReducer =  (state, action) => {
    switch (action.type) {
        case "PREV_STEP":
            return{
                ...state,
                steps:[action.payload, ...state.steps ]
            }
        case "NEXT_STEP":
            return{
                ...state,
                steps:[action.payload, ...state.steps ]
            }
        case "ADD_FIELDS":
            return{
                ...state,
                steps:[action.payload, ...state.steps ]
            }
        case "STEP_ONE":
                return{
                    ...state,
                    steps:[action.payload, ...state.steps ]
                }
            
      default:
        return state;
    }
  };
  export default AppReducer;