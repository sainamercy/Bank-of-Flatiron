import React from "react";

function Balance({balance}){
    return <div className="flex justify-between mb-4 text-3xl">
        <h4>Current Balance</h4>
        <p>Ksh. {balance}</p>
    </div>
}
export default Balance