import React, { useState, useEffect } from 'react';
import Transactions from './Transactions';
import NewTransaction from './NewTransaction';
import Search from './Search';

function App() {
  const [allTransactions, setAllTransactions] = useState([])
const [transactions, setTransactions] = useState([]);
const [formData, setFormData] = useState({date: "", description: "", category: "", amount: ""})
useEffect(() => {
  fetch("https://api.jsonbin.io/v3/b/63c54c2315ab31599e37f5f3")
    .then((res) => res.json())
    .then((data) => {
      setAllTransactions(data.record.transactions)
      setTransactions(data.record.transactions);
    });
}, []);

function handleSearch(value){
  const updateTransactions = allTransactions.filter(transaction=>transaction.description.toLowerCase().includes(value))
  setTransactions(updateTransactions)
}

function handleChange(e){
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
}
function handleSubmit(e){
  e.preventDefault()
   setTransactions([
    formData,
    ...transactions
   ])
   setFormData({date: "", description: "", category: "", amount: ""})
}



  return (<div className='w-screen bg-gray-100 flex text-lg flex-col items-center justify-center'>
    <div className='w-full flex items-center justify-evenly p-6 bg-teal-300 mb-4'>
      <h1 className='text-4xl text-slate-600 font-bold'>The Bank of Flatiron</h1>
      <Search onFormSubmit={handleSearch}/>
    </div>
  <NewTransaction onValueChange={handleChange} formData={formData} onSubmitForm={handleSubmit}/>
  <Transactions transactions={transactions}/>
  </div>);
}

export default App;
