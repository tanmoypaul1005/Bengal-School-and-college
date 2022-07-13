import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddStudent, StudentLogin } from '../../redux/AsyncAction/StudentAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Loginpage.css';
const Loginpage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const student = useSelector((state) => state.student);
    console.log("Auth", student)

    const notify = () => toast(student.massage);

    const [login, setLogin] = useState({
        email: '',
        password: '',
        student_id: ''
    });

    const [register, setRegister] = useState({
        name: '',
        email: '',
        password: '',
        student_id: '',
        className: '',
        contactNumber: '',
    });

    const handleInputsRegister = (e) => {
        setRegister({ ...register, [e.target.name]: e.target.value })
    }

    const StudentRegister = (e) => {
        e.preventDefault();
        // navigate('/student/portal');
        dispatch(AddStudent(register))
        console.log(register);

    }



    const handleInputsLogin = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    }

    const StudentLogIn = (e) => {
        e.preventDefault();
        dispatch(StudentLogin(login))
        console.log(login)
    }

    return (
        <div className="log">
            <div class="main">
                <input type="checkbox" id="chk" aria-hidden="true" />

                <div class="signup">
                    <form onSubmit={StudentRegister}>
                        <label for="chk" aria-hidden="true">Sign up</label>

                        <input
                            value={register.name}
                            onChange={handleInputsRegister}
                            type="text" name="name"
                            placeholder="Your Name"
                            required="" />

                        <input
                            value={register.student_id}
                            onChange={handleInputsRegister}
                            type="text"
                            name="student_id"
                            placeholder="Student ID"
                            required="" />


                        <input
                            value={register.email}
                            onChange={handleInputsRegister}
                            type="email"
                            name="email"
                            placeholder="Email"
                            required="" />

                        <input
                            value={register.password}
                            onChange={handleInputsRegister}
                            type="password"
                            name="password"
                            placeholder="Password"
                            required="" />

                        <input
                            value={register.contactNumber}
                            onChange={handleInputsRegister}
                            type="text" name="contactNumber"
                            placeholder="Contact Number"
                            required="" />

                        <input
                            value={register.className}
                            onChange={handleInputsRegister}
                            type="text"
                            name="className"
                            placeholder="ClassName"
                            required="" />

                        <input onClick={notify} type="submit" value="Register" className='loginbutton' ></input>
                    </form>
                </div>

                <div class="login">
                    <form onSubmit={StudentLogIn}>
                        <label for="chk" aria-hidden="true">Login</label>
                        <input value={login.student_id} onChange={handleInputsLogin} type="text" name="student_id" placeholder="Student ID" required="Student Id is Required" />
                        <input value={login.email} onChange={handleInputsLogin} type="email" name="email" placeholder="Email" />
                        <input value={login.password} onChange={handleInputsLogin} type="password" name="password" placeholder="Password" required="" />

                        <input type="submit" value="Login" className='loginbutton' ></input>
                    </form>
                </div>
            </div>
            <ToastContainer style={{ width: '500px' }} />
        </div>

    );
};

export default Loginpage;