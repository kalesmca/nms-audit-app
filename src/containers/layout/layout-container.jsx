import React, { useEffect, useContext } from 'react';
// import HeaderComponent from './components/header';
// import SideBarComponent from './components/sidebar';
import "../../index.css";
import ModalComponent from '../../components/modal/modalComponents';
import { PopupContext } from '../../utils/context';


import { Outlet, Link } from "react-router-dom";
import { auth } from '../../firebase-config';

const LayoutContainer = () => {
    const {popupFlag, setPopupFlag} = useContext(PopupContext)
    useEffect(()=>{
        console.log(auth?.currentUser?.photoURL);
        
    })
    return (
        <div>
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
               
                    {/* auth?.currentUser?.email === "kaleesmca1990@gmail.com" ?  */}
                    <div className="sidebar"> 

                        <nav>

                            <div className='link'>
                                <i className="fas fa-home"></i>
                                <Link to="/dashboard">Dashboard</Link>
                            </div>
                            <div>
                                <i className="fas fa-address-card"></i>
                                <Link to="/member-list">User List</Link>
                            </div>
                            <div>
                                <i className="fas fa-chart-line"></i>
                                <Link to="/member-info">Create-User</Link>
                            </div>
                            <div>
                                <i className="fas fa-chart-line"></i>
                                <Link to="/credit">Credit Amount</Link>
                            </div>
                            <div>
                                <i className="fas fa-chart-line"></i>
                                <Link to="/debit">Debit Amount</Link>
                            </div>

                            <div>
                                <i className="fas fa-chart-line"></i>
                                <Link to="/events">Events</Link>
                            </div>

                        </nav>

                    </div>
                
                <div className="container">
                    <div>
                    <ModalComponent showModal={popupFlag} close={setPopupFlag}/>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default LayoutContainer;