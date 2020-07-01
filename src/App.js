import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import axios from "axios";
import Withdrawal from "./components/Withdrawal";
import RecentTransactions from "./components/RecentTransactions";

function App() {

  const dispatch = useDispatch();

  function getTransactions() {
    return dispatch => {
      axios.get("https://app.fakejson.com/q/0Pm3bJKu?token=HbqwPS-BSqOehLpig2ePqg")
      .then(res =>{
          dispatch({
            type: "UPDATE_TRANSACTIONS",
            payload: res.data.transactions
          })
      });
    };
  }

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  return (
    <div className="App text-center">
      <Withdrawal />
      <RecentTransactions />  
    </div>
  );
}

export default App;
