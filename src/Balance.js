import React from "react";

function Balance({ transactions }) {
  const movs = [];
  transactions.map((transaction) => movs.push(parseInt(transaction.amount)));
  const balance = movs.reduce((acc, mov) => acc + mov, 0);
  return (
    <div className="flex justify-between mb-4 text-3xl">
      <h4>Current Balance</h4>
      <p>Ksh. {balance}</p>
    </div>
  );
}
export default Balance;
