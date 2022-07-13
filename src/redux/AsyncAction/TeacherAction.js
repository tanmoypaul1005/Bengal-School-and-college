import axiosIntance from "../../helpers/axiosIntance";
import { TeacherConstants } from "../constants"

export const getTeacher = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: TeacherConstants.GET_TEACHER_REQUEST });
            const res = await axiosIntance.get('/teacher');
            console.log(res);

            if (res.status === 200) {
                dispatch({ type: TeacherConstants.GET_TEACHER_SUCCESS, payload: res.data.teacher });
            }

            if (res.status === 500) {
                dispatch({ type: TeacherConstants.GET_TEACHER_FAILURE });
            }
        } catch (error) { console.log(error) }
    }
}


export const getDepartmentTeacher = (department) => {
    return async (dispatch) => {
        try {
            dispatch({ type: TeacherConstants.GET_DEPARMENT_TEACHER_REQUEST });
            const res = await axiosIntance.post(`/teacher/${department}`);
            console.log("jj", res);

            if (res.status === 200) {
                dispatch({ type: TeacherConstants.GET_DEPARMENT_TEACHER_SUCCESS, payload: res.data.data });
            }

            if (res.status === 500) {
                dispatch({ type: TeacherConstants.GET_DEPARMENT_TEACHER_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}


export const getTeacherDetail = (department, id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: TeacherConstants.GET_TEACHER_DETAIL_REQUEST });
            const res = await axiosIntance.post(`/teacher/${department}/${id}`);
            console.log(res);

            if (res.status === 200) {
                dispatch({ type: TeacherConstants.GET_TEACHER_DETAIL_SUCCESS, payload: res.data.data });
            }

            if (res.status === 500) {
                dispatch({ type: TeacherConstants.GET_TEACHER_DETAIL_FAILURE });
            }
        } catch (error) { console.log(error) }
    }
}