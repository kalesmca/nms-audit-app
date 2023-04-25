import React from 'react';
// import HeaderComponent from './components/header';
// import SideBarComponent from './components/sidebar';
import "../../index.css";

import { Outlet, Link } from "react-router-dom";

const LayoutContainer = () => {
    return (
        <div>
            {/* <div>
                <HeaderComponent />

            </div>
            <div>
                <SideBarComponent />
            </div> */}
            <div className="app">
                <input type="checkbox" id="check" />
                <header className="header-container">
                    <label htmlFor="check" id="">
                        <i className="fas fa-bars" id="sidebar-btn"></i>
                    </label>
                    <div className="header-left">
                        <span><h3>NMS Sports Club</h3></span>

                    </div>
                    <div className="header-right">
                        <a className="logout-btn">logout</a>
                    </div>

                </header>

                <div className="sidebar">
                    {/* <center>
                        <div>Cockpit</div>
                    </center> */}
                    <nav>
                    
                        <div className='link'>
                            <i className="fas fa-home"></i>
                            <Link to="/">Dashboard</Link>
                        </div>
                        <div>
                        <i className="fas fa-address-card"></i>
                            <Link to="/member-list">User List</Link>
                        </div>
                        <div>
                            <i className="fas fa-chart-line"></i>
                            <Link to="/member-info">Create-User</Link>
                        </div>
                        
                    </nav>
{/*                     
                    <a href="#"><i class="fas fa-home"></i><span>Dashboard</span></a>
                    <a href="#"><i class="fas fa-address-card"></i><span>360 Feature</span></a>
                    <a href="#"><i class="fas fa-chart-line"></i><span>Customers</span></a>
                    <a href="#"><i class="fab fa-amazon-pay"></i><span>Drag</span></a>
                    <a href="#"><i class="fas fa-star"></i><span>List</span></a> */}
                </div>
               

                <div className="container">
                    <Outlet/>
                
            
      </div>


            </div>
        </div>
    )
}

export default LayoutContainer;