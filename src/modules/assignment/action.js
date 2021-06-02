import axios from 'axios'

export const fetchAssignments = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_ASSIGNMENT_LOADING', data: '', loading: true })
        return axios.get('http://3.12.230.237:5000/assignment').then((res) => {
            dispatch({ type: 'FETCH_ASSIGNMENT', data: res.data.result, loading: false })
        }).catch((err) => {
            dispatch({ type: 'FETCH_ASSIGNMENT_ERROR', data: err.Error, loading: true })
        })
    }
}

export const fetchAssignmentDocs = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_ASSIGNMENT_DOCS_LOADING', data: '', loading: true })
        return axios.get('http://18.188.71.162:5000/assignment_document').then((res) => {
            dispatch({ type: 'FETCH_ASSIGNMENT_DOCS', data: res.data.result, loading: false })
        }).catch((err) => {
            dispatch({ type: 'FETCH_ASSIGNMENT_DOCS_ERROR', data: err.Error, loading: true })
        })
    }
}

export const downloadDoc = (doc) => {
    return (dispatch) => {
        dispatch({ type: 'DOWNLOAD_DOC_LOADING', data: '', loading: true })
        return axios({
            url: 'http://18.188.71.162:5000/download-odoo?file=' +doc, //your url
            method: 'GET',
            responseType: 'blob', // important
        }).then((res) => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', doc); //or any other extension
            document.body.appendChild(link);
            link.click();
            dispatch({ type: 'DOWNLOAD_DOC', data: res.data.result, loading: false })
        }).catch((err) => {
            dispatch({ type: 'DOWNLOAD_DOCS_ERROR', data: err.Error, loading: true })
        })
    }
}