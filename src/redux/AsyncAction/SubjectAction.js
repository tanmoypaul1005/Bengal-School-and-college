import axiosIntance from "../../helpers/axiosIntance";
import { AddStudentCourseConstants, ClassLectureConstants } from "../constants";

export const addStudentCourse = (data, id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: AddStudentCourseConstants.ADD_COURSE_REQUEST });
            const res = await axiosIntance.post('/subject/student/add', { data });
            console.log("ggg", res);

            if (res.status === 200) {
                dispatch({ type: AddStudentCourseConstants.ADD_COURSE_SUCCESS });
            }

            if (res.status === 500) {
                dispatch({ type: AddStudentCourseConstants.ADD_COURSE_FAILURE });
            }
        } catch (error) { console.log(error) }
    }
}



export const getStudentCourse = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: AddStudentCourseConstants.GET_COURSE_REQUEST });
            const res = await axiosIntance.post('/get/subject/student', { id });
            console.log(res);


            if (res.status === 200) {
                dispatch({ type: AddStudentCourseConstants.GET_COURSE_SUCCESS, paylode: res.data.data });
            }

            if (res.status === 500) {
                dispatch({ type: AddStudentCourseConstants.GET_COURSE_FAILURE });
            }
        } catch (error) { console.log(error) }
    }
}



export const getClassLecture = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: ClassLectureConstants.GET_CLASSLECTURE_REQUEST });
            const res = await axiosIntance.post(`/student/classlecture/${id}`);
            console.log(res);


            if (res.status === 200) {
                dispatch({ type: ClassLectureConstants.GET_CLASSLECTURE_SUCCESS, paylode: res.data.data });
            }

            if (res.status === 500) {
                dispatch({ type: ClassLectureConstants.GET_CLASSLECTURE_FAILURE });
            }
        } catch (error) { console.log(error) }
    }
}