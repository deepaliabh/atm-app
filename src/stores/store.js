function reducer(state = { transactions: [], withdrawalAmt : 0, isEnabled : false }, action) {
    switch (action.type) {
      case "UPDATE_TRANSACTIONS":
        return {
          ...state,
          
          transactions: action.payload
        };
      case "UPDATE_WITHDRAWAL_AMT": 
        return{
            ...state,
            withdrawalAmt : action.payload
        };
      case "ENABLE_SUBMIT": 
        return{
            ...state,
            isEnabled : action.payload
        }; 
      default:
        return state;
    }
  }
  
  export default reducer;