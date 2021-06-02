import React, { useState, useEffect } from 'react'
import StudentForm from './component/form'
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css'
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css'
import { Chart } from "react-google-charts";
import { fetchStandardMarks, fetchSectionFilter, fetchExamFilter } from './store/action'
import { Map, List } from 'immutable'
import { connect } from 'react-redux'

function Student(props) {
    const [gridApi, setGridApi] = useState(null)
    const [sectionTwo, setSectionTwo] = useState('')
    const [studentName, setStudentName] = useState('')
    const [examTwo, setExamTwo] = useState('')
    const [highLevelData, setHighLevelData] = useState({ standard: '', batch: '', section: '', exam: '', exam2: '', section2: '' });
    const [studentChartData, setStudentChartData] = useState([]);
    const [examComparisonChart, setExamComparisonChart] = useState([]);
    const [sectionComparisonChart, setSectionComparisonChart] = useState({ section1: [], section2: [] });

    useEffect(() => {
        if (!props.exam_filter_loading) {
            let finalArr = [['Subjects', highLevelData.exam, examTwo]]
            console.log("fetchExamFilter", props.exam_filter.toJS())
            finalArr.push(['Maths', props.exam_filter.toJS()[highLevelData.exam].maths, props.exam_filter.toJS()[examTwo].maths])
            finalArr.push(['Tamil', props.exam_filter.toJS()[highLevelData.exam].tamil, props.exam_filter.toJS()[examTwo].tamil])
            finalArr.push(['English', props.exam_filter.toJS()[highLevelData.exam].english, props.exam_filter.toJS()[examTwo].english])
            finalArr.push(['Science', props.exam_filter.toJS()[highLevelData.exam].science, props.exam_filter.toJS()[examTwo].science])
            finalArr.push(['Social Science', props.exam_filter.toJS()[highLevelData.exam].socialScience, props.exam_filter.toJS()[examTwo].socialScience])
            console.log('setExamComparisonChart', finalArr)
            setExamComparisonChart(finalArr)
        }
        if (!props.section_filter_loading) {
            let section1Arr = [['Subject', 'Max', 'Min', 'Avg']]
            let section2Arr = [['Subject', 'Max', 'Min', 'Avg']]
            console.log("section_filter", props.section_filter.toJS())
            if (props.section_filter.toJS()[highLevelData.section] !== undefined) {
                section1Arr.push(['Tamil', props.section_filter.toJS()[highLevelData.section]['tamil'].max,
                    props.section_filter.toJS()[highLevelData.section]['tamil'].min,
                    props.section_filter.toJS()[highLevelData.section]['tamil'].avg
                ])
                section1Arr.push(['English', props.section_filter.toJS()[highLevelData.section]['english'].max,
                    props.section_filter.toJS()[highLevelData.section]['english'].min,
                    props.section_filter.toJS()[highLevelData.section]['english'].avg
                ])
                setSectionComparisonChart((prevState) => {
                    prevState.section1 = section1Arr
                    return ({ ...prevState })
                })
            }
            if (props.section_filter.toJS()[sectionTwo] !== undefined) {
                section2Arr.push(['Tamil', props.section_filter.toJS()[sectionTwo]['tamil'].max,
                    props.section_filter.toJS()[sectionTwo]['tamil'].min,
                    props.section_filter.toJS()[sectionTwo]['tamil'].avg
                ])
                section2Arr.push(['English', props.section_filter.toJS()[sectionTwo]['english'].max,
                    props.section_filter.toJS()[sectionTwo]['english'].min,
                    props.section_filter.toJS()[sectionTwo]['english'].avg
                ])
                setSectionComparisonChart((prevState) => {
                    prevState.section2 = section2Arr
                    return ({ ...prevState })
                })
            }

        }
    }, [props.exam_filter_loading, props.section_filter_loading])


    let gridOptions = {
        modules: AllCommunityModules,
        columnDefs: [
            /* { headerName: "Student ID", field: "student_id", width: 100 }, */
            { headerName: "Student Name", field: "student_name", width: 150 },
            {
                headerName: "Standard", width: 100,
                cellRendererFramework: function (params) {
                    let { data, colDef } = params
                    console.log('highLevelData.standard', highLevelData)
                    return <span>{highLevelData.standard}</span>
                }
            },
            {
                headerName: 'Batch', width: 100,
                cellRendererFramework: function (params) {
                    let { data, colDef } = params
                    return <span>{highLevelData.batch}</span>
                }
            },
            {
                headerName: "Section", width: 75,
                cellRendererFramework: function (params) {
                    let { data, colDef } = params
                    return <span>{highLevelData.section}</span>
                }
            },
            {
                headerName: 'Maths', width: 75,
                cellRendererFramework: function (params) {
                    let { data, colDef } = params
                    return <span>{data.subject.maths}</span>
                }
            },
            {
                headerName: 'Science', field: 'science', width: 75,
                cellRendererFramework: function (params) {
                    let { data, colDef } = params
                    return <span>{data.subject.science}</span>
                }
            },
            {
                headerName: 'Social Science', field: 'social_science', width: 75,
                cellRendererFramework: function (params) {
                    let { data, colDef } = params
                    return <span>{data.subject.social_science}</span>
                }
            },
            {
                headerName: 'Tamil', field: 'tamil', width: 75,
                cellRendererFramework: function (params) {
                    let { data, colDef } = params
                    return <span>{data.subject.tamil}</span>
                }
            },
            {
                headerName: 'English', field: 'english', width: 75,
                cellRendererFramework: function (params) {
                    let { data, colDef } = params
                    return <span>{data.subject.english}</span>
                }
            },

        ],
        rowSelection: 'single',
        rowData: [],
        defaultColDef: {
            editable: false,
            resizable: true,
            filter: true
        },
        context: { componentParent: this }
    }


    const onSubmitStudentForm = (obj) => {
        console.log("ha ha :::", obj)
        setHighLevelData((prevState) => {
            prevState.standard = obj.standard
            prevState.batch = obj.batch
            prevState.section = obj.section
            prevState.exam = obj.exam
            return ({ ...prevState })
        })

        props.fetchStandardMarks(obj)
    }
    function onSelectionChanged() {
        let finalArr = [['Subjects', highLevelData.exam]]
        var selectedRows = gridApi.getSelectedRows();
        setStudentName(selectedRows[0].student_name)
        console.log("onSelectionChanged", selectedRows)
        finalArr.push(['Maths', selectedRows[0].subject.maths])
        finalArr.push(['Tamil', selectedRows[0].subject.tamil])
        finalArr.push(['English', selectedRows[0].subject.english])
        finalArr.push(['Science', selectedRows[0].subject.science])
        finalArr.push(['Social Science', selectedRows[0].subject.socialScience])
        console.log('finalArr', finalArr)
        setStudentChartData(finalArr)
    }
    const onGridReady = (params) => {
        const { api, columnApi } = params
        api.sizeColumnsToFit();
        api.refreshCells()
        setGridApi(api);
    }
    const onClickSectionFilter = () => {
        if (highLevelData !== null) {
            if (highLevelData.exam !== '') {
                let obj = {
                    standard: highLevelData.standard,
                    batch: highLevelData.batch, section: highLevelData.section,
                    exam: highLevelData.exam, exam2: '', section2: sectionTwo
                }
                //setHighLevelData({...highLevelData, section2:sectionTwo})
                props.fetchSectionFilter(obj)
            }else{
                alert('Please check the high level mandatory fields, Exam filter should not be empty')
            }
        }
    }

    const onClickExamFilter = () => {
        if (highLevelData !== null && studentName !== '') {
            if (highLevelData.exam !== examTwo) {
                let obj = {
                    standard: highLevelData.standard,
                    batch: highLevelData.batch, section: highLevelData.section,
                    exam: highLevelData.exam, exam2: examTwo, studentName: studentName
                }
                props.fetchExamFilter(obj)
            } else {
                alert("both exam filter could not be same")
            }
        } else {
            alert("Please select or click on any student from table to do exam comparison filter")
        }
    }

    const onChangeData = (obj) => {  
        console.log(obj)
        setHighLevelData((prevState) => {
            prevState.standard = obj.standard
            prevState.batch = obj.batch
            prevState.section = obj.section
            prevState.exam = obj.exam
            return ({ ...prevState })
        })
    
        //setHighLevelData({...highLevelData, [id]:value})
    }

    return (
        <div>
            <StudentForm onSubmitStudentForm={onSubmitStudentForm} onChangeData={onChangeData} />
            <div className="tabbable-panel">
                <div className="tabbable-line">
                    <ul className="nav nav-tabs ">
                        <li><a href="#tab_default_1" data-toggle="tab" className='active'>Student List & Exam Comparison</a></li>
                        <li><a href="#tab_default_2" data-toggle="tab">Section Comparison</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tab_default_1">
                            <div className={'row'}>
                                <div className={'col-md-12'}>
                                    <h6>Students Mark List</h6>
                                    <div className="ag-theme-balham" style={{ height: '275px' }}>
                                        <AgGridReact
                                            modules={AllCommunityModules}
                                            columnDefs={gridOptions.columnDefs}
                                            rowData={(!props.student_marks_loading) ? props.student_marks.toJS() : []}
                                            onGridReady={onGridReady}
                                            pagination={true}
                                            context={gridOptions.context}
                                            defaultColDef={gridOptions.defaultColDef}
                                            gridOptions={gridOptions}
                                            rowSelection={gridOptions.rowSelection}
                                            onSelectionChanged={onSelectionChanged}
                                        >
                                        </AgGridReact>
                                    </div>
                                </div>
                            </div><br />
                            <div className={'row'}>
                                <div className={'col-md-6'}>
                                    <Chart
                                        chartType="ColumnChart"
                                        loader={<div>Loading Chart</div>}
                                        data={studentChartData}
                                        options={{
                                            title: 'Student Marks Info',
                                            'chartArea': {
                                                'left': '20',
                                                'top': '20', 'right': '100', 'bottom': '50',
                                                'width': '100%', 'height': '100%'
                                            },
                                            hAxis: {
                                                title: 'Subject',
                                                minValue: 0,
                                            },
                                            vAxis: {
                                                title: 'Mark',
                                            },
                                        }}
                                        legendToggle
                                    />
                                </div>
                                <div className={'col-md-6'}>
                                    <h6>Exam Comparsion Chart</h6>
                                    <div className="form-group row">
                                        <label for="exam_name" className="col-sm-4 col-form-label">Exam Type</label>
                                        <div className="col-sm-6">
                                            <select className="form-control rounded-0" id="exam_name" value={examTwo} onChange={e => setExamTwo(e.target.value)}>
                                                <option value={''}>Select</option>
                                                {!props.exam_loading && props.exam.toJS().map((item) => {
                                                    if (item.exam_name !== highLevelData.exam)
                                                        return <option value={item.exam_name}>{item.exam_name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <button className={'btn btn-sm btn-primary rounded-0'} onClick={onClickExamFilter}>Apply</button>
                                    </div>

                                    <Chart
                                        chartType="ColumnChart"
                                        loader={<div>Loading Chart</div>}
                                        data={examComparisonChart}
                                        options={{
                                            title: 'Test Comparison info',
                                            'chartArea': {
                                                'left': '20',
                                                'top': '20', 'right': '100', 'bottom': '50',
                                                'width': '100%', 'height': '100%'
                                            },
                                            hAxis: {
                                                title: 'Subject',
                                                minValue: 0,
                                            },
                                            vAxis: {
                                                title: 'Mark',
                                            },
                                        }}
                                        legendToggle
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tab_default_2">
                            <h6>Section Comparison Chart</h6>
                            <div className="form-group row">
                                <label for="section" className="col-sm-1 col-form-label">Section</label>
                                <div className="col-sm-2">
                                    <select className="form-control rounded-0" id="section" value={sectionTwo} onChange={e => setSectionTwo(e.target.value)} >
                                        <option value={''}>Select</option>
                                        {!props.section_loading && props.section.toJS().map((item) => {
                                            if (item.section !== highLevelData.section)
                                                return <option value={item.section}>{item.section}</option>
                                        })}
                                    </select>
                                </div>
                                <button className={'btn btn-sm btn-primary rounded-0'} onClick={onClickSectionFilter}>Apply</button>
                            </div>
                            <div className={'row'}>
                                <div className={'col-md-6'} >
                                    <Chart chartType="ColumnChart" loader={<div>Loading Chart</div>} data={sectionComparisonChart.section1}
                                        options={{
                                            title: highLevelData.standard + ' - ' + highLevelData.section,
                                            'chartArea': {
                                                'left': '20',
                                                'top': '20', 'right': '100', 'bottom': '50',
                                                'width': '100%', 'height': '100%'
                                            },
                                            hAxis: {
                                                title: 'Subject',
                                                minValue: 0,
                                            },
                                            vAxis: {
                                                title: 'Score',
                                            },
                                        }}
                                        legendToggle
                                    />
                                </div>
                                <div className={'col-md-6'} >
                                    <Chart chartType="ColumnChart" loader={<div>Loading Chart</div>} data={sectionComparisonChart.section2}
                                        options={{
                                            title: highLevelData.standard + ' - ' + sectionTwo,
                                            'chartArea': {
                                                'left': '20',
                                                'top': '20', 'right': '100', 'bottom': '50',
                                                'width': '100%', 'height': '100%'
                                            },
                                            hAxis: {
                                                title: 'Subject',
                                                minValue: 0,
                                            },
                                            vAxis: {
                                                title: 'Score',
                                            },
                                        }}
                                        legendToggle
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )

}

const mapStateToProps = (state) => {
    //console.log(state)
    return {
        student_marks: state.StudentReducer.getIn(['student_marks', 'data'], List()),
        student_marks_loading: state.StudentReducer.getIn(['student_marks', 'loading'], true),
        section: state.StudentReducer.getIn(['section', 'data'], List()),
        section_loading: state.StudentReducer.getIn(['section', 'loading'], true),
        exam: state.StudentReducer.getIn(['exam', 'data'], List()),
        exam_loading: state.StudentReducer.getIn(['exam', 'loading'], true),
        exam_filter_loading: state.StudentReducer.getIn(['exam_filter', 'loading'], true),
        exam_filter: state.StudentReducer.getIn(['exam_filter', 'data'], List()),
        section_filter_loading: state.StudentReducer.getIn(['section_filter', 'loading'], true),
        section_filter: state.StudentReducer.getIn(['section_filter', 'data'], List())
    }
}

export default connect(mapStateToProps, { fetchStandardMarks, fetchSectionFilter, fetchExamFilter })(Student)