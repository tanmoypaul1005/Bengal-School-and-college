import { authConstants } from "../constants";

const initStated = {
    user: {},
    token: {},
}

export default (state = initStated, action) => {
    switch (action.type) {
        case authConstants.SIGNUP_REQUEST:
            state = { ...state }
            break;

        case authConstants.SIGNUP_SUCCESS:
            state = { ...state, user: action.payload, token: action.token }
            break;

        case authConstants.SIGNUP_FAILURE:
            state = { ...state }
            break;



        case authConstants.LOGIN_REQUEST:
            state = { ...state }
            break;

        case authConstants.LOGIN_SUCCESS:
            state = { ...state, user: action.payload, token: action.token }
            break;

        case authConstants.LOGIN_FAILURE:
            state = { ...state }
            break;



    }
    return state;
}