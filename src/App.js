import React, { useState, useEffect } from "react";
import Transactions from "./Transactions";
import NewTransaction from "./NewTransaction";
import Search from "./Search";

function App() {
  // initilizing state variables
  const [allTransactions, setAllTransactions] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  // getting data from API
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63c54c2315ab31599e37f5f3")
      .then((res) => res.json())
      .then((data) => {
        setAllTransactions(data.record.transactions);
        setTransactions(data.record.transactions);
      });
  }, []);

  // search feature
  function handleSearch(value) {
    const updateTransactions = allTransactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(value)
    );
    setTransactions(updateTransactions);
  }

  // handling new transaction form input values
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // handling submit of new transaction form
  function handleSubmit(transactionType) {
    // setting withdrawals input amount to a negative number
    if (transactionType === "Withdrawal") {
      formData.amount = -parseInt(formData.amount);
    }

    // setting unique id for new transactions
    formData.id = transactions.length + 1;

    setTransactions([formData, ...transactions]);

    //  clearing form input fields
    setFormData({
      id: "",
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  }
  //  returning the JSX
  return (
    <div className="w-screen bg-gray-100 flex text-lg flex-col items-center justify-center">
      <div className="w-full flex items-center justify-evenly p-6 bg-teal-300 mb-4">
        <h1 className="text-4xl text-slate-600 font-bold">
          The Bank of Flatiron
        </h1>
        <Search onFormSubmit={handleSearch} />
      </div>
      <NewTransaction
        onValueChange={handleChange}
        formData={formData}
        onSubmitForm={handleSubmit}
      />
      <Transactions transactions={transactions} />
    </div>
  );
}

export default App;
