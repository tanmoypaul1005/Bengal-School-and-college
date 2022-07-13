import React from 'react';
import CountUp from 'react-countup';
import './StudentCountUp.css'
const StudentCountUp = () => {
    return (
        <div className="count">
            <div className="count-name">
                <h1><CountUp className="counttext" start={0} end={98000} delay={0}></CountUp></h1>
                <h6>Graduated Students</h6>
            </div>

            <div className="count-name">
                <h1><CountUp className="counttext" start={0} end={1500} delay={0}></CountUp></h1>
                <h6>Expert Instructors</h6>
            </div>

            <div className="count-name">
                <h1><CountUp className="counttext" start={0} end={14100} delay={0}></CountUp></h1>
                <h6>Books in our library</h6>
            </div>

            <div className="count-name">
                <h1><CountUp className="counttext" start={0} end={71000} delay={0}></CountUp></h1>
                <h5>Students Employed</h5>
            </div>
        </div>
    );
};

export default StudentCountUp;