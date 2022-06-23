import { useState } from "react"

export const useCounter = ( initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)

    const onIncrement = () => {setCounter( counter + 1 )}
    const onDecrement = () => {setCounter( counter - 1)}
    const onReset = () => {setCounter( initialValue )}

    return {
        counter,
        onIncrement,
        onDecrement,
        onReset,
    }
}