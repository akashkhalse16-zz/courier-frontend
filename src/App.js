import logo from "./logo.svg";
import "./App.css";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
} from "adminlte-2-react";
import Routeconfig from './route';
import Dashboard from "./dashboard/dashboard";
import Parcel from "./parcel/parcel";
import Report from "./report/report";
import Track from "./track/track";
import NewParcel from "./parcel/new_parcel";

const { Item, Header, UserPanel, Searchbar } = Sidebar;

function App() {
  const sidebar = [
    <Item key="dashboard" text="Dashboard" to="/" icon="far-folder" />,
    <Item key="parcel" text="New Parcel" to="/new_parcel" icon="far-folder" />,
    <Item key="parcel" text="All Parcels" to="/parcels" icon="far-folder" />,
    <Item key="track" text="Track Parcel" to="/track" icon="far-folder" />,
    <Item key="report" text="Reports" to="/reports" icon="far-folder" />,
  ];

  return (
       <AdminLTE
        title={["Courier ", "Management"]}
        titleShort={["CR", "M"]}
        theme="blue"
        sidebar={sidebar}
        >
          <Dashboard exact path="/" />
          <Parcel exact path="/parcels" />
          <Report exact path="/reports" />
          <Track exact path="/track" />
          <NewParcel exact path="/new_parcel" />
      </AdminLTE>
  );
}

export default App;
