import React, {useState} from 'react'
import useCounter from './useCounter';
const CustomStatehook  =  () => {
const {increment, decrement, count} = useCounter()




    return (
        <div>
            <p>{count}</p>
<button onClick={increment}>increment</button>
<button onClick={decrement}>increment</button>

        </div>
    )
}

export default CustomStatehook