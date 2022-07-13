import React, { useEffect, useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentCourse, getStudentCourse } from '../../redux/AsyncAction/SubjectAction';
import './PortalHomePage.css';
import { FiPlus } from "react-icons/fi";

const PortalHomePage = () => {
    const dispatch = useDispatch();


    const student = useSelector((state) => state.student.student);
    console.log(student);
    const id = student._id;


    const subject = useSelector((state) => state.subject);
    console.log("subject", subject);

    const [show, setShow] = useState(false);

    const handleClose = (e) => {
        setShow(false);
    }

    const handleShow = () => setShow(true);

    const [state, setstate] = useState({
        enrolcode: ''
    });

    const handleInputs = (e) => {
        setstate({ ...state, [e.target.name]: e.target.value })
    }
    const addcourse = (e) => {
        e.preventDefault();
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(state)
        dispatch(addStudentCourse({ state, student_id: id }));
        setShow(false);
    }

    useEffect(() => {
        dispatch(getStudentCourse(student._id));
    }, [dispatch])

    return (
        <div>
            <div style={{ textAlign: 'center', height: '20rem', backgroundColor: '#28D6C7 ', padding: '30px' }}>
                <h1> Welcome Your Student Portal</h1>
                <h5 style={{ padding: '5px' }}>Name:{student.name}</h5>
                <h5 style={{ padding: '5px' }}>ID:{student.student_id}</h5>
                <h5 style={{ padding: '5x' }}>Email:{student.email}</h5>
                <h5 style={{ padding: '5px' }}>Contact Number:{student.contactNumber}</h5>
            </div>


            <>
                <button onClick={handleShow} style={{ margin: '1rem', width: '220px', height: '50px' }} className="glow-on-hover" type="button"> <FiPlus /> Add Course</button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Course</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <h3 style={{ margin: '1rem' }}>Please Enter Your Enrollment code</h3>

                        <form onSubmit={addcourse}>
                            <input
                                id="input"
                                type="text"
                                value={state.enrolcode}
                                onChange={handleInputs} name="enrolcode"
                                placeholder="Enrol code"
                            />
                        </form>

                    </Modal.Body>
                    <Modal.Footer>
                        <button style={{ width: '5rem', heigth: '10px', fontSize: '15px' }} className="glow-on-hover" variant="secondary" onClick={handleClose}>
                            Close
                        </button>

                        <button style={{ width: '9rem', heigth: '1rem', fontSize: '15px' }} className="glow-on-hover" variant="primary" onClick={submit}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>
            </>





            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Subject Name</th>
                        <th>Section</th>
                        <th>Time</th>
                        <th>Teacher Name</th>
                        <th>Room No</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        subject.course.map((item, index) => (
                            <tr>
                                <td>1</td>
                                <td>{item.name}</td>
                                <td>{item.sec}</td>
                                <td>{item.time}</td>
                                <td>{item.teacher}</td>
                                <td>610</td>

                            </tr>
                        ))
                    }


                </tbody>
            </Table>


        </div>
    );
};

export default PortalHomePage;