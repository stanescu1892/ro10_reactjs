import { useState } from "react";
import "./form.css";

const Form = (props) => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [school, setSchool] = useState();
    const [error, setError] = useState();

    const handleSubmit = () => {

    }

    const handleName = (e) => {
        console.log(e.target.name)
        setName(e.target.value);
    }

    const handleAge = (e) => {
        const reg = /^[0-9]+$/gm
        const value = e.target.value;
        
        if(!reg.test(value)){
            setError("Only digits allowed")
        } else {
            setError(null)
            setAge(value);
        }
    }

    const handleSchool = (e) => {
        setSchool(e.target.value);
    }

    console.log(name, age, school);

    return (
        <>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-input-container">
                    <label>Name</label>
                    <input type="text" onChange={handleName} name="name" value={name}/>
                    
                </div>
                <div className="form-input-container">
                    <label>Age</label>
                    <input type="number" onChange={handleAge} value={age}/>
                    {error && <div style={{color: 'red'}}>{error}</div>}
                </div>
                <div className="form-input-container">
                    <label>School</label>
                    <input type="text" onChange={handleSchool} value={school}/>
                </div>
                <button type="submit" className="form-submit-button">Submit</button>
            </form>
        </>
    )
}

export default Form;