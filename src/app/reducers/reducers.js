import { combineReducers } from 'redux'
import StudentReducer from '../../modules/student/store/reducer'
import LoginReducer from '../../modules/login/reducer'
import AssignmentReducer from '../../modules/assignment/reducer'
import DailyReportReducer from '../../modules/dailyreport/reducer'
export const rootReducer = combineReducers({
    StudentReducer:StudentReducer,
    LoginReducer:LoginReducer,
    AssignmentReducer: AssignmentReducer,
    DailyReportReducer:DailyReportReducer
})