import axios from 'axios'
import { history } from '../../app/helpers'
export const fetchDailyReport = () => {
    return (dispatch) => {
        dispatch({ type: 'DAILY_REPORT_LOADING', data: '', loading: true })
        return axios.get('http://3.12.230.237:5001/daily_report').then((res) => {
            dispatch({ type: 'DAILY_REPORT_SUCCESS', data: res.data.result, loading: false })
        }).catch((err) => {
            dispatch({ type: 'DAILY_REPORT_FAILURE', data: err.Error, loading: true })
        })
    }
}