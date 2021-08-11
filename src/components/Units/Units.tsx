import React, { useState } from 'react';
import { Route, Switch } from 'react-router';
import Sidebar from './sideBar/Sidebar';
import Unit1 from './Unit1/Unit1';
import './Units.sass'
const Units = ({ match }: { match: any }) => {
  const [sideBar, setSideBar] = useState(true);
  return (
    <div className="Units d-flex">
      <Sidebar setSideBar={setSideBar} sideBar={sideBar} />
      <div className="sideBarWidth"></div>
      <div className="Unidad w-100">
        <Switch>
          <Route path={`${match.path}/1`} component={Unit1} exact={true} />
        </Switch>
      </div>
    </div>
  )
}
export default Units
