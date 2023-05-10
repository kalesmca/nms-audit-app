import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from './containers/layout/layout-container';
import DashboardComponent from "./containers/dashboard/dashboardComponent";
import MemberListComponent from "./containers/memberlist/memberListComponent";
import MemberInfoComponent from "./containers/member/memberInfoComponent";
import NotFoundComponent from "./containers/not-found/NotFoundComponent";
import LoginComponent from "./containers/login/loginComponent";
import CreditComponent from "./containers/credit/creditComponent";
import DebitComponent from "./containers/debit/debitComponent";
import { PopupContext } from './utils/context';
import './App.scss';
import {initUser} from './constants/config';

export default () => {
  const [popupFlag, setPopupFlag] = useState(false);
  const [componentName, setComponentName] = useState("");
  const [user, setUser] = useState(initUser);

  return (
    <BrowserRouter >
      <PopupContext.Provider value={{ popupFlag, setPopupFlag, componentName, setComponentName, user, setUser }}>


        <div className="w-100">
          <Routes>
            <Route path="/" element={<LayoutContainer />}>
              <Route index element={<LoginComponent />} />
              <Route path="dashboard" element={<DashboardComponent />} />
              <Route path="credit" element={<CreditComponent />} />
              <Route path="debit" element={<DebitComponent />} />

              <Route path="member-list" element={<MemberListComponent />} />
              <Route path="member-info" element={<MemberInfoComponent />} />
              <Route path="*" element={<NotFoundComponent />} />
            </Route>
          </Routes>
          {/* <LayoutContainer /> */}
        </div>
      </PopupContext.Provider>
    </BrowserRouter>
  );
};

