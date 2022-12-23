import {React} from 'react';

import "./Input.css"

const Input = (props) => {
    const {handleSubmit, onChange} = props;
    return (
    <>
        <div className="searchbox-wrap">
            <input type="text" placeholder="Search for something..." onChange={onChange}/>
            <button onClick={handleSubmit}>
                <span>Send</span> 
            </button>
        </div>
    </>
    )
}

export default Input;