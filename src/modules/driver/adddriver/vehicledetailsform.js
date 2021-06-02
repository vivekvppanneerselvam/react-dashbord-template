
import React from 'react'

function VehicleDetails(props) {
    return (
        <div>
            <div class="panel panel-primary adddriverpanel">
                <div class="panel-body mainDiv">

                    <form class="form">
                        <div class="col-md-12 col-lg-12">
                            <div class="col-md-6 col-lg-6 col-sm-6 formdiv ">
                                <div>
                                    <label class="col-md-4 col-lg-4 col-sm-4 formlabel"> RC Owner Name:</label>
                                    <input class="col-md-8 col-lg-8 col-sm-8 formfield" name="RC_ownerName"
                                        type="text" placeholder="RC Owner Name" value="" />

                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-6 formdiv ">
                                <div>
                                    <label class="col-md-4 col-lg-4 col-sm-4 formlabel"> Rgd. RTO:</label>

                                    <input class="col-md-8 col-lg-8 col-sm-8 formfield" name="regNo"
                                        type="text" placeholder="Registered RTO" value="" />

                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-6 formdiv ">
                                <div><label class="col-md-4 col-lg-4 col-sm-4 formlabel"> Class Of Vehicle:</label>
                                    <input class="col-md-8 col-lg-8 col-sm-8 formfield" name="type" type="text"
                                        placeholder="class of vehicle" value="" />

                                </div></div>
                            <div class="col-md-6 col-lg-6 col-sm-6 formdiv ">
                                <div>
                                    <label class="col-md-4 col-lg-4 col-sm-4 formlabel"> Manufacturer:</label>
                                    <input class="col-md-8 col-lg-8 col-sm-8 formfield" name="company" type="text"
                                        placeholder="Manufacturer" value="" /></div>
                            </div>
                            <div class="row formdiv ">
                                <label class="col-md-2  formlabel">Vehicle Number:</label>
                                <input class="col-md-2 formcontrolst" name="state" placeholder="KA" value="" />
                                <span style={{ width: "0px" }}></span>
                                <input class="col-md-2 formcontrolsno" name="sno" placeholder="55" value="" />
                                <span style={{ width: "0px" }}></span>
                                <input class="col-md-2  formcontrolsc" name="div" placeholder="AS" value="" />
                                <span style={{ width: "0px" }}></span>
                                <input class="col-md-2  formcontrolvno" name="vehicleno" placeholder="1245" value="" />

                            </div>
                            <div class="col-md-6 col-lg-6 col-sm-6 formdiv " />
                            <label class="col-md-4 col-lg-4 col-sm-4 formlabel"> Vehicle Model:</label>
                            <input class="col-md-8 col-lg-8 col-sm-8 formfield" name="carModel" type="text" placeholder="Vehicle Model" value="" />


                        </div>
                    </form>


                    <div class="previewComponent">
                        <form class=""><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ marginTop: "20px;" }}>Insurance Certificate:</label>
                            <input class="col-lg-10 col-md-10 col-sm-10 col-xs-10 fileInput fileInputvehicle" type="file" /></div>
                            <button type="button" class="btn btn-default" style={{ border: "none" }}></button>
                        </form><div class="imgPreview col-md-offset-2 col-sm-offset-2 col-lg-offset-2">
                            <div class="previewText">Please select an Image for Preview
                                                </div></div></div><div class="previewComponent">
                        <form class=""><div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <label class="col-lg-2 col-md-2 col-sm-2 col-xs-2" style={{ marginTop: "20px;" }}>
                                Registration Certificate:</label>
                            <input class="col-lg-10 col-md-10 col-sm-10 col-xs-10 fileInput fileInputvehicle" type="file" />
                        </div><button type="button" class="btn btn-default" style={{ border: "none" }}>
                            </button></form><div class="imgPreview col-md-offset-2 col-sm-offset-2 col-lg-offset-2">
                            <div class="previewText">Please select an Image for Preview</div>
                        </div></div>
                </div>

            </div>
        </div >

    )
}

export default VehicleDetails

