import { useState, useRef } from "react";

const FormRef = (props) => {

    const handleSubmit = () => {

    }


    return (
        <>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-input-container">
                    <label>*Name</label>
                    <input type="text" />
                    
                </div>
                <div className="form-input-container">
                    <label>*Age</label>
                    <input type="number" />
                </div>
                <div className="form-input-container">
                    <label>*School</label>
                    <input type="text" />
                </div>
                <button type="submit" className="form-submit-button">Submit</button>
            </form>
        </>
    )
}

export default FormRef;