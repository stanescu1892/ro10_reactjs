import React, { useState, useRef } from "react";

const FormRef = (props) => {

    const nameRef = useRef();
    const ageRef = useRef();
    const schoolRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const resObj = {
            name: nameRef.current.value,
            age: ageRef.current.value,
            school: schoolRef.current.value
        }
        console.log(nameRef)
    }

    console.log("formRef-render")

    return (
        <>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-input-container">
                    <label>*Name</label>
                    <input type="text" ref={nameRef}/>
                    
                </div>
                <div className="form-input-container">
                    <label>*Age</label>
                    <input type="number" ref={ageRef}/>
                </div>
                <div className="form-input-container">
                    <label>*School</label>
                    <input type="text" ref={schoolRef}/>
                </div>
                <button type="submit" className="form-submit-button">Submit</button>
            </form>
        </>
    )
}

export default React.memo(FormRef);