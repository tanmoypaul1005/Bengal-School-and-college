import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import ResultReducer from "./ResultReducer";
import StudentReducer from "./StudentReducer";
import SubjectReducer from "./SubjectReducer";
import TeacherReducer from "./TeacherReducer";

const reducer = combineReducers({
    auth: AuthReducer,
    teacher: TeacherReducer,
    student: StudentReducer,
    subject: SubjectReducer,
    result:ResultReducer
});
export default reducer;