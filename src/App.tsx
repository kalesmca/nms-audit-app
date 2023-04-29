import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from './containers/layout/layout-container';
import DashboardComponent from "./containers/dashboard/dashboardComponent";
import MemberListComponent from "./containers/memberlist/memberListComponent";
import MemberInfoComponent from "./containers/member/memberInfoComponent";
import NotFoundComponent from "./containers/not-found/NotFoundComponent";
import LoginComponent from "./containers/login/loginComponent";
import CreditComponent from "./containers/credit/creditComponent";
import DebitComponent from "./containers/debit/debitComponent";
import './App.scss';

export default () => {
  return (
    <BrowserRouter >
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
    </BrowserRouter>
  );
};

