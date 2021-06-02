import { Map, fromJS } from 'immutable'
const initialState = fromJS({})
export default function DailyReportReducer(state = Map(initialState), action) {
    switch (action.type) {
        case 'DAILY_REPORT_LOADING':
            return state.setIn(['daily_report', 'loading'], fromJS(action.loading))
        case 'DAILY_REPORT_SUCCESS':
            return state.setIn(['daily_report', 'data'], fromJS(action.data))
            .setIn(['daily_report', 'loading'], fromJS(action.loading))
        case 'DAILY_REPORT_FAILURE':
            return state.setIn(['daily_report', 'data'], fromJS(action.data))
            .setIn(['daily_report', 'loading'], fromJS(action.loading))
        default:
            return state
    }

}