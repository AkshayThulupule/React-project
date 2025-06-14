import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const [inputValue, setInputValue] = useState('')

    return (
        <>
        <button onClick = {() => setCounter(counter+1)}>Increment</button>
        <button onClick = {() => setCounter(counter-1)}>Decrement</button>
        <input onChange = {(e)=> setInputValue(e.target.value)}/>
        <div>{counter}</div>
        <div>{inputValue}</div>
        test
        </>
    )
}

export default Counter