import React, { useState } from "react";

function NewTransaction({formData, onValueChange, onSubmitForm}){
    const [transactionType, setTransactionType] = useState("")
    function handleOption(e){
        
        setTransactionType(e.target.value)   
    }
   
    console.log(formData);
    return <form onSubmit={onSubmitForm} className="bg-yellow-400 p-4 rounded-lg mb-2">
            <select onChange={handleOption} value={transactionType} className="p-2 mr-2 rounded-lg">
                <option>Select Transaction Type</option>
                <option value="Deposit">Deposit</option>
                <option value="Withdrawal">Withdrawal</option>
            </select>
            <input className="p-2 mr-2 rounded-lg" onChange={onValueChange} type="text" name="category" placeholder="enter category" value={formData.category}></input>
            <input className="p-2 mr-2 rounded-lg" onChange={onValueChange}  type="date" name="date" value={formData.date}></input>
            <input className="p-2 mr-2 rounded-lg" onChange={onValueChange}  type="text" name="description" placeholder="enter description" value={formData.description}></input>
            <input className="p-2 mr-2 rounded-lg" onChange={onValueChange} type="number" name="amount" value={transactionType === "Withdrawal" ? -formData.amount : formData.amount}></input>
            <button className="p-2 mr-2 bg-red-200 rounded-lg" type="submit">Add new transaction</button>
    </form>
}
export default NewTransaction