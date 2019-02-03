
import React , {PureComponent}from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Collapse,DatePicker,Steps, Icon } from 'antd';
import { Col, Row, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';
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

      <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="New Goal" key="1">
      <Form>
        <Row form>
          <Col md={7}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input type="text" name="email" id="exampleEmail"  />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="examplePassword">Worker</Label>
              <Input type="text" name="password" id="examplePassword"  />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Overview</Label>
          <Input type="textarea" name="address" id="exampleAddress" />
        </FormGroup>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleCity">Level</Label>
              <Input type="text" name="city" id="exampleCity"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">Goal Category</Label>
              <Input type="text" name="state" id="exampleState"/>
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
              <Label for="DateComplate">End date</Label>
              <DatePicker />           
          </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="DateFinish">Date finish</Label>
              <DatePicker />           
          </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="Submitted">Percent complate</Label>
              <Input type="text" name="state" id="Submitted"/>
            </FormGroup>  
          </Col>
        </Row>
      </Form>
      </Panel>
      <Panel header="Measurements" key="2">
      <TableLink />
      </Panel>
      <Panel header="Activities" key="3" >
      <TableLink2 />
      </Panel>
      <Panel header="Attachments" key="4" >
      <Uploads />
      </Panel>
    </Collapse>
    </React.Fragment>
    )
  }
}

          