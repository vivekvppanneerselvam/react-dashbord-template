
import React from 'react';

function MobileConfig(props) {

    return (
        <form class="col-md-12 col-lg-12 col-sm-12 form form-inline">
            <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group">
                <label for="formInlineName" class="col-md-4 col-lg-4 col-sm-4  control-label">
                    <span>Cab Type</span></label>
                <select placeholder="select" id="formInlineName"
                    class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control">
                    <option value="Mini">Mini</option><option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option></select></div>
            <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group">
                <label for="formInlineName" class="col-md-4 col-lg-4 col-sm-4  control-label">
                    <span>Currency Symbol</span></label><input placeholder="" type="text" id="formInlineName" class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div>
            <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group"><label for="formInlineEmail" class="col-md-4 col-lg-4 col-sm-4 control-label">
                <span>Base Fare:</span></label><input placeholder="10" type="email" id="formInlineEmail" class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" />
            </div><div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group"><label for="formInlineName" class="col-md-4 col-lg-4 col-sm-4 control-label">
                <span>Fare Per Km:</span>
            </label><input placeholder="7" type="text" id="formInlineName" class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div>
            <div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group"><label for="formInlineEmail" class="col-md-4 col-lg-4 col-sm-4 control-label">
                <span>Fare Per Min:</span></label><input placeholder="2" id="formInlineEmail" class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" />
            </div><div class="col-md-12 col-lg-12 col-sm-12 formgroup form-group"><label for="formInlineName" class="col-md-4 col-lg-4 col-sm-4 control-label"><span>Driver Charges:</span>
            </label><input placeholder="20" type="text" id="formInlineName" class="col-md-8 col-lg-8 col-sm-8 formcontrol form-control" /></div></form>

    )
}

export default MobileConfig;