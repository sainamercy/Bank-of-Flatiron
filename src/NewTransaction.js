import React, { useState } from "react";

function NewTransaction({ formData, onValueChange, onSubmitForm }) {
  // initializing state
  const [transactionType, setTransactionType] = useState("");

  // handle change of options
  function handleOption(e) {
    setTransactionType(e.target.value);
  }

  // handling form submit
  function submit(e) {
    e.preventDefault();

    onSubmitForm(transactionType);
  }
  return (
    <form onSubmit={submit} className="bg-yellow-400 p-4 rounded-lg mb-2">
      <select
        onChange={handleOption}
        value={transactionType}
        className="p-2 mr-2 rounded-lg"
      >
        <option>Select Transaction Type</option>
        <option value="Deposit">Deposit</option>
        <option value="Withdrawal">Withdrawal</option>
      </select>
      <input
        className="p-2 mr-2 rounded-lg"
        onChange={onValueChange}
        type="text"
        name="category"
        placeholder="enter category"
        value={formData.category}
      ></input>
      <input
        className="p-2 mr-2 rounded-lg"
        onChange={onValueChange}
        type="date"
        name="date"
        value={formData.date}
      ></input>
      <input
        className="p-2 mr-2 rounded-lg"
        onChange={onValueChange}
        type="text"
        name="description"
        placeholder="enter description"
        value={formData.description}
      ></input>
      <label>
        <span className="text-zinc-500">Enter Amount:</span>
        <input
          className="p-2 mr-2 rounded-lg"
          onChange={onValueChange}
          type="number"
          name="amount"
          value={formData.amount}
        ></input>
      </label>
      <button className="p-2 mr-2 bg-red-200 rounded-lg" type="submit">
        Add new transaction
      </button>
    </form>
  );
}
export default NewTransaction;
