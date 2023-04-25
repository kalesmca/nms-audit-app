import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutContainer from './containers/layout/layout-container';
import DashboardComponent from "./containers/dashboard/dashboardComponent";
import MemberListComponent from "./containers/memberlist/memberListComponent";
import MemberInfoComponent from "./containers/member-create-view/memberInfoComponent";
import NotFoundComponent from "./containers/not-found/NotFoundComponent";

import './index.css'

export default () => {
  return (
    <BrowserRouter >
      <div className="w-100">
      <Routes>
                        <Route path="/" element={<LayoutContainer />}>
                        <Route index element={<DashboardComponent />} />
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

