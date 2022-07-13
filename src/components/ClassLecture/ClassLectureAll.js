import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudentCourse } from '../../redux/AsyncAction/SubjectAction';
import './ClassLectureAll.css'
import { IoChevronForwardOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const ClassLectureAll = () => {
    const dispatch = useDispatch();
    const student = useSelector((state) => state.student.student);
    console.log(student);
    const id = student._id;

    const subject = useSelector((state) => state.subject);
    console.log("subject", subject);


    useEffect(() => {
        dispatch(getStudentCourse(student._id));
    }, [dispatch])

    return (
        <div className="body">
            { subject.course.length>0?(
            subject.course.map((item, index) => (
                <NavLink to={`/student/classlecture/${item._id}`}>  <div className="courses-container">
                    <div className="course">
                        <div class="course-preview">
                            <h6 className="h6">Course</h6>
                            <p style={{ fontSize: '1.2rem', paddingTop: '0.5rem' }}>{item.name}</p>
                            <p style={{ fontSize: '1.2rem', paddingTop: '0.5rem' }}>Section:{item.sec}</p>
                            <a href="#" style={{ width: '6rem' }}><span>View all chapters</span></a>
                        </div>

                        <div className="course-info">
                            <span style={{ fontSize: '1.2rem' }}>Course Teacher:</span>
                            <p style={{ fontSize: '1.2rem', paddingTop: '0.5rem', paddingButtom: '0.5rem' }}>{item.teacher}</p>
                            <p style={{ fontSize: '1.2rem' }}>Assistant Professor </p>
                        </div>
                    </div>

                </div>
                </NavLink>
            ))
        ):<h2>Student No Course Enroll</h2>
    }



        </div>
    );
};

export default ClassLectureAll;