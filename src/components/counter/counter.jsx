import { useState } from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(0)
    
    function handleInc() {
        setCount(count+1)
    }

    return(
        <div id="counter-component">
            <div className="display-counter">{count}</div>
            <div className="counter-btns-container">
                <button onClick={handleInc}>+</button>
                <button>-</button>
            </div>
        </div>
    )
}

export default Counter;