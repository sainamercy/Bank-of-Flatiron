import React, { useState } from "react";
import Transaction from "./Transaction";
import Balance from "./Balance";

function Transactions({transactions}) {
  
  const [balance, setBalance] = useState(0);
//   const [movements, setMovements] = useState([])
  
//  function calcBal(){
//   const initMovements = []
//   transactions.map(transaction=>initMovements.push(parseInt(transaction.amount)))
//   setMovements(initMovements)
//   const updatedBalance = movements.reduce((acc, mov)=> acc+mov, 0)
//   setBalance(updatedBalance)
//  }
    
  
  
 
  
  return (
    <div className="w-3/4">
      <Balance balance={balance} />
      <table className="border-separate border-slate-400 w-full">
        <thead>
          <tr>
            <th className="border border-slate-300 p-6">Transaction</th>
            <th className="border border-slate-300">Category</th>
            <th className="border border-slate-300">Date</th>
            <th className="border border-slate-300">Description</th>
            <th className="border border-slate-300">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction
              key={transaction.id}
              description={transaction.description}
              date={transaction.date}
              amount={transaction.amount}
              category={transaction.category}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
