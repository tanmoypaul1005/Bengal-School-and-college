import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getTeacher } from '../../redux/AsyncAction/TeacherAction';
import './Department.css';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const Department = () => {
    const dispatch = useDispatch();
    const teacher = useSelector((state) => state.teacher.teacher);
    console.log(teacher);


    useEffect(() => {
        dispatch(getTeacher())
    }, [dispatch]);

    return (
        <div >
            <div className="department">
                <span><NavLink className="deparmentName" to="English"> <BsFillArrowRightCircleFill />English</NavLink></span><br></br>

                <span><NavLink className="deparmentName" to="Ict"> <BsFillArrowRightCircleFill />Ict</NavLink></span><br></br>

                <span><NavLink className="deparmentName" to="Math"> <BsFillArrowRightCircleFill /> Mathematic</NavLink><br></br></span>
                <span> <NavLink className="deparmentName" to="Bangla"> <BsFillArrowRightCircleFill />Bangla</NavLink><br></br></span>
                <span><NavLink className="deparmentName" to="Science"> <BsFillArrowRightCircleFill />General Science</NavLink><br></br></span>
            </div>

        </div>
    );
};

export default Department;