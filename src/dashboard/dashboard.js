import { Component } from "react";
import axios from 'axios';

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
  DataTable
} from "adminlte-2-react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    parcels: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/parcels`)
      .then(res => {
        const parcels = res.data;
        this.setState({ parcels });
      })
  }

  render() {
    if(!this.state.parcels || !this.state.parcels.length) 
      return;
    else
    return (
      <>
        <Content
          title="Dashboard"
          subTitle="Courier Dashboard"
          browserTitle="Dashboard"
        >
          <Row>
            <Col xs={12}>
              <Box
                title="Parcel Data"
                type="primary"
                // footer={<Button type="danger" text="Danger Button" />}
              >
                <table class="table table-striped table-bordered table-hover text-center">
                <thead class="thead-dark">
                  <tr>
                    <th>Sender Name</th>
                    <th>Sender Address</th>
                    <th>Sender Contact</th>
                    <th>Recipient Name</th>
                    <th>Recipient Address</th>
                    <th>Recipient Contact</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                {
                  this.state.parcels.map((p, i) => {
                    return(
                      <tr>
                        <td>{p.sender_name}</td>
                        <td>{p.sender_addr}</td>
                        <td>{p.sender_contact}</td>
                        <td>{p.recipient_name}</td>
                        <td>{p.recipient_addr}</td>
                        <td>{p.recipient_contact}</td>
                        <td style={{"color": "teal", "font-weight" : "900"}}>{p.status}</td>
                      </tr>
                      )
                    })
                  }
                  </tbody>
                  </table>
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default Dashboard;
