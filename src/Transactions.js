import React from "react";
import Transaction from "./Transaction";
import Balance from "./Balance";

function Transactions({transactions}) {
 
  
  return (
    <div className="w-3/4">
      <Balance transactions={transactions} />
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
