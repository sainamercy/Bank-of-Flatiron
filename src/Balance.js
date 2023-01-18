import React from "react";

function Balance({ transactions }) {
  // initializing array of transactions amount
  const movs = [];
  // getting transactions amount
  transactions.map((transaction) => movs.push(parseInt(transaction.amount)));
  // calculating balance in the account
  const balance = movs.reduce((acc, mov) => acc + mov, 0);
  return (
    <div className="flex justify-between w-11/12 mb-4 text-3xl">
      <h4>Current Balance</h4>
      <p>Ksh. {balance}</p>
    </div>
  );
}
export default Balance;
