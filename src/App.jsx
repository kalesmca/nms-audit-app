import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from './containers/layout/layout-container';
import DashboardComponent from "./containers/dashboard/dashboardComponent";
import MemberListComponent from "./containers/memberlist/memberListComponent";
import MemberInfoComponent from "./containers/member/memberInfoComponent";
import NotFoundComponent from "./containers/not-found/NotFoundComponent";
import LoginComponent from "./containers/login/loginComponent";
import TransactionComponent from "./containers/transactions/transactionComponent";
import EventList from "./containers/event/eventList";
import TransactionListComponent from "./containers/transactionList/transactionListComponent";
import { PopupContext, EventContext } from './utils/context';
import './App.scss';
import { initUser, initEvent } from './constants/config';

export default () => {
  const [popupFlag, setPopupFlag] = useState(false);
  const [componentName, setComponentName] = useState("");
  const [user, setUser] = useState(initUser);
  const [event, setEvent] = useState(initEvent);

  return (
    <BrowserRouter >
      <PopupContext.Provider value={{ popupFlag, setPopupFlag, componentName, setComponentName, user, setUser }}>

        <EventContext.Provider value={{event, setEvent}}>
          <div className="w-100">
            <Routes>
              <Route path="/" element={<LayoutContainer />}>
                <Route index element={<LoginComponent />} />
                <Route path="dashboard" element={<DashboardComponent />} />
                <Route path="transaction" element={<TransactionComponent />} />
                <Route path="events" element={<EventList />} />
                <Route path="transaction-list" element={<TransactionListComponent />} />


                <Route path="member-list" element={<MemberListComponent />} />
                <Route path="member-info" element={<MemberInfoComponent />} />
                <Route path="*" element={<NotFoundComponent />} />
                

              </Route>
            </Routes>
            {/* <LayoutContainer /> */}
          </div>

        </EventContext.Provider>

      </PopupContext.Provider>
    </BrowserRouter>
  );
};

