import { useState } from "react"

export default function Count() {

    const [ count , setCount ] = useState(0)

    function handleConsole(){
        setCount(count + 1)
    }
    function handleMenosUm(){
        setCount(count-1)
    }

    function resetCount() {
        setCount(0)
    }

    return (
    <div className="">
        <h1>Count: {count}</h1>
        <button onClick={handleConsole}>+</button>
        <button onClick={handleMenosUm}>-</button>
        <button onClick={resetCount}>reset</button>
    </div>
    )
}