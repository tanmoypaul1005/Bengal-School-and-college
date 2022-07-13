import axiosIntance from "../../helpers/axiosIntance";
import { ResultConstants } from "../constants";

export const getResult = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type:ResultConstants.GET_RESULT_REQUEST });
            const res = await axiosIntance.post('/student/result/get', data);
            console.log(res);

            if (res.status === 200) {

                dispatch({ type:ResultConstants.GET_RESULT_SUCCESS,paylode:res.data.data});
            }
            if (res.status === 500) {
                dispatch({ type:ResultConstants.GET_RESULT_FAILURE });
            }

        } catch (error) { console.log(error) }
    }
}