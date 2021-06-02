import { fromJS } from 'immutable'
let initialState = fromJS({});
function AssignmentReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_ASSIGNMENT_LOADING':
            return state.setIn(['assignment', 'loading'], fromJS(action.loading))
        case 'FETCH_ASSIGNMENT':
            return state.setIn(['assignment', 'data'], fromJS(action.data))
                .setIn(['assignment', 'loading'], fromJS(action.loading))
        case 'FETCH_ASSIGNMENT_ERROR':
            return state.setIn(['assignment', 'data'], fromJS(action.data))
                .setIn(['assignment', 'loading'], fromJS(action.loading))
        case 'FETCH_ASSIGNMENT_DOCS_LOADING':
            return state.setIn(['assignment_docs', 'loading'], fromJS(action.loading))
        case 'FETCH_ASSIGNMENT_DOCS':
            return state.setIn(['assignment_docs', 'data'], fromJS(action.data))
                .setIn(['assignment_docs', 'loading'], fromJS(action.loading))
        case 'FETCH_ASSIGNMENT_DOCS_ERROR':
            return state.setIn(['assignment_docs', 'data'], fromJS(action.data))
                .setIn(['assignment_docs', 'loading'], fromJS(action.loading))
        default:
            return state
    }
}
export default AssignmentReducer