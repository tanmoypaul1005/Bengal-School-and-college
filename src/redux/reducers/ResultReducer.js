import { ResultConstants } from "../constants";

const initStated = {
 result:{}
}

export default (state = initStated, action) => {
    switch (action.type) {

        case ResultConstants.GET_RESULT_REQUEST:
            state = { ...state }
            break;

        case ResultConstants.GET_RESULT_SUCCESS:
            state = { ...state,result:action.paylode}
            break;

        case ResultConstants.GET_RESULT_FAILURE:
            state = { ...state }
            break;
    }
    return state;
}