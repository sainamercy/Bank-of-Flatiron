import React from "react";

function Transaction({ date, description, category, amount }) {
  // converting amount to integer
  const amountInt = parseInt(amount);
  return (
    <tr>
      <td className="border border-slate-300 p-2">
        {amountInt < 0 ? "Withdrawal" : "Deposit"}
      </td>
      <td className="border border-slate-300">{category}</td>
      <td className="border border-slate-300">{date}</td>
      <td className="border border-slate-300">{description}</td>
      <td className="border border-slate-300">{Math.abs(amountInt)}</td>
    </tr>
  );
}
export default Transaction;
