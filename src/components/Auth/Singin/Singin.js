import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/AsyncAction/AuthAction';

const Singin = () => {
    const dispatch = useDispatch();
    const [state, setstate] = useState({
        email: '',
        password: ''
    });

    const handleInputs = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const UserLogin = (e) => {
        e.preventDefault();
        console.log(state);
        dispatch(loginUser(state));
    }
    return (
        <div>
            <div style={{ width: '50rem', height: '30rem' }} id="feedback-form">
                <h2 class="header">Login</h2>
                <div>
                    <form onSubmit={UserLogin}>
                        <input type="email" value={state.email} onChange={handleInputs} name="email" placeholder="Email"></input>
                        <input type="password" value={state.password} onChange={handleInputs} name="password" placeholder="Password"></input>
                        <input type="text" id="feedback-phone" name="phone" placeholder="Phone number"></input>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Singin;