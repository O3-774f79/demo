
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse,DatePicker,Steps, Icon } from 'antd';
import { Col, Row, Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
import TableLink from './TableLink'
import TableLink2 from './TableLink2'
import Uploads from './Uploads'
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
      {/* <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="General" key="1"> */}
      <Form>
      <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">Name</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">Goal Group</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="ShereZip">Status</Label>
              <Input type="text" name="ShereZip" id="ShereZip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Row form>
          <Col md={3}>
            <FormGroup>
              <Label for="exampleCity">Start date</Label>
              <DatePicker />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="DateFinish">Date finish</Label>
              <DatePicker />           
          </FormGroup>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
      
    )
  }
}

          