
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse,DatePicker } from 'antd';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import TableLink from './TableLink'
import Uploads from './Uploads'
const Panel = Collapse.Panel;

function callback(key) {
  console.log(key);
}
export default class  Contents  extends PureComponent{
  render(){
    return(
      <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="Test type" key="1">
      <Form>
        <Row form>
          <Col md={5}>
            <FormGroup>
              <Label for="exampleEmail">Test type</Label>
              <Input type="text" name="email" id="exampleEmail"  />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Input type="text" name="password" id="examplePassword"  />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
        <Col md={3}>
        <FormGroup>
          <Label for="exampleAddress">Score required to pass</Label>
          <Input type="text" name="address" id="exampleAddress" />
        </FormGroup>
        </Col>
        <Col md={3}>
        <FormGroup>
          <Label for="exampleAddress">Frequency</Label>
          <Input type="text" name="address" id="exampleAddress" />
        </FormGroup>
        </Col>
        </Row>
        <Row form>
        <Col md={3}>
        <FormGroup>
          <Label for="exampleAddress">every</Label>
          <Input type="text" name="address" id="exampleAddress" />
        </FormGroup>
        </Col>
        <Col md={3}>
        <FormGroup>
          <Label for="exampleAddress">Form the</Label>
          <Input type="text" name="address" id="exampleAddress" />
        </FormGroup>
        </Col>
        </Row>
      </Form>
      </Panel>
      {/* <Panel header="Note" key="2">
      <FormGroup>
          <Label for="exampleText">Note</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
      </Panel>
      <Panel header="Link" key="3" >
        <TableLink />
      </Panel>
      <Panel header="Attachments" key="4" >
      <Uploads />
      </Panel> */}
    </Collapse>
    )
  }
}

          