import React from "react";
import './App.css';

function Transaction({date, description, category, amount}){
    const amountNum = parseInt(amount)
    return <tr className="transactionList">
            <td>{amountNum<0 ? "Withdrawals" : "Deposit"}</td>
            <td>{category}</td>
            <td>{date}</td>
            <td>{description}</td>
            <td>{Math.abs(amountNum)}</td>
        </tr>

}
export default Transaction