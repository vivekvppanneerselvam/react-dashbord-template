import React from 'react'

function ServerConfig(props) {

    return (
        <div>
            <form class="col-md-12 col-lg-12 col-sm-12 form form-inline">
                <div class="col-md-6 col-lg-6 col-sm-6 formgroup form-group">
                    <label for="formInlineEmail" class="col-md-3 col-lg-3 col-sm-3 control-label">Host:</label>
                    <input placeholder="smtp.gmail.com" id="formInlineEmail"
                        class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div>
                <div class="col-md-6 col-lg-6 col-sm-6 formgroup form-group">
                    <label for="formInlineEmail" class="col-md-3 col-lg-3 col-sm-3 control-label">Port:</label>
                    <select placeholder="select" id="formInlineEmail" class="formcontrol form-control">
                        <option value="465">465</option><option value="587">587</option></select>
                </div><div class="col-md-6 col-lg-6 col-sm-6 formgroup form-group">
                    <label for="formInlineEmail" class="col-md-3 col-lg-3 col-sm-3 control-label">Secure:</label>
                    <span> true </span><span>  </span>
                </div><div class="col-md-6 col-lg-6 col-sm-6 formgroup form-group">
                    <label for="formInlineEmail" class="col-md-3 col-lg-3 col-sm-3 control-label">User Name:
                        </label><input placeholder="@gmail.com" id="formInlineEmail"
                        class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div>
                <div class="col-md-6 col-lg-6 col-sm-6 formgroup form-group">
                    <label for="formInlineEmail" class="col-md-3 col-lg-3 col-sm-3 control-label">Password:</label>
                    <input placeholder=" " type="Password" id="formInlineEmail" class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div></form>


            <form class="col-lg-12 col-md-12 col-sm-12 col-xs-12 formemail form-inline">
                <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group">
                    <label for="formInlineEmail" class="col-md-4 col-lg-4 col-sm-4 control-label">
                        Account Sid:</label>
                    <input placeholder="" type="text" id="formInlineEmail"
                        class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div>
                <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group">
                    <label for="formInlineName" class="col-md-4 col-lg-4 col-sm-4 control-label">Auth Token:
                            </label><input placeholder="" type="password" id="formInlineName"
                        class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div>
                <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group">
                    <label for="formInlineEmail" class="col-md-4 col-lg-4 col-sm-4 control-label">
                        MobileNo From:</label><input placeholder="" type="text" id="formInlineEmail"
                        class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" />
                </div><div class="form-group"></div></form>

            <form class="col-lg-12 col-md-12 col-sm-12 col-xs-12 formemail form-inline">
                <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group">
                    <label class="col-md-4 col-lg-4 col-sm-4 control-label">Cloud Name:</label>
                    <input placeholder="" type="text" class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div>
                <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group">
                    <label class="col-md-4 col-lg-4 col-sm-4 control-label">Api Key:</label>
                    <input placeholder="" type="text" class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" />
                </div>
                <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group">
                    <label class="col-md-4 col-lg-4 col-sm-4 control-label">Api Secret:</label>
                    <input placeholder="" type="Password"
                        class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div>
                <div class="form-group"></div></form>

        </div>

    )
}


export default ServerConfig