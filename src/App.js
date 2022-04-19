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
import Dashboard from "./dashboard/dashboard";
import Parcel from "./parcel/parcel";
import Track from "./track/track";
import NewParcel from "./parcel/new_parcel";
import ViewParcel from "./parcel/view_parcel";
import UpdateParcel from "./parcel/update_parcel";

const { Item, Header, UserPanel, Searchbar } = Sidebar;

function App() {
  const sidebar = [
    <Item key="dashboard" text="Dashboard" to="/" icon="far-folder" />,
    <Item key="parcel" text="New Parcel" to="/new_parcel" icon="far-folder" />,
    <Item key="parcel" text="All Parcels" to="/parcels" icon="far-folder" />,
    <Item key="track" text="Track Parcel" to="/track" icon="far-folder" />,
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
          <Track exact path="/track" />
          <NewParcel exact path="/new_parcel" />
          <ViewParcel exact path="/parcel/:id" />
          <UpdateParcel exact path="/parcel/update/:id" />
      </AdminLTE>
  );
}

export default App;
