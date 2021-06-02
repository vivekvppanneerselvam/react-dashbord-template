import React, { useState } from 'react'
import { logout } from '../login/action'
import { connect } from 'react-redux'
import Header from './header'
import SideNavbar from './sidenavbar'


function Dashboard(props) {
    const [isToggled, setIsToggled] = useState(true)
    function handleToggleSideBar() {
        setIsToggled(!isToggled)
    };
    function logout() {
        props.logout();
    }
    return (
        <div className={'nav-fixed '} /* sidenav-toggled */>
            <Header />
            <SideNavbar />
            
        </div>
    )
}

export default connect(null, { logout })(Dashboard)