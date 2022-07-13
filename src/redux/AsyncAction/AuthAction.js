// import axios from "axios";
import axiosIntance from "../../helpers/axiosIntance";
import { authConstants } from "../constants"

export const registerUser = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.SIGNUP_REQUEST });
            const res = await axiosIntance.post('/user/register', data);
            console.log(res);

            if (res.status === 200) {
                await localStorage.setItem('token', res.data.token);

                dispatch({ type: authConstants.SIGNUP_SUCCESS, payload: res.data.data, token: res.data.token });

                console.log(res.data);
                localStorage.setItem('user', JSON.stringify(res.data.data));
            }

            if (res.status === 500) {
                dispatch({ type: authConstants.SIGNUP_FAILURE });
            }
        } catch (error) { console.log(error) }
    }
}


export const loginUser = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.LOGIN_REQUEST });
            const res = await axiosIntance.post('/user/login', data);
            console.log(res);

            if (res.status === 200) {
                await localStorage.setItem('token', res.data.token);
                dispatch({ type: authConstants.LOGIN_SUCCESS, payload: res.data.user, token: res.data.token });
            }

            if (res.status === 500) {
                dispatch({ type: authConstants.LOGOUT_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}

