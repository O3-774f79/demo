
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Modal, Button,DatePicker } from 'antd';
import { Form, FormGroup, Label, Input,Col } from 'reactstrap';
import ContentTemplate from './ContentTemplate'
export default class Modals extends React.Component {
  state = {
    loading: false,
    visible: false,
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  render() {
    const {  loading } = this.state;
    const { visibleParent,titleKey,titleName } =this.props
    return (
      <div>
        <Modal
          width	= {1000}
          style = {{left: 50}}
          visible={visibleParent}
          title={"New form  rating"}
          onOk={this.handleOk}
          onCancel={this.props.handleCancleShow}
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
         <ContentTemplate />
         <Form>
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>Performan period</Label>
          <Col sm={3}>
            <Input type="text" name="email" id="exampleEmail" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="examplePassword" sm={2}>Start date</Label>
          <Col sm={10}>
          <DatePicker  />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>End date</Label>
          <Col sm={10}>
          <DatePicker  />
          </Col>
        </FormGroup>
        </Form>
        </Modal>
      </div>
    );
  }
}
const styles ={
    Modal: {
        width: '900px'
    }
}        