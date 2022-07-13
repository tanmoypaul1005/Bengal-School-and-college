import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getDepartmentTeacher } from '../../redux/AsyncAction/TeacherAction';
import Loader from '../Loader/Loader';

import './Teachers.css'
const Teachers = () => {
    const dispatch = useDispatch();
    const teacher = useSelector((state) => state.teacher.DepartmentTeacher);
    console.log(teacher);

    const { department } = useParams();
    // console.log("department ", department);
    useEffect(() => {
        dispatch(getDepartmentTeacher(department))
    }, [dispatch])

    return (
        <div>
            <div className="AllTeacher">
                <h2 style={{ textAlign: 'center' }}>Our Teachers</h2>

                <div className="teacher" >
                    {teacher.length > 0 ? (
                        teacher.map((item, index) => (
                            <NavLink to={`${item._id}`}>
                                <div class="card">
                                    <img src={item.profilePicture} alt="John" style={{ width: "100%", height: '10rem' }}></img>
                                    <h6 style={{ marginTop: '0.8rem', fontSize: '1rem' }}>{item.name}</h6>
                                    <p style={{ fontSize: '0.8rem' }} class="title">{item.position}</p>
                                    <p style={{ padding: '0rem', margin: '0' }} >{item.bachelorDegree}</p>
                                    <p><button>Contact</button></p>
                                </div>
                            </NavLink>
                        ))
                    ) : <Loader />}
                </div>

            </div>
        </div >
    );
};

export default Teachers;