import { useState, useEffect, useRef } from 'react';
import './counter.css';

const Counter = (props) => {
    //const [count, setCount] = useState(0);
    const [onOff, setOnOff] = useState(false);

    const list = useRef([]);
    const count = useRef(0);

    function handleInc() {
        list.current.push("click");
        count.current++;
        console.log(count.current)
        //setCount((prev) => prev + 1)
    }

    function handleDec() {
        list.current.pop("click");
        //console.log(list)
        //setCount((prev) => prev - 1)
    }

    function handleCheckBox(e) {
        setOnOff(e.target.checked)
    }

    console.log(count.current);

    return(
        <div id="counter-component">
            <div className="display-counter">{count.current}</div>
            <div className="counter-btns-container">
                <button onClick={handleInc}>+</button>
                <button onClick={handleDec}>-</button>
            </div>
            <input style={{margin: '1rem'}} type="checkbox" onChange={handleCheckBox}/>
        </div>
    )
}

export default Counter;