import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {fetchAssignmentDocs, downloadDoc} from './action'
import { Map, List } from 'immutable'
function Form(props) {
    const[doc, setDoc] = useState('')

    useEffect(()=>{
        props.fetchAssignmentDocs()
    },[])

    useEffect(()=>{
        if(!props.assignment_docs_loading){
            console.log(props.assignment_docs.toJS())
        }
    },[props.assignment_docs_loading])

    function downloadAssignmentDoc(){
        props.downloadDoc(doc)
    }

    const onChangeHandler =(evt)=>{
        let id=evt.target.id, value =evt.target.value
        setDoc(value)
    }

    return (<div>
        <div class="card">
            <div class="card-body" style={{ textAlign: 'left' }}>
                <h4 style={{ textAlign: 'center' }}>Assignment Name: {props.assignment.assignment_name}</h4>
                <div className={'row'}>
                    <div className={'col-md-3'}>Standard : {props.assignment.course}</div>
                    <div className={'col-md-3'}>Year/Batch : {props.assignment.batch}</div>
                    <div className={'col-md-3'}>Faculty Name: {props.assignment.faculty}</div>
                    <div className={'col-md-3'}>Reviewer: {props.assignment.reviewer}</div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-3'}>Subject : {props.assignment.subject}</div>
                    <div className={'col-md-3'}>Chapter : {props.assignment.chapter_name}</div>
                    <div className={'col-md-3'}>Lesson : {props.assignment.lesson_name}</div>
                    <div className={'col-md-3'}>Assignment Type: {props.assignment.assignment_type}</div>
                </div>
                <div className={'row'}>
                    <div className={'col-md-3'}>Document: {props.assignment.datas_fname}</div>
                    <div className={'col-md-3'}>Assignment Issued Date: {props.assignment.issued_date}</div>
                    <div className={'col-md-3'}>Submission Date: {props.assignment.submission_date}</div>
                </div>
                <div className={'row'} >
                    <div className={'col-md-3'}>Marks: {props.assignment.marks}</div>
                    <div className={'col-md-3'}>
                        <select className='form-control rounded-0' value={doc} onChange={(e)=>onChangeHandler(e)}>
                            <option>Select Assignment</option>
                            {!props.assignment_docs_loading && 
                                 props.assignment_docs.toJS().map((e, key) => {
                                    return <option key={e.sl_no} value={e.datas_fname}>{e.datas_fname}</option>;
                                })
                            }
                        </select>
                    </div>
                    <button className={'btn btn-primary rounded-0'} onClick={downloadAssignmentDoc}>Download</button>&nbsp;
                    <button className={'btn btn-primary rounded-0'}>View</button>
                </div>
            </div>
        </div>
    </div>)   
}

function mapStateToProps(state) {
    return {
        assignment_docs_loading: state.AssignmentReducer.getIn(['assignment_docs', 'loading'], true),
        assignment_docs: state.AssignmentReducer.getIn(['assignment_docs', 'data'], List())
    }
}
export default connect(mapStateToProps, {fetchAssignmentDocs, downloadDoc})(Form)