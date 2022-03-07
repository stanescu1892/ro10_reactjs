import { useState, useEffect, useRef, memo } from 'react';
import './counter.css';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [onOff, setOnOff] = useState(false);

    const oddNo = useRef([]);

    //component did mount
    useEffect(() => {
        console.log("Component did mount")
    }, [])

    //for every render
    useEffect(() => {
        console.log("every render")
    })

    //state dependency updated
    useEffect(() => {
        console.log("state dependency updated")
    }, [onOff])

    function handleInc() {
        if(count%2)oddNo.current.push(count);
        setCount((prev) => prev + 1)
    }

    function handleDec() {
        if(count%2)oddNo.current.push(count);
        setCount((prev) => prev - 1)
    }

    function handleCheckBox(e) {
        setOnOff(e.target.checked)
        console.log(oddNo)
    }

    console.log("counter-render");

    return (
        <div id="counter-component">
            <div className="display-counter">{count}</div>
            <div className="counter-btns-container">
                <button onClick={handleInc}>+</button>
                <button onClick={handleDec}>-</button>
            </div>
            <input style={{ margin: '1rem' }} type="checkbox" onChange={handleCheckBox} />
            {onOff && <div>{oddNo.current}</div>}
        </div>
    )
}

export default memo(Counter);