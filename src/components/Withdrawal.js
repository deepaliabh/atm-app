import React from "react";
import {useSelector,useDispatch} from "react-redux";

function Withdrawal() {
    const dispatch = useDispatch();
    const transactionList = useSelector(state => state.transactions);
    const withdrawalAmt = useSelector(state => state.withdrawalAmt);
    const isEnabled = useSelector(state => state.isEnabled);
    const currentBal = 2000 - transactionList.reduce((acc,val)=>(acc+val.amount),0);
    
    const validateForm = (e)=>{
        e.preventDefault();
        dispatch({
            type: "UPDATE_TRANSACTIONS",
            payload: [{"amount": parseFloat(withdrawalAmt),"name": "ATM Withdrawal"},...transactionList]
        });
        dispatch({
          type: "UPDATE_WITHDRAWAL_AMT",
          payload: parseFloat(0)
        });
        dispatch({
          type: "ENABLE_SUBMIT",
          payload: false
        });
    };

    const validateInput = (e) => {
        const elVal = e.target.value;
        const isNum = !!elVal.match(/^\d+$/);
        const floatAmt = parseFloat(elVal);
        if(isNum && floatAmt>0 && (floatAmt%20 === 0) && (currentBal-floatAmt > 0)){
          dispatch({
            type: "ENABLE_SUBMIT",
            payload: true
          });
        } 
        else {
          dispatch({
            type: "ENABLE_SUBMIT",
            payload: false
          });
        }
       
        dispatch({
            type: "UPDATE_WITHDRAWAL_AMT",
            payload: elVal
          });
        
    };
    
    return (
        <>
          <h2 className = "mb-5 mt-4"> Balance is ${Number.parseFloat(currentBal).toFixed(2)}</h2>
            <form className="justify-content-center" onSubmit={validateForm}>
              <div class="form-group col-12 col-md-3 mb-2 d-inline-block">
                <label for="inputAmount" className="sr-only">Enter the amount to withdraw</label>
                <input id="inputAmount" name="inputAmount" className={`${isEnabled ? '' : 'is-invalid'} form-control col-12`} type="text" placeholder="Enter the amount to withdraw" onChange={validateInput} value={withdrawalAmt} />
                <small className={isEnabled ? "d-none" : "invalid-feedback"}>
                    Amount must be greater than 0 and in multiples of 20.
                </small>
              </div>
              
              <input className="col-11 col-md-2 btn btn-primary mb-2 align-top" disabled={!isEnabled} type="submit" value="Withdraw" />
            </form>
        </>
      );
}
export default Withdrawal;