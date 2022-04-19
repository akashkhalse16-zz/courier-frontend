import { Component } from "react";

import AdminLTE, {
  Sidebar,
  Content,
  Row,
  Col,
  Box,
  Button,
} from "adminlte-2-react";

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
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
                title="My first box"
                type="primary"
                closable
                collapsable
                footer={<Button type="danger" text="Danger Button" />}
              >
                Track
              </Box>
            </Col>
          </Row>
        </Content>
      </>
    );
  }
}

export default Track;
