import { StudentConstants } from "../constants";
import axiosIntance from "../../helpers/axiosIntance";

export const AddStudent = (data, id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstants.STUDENT_SIGNUP_REQUEST });
            const res = await axiosIntance.post('/student/add', data);
            console.log(res);

            if (res.status === 200) {
                // localStorage.setItem('token', res.data.token);
                localStorage.setItem('student', JSON.stringify(res.data.data));
                dispatch({ type: StudentConstants.STUDENT_SIGNUP_SUCCESS, paylode: res.data.massage, token: res.data.token, student: res.data.data });

            }

            if (res.status === 500) {
                dispatch({ type: StudentConstants.STUDENT_SIGNUP_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}


export const StudentLogin = (data) => {
    console.log("Data", data)
    return async (dispatch) => {
        try {
            dispatch({ type: StudentConstants.STUDENT_LOGIN_REQUEST });
            const res = await axiosIntance.post('/student/login', data);
            console.log(res);

            if (res.status === 200) {
                dispatch({ type: StudentConstants.STUDENT_LOGIN_SUCCESS });
            }

            if (res.status === 500) {
                dispatch({ type: StudentConstants.STUDENT_LOGIN_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}