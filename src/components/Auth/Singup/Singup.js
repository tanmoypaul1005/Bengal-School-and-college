import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/AsyncAction/AuthAction';
import { Form, Button, Container } from 'react-bootstrap';
import './Singup.css';

const Singup = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    console.log(auth);
    const [state, setstate] = useState({
        name: '',
        email: '',
        password: '',
        contactNumber: '',
    });

    const handleInputs = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }

    const UserRegister = (e) => {
        e.preventDefault();
        console.log(state);
        dispatch(registerUser(state));
    }

    return (
        <div>
            <div style={{ width: '50rem', height: '30rem' }} id="feedback-form">
                <h2 class="header">Register Today</h2>
                <div>
                    <form onSubmit={UserRegister}>
                        <input type="text" value={state.name} onChange={handleInputs} name="name" placeholder="Name"></input>
                        <input type="email" value={state.email} onChange={handleInputs} name="email" placeholder="Email"></input>
                        <input type="password" value={state.password} onChange={handleInputs} name="password" placeholder="Password"></input>
                        <input type="text" value={state.contactNumber} onChange={handleInputs} name="contactNumber" placeholder="Contact Number"></input>
                        <input type="text" name="currentaddress" placeholder="Current Address"></input>
                        <input type="text" name="presentaddress" placeholder="Present Address"></input>
                        {/* <input type="text" id="feedback-phone" name="phone" placeholder="Phone number"></input> */}
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singup;