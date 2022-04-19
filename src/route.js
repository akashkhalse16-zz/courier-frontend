import * as React from "react";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Parcel from "./parcel/parcel";
import Report from "./report/report";
import Track from "./track/track";

function Routeconfig() {
  return (
      <Routes>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/parcels" component={Parcel} />
        <Route exact path="/reports" component={Report} />
        <Route exact path="/track" component={Track} />
      </Routes>
  );
}
export default Routeconfig;
