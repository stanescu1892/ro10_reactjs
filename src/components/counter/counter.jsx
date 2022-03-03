import { useState, useEffect } from 'react';
import './counter.css';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    const [onOff, setOnOff] = useState(false);


    //dependencies array is empty => callback executes at component did mount
    useEffect(() => {
        console.log("component-did-mount")
    }, [])

    //dependencies array is missing => callback executes at every render
    useEffect(() => {
        console.log("component-rendered")
    })

    //dependencies array has values => callback executes when count is changed
    useEffect(() => {
        console.log("count-state-changed")
    }, [count])

    function handleInc() {
        setCount((prev) => prev + 1)
    }

    function handleDec() {
        setCount((prev) => prev - 1)
    }

    function handleCheckBox(e) {
        setOnOff(e.target.checked)
    }


    return(
        <div id="counter-component">
            <div className="display-counter">{count}</div>
            <div className="counter-btns-container">
                <button onClick={handleInc}>+</button>
                <button onClick={handleDec}>-</button>
            </div>
            <input style={{margin: '1rem'}} type="checkbox" onChange={handleCheckBox}/>
        </div>
    )
}

export default Counter;