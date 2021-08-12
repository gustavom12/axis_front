import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Sidebar from './sideBar/Sidebar';
import Unit1 from './Unit1/Unit1';
import './Units.sass'
const Units = ({ match }: { match: any }) => {
  const [sideBar, setSideBar] = useState(false);
  // useEffect(() => {
  //   let navbar:any;
  //   setTimeout(() => {
  //     navbar = document.querySelector("nav")
  //     if (navbar)
  //       navbar.classList.add("fixedNavbar")
  //   }, 500)
  //   return () => navbar?.classList.remove("fixedNavbar")
  // }, [])
  return (
    <div className="Units d-flex">
      <Sidebar setSideBar={setSideBar} sideBar={sideBar} />
      <div className="sideBarWidth"></div>
      <div className="Unidad w-100">
        <Switch>
          <Route path={`${match.path}/1`} component={Unit1}  />
          <Redirect from="/*" to={`${match.path}/1`} />
        </Switch>
      </div>
    </div>
  )
}
export default Units
