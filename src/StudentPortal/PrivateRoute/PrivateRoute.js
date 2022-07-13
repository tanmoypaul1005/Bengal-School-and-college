import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {

    const student = useSelector((state) => state.student.student);
    console.log(student);

    let location = useLocation();
    if (localStorage.getItem('student')) {
        return children;
    }
    return <Navigate to="/student/login" state={{ from: location }} />;
};

export default PrivateRoute;