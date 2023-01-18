import React, { useState } from "react";

function Search({onFormSubmit}){
    const [searchValue, setSearchValue] = useState("")
    function handleValueChange(e){
        setSearchValue(e.target.value)
    }
    function submit(e){
        e.preventDefault()
        onFormSubmit(searchValue)
    }
    return <form onSubmit={submit}>
        <input onChange={handleValueChange} value={searchValue} className="p-2" type="text" placeholder="search transaction"></input>
        <button className="p-2 bg-red-200" type="submit">Search</button>
    </form>
}
export default Search