import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getClassLecture } from '../../redux/AsyncAction/SubjectAction';
import './ClassLecture.css';

import { IoPersonCircleSharp } from "react-icons/io5";
const ClassLecture = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const subject = useSelector((state) => state.subject.ClassLecture);
    console.log(subject)
    useEffect(() => {
        dispatch(getClassLecture(id));
    }, [dispatch]);
    return (
        <div>
            <div className="ClassLectureHeader">
                <div style={{ padding: '5rem' }}>
                    <h2 className="bodytext">Subject Name : {subject.name}</h2>
                    <h2 className="bodytext">Class Five</h2>
                    <h2 className="bodytext">Section : {subject.sec}</h2>
                </div>
            </div>


            <div className="Aopndd">
                <span className="name"><IoPersonCircleSharp style={{ width: '2rem', }} />{subject.teacher}</span>
                <span style={{ paddingLeft: '1.8rem' }}>Jan 15, 2020</span><br></br>
                <h6 style={{ paddingTop: '3rem' }}>TOPIC: Association Rules & Apriori Algo Maths on </h6>
                <p>This is about today's class. Here is a text file which contains java code.</p>

                <div>
                    <div className="comment">
                        <form>
                            <div className="form-group">
                                <textarea class="form-control status-box" rows="2" placeholder="Enter your comment here..."></textarea>
                            </div>
                            <input style={{ width: '8rem', height: '2.7rem', margin: '1rem 0rem 0rem 0rem', backgroundColor: " coral" }} type="submit" value="submit"></input>
                        </form>
                    </div>
                </div>

            </div>



            <div className="Aopndd">
                <span className="name"><IoPersonCircleSharp style={{ width: '2rem', }} />{subject.teacher}</span>
                <span style={{ paddingLeft: '1.8rem' }}>Jan 15, 2020</span><br></br>
                <h6 style={{ paddingTop: '3rem' }}>TOPIC: Association Rules & Apriori Algo Maths on </h6>
                <p>This is about today's class. Here is a text file which contains java code.</p>

                <div>
                    <div className="comment">
                        <form>
                            <div className="form-group">
                                <textarea class="form-control status-box" rows="1" placeholder="Enter your comment here..."></textarea>
                            </div>
                            <input style={{ width: '8rem', height: '2.7rem', margin: '1rem 0rem 0rem 0rem', backgroundColor: " coral" }} type="submit" value="submit"></input>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClassLecture;