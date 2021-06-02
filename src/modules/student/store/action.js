import axios from 'axios'

export const fetchStandard = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_STANDARD_LOADING', data: '', loading: true })
        return axios.get('http://18.188.71.162:5001/exam/standard').then((res) => {
            dispatch({ type: 'FETCH_STANDARD', data: res.data.results, loading: false })
        }).catch((err) => {
            dispatch({ type: 'FETCH_STANDARD_ERROR', data: err.Error, loading: true })
        })
    }
}

export const fetchBatch = (obj) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_BATCH_LOADING', data: '', loading: true })
        return axios.get('http://18.188.71.162:5001/exam/batch?course_id=' + obj.standard).then((res) => {
            dispatch({ type: 'FETCH_BATCH', data: res.data.results, loading: false })
        }).catch((err) => {
            dispatch({ type: 'FETCH_BATCH_ERROR', data: err.Error, loading: true })
        })
    }
}

export const fetchSection = (obj) => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_SECTION_LOADING', data: '', loading: true })
        return axios.get('http://18.188.71.162:5001/exam/section?course_id=' + obj.standard + '&batch=' + obj.batch).then((res) => {
            dispatch({ type: 'FETCH_SECTION', data: res.data.results, loading: false })
        }).catch((err) => {
            dispatch({ type: 'FETCH_SECTION_ERROR', data: err.Error, loading: true })
        })
    }
}

export const fetchExam = (obj) => {
    let req = {
        course_id: obj.standard,
        batch_id: obj.batch,
        section_id: obj.section
    }
    //dispatch({ type: 'FETCH_EXAM_LOADING', data: '', loading: true })
    return (dispatch) => {
        dispatch({ type: 'FETCH_EXAM_LOADING', data: '', loading: true })
        return axios.post('http://18.188.71.162:5001/exam/exam_type',req).then((res) => {
            dispatch({ type: 'FETCH_EXAM', data: res.data.results, loading: false })
        }).catch((err) => {
            dispatch({ type: 'FETCH_EXAM_ERROR', data: err.Error, loading: true })
        })
    }
}

export const fetchStandardMarks = (obj) => {
    //dispatch({ type: 'FETCH_STUDENT_MARKS_LOADING', data: '', loading: true })
    return (dispatch) => {
        dispatch({ type: 'FETCH_STUDENT_MARKS_LOADING', data: '', loading: true })
        return axios.post('http://18.188.71.162:5002/fetch_student_marks',obj).then((res) => {
            dispatch({ type: 'FETCH_STUDENT_MARKS', data: res.data, loading: false })
        }).catch((err) => {
            dispatch({ type: 'FETCH_STUDENT_MARKS_ERROR', data: err, loading: true })
        })
    }
}

export const fetchSectionFilter = (obj) =>{
    return (dispatch) => {
        dispatch({ type: 'SECTION_FILTER_LOADING', data: '', loading: true })
        return axios.post('/fetch_section_comparison',obj).then((res) => {
            dispatch({ type: 'SECTION_FILTER', data: res.data, loading: false })
        }).catch((err) => {
            dispatch({ type: 'SECTION_FILTER_ERROR', data: err, loading: true })
        })
    }
}



export const fetchExamFilter = (obj) =>{
    return (dispatch) => {
        dispatch({ type: 'EXAM_FILTER_LOADING', data: '', loading: true })
        return axios.post('/fetch_student_exam_comparison',obj).then((res) => {
            dispatch({ type: 'EXAM_FILTER', data: res.data, loading: false })
        }).catch((err) => {
            dispatch({ type: 'EXAM_FILTER_ERROR', data: err, loading: true })
        })
    }
}