import React, { useState, useEffect } from 'react'
import { Map, List } from 'immutable'
import { connect } from 'react-redux'
import Form from './form'
import {fetchAssignments} from './action'
function Assignment(props){
    const [assignments, setAssignments] = useState([])
    useEffect(()=>{
        props.fetchAssignments();
    },[])
    useEffect(()=>{
        if(!props.assignment_loading){
            setAssignments(props.assignment.toJS())
        }
    },[props.assignment_loading])

    let assignment = [
        {
            name:'write poem',
            course_id:'LKG',
            batch_id:'LKG(2019-2020)',
            subject_id:'English',
            chapter_id:'Prose',
            lesson_id:'country man',
            document:'peacock-feathers-3617474__340.jpg',
            faculty_id:'Amita',
            reviewer:'Amita',
            assignment_type:'written',
            issued_date:'27 Apr 2020 09:00:50',
            submission_date:'28 Apr 2020 09:00:54',
            marks: '0'
        }
    ]
    return(<div>
        {assignments.map((item, idx) => {
                    return (<Form assignment={item} key={idx}/>)
        })}
    </div>)
}

const mapStateToProps =(state)=>{
    return{
        assignment_loading: state.AssignmentReducer.getIn(['assignment', 'loading'], false),
        assignment:  state.AssignmentReducer.getIn(['assignment','data'], List())
    }
}

const mapPropsToState = {
    fetchAssignments
}

export default connect(mapStateToProps, mapPropsToState)(Assignment)