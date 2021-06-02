import React from 'react'

function BankDetails(props) {
    return (
        <div>
            <div class="col-md-12 col-lg-12"><div class="formdiv "><div>
                <label class="col-md-4 col-lg-4 col-sm-4 formlabel">
                    <span>Account No:</span></label>
                <input class="col-md-8 col-lg-8 col-sm-8 formfield"
                    name="accountNo" type="text" placeholder="Account No" value="" />
            </div></div><div class="formdiv "><div>
                <label class="col-md-4 col-lg-4 col-sm-4 formlabel">
                    <span>Holder Name:</span></label>
                <input class="col-md-8 col-lg-8 col-sm-8 formfield"
                    name="holderName" type="text" placeholder="Holder Name" value="" /></div>
                </div><div class="formdiv "><div>
                    <label class="col-md-4 col-lg-4 col-sm-4 formlabel">
                        <span>IFSC:</span></label>
                    <input class="col-md-8 col-lg-8 col-sm-8 formfield" name="IFSC" type="text" placeholder="IFSC Code" value="" /></div>
                </div></div></div>

    )
}


export default BankDetails