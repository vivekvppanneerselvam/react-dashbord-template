import React, { useState } from "react";
import BankDetails from './bankdetailsform'
import DrivingLicence from './drivinglicenceform'
import PersonalDetails from './personaldetailsform'
import VehicleDetails from './vehicledetailsform'

function AddDriver(props) {
    const [activeTab, setActiveTab] = useState('persnal')
    function onClickHandler(value) {
        setActiveTab(value)
    }
    return (
        <div class="container w3-animate-opacity">
            <div class="tab">
                <button class={'tablinks ' + (activeTab == 'personal') ? 'active' : ''} onClick={() => onClickHandler('personal')}>Personel Details</button>
                <button class={'tablinks ' + (activeTab == 'driving') ? 'active' : ''} onClick={() => onClickHandler('driving')}>Driving Licence</button>
                <button class={'tablinks ' + (activeTab == 'vehicle') ? 'active' : ''} onClick={() => onClickHandler('vehicle')}>Vehicle Details</button>
                <button class={'tablinks ' + (activeTab == 'bank') ? 'active' : ''} onClick={() => onClickHandler('bank')}>Bank Details</button>
            </div>
            <div id="personal" class={'tabcontent '} style={{ display: (activeTab == 'personal') ? 'block' : 'none'  }}>
                <PersonalDetails />
            </div>
            <div id="driving" class={'tabcontent '} style={{ display: (activeTab == 'driving') ? 'block' : 'none'  }}>
                <DrivingLicence />
            </div>
            <div id="vehicle" class={'tabcontent '} style={{ display: (activeTab == 'vehicle') ? 'block' : 'none'  }}>
                <VehicleDetails />
            </div>
            <div id="bank" class={'tabcontent '} style={{ display: (activeTab == 'bank') ? 'block' : 'none'  }}>
                <BankDetails />
            </div>
            {/*  <div class="tab-select-outer">
                <select id="tab-select">
                    <option value="#tab01">Tab 1</option>
                    <option value="#tab02">Tab 2</option>
                    <option value="#tab03">Tab 3</option>
                    <option value="#tab04">Tab 4</option>
                    <option value="#tab05">Tab 5</option>
                </select>
            </div> */}



        </div >

    )
}

export default AddDriver