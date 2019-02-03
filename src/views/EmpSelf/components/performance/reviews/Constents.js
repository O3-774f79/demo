
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse,DatePicker,Icon,Steps } from 'antd';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Panel = Collapse.Panel;
const Step = Steps.Step;
function callback(key) {
  console.log(key);
}
export default class  Contents  extends PureComponent{
  render(){
    return(
      <React.Fragment>

        <Steps style={{marginBottom: 10}}>
          <Step
            style={{ color: "#00ff00" }}
            status="finish"
            title="User"
            icon={<Icon type="user" />}
          />
          <Step status="wait" title="Review" icon={<Icon type="solution" />} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>

      <Form>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleEmail">Review type</Label>
              <Input name="email" id="exampleEmail"  />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Description</Label>
              <Input  name="password" id="examplePassword" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
        <Col md={4}>
        <FormGroup>
          <Label for="exampleAddress">Performance period</Label>
          <Input type="text" name="address" id="exampleAddress" />
        </FormGroup>
        </Col>
        <Col md={4}>
        <FormGroup>
          <Label for="exampleAddress2">Worker</Label>
          <Input type="text" name="address2" id="exampleAddress2"/>
        </FormGroup>
        </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">Start date</Label>
              <DatePicker />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">End date</Label>
              <DatePicker />
            </FormGroup>
          </Col>
        </Row>
      </Form>
      </React.Fragment>
    )
  }
}

          