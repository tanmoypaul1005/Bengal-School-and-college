import { TeacherConstants } from "../constants";

const initStated = {
    teacher: {},
    DepartmentTeacher: {},
    teacherDetail: {},
}

export default (state = initStated, action) => {
    switch (action.type) {

        case TeacherConstants.GET_TEACHER_REQUEST:
            state = { ...state }
            break;

        case TeacherConstants.GET_TEACHER_SUCCESS:
            state = { ...state, teacher: action.payload }
            break;

        case TeacherConstants.GET_TEACHER_FAILURE:
            state = { ...state }
            break;




        case TeacherConstants.GET_DEPARMENT_TEACHER_REQUEST:
            state = { ...state }
            break;

        case TeacherConstants.GET_DEPARMENT_TEACHER_SUCCESS:
            state = { ...state, DepartmentTeacher: action.payload }
            break;

        case TeacherConstants.GET_DEPARMENT_TEACHER_FAILURE:
            state = { ...state }
            break;



        case TeacherConstants.GET_TEACHER_DETAIL_REQUEST:
            state = { ...state }
            break;

        case TeacherConstants.GET_TEACHER_DETAIL_SUCCESS:
            state = { ...state, teacherDetail: action.payload }
            break;

        case TeacherConstants.GET_TEACHER_DETAIL_FAILURE:
            state = { ...state }
            break;



    }
    return state;
}