import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchDailyReport } from './action'
import { AgGridReact } from '@ag-grid-community/react';
import { AllCommunityModules } from '@ag-grid-community/all-modules'
import '@ag-grid-community/all-modules/dist/styles/ag-grid.css'
import '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css'
import { Map, List } from 'immutable'

function DailyReport(props) {
    const [gridApi, setGridApi] = useState(null)
    useEffect(() => {
        props.fetchDailyReport();
    }, [])


    let gridOptions = {
        modules: AllCommunityModules,
        columnDefs: [
            { headerName: 'sl_no', field: 'sl_no', width: 50, filter:false },
            { headerName: "correspondent_to_principal", field: "correspondent_to_principal", width: 100 },
            { headerName: "cumulative_balance", field: "cumulative_balance", width: 150 },
            { headerName: 'daily_transactions_balance_cash', field: 'daily_transactions_balance_cash', width: 75 },
            { headerName: 'date', field: 'date', width: 75, filter:false },
            { headerName: 'expenses_and_purchases', field: 'expenses_and_purchases', width: 75 },
            { headerName: 'fees', field: 'fees', width: 75 },
            { headerName: 'principal_to_correspondent', field: 'principal_to_correspondent', width: 75 }
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
    const onGridReady = (params) => {
        const { api, columnApi } = params
        api.sizeColumnsToFit();
        api.refreshCells()
        setGridApi(api);
    }
    return (<div>
        <div className="ag-theme-balham" style={{ height: '500px' }}>
            <h5>Daily Report</h5>
            <AgGridReact
                modules={AllCommunityModules}
                columnDefs={gridOptions.columnDefs}
                rowData={(!props.daily_report_loading) ? props.daily_report.toJS() : []}
                onGridReady={onGridReady}
                pagination={true}
                context={gridOptions.context}
                defaultColDef={gridOptions.defaultColDef}
                gridOptions={gridOptions}
                rowSelection={gridOptions.rowSelection}
                floatingFilter={true}
            >
            </AgGridReact>
        </div>
    </div>
    )
}
function mapStateToProps(state) {
    return {
        daily_report_loading: state.DailyReportReducer.getIn(['daily_report', 'loading'], false),
        daily_report: state.DailyReportReducer.getIn(['daily_report', 'data'], List())
    }
}
export default connect(mapStateToProps, { fetchDailyReport })(DailyReport)