import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../home'
import Login from '../login'
import MobileConfig from '../mobileconfig'
import ServerConfig from '../serverconfig'
import AddDriver from '../driver/adddriver'
function SideNavbar(props) {
    return (
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sidenav shadow-right sidenav-light">
                    <div className="sidenav-menu">
                        <div className="nav accordion" id="accordionSidenav">
                            <div className="sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="/home"><div className="nav-link-icon"><i className={'fa fa-columns'}></i></div>
                                Dashboards
                            </a>
                            {/* <div className="collapse show" id="collapseDashboards" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
                                    <a className="nav-link active" href="index.html">Default</a><a className="nav-link" href="dashboard-2.html">Multipurpose<span className="badge badge-primary ml-2">New!</span></a><a className="nav-link" href="dashboard-3.html">Affiliate<span className="badge badge-primary ml-2">New!</span></a>
                                </nav>
                            </div> */}
                            <div className="sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="nav-link-icon"></div>
                                Driver
                                <div className="sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div></a>
                            <div className="collapse" id="collapseLayouts" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav accordion" id="accordionSidenavLayout">
                                    <a className="nav-link" href="layout-static.html">Overview</a>
                                    <a className="nav-link" href="layout-dark.html">Driver List</a>
                                    <a className="nav-link" href="/adddriver">Add New Driver</a>

                                    {/*  <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayoutsPageHeaders"
                                        aria-expanded="false" aria-controls="collapseLayoutsPageHeaders">Page Headers
                                        <div className="sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                                    </a> */}
                                    <div className="collapse" id="collapseLayoutsPageHeaders" data-parent="#accordionSidenavLayout">
                                        <nav className="sidenav-menu-nested nav">
                                            <a className="nav-link" href="header-simplified.html">Simplified</a>
                                            <a className="nav-link" href="header-overlap.html">Content Overlap</a>
                                            <a className="nav-link" href="header-breadcrumbs.html">Breadcrumbs</a>
                                            <a className="nav-link" href="header-light.html">Light</a></nav>
                                    </div>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseComponents" aria-expanded="false" aria-controls="collapseComponents">
                                <div className="nav-link-icon"></div>Customer
                                <div className="sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseComponents" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="alerts.html">Overview</a>
                                    {/*  <a className="nav-link" href="avatars.html">Avatars<span className="badge badge-primary ml-2">New!</span></a> */}
                                    <a className="nav-link" href="badges.html">Customer List</a>
                                    <a className="nav-link" href="buttons.html">Add New Customer</a>
                                    {/* <a className="nav-link" href="cards.html">Cards</a>
                                    <a className="nav-link" href="dropdowns.html">Dropdowns</a>
                                    <a className="nav-link" href="forms.html">Forms</a>
                                    <a className="nav-link" href="modals.html">Modals</a>
                                    <a className="nav-link" href="navigation.html">Navigation</a>
                                    <a className="nav-link" href="progress.html">Progress</a>
                                    <a className="nav-link" href="toasts.html">Toasts</a>
                                    <a className="nav-link" href="tooltips.html">Tooltips</a> */}
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse"
                                data-target="#collapseUtilities" aria-expanded="false" aria-controls="collapseUtilities">
                                <div className="nav-link-icon"></div>
                                Settings<div className="sidenav-collapse-arrow"><i className="fa fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseUtilities" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="/mobileconfig">Mobile Configuration</a>
                                    <a className="nav-link" href="/serverconfig">Server Configuration</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="javascript:void(0);" data-toggle="collapse" data-target="#collapseFlows" aria-expanded="false" aria-controls="collapseFlows">
                                <div className="nav-link-icon"></div>Administrative
                                <div className="sidenav-collapse-arrow"></div>
                            </a>
                            <div className="collapse" id="collapseFlows" data-parent="#accordionSidenav">
                                <nav className="sidenav-menu-nested nav">
                                    <a className="nav-link" href="multi-tenant-select.html">Multi-Tenant Registration</a></nav>
                            </div>
                            <div className="sidenav-menu-heading">Addons</div>
                            <a className="nav-link" href="charts.html"><div className="nav-link-icon"></div>Charts</a>
                            <a className="nav-link" href="tables.html"><div className="nav-link-icon"></div>Tables</a>
                        </div>
                    </div>
                    <div className="sidenav-footer">
                        <div className="sidenav-footer-content">
                            <div className="sidenav-footer-subtitle">Logged in as:</div>
                            <div className="sidenav-footer-title">Valerie Luna</div>
                        </div>
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <div className='container'>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/home" component={Home} />
                        <Route path="/mobileconfig" component={MobileConfig} />
                        <Route path="/serverconfig" component={ServerConfig} />
                        <Route path="/adddriver" component={AddDriver} />
                        {/* <Route path="/assignments" component={Assignment} />
                        <Route path='/dailyreport' component={DailyReport} /> */}
                    </Switch>
                </div>
                <footer className="footer mt-auto footer-light">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 small">Copyright © Your Website 2020</div>
                            <div className="col-md-6 text-md-right small">
                                <a href="#!">Privacy Policy</a>
                                ·
                                <a href="#!">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
export default SideNavbar