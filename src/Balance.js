import React, {useState} from "react";

function Balance({transactions}){
    const [balance, setBalance] = useState(0);
    const [movements, setMovements] = useState([])
      
     function calcBal(){
      const movs = []
      transactions.map(transaction=>movs.push(parseInt(transaction.amount)))
      setMovements(movs)
      const updatedBalance = movements.reduce((acc, mov)=> acc+mov, 0)
      setBalance(updatedBalance)
     }
     
    
    return <div className="flex justify-between mb-4 text-3xl">
        <h4>Current Balance</h4>
        <p>Ksh. {balance}</p>
    </div>
}
export default Balance