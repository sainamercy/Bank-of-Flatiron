import React, {useEffect, useState}from "react";
import Transaction from "./Transaction";

function Transactions(){
 const [transactions, setTransactions] = useState([])

 useEffect(
    ()=>{
        fetch("http://localhost:8001/transactions")
    .then(res=>res.json())
    .then(data=>{
        setTransactions(data)
        console.log(data)})
    }, [])
return <div>
    <table>
        <tr>
            <th>Transaction</th>
            <th>Category</th>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
        </tr>
    {transactions.map(transaction=><Transaction key={transaction.id} description={transaction.description} date={transaction.date} amount={transaction.amount} category={transaction.category}/>)}
    </table>
</div>



}

export default Transactions