import { AddStudentCourseConstants, ClassLectureConstants } from "../constants";

const initStated = {
    course: {},
    ClassLecture: {}
}


export default (state = initStated, action) => {
    switch (action.type) {

        case AddStudentCourseConstants.ADD_COURSE_REQUEST:
            state = { ...state }
            break;

        case AddStudentCourseConstants.ADD_COURSE_SUCCESS:
            state = { ...state }
            break;

        case AddStudentCourseConstants.ADD_COURSE_FAILURE:
            state = { ...state }
            break;




        //GET COURSE
        case AddStudentCourseConstants.GET_COURSE_REQUEST:
            state = { ...state }
            break;

        case AddStudentCourseConstants.GET_COURSE_SUCCESS:
            state = { ...state, course: action.paylode }
            break;

        case AddStudentCourseConstants.GET_COURSE_FAILURE:
            state = { ...state }
            break;


        //GET ClassLecture
        case ClassLectureConstants.GET_CLASSLECTURE_REQUEST:
            state = { ...state }
            break;

        case ClassLectureConstants.GET_CLASSLECTURE_SUCCESS:
            state = { ...state, ClassLecture: action.paylode }
            break;

        case ClassLectureConstants.GET_CLASSLECTURE_FAILURE:
            state = { ...state }
            break;

    }
    return state;
}