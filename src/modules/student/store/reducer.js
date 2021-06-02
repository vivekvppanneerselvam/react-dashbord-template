import { fromJS } from 'immutable'
let initialState = fromJS({});
function StudentReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_STANDARD_LOADING':
            return state.setIn(['standard', 'loading'], fromJS(action.loading))
        case 'FETCH_STANDARD':
            return state.setIn(['standard', 'data'], fromJS(action.data))
                .setIn(['standard', 'loading'], fromJS(action.loading))
        case 'FETCH_STANDARD_ERROR':
            return state.setIn(['standard', 'data'], fromJS(action.data))
                .setIn(['standard', 'loading'], fromJS(action.loading))

        case 'FETCH_BATCH_LOADING':
            return state.setIn(['batch', 'loading'], fromJS(action.loading))
        case 'FETCH_BATCH':
            return state.setIn(['batch', 'data'], fromJS(action.data))
                .setIn(['batch', 'loading'], fromJS(action.loading))
        case 'FETCH_BATCH_ERROR':
            return state.setIn(['batch', 'data'], fromJS(action.data))
                .setIn(['batch', 'loading'], fromJS(action.loading))

        case 'FETCH_SECTION_LOADING':
            return state.setIn(['section', 'loading'], fromJS(action.loading))
        case 'FETCH_SECTION':
            return state.setIn(['section', 'data'], fromJS(action.data))
                .setIn(['section', 'loading'], fromJS(action.loading))
        case 'FETCH_SECTION_ERROR':
            return state.setIn(['section', 'data'], fromJS(action.data))
                .setIn(['section', 'loading'], fromJS(action.loading))

        case 'FETCH_EXAM_LOADING':
            return state.setIn(['exam', 'loading'], fromJS(action.loading))
        case 'FETCH_EXAM':
            return state.setIn(['exam', 'data'], fromJS(action.data))
                .setIn(['exam', 'loading'], fromJS(action.loading))
        case 'FETCH_EXAM_ERROR':
            return state.setIn(['exam', 'data'], fromJS(action.data))
                .setIn(['exam', 'loading'], fromJS(action.loading))

        case 'FETCH_STUDENT_MARKS_LOADING':
            return state.setIn(['student_marks', 'loading'], fromJS(action.loading))
        case 'FETCH_STUDENT_MARKS':
            return state.setIn(['student_marks', 'data'], fromJS(action.data))
                .setIn(['student_marks', 'loading'], fromJS(action.loading))
        case 'FETCH_STUDENT_MARKS_ERROR':
            return state.setIn(['student_marks', 'data'], fromJS(action.data))
                .setIn(['student_marks', 'loading'], fromJS(action.loading))

        case 'SECTION_FILTER_LOADING':
            return state.setIn(['section_filter', 'loading'], fromJS(action.loading))
        case 'SECTION_FILTER':
            return state.setIn(['section_filter', 'data'], fromJS(action.data))
                .setIn(['section_filter', 'loading'], fromJS(action.loading))
        case 'SECTION_FILTER_ERROR':
            return state.setIn(['section_filter', 'data'], fromJS(action.data))
                .setIn(['section_filter', 'loading'], fromJS(action.loading))

        case 'EXAM_FILTER_LOADING':
            return state.setIn(['exam_filter', 'loading'], fromJS(action.loading))
        case 'EXAM_FILTER':
            return state.setIn(['exam_filter', 'data'], fromJS(action.data))
                .setIn(['exam_filter', 'loading'], fromJS(action.loading))
        case 'EXAM_FILTER_ERROR':
            return state.setIn(['exam_filter', 'data'], fromJS(action.data))
                .setIn(['exam_filter', 'loading'], fromJS(action.loading))

        default:
            return state
    }
}

export default StudentReducer