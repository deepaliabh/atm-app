import React from "react";
import {useSelector} from "react-redux";

function RecentTransactions(){
    const transactionList = useSelector(state => state.transactions);
    const listProducts = transactionList.map((transaction,index) =>
            <tr key={index} class="row m-0">
            <td className="col-9">{transaction.name}</td>
            <td className="col-3">$ {transaction.amount}</td></tr>
      );
    
    return (
        <>
        <h2 className = "mt-5 mb-3"> Recent transactions</h2>
        <table className="table table-striped table-bordered col-6 container">
            <thead>
                <tr className="row m-0">
                    <th className="col-9">Description</th>
                    <th className="col-3">Amount</th>
                </tr>
            </thead>
            <tbody>
                {listProducts}
            </tbody>
        </table>
        </>
    );
}
export default RecentTransactions;