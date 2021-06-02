import React from 'react'

function DrivingLicence(props) {
    return (
        <div>
            <div class="panel panel-primary adddriverpanel">
                <div class="panel-body" style={{ height: "20%", overflow: "scroll" }}>
                    <form class="form"><div class="col-md-12 col-lg-12">
                        <div class="formdiv "><div>
                            <label class="col-md-4 col-lg-4 col-sm-4 formlabel">
                                <span>License#:</span></label>
                            <input class="col-md-8 col-lg-8 col-sm-8 formfield" name="licenceNo"
                                type="text" placeholder="Licence No" value="" />
                        </div></div>
                        <div class="formdiv ">
                            <label class="col-md-4 col-lg-4 col-sm-4 formlabel">
                                <span>Issue Date:</span></label>
                            <span class="col-md-8 span1">
                                <span style={{ width: "0px" }}></span>
                                <input class="col-md-2  formcontroldd" name="month" placeholder="MM" value="" />
                                <span style={{ width: "0px" }}></span>
                                <input class="col-md-2 formcontrolmm" name="date" placeholder="DD"
                                    value="" />
                                <span style={{ width: "0px" }} ></span>
                                <input class="col-md-2  formcontrolyy" name="year"
                                    placeholder="YYYY" value="" />
                            </span>
                        </div>
                        <div class="formdiv "><label class="col-md-4 col-lg-4 col-sm-4 formlabel">
                            <span>Exp Date:</span></label>
                            <span class="col-md-8 span1">
                                <span style={{ width: "0px" }}></span>
                                <input class="col-md-2  formcontroldd" name="month" placeholder="MM" value="" />
                                <span style={{ width: "0px" }}></span>
                                <input class="col-md-2 formcontrolmm" name="date" placeholder="DD"
                                    value="" />
                                <span style={{ width: "0px" }} ></span>
                                <input class="col-md-2  formcontrolyy" name="year"
                                    placeholder="YYYY" value="" />
                            </span>
                        </div></div></form>
                    <div class="previewComponent"><form class=""><div
                        class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label class="col-lg-4 col-md-4 col-sm-4 col-xs-4" style={{ marginTop: "10px" }}>
                            Licence Certificate:</label>
                        <input class="col-lg-8 col-md-8 col-sm-8 col-xs-8 fileInput fileInputLicence"
                            type="file" /></div><button type="button" class="btn btn-default" style={{ border: "none" }}>
                        </button></form>
                        <div class="imgPreview1 col-md-offset-4 col-sm-offset-4 col-lg-offset-4">
                            <div class="previewText">Please select an Image for Preview</div></div>
                    </div><div class="previewComponent"><form class="">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label class="col-lg-4 col-md-4 col-sm-4 col-xs-4"
                                style={{ marginTop: "10px" }}>Carriage permit:</label>
                            <input class="col-lg-8 col-md-8 col-sm-8 col-xs-8 fileInput 
                                                                     fileInputLicence" type="file" /></div>
                        <button type="button" class="btn btn-default"
                            style={{ border: "none" }}></button></form>
                        <div class="imgPreview1 col-md-offset-4 col-sm-offset-4
                                                                       col-lg-offset-4"><div class="previewText">
                                Please select an Image for Preview</div></div></div>
                </div></div>
        </div>
    )
}

export default DrivingLicence

