import { StudentConstants } from "../constants";

const initStated = {
    student: {},
    token: {},
    massage: {}
}


export default (state = initStated, action) => {
    switch (action.type) {
        //Student Singup
        case StudentConstants.STUDENT_SIGNUP_REQUEST:
            state = { ...state }
            break;

        case StudentConstants.STUDENT_SIGNUP_SUCCESS:
            state = { ...state, massage: action.paylode, token: action.token, student: action.student }
            break;

        case StudentConstants.STUDENT_SIGNUP_FAILURE:
            state = { ...state }
            break;



        //Student Login
        case StudentConstants.STUDENT_LOGIN_REQUEST:
            state = { ...state }
            break;

        case StudentConstants.STUDENT_LOGIN_SUCCESS:
            state = { ...state, massage: action.paylode }
            break;

        case StudentConstants.STUDENT_LOGIN_FAILURE:
            state = { ...state }
            break;

    }
    return state;
}
