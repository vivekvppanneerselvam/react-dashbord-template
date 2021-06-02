import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchStandard, fetchBatch, fetchSection, fetchExam } from '../store/action'
import { Map, List } from 'immutable'

function StudentForm(props) {
	const [reqForm, setReqForm] = useState({ standard: '', batch: '', section: '', exam: '' })
	useEffect(() => {
		props.fetchStandard();
	}, [])

	const onChangeForm = (e) => {
		let id = e.target.id, value = e.target.value
		setReqForm((prevState) => {
			prevState[id] = value;
			return ({ ...prevState })
		});
		
		if (id === 'standard') {
			props.fetchBatch(reqForm)
			setReqForm((prevState) => {
				prevState['batch'] = '';
				prevState['section'] = '';
				prevState['exam'] = '';
				return ({ ...prevState })
			});
			
		} else if (id === 'batch') {
			props.fetchSection(reqForm)
			setReqForm((prevState) => {
				prevState['section'] = '';
				prevState['exam'] = '';
				return ({ ...prevState })
			});
			
		} else if (id === 'section') {
			props.onChangeData(reqForm)
			setReqForm((prevState) => {
				prevState['exam'] = '';
				return ({ ...prevState })
			});			
			props.fetchExam(reqForm)
		}

		//props.onChangeData(reqForm)
	}
	const onSubmit = () => {
		props.onSubmitStudentForm(reqForm)
	}
	return (
		<div>
			<fieldset className={'border'} ><legend>High level Filter</legend>
				<div class="row">
					<div class="form-group col-md-2">
						<label for="standard" class=" col-form-label">Standard*</label>
						<select class="form-control rounded-0" id="standard" value={reqForm.standard} onChange={(e) => onChangeForm(e)}>
							<option value={''}>Select</option>
							{!props.standard_loading && props.standard.toJS().map(item => <option value={item.standard}>{item.standard}</option>)}
						</select>
					</div>
					<div class="form-group col-md-2">
						<label for="batch" class=" col-form-label">Batch*</label>
						<div class="">
							<select class="form-control rounded-0" id="batch" value={reqForm.batch} onChange={(e) => onChangeForm(e)}>
								<option value={''}>Select</option>
								{!props.batch_loading && props.batch.toJS().map(item => <option value={item.batch}>{item.batch}</option>)}
							</select>
						</div>
					</div>
					<div class="form-group col-md-2">
						<label for="section" class=" col-form-label">Section*</label>
						<div class="">
							<select class="form-control rounded-0" id="section" value={reqForm.section} onChange={(e) => onChangeForm(e)}>
								<option value={''}>Select</option>
								{!props.section_loading && props.section.toJS().map(item => <option value={item.section}>{item.section}</option>)}
							</select>
						</div>
					</div>
					<div class="form-group col-md-2">
						<label for="exam_name" class=" col-form-label">Exam Type*</label>
						<div class="">
							<select class="form-control rounded-0" id="exam" value={reqForm.exam} onChange={(e) => onChangeForm(e)} >
								<option value={''}>Select</option>
								{!props.exam_loading && props.exam.toJS().map(item => <option value={item.exam_name}>{item.exam_name}</option>)}
							</select>
						</div>
					</div>
					<div className={'col-md-2'} style={{ padding: '20px' }}>
						<button className={'btn btn-sm btn-primary rounded-0'} onClick={onSubmit}>Apply</button>
					</div>
				</div>
			</fieldset>
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		standard: state.StudentReducer.getIn(['standard', 'data'], List()),
		standard_loading: state.StudentReducer.getIn(['standard', 'loading'], true),
		batch: state.StudentReducer.getIn(['batch', 'data'], List()),
		batch_loading: state.StudentReducer.getIn(['batch', 'loading'], true),
		section: state.StudentReducer.getIn(['section', 'data'], List()),
		section_loading: state.StudentReducer.getIn(['section', 'loading'], true),
		exam: state.StudentReducer.getIn(['exam', 'data'], List()),
		exam_loading: state.StudentReducer.getIn(['exam', 'loading'], true)
	}
}

export default connect(mapStateToProps, { fetchStandard, fetchBatch, fetchSection, fetchExam })(StudentForm)